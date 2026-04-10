import SideNavBar from '../components/SideNavBar';
import TopNavBar from '../components/TopNavBar';
import { Link } from 'react-router-dom';

export default function ScriptEditorManual() {
  return (
    <div className="flex h-screen w-full bg-surface">
      <SideNavBar projectId="alpha" projectName="Studio Alpha" projectVersion="Manual Pipeline" />
      <main className="flex-1 ml-64 flex flex-col h-screen overflow-hidden relative">
        <TopNavBar title="Script Engine" breadcrumbs={[{ label: 'Drafting', to: '#' }, { label: 'Review' }, { label: 'Finalize', to: '#' }]} />

        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          <div className="max-w-5xl mx-auto mb-10 flex justify-between items-end">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono font-bold text-secondary px-2 py-0.5 bg-secondary/10 rounded uppercase tracking-tighter">Manual Mode</span>
                <span className="text-xs text-outline font-medium">• Project ID: ALPHA-902</span>
              </div>
              <h1 className="text-4xl font-headline font-extrabold tracking-tight text-on-surface">Script</h1>
            </div>
            <Link to="/project/alpha/script/final" className="flex items-center gap-2 px-6 py-2.5 bg-secondary-container text-on-secondary-container rounded-lg font-bold hover:brightness-110 transition-all shadow-lg shadow-secondary/10">
              <span className="material-symbols-outlined">check_circle</span>
              <span>Mark Complete</span>
            </Link>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            <section className="bg-surface-container rounded-xl overflow-hidden shadow-[0_0_20px_-5px_rgba(77,142,255,0.15)] border-l-4 border-primary">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded bg-primary text-on-primary font-bold font-mono text-xs">01</span>
                    <h3 className="text-xl font-headline font-bold uppercase tracking-tight text-primary">HOOK</h3>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-xs text-outline px-2 py-1 bg-surface-container-low rounded border border-outline-variant/10">30-45s</span>
                    <span className="material-symbols-outlined text-primary">expand_more</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                  <div className="lg:col-span-2 space-y-4">
                    <div>
                      <label className="block text-[11px] font-bold text-outline-variant uppercase tracking-widest mb-2">System Prompt</label>
                      <div className="relative group">
                        <div className="bg-surface-container-lowest font-mono text-[13px] p-4 rounded-lg border border-outline-variant/10 text-on-surface-variant leading-relaxed">
                          Generate an attention-grabbing hook for a tech review. Focus on <span className="text-secondary">disruption</span> and <span className="text-secondary">utility</span>. Tone: Provocative but professional.
                        </div>
                      </div>
                    </div>
                    <div className="p-4 rounded-lg bg-surface-container-high/50 border border-outline-variant/5">
                      <p className="text-xs text-on-surface-variant leading-relaxed italic">"The hook must establish the value proposition within the first 3 seconds to maximize retention stats."</p>
                    </div>
                  </div>
                  <div className="lg:col-span-3">
                    <label className="block text-[11px] font-bold text-outline-variant uppercase tracking-widest mb-2">Draft Script</label>
                    <textarea className="w-full h-48 bg-surface-container-low border border-outline-variant/10 rounded-lg p-4 font-body text-on-surface focus:ring-1 focus:ring-primary/30 focus:bg-surface-container-highest transition-all resize-none placeholder:text-outline-variant/50" placeholder="Paste generated script or start typing..."></textarea>
                    <div className="mt-4 flex justify-end gap-3">
                      <button className="px-4 py-2 text-sm text-outline hover:text-on-surface transition-colors font-semibold">Discard</button>
                      <button className="px-6 py-2 bg-primary-container text-on-primary-container rounded font-bold text-sm hover:brightness-110 active:scale-95 transition-all">Save Step</button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {[
              { id: '02', title: 'SECTION 1: THE CORE PROBLEM' },
              { id: '03', title: 'SECTION 2: FEATURE BREAKDOWN', locked: true },
              { id: '04', title: 'OUTRO & CTA', locked: true }
            ].map(section => (
              <section key={section.id} className="bg-surface-container-low/50 rounded-xl border border-outline-variant/10 hover:bg-surface-container-low transition-colors group cursor-pointer">
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center justify-center w-8 h-8 rounded bg-surface-container-highest text-outline font-bold font-mono text-xs group-hover:text-primary">{section.id}</span>
                      <h3 className="text-xl font-headline font-bold uppercase tracking-tight text-on-surface-variant group-hover:text-on-surface">{section.title}</h3>
                    </div>
                    <div className="flex items-center gap-4">
                      {section.locked ? (
                        <span className="material-symbols-outlined text-outline">lock</span>
                      ) : (
                        <span className="text-[10px] text-secondary font-mono bg-secondary/5 px-2 py-0.5 rounded border border-secondary/10">In Progress</span>
                      )}
                      <span className="material-symbols-outlined text-outline">expand_more</span>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
