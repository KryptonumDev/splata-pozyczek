// Ad click IDs (Google, Meta, Microsoft, TikTok) and utm_medium values that mean paid traffic.
// `ads` is our own marker (?ads=1 in the ads' Final URL): tracking-param strippers (uBlock URL
// tracking list, ClearURLs, Brave, Safari) remove gclid/utm_* before the request, but not this.
const AD_CLICK_IDS = ['ads', 'gclid', 'gbraid', 'wbraid', 'fbclid', 'msclkid', 'ttclid']
const PAID_MEDIUM = /^(cpc|ppc|paid|paid[-_]?social|ads?|display|cpm)$/i
// Ad platforms review the landing page with crawlers that carry no click ID; bouncing them
// would show the reviewer a different page than users get (looks like cloaking).
const CRAWLER = /bot|crawler|spider|AdsBot|Mediapartners|facebookexternalhit|meta-externalagent/i

// True if this visit came from an ad. Checks the URL directly (onRouteUpdate may not have
// stored it yet on first load) and sessionStorage (saveCampaignIntoSession keeps the params
// for the rest of the session, so internal navigation back to the LP still counts).
export const isAdVisit = () => {
  if (CRAWLER.test(navigator.userAgent)) return true

  const params = new URLSearchParams(window.location.search)
  const get = (key) => params.get(key) || sessionStorage.getItem(key)

  return AD_CLICK_IDS.some((key) => get(key)) || PAID_MEDIUM.test(get('utm_medium') || '')
}
