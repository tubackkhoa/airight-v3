import DiscordIcon from 'resources/svg/DiscordIcon';
import GitIcon from 'resources/svg/GitIcon';
import MediumIcon from 'resources/svg/MediumIcon';
import TelegramIcon from 'resources/svg/TelegramIcon';
import TwitterIcon from 'resources/svg/TwitterIcon';
import YoutubeIcon from 'resources/svg/YoutubeIcon';

export const MENU_LIST = [
  {
    name: 'About',
    items: [
      {
        key: 'introduction',
        target: '_blank',
        text: 'Introduction',
        href: 'https://docs.airight.io/whitepaper/introduction',
      },
      {
        key: 'tokenomics',
        target: '_blank',
        text: 'AIRI tokenomics',
        href: 'https://docs.airight.io/whitepaper/tokenomics',
      },
      {
        key: 'buy-airi',
        target: '_blank',
        text: 'Buy AIRI',
        href: 'https://airight.io/buy-airi',
      },
      {
        key: 'introduction',
        target: '_blank',
        text: 'Careers',
        href: 'https://oraichain.notion.site/Recruitment-News-September-2023-b14d9467f9604b3d9cf9a3282730cec5',
      },
      {
        key: 'feedback',
        target: '',
        text: 'Give feedback & win $10',
        href: '',
      },
    ],
  },
  {
    name: 'Ecosystem',
    items: [
      {
        key: 'mainet',
        target: '_blank',
        text: 'Mainet',
        href: 'https://orai.io/',
      },
      {
        key: 'OraichainVRF20',
        target: '_blank',
        text: 'Oraichain VRF 2.0',
        href: 'https://docs.orai.io/vrf/introduction',
      },
      {
        key: 'EUENO',
        target: '_blank',
        text: 'EUENO',
        href: 'https://eueno.io/',
      },
      {
        key: 'Kawaiiverse',
        target: '_blank',
        text: 'Kawaiiverse',
        href: 'https://kawaii.global/',
      },
      {
        key: 'Other dApps',
        target: '_blank',
        text: 'Other dApps',
        href: 'https://medium.com/m/global-identity-2?redirectUrl=https%3A%2F%2Fblog.orai.io%2Foraichain-roadmap-for-2022-3a6fca7ace86',
      },
    ],
  },
  {
    name: 'Resources',
    items: [
      {
        key: 'Media kit',
        target: '_blank',
        text: 'Media kit',
        href: 'https://airight.io/media-kit',
      },
      {
        key: 'Patent',
        target: '_blank',
        text: 'Patent',
        href: 'https://patentscope.wipo.int/search/en/detail.jsf?docId=WO2022200834&_cid=P12-LBD67M-45114-1',
      },
      {
        key: 'Docs',
        target: '_blank',
        text: 'Docs',
        href: 'https://docs.airight.io/whitepaper/introduction',
      },
      {
        key: 'Contact',
        target: '_blank',
        text: 'Contact',
        href: 'mailto:contact@orai.io',
      },
      {
        key: 'Support',
        target: '_blank',
        text: 'Support',
        href: 'https://t.me/airight_io',
      },
    ],
  },
];

export const SOCIAL_LIST = [
  {
    Icon: MediumIcon,
    link: 'https://blog.airight.io/',
  },
  {
    Icon: TelegramIcon,
    link: 'https://t.me/airight_io',
  },
  {
    Icon: TwitterIcon,
    link: 'https://twitter.com/aiRight_io',
  },
  {
    Icon: DiscordIcon,
    link: 'https://discord.gg/KcvgeUsjwt',
  },
  {
    Icon: GitIcon,
    link: 'https://github.com/oraichain',
  },
  {
    Icon: YoutubeIcon,
    link: 'https://www.youtube.com/channel/UCyckcs_Fm8kU4o2Y1_KPjXg',
  },
];
