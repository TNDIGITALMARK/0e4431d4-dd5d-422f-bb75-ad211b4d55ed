"use client";

import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";
import Image from "next/image";
import { useState } from "react";

export default function PortfolioPage() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Redesign",
      category: "web_design",
      client: "Sustainable Fashion Brand",
      image: "/generated/project-web-design.png",
      result: "40% conversion increase",
      description: "Complete redesign of online shopping experience with focus on sustainability messaging and streamlined checkout process.",
      technologies: ["React", "Next.js", "Shopify", "Tailwind CSS"],
    },
    {
      id: 2,
      title: "Fitness Tracking App",
      category: "mobile_apps",
      client: "FitTrack Startup",
      image: "/generated/project-mobile-app.png",
      result: "50k downloads in first month",
      description: "Mobile app interface design with intuitive workout tracking, progress visualization, and social features.",
      technologies: ["React Native", "TypeScript", "Firebase", "Redux"],
    },
    {
      id: 3,
      title: "Restaurant Chain Identity",
      category: "branding",
      client: "Local Restaurant Chain",
      image: "/generated/project-abstract-1.png",
      result: "Expansion to 5 locations",
      description: "Complete brand identity system including logo, color palette, typography, and marketing materials.",
      technologies: ["Adobe Illustrator", "Photoshop", "Figma"],
    },
    {
      id: 4,
      title: "Consulting Firm Website",
      category: "web_design",
      client: "Business Consulting Firm",
      image: "/generated/project-responsive.png",
      result: "200% more leads generated",
      description: "Professional website development with service showcases, case studies, and lead generation forms.",
      technologies: ["WordPress", "PHP", "MySQL", "JavaScript"],
    },
    {
      id: 5,
      title: "Health Monitoring App",
      category: "mobile_apps",
      client: "Healthcare Tech Company",
      image: "/generated/project-mobile-app.png",
      result: "Featured in App Store",
      description: "Comprehensive health tracking application with data visualization and doctor integration features.",
      technologies: ["Flutter", "Dart", "Cloud Functions", "Chart.js"],
    },
    {
      id: 6,
      title: "Tech Startup Branding",
      category: "branding",
      client: "SaaS Startup",
      image: "/generated/project-abstract-1.png",
      result: "Successful Series A funding",
      description: "Modern brand identity for innovative software company targeting enterprise clients.",
      technologies: ["Adobe Creative Suite", "Figma", "Brand Guidelines"],
    },
    {
      id: 7,
      title: "Real Estate Platform",
      category: "web_design",
      client: "Property Management Company",
      image: "/generated/project-web-design.png",
      result: "300% increase in listings",
      description: "Interactive property showcase platform with virtual tours, search filters, and agent portal.",
      technologies: ["Vue.js", "Node.js", "MongoDB", "MapBox API"],
    },
    {
      id: 8,
      title: "Educational App",
      category: "mobile_apps",
      client: "EdTech Startup",
      image: "/generated/project-mobile-app.png",
      result: "100k+ active users",
      description: "Gamified learning platform for children with progress tracking and parent dashboard.",
      technologies: ["React Native", "GraphQL", "AWS", "Redux Toolkit"],
    },
  ];

  const categories = [
    { id: "all", label: "ALL PROJECTS" },
    { id: "web_design", label: "WEB DESIGN" },
    { id: "mobile_apps", label: "MOBILE APPS" },
    { id: "branding", label: "BRANDING" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <>
      <Navigation />

      <main className="pt-24 pb-16 min-h-screen bg-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              COMPLETE PORTFOLIO SHOWCASE
            </h1>
            <p className="text-lg text-[hsl(var(--gray-600))] max-w-2xl mx-auto">
              Explore our full range of work demonstrating expertise across web
              design, mobile applications, and brand identity.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                  filter === category.id
                    ? "bg-[hsl(var(--navy-primary))] text-white shadow-md"
                    : "bg-white border border-[hsl(var(--border))] text-[hsl(var(--foreground))] hover:border-[hsl(var(--navy-primary))]"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white border border-[hsl(var(--border))] rounded-lg overflow-hidden shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Project Image */}
                <div className="relative h-64 bg-[hsl(var(--navy-primary))] p-6">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-[hsl(var(--blue-light))] text-white rounded-full">
                      {project.category.replace("_", " ").toUpperCase()}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-[hsl(var(--foreground))]">
                    {project.title}
                  </h3>

                  <p className="text-sm text-[hsl(var(--gray-600))] mb-1">
                    <strong>Client:</strong> {project.client}
                  </p>

                  <p className="text-sm text-[hsl(var(--orange-accent))] font-medium mb-3">
                    <strong>Result:</strong> {project.result}
                  </p>

                  <p className="text-sm text-[hsl(var(--gray-600))] mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 bg-[hsl(var(--gray-50))] text-[hsl(var(--gray-600))] rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button className="btn-secondary w-full text-xs">
                    VIEW CASE STUDY
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-[hsl(var(--navy-primary))] mb-2">
                150+
              </h3>
              <p className="text-sm text-[hsl(var(--gray-600))]">
                Projects Completed
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-[hsl(var(--navy-primary))] mb-2">
                85+
              </h3>
              <p className="text-sm text-[hsl(var(--gray-600))]">
                Happy Clients
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-[hsl(var(--navy-primary))] mb-2">
                12
              </h3>
              <p className="text-sm text-[hsl(var(--gray-600))]">
                Years Experience
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-[hsl(var(--navy-primary))] mb-2">
                20+
              </h3>
              <p className="text-sm text-[hsl(var(--gray-600))]">
                Industry Awards
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
