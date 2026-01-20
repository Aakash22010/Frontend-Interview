import type { Blog } from "../types/blog";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Props {
  blog: Blog;
  active: boolean;
  onSelect: () => void;
}

export default function BlogCard({ blog, active, onSelect }: Props) {
  return (
    <Card
      onClick={onSelect}
      className={`cursor-pointer transition ${
        active ? "border-primary bg-primary/5" : "hover:border-primary/50"
      }`}
    >
      <CardContent className="p-4 space-y-2">
        <div className="flex gap-2 flex-wrap">
          {blog.category.map(cat => (
            <Badge key={cat} variant="outline">
              {cat}
            </Badge>
          ))}
        </div>

        <h3 className="font-semibold leading-snug">
          {blog.title}
        </h3>

        <p className="text-sm text-muted-foreground line-clamp-2">
          {blog.description}
        </p>

        <p className="text-xs text-muted-foreground">
          {new Date(blog.date).toDateString()}
        </p>
      </CardContent>
    </Card>
  );
}
