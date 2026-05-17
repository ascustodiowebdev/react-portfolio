import { ArrowRightIcon, SparklesIcon } from "@heroicons/react/solid";
import React from "react";
import { experience, focusAreas } from "../data";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="./hero-systems-ai.png"
          alt=""
          className="hero-image h-full w-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-black opacity-90" />
      </div>

      <div className="relative mx-auto grid min-h-screen max-w-6xl items-center gap-10 px-5 py-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="mb-5 inline-flex items-center rounded-full border border-green-400 border-opacity-40 bg-gray-900 bg-opacity-80 px-4 py-2 text-sm font-medium text-green-200">
            <SparklesIcon className="mr-2 h-4 w-4" />
            Backend / AI-focused full-stack developer
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Backend-first full-stack developer building Laravel, React and
            AI-assisted product systems.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            I am Andre Custodio, a full-stack developer now leaning deeper into
            backend engineering and AI. I like building the parts users depend on:
            auth, admin flows, data models, integrations, operational tools, and
            the interface needed to make them usable.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded bg-green-600 px-5 py-3 font-semibold text-white hover:bg-green-500"
            >
              View current work
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </a>
            <a
              href="https://github.com/ascustodiowebdev"
              className="inline-flex items-center justify-center rounded border border-white border-opacity-15 px-5 py-3 font-semibold text-white hover:border-green-300 hover:text-green-200"
            >
              Open GitHub
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded border border-white border-opacity-10 bg-gray-900 bg-opacity-90 p-6 shadow-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-300">
              Current focus
            </p>
            <div className="mt-5 space-y-3">
              {focusAreas.map((area) => (
                <div key={area} className="flex items-start">
                  <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-green-400" />
                  <span className="ml-3 text-gray-100">{area}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 grid gap-4">
            {experience.map((item) => (
              <p
                key={item}
                className="rounded border border-white border-opacity-10 bg-black bg-opacity-40 p-4 text-sm leading-6 text-gray-300"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
