import { Link, useLocation } from 'react-router-dom';

interface SideNavBarProps {
  projectId?: string;
  projectName?: string;
  projectVersion?: string;
  variant?: 'global' | 'project';
}

export default function SideNavBar({
  projectId = 'alpha',
  projectName = 'StudioPipeline',
  projectVersion = 'V2.4.1-STABLE',
  variant = 'project'
}: SideNavBarProps) {
  const location = useLocation();
  const path = location.pathname;

  return (
    <aside className="h-screen w-64 flex flex-col fixed left-0 top-0 bg-[#131b2e] py-6 z-[60] shadow-xl shrink-0 border-r border-[#2d3449]/10">
      <div className="px-6 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-primary-container flex items-center justify-center text-on-primary-container">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
              {variant === 'global' ? 'dashboard' : 'movie_filter'}
            </span>
          </div>
          <div>
            <h2 className="text-lg font-bold tracking-tight text-[#dbe2fd] font-headline leading-tight truncate">
              {projectName}
            </h2>
            <p className="text-[0.6875rem] font-label text-on-surface-variant uppercase tracking-widest truncate">
              {projectVersion}
            </p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-3 space-y-1">
        {variant === 'global' ? (
          <>
            <NavItem icon="dashboard" label="Dashboard" to="/dashboard" active={path === '/dashboard' || path === '/dashboard/empty'} />
            <NavItem icon="folder_open" label="Projects" to="/dashboard" />
            <NavItem icon="inventory_2" label="Assets Library" to="#" />
            <NavItem icon="insights" label="Analytics" to="#" />
            <NavItem icon="history" label="Archives" to="#" />
          </>
        ) : (
          <>
            <NavItem icon="search" label="Research" to={`/project/${projectId}/research`} active={path.includes('/research')} />
            <NavItem icon="description" label="Script" to={`/project/${projectId}/script`} active={path.includes('/script')} />
            <NavItem icon="movie_filter" label="Visuals" to={`/project/${projectId}/visuals`} active={path.includes('/visuals')} />
            <NavItem icon="timeline" label="Timeline" to={`/project/${projectId}/timeline`} active={path.includes('/timeline')} />
            <NavItem icon="conveyor_belt" label="Render" to={`/project/${projectId}/render`} active={path.includes('/render')} />
          </>
        )}
      </nav>

      <div className="px-6 mt-4">
        <button className="w-full flex items-center justify-center gap-2 py-2 bg-primary-container text-on-primary-container font-bold rounded-lg hover:brightness-110 transition-all text-sm shadow-[0_4px_12px_rgba(77,142,255,0.2)]">
          <span className="material-symbols-outlined text-sm">add</span>
          New Project
        </button>
      </div>

      <div className="mt-auto px-3 pt-6 space-y-1 border-t border-outline-variant/10">
        <NavItem icon="settings" label="Settings" to="/settings" active={path === '/settings'} />
        <NavItem icon="help_outline" label="Help" to="#" />
      </div>
    </aside>
  );
}

function NavItem({ icon, label, to, active = false }: { icon: string; label: string; to: string; active?: boolean }) {
  if (active) {
    return (
      <Link to={to} className="flex items-center gap-3 px-4 py-2 text-[#4d8eff] bg-[#2d3449] border-l-2 border-[#4d8eff] font-medium rounded-r-lg group">
        <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
        <span className="font-body text-sm">{label}</span>
      </Link>
    );
  }
  return (
    <Link to={to} className="flex items-center gap-3 px-4 py-2 text-[#c2c6d6] hover:bg-[#171f33] hover:text-[#dbe2fd] rounded-lg transition-colors group">
      <span className="material-symbols-outlined text-lg">{icon}</span>
      <span className="font-body text-sm">{label}</span>
    </Link>
  );
}
