
// components/AdvertisementSlider.tsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

// Images
import fashionAd from "../assets/swipe1.jpg";
import electronicsAd from "../assets/sale.jpg";
import dealsAd from "../assets/swipe4.jpg";
import saleAd from "../assets/sale.jpg";
import sale from "../assets/deal.jpg";

const AdvertisementSlider: React.FC = () => {
    return (
        <div className="w-full mt-4">
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Autoplay]}
                className="rounded-none shadow-md"
            >
                <SwiperSlide>
                    <img
                        src={fashionAd}
                        alt="Fashion Ad"
                        className="w-full h-[450px] object-cover"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={electronicsAd}
                        alt="Electronics Ad"
                        className="w-full h-[450px] object-cover"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={dealsAd}
                        alt="Deals Ad"
                        className="w-full h-[450px] object-cover"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={saleAd}
                        alt="Sale Ad"
                        className="w-full h-[450px] object-cover"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={sale}
                        alt="New Arrivals"
                        className="w-full h-[450px] object-cover"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default AdvertisementSlider;
