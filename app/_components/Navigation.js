"use client";

import Link from "next/link";

export default function Navigation() {
  function handleClick(e) {
    e.preventDefault();

    const targetSection = document.getElementById("howitworks");

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link href="#" className="cta" onClick={(e) => handleClick(e)}>
            How it Works
          </Link>
        </li>
      </ul>
    </nav>
  );
}
