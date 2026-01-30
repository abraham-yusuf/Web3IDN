declare module 'fumadocs-ui/page' {
  import { FC, ReactNode } from 'react';
  
  export interface DocsPageProps {
    toc?: any[];
    full?: boolean;
    children: ReactNode;
  }
  
  export const DocsPage: FC<DocsPageProps>;
  export const DocsTitle: FC<{ children: ReactNode }>;
  export const DocsDescription: FC<{ children?: ReactNode }>;
  export const DocsBody: FC<{ children: ReactNode }>;
}

declare module 'fumadocs-ui/layouts/docs' {
  import { FC, ReactNode } from 'react';
  
  export interface DocsLayoutProps {
    tree: any;
    children: ReactNode;
    [key: string]: any;
  }
  
  export const DocsLayout: FC<DocsLayoutProps>;
}

declare module 'fumadocs-ui/provider/next' {
  import { FC, ReactNode } from 'react';
  
  export interface RootProviderProps {
    children: ReactNode;
    [key: string]: any;
  }
  
  export const RootProvider: FC<RootProviderProps>;
}

declare module 'fumadocs-ui/layouts/shared' {
  import { ReactNode } from 'react';
  
  export interface BaseLayoutProps {
    nav?: {
      title?: ReactNode;
      [key: string]: any;
    };
    links?: Array<{
      text: string;
      url: string;
      [key: string]: any;
    }>;
    githubUrl?: string;
    [key: string]: any;
  }
}

declare module 'fumadocs-core/source' {
  export function loader(config: {
    baseUrl: string;
    source: any;
    plugins?: any[];
  }): any;
}

declare module 'fumadocs-ui/mdx' {
  import type { MDXComponents } from 'mdx/types';
  const components: MDXComponents;
  export default components;
}

declare module 'fumadocs-mdx/config' {
  export function defineConfig(config: any): any;
  export function defineDocs(config: any): any;
  export const frontmatterSchema: any;
  export const metaSchema: any;
}
