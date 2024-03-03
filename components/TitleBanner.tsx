import { BannerProps } from '@/types'
import Image from 'next/image'
import React from 'react'

interface BannerTitleProps {
    banner: BannerProps;
}

const TitleBanner = ({ banner }: BannerTitleProps) => {
  return (
    <div className="w-fill h-52 relative z-10">
        <Image
          alt={banner.bannerPicture.alt}
          src={banner.bannerPicture.ref}
          layout="fill"
          objectFit="cover"
          className="grayscale"
        />
        <div className="w-full max-w-screen-lg mx-auto relative">
          <h1
            className={`absolute py-5 px-14 top-28 left-4
            font-josefin text-4xl font-bold uppercase 
            ${banner.bgColor} ${banner.textColor}`}
          >
            {banner.title}
          </h1>
        </div>
      </div>
  )
}

export default TitleBanner