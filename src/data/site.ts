export const siteBrand = {
  name: 'Taste Of Asia',
  tagline: 'Fine Asian Dining',
  logoPrimary: 'Taste Of',
  logoAccent: 'Asia',
} as const;

export const siteContact = {
  address: '96B Omni Park Shopping Centre, Santry, Dublin, D09 ECX6',
  hours: 'Daily — 11:00 am to 10:00 pm',
  email: 'booking@tasteofasia.ie',
  phone: '+353 1 234 5678',
  mapQuery: '96B Omni Park Shopping Centre, Santry, Dublin, D09 ECX6, Ireland',
} as const;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(siteContact.mapQuery)}&t=m&z=15&output=embed&iwloc=near`;
