// next image
import Image from "next/image";

// next Link
import Link from "next/link";

// icons
import {HiArrowRight} from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    /*  <div className=" mx-auto xl:mx-0">
      <Link
        href={"/work"}
        className=" relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group"
      >
        <Image
          src={"/rounded-text.png"}
          width={141}
          height={148}
          alt=""
          className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px] "
        />
        <HiArrowRight className=" absolute text-4xl group-hover:translate-x-2 transition-all duration-300" />
      </Link>
    </div> */
    <div className=" flex flex-row justify-between mx-auto xl:mx-0">
      <div>
        <Link
          type="button"
          href={"/work"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          My Work
        </Link>
      </div>
      <div>
        <Link
          type="button"
          href={"/contact"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Contact me
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ProjectsBtn;
