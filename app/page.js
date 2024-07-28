"use client";

import Image from "next/image";
import Link from "next/link";
import FormContainer from "./_components/FormContainer";
import Card from "./_components/Card";
import StreamingContainer from "./_components/StreamingContainer";

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
      <div className="mt-[70px] lg:mt-24">
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
          <h1 className="text-3xl sm:text-5xl lg:text-8xl text-gradient mb-4 lg:mb-10 tracking-tight font-bold fade-in-up">
            Unleash Your Creativity
          </h1>
          <p
            className="px-8 text-base sm:text-lg  font-semibold animate-fadeInUp text-primary-themeSecondary fade-in-down"
            style={{ animationDelay: "0.5s" }}
          >
            Generate Engaging Social Media Posts Instantly
          </p>

          <div className="py-4 lg:py-6">
            <div className="flex justify-center py-6 fade-in-up">
              <Link
                onClick={(e) => handleClick(e)}
                href="#"
                className="cta transition-colors"
              >
                Start Generating
              </Link>
            </div>
            {/* <svg className="arrows fade-in-up">
              <path className="a1" d="M0 0 L30 32 L60 0"></path>
              <path className="a2" d="M0 20 L30 52 L60 20"></path>
            </svg> */}
          </div>
        </div>
      </div>
      <FormContainer />
      <div id="howitworks" className="max-w-6xl mx-auto w-full pt-36 mb-12">
        <h1 className="text-3xl mb-10 tracking-tight font-bold fade-in-up text-center">
          HOW IT WORKS
        </h1>
        <div className="flex justify-between flex-col lg:flex-row items-center space-y-6 lg:space-y-0">
          <Card
            title="Enter Content Brief"
            description="Provide a brief description of the content you want to create. Be as detailed as possible to get the best results."
          />
          <Card
            title="Add Hashtags"
            description="Include relevant hashtags separated by spaces. This helps in tailoring the content to specific trends or topics."
          />
          <Card
            title="Select Niches"
            description="Choose multiple niches to further refine the content. Selecting niches is optional but helps in better targeting."
          />
        </div>
      </div>
    </>
  );
}
