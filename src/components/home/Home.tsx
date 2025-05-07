import { ESettingKey } from '@/api/setting/dto/get-setting.in.dto';
import Banner from '../banner/Banner';
import { fetchSettings } from '@/service/fetchSettings';

export default async function Home() {
  const keys = [ESettingKey.BANNER_LIST];
  const settings = await fetchSettings(keys);
  return (
    <div>
      <Banner settings={settings} />
    </div>
  );
}
