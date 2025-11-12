import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";
import Link from "next/link";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default function HomePage() {
  const featuredProjects = [
    {
      id: 1,
      title: "ABSTRACT BRANDING",
      image: "/generated/project-abstract-1.png",
      category: "Branding",
    },
    {
      id: 2,
      title: "ECHO WEB DESIGN",
      image: "/generated/project-web-design.png",
      category: "Web Design",
    },
    {
      id: 3,
      title: "QUANTUM APP UI",
      image: "/generated/project-mobile-app.png",
      category: "Mobile App",
    },
    {
      id: 4,
      title: "FLUID RESPONSIVE DESIGN",
      image: "/generated/project-responsive.png",
      category: "Responsive Design",
    },
  ];

  const services = [
    {
      id: 1,
      title: "WEB DESIGN & DEVELOPMENT",
      description: "Creating stunning, responsive websites that engage users and drive results.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "BRANDING & IDENTITY",
      description: "Crafting unique brand identities that resonate with your target audience.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "DIGITAL MEDIA PRODUCTION",
      description: "Producing high-quality digital content that captivates and converts.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  const testimonials = [
    {
      id: 1,
      quote: "Working with this team transformed our online presence completely. The new design increased our inquiries by 300% in just two months.",
      author: "Sarah Johnson",
      role: "Marketing Director",
      company: "Tech Innovations Inc.",
    },
    {
      id: 2,
      quote: "Exceptional attention to detail and truly understood our brand vision from day one. The results exceeded all our expectations.",
      author: "Michael Chen",
      role: "Founder",
      company: "StartupX",
    },
  ];

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-white pt-20">
        <div className="container mx-auto text-center px-4">
          <div className="mb-8">
            <div className="inline-block">
              <Image
                src="/generated/project-abstract-1.png"
                alt="Creative geometric illustration"
                width={200}
                height={200}
                className="mb-4"
              />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-wide uppercase">
            CRAFTING DIGITAL EXPERIENCES
            <br />
            THAT LEAVE A MARK.
          </h1>

          <button className="btn-primary mt-6">VIEW PROJECTS</button>

          {/* Featured Projects Grid */}
          <div className="mt-16">
            <h2 className="text-xl font-bold mb-8 text-[hsl(var(--foreground))]">
              OUR FEATURED PROJECTS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {featuredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-[hsl(var(--navy-primary))] rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  <div className="relative w-full aspect-square mb-4">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-white text-sm font-bold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-[hsl(var(--blue-light))] text-xs">
                    {project.category}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Services Section */}
          <div className="mt-20">
            <h2 className="text-xl font-bold mb-8 text-[hsl(var(--foreground))]">
              SERVICES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-white border border-[hsl(var(--border))] rounded-lg p-8 shadow hover:shadow-md transition-shadow"
                >
                  <div className="w-16 h-16 rounded-full bg-[hsl(var(--navy-primary))] flex items-center justify-center mx-auto mb-4 text-white">
                    {service.icon}
                  </div>
                  <h3 className="text-sm font-bold mb-3 text-[hsl(var(--foreground))]">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[hsl(var(--gray-600))] mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <button className="btn-secondary text-xs">LEARN MORE</button>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="mt-20">
            <div className="max-w-md mx-auto">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-lg overflow-hidden grayscale">
                <Image
                  src="/generated/team-profile.png"
                  alt="Creative Director"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="text-sm font-bold mb-2 text-[hsl(var(--foreground))]">
                JOHN DOE - CREATIVE DIRECTOR
              </h4>
              <p className="text-sm text-[hsl(var(--gray-600))] max-w-xs mx-auto">
                Leading innovative design solutions with over 15 years of experience
                in digital creativity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[hsl(var(--navy-primary))] py-16">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            READY TO START YOUR PROJECT?
          </h2>
          <p className="text-[hsl(var(--blue-light))] mb-8">
            Let's create something amazing together
          </p>
          <Link href="/contact">
            <button className="btn-primary">GET IN TOUCH</button>
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12 text-[hsl(var(--foreground))]">
            WHAT OUR CLIENTS SAY
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-[hsl(var(--gray-50))] p-8 rounded-lg shadow-sm"
              >
                <p className="text-[hsl(var(--foreground))] italic mb-4">
                  "{testimonial.quote}"
                </p>
                <div className="text-sm">
                  <p className="font-bold text-[hsl(var(--foreground))]">
                    {testimonial.author}
                  </p>
                  <p className="text-[hsl(var(--gray-600))]">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
