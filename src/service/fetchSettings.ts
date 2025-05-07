import { getSettingsApi } from '@/api/setting/setting.api';
import {
  ESettingKey,
  IGetSettingInDto,
} from '@/api/setting/dto/get-setting.in.dto';

// Hàm fetchSettings nhận một mảng các key và trả về object chứa settings
export async function fetchSettings(
  keys: ESettingKey[]
): Promise<Record<string, any>> {
  const query: IGetSettingInDto = { key: keys };
  try {
    const data = await getSettingsApi(query);
    const settings = data.items.reduce((acc: any, item: any) => {
      acc[item.key] = item.value;
      return acc;
    }, {} as Record<string, any>);
    return settings;
  } catch (error) {
    console.error('Error fetching settings:', error);
    return {}; // Trả về object rỗng nếu có lỗi
  }
}
