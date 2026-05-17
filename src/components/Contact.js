import { ArrowRightIcon, MailIcon } from "@heroicons/react/solid";
import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-white border-opacity-10 bg-gray-900 py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <MailIcon className="mb-5 h-10 w-10 text-green-300" />
          <h2 className="text-3xl font-semibold text-white">Want to build something useful?</h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            I am interested in backend-heavy full-stack work, Laravel products,
            AI-assisted tooling, API integrations, and practical systems that need
            someone who can ship across the stack.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="mailto:andre.custodio.webdev@gmail.com"
            className="inline-flex items-center justify-center rounded bg-green-600 px-5 py-3 font-semibold text-white hover:bg-green-500"
          >
            Email me
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/andrecustodio89/"
            className="inline-flex items-center justify-center rounded border border-white border-opacity-15 px-5 py-3 font-semibold text-white hover:border-green-300 hover:text-green-200"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
