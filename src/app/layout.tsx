import type { Metadata } from 'next';
import '../styles/globals.css';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import { ESettingKey } from '@/api/setting/dto/get-setting.in.dto';
import { fetchSettings } from '@/service/fetchSettings';

export async function generateMetadata(): Promise<Metadata> {
  // fetch only the favicon and title keys
  const settings = await fetchSettings([
    ESettingKey.FAVICON,
    ESettingKey.TITLE,
  ]);

  const title = settings[ESettingKey.TITLE]?.title ?? 'Việc làm ngon';
  const faviconUrl = settings[ESettingKey.FAVICON]?.image;

  return {
    title,
    icons: faviconUrl
      ? {
          icon: faviconUrl,
          shortcut: faviconUrl,
          apple: faviconUrl,
        }
      : undefined,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const keys = [ESettingKey.LOGO, ESettingKey.CONTACT, ESettingKey.FOOTER];
  const settings = await fetchSettings(keys);
  return (
    <html lang='en'>
      <body>
        <Header settings={settings} />
        <main>{children}</main>
        <Footer settings={settings} />
      </body>
    </html>
  );
}
