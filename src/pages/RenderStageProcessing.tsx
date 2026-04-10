import SideNavBar from '../components/SideNavBar';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function RenderStageProcessing() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/project/alpha/render/complete');
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex h-screen w-full bg-surface text-on-surface">
      <SideNavBar projectId="alpha" projectName="Precision Editor" projectVersion="V-Suite v2.4" />
      <main className="flex-1 ml-64 flex flex-col h-screen bg-surface relative overflow-hidden">
        <header className="w-full h-16 fixed top-0 z-50 bg-[#0b1326] flex justify-between items-center px-6 shadow-[0_32px_32px_rgba(77,142,255,0.06)] border-b border-outline-variant/10">
          <div className="flex items-center gap-8">
            <span className="text-xl font-black text-[#dbe2fd] font-headline">Render Stage</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="px-6 py-1.5 rounded-lg bg-primary-container text-on-primary-container font-bold shadow-[inset_0_2px_0_rgba(255,255,255,0.2)] hover:opacity-90 transition-all text-sm">Render</button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8 mt-16 custom-scrollbar">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="flex justify-between items-end">
              <div>
                <p className="text-[0.6875rem] font-mono text-secondary uppercase tracking-widest mb-1">Queue ID: NX-98421-PR</p>
                <h1 className="text-4xl font-extrabold font-headline text-on-surface tracking-tight">Final_Assembly_Master_V04.mp4</h1>
              </div>
              <div className="flex items-center gap-4 bg-surface-container px-4 py-2 rounded-lg border border-outline-variant/5">
                <div className="flex flex-col items-end">
                  <span className="text-[0.6rem] text-on-surface-variant font-label uppercase">Encoder Engine</span>
                  <span className="text-sm font-mono text-on-surface">NVENC H.265 (HEVC)</span>
                </div>
                <div className="w-px h-8 bg-outline-variant/20"></div>
                <div className="flex flex-col items-end">
                  <span className="text-[0.6rem] text-on-surface-variant font-label uppercase">Resolution</span>
                  <span className="text-sm font-mono text-on-surface">3840 x 2160</span>
                </div>
              </div>
            </div>

            <section className="bg-surface-container rounded-xl p-10 relative overflow-hidden bg-gradient-to-b from-primary/5 to-transparent border border-outline-variant/5 shadow-2xl">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <span className="material-symbols-outlined text-9xl">memory</span>
              </div>
              <div className="relative z-10 flex flex-col items-center">
                <div className="flex justify-between w-full mb-4 items-end">
                  <div className="flex gap-4 items-center">
                    <div className="px-3 py-1 bg-secondary/10 border border-secondary/20 rounded-full flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                      <span className="text-secondary text-xs font-bold font-label uppercase tracking-wider">Processing</span>
                    </div>
                    <span className="text-sm font-label text-on-surface-variant">Pass 2 of 2: Global Optimization</span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-6xl font-black font-headline text-on-surface">20</span>
                    <span className="text-3xl font-bold font-headline text-secondary">%</span>
                  </div>
                </div>
                <div className="w-full h-4 bg-surface-container-highest rounded-full overflow-hidden shadow-inner">
                  <div className="h-full bg-secondary w-1/5 shadow-[0_0_12px_rgba(79,219,200,0.4)] transition-all duration-500 relative">
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.2)_50%,transparent_100%)] animate-[shimmer_2s_infinite]"></div>
                  </div>
                </div>
                <div className="grid grid-cols-3 w-full mt-10 gap-8">
                  <div className="flex flex-col">
                    <span className="text-[0.625rem] text-on-surface-variant font-label uppercase tracking-widest mb-1">Frame Progress</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-mono text-on-surface">2400</span>
                      <span className="text-sm font-mono text-outline">/ 12000</span>
                    </div>
                  </div>
                  <div className="flex flex-col border-x border-outline-variant/10 px-8">
                    <span className="text-[0.625rem] text-on-surface-variant font-label uppercase tracking-widest mb-1">Time Elapsed</span>
                    <span className="text-2xl font-mono text-on-surface">02:45:12</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[0.625rem] text-on-surface-variant font-label uppercase tracking-widest mb-1">Time Remaining</span>
                    <span className="text-2xl font-mono text-secondary">08:15:44</span>
                  </div>
                </div>
              </div>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 flex flex-col h-[400px]">
                <div className="bg-surface-container-low px-4 py-2 rounded-t-lg border-x border-t border-outline-variant/10 flex justify-between items-center">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-error/20 border border-error/40"></div>
                    <div className="w-3 h-3 rounded-full bg-tertiary/20 border border-tertiary/40"></div>
                    <div className="w-3 h-3 rounded-full bg-secondary/20 border border-secondary/40"></div>
                  </div>
                  <span className="text-[0.6rem] font-mono text-on-surface-variant uppercase">Terminal-Live-Stream.log</span>
                  <div className="flex gap-3">
                    <span className="material-symbols-outlined text-xs text-on-surface-variant cursor-pointer">search</span>
                    <span className="material-symbols-outlined text-xs text-on-surface-variant cursor-pointer">content_copy</span>
                  </div>
                </div>
                <div className="flex-1 bg-surface-container-lowest p-5 rounded-b-lg border border-outline-variant/10 overflow-y-auto font-mono text-xs leading-relaxed text-[#c2c6d6] custom-scrollbar">
                  <div className="space-y-1">
                    <p><span className="text-secondary">[09:12:01]</span> <span className="text-on-primary-fixed-variant">INFO:</span> Initializing CUDA context on Device 0 (RTX 4090)...</p>
                    <p><span className="text-secondary">[09:12:03]</span> <span className="text-on-primary-fixed-variant">INFO:</span> Loading project assets: "Final_Assembly_Master_V04.nxp"</p>
                    <p><span className="text-secondary">[09:12:15]</span> <span className="text-on-primary-fixed-variant">INFO:</span> Pass 1 analysis complete. Found 4,210 movement vectors.</p>
                    <p><span className="text-secondary">[09:12:20]</span> <span className="text-on-primary-fixed-variant">INFO:</span> Starting frame render sequence. Chunk size: 1024.</p>
                    <p><span className="text-secondary">[09:12:25]</span> <span className="text-tertiary">WARN:</span> Frame 1204 - Dropped non-critical metadata layer "audio_ref_02".</p>
                    <p><span className="text-secondary">[09:12:40]</span> <span className="text-on-primary-fixed-variant">INFO:</span> Processing frames 1800-2000. Heat: 62°C.</p>
                    <p><span className="text-secondary">[09:13:02]</span> <span className="text-on-primary-fixed-variant">INFO:</span> Bitrate optimization active. Current avg: 45.2 Mbps.</p>
                    <p><span className="text-secondary">[09:13:15]</span> <span className="text-on-primary-fixed-variant">INFO:</span> Frame 2102: Bloom filter applied successfully.</p>
                    <p><span className="text-secondary">[09:13:30]</span> <span className="text-on-primary-fixed-variant">INFO:</span> Frame 2250: Color space conversion BT.2020 -&gt; Rec.709 verified.</p>
                    <p><span className="text-secondary">[09:14:05]</span> <span className="text-on-primary-fixed-variant">INFO:</span> Processing frames 2300-2400. Engine load: 88%.</p>
                    <p><span className="text-secondary">[09:14:06]</span> <span className="text-on-primary-fixed-variant">INFO:</span> Frame 2400 written to buffer. Total size: 2.1 GB.</p>
                    <p className="animate-pulse border-l-2 border-secondary pl-2 ml-1 text-on-surface">_ awaiting next chunk...</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="aspect-video bg-surface-container-lowest rounded-lg overflow-hidden border border-outline-variant/10 relative group">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAc4-tbmeaarNXRxdFw05h3pBDJDK8yp9aaMDxHlLNza_uF-Z0QuOD99aziKRbCUQNFuzb2kd7dPGOGERACB5p-x3lIoFJNJjv-h0Ir_xRWx5thoBKb2MWS73Uk7SZgKCt1F6reENv6o0Ltcs4IYAED6kzg4kRVBBKKk40tjJxwp6E9UHEZTo-ly78vc5SWxU3IFYxxIzeRUt-tQJozqpuaLm389-Rif5Q0kpeuV6J-vPFndPlA1ZHO1IvcL-iCHNGgnkdKqI_pxw" alt="Live render preview" className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-12 h-12 border-2 border-secondary/40 rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-secondary">videocam</span>
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-2 flex gap-1.5">
                    <div className="px-1.5 py-0.5 bg-black/80 rounded text-[0.6rem] font-mono text-secondary">LIVE</div>
                    <div className="px-1.5 py-0.5 bg-black/80 rounded text-[0.6rem] font-mono text-on-surface">FR: 23.976</div>
                  </div>
                </div>

                <div className="bg-surface-container rounded-xl p-5 border border-outline-variant/5">
                  <h3 className="text-xs font-bold font-headline uppercase text-on-surface-variant tracking-wider mb-4">Hardware Telemetry</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-[0.65rem] font-mono mb-1">
                        <span>GPU Load (RTX 4090)</span>
                        <span className="text-secondary">88%</span>
                      </div>
                      <div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
                        <div className="h-full bg-secondary w-[88%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[0.65rem] font-mono mb-1">
                        <span>VRAM Utilization</span>
                        <span className="text-tertiary">21.4 / 24 GB</span>
                      </div>
                      <div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
                        <div className="h-full bg-tertiary w-[89%]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center pt-4 pb-12">
              <Link to="/project/alpha/render" className="group flex items-center gap-3 px-8 py-3 bg-error-container text-on-error-container rounded-lg font-bold hover:brightness-110 transition-all shadow-lg active:scale-95">
                <span className="material-symbols-outlined group-hover:rotate-90 transition-transform">cancel</span>
                Abort Render Task
              </Link>
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
