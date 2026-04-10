import SideNavBar from '../components/SideNavBar';
import { Link } from 'react-router-dom';

export default function RenderStageComplete() {
  return (
    <div className="flex h-screen w-full bg-background text-on-surface">
      <SideNavBar projectId="alpha" projectName="Precision Editor" projectVersion="V-Suite v2.4" />
      <main className="flex-1 ml-64 flex flex-col h-screen bg-background relative overflow-hidden">
        <header className="w-full h-16 fixed top-0 z-50 bg-[#0b1326] flex justify-between items-center pl-72 pr-6 border-none shadow-[0_32px_32px_rgba(77,142,255,0.06)]">
          <div className="flex items-center gap-8">
            <span className="text-xl font-black text-[#dbe2fd] font-headline tracking-tighter">Render Stage</span>
            <nav className="hidden md:flex gap-6 items-center">
              <span className="text-[#4d8eff] border-b-2 border-[#4d8eff] pb-1 font-bold text-sm transition-all">Export</span>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-[#c2c6d6] hover:bg-[#171f33] p-2 rounded-lg transition-all">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <div className="flex items-center gap-3 bg-surface-container-high px-3 py-1.5 rounded-full">
              <img className="w-7 h-7 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgPvIMIFzeCXklw2nLl2S2drJi2qwDV7VMrDxMTv_wVLFSUfWwLeJAjVtTTlwK8KIh43GGZCexuxkiWdU181acSADaxzanvHycAn7vO13MEFd1zjgk7e6Z9FOFkWOiEeA7XagAD-59vEu3BiI4sXejMON7tihRbz2RylrLGCmWM5BeAP6ygWU6gVzYeoMMdGE2xVNZThrj2grOehu3SBAajIb4Z8xJ3xNQhHOy9FpDYdCf-bHnEl-sQwCdqPaSuzKBYKAOssEPeQ" alt="User Avatar" />
              <span className="text-sm font-medium text-on-surface">Alex Chen</span>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8 mt-16 flex items-center justify-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="max-w-4xl w-full z-10">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary-container/20 text-secondary mb-6 relative">
                <div className="absolute inset-0 rounded-full border-4 border-secondary/30 animate-pulse"></div>
                <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              </div>
              <h1 className="text-5xl font-black tracking-tight text-on-surface mb-2">Render Complete!</h1>
              <p className="text-on-surface-variant text-lg">Your master file has been processed and is ready for distribution.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="md:col-span-2 bg-surface-container rounded-xl overflow-hidden shadow-2xl flex flex-col border border-white/5">
                <div className="aspect-video relative group bg-surface-container-lowest">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFfaBKZxQNKb-Co4H4mVlmyzerI8YOXszIEy5V5lc4osd774xD5efYBW25YIp4T01mHFdY6W8IR92U3iVdKDh0qqq5bqJGXO7iIZ-XE123zwAcVDFKzmTNCgkBTbiTsHKfl4HI4qO6qUDQs1Q-90HUOS5QDK1CQOSrV3bZYa1JEakxflMleFArduCmBMopn2BVUob9zz6GRlleCsa_D5Zhq__IwhqEcwfRAy65FpP10ASLk2-3-rJsM8D2W9aqKHo3TJgZVA0ExQ" alt="Preview" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-all active:scale-95 group/btn">
                      <span className="material-symbols-outlined text-white text-3xl ml-1" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center px-4 py-2 bg-black/40 backdrop-blur-lg rounded-lg border border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-secondary"></span>
                      <span className="text-xs font-mono font-bold tracking-widest">FINAL_MASTER_V01</span>
                    </div>
                    <span className="text-xs font-mono">00:12:05:00</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-surface-container rounded-xl p-5 border border-white/5 flex items-center justify-between">
                  <div>
                    <span className="text-[0.6875rem] font-bold text-on-surface-variant uppercase tracking-widest block mb-1">Resolution</span>
                    <span className="text-xl font-bold text-on-surface">4K Ultra HD</span>
                  </div>
                  <span className="material-symbols-outlined text-primary/40">branding_watermark</span>
                </div>
                <div className="bg-surface-container rounded-xl p-5 border border-white/5 flex items-center justify-between">
                  <div>
                    <span className="text-[0.6875rem] font-bold text-on-surface-variant uppercase tracking-widest block mb-1">File Size</span>
                    <span className="text-xl font-bold text-on-surface">2.44 GB</span>
                  </div>
                  <span className="material-symbols-outlined text-primary/40">database</span>
                </div>
                <div className="bg-surface-container-highest rounded-xl p-5 border-l-4 border-primary">
                  <span className="text-[0.6875rem] font-bold text-primary uppercase tracking-widest block mb-1">Codec</span>
                  <span className="text-lg font-medium text-on-surface">H.265 (HEVC)</span>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded">10-BIT</span>
                    <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded">HDR10</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface-container rounded-xl p-6 mb-8 border border-white/5">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary-container/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary-container text-2xl">movie</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-on-surface">project_alpha_final.mp4</h3>
                    <p className="text-sm text-on-surface-variant">Export Path: /Volumes/SSD_PRO/Exports/Masters/</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-right">
                    <span className="text-[0.6875rem] font-bold text-on-surface-variant uppercase tracking-widest block">Duration</span>
                    <span className="font-mono text-on-surface">12:05</span>
                  </div>
                  <div className="w-[1px] h-10 bg-outline-variant/30"></div>
                  <div className="text-right">
                    <span className="text-[0.6875rem] font-bold text-on-surface-variant uppercase tracking-widest block">Format</span>
                    <span className="font-mono text-on-surface">MPEG-4</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button className="flex items-center gap-3 px-8 py-4 bg-primary-container text-on-primary-container rounded-xl font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_0_32px_rgba(77,142,255,0.3)] shadow-[inset_0_2px_0_0_rgba(255,255,255,0.3)]">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>play_circle</span>
                Play Video
              </button>
              <button className="flex items-center gap-3 px-8 py-4 bg-surface-container-highest text-on-surface rounded-xl font-bold transition-all hover:bg-surface-bright border border-white/5 active:scale-95">
                <span className="material-symbols-outlined">folder_open</span>
                Open Folder
              </button>
              <button className="flex items-center gap-3 px-8 py-4 bg-surface-container-highest text-on-surface rounded-xl font-bold transition-all hover:bg-surface-bright border border-white/5 active:scale-95">
                <span className="material-symbols-outlined">download</span>
                Download
              </button>
              <Link to="/dashboard" className="flex items-center justify-center w-14 h-14 bg-surface-container-highest text-on-surface rounded-xl transition-all hover:bg-surface-bright border border-white/5">
                <span className="material-symbols-outlined">share</span>
              </Link>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-2 bg-surface-container-lowest overflow-hidden">
            <div className="h-full bg-primary/20 w-3/4"></div>
            <div className="absolute top-0 right-1/4 bottom-0 w-1 bg-primary shadow-[0_0_10px_rgba(173,198,255,0.8)]"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
