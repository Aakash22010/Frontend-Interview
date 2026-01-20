export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold">
              C
            </div>
            <span className="font-semibold text-lg text-white">
              CA MONK
            </span>
          </div>
          <p className="text-sm leading-relaxed text-slate-400">
            Empowering the next generation of financial leaders with tools,
            community, and knowledge.
          </p>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-white font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Webinars</li>
            <li className="hover:text-white cursor-pointer">Case Studies</li>
          </ul>
        </div>

        {/* Platform */}
        <div>
          <h4 className="text-white font-semibold mb-4">Platform</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Job Board</li>
            <li className="hover:text-white cursor-pointer">Practice Tests</li>
            <li className="hover:text-white cursor-pointer">Mentorship</li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="text-white font-semibold mb-4">Connect</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">LinkedIn</li>
            <li className="hover:text-white cursor-pointer">Twitter</li>
            <li className="hover:text-white cursor-pointer">Instagram</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-2">
          <span>© 2024 CA Monk. All rights reserved.</span>
          <div className="flex gap-4">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
