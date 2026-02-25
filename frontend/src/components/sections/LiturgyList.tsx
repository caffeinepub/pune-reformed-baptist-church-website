interface LiturgyItem {
  title: string;
  description?: string;
}

interface LiturgyListProps {
  items: LiturgyItem[];
}

export default function LiturgyList({ items }: LiturgyListProps) {
  return (
    <ol className="space-y-4 list-decimal list-inside">
      {items.map((item, index) => (
        <li key={index} className="text-lg">
          <span className="font-semibold">{item.title}</span>
          {item.description && (
            <p className="ml-6 mt-1 text-base text-muted-foreground leading-relaxed">
              {item.description}
            </p>
          )}
        </li>
      ))}
    </ol>
  );
}
