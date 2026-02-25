import { ExternalLink } from 'lucide-react';

interface Resource {
  title: string;
  description: string;
  url?: string;
}

interface ResourceListProps {
  resources: Resource[];
}

export default function ResourceList({ resources }: ResourceListProps) {
  return (
    <ul className="space-y-4">
      {resources.map((resource, index) => (
        <li key={index} className="border-l-2 border-primary/30 pl-4">
          <h4 className="font-semibold text-lg mb-1">
            {resource.url ? (
              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors inline-flex items-center gap-2"
              >
                {resource.title}
                <ExternalLink className="w-4 h-4" />
              </a>
            ) : (
              resource.title
            )}
          </h4>
          <p className="text-muted-foreground leading-relaxed">{resource.description}</p>
        </li>
      ))}
    </ul>
  );
}
