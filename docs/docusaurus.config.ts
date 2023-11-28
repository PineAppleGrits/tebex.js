import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  plugins: [
    [
      "docusaurus-plugin-typedoc",

      // Plugin / TypeDoc options
      {
        exclude: "./src/",
        entryPoints: ["../src/index.ts", "../src/types/index.d.ts", "../src/errors.ts"],
        tsconfig: "../tsconfig.json",
      },
    ],
  ],
  title: "Tebex.js",
  tagline: "The best Tebex API wrapper for Node.js",
  favicon: "img/TEBEXJS3.png",

  // Set the production url of your site here
  url: "https://tebexjs.ginos.codes",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "PineAppleGrits", // Usually your GitHub org/user name.
  projectName: "tebex.js", // Usually your repo name.

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/", // Serve the docs at the site's root
          sidebarPath: "./sidebars.ts",
        },
        blog: false, // Optional: disable the blog plugin
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/TEBEXJS3.png",
    navbar: {
      title: "Tebex.js",
      logo: {
        alt: "Tebex logo",
        src: "img/TEBEXJS3.png",
        href: "/api",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Documentation",
        },
        {
          href: "https://github.com/PineAppleGrits/tebex.js",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Intro",
              to: "/api",
            },
            {
              label: "API",
              to: "/api/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/PineAppleGrits/tebex.js",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Tebex.js, Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
