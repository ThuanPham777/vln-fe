export enum ESettingKey {
  FAVICON = 'favicon',
  TITLE = 'title',
  BANNER_ADS = 'banner_ads',
  BANNER = 'banner',
  BANNER_LIST = 'banner_list',
  LOGO = 'logo',
  CONTACT = 'contact',
  GIF = 'gif',
  ABOUT_US = 'about_us',
  TINY_KEY = 'tiny_key',
  FOOTER = 'footer',
}

export interface IGetSettingInDto {
  key?: ESettingKey[];
  page?: number;
  perPage?: number;
  isActive?: boolean;
}
