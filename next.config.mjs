/** @type {import('next').NextConfig} */

// Routes that exist on the site today. A 301 is only emitted when its
// destination is in here, because a redirect into a 404 is strictly worse than
// the 404 it replaced: Google follows it, finds nothing, and now distrusts the
// redirect as well. Add a route here in the same commit that creates its page
// and its legacy paths below start pointing at it on the next deploy.
const LIVE_ROUTES = new Set([
  "/",
  "/portfolio",
  "/hillsborough",
  "/princeton",
  "/warren",
  "/franklin-park",
  "/monmouth-junction",
  "/monroe-township",
  "/privacy",
  "/review",
]);

// The paths the old WordPress site ranked for before it was replaced by this
// Next.js build on 27 February 2026. They have returned 404 ever since. The
// clicks and impressions in the comments are Search Console's figures for the
// twelve months to 22 November 2026, so almost all of them were earned in the
// three months before the cutover, not recently.
//
// Nine months of 404 means Google has long since dropped these URLs and most of
// what they ranked for. These redirects are not a recovery plan: they are here
// to catch the external links and bookmarks that still point at the old site,
// and to stop the 404 count growing. Treat the new pages as a fresh start that
// competes on today's demand, not as the old rankings coming back.
//
// Source: reports/redirects.csv, ordered by the impressions each path earned.
const LEGACY_PATHS = [
  ["/bathroom-remodeling-flemington",              "/flemington"],           //   1 click,  1151 impr
  ["/contact",                                     "/"],                     //   5 clicks,  736 impr
  ["/bathroom-remodeling-princeton",               "/princeton"],            //  37 clicks,  637 impr
  ["/finish-basement-princeton",                   "/princeton"],            //   0 clicks,  578 impr
  ["/finish-basement-warren",                      "/warren"],               //   0 clicks,  491 impr
  ["/kitchen-remodeling-morristown",               "/kitchen-remodeling"],   //   0 clicks,  463 impr
  ["/bathroom-remodeling-morristown",              "/bathroom-remodeling"],  //   0 clicks,  353 impr
  ["/bathroom-remodeling-hillsborough",            "/hillsborough"],         //   1 click,   329 impr
  ["/floor-installation-morristown",               "/floor-installation"],   //  19 clicks,  313 impr
  ["/kitchen-remodeling-flemington",               "/flemington"],           //   0 clicks,  312 impr
  ["/finish-basement-morristown",                  "/finish-basement"],      //   0 clicks,  303 impr
  ["/kitchen-remodeling-hillsborough",             "/hillsborough"],         //   3 clicks,  256 impr
  ["/about",                                       "/"],                     //   7 clicks,  180 impr
  ["/contact-us",                                  "/"],                     //   3 clicks,  176 impr
  ["/kitchen-remodeling-princeton",                "/princeton"],            //   0 clicks,  176 impr
  ["/floor-installation-princeton",                "/floor-installation"],   //   0 clicks,  168 impr
  ["/finish-basement-hillsborough",                "/hillsborough"],         //   4 clicks,  148 impr
  ["/kitchen-remodeling-warren",                   "/warren"],               //   0 clicks,  148 impr
  ["/blog",                                        "/"],                     //   4 clicks,  118 impr
  ["/remodeling-contractors-hillsborough",         "/hillsborough"],         //   1 click,   118 impr
  ["/remodeling-contractors-morristown",           "/"],                     //   1 click,   117 impr
  ["/finish-basement-flemington",                  "/flemington"],           //   0 clicks,   98 impr
  ["/remodeling-contractors-flemington",           "/flemington"],           //   0 clicks,   92 impr
  ["/bathroom-remodeling-warren",                  "/warren"],               //   1 click,    87 impr
  ["/carpentry-and-trim-work-flemington",          "/flemington"],           //   0 clicks,   76 impr
  ["/balusters-railings-instal-princeton",         "/princeton"],            //   0 clicks,   75 impr
  ["/carpentry-and-trim-work-princeton",           "/princeton"],            //   0 clicks,   75 impr
  ["/carpentry-and-trim-work-morristown",          "/"],                     //   0 clicks,   59 impr
  ["/floor-installation-hillsborough",             "/floor-installation"],   //   0 clicks,   34 impr
  ["/floor-installation-warren",                   "/floor-installation"],   //   0 clicks,   31 impr
  ["/balusters-railings-instal-hillsborough",      "/hillsborough"],         //   0 clicks,   29 impr
  ["/balusters-railings-instal-flemington",        "/flemington"],           //   0 clicks,   28 impr
  ["/carpentry-and-trim-work-hillsborough",        "/hillsborough"],         //   0 clicks,   26 impr
  ["/remodeling-contractors-warren",               "/warren"],               //   0 clicks,   24 impr
  ["/balusters-railings-instal",                   "/"],                     //   0 clicks,   21 impr
  ["/balusters-railings-instal-morristown",        "/"],                     //   0 clicks,   17 impr
  ["/floor-installation-flemington",               "/floor-installation"],   //   0 clicks,   17 impr
  ["/balusters-railings-instal-warren",            "/warren"],               //   0 clicks,   16 impr
  ["/remodeling-contractors-princeton",            "/princeton"],            //   0 clicks,   15 impr
  ["/carpentry-and-trim-work",                     "/"],                     //   0 clicks,   13 impr
  ["/how-long-does-it-take-to-remodel-a-bathroom", "/bathroom-remodeling"],  //   0 clicks,   12 impr
  ["/carpentry-and-trim-work-warren",              "/warren"],               //   0 clicks,   10 impr
];

// redirects.csv also lists /bathroom-remodeling, /kitchen-remodeling,
// /floor-installation and /finish-basement pointing at themselves. That is not a
// redirect — it is a note that those four slugs should be served again. They are
// absent here on purpose; a self-redirect is an infinite loop.

const nextConfig = {
  async headers() {
    return [
      {
        // /reports holds one-off client documents served straight out of
        // /public — Geza gets the link by text message. They are not pages of
        // the site: nothing links to them and they are not in the sitemap.
        // This header is what actually keeps them out of Google. Note that
        // disallowing /reports in robots.ts would BREAK that: a disallowed URL
        // is never fetched, so the noindex would never be read.
        source: "/reports/:path*",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" },
        ],
      },
    ];
  },

  async redirects() {
    return [
      // /morristown was a location page for a town Geza does not serve — it is
      // more than his one-hour drive, and he asked for it off on 27 August 2026
      // and again on 2 September. The page is deleted, but the URL has been
      // live and indexed, so it redirects rather than 404s: any link or ranking
      // it earned is passed to the homepage instead of thrown away.
      { source: "/morristown", destination: "/", permanent: true },
      // /landing used to be an internal status page. It went public with the
      // 10 September 2026 deploy and quoted Geza's full-bathroom price, which
      // he has ruled is never published. The page is deleted; the record of
      // what it said lives in docs/google-reviews.md. Not permanent, so the
      // path stays free if a second landing page ever needs it.
      { source: "/landing", destination: "/landing/bathroom", permanent: false },

      // statusCode: 301 rather than permanent: true, which Next.js serves as a
      // 308. Google treats the two the same, but every SEO audit tool reports
      // the literal code and the brief asks for 301, so there is nothing to
      // gain from making someone re-verify this later.
      ...LEGACY_PATHS.filter(([, destination]) =>
        LIVE_ROUTES.has(destination),
      ).map(([source, destination]) => ({
        source,
        destination,
        statusCode: 301,
      })),
    ];
  },
};

export default nextConfig;
