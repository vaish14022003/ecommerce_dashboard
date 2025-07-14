
// components/AdvertisementSlider.tsx
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/autoplay";
// import { Autoplay } from "swiper/modules";

// // Images
// import fashionAd from "../assets/swipe1.jpg";
// import electronicsAd from "../assets/sale.jpg";
// import dealsAd from "../assets/swipe4.jpg";
// import saleAd from "../assets/sale.jpg";
// import sale from "../assets/deal.jpg";

// const AdvertisementSlider: React.FC = () => {
//     return (
//         <div className="w-full mt-4">
//             <Swiper
//                 spaceBetween={0}
//                 slidesPerView={1}
//                 autoplay={{
//                     delay: 3000,
//                     disableOnInteraction: false,
//                 }}
//                 loop={true}
//                 modules={[Autoplay]}
//                 className="rounded-none shadow-md"
//             >
//                 <SwiperSlide>
//                     <img
//                         src={fashionAd}
//                         alt="Fashion Ad"
//                         className="w-full h-[450px] object-cover"
//                     />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img
//                         src={electronicsAd}
//                         alt="Electronics Ad"
//                         className="w-full h-[450px] object-cover"
//                     />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img
//                         src={dealsAd}
//                         alt="Deals Ad"
//                         className="w-full h-[450px] object-cover"
//                     />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img
//                         src={saleAd}
//                         alt="Sale Ad"
//                         className="w-full h-[450px] object-cover"
//                     />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img
//                         src={sale}
//                         alt="New Arrivals"
//                         className="w-full h-[450px] object-cover"
//                     />
//                 </SwiperSlide>
//             </Swiper>
//         </div>
//     );
// };

// export default AdvertisementSlider;
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


// Images
import fashionAd from "../assets/swipe1.jpg";
import electronicsAd from "../assets/sale.jpg";
import dealsAd from "../assets/swipe4.jpg";
import saleAd from "../assets/sale.jpg";
import sale from "../assets/deal.jpg";

const AdvertisementSlider: React.FC = () => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const slidesRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        // Fade in the whole slider
        gsap.fromTo(
            sliderRef.current,
            { autoAlpha: 0, y: 40 },
            { autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out" }
        );

        // Slight zoom-in animation on each slide image when it enters (only once)
        slidesRef.current.forEach((slide) => {
            if (slide) {
                gsap.fromTo(
                    slide,
                    { scale: 1.05 },
                    {
                        scale: 1,
                        duration: 1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: slide,
                            start: "top 80%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            }
        });
    }, []);

    const images = [
        { src: fashionAd, alt: "Fashion Ad" },
        { src: electronicsAd, alt: "Electronics Ad" },
        { src: dealsAd, alt: "Deals Ad" },
        { src: saleAd, alt: "Sale Ad" },
        { src: sale, alt: "New Arrivals" },
    ];

    return (
        <div className="w-full mt-4" ref={sliderRef} style={{ visibility: "hidden" }}>
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
                {images.map((image, idx) => (
                    <SwiperSlide key={idx}>
                        <div
                            ref={(el) => (slidesRef.current[idx] = el)}
                            className="overflow-hidden"
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-[450px] object-cover transition-transform duration-1000"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default AdvertisementSlider;
