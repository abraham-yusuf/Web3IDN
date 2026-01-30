import { blogSource } from '@/src/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '@/src/lib/layout.shared';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout tree={blogSource.pageTree} {...baseOptions()}>
      {children}
    </DocsLayout>
  );
}
