export const siteBrand = {
  name: 'Taste Of Asia',
  tagline: 'Fine Asian Dining',
  logoPrimary: 'Taste Of',
  logoAccent: 'Asia',
} as const;

export const siteContact = {
  address: '96B Omni Park Shopping Centre, Santry, Dublin, D09 ECX6',
  hours: 'Daily — 12:00 pm to 10:00 pm · Last order 9:30 pm',
  email: 'booking@tasteofasia.ie',
  landline: { label: 'Landline', display: '01 688 8888', tel: '+35316888888' },
  mobile: { label: 'Mobile', display: '087 688 6611', tel: '+353876886611' },
  mapQuery: '96B Omni Park Shopping Centre, Santry, Dublin, D09 ECX6, Ireland',
} as const;

export const sitePhones = [siteContact.landline, siteContact.mobile] as const;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(siteContact.mapQuery)}&t=m&z=15&output=embed&iwloc=near`;
