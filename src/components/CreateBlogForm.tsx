import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBlog } from "../api/blogs";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function CreateBlogForm() {
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);

  const [form, setForm] = useState({
    title: "",
    category: "",
    description: "",
    content: "",
    coverImage: "",
  });

  const mutation = useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      // Refresh blog list after successful creation
      queryClient.invalidateQueries({ queryKey: ["blogs"] });

      // Reset form and close modal
      setForm({
        title: "",
        category: "",
        description: "",
        content: "",
        coverImage: "",
      });
      setOpen(false);
    },
  });

  const submit = () => {
    mutation.mutate({
      ...form,
      category: form.category.split(",").map(c => c.trim()),
      date: new Date().toISOString(),
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
          + Create Blog
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[520px]">
        <DialogHeader>
          <DialogTitle>Create New Blog</DialogTitle>
        </DialogHeader>

        <div className="space-y-3 mt-2">
          <Input placeholder="Title"
            value={form.title}
            onChange={e => setForm({ ...form, title: e.target.value })}
          />

          <Input placeholder="Categories (comma separated)"
            value={form.category}
            onChange={e => setForm({ ...form, category: e.target.value })}
          />

          <Input placeholder="Cover Image URL"
            value={form.coverImage}
            onChange={e => setForm({ ...form, coverImage: e.target.value })}
          />

          <Textarea placeholder="Short description"
            value={form.description}
            onChange={e => setForm({ ...form, description: e.target.value })}
          />

          <Textarea placeholder="Full content" rows={5}
            value={form.content}
            onChange={e => setForm({ ...form, content: e.target.value })}
          />

          <Button
            onClick={submit}
            disabled={mutation.isPending}
            className="w-full bg-indigo-600 hover:bg-indigo-700"
          >
            {mutation.isPending ? "Publishing..." : "Publish Blog"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
