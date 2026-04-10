import { Link } from 'react-router-dom';

interface TopNavBarProps {
  title?: string;
  breadcrumbs?: { label: string; to?: string }[];
}

export default function TopNavBar({ title = 'StudioPipeline', breadcrumbs = [] }: TopNavBarProps) {
  return (
    <header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-16 flex justify-between items-center px-8 bg-[#0b1326]/80 backdrop-blur-xl z-40 border-b border-[#2d3449]/10 shadow-[0_0_32px_rgba(59,130,246,0.06)]">
      <div className="flex items-center gap-8">
        <span className="text-xl font-black tracking-tighter text-[#adc6ff] uppercase font-headline">
          {title}
        </span>

        {breadcrumbs.length > 0 && (
          <nav className="hidden md:flex items-center gap-6">
            {breadcrumbs.map((bc, idx) => (
              <span key={idx} className="flex items-center gap-2">
                {idx > 0 && <span className="material-symbols-outlined text-xs text-on-surface-variant">chevron_right</span>}
                {bc.to ? (
                  <Link to={bc.to} className="text-[#c2c6d6] hover:text-[#dbe2fd] font-headline font-bold text-sm tracking-tight transition-colors">
                    {bc.label}
                  </Link>
                ) : (
                  <span className="text-[#adc6ff] border-b-2 border-[#4d8eff] pb-1 font-headline font-bold text-sm tracking-tight">
                    {bc.label}
                  </span>
                )}
              </span>
            ))}
          </nav>
        )}
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden lg:block relative group">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline text-sm">search</span>
          <input
            type="text"
            placeholder="Search..."
            className="bg-surface-container-low border-none rounded-lg pl-10 pr-4 py-1.5 text-sm w-64 focus:ring-1 focus:ring-primary/50 transition-all text-on-surface placeholder-outline/50"
          />
        </div>
        <button className="material-symbols-outlined text-on-surface-variant hover:text-on-surface transition-colors p-2">notifications</button>
        <button className="material-symbols-outlined text-on-surface-variant hover:text-on-surface transition-colors p-2">settings</button>
        <div className="h-8 w-8 rounded-full bg-surface-container-highest overflow-hidden border border-outline-variant ml-2">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrMOfwse5ZOU8MBQMd0b7qUJFCXzPZ0bA2XLLt8qvjvNyxY23EgpzlQ5dEeraA86LPOLvX_TxcC4iE1b8oqQI6rxzJsWl3bPFDUI92heLs_9OzVLxtHRIS8xgy36CHU32MDcP25T9xmC6NZuRV4o14JJFlITtDtVTMLua5Jxdp6EibV-zkQ1QLEqdG7Uug3oSNZDEDS4VlJZM2gyu5Q-PWAFk6TezBt8cRZxv_MfkgBuZUs_Y3q9iGwr_3xdadq4nz050A-8CN0Q"
            alt="User profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}
