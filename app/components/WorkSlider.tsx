import {Swiper, SwiperSlide} from "swiper/react";

import {projectList} from "../../types/config";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import {Pagination} from "swiper";

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
        {
          title: "title",
          path: "/thumb4.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/thumb4.jpg",
        },
        {
          title: "title",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      /* modules={{ Pagination}} */
      className=" h-[240px] sm:h-[340px]"
    >
      {workSlides.slides &&
        workSlides.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div>
                {/* icon */}
                <div>
                  {/* titel & descrption */}
                  <div>
                    <div> titel</div>
                    <p>descriptin</p>
                  </div>
                  {/* arrow */}
                  <div></div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default WorkSlider;
