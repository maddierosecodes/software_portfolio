import InteractiveContainer from '../molecules/InteractiveContainer';
import { projectsData } from '@/config/projectsData';

export default function ProjectsList() {
  return <InteractiveContainer infoArray={projectsData} />;
}
