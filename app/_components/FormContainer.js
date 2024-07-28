"use client";

import { useEffect, useRef, useState } from "react";
import FormInterests from "./FormInterests";
import GenerateButton from "./GenerateButton";
import StreamingContainer from "./StreamingContainer";

function FormContainer() {
  const interests = FormInterests();
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleCheckboxChange = (event) => {
    event.preventDefault();

    const value = event.target.id;
    setSelectedInterests((prevSelectedInterests) =>
      prevSelectedInterests.includes(value)
        ? prevSelectedInterests.filter((interest) => interest !== value)
        : [...prevSelectedInterests, value]
    );
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const dropdownElement = dropdownRef.current;
    if (isDropdownOpen) {
      dropdownElement.style.maxHeight = `${dropdownElement.scrollHeight}px`;
    } else {
      dropdownElement.style.maxHeight = "0px";
    }
  }, [isDropdownOpen]);

  return (
    <section id="generate" className="max-w-6xl mx-auto w-full pt-12 px-4">
      <div className="flex flex-col justify-center items-center">
        <div className="form-container w-full">
          <div className="form_area">
            <p className="title">What do you want to write?</p>
            <form action="" className="space-y-8 w-full lg:w-auto">
              <div className="form_group">
                <label className="sub_title" htmlFor="brief">
                  Content Brief
                </label>
                <textarea
                  placeholder="Create a comedy script for TikTok that is engaging and will get a lot of views."
                  name="brief"
                  className="form_style"
                  type="text"
                  required
                />
              </div>
              <div className="form_group">
                <label className="sub_title" htmlFor="hashtags">
                  HashTags (Optional)
                </label>
                <input
                  placeholder="Separate each hashtag with comma"
                  id="hashtags"
                  name="hashtags"
                  className="form_style"
                  type="text"
                />
              </div>
              <div className="form_group">
                <div className="flex space-x-2 items-center mb-4">
                  <label className="sub_title" htmlFor="interest">
                    Niche
                  </label>
                  <button
                    className="select-btn"
                    onClick={toggleDropdown}
                    type="button"
                  >
                    <div className="action">
                      <span
                        className={`option-1 ${
                          isDropdownOpen ? "inactive" : "active"
                        }`}
                      >
                        Select Interests
                      </span>
                      <span
                        className={`option-2 ${
                          isDropdownOpen ? "active" : "inactive"
                        }`}
                      >
                        Close Interests
                      </span>
                    </div>
                  </button>
                </div>

                <div
                  ref={dropdownRef}
                  className={`flex flex-wrap justify-center interest_style gap-6 dropdown w-full lg:w-auto mx-auto ${
                    isDropdownOpen ? "open" : ""
                  }`}
                  style={
                    isDropdownOpen
                      ? {
                          boxShadow: "3px 4px 0px 1px #2a1454",
                          padding: "10px 23px",
                        }
                      : {}
                  }
                >
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
                <GenerateButton>GENERATE CONTENT</GenerateButton>
              </div>
            </form>
            <div id="streaming" className="w-full mt-16">
              <StreamingContainer />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FormContainer;
