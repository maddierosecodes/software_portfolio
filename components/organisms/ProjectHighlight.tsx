import InteractiveCard from '../atoms/InteractiveCard';
import { featuredProject } from '@/config/projectsData';

export default function ProjectHighlight() {
  return (
    <section className="section-container text-center">
      <h2 className="subtitle mb-6">Latest Project</h2>
      <div className="flex justify-center items-center w-3/4 mx-auto">
        <InteractiveCard
          title={featuredProject.title}
          description={featuredProject.description}
          link={featuredProject.link}
          githubLink={featuredProject.githubLink}
          image={featuredProject.image}
          video={featuredProject.video}
        />
      </div>
    </section>
  );
}
