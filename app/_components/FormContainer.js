"use client";

import { useState } from "react";
import FormInterests from "./FormInterests";
import GenerateButton from "./GenerateButton";

function FormContainer() {
  const interests = FormInterests();
  const [selectedInterests, setSelectedInterests] = useState([]);

  const handleCheckboxChange = (event) => {
    event.preventDefault();

    const value = event.target.id;
    setSelectedInterests((prevSelectedInterests) =>
      prevSelectedInterests.includes(value)
        ? prevSelectedInterests.filter((interest) => interest !== value)
        : [...prevSelectedInterests, value]
    );
  };

  return (
    <section id="generate" className="max-w-6xl mx-auto w-full pt-36">
      <div className="flex flex-col justify-center items-center">
        <div className="form-container max-w-3xl lg:max-w-6xl w-full">
          <div className="form_area">
            <p className="title">What do you want to write?</p>
            <form action="" className="space-y-6">
              <div className="form_group">
                <label className="sub_title" htmlFor="brief">
                  Content Brief
                </label>
                <textarea
                  placeholder="Create a comedy script for TikTok that is engaging and will get a lot of views."
                  name="brief"
                  className="form_style"
                  type="text"
                />
              </div>
              <div className="form_group">
                <label className="sub_title" htmlFor="hashtags">
                  HashTags
                </label>
                <input
                  placeholder="Optional * - Separate each with commas"
                  id="hashtags"
                  name="hashtags"
                  className="form_style"
                  type="text"
                />
              </div>
              <div className="form_group">
                <label className="sub_title" htmlFor="interest">
                  Niche
                </label>
                <div className="flex flex-wrap form_style gap-7">
                  {interests.map((interest) => (
                    <button
                      key={interest.value}
                      id={interest.value}
                      className={`interest-button ${
                        selectedInterests.includes(interest.value)
                          ? "selected"
                          : ""
                      }`}
                      onClick={(event) => handleCheckboxChange(event)}
                    >
                      {interest.label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <GenerateButton>Generate Content</GenerateButton>

                <a className="link" href=""></a>
              </div>
              <a className="link" href=""></a>
              <a className="link" href=""></a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FormContainer;
