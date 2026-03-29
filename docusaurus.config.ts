import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "OSG UK Tech",
  tagline: "From zero programming knowledge to interview-ready in 8 lessons.",
  favicon: "img/favicons/favicon.ico",

  future: {
    v4: true,
  },

  url: "https://OSG-UK-Tech-Resources.github.io",
  baseUrl: "/osg-tech-curriculum-docs/",

  organizationName: "OSG-UK-Tech-Resources",
  projectName: "osg-tech-curriculum-docs",

  trailingSlash: false,

  onBrokenLinks: "throw",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: false,
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "OSG UK Tech",
      items: [
        { to: "/curriculum", label: "Curriculum", position: "left" },
        { to: "/projects", label: "Projects", position: "left" },
      ],
    },
    footer: {
      style: "dark",
      copyright: `© ${new Date().getFullYear()} OSG UK Tech. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
