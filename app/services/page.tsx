// import slider
import WorkSlider from "../components/WorkSlider";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import requrd
import {FreeMode, Pagination} from "swiper";

export default function Services() {
  return (
    <div className=" h-full bg-primary/30 pt-36 flex items-center">
      <div className=" container mx-auto">
        <div className=" flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="  text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0 ">
            {/* titel */}
            My work1
            <p className="">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
              culpa maxime ratione pariatur tempore quasi, natus aut explicabo
              quam dolorem, saepe nam eaque expedita unde totam exercitationem
              debitis magnam laborum!
            </p>
          </div>
          {/* slider */}
          <div className=" w-full xl:max-w-[65%]">
            <WorkSlider />
          </div>
        </div>
      </div>
    </div>
  );
}
