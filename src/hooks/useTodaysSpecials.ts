import { useEffect, useState } from 'react';
import { fetchTodaysSpecials, siteCategoryFor, type TodaysSpecialGroup } from '../data/todaysSpecials';

export type TodaysSpecialsStatus = 'loading' | 'ready' | 'error';

export function useTodaysSpecials() {
  const [groups, setGroups] = useState<TodaysSpecialGroup[]>([]);
  const [status, setStatus] = useState<TodaysSpecialsStatus>('loading');

  useEffect(() => {
    let cancelled = false;
    fetchTodaysSpecials()
      .then((next) => {
        if (cancelled) return;
        setGroups(next.filter((group) => siteCategoryFor(group)));
        setStatus('ready');
      })
      .catch(() => {
        if (!cancelled) setStatus('error');
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return { groups, status };
}
