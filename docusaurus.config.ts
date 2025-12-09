import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Programación y Base de Datos II',
  tagline: 'Programación y Base de Datos II',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },
  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'VGMIL',
  projectName: 'ProgramacionyBasedeDatosII',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      {
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Programación y Base de Datos II',
      logo: {
        alt: 'My Site Logo',
        src: 'img/knight.png',
      }
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['java'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
