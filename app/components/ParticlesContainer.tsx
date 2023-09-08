"use client";
import Image from "next/image";

import {Particles} from "react-tsparticles";
import {loadFull} from "tsparticles";
import React, {useCallback} from "react";
import {color} from "framer-motion";
import type {Container, Engine} from "tsparticles-engine";
//import {Events, Interactivity} from "tsparticles-engine";

const ParticlesContainer = () => {
  //init
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
    console.log(engine);
  }, []);
  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );

  return (
    <Particles
      className=" w-full h-full translate-z-0"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#0d47a1",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: {min: 1, max: 5},
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesContainer;

{
  /* <Particles
      className=" w-full h-full translate-z-0"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: {enable: false},
        background: {
          color: {
            value: "",
          },
        },
        fpsLimit: 120,
        Interactivity: {
          Events: {
            onclick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 90,
            },
            repules: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#e68e2e",
          },
          links: {
            color: "#e68e2e",
            distance: 150,
            enable: true,
            opacoty: 0.5,
            width: 1,
          },
          collistion: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: true,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: {min: 1, max: 5},
          },
        },
        detectRetina: true,
      }}
    /> */
}
