"use client";

import { useEffect } from "react";

function ProgressWrap() {
  useEffect(() => {
    const progressWrap = document.querySelector(".progress-wrap");
    if (progressWrap != null) {
      const progressPath = document.querySelector(".progress-wrap path");
      const pathLength = progressPath.getTotalLength();
      const offset = 50;

      progressPath.style.transition = progressPath.style.WebkitTransition =
        "none";
      progressPath.style.strokeDasharray = pathLength + " " + pathLength;
      progressPath.style.strokeDashoffset = pathLength;
      progressPath.getBoundingClientRect();
      progressPath.style.transition = progressPath.style.WebkitTransition =
        "stroke-dashoffset 10ms linear";

      const updateProgress = () => {
        const scroll =
          document.body.scrollTop || document.documentElement.scrollTop;
        const height =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
        const progress = pathLength - (scroll * pathLength) / height;
        progressPath.style.strokeDashoffset = progress;
        const scrollElementPos =
          document.body.scrollTop || document.documentElement.scrollTop;
        if (scrollElementPos >= offset) {
          progressWrap.classList.add("active-progress");
        } else {
          progressWrap.classList.remove("active-progress");
        }
      };

      window.addEventListener("scroll", updateProgress);

      progressWrap.addEventListener("click", function (e) {
        e.preventDefault();
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      });

      return () => {
        window.removeEventListener("scroll", updateProgress);
      };
    }
  }, []);

  return (
    <div className="progress-wrap fixed w-[2.3rem] h-[2.3rem] cursor-pointer block shadow-[inset_0_0_0_0.1rem_rgba(128,130,134,0.25)] z-[1010] opacity-0 invisible translate-y-3 transition-all duration-[0.2s] ease-[linear,margin-right] delay-[0s] rounded-[100%] right-6 bottom-6 motion-reduce:transition-none">
      <svg
        className="progress-circle svg-content"
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
      >
        <path
          className="fill-none stroke-[#8750f7] stroke-[4] box-border transition-all duration-[0.2s] ease-linear motion-reduce:transition-none"
          d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6 text-[#8750f7]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      </div>
    </div>
  );
}

export default ProgressWrap;
