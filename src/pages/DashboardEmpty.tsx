import SideNavBar from '../components/SideNavBar';
import TopNavBar from '../components/TopNavBar';
import { Link } from 'react-router-dom';

export default function DashboardEmpty() {
  return (
    <div className="flex h-screen w-full bg-surface">
      <SideNavBar variant="global" />
      <main className="flex-1 ml-64 flex flex-col h-screen">
        <TopNavBar
          breadcrumbs={[
            { label: 'Dashboard', to: '/dashboard/empty' },
            { label: 'Overview' }
          ]}
        />

        <div className="flex-1 flex flex-col items-center justify-center p-8 mt-16 overflow-y-auto">
          <div className="max-w-2xl w-full text-center space-y-8 animate-in fade-in duration-700">
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full opacity-50 group-hover:opacity-70 transition-opacity"></div>
              <div className="relative bg-surface-container border border-outline-variant/10 p-12 rounded-xl backdrop-blur-xl overflow-hidden">
                <div className="flex justify-center mb-8">
                  <div className="w-24 h-24 rounded-full bg-surface-container-highest flex items-center justify-center shadow-lg border border-primary/20">
                    <span className="material-symbols-outlined text-5xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>video_library</span>
                  </div>
                </div>
                <h2 className="text-3xl font-extrabold text-on-surface mb-3 tracking-tight font-headline">Your Pipeline is Quiet</h2>
                <p className="text-on-surface-variant text-lg max-w-md mx-auto mb-10 leading-relaxed">
                  Start by creating your first project or importing an existing one to unlock your production workflow.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link to="/project/alpha/research" className="w-full sm:w-auto px-8 py-4 bg-primary-container text-on-primary-container font-bold rounded-lg flex items-center justify-center gap-3 transition-all hover:brightness-110 active:scale-95 shadow-[0_4px_20px_-4px_rgba(77,142,255,0.4)]">
                    <span className="material-symbols-outlined">add_circle</span>
                    + New Project
                  </Link>
                  <button className="w-full sm:w-auto px-8 py-4 bg-surface-container-highest text-primary font-bold rounded-lg flex items-center justify-center gap-3 border border-outline-variant/30 transition-all hover:bg-surface-bright active:scale-95">
                    <span className="material-symbols-outlined">upload_file</span>
                    Import Project
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 text-left">
              <div className="bg-surface-container-low p-5 rounded-lg border border-outline-variant/5 hover:border-primary/20 transition-colors">
                <span className="material-symbols-outlined text-secondary mb-3">auto_awesome</span>
                <div className="text-sm font-bold text-on-surface mb-1">Templates</div>
                <div className="text-[0.6875rem] text-on-surface-variant leading-snug">Quick-start with pre-configured production workflows.</div>
              </div>
              <div className="bg-surface-container-low p-5 rounded-lg border border-outline-variant/5 hover:border-primary/20 transition-colors">
                <span className="material-symbols-outlined text-primary mb-3">integration_instructions</span>
                <div className="text-sm font-bold text-on-surface mb-1">Integrations</div>
                <div className="text-[0.6875rem] text-on-surface-variant leading-snug">Connect Premiere, Resolve, or After Effects directly.</div>
              </div>
              <div className="bg-surface-container-low p-5 rounded-lg border border-outline-variant/5 hover:border-primary/20 transition-colors">
                <span className="material-symbols-outlined text-tertiary mb-3">school</span>
                <div className="text-sm font-bold text-on-surface mb-1">Learn</div>
                <div className="text-[0.6875rem] text-on-surface-variant leading-snug">Watch the 2-minute masterclass for rapid onboarding.</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
