// links
import Link from "next/link";

// icons
import {
  RiInstagramLine,
  RiFacebookLine,
  RiBehanceLine,
  RiPinterestLine,
  RiGithubLine,
  RiLinkedinLine,
} from "react-icons/ri";

// data
import {socialMedia} from "@/types/config";

const Socials = () => {
  return (
    <div className=" flex flex-col md:flex-row items-center gap-5 ">
      <div className=" flex flex-row items-center gap-x-5 text-lg">
        {socialMedia &&
          socialMedia.map(({name, url}, i) => (
            <Link
              key={i}
              href={url}
              className=" hover:text-accent transition-all duration-300"
            ></Link>
          ))}

        {/*  <Link
          href={""}
          className=" hover:text-accent transition-all duration-300"
        >
          <RiGithubLine />
        </Link>
        <Link
          href={""}
          className=" hover:text-accent transition-all duration-300"
        >
          <RiLinkedinLine />
        </Link>
        <Link
          href={""}
          className=" hover:text-accent transition-all duration-300"
        >
          <RiFacebookLine />
        </Link>
        <Link
          href={""}
          className=" hover:text-accent transition-all duration-300"
        >
          <RiBehanceLine />
        </Link>
        <Link
          href={""}
          className=" hover:text-accent transition-all duration-300"
        >
          <RiInstagramLine />
        </Link>
        <Link
          href={""}
          className=" hover:text-accent transition-all duration-300"
        >
          <RiPinterestLine />
        </Link> */}
      </div>
      <Link
        href={""}
        className="inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] 
        pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition 
        duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 
        hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 
        focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200
         dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
      >
        Rusem
      </Link>
    </div>
  );
};

export default Socials;
