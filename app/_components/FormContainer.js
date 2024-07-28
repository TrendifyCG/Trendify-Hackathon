"use client";

import { useEffect, useRef, useState } from "react";
import FormInterests from "./FormInterests";
import GenerateButton from "./GenerateButton";
import StreamingContainer from "./StreamingContainer";

function FormContainer() {
  const interests = FormInterests();
  const [selectedNiches, setSelectedNiches] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [reset, setReset] = useState(false);
  const [showStreaming, setShowStreaming] = useState(false);

  const [briefing, setBriefing] = useState("");
  const [hashtags, setHashtags] = useState("");
  const [maximumLength, setMaximumLength] = useState("");
  const [generatedContent, setGeneratedContent] = useState("");

  const validateForm = () => {
    const newErrors = {};
    if (!briefing) {
      newErrors.briefing = "Briefing is required";
    }
    if (!maximumLength || maximumLength < 50 || maximumLength > 1000) {
      newErrors.maximumLength = "Please enter a valid number from 50 - 1000";
    }
    if (selectedNiches.length === 0) {
      newErrors.selectedNiches = "At least one niche must be selected";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleGenerate = async () => {
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setGeneratedContent("");
    setReset(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SITE_URL}/api/generate`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            briefing,
            maximumLength,
            hashtags,
            niches: selectedNiches,
          }),
        }
      );
      const data = await response.json();
      setGeneratedContent(data.content);
      setIsLoading(false);
      setShowStreaming(true);
      setReset(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!generatedContent) {
      setShowStreaming(false);
    }
  }, [generatedContent]);

  const handleCheckboxChange = (event) => {
    event.preventDefault();

    const value = event.target.id;
    setSelectedNiches((prevSelectedInterests) =>
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
            <div className="space-y-8 w-full lg:w-auto">
              <div className="form_group">
                <label className="sub_title" htmlFor="brief">
                  Content Brief
                </label>
                <textarea
                  placeholder="Create a comedy script for TikTok that is engaging and will get a lot of views."
                  name="brief"
                  className="form_style"
                  type="text"
                  onChange={(e) => setBriefing(e.target.value)}
                  required
                />
                {errors.briefing && <p className="error">{errors.briefing}</p>}
              </div>

              <div className="form_group flex-grow">
                <label className="sub_title" htmlFor="hashtags">
                  HashTags (Optional)
                </label>
                <input
                  placeholder="Separate each hashtag with a space"
                  id="hashtags"
                  name="hashtags"
                  className="form_style"
                  type="text"
                  onChange={(e) => setHashtags(e.target.value)}
                />
              </div>
              <div className="form_group w-64">
                <label className="sub_title" htmlFor="maximumLength">
                  Maximum Length
                </label>
                <input
                  placeholder="300"
                  min={50}
                  max={1000}
                  id="maximumLength"
                  name="maximumLength"
                  className="form_style"
                  type="number"
                  onChange={(e) => setMaximumLength(e.target.value)}
                />
                {errors.maximumLength && (
                  <p className="error">{errors.maximumLength}</p>
                )}
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
                  {errors.selectedNiches && (
                    <p className="text-red-500 font-bold">
                      {errors.selectedNiches}
                    </p>
                  )}
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
                        selectedNiches.includes(interest.value)
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
                <GenerateButton
                  handleGenerate={handleGenerate}
                  isLoading={isLoading}
                >
                  GENERATE CONTENT
                </GenerateButton>
              </div>
            </div>
            <div
              id="streaming"
              className={`w-full mt-16 ${
                showStreaming ? "slide-down" : "hidden"
              }`}
            >
              <StreamingContainer
                initialContent={generatedContent}
                reset={reset}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FormContainer;
