/** @type {import('next').NextConfig} */
const nextConfig = {
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
    ];
  },
};

export default nextConfig;
