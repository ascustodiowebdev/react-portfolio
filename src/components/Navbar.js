import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-white border-opacity-10 bg-black bg-opacity-95">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between px-5 py-4 sm:flex-row">
        <a href="#about" className="text-lg font-semibold tracking-wide text-white">
          Andre Custodio
        </a>
        <nav className="mt-3 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-300 sm:mt-0">
          <a href="#projects" className="hover:text-white">
            Projects
          </a>
          <a href="#stack" className="hover:text-white">
            Stack
          </a>
          <a href="https://github.com/ascustodiowebdev" className="hover:text-white">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/andrecustodio89/"
            className="inline-flex items-center rounded bg-green-600 px-3 py-2 font-medium text-white hover:bg-green-500"
          >
            LinkedIn
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </a>
        </nav>
      </div>
    </header>
  );
}
