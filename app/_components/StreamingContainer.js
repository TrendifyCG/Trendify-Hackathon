"use client";

import DOMPurify from "isomorphic-dompurify";
import { useEffect, useRef, useState } from "react";
import { formatContentToHTML } from "../_utils/contentFormatter";

function StreamingContainer({ initialContent, reset }) {
  const [content, setContent] = useState(initialContent);
  const contentRef = useRef(null);
  const streamRef = useRef(null);
  const [copyText, setCopyText] = useState("Copy");

  useEffect(() => {
    if (reset) {
      setContent("");
    }
  }, [reset]);

  useEffect(() => {
    const encodedBrief = encodeURIComponent(JSON.stringify(initialContent));
    const eventSource = new EventSource(`/api/stream?brief=${encodedBrief}`);

    eventSource.onmessage = (event) => {
      if (event.data === "[DONE]") {
        eventSource.close();
      } else {
        setContent((prevContent) => prevContent + JSON.parse(event.data));
        streamRef.current.scrollTop = contentRef.current.scrollHeight;
      }
    };

    eventSource.onerror = () => {
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, [initialContent]);

  const formattedContent = formatContentToHTML(content);
  const sanitizedContent = DOMPurify.sanitize(formattedContent);

  function handleCopy() {
    if (contentRef.current) {
      const range = document.createRange();
      range.selectNodeContents(contentRef.current);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);

      try {
        document.execCommand("copy");
        setCopyText("Copied!");
        setTimeout(() => {
          setCopyText("Copy");
        }, 2000);
      } catch (err) {
        console.error("Failed to copy: ", err);
      }

      selection.removeAllRanges();
    }
  }

  return (
    <div className="streaming flex flex-col" ref={streamRef}>
      <div className="sticky-button-wrapper flex justify-end">
        <button
          className="copy-all bg-primary-themeSecondary p-2 hover:bg-primary-themePrimary rounded-lg text-white flex items-center font-bold CSS false"
          onClick={handleCopy}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-5 w-5 mr-1"
          >
            <path d="M16 4.038V4c0-.465 0-.697-.051-.888a1.5 1.5 0 0 0-1.06-1.06C14.697 2 14.464 2 14 2h-4c-.465 0-.697 0-.888.051a1.5 1.5 0 0 0-1.06 1.06C8 3.304 8 3.536 8 4v.038m8 0c0 .44-.001.665-.051.85a1.5 1.5 0 0 1-1.06 1.06C14.697 6 14.464 6 14 6h-4c-.465 0-.697 0-.888-.051a1.5 1.5 0 0 1-1.06-1.06C8.001 4.702 8 4.477 8 4.038m8 0c.784.047 1.34.155 1.816.397a4 4 0 0 1 1.748 1.748C20 7.04 20 8.16 20 10.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C16.96 22 15.84 22 13.6 22h-3.2c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C4 18.96 4 17.84 4 15.6v-5.2c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748c.475-.242 1.032-.35 1.816-.398"></path>
          </svg>
          <span className="copy-all__text">{copyText}</span>
        </button>
      </div>
      <div className="card-info h-auto p-4 flex-grow">
        <div
          className="title text-left"
          id="content-area"
          ref={contentRef}
          dangerouslySetInnerHTML={{ __html: sanitizedContent }}
        ></div>
      </div>
    </div>
  );
}

export default StreamingContainer;
