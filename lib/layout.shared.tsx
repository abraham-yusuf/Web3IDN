import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';
import Link from 'next/link';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex flex-row items-center justify-center gap-2">
          <Image
            alt="Web3IDN"
            src="/img/logo/logo.png"
            width={32}
            height={32}
            style={{
              borderRadius: '50%',
            }}
          />
          <p className="text-xl tracking-wider">W3IDN</p>
        </div>
      ),
    },
    links: [
      {
        text: 'Blog',
        url: '/blog',
      },
      {
        text: 'Docs',
        url: '/docs',
      },
      {
        text: 'Learn',
        url: '/learn',
      },
    ],
    githubUrl: 'https://github.com/Web3ID',
  };
}
