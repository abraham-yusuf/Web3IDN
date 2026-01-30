'use client';

import { Community } from "./Community";
import { Customers } from "./Customers";
import { Hero } from "./Hero";
import { DAOSystem } from "./DAOSystem";
import { Features } from "./features";
import Sponsor from "./Sponsor";

export type HomeProps = {
  serverMembers: number;
  guildCount: number;
};

export default function HomePage({ guildCount, serverMembers }: HomeProps) {
  return (
    <div className="bg-white dark:bg-black">
      <style global jsx>
        {`
          html,
          body {
            max-width: 100% !important;
            height: 100% !important;
            width: 100% !important;
            overflow-x: hidden !important;
            overflow-y: auto !important;
          }

          .nx-overflow-x-hidden {
            overflow-x: unset !important;
          }
        `}
      </style>
      <div className="mx-auto flex max-w-[1400px] flex-col px-3 md:px-6">
        <Hero />
        <Features />
        <DAOSystem />
        <Customers usedBy={guildCount} />
      </div>
      <Sponsor />
      <Community joined={serverMembers} />
    </div>
  );
}
