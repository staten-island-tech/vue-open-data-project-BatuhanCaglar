export const evictionData = {
  bkevicts: [],
  bxevicts: [],
  sievicts: [],
  quevicts: [],
  mhevicts: [],
}

export function setEvictionData(evictions) {
  evictionData.bkevicts = evictions.filter((e) => e.borough === 'BROOKLYN')
  evictionData.bxevicts = evictions.filter((e) => e.borough === 'BRONX')
  evictionData.sievicts = evictions.filter((e) => e.borough === 'STATEN ISLAND')
  evictionData.quevicts = evictions.filter((e) => e.borough === 'QUEENS')
  evictionData.mhevicts = evictions.filter((e) => e.borough === 'MANHATTAN')
}
