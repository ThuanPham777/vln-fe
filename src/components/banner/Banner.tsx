'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { ISettingsResponse } from '@/api/api.type';
import { ESettingKey } from '@/api/setting/dto/get-setting.in.dto';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

interface BannerProps {
  settings: ISettingsResponse;
}

export default function Banner({ settings }: BannerProps) {
  const banners: string[] = settings[ESettingKey.BANNER_LIST]?.banners || [];

  if (!banners.length) return null;

  return (
    <section className='w-full overflow-hidden h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[500px]'>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          1280: {
            // ở màn hình ≥1280px, nếu muốn 2 slide cùng lúc:
            // slidesPerView: 2,
            // spaceBetween: 10,
          },
        }}
        className='w-full h-full'
      >
        {banners.map((url, idx) => (
          <SwiperSlide
            key={idx}
            className='w-full h-full'
          >
            <img
              src={url}
              alt={`Banner ${idx + 1}`}
              className='w-full h-full object-cover'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
