import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About us",
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