import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recruitment",
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
