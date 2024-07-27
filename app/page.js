"use client";

import Image from "next/image";
import Link from "next/link";
import FormContainer from "./_components/FormContainer";

export default function Home() {
  function handleClick(e) {
    e.preventDefault();

    const targetSection = document.getElementById("generate");

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <>
      <div className="mt-24">
        <div className="relative wrapper-section z-10 text-center">
          <div className="intro_text">
            <svg viewBox="0 0 1320 300">
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                className="animate-stroke"
              >
                Create
              </text>
            </svg>
          </div>
          <h1 className="text-8xl text-gradient mb-10 tracking-tight font-bold fade-in-up">
            Unleash Your Creativity
          </h1>
          <p
            className="px-8  text-primary-800 text-lg font-semibold animate-fadeInUp text-primary-themeSecondary fade-in-down"
            style={{ animationDelay: "0.5s" }}
          >
            Generate Engaging Social Media Posts Instantly
          </p>

          <div className=" py-6">
            <div className="flex justify-center py-6 fade-in-up">
              <Link
                onClick={(e) => handleClick(e)}
                href="#"
                className="cta transition-colors"
              >
                Start Generating
              </Link>
            </div>
            <svg className="arrows fade-in-up">
              <path className="a1" d="M0 0 L30 32 L60 0"></path>
              <path className="a2" d="M0 20 L30 52 L60 20"></path>
            </svg>
          </div>
        </div>
      </div>
      <FormContainer />
    </>
  );
}
