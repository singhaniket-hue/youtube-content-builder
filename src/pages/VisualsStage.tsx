import SideNavBar from '../components/SideNavBar';
import TopNavBar from '../components/TopNavBar';
import { Link } from 'react-router-dom';

export default function VisualsStage() {
  return (
    <div className="flex h-screen w-full bg-background">
      <SideNavBar projectId="alpha" projectName="Kinetica Studio" projectVersion="Pro Pipeline" />
      <main className="flex-1 ml-64 flex flex-col h-screen overflow-hidden relative">
        <TopNavBar title="Project Alpha" breadcrumbs={[{ label: 'Visuals' }]} />

        <div className="flex-1 overflow-y-auto p-8 mt-16 space-y-8 custom-scrollbar">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-4xl font-black font-headline tracking-tighter text-on-surface">Visuals Stage</h2>
              <div className="flex items-center gap-3 mt-2">
                <span className="px-2 py-0.5 bg-secondary/10 text-secondary text-[10px] font-bold tracking-widest uppercase rounded">In Progress</span>
                <span className="text-on-surface-variant text-sm">Last saved 2m ago</span>
              </div>
            </div>
            <div className="flex gap-2">
              <Link to="/project/alpha/timeline" className="px-6 py-2.5 bg-primary-container text-on-primary-container rounded-lg font-bold flex items-center gap-2 shadow-lg shadow-primary-container/20 hover:scale-[1.02] active:scale-95 transition-all">
                <span className="material-symbols-outlined">check_circle</span>
                Continue to Timeline
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6">
            <section className="col-span-12 lg:col-span-8 bg-surface-container-low rounded-xl p-6 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-headline font-bold text-lg flex items-center gap-2"><span className="material-symbols-outlined text-primary">terminal</span>Visual Prompts</h3>
                <div className="flex items-center gap-4">
                  <button className="text-xs text-on-surface-variant font-bold flex items-center gap-1 hover:text-primary transition-colors">Sync with Script <span className="material-symbols-outlined text-xs">sync</span></button>
                  <button className="bg-primary text-on-primary text-xs font-bold px-4 py-2 rounded-lg flex items-center gap-2 hover:brightness-110 transition-all shadow-lg shadow-primary/20"><span className="w-3 h-3 border-2 border-on-primary/30 border-t-on-primary rounded-full animate-spin"></span>Generate Images with AI</button>
                </div>
              </div>
              <div className="space-y-4 font-mono text-sm">
                <div className="bg-surface-container-lowest p-5 rounded-lg border border-outline-variant/5 relative group/item">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <span className="text-secondary text-xs uppercase font-black tracking-wider">Scene 01: The Hook</span>
                      <span className="text-on-surface-variant text-[10px] ml-2 font-mono">00:00 - 00:15</span>
                    </div>
                  </div>
                  <div className="bg-black/40 p-4 rounded-md border border-white/5">
                    <code className="text-primary-fixed-dim font-mono text-sm leading-relaxed block">/imagine prompt: hyper-realistic cyberpunk city street, neon reflections in rain puddles, cinematic wide shot, volumetric lighting, 8k resolution --ar 16:9 --v 6.0</code>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-5 rounded-lg border border-outline-variant/5 relative group/item">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <span className="text-secondary text-xs uppercase font-black tracking-wider">Scene 02: Core Concept</span>
                      <span className="text-on-surface-variant text-[10px] ml-2 font-mono">00:15 - 00:45</span>
                    </div>
                  </div>
                  <div className="bg-black/40 p-4 rounded-md border border-white/5">
                    <code className="text-primary-fixed-dim font-mono text-sm leading-relaxed block">/imagine prompt: minimalist 3D isometric animation of a server farm, flowing data packets as glowing blue light trails, clean aesthetic, studio lighting --ar 16:9</code>
                  </div>
                </div>
              </div>
            </section>

            <section className="col-span-12 lg:col-span-4 bg-surface-container-low rounded-xl p-6">
              <h3 className="font-headline font-bold text-lg mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">auto_awesome</span>
                Generate Assets
              </h3>
              <div className="space-y-5">
                <div>
                  <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-2 block">AI Engine</label>
                  <select className="w-full bg-surface-container-highest border-none rounded-lg text-sm text-on-surface focus:ring-1 focus:ring-primary-container transition-all">
                    <option>Midjourney v6.0</option>
                    <option>DALL-E 3 (High Def)</option>
                    <option>Stable Diffusion XL</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-2 block">Aspect Ratio</label>
                  <div className="grid grid-cols-3 gap-2">
                    <button className="bg-surface-container-highest p-2 rounded text-xs font-bold text-on-surface border border-primary/20">16:9</button>
                    <button className="bg-surface-container-lowest p-2 rounded text-xs font-bold text-on-surface-variant hover:bg-surface-container-highest transition-colors">9:16</button>
                    <button className="bg-surface-container-lowest p-2 rounded text-xs font-bold text-on-surface-variant hover:bg-surface-container-highest transition-colors">1:1</button>
                  </div>
                </div>
                <button className="w-full bg-primary text-on-primary font-black py-3 rounded-lg flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all shadow-lg">
                  <span className="material-symbols-outlined">rocket_launch</span>
                  GENERATE
                </button>
              </div>
            </section>

            <section className="col-span-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                <h4 className="font-bold text-sm mb-4 uppercase tracking-tighter text-secondary">Primary Footage (A-Roll)</h4>
                <div className="border-2 border-dashed border-primary/20 rounded-xl p-8 flex flex-col items-center justify-center bg-surface-container-lowest/50 hover:bg-surface-container-highest/20 hover:border-primary transition-all cursor-pointer group">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl text-primary">cloud_upload</span>
                  </div>
                  <p className="text-sm font-bold text-on-surface">Drag and drop source files</p>
                  <p className="text-[10px] text-on-surface-variant mt-1 uppercase tracking-widest font-mono">MP4, MOV up to 4K 60fps</p>
                </div>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3 p-2 bg-surface-container-low rounded-lg border border-outline-variant/5">
                    <div className="w-12 h-8 bg-black rounded overflow-hidden">
                      <img className="w-full h-full object-cover opacity-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8ow4lVsGvPXuLT01dvuVys8HDqxkLUgNsqj97FHBpHrbPdbZ7bA1BJAO8xz8eDNaWyv498zeVvr0WAH-Iqgi8HyDHrevfPYfNisiKBG0R9ZI7wNBM48uioeGldKOG9O6Pva8oKp1RtcV30vnWIQwEiucJvqkWaPM7BnyH4GpJ7SaukgK8k6aZkhHZR2mNOctRqtSixm_43tmRrqcH6kiJqdk-tK6izm6paS-il6wbu0mvrbDPl_m_i2K-ENsfes7nX3RHzl3WvA" alt="Thumbnail" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between text-[10px] font-bold mb-1">
                        <span className="truncate max-w-[150px]">interview_main_v01.mov</span>
                        <span className="text-on-surface-variant">42.8 MB</span>
                      </div>
                      <div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
                        <div className="w-[100%] h-full bg-secondary"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                <h4 className="font-bold text-sm mb-4 uppercase tracking-tighter text-on-surface">General Assets &amp; Overlays</h4>
                <div className="border-2 border-dashed border-outline-variant/30 rounded-xl p-8 flex flex-col items-center justify-center bg-surface-container-lowest/50 hover:bg-surface-container-highest/20 hover:border-on-surface-variant transition-all cursor-pointer group mb-6">
                  <div className="w-12 h-12 bg-surface-container-highest rounded-full flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <span className="material-symbols-outlined text-3xl text-on-surface-variant group-hover:text-primary">add_photo_alternate</span>
                  </div>
                  <p className="text-sm font-bold text-on-surface">Upload overlays or B-roll</p>
                  <p className="text-[10px] text-on-surface-variant mt-1 uppercase tracking-widest font-mono">PNG, JPG, MP4 supported</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
