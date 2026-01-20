import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import BlogList from "./components/BlogList";
import BlogDetail from "./components/BlogDetail";
import CreateBlogForm from "./components/CreateBlogForm";

export default function App() {
  const [selectedBlog, setSelectedBlog] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-muted">
      {/* Global navigation */}
      <Navbar />

      {/* Page intro section */}
      <Hero />

      {/* Main layout */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Sidebar */}
        <aside className="lg:col-span-4">
          <div
            className="
              sticky top-24
              h-[calc(100vh-6rem)]
              flex flex-col gap-6
            "
          >

            {/* Popup blog creation */}
            <CreateBlogForm />

            {/* Scrollable blog list */}
            <div className="flex-1 overflow-hidden">
              <BlogList
                selectedId={selectedBlog}
                onSelect={setSelectedBlog}
              />
            </div>
          </div>
        </aside>

        {/* Main blog content */}
        <section className="lg:col-span-8">
          <BlogDetail blogId={selectedBlog} />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
