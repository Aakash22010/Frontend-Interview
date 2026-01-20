# CA Monk Frontend Assignment – Aakash Dahiya

A modern blog application built as part of the CA Monk Frontend Developer Intern assignment.  
The project demonstrates real-world React patterns, clean UI, and proper server-state management.

---

## 🛠 Tech Stack

- **React**
- **TypeScript**
- **TanStack Query** – Server state & caching
- **Tailwind CSS** – Styling
- **shadcn/ui** – UI components
- **JSON Server** – Mock backend API

---

## ✨ Features

- Blog listing with master–detail layout
- Create blog using popup modal
- Real-time cache invalidation after blog creation
- Sorting (Newest, Oldest, A–Z)
- Category-based filtering
- Sticky sidebar with independently scrollable blog list
- Proper rendering of multi-paragraph blog content
- Fully responsive (desktop & mobile navigation)

---

## ⚙️ Setup & Run Locally

```bash
# 1. Clone the repository
git clone [<repo-url>](https://github.com/Aakash22010/Frontend-Interview.git)
cd camonk-interview

# 2. Install dependencies
npm install

# 3. Start JSON Server (runs on port 3001)
npm run server

# 4. Start the development server (runs on port 5173)
npm run dev
