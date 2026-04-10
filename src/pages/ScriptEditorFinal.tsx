import SideNavBar from '../components/SideNavBar';
import TopNavBar from '../components/TopNavBar';
import { Link } from 'react-router-dom';

export default function ScriptEditorFinal() {
  return (
    <div className="flex h-screen w-full bg-surface">
      <SideNavBar projectId="alpha" projectName="Project Alpha" projectVersion="Production Pipeline" />
      <main className="flex-1 ml-64 flex flex-col h-screen overflow-hidden relative">
        <TopNavBar title="KINETIC_COMMAND" breadcrumbs={[{ label: 'Editor', to: '#' }, { label: 'Assets', to: '#' }, { label: 'Timeline' }, { label: 'Render', to: '#' }]} />

        <div className="flex-1 overflow-hidden flex flex-col px-8 py-6 mt-16">
          <div className="flex flex-col gap-1 mb-6">
            <nav className="flex items-center gap-2 text-[0.6875rem] text-on-surface-variant/60 font-medium uppercase tracking-widest">
              <span>Projects</span>
              <span className="material-symbols-outlined text-[10px]">chevron_right</span>
              <span>Alpha</span>
              <span className="material-symbols-outlined text-[10px]">chevron_right</span>
              <span>Script</span>
              <span className="material-symbols-outlined text-[10px]">chevron_right</span>
              <span className="text-primary-fixed-dim">Final Output</span>
            </nav>
            <div className="flex justify-between items-end mt-2">
              <div className="flex items-center gap-4">
                <h1 className="text-3xl font-extrabold text-on-surface font-headline tracking-tight">Final Script</h1>
                <span className="px-3 py-1 bg-surface-container-highest text-on-surface-variant text-[10px] font-bold uppercase tracking-widest rounded-full border border-outline-variant/20">Draft</span>
              </div>
              <div className="flex items-center gap-3">
                <button className="px-6 py-2.5 rounded-xl border border-outline-variant text-on-surface font-semibold text-sm hover:bg-surface-container-highest transition-all">
                  Save Draft
                </button>
                <Link to="/project/alpha/visuals" className="px-6 py-2.5 rounded-xl bg-secondary-container text-on-secondary-container font-bold text-sm shadow-xl shadow-secondary-container/10 hover:brightness-110 transition-all flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  Mark Complete
                </Link>
              </div>
            </div>
          </div>

          <div className="flex-1 min-h-0 grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-9 flex flex-col min-h-0 bg-surface-container-low rounded-xl overflow-hidden shadow-2xl relative">
              <div className="h-12 flex items-center justify-between px-6 bg-surface-container-high border-b border-white/5">
                <div className="flex items-center gap-4">
                  <button className="p-1.5 text-on-surface-variant hover:text-on-surface transition-colors"><span className="material-symbols-outlined text-[20px]">format_bold</span></button>
                  <button className="p-1.5 text-on-surface-variant hover:text-on-surface transition-colors"><span className="material-symbols-outlined text-[20px]">format_italic</span></button>
                  <button className="p-1.5 text-on-surface-variant hover:text-on-surface transition-colors"><span className="material-symbols-outlined text-[20px]">format_list_bulleted</span></button>
                  <div className="w-px h-4 bg-outline-variant/30 mx-1"></div>
                  <button className="p-1.5 text-on-surface-variant hover:text-on-surface transition-colors"><span className="material-symbols-outlined text-[20px]">link</span></button>
                  <button className="p-1.5 text-on-surface-variant hover:text-on-surface transition-colors"><span className="material-symbols-outlined text-[20px]">image</span></button>
                </div>
                <div className="flex items-center gap-2 text-[0.6875rem] text-on-surface-variant/70 font-mono">
                  <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-secondary"></span> Auto-saved</span>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-12 custom-scrollbar bg-surface-container-low font-mono text-sm leading-relaxed text-on-surface/90 selection:bg-primary-container/30">
                <div className="max-w-3xl mx-auto space-y-8">
                  <div className="space-y-2">
                    <p className="text-secondary opacity-80 uppercase text-xs tracking-widest font-bold">SCENE 01 - INTERIOR - COMMAND CENTER - NIGHT</p>
                    <p>The room is bathed in the cool blue glow of holographic interfaces. SILENCE, except for the low hum of cooling fans and the rhythmic tapping of keys.</p>
                  </div>
                  <div className="space-y-4">
                    <div className="text-center py-4">
                      <p className="text-primary tracking-[0.3em] font-bold uppercase">COMMANDER VANCE</p>
                      <p className="italic text-on-surface-variant">Wait for the signal. We only get one window.</p>
                    </div>
                  </div>
                  <p>Vance leans forward. The light catches the hard angles of his face. He doesn't blink. On the screen, a red line crawls toward a flickering node.</p>
                  <div className="space-y-2">
                    <p className="text-secondary opacity-80 uppercase text-xs tracking-widest font-bold">SCENE 02 - EXTERIOR - LOW ORBIT - N/A</p>
                    <p>Silvery glints of debris tumble through the void. Below, the curvature of the planet glows with artificial auroras where the grid is failing.</p>
                  </div>
                  <p>A massive KINETIC ARRAY begins to rotate, its components locking into place with hydraulic finality. Dust particles dance in the magnetic field.</p>
                  <div className="space-y-4">
                    <div className="text-center py-4">
                      <p className="text-primary tracking-[0.3em] font-bold uppercase">PILOT KAYA</p>
                      <p className="italic text-on-surface-variant">(Static over comms) Sequence initiated. Locking kinetic pins now.</p>
                    </div>
                  </div>
                  <p>The array fires. A spear of pure energy tears through the atmosphere, invisible but for the way it warps the clouds like a heavy stone dropped into water.</p>
                  <div className="pt-12 text-on-surface-variant/40 italic">
                    [Continue editing script...]
                  </div>
                </div>
              </div>

              <div className="h-10 flex items-center justify-between px-6 bg-surface-container-high border-t border-white/5">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 text-[0.6875rem] font-medium text-on-surface-variant">
                    <span className="material-symbols-outlined text-sm">description</span>
                    Word Count: <span className="text-on-surface font-bold">1,240 words</span>
                  </div>
                  <div className="flex items-center gap-2 text-[0.6875rem] font-medium text-on-surface-variant">
                    <span className="material-symbols-outlined text-sm">schedule</span>
                    Reading Time: <span className="text-on-surface font-bold">~6 mins</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-[0.6875rem] text-on-surface-variant/50">
                  <span>Markdown Mode</span>
                  <div className="w-px h-3 bg-outline-variant/30"></div>
                  <span>UTF-8</span>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex col-span-3 flex-col gap-6 overflow-y-auto pr-2 custom-scrollbar">
              <div className="bg-surface-container rounded-xl p-5 space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-primary-fixed-dim">Production Notes</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-surface-container-highest/50 rounded-lg border-l-2 border-secondary">
                    <p className="text-[0.75rem] leading-snug">Ensure the "Kinetic Array" sound design matches the visual pulse frequency.</p>
                    <p className="text-[0.625rem] text-on-surface-variant mt-2">Added by Audio Lead • 2h ago</p>
                  </div>
                  <div className="p-3 bg-surface-container-highest/50 rounded-lg border-l-2 border-primary">
                    <p className="text-[0.75rem] leading-snug">Vance's dialogue needs to be more punchy in the second act.</p>
                    <p className="text-[0.625rem] text-on-surface-variant mt-2">Added by Director • 5h ago</p>
                  </div>
                </div>
                <button className="w-full py-2 border border-outline-variant/30 rounded-lg text-[0.6875rem] font-bold hover:bg-surface-container-highest transition-colors">
                  Add Note
                </button>
              </div>

              <div className="bg-gradient-to-br from-[#171f33] to-[#2d3449] rounded-xl p-5 border border-primary-container/20 shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary-container/5 rounded-full -mr-12 -mt-12 blur-2xl group-hover:bg-primary-container/10 transition-colors"></div>
                <div className="relative z-10 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                    <h3 className="text-xs font-bold uppercase tracking-widest">KINETIC AI</h3>
                  </div>
                  <p className="text-[0.75rem] text-on-surface-variant">Draft looks consistent. Would you like me to check for technical continuity errors across scenes?</p>
                  <button className="text-[0.6875rem] font-bold text-primary flex items-center gap-1 hover:gap-2 transition-all">
                    Analyze Continuity <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
