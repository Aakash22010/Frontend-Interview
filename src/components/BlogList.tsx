import { useQuery } from "@tanstack/react-query";
import { fetchBlogs } from "../api/blogs";
import BlogCard from "./BlogCard";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMemo, useState } from "react";

interface Props {
  selectedId: number | null;
  onSelect: (id: number) => void;
}

type SortOption = "newest" | "oldest" | "az";

export default function BlogList({ selectedId, onSelect }: Props) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
  });

  const [sort, setSort] = useState<SortOption>("newest");
  const [category, setCategory] = useState("all");

  // Collect unique categories for filter dropdown
  const categories = useMemo(() => {
    if (!data) return [];
    const set = new Set<string>();
    data.forEach(blog => blog.category.forEach(cat => set.add(cat)));
    return Array.from(set);
  }, [data]);

  // Apply filtering and sorting before rendering
  const processedBlogs = useMemo(() => {
    if (!data) return [];

    let blogs = [...data];

    // Category filter
    if (category !== "all") {
      blogs = blogs.filter(blog => blog.category.includes(category));
    }

    // Sorting logic
    if (sort === "newest") {
      blogs.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    } else if (sort === "oldest") {
      blogs.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );
    } else {
      blogs.sort((a, b) => a.title.localeCompare(b.title));
    }

    return blogs;
  }, [data, sort, category]);

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(4)].map((_, i) => (
          <Skeleton key={i} className="h-32 w-full" />
        ))}
      </div>
    );
  }

  if (isError) {
    return <p className="text-red-500">Failed to load blogs.</p>;
  }

  return (
    <div className="h-full flex flex-col gap-4">
      {/* Filter controls */}
      <div className="grid grid-cols-2 gap-3">
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger>
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map(cat => (
              <SelectItem key={cat} value={cat}>
                {cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={sort} onValueChange={v => setSort(v as SortOption)}>
          <SelectTrigger>
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="oldest">Oldest</SelectItem>
            <SelectItem value="az">Title (A–Z)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Scrollable list */}
      <div className="flex-1 overflow-y-auto pr-2 space-y-4">
        {processedBlogs.length === 0 ? (
          <p className="text-sm text-muted-foreground text-center mt-10">
            No blogs found.
          </p>
        ) : (
          processedBlogs.map(blog => (
            <BlogCard
              key={blog.id}
              blog={blog}
              active={blog.id === selectedId}
              onSelect={() => onSelect(blog.id)}
            />
          ))
        )}
      </div>
    </div>
  );
}
