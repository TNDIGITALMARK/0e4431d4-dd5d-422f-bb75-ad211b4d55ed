import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const skills = [
    { name: "Web Design", level: 95 },
    { name: "UI/UX Design", level: 90 },
    { name: "Branding", level: 88 },
    { name: "Mobile App Design", level: 85 },
    { name: "Front-end Development", level: 92 },
    { name: "Digital Marketing", level: 80 },
  ];

  const team = [
    {
      id: 1,
      name: "John Doe",
      role: "Creative Director",
      image: "/generated/team-profile.png",
      bio: "15+ years of experience leading innovative design solutions",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Lead Designer",
      image: "/generated/team-profile.png",
      bio: "Specializing in user-centered design and brand strategy",
    },
    {
      id: 3,
      name: "Mike Johnson",
      role: "Senior Developer",
      image: "/generated/team-profile.png",
      bio: "Full-stack expert with passion for clean, efficient code",
    },
  ];

  const certifications = [
    "Adobe Certified Expert (ACE)",
    "Google UX Design Certificate",
    "Certified Scrum Master (CSM)",
    "AWS Certified Solutions Architect",
  ];

  return (
    <>
      <Navigation />

      <main className="pt-24 pb-16 min-h-screen bg-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              ABOUT CREATIVE STUDIOS
            </h1>
            <p className="text-lg text-[hsl(var(--gray-600))] max-w-3xl mx-auto">
              We are a passionate team of designers, developers, and strategists
              dedicated to creating impactful digital experiences that drive
              results and exceed expectations.
            </p>
          </div>

          {/* Story Section */}
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-[hsl(var(--gray-600))] mb-4 leading-relaxed">
                  Founded in 2012, Creative Studios began with a simple mission:
                  to help businesses tell their stories through exceptional
                  design and technology. What started as a small design agency
                  has grown into a full-service digital studio serving clients
                  worldwide.
                </p>
                <p className="text-[hsl(var(--gray-600))] mb-4 leading-relaxed">
                  Our approach combines creative vision with strategic thinking,
                  ensuring that every project not only looks beautiful but also
                  achieves measurable business results. We believe in
                  collaboration, innovation, and continuous improvement.
                </p>
                <p className="text-[hsl(var(--gray-600))] leading-relaxed">
                  Today, we're proud to have worked with over 85 clients across
                  various industries, from startups to established enterprises,
                  helping them achieve their digital goals and grow their brands.
                </p>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/generated/project-web-design.png"
                  alt="Our studio workspace"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Our Expertise
            </h2>
            <div className="max-w-3xl mx-auto">
              {skills.map((skill) => (
                <div key={skill.name} className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-[hsl(var(--foreground))]">
                      {skill.name}
                    </span>
                    <span className="text-[hsl(var(--gray-600))]">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-[hsl(var(--gray-100))] rounded-full h-3">
                    <div
                      className="bg-[hsl(var(--orange-accent))] h-3 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member) => (
                <div
                  key={member.id}
                  className="text-center bg-white border border-[hsl(var(--border))] rounded-lg p-6 shadow hover:shadow-md transition-shadow"
                >
                  <div className="relative w-48 h-48 mx-auto mb-4 rounded-lg overflow-hidden grayscale">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-1 text-[hsl(var(--foreground))]">
                    {member.name}
                  </h3>
                  <p className="text-sm text-[hsl(var(--orange-accent))] font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-[hsl(var(--gray-600))]">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Certifications & Education
            </h2>
            <div className="max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-[hsl(var(--gray-50))] p-4 rounded-lg"
                  >
                    <svg
                      className="w-6 h-6 text-[hsl(var(--orange-accent))] flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm font-medium text-[hsl(var(--foreground))]">
                      {cert}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Availability Status */}
          <div className="mb-20 bg-[hsl(var(--gray-50))] rounded-lg p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <h3 className="text-2xl font-bold text-[hsl(var(--foreground))]">
                Currently Available for New Projects
              </h3>
            </div>
            <p className="text-[hsl(var(--gray-600))] mb-6">
              We're accepting new clients and excited to help bring your vision
              to life. Let's discuss your project!
            </p>
            <Link href="/contact">
              <button className="btn-primary">GET IN TOUCH</button>
            </Link>
          </div>

          {/* Values Section */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[hsl(var(--navy-primary))] rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Quality First</h3>
                <p className="text-[hsl(var(--gray-600))]">
                  We never compromise on quality. Every project receives our full
                  attention and expertise.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[hsl(var(--navy-primary))] rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Collaboration</h3>
                <p className="text-[hsl(var(--gray-600))]">
                  We work closely with clients, treating your success as our own.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[hsl(var(--navy-primary))] rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-[hsl(var(--gray-600))]">
                  We stay ahead of trends and embrace new technologies to deliver
                  cutting-edge solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
