// @ts-check
// @type JSDoc annotations allow editor autocompletion and type checking
// (when paired with @ts-check).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'XRCC Documentation',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/XRCCMiniLogo.png',
  // Set the production url of your site here
  url: 'https://votanic.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/XRCC_Tutorial/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Votanic', // Usually your GitHub org/user name.
  projectName: 'XRCC_Tutorial', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    // locales: ['en', 'cn'],
    locales: ['en'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
        label: 'English',
      },
      // cn: {
      //   label: 'Chinese',
      // },
    },
  },
  themes: [
    // ... Your other themes.
    [
      // @ts-ignore
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      // @ts-ignore
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
        docsRouteBasePath: "/",
      }),
    ],
  ],
  plugins: [
    require.resolve("docusaurus-plugin-image-zoom"),
    [
      '@docusaurus/plugin-client-redirects',
      {
        // redirect a non-existent route to a different site
        redirects: [
          {
            to: 'https://votanic-my.sharepoint.com/:f:/p/tobey/EmxqfD-NmadFgiSzo2blFiIBOnz889PTwrlbQJhHC1ov4Q?e=U6n7ha',
            from: '/update/download', // Link embedded in XRCC, don't change this path
          },
          // {
          //   to: '',
          //   from: '/update/releaseNote', // Link embedded in XRCC, don't change this path
          // },
        ],
      },
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: undefined,
          lastVersion: 'current',
          versions: {
            current: {
              label: 'Latest Version',
              banner: "none",
            },
          },
          //routeBasePath: '/',
        },
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // algolia: {
      //   apiKey: "123",
      //   appId: "123",
      //   indexName: "123",
      // },
      // Replace with your project's social card
      image: '/img/XRCCMiniLogo.png',
      zoom: {
        selector: '.markdown :not(em) > img',
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
          background: {
            light: 'rgb(255, 255, 255)',
            dark: 'rgb(50, 50, 50)'
          }
        }
      },
      navbar: {
        // title: '',
        // style: 'primary',
        logo: {
          alt: 'Site Logo',
          src: 'img/Icon/XRCCLogoLight.svg',
          srcDark: 'img/Icon/XRCCLogoDark.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'generalGuideSidebar',
            position: 'left',
            label: 'General Guide',
          },
          {
            type: 'docSidebar',
            sidebarId: 'pcSidebar',
            position: 'left',
            label: 'PC Mode',
          },
          {
            type: 'docSidebar',
            sidebarId: 'xrSidebar',
            position: 'left',
            label: 'XR Mode',
          },
          {
            type: 'docSidebar',
            sidebarId: 'behaviourBlockGuideSidebar',
            position: 'left',
            label: 'Behaviour',
          },
          {
            type: 'docSidebar',
            sidebarId: 'TutorialVideoSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {
            type: 'docSidebar',
            sidebarId: 'FAQSidebar',
            position: 'left',
            label: 'Support',
          },
          // {
          //   type: 'docsVersionDropdown',
          //   position: 'right',
          // },
          {
            type: 'search',
            position: 'right',
          },
          {
            type: 'html',
            position: "right",
            value: ' ',
            className: "header-separater",
          },
          // {
          // type: 'localeDropdown',
          // position: 'right',
          // },
      ],
      },
      custom_edit_url: null,
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Pages',
            items: [
              {
                label: 'General Guide',
                to: '/GeneralGuide/Overview',
              },
              {
                label: 'PC Mode',
                to: '/PCMode/Introduction',
              },
              {
                label: 'XR Mode',
                to: '/XRMode/Introduction',
              },
              {
                label: 'Behaviour',
                to: '/BehaviourOverview/Introduction',
              },
              {
                label: 'Tutorial',
                to: '/Tutorial/Introduction',
              },
            ],
          },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          
          {
            title: 'More',
            items: [
              {
                label: 'Votanic',
                href: 'https://www.votanic.com/zh-hk/',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/@XRCCForYou',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/Fq86WKbtaN',
              },
              {
                label: 'FAQ',
                to: '/FAQ',
              },
            ],
          },
        ],
        copyright: `Copyright © 2024-${new Date().getFullYear()} VOTANIC Limited All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;