import SideNavBar from '../components/SideNavBar';
import TopNavBar from '../components/TopNavBar';
import { Link } from 'react-router-dom';

export default function ResearchStage() {
  return (
    <div className="flex h-screen w-full bg-surface">
      <SideNavBar projectId="alpha" projectName="Project Alpha" projectVersion="v2.4.1 Production" />
      <main className="flex-1 ml-64 flex flex-col h-screen overflow-hidden relative">
        <TopNavBar title="KINETIC" />

        <div className="flex-1 overflow-y-auto mt-16 p-8 custom-scrollbar">
          <div className="max-w-6xl w-full mx-auto space-y-8">
            <div className="flex justify-between items-end mb-8">
              <div className="space-y-1">
                <div className="flex items-center gap-4">
                  <h1 className="text-4xl font-headline font-extrabold tracking-tighter text-on-surface">Research</h1>
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest bg-tertiary-container/20 text-tertiary border border-tertiary/20">
                    Not Started
                  </span>
                </div>
                <p className="text-on-surface-variant text-sm max-w-lg">Gather metadata, competitor insights, and thematic references to fuel the production engine.</p>
              </div>
            </div>

            <div className="bg-surface-container-low rounded-xl shadow-2xl border border-outline-variant/10 overflow-hidden">
              <div className="flex border-b border-outline-variant/10 bg-surface-container-lowest/50">
                <button className="relative px-8 py-5 text-sm font-semibold text-primary transition-all group">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg">link</span>
                    Paste URLs
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-primary shadow-[0_-4px_10px_rgba(173,198,255,0.5)]"></div>
                </button>
                <button className="px-8 py-5 text-sm font-medium text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest/30 transition-all">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg">lightbulb</span>
                    Describe Idea
                  </div>
                </button>
              </div>

              <div className="p-8 min-h-[400px] bg-gradient-to-br from-primary/5 to-transparent backdrop-blur-xl">
                <div className="max-w-3xl">
                  <h3 className="text-lg font-bold text-on-surface mb-2">Video Reference Ingestion</h3>
                  <p className="text-on-surface-variant text-sm mb-6">Enter up to 5 YouTube URLs or competitor links to analyze pacing, keywords, and audience sentiment.</p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 group">
                      <div className="relative flex-1">
                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                          <span className="material-symbols-outlined text-on-surface-variant group-focus-within:text-primary transition-colors text-sm">link</span>
                        </div>
                        <input
                          type="text"
                          placeholder="https://youtube.com/watch?v=..."
                          className="w-full bg-surface-container-highest/30 border border-outline-variant/20 border-dashed rounded-lg py-3.5 pl-12 pr-4 text-on-surface placeholder:text-on-surface-variant/40 focus:ring-2 focus:ring-primary-container/20 focus:border-primary-container focus:bg-surface-container-highest transition-all outline-none"
                        />
                      </div>
                      <button className="p-2 text-on-surface-variant opacity-40 cursor-not-allowed rounded-lg">
                        <span className="material-symbols-outlined text-xl">close</span>
                      </button>
                    </div>

                    <button className="flex items-center gap-2 px-4 py-2 mt-2 text-xs font-bold uppercase tracking-widest text-primary hover:bg-primary/5 rounded-lg transition-all group w-fit">
                      <span className="material-symbols-outlined text-sm group-hover:rotate-90 transition-transform">add_circle</span>
                      Add Another Link
                    </button>
                  </div>

                  <div className="mt-10 pt-10 border-t border-outline-variant/10">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Pipeline Integration</h4>
                      <span className="text-[10px] text-secondary font-mono">NODE_STATUS: READY</span>
                    </div>
                    <div className="flex gap-4">
                      <Link to="/project/alpha/research/processing" className="flex-1 bg-secondary-container text-on-secondary-container py-3 rounded-lg font-bold shadow-[0_0_20px_rgba(4,180,162,0.2)] hover:brightness-110 transition-all flex items-center justify-center gap-2">
                        Extract Research
                        <span className="material-symbols-outlined text-lg">bolt</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
