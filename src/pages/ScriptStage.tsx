import SideNavBar from '../components/SideNavBar';
import TopNavBar from '../components/TopNavBar';
import { Link } from 'react-router-dom';

export default function ScriptStage() {
  return (
    <div className="flex h-screen w-full bg-background">
      <SideNavBar projectId="alpha" projectName="Project Alpha" projectVersion="YouTube Pipeline" />
      <main className="flex-1 ml-64 flex flex-col h-screen overflow-hidden relative">
        <TopNavBar title="Project Alpha" breadcrumbs={[{ label: 'Dashboard' }, { label: 'Script' }]} />

        <div className="flex-1 overflow-y-auto mt-16 p-8 custom-scrollbar">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
              <div className="flex items-center gap-4">
                <h2 className="text-4xl font-extrabold tracking-tighter text-on-surface font-headline">Script</h2>
                <span className="px-3 py-1 bg-tertiary/10 text-tertiary text-xs font-bold rounded-full flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-tertiary rounded-full animate-pulse"></span>
                  In Progress
                </span>
              </div>
            </div>

            <div className="bg-surface-container-low p-2 rounded-2xl flex flex-wrap gap-2 mb-8 shadow-inner">
              <button className="flex-1 flex items-center justify-center gap-3 py-4 bg-primary-container text-on-primary-container rounded-xl font-bold transition-all shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                Generate with AI
              </button>
              <button className="flex-1 flex items-center justify-center gap-3 py-4 bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high rounded-xl font-semibold transition-all">
                <span className="material-symbols-outlined">upload_file</span>
                Upload Script
              </button>
              <Link to="/project/alpha/script/manual" className="flex-1 flex items-center justify-center gap-3 py-4 bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high rounded-xl font-semibold transition-all">
                <span className="material-symbols-outlined">edit_note</span>
                Write Manually
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <section className="bg-surface-container p-6 rounded-2xl border border-outline-variant/10">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold tracking-tight">Style Selector</h3>
                    <span className="text-xs text-on-surface-variant font-medium">Select narrative tone</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: 'school', title: 'Educational', desc: 'Structured, clear information delivery', active: true },
                      { icon: 'auto_stories', title: 'Storytelling', desc: 'Narrative arcs and engagement' },
                      { icon: 'rate_review', title: 'Review', desc: 'Objective analysis and critique' },
                      { icon: 'videocam', title: 'Vlog', desc: 'Casual, personal and fast-paced' }
                    ].map(style => (
                      <button key={style.title} className={`flex items-center gap-4 p-5 rounded-xl border transition-all text-left group ${style.active ? 'bg-surface-container-highest border-2 border-primary ring-4 ring-primary/5' : 'bg-surface-container-low border border-outline-variant/20 hover:border-primary/50'}`}>
                        <div className={`w-12 h-12 shrink-0 rounded-full flex items-center justify-center transition-colors ${style.active ? 'bg-primary/10 text-primary' : 'bg-surface-container-highest text-on-surface-variant group-hover:text-primary'}`}>
                          <span className="material-symbols-outlined text-2xl">{style.icon}</span>
                        </div>
                        <div>
                          <span className={`text-sm block ${style.active ? 'font-bold' : 'font-semibold'}`}>{style.title}</span>
                          <span className="text-[10px] text-on-surface-variant leading-tight">{style.desc}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </section>

                <section className="bg-surface-container p-6 rounded-2xl border border-outline-variant/10">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-sm font-bold mb-4 flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary text-sm">neurology</span>
                        AI Engine Model
                      </label>
                      <div className="space-y-3">
                        <label className="flex items-center justify-between p-3 bg-surface-container-low rounded-xl border border-outline-variant/20 cursor-pointer hover:bg-surface-container-highest transition-all group">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-[#4285F4]/10 flex items-center justify-center text-[#4285F4]">
                              <span className="material-symbols-outlined text-lg">temp_preferences_custom</span>
                            </div>
                            <span className="text-sm font-medium">Gemini 1.5 Pro</span>
                          </div>
                          <input type="radio" name="engine" defaultChecked className="w-4 h-4 text-primary bg-surface border-outline-variant focus:ring-primary/20" />
                        </label>
                        <label className="flex items-center justify-between p-3 bg-surface-container-low rounded-xl border border-outline-variant/20 cursor-pointer hover:bg-surface-container-highest transition-all group">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-[#D97757]/10 flex items-center justify-center text-[#D97757]">
                              <span className="material-symbols-outlined text-lg">waves</span>
                            </div>
                            <span className="text-sm font-medium">Claude 3.5 Sonnet</span>
                          </div>
                          <input type="radio" name="engine" className="w-4 h-4 text-primary bg-surface border-outline-variant focus:ring-primary/20" />
                        </label>
                        <label className="flex items-center justify-between p-3 bg-surface-container-low rounded-xl border border-outline-variant/20 cursor-pointer hover:bg-surface-container-highest transition-all group">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                              <span className="material-symbols-outlined text-lg">auto_awesome_motion</span>
                            </div>
                            <span className="text-sm font-medium">NotebookLM (Auto)</span>
                          </div>
                          <input type="radio" name="engine" className="w-4 h-4 text-primary bg-surface border-outline-variant focus:ring-primary/20" />
                        </label>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <label className="block text-sm font-bold mb-4">Prompt Context</label>
                      <textarea className="flex-1 bg-surface-container-low border border-outline-variant/20 rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none resize-none placeholder-on-surface-variant/40" placeholder="Paste your research notes or bullet points here to guide the script..."></textarea>
                    </div>
                  </div>
                </section>
              </div>

              <aside className="space-y-6">
                <div className="bg-surface-container p-6 rounded-2xl border border-outline-variant/10 shadow-xl">
                  <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">tune</span>
                    Options Panel
                  </h3>
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <label className="text-sm font-semibold text-on-surface-variant">Sections Count</label>
                        <span className="text-xs font-mono bg-surface-container-highest px-2 py-0.5 rounded text-primary">7 Sections</span>
                      </div>
                      <input type="range" min="3" max="10" step="1" defaultValue="7" className="w-full h-1.5 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary" />
                      <div className="flex justify-between text-[10px] uppercase font-bold text-on-surface-variant/50">
                        <span>3</span>
                        <span>10</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-sm font-semibold text-on-surface-variant block">Target Length</label>
                      <div className="flex bg-surface-container-low p-1 rounded-lg">
                        <button className="flex-1 py-1.5 text-[10px] font-bold rounded-md hover:bg-surface-container-highest text-on-surface-variant">Short</button>
                        <button className="flex-1 py-1.5 text-[10px] font-bold rounded-md bg-primary-container text-on-primary-container shadow-md">Medium</button>
                        <button className="flex-1 py-1.5 text-[10px] font-bold rounded-md hover:bg-surface-container-highest text-on-surface-variant">Long</button>
                      </div>
                    </div>

                    <div className="space-y-4 pt-4 border-t border-outline-variant/10">
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold">Include Hooks</span>
                          <span className="text-[10px] text-on-surface-variant">Add viral hook variations</span>
                        </div>
                        <button className="w-10 h-5 bg-primary rounded-full relative transition-colors">
                          <span className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></span>
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold">Hinglish Toggle</span>
                          <span className="text-[10px] text-on-surface-variant">Localized script mix</span>
                        </div>
                        <button className="w-10 h-5 bg-surface-container-highest rounded-full relative transition-colors group">
                          <span className="absolute left-1 top-1 w-3 h-3 bg-on-surface-variant rounded-full"></span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <Link to="/project/alpha/script/final" className="w-full mt-8 py-4 bg-primary text-on-primary font-black rounded-xl text-lg flex items-center justify-center gap-3 shadow-[0_8px_24px_rgba(77,142,255,0.3)] hover:translate-y-[-2px] transition-all">
                    <span className="material-symbols-outlined font-bold">rocket_launch</span>
                    Draft Script
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
