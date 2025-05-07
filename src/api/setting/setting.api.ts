import { baseApiURL } from '@/utils/consts/baseUrl';
import { IGetSettingInDto } from './dto/get-setting.in.dto';

import Axios from 'axios';
import qs from 'qs';

export async function getSettingsApi(query: IGetSettingInDto) {
  // Build the full URL
  const url = `${baseApiURL}/settings`;

  // Perform GET with proper params serialization
  const response = await Axios.get(url, {
    params: query,
    paramsSerializer: (params) =>
      // e.g. key=logo&key=title&key=contact&page=1&perPage=10
      qs.stringify(params, { arrayFormat: 'repeat' }),
  });

  // Return the data payload (adjust if your API nests it differently)
  return response.data;
}
