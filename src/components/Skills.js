import { ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { stackGroups } from "../data";

export default function Skills() {
  return (
    <section id="stack" className="border-t border-white border-opacity-10 bg-black py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-3xl">
          <ChipIcon className="mb-5 h-10 w-10 text-green-300" />
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-300">
            Stack and strengths
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            A full-stack base, now biased toward backend systems.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {stackGroups.map((group) => (
            <section key={group.title} className="rounded border border-white border-opacity-10 bg-gray-900 p-6">
              <h3 className="text-xl font-semibold text-white">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded bg-black bg-opacity-40 px-3 py-2 text-sm text-gray-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
