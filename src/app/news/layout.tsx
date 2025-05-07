import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Việc làm ngon - Tin tức',
};

export default function NewsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
}
