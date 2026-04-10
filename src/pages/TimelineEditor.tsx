import SideNavBar from '../components/SideNavBar';
import TopNavBar from '../components/TopNavBar';
import { Link } from 'react-router-dom';

export default function TimelineEditor() {
  return (
    <div className="flex h-screen w-full bg-surface">
      <SideNavBar projectId="alpha" projectName="Project Alpha" projectVersion="Production v2.4" />
      <main className="flex-1 ml-64 flex flex-col h-screen overflow-hidden relative">
        <TopNavBar title="KINETIC COMMAND" breadcrumbs={[{ label: 'Timeline' }]} />

        <div className="flex-1 flex flex-col overflow-hidden mt-16">
          <div className="flex-1 flex overflow-hidden">
            <div className="flex-[2] flex flex-col p-4 bg-surface gap-4 overflow-hidden">
              <div className="flex-1 bg-surface-container-low rounded-xl relative group overflow-hidden shadow-2xl border border-surface-variant/30">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAinTnndW69ia9jTm57PTi7gs0mb2LPMLbZv0GPF6T_sH7vQ86byWm0yC-iJHXddCblfMS3hgS6EiqX9Jqy1zSc6ayi7QjdJ6wOFVxq4FsP4aLMnJqzWTBOrOP9yrbF19CTNin6mvqokZjvchzMpI5UP8y6A4FHKbGOS1e9AuyyoTufnuXsHFOaCKSrTbfzYBvNjifERyuHMggdmZIoP2MGLslMp-LaJ8YiRZ9Mue9bPbwgwZznmWDW5qFG2MWYb2MMfZm_9RqNMw"
                  alt="Video Preview"
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 flex flex-col justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex justify-between items-start">
                    <span className="bg-black/60 px-3 py-1 rounded text-[10px] font-mono text-primary uppercase tracking-tighter">00:14:22:04</span>
                  </div>
                  <div className="flex justify-center items-center gap-8">
                    <button className="bg-black/60 p-3 rounded-full hover:bg-primary-container active:scale-90 transition-all"><span className="material-symbols-outlined">replay_10</span></button>
                    <button className="bg-primary-container text-on-primary-container p-6 rounded-full shadow-lg shadow-primary/20 active:scale-95 transition-all"><span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span></button>
                    <button className="bg-black/60 p-3 rounded-full hover:bg-primary-container active:scale-90 transition-all"><span className="material-symbols-outlined">forward_30</span></button>
                  </div>
                  <div className="h-1 bg-white/20 w-full rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-1/3"></div>
                  </div>
                </div>
              </div>

              <div className="h-[280px] bg-surface-container-low border border-surface-variant/30 rounded-xl flex flex-col overflow-hidden">
                <div className="px-4 py-2 border-b border-surface-variant/30 flex justify-between items-center bg-surface-container">
                  <h3 className="text-[10px] font-bold text-outline-variant uppercase tracking-widest">Project Clips List</h3>
                </div>
                <div className="flex-1 overflow-y-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead className="bg-surface-container-high/50 sticky top-0 z-10 text-[10px] font-bold text-outline-variant uppercase tracking-tighter border-b border-surface-variant/20">
                      <tr>
                        <th className="px-4 py-2">Asset</th>
                        <th className="px-4 py-2">Start</th>
                        <th className="px-4 py-2">End</th>
                        <th className="px-4 py-2">Track</th>
                      </tr>
                    </thead>
                    <tbody className="text-on-surface-variant">
                      <tr className="border-b border-surface-variant/10 hover:bg-surface-container-high transition-colors group cursor-pointer">
                        <td className="px-4 py-2 flex items-center gap-3">
                          <div className="w-10 h-7 rounded bg-surface-container-highest overflow-hidden">
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-pW83O9awZ23fwKSbKWsiDput1FB943MC70RMggxFyBDL7oH0CmFe0xlLbqxbdPQvPloY-hlvEjSdEMFDzKuEaslhwF1gYZI20M_SSFiQJtdS4WF-ARDZGjW0shGX1zE7_wdqT4p-TijDU9sgscvnEW4tlgylOKJprmQ9KBc_yyn81y3hOOKgR9ih7p8h2ecMuEaCh3AhtZ0UPXPW_6L2x9MPQaQXVrWkIUYZ6pj2WZpivaM0yioP548rgXvZceS9DF3riM7g-g" alt="Asset Thumb" className="w-full h-full object-cover" />
                          </div>
                          <span className="font-medium text-on-surface">SCENE_01_A_ROLL.mp4</span>
                        </td>
                        <td className="px-4 py-2 font-mono text-[11px]">00:00:00:00</td>
                        <td className="px-4 py-2 font-mono text-[11px]">00:00:15:20</td>
                        <td className="px-4 py-2"><span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-[10px]">A-ROLL</span></td>
                      </tr>
                      <tr className="border-b border-surface-variant/10 hover:bg-surface-container-high transition-colors group cursor-pointer bg-primary/5">
                        <td className="px-4 py-2 flex items-center gap-3">
                          <div className="w-10 h-7 rounded bg-surface-container-highest overflow-hidden">
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAinTnndW69ia9jTm57PTi7gs0mb2LPMLbZv0GPF6T_sH7vQ86byWm0yC-iJHXddCblfMS3hgS6EiqX9Jqy1zSc6ayi7QjdJ6wOFVxq4FsP4aLMnJqzWTBOrOP9yrbF19CTNin6mvqokZjvchzMpI5UP8y6A4FHKbGOS1e9AuyyoTufnuXsHFOaCKSrTbfzYBvNjifERyuHMggdmZIoP2MGLslMp-LaJ8YiRZ9Mue9bPbwgwZznmWDW5qFG2MWYb2MMfZm_9RqNMw" alt="Asset Thumb" className="w-full h-full object-cover" />
                          </div>
                          <span className="font-medium text-on-surface">CITY_SKYLINE_WIDE.mp4</span>
                        </td>
                        <td className="px-4 py-2 font-mono text-[11px]">00:00:10:00</td>
                        <td className="px-4 py-2 font-mono text-[11px]">00:00:22:04</td>
                        <td className="px-4 py-2"><span className="px-2 py-0.5 rounded-full bg-secondary/10 text-secondary border border-secondary/20 text-[10px]">B-ROLL</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="flex-1 bg-surface-container-low border-l border-[#2d3449]/20 flex flex-col overflow-hidden">
              <div className="p-4 border-b border-surface-variant/20 bg-surface-container-low/50">
                <h3 className="text-[10px] font-bold text-outline-variant uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="w-1 h-3 bg-primary rounded-full"></span> Clip Selection Preview
                </h3>
                <div className="aspect-video w-full rounded bg-surface-container-highest overflow-hidden border border-surface-variant/30 mb-4 shadow-inner relative">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAinTnndW69ia9jTm57PTi7gs0mb2LPMLbZv0GPF6T_sH7vQ86byWm0yC-iJHXddCblfMS3hgS6EiqX9Jqy1zSc6ayi7QjdJ6wOFVxq4FsP4aLMnJqzWTBOrOP9yrbF19CTNin6mvqokZjvchzMpI5UP8y6A4FHKbGOS1e9AuyyoTufnuXsHFOaCKSrTbfzYBvNjifERyuHMggdmZIoP2MGLslMp-LaJ8YiRZ9Mue9bPbwgwZznmWDW5qFG2MWYb2MMfZm_9RqNMw" alt="Clip Preview" className="w-full h-full object-cover" />
                  <div className="absolute bottom-2 right-2 bg-black/70 px-1.5 py-0.5 rounded text-[8px] font-mono text-white">4K RESOLUTION</div>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-6">
                <div>
                  <h3 className="text-[10px] font-bold text-outline-variant uppercase tracking-widest mb-4">Properties Panel</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="text-[11px] text-on-surface-variant block mb-1">CLIP NAME</label>
                      <input type="text" defaultValue="skyline_dusk_v02.mp4" className="w-full bg-surface-container text-sm rounded border-none focus:ring-1 focus:ring-primary-container p-2 text-on-surface" />
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-auto flex justify-end">
                    <Link to="/project/alpha/render" className="px-6 py-2.5 bg-primary-container text-on-primary-container rounded-lg font-bold flex items-center gap-2 shadow-lg shadow-primary-container/20 hover:scale-[1.02] active:scale-95 transition-all">
                        Render Project <span className="material-symbols-outlined">arrow_forward</span>
                    </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="h-72 bg-surface-container border-t border-[#2d3449]/30 flex flex-col shrink-0">
            <div className="flex justify-between items-center px-6 py-2 bg-surface-container-low border-b border-[#2d3449]/10">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <button className="text-[#c2c6d6] hover:text-primary"><span className="material-symbols-outlined text-lg">skip_previous</span></button>
                  <button className="text-primary active:scale-90"><span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span></button>
                  <button className="text-[#c2c6d6] hover:text-primary"><span className="material-symbols-outlined text-lg">skip_next</span></button>
                </div>
                <div className="text-primary font-mono text-base font-bold tracking-tighter">00:14:22:04</div>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-on-surface-variant text-sm">zoom_out</span>
                <input type="range" className="w-32 accent-primary h-1 bg-surface-container-highest rounded-full" />
                <span className="material-symbols-outlined text-on-surface-variant text-sm">zoom_in</span>
              </div>
            </div>

            <div className="flex-1 overflow-x-auto relative flex">
              <div className="w-32 flex flex-col bg-surface-container-low border-r border-[#2d3449]/20 sticky left-0 z-20">
                <div className="h-8 border-b border-[#2d3449]/10 flex items-center px-3 text-[10px] text-outline-variant font-bold uppercase tracking-widest bg-surface-container-low">Timelines</div>
                <div className="h-14 flex items-center px-4 gap-3 text-[11px] font-bold text-on-surface-variant border-b border-[#2d3449]/5">
                  <span className="material-symbols-outlined text-xs">video_library</span> A-ROLL
                </div>
                <div className="h-14 flex items-center px-4 gap-3 text-[11px] font-bold text-on-surface-variant border-b border-[#2d3449]/5">
                  <span className="material-symbols-outlined text-xs">layers</span> B-ROLL
                </div>
                <div className="h-14 flex items-center px-4 gap-3 text-[11px] font-bold text-on-surface-variant">
                  <span className="material-symbols-outlined text-xs">audiotrack</span> AUDIO
                </div>
              </div>

              <div className="flex-1 min-w-[2000px] flex flex-col relative">
                <div className="h-8 bg-surface-container flex items-end border-b border-[#2d3449]/10">
                  <div className="w-full flex">
                    <div className="flex-1 flex justify-between px-2 text-[9px] font-mono text-outline-variant/60">
                      <span>00:00:00</span><span>00:00:05</span><span>00:00:10</span><span>00:00:15</span><span>00:00:20</span>
                    </div>
                  </div>
                </div>

                <div className="h-14 border-b border-[#2d3449]/5 relative flex items-center">
                  <div className="absolute left-0 w-[400px] h-10 bg-primary/20 border-l-4 border-primary rounded-r p-2 flex items-center gap-3 overflow-hidden ml-4">
                    <span className="text-[9px] font-bold text-primary truncate">SCENE_01_A_ROLL.mp4</span>
                  </div>
                </div>

                <div className="h-14 border-b border-[#2d3449]/5 relative flex items-center">
                  <div className="absolute left-[380px] w-[200px] h-10 bg-secondary/20 border-l-4 border-secondary rounded-r p-2 flex items-center gap-3 overflow-hidden">
                    <span className="text-[9px] font-bold text-secondary truncate">CITY_TIMELAPSE.mp4</span>
                  </div>
                </div>

                <div className="h-14 relative flex items-center">
                  <div className="absolute left-0 w-[800px] h-10 bg-tertiary/10 border-l-4 border-tertiary rounded-r p-2 flex items-center gap-3 overflow-hidden ml-4">
                    <span className="text-[9px] font-bold text-tertiary absolute left-4 bg-surface-container px-1">CINEMATIC_ORCHESTRA_MAIN.wav</span>
                  </div>
                </div>

                <div className="absolute top-0 bottom-0 left-[600px] w-[1px] bg-white z-10 shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                  <div className="absolute -top-1 -left-[5px] w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[8px] border-t-white"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
