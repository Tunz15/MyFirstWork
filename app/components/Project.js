import React from 'react';

const projects = [
  {
    title: "My Own Portfolio",
    description: "A personal portfolio built with Next.js, showcasing my projects and skills.",
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    link: "https://my-new-ten.vercel.app/",
    image: "/portfolio.jpg",  // Image should be relative to the public folder
  },

  {
    title: "Website Design",
    description: "Using VS Code in a project, showcasing my skills in coding.",
    tech: ["Next.js", "CSS", "Vercel", "VS Code"],
    link: "https://my-new-ten.vercel.app/",
    image: "/WebCode.png",  // Image should be relative to the public folder
  },

  {
    title: "My Works",
    description: "A personal project built with Note++, showcasing my skills.",
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    link: "https://my-new-ten.vercel.app/",
    image: "/note.jpg",  // Image should be relative to the public folder
  },
];

export default function Project() {
  return (
    <section id="projects" className="py-20 bg-dark text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">Projects</h2>
        <p className="text-lg mt-2">Here are some of the projects I have worked on.</p>
      </div>

      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <Image src={project.image} alt={project.title} className="rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="text-gray-400 mt-2">{project.description}</p>
            <div className="mt-3">
              {project.tech.map((tech, i) => (
                <span key={i} className="bg-blue text-white px-2 py-1 rounded text-sm mr-2">
                  {tech}
                </span>
              ))}
            </div>
            <a 
              href={project.link} 
              target="_blank" 
              className="mt-4 inline-block text-blue hover:underline"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}