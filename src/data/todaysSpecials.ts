import type { MenuCategory } from './menu';

const TODAYS_SPECIALS_URL =
  'https://food.lztechserve.com/api/public/todays-specials?slug=tasteofasia';

export type TodaysSpecialItem = {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  photoUrl: string;
  price: number;
  sellPrice: number;
  isRecommended: boolean;
  isSoldOut: boolean;
};

export type TodaysSpecialGroup = {
  id: string;
  name: string;
  nameEn: string;
  sortOrder: number;
  items: TodaysSpecialItem[];
};

type ApiItem = {
  id?: string;
  categoryId?: string;
  categoryName?: string;
  categoryNameEn?: string;
  categorySortOrder?: number;
  name?: string;
  nameEn?: string;
  description?: string;
  descriptionEn?: string;
  photoUrl?: string;
  price?: number;
  sellPrice?: number;
  isRecommended?: boolean;
  isSoldOut?: boolean;
};

export async function fetchTodaysSpecials(): Promise<TodaysSpecialGroup[]> {
  const response = await fetch(TODAYS_SPECIALS_URL);
  if (!response.ok) {
    throw new Error(`Today's specials request failed (${response.status})`);
  }
  const data = (await response.json()) as { items?: ApiItem[] };
  return groupTodaysSpecials(data.items ?? []);
}

export function groupTodaysSpecials(items: ApiItem[]): TodaysSpecialGroup[] {
  const groups = new Map<string, TodaysSpecialGroup>();

  for (const item of items) {
    const id = item.categoryId || item.categoryName || 'uncategorised';
    const existing = groups.get(id);
    const dish: TodaysSpecialItem = {
      id: item.id || `${id}-${existing?.items.length ?? 0}`,
      name: item.name || item.nameEn || '',
      nameEn: item.nameEn || '',
      description: item.description || '',
      descriptionEn: item.descriptionEn || '',
      photoUrl: item.photoUrl || '',
      price: Number(item.price) || 0,
      sellPrice: Number(item.sellPrice ?? item.price) || 0,
      isRecommended: !!item.isRecommended,
      isSoldOut: !!item.isSoldOut,
    };
    if (!existing) {
      groups.set(id, {
        id,
        name: item.categoryName || item.categoryNameEn || 'Specials',
        nameEn: item.categoryNameEn || '',
        sortOrder: item.categorySortOrder ?? 9999,
        items: [dish],
      });
    } else {
      existing.items.push(dish);
    }
  }

  return [...groups.values()]
    .filter((group) => group.items.length > 0)
    .sort((a, b) => a.sortOrder - b.sortOrder || a.name.localeCompare(b.name, 'zh'));
}

export function siteCategoryFor(group: TodaysSpecialGroup): MenuCategory | null {
  const label = `${group.name} ${group.nameEn}`.toLowerCase();
  if (label.includes('粤') || label.includes('cantonese')) return 'hongkong';
  if (label.includes('川') || label.includes('sichuan')) return 'sichuan';
  if (label.includes('点心') || label.includes('點心') || label.includes('dim sum')) return 'dimsum';
  if (label.includes('日') || label.includes('japanese')) return 'japanese';
  if (/饮|飲|drink|beverage/.test(label)) return 'drinks';
  return null;
}

export function groupMatchesFocus(group: TodaysSpecialGroup, focus: MenuCategory): boolean {
  return siteCategoryFor(group) === focus;
}
