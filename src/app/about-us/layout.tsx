import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Việc làm ngon - Về chúng tôi',
};

export default function AboutUsLayout({
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
