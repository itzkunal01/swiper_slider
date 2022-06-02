// import { Swiper, SwiperSlide } from "swiper/react";
// // Import Swiper styles
// import "swiper/css";
// import { Autoplay } from "swiper";

// const SwiperSlider = () => {
//   return (
//     <>
//       <div className="text-white">
//         <Swiper
//           spaceBetween={50}
//           slidesPerView={3}
//           onSlideChange={() => console.log("slide change")}
//           onSwiper={(swiper) => console.log(swiper)}
//           //
//           centeredSlides={true}
//           autoplay={{
//             delay: 1000,
//             disableOnInteraction: true,
//           }}
//           pagination={{
//             clickable: true,
//           }}
//           modules={[Autoplay]}
//           className="mySwiper"
//           //
//         >
//           <SwiperSlide className="bg-danger  px-3">Slide 1</SwiperSlide>
//           <SwiperSlide className="bg-danger  px-3">Slide 2</SwiperSlide>
//           <SwiperSlide className="bg-danger  px-3">Slide 3</SwiperSlide>
//           <SwiperSlide className="bg-danger  px-3">Slide 4</SwiperSlide>
//           <SwiperSlide className="bg-danger  px-3">Slide 5</SwiperSlide>
//           <SwiperSlide className="bg-danger  px-3">Slide 6</SwiperSlide>
//           <SwiperSlide className="bg-danger  px-3">Slide 7</SwiperSlide>
//           <SwiperSlide className="bg-danger  px-3">Slide 8</SwiperSlide>
//         </Swiper>
//       </div>
//     </>
//   );
// };

// export default SwiperSlider;

import { Swiper, SwiperSlide } from "swiper/react";
//
import { Autoplay, Pagination, Navigation, Mousewheel } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
//
const SwiperSlider = () => {
  return (
    <>
      <div className="text-white swiper mySwiper">
        <Swiper
          spaceBetween={70}
          slidesPerView={1}
          //
          mousewheel={true}
          //
          centeredSlides={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: true,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation, Mousewheel]}
          className="mySwiper"
        >
          <SwiperSlide className="bg-danger d-flex align-items-center justify-content-center px-3">
            Slide 1
          </SwiperSlide>
          <SwiperSlide className="bg-danger d-flex align-items-center justify-content-center px-3">
            Slide 2
          </SwiperSlide>
          <SwiperSlide className="bg-danger d-flex align-items-center justify-content-center px-3">
            Slide 3
          </SwiperSlide>
          <SwiperSlide className="bg-danger d-flex align-items-center justify-content-center px-3">
            Slide 4
          </SwiperSlide>
          <SwiperSlide className="bg-danger d-flex align-items-center justify-content-center px-3">
            Slide 5
          </SwiperSlide>
          <SwiperSlide className="bg-danger d-flex align-items-center justify-content-center px-3">
            Slide 6
          </SwiperSlide>
          <SwiperSlide className="bg-danger d-flex align-items-center justify-content-center px-3">
            Slide 7
          </SwiperSlide>
          <SwiperSlide className="bg-danger d-flex align-items-center justify-content-center px-3">
            Slide 8
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default SwiperSlider;
