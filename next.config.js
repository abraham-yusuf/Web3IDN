const { createMDX } = require("fumadocs-mdx/next");

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects() {
    const redirects = [
      {
        source: "/invite",
        destination: "https://www.web30.my.id",
        permanent: false,
      },
      {
        source: "/i",
        destination: "https://www.web30.my.id",
        permanent: false,
      },
      {
        source: "/link",
        destination: "https://www.web30.my.id",
        permanent: false,
      },
      {
        source: "/discord",
        destination: "https://discord.gg/aDaDw7DkYU",
        permanent: false,
      },
      {
        source: "/support",
        destination: "https://www.patreon.com/Web3ID",
        permanent: false,
      },
      {
        source: "/tos",
        destination: "/terms",
        permanent: false,
      },
      {
        source: "/docs/intro",
        destination: "/docs/",
        permanent: true,
      },
      {
        source: "/rules",
        destination: "https://hackmd.io/@",
        permanent: false,
      },
      {
        source: "/github",
        destination: "https://github.com/Web3ID/web3id",
        permanent: false,
      },
      {
        source: "/index",
        destination: "/",
        permanent: true,
      },
    ];

    for (const redirect of redirects) {
      if (!redirect.source.endsWith("/") && redirect.source.startsWith("/"))
        redirects.push({
          ...redirect,
          source: `${redirect.source}/`,
        });
    }

    return redirects;
  },
};

module.exports = withMDX(nextConfig);
