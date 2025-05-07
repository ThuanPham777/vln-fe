import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Việc làm ngon - Tuyển dụng',
};

export default function RecruitmentLayout({
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
