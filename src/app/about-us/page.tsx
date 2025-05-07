import { ESettingKey } from '@/api/setting/dto/get-setting.in.dto';
import { fetchSettings } from '@/service/fetchSettings';
import DOMPurify from 'isomorphic-dompurify';
import React from 'react';

export default async function AboutUsPage() {
  const settings = await fetchSettings([ESettingKey.ABOUT_US]);
  const content = settings[ESettingKey.ABOUT_US]?.content ?? '';

  return (
    <div>
      <h1>About us page</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(content),
        }}
      />
    </div>
  );
}
