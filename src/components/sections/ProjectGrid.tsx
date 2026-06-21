import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/types/project';

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col"
          >
            <div className="relative h-48">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold mb-2 text-primary">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 flex-grow mb-4">
                {project.description}
              </p>
              <div className="mt-auto">
                <span className="inline-block bg-accent text-white px-3 py-1 rounded-full text-xs">
                  {project.category}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}