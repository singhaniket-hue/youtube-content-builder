import SideNavBar from '../components/SideNavBar';
import TopNavBar from '../components/TopNavBar';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function ResearchStageProcessing() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/project/alpha/research/processed');
    }, 4000);
    return () => clearTimeout(timer);
  }, [navigate]);

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
                    In Progress
                  </span>
                </div>
                <p className="text-on-surface-variant text-sm max-w-lg">Gather metadata, competitor insights, and thematic references to fuel the production engine.</p>
              </div>
            </div>

            <div className="bg-surface-container-low rounded-xl shadow-2xl border border-outline-variant/10 overflow-hidden mb-8">
              <div className="p-8 bg-gradient-to-br from-primary/5 to-transparent backdrop-blur-xl">
                <div className="space-y-6">
                  <div className="pt-6 border-t border-outline-variant/10">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-bold text-on-surface flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                        Extraction in Progress...
                      </span>
                      <span className="text-sm font-mono text-secondary font-bold">65%</span>
                    </div>
                    <div className="h-3 w-full bg-surface-container-highest rounded-full overflow-hidden border border-outline-variant/10">
                      <div className="h-full bg-secondary w-[65%] shadow-[0_0_15px_rgba(79,219,200,0.4)] transition-all duration-500 ease-out relative">
                        <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]"></div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl overflow-hidden shadow-inner">
                    <div className="flex items-center justify-between px-4 py-2 bg-surface-container-highest/50 border-b border-outline-variant/10">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-error/40"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-tertiary/40"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-secondary/40"></div>
                      </div>
                      <span className="text-[10px] font-mono text-on-surface-variant uppercase tracking-widest">kinetic_shell_v1.0</span>
                    </div>
                    <div className="p-4 h-48 overflow-y-auto font-mono text-xs leading-relaxed custom-scrollbar bg-[#060d20]">
                      <div className="flex gap-2 mb-1">
                        <span className="text-primary/70">[14:22:01]</span>
                        <span className="text-on-surface-variant">[INFO]</span>
                        <span className="text-on-surface">Initializing extraction engine...</span>
                      </div>
                      <div className="flex gap-2 mb-1">
                        <span className="text-primary/70">[14:22:03]</span>
                        <span className="text-on-surface-variant">[INFO]</span>
                        <span className="text-on-surface">Connecting to YouTube Data API v3...</span>
                      </div>
                      <div className="flex gap-2 mb-1">
                        <span className="text-primary/70">[14:22:05]</span>
                        <span className="text-secondary">[SUCCESS]</span>
                        <span className="text-on-surface">Handshake established with source node.</span>
                      </div>
                      <div className="flex gap-2 mb-1">
                        <span className="text-primary/70">[14:22:08]</span>
                        <span className="text-on-surface-variant">[INFO]</span>
                        <span className="text-on-surface">Fetching URL: <span className="text-primary underline">https://youtube.com/watch?v=dQw...</span></span>
                      </div>
                      <div className="flex gap-2 mb-1">
                        <span className="text-primary/70">[14:22:12]</span>
                        <span className="text-secondary">[SUCCESS]</span>
                        <span className="text-on-surface">Metadata extracted: Title, Tags, Description.</span>
                      </div>
                      <div className="flex gap-2 mb-1">
                        <span className="text-primary/70">[14:22:15]</span>
                        <span className="text-tertiary">[PROCESS]</span>
                        <span className="text-on-surface">Analyzing transcript sentiment... (Batch 1/4)</span>
                      </div>
                      <div className="flex gap-2 mb-1 animate-pulse">
                        <span className="text-primary/70">[14:22:21]</span>
                        <span className="text-tertiary">[PROCESS]</span>
                        <span className="text-on-surface">Generating thematic reference clusters_</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 pt-4">
                    <Link to="/project/alpha/research" className="flex-1 text-center bg-surface-container-highest text-on-surface border border-outline-variant/30 py-3 rounded-lg font-bold hover:bg-surface-bright transition-all">
                      Cancel Operation
                    </Link>
                    <button disabled className="flex-1 bg-secondary-container text-on-secondary-container py-3 rounded-lg font-bold shadow-[0_0_20px_rgba(4,180,162,0.2)] opacity-50 cursor-not-allowed flex items-center justify-center gap-2">
                      Extract Research
                      <span className="material-symbols-outlined text-lg">bolt</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <style>{`
        @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
        }
        .animate-\\[shimmer_2s_infinite\\] {
            animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
}
