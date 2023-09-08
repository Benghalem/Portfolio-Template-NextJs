import Image from "next/image";

//components
import ParticlesContainer from "../app/components/ParticlesContainer";
import ProjectBtn from "../app/components/ProjectsBtn";
import Avatar from "../app/components/Avatar";

// fram motion
import {motion} from "framer-motion";

// variants
import {fadeIn} from "../types/variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full ">
      {/* taxt */}
      <div className=" w-full h-full bg-gradient-to-r from-primary/10 via-black/30  ">
        <div className="text-center flex flex-col justify-center pt-40 xl:pt-40 xl:text-left h-full container mx-auto">
          {/* title */}
          <h1 className="h1">
            Computer Engineer <br />
            <span className="h2 ">With a Passion for </span>
            <span className=" h2 text-accent"> Front-End </span> and{" "}
            <span className=" h2 text-accent"> DevOps </span>
          </h1>
          {/* suptaitel */}
          <p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
            I am a Computer Engineer with a passion for Front-End Development
            and DevOps. I have a keen interest in exploring new technologies and
            staying updated with the latest trends in the industry. With a solid
            technical foundation and a drive for continuous learning, I strive
            to deliver high-quality solutions that meet both user and business
            needs.
          </p>
          {/* btn */}
          <div className=" flex justify-center xl:hidden relative">
            <ProjectBtn />
          </div>

          {/* <motion.div  variants={fadeIn{'down', 0.4}} initiale='hidden' animate='show' exit='hidden'>
            <ProjectBtn />
          </motion.div> */}
          <div className=" hidden xl:flex">
            <ProjectBtn />
          </div>
        </div>
      </div>
      {/* image */}
      <div className=" w-[1200px] h-full absolute right-0 bottom-0">
        {/* bg image */}
        <div className=" bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
      </div>

      {/* *******   praticiels **** */}
      {/* <ParticlesContainer /> */}
      {/* avatar img */}
      <div>{/* <Avatar /> */}</div>
    </div>
  );
};

export default Home;
