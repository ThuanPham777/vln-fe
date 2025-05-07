import { ESettingKey } from './setting/dto/get-setting.in.dto';

export interface ISetting {
  _id: string;
  key: string;
  value: Object;
}

/** value của logo */
export interface ILogoSetting {
  image: string;
}

export interface IFaviconSetting {
  image: string;
}

export interface IBannerListSetting {
  banners: [];
}
/** value của title */
export interface ITitleSetting {
  title: string;
}

/** value của contact */
export interface IContactSetting {
  title: string;
  phone: string;
  facebook: string;
  telegram: string;
  gmail: string;
}

export interface IAboutUsSetting {
  content: string;
}

export interface IFooterSettings {
  map_location: string;
  footer_description: string;
}

export type SettingValueMap = {
  [ESettingKey.FAVICON]: IFaviconSetting;
  [ESettingKey.TITLE]: ITitleSetting;
  [ESettingKey.BANNER_ADS]: { ads: string };
  [ESettingKey.BANNER]: { url: string };
  [ESettingKey.BANNER_LIST]: IBannerListSetting;
  [ESettingKey.LOGO]: ILogoSetting;
  [ESettingKey.CONTACT]: IContactSetting;
  [ESettingKey.GIF]: { url: string };
  [ESettingKey.ABOUT_US]: IAboutUsSetting;
  [ESettingKey.TINY_KEY]: { value: string };
  [ESettingKey.FOOTER]: IFooterSettings;
};

/** Settings object kiểu Partial vì API có thể không trả đủ hết */
export type ISettingsResponse = Partial<{
  [K in keyof SettingValueMap]: SettingValueMap[K];
}>;
