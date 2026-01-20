import { useQuery } from "@tanstack/react-query";
import { fetchBlogById } from "../api/blogs";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

interface Props {
  blogId: number | null;
}

export default function BlogDetail({ blogId }: Props) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["blog", blogId],
    queryFn: () => fetchBlogById(blogId!),
    enabled: !!blogId,
  });

  if (!blogId) {
    return (
      <p className="text-muted-foreground">
        Select a blog to read
      </p>
    );
  }

  if (isLoading) {
    return (
      <Skeleton className="h-[500px] w-full" />
    );
  }

  if (isError) {
    return (
      <p className="text-red-500">
        Failed to load blog.
      </p>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      {/* Cover Image */}
      <img
        src={data!.coverImage}
        alt={data!.title}
        className="w-full h-[360px] object-cover"
      />

      <div className="p-8 space-y-6">
        {/* Categories */}
        <div className="flex gap-2 flex-wrap">
          {data!.category.map(cat => (
            <Badge key={cat}>{cat}</Badge>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold leading-tight">
          {data!.title}
        </h1>

        {/* Date */}
        <p className="text-sm text-muted-foreground">
          {new Date(data!.date).toDateString()}
        </p>

        {/* Blog Content */}
        <div className="space-y-4 leading-relaxed text-gray-700">
          {/*
            Blog content is stored as plain text.
            It may contain escaped newline characters (\\n) from JSON or form input.
            We convert them into real newlines and then split by empty lines
            to render readable paragraphs without using HTML.
          */}
          {data!.content
            .replace(/\\n/g, "\n")
            .split(/\n\s*\n/)
            .map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
        </div>
      </div>
    </div>
  );
}
