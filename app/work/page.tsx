import {Swiper, SwiperSlide} from "swiper/react";

import {projectList} from "../../types/config";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import {Pagination} from "swiper";

export default function Work() {
  return (
    <div className=" h-full bg-primary/30 py-44 text-center xl:text-left ">
      <div id="projects">
        <h2 className="numbered-heading">Projects</h2>
        <div className="container protfolio__container">
          <div className="all-items">
            {projectList &&
              projectList.map(({name, subTitle, desc, tols}, i) => (
                <div className="protfolio__item">
                  <div className="left">
                    <div className="img">
                      {/* <img src={work1} alt="" /> */}
                    </div>
                  </div>
                  <div className="right" key={i}>
                    <h2 className="project-title">{name}</h2>
                    <h3 className="project-sub-title">{subTitle}</h3>
                    <p className="project-desc">{desc}</p>
                    {tols && (
                      <ul className="project-tech-list">
                        {tols.map((tol, i) => (
                          <li key={i}>{tol}</li>
                        ))}
                      </ul>
                    )}
                    <div className="buttons ">
                      <a href="#" className="btn primary-btn  external-link">
                        {/*  <Icon name="GitHub" /> */}
                      </a>
                      <a
                        href="#"
                        className="btn primary-btn outline external-link"
                      >
                        {/* <Icon name="External" /> */}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
