// hooks/useSetting.ts
'use client';
import { useState, useEffect, useCallback } from 'react';
import { ESettingKey, IGetSettingInDto } from './dto/get-setting.in.dto';
import { getSettingsApi } from './setting.api';

export interface SettingRecord {
  [key: string]: any;
}

export function useSetting(keys: ESettingKey[]) {
  const [settings, setSettings] = useState<SettingRecord>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchSettings = useCallback(async () => {
    setLoading(true);
    setError(null);

    const query: IGetSettingInDto = { key: keys };
    try {
      const data = await getSettingsApi(query);
      // assuming API returns an array of { key: string; value: any }
      const record: SettingRecord = {};
      data.forEach((item: { key: string; value: any }) => {
        record[item.key] = item.value;
      });
      setSettings(record);
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [keys]);

  useEffect(() => {
    fetchSettings();
  }, [fetchSettings]);

  return { settings, loading, error, refetch: fetchSettings };
}
