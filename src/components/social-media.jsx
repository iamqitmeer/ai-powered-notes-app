import React from 'react';
import { XLogo, InstagramLogo, PinterestLogo, LinkedinLogo, TiktokLogo, YoutubeLogo } from './icons';

const socialMediaList = [
  {
    name: 'X',
    icon: XLogo,
    href: 'https://twitter.com', // Update with actual URL
  },
  {
    name: 'Instagram',
    icon: InstagramLogo,
    href: 'https://instagram.com', // Update with actual URL
  },
  {
    name: 'Pinterest',
    icon: PinterestLogo,
    href: 'https://pinterest.com', // Update with actual URL
  },
  {
    name: 'Linkedin',
    icon: LinkedinLogo,
    href: 'https://linkedin.com', // Update with actual URL
  },
  {
    name: 'Tiktok',
    icon: TiktokLogo,
    href: 'https://tiktok.com', // Update with actual URL
  },
  {
    name: 'Youtube',
    icon: YoutubeLogo,
    href: 'https://youtube.com', // Update with actual URL
  },
];

function SocialMediaIcon({ icon: Icon, name, href }) {
  return (
    <a 
      href={href} 
      aria-label={name} 
      className="text-white/50 hover:text-white/90 transition-transform duration-200 transform hover:scale-110" // Adding transition effect
      role="img"
    >
      <Icon weight="fill" className="h-6 w-6" />
      <span className="sr-only">{name}</span>
    </a>
  );
}

export function SocialMediaList() {
  return (
    <div className="flex gap-3">
      {socialMediaList.map(({ href, icon, name }) => (
        <SocialMediaIcon name={name} icon={icon} href={href} key={name} />
      ))}
    </div>
  );
}
