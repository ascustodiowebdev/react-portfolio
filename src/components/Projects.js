import { ExternalLinkIcon, ServerIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-white border-opacity-10 bg-gray-900 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-3xl">
          <ServerIcon className="mb-5 h-10 w-10 text-green-300" />
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-300">
            Selected projects
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Product-focused builds across maps, commerce, and AI-ready systems.
          </h2>
          <p className="mt-5 text-lg leading-8 text-gray-300">
            A focused selection of recent full-stack products, with stronger emphasis
            on backend architecture, data flows, authentication, integrations, and
            operational tooling.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="project-card group flex min-h-full flex-col overflow-hidden rounded border border-white border-opacity-10 bg-black bg-opacity-40 transition hover:border-green-300 hover:border-opacity-60"
            >
              <div className="project-image-wrap">
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  className={`project-image ${project.imageFit === "contain" ? "project-image-contain" : ""}`}
                />
                <div className="project-image-sheen" />
                <span className="absolute left-4 top-4 rounded bg-black bg-opacity-70 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-green-200">
                  {project.privateRepo ? "Private build" : "Public repo"}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-green-300">{project.status}</p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">{project.title}</h3>
                    <p className="mt-2 text-gray-400">{project.subtitle}</p>
                  </div>
                  {!project.privateRepo && (
                    <a
                      href={project.link}
                      className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded border border-white border-opacity-10 text-gray-300 hover:border-green-300 hover:text-green-200"
                      aria-label={`Open ${project.title}`}
                    >
                      <ExternalLinkIcon className="h-5 w-5" />
                    </a>
                  )}
                </div>

                <p className="mt-6 leading-7 text-gray-300">{project.description}</p>
                <p className="mt-4 leading-7 text-gray-400">{project.impact}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded border border-white border-opacity-10 px-3 py-1 text-sm text-gray-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {project.privateRepo && (
                  <p className="mt-auto pt-6 text-sm font-medium text-gray-500">
                    Private repository, shown here as a product preview.
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
