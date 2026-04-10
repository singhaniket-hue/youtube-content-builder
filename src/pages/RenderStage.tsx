import SideNavBar from '../components/SideNavBar';
import TopNavBar from '../components/TopNavBar';
import { Link } from 'react-router-dom';

export default function RenderStage() {
  return (
    <div className="flex h-screen w-full bg-surface text-on-surface">
      <SideNavBar projectId="alpha" projectName="Studio Alpha" projectVersion="Pro Account" />
      <main className="flex-1 ml-64 flex flex-col h-screen bg-surface relative overflow-hidden">
        <TopNavBar title="Lumina Engine" breadcrumbs={[{ label: 'Pipeline' }]} />

        <div className="px-8 py-6 flex justify-between items-end border-b border-white/[0.03] mt-16">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-[10px] font-bold tracking-[0.2em] text-secondary uppercase bg-secondary-container/10 px-2 py-0.5 rounded">Stage 05</span>
              <h1 className="text-3xl font-extrabold tracking-tight text-on-surface font-headline">Render Stage</h1>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              <span className="text-xs font-medium text-on-surface-variant uppercase tracking-widest">Status: Ready for Output</span>
            </div>
          </div>
          <button className="bg-surface-container-highest hover:bg-surface-bright text-on-surface px-6 py-2.5 rounded-lg font-bold text-sm transition-all active:scale-95 border border-outline-variant/30 flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">check_circle</span>
            Mark Complete
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          <div className="grid grid-cols-12 gap-6 h-full max-w-7xl mx-auto">
            <div className="col-span-12 lg:col-span-4 space-y-6">
              <section className="bg-surface-container-low p-6 rounded-xl border-l-4 border-primary shadow-2xl">
                <h3 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">account_tree</span>
                  Timeline Version
                </h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-between p-4 bg-surface-container-highest rounded-lg border border-primary/30 group">
                    <div className="text-left">
                      <div className="text-sm font-bold text-primary">Final Cut v2</div>
                      <div className="text-[10px] text-on-surface-variant">Last modified 2h ago</div>
                    </div>
                    <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">check_circle</span>
                  </button>
                </div>
              </section>

              <section className="bg-surface-container-low p-6 rounded-xl border border-white/[0.03]">
                <h3 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">settings_suggest</span>
                  Output Configuration
                </h3>
                <div className="space-y-5">
                  <div>
                    <label className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">Output Filename</label>
                    <div className="relative">
                      <input type="text" defaultValue="project_alpha_final.mp4" className="w-full bg-surface-container-highest border-none rounded-lg py-3 px-4 text-sm font-medium text-on-surface focus:ring-2 focus:ring-primary-container transition-all" />
                      <span className="absolute right-4 top-3 text-on-surface-variant material-symbols-outlined text-sm">edit</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">Export Preset</label>
                    <div className="flex items-center justify-between bg-surface-container-highest p-4 rounded-lg cursor-pointer hover:bg-surface-bright transition-colors border border-outline-variant/10">
                      <div className="flex items-center gap-3">
                        <div className="bg-red-500/10 text-red-500 p-1.5 rounded">
                          <span className="material-symbols-outlined text-base">smart_display</span>
                        </div>
                        <div>
                          <div className="text-sm font-bold">YouTube 4K</div>
                          <div className="text-[10px] text-on-surface-variant">H.264 • 60fps • 45Mbps</div>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-on-surface-variant">expand_more</span>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="col-span-12 lg:col-span-5 space-y-6">
              <section className="bg-surface-container-low p-2 rounded-xl border border-white/[0.05] flex flex-col h-full">
                <div className="relative aspect-video rounded-lg overflow-hidden bg-black group">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnKEnuz35UEJiD0FmE07EwPkBQgeKi2NYFXzcevJ3YzoHFB6dniFlWvsTGJgFYNsyemDt3qkQaf8qLircsiHAF57rmfZcwdP4T6ojj0N2shB8Gb-pG9uzU8mhFRRw0feQcfGILJK7HBKLrkywOfVjgDY3hZyMvYsfYt0cjpquBcwmO-9VtpPDrePZNHIlI6CI4j3jnfksvTP-NCJyhb7T2DahPdHbmUZxzGpo8CO9q7HBfbWy0Cg_y_vlzhgfxI9Gh9D8GiJP0Pg" alt="Video Preview" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center border border-primary/50 cursor-pointer hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-3xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 mt-auto">
                  <Link to="/project/alpha/render/processing" className="w-full bg-primary-container hover:bg-[#5da0ff] text-on-primary-container font-headline font-extrabold text-lg py-5 rounded-xl transition-all active:scale-95 shadow-[0_8px_32px_rgba(77,142,255,0.25)] flex items-center justify-center gap-3">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                    START RENDER
                  </Link>
                  <p className="text-center mt-4 text-[10px] text-on-surface-variant uppercase tracking-[0.2em] font-medium">Estimated render time: ~04:12</p>
                </div>
              </section>
            </div>

            <div className="col-span-12 lg:col-span-3">
              <section className="bg-surface-container-low h-full rounded-xl p-6 border border-white/[0.03]">
                <h3 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-8 flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">analytics</span>
                  Technical Meta
                </h3>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-surface-container-highest rounded-lg">
                      <span className="material-symbols-outlined text-secondary">database</span>
                    </div>
                    <div>
                      <div className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-0.5">Est. File Size</div>
                      <div className="text-xl font-headline font-extrabold text-on-surface">2.44 GB</div>
                      <div className="text-[10px] text-on-surface-variant/60">Based on H.264 compression</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-surface-container-highest rounded-lg">
                      <span className="material-symbols-outlined text-secondary">timer</span>
                    </div>
                    <div>
                      <div className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-0.5">Duration</div>
                      <div className="text-xl font-headline font-extrabold text-on-surface">12:05:00</div>
                      <div className="text-[10px] text-on-surface-variant/60">17,400 Total Frames</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-surface-container-highest rounded-lg">
                      <span className="material-symbols-outlined text-secondary">aspect_ratio</span>
                    </div>
                    <div>
                      <div className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-0.5">Resolution</div>
                      <div className="text-xl font-headline font-extrabold text-on-surface">3840 x 2160</div>
                      <div className="text-[10px] text-on-surface-variant/60">Ultra HD (16:9)</div>
                    </div>
                  </div>
                  <div className="pt-8 border-t border-white/[0.05]">
                    <h4 className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-4">Storage Destination</h4>
                    <div className="bg-surface-container-highest/50 p-3 rounded-lg border border-outline-variant/10 flex items-center gap-3">
                      <span className="material-symbols-outlined text-sm text-on-surface-variant">folder_open</span>
                      <span className="text-xs text-on-surface-variant truncate">/Volumes/SSD_PRO/Projects/Alpha/Renders</span>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
