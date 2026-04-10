import SideNavBar from '../components/SideNavBar';

export default function Settings() {
  return (
    <div className="flex h-screen w-full bg-background">
      <SideNavBar variant="global" />

      <main className="flex-1 ml-64 flex flex-col bg-background h-screen overflow-y-auto">
        <header className="w-full h-16 bg-[#0b1326] border-b border-white/5 flex items-center justify-between px-8 shadow-[0_0_32px_rgba(59,130,246,0.06)] sticky top-0 z-40">
          <div className="flex items-center gap-6">
            <h1 className="text-lg font-black text-[#dbe2fd] tracking-tighter uppercase font-headline">System Configuration</h1>
            <div className="h-4 w-px bg-white/10"></div>
            <div className="flex gap-4">
              <span className="font-headline uppercase tracking-widest text-[10px] font-bold text-[#c2c6d6]">Environment: Production</span>
              <span className="font-headline uppercase tracking-widest text-[10px] font-bold text-[#3b82f6]">• Online</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-lg text-[#c2c6d6] hover:bg-[#2d3449] transition-colors active:scale-95">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="p-2 rounded-lg text-[#c2c6d6] hover:bg-[#2d3449] transition-colors active:scale-95">
              <span className="material-symbols-outlined">account_circle</span>
            </button>
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto w-full space-y-8">
          <div className="flex items-end justify-between border-b border-white/5 pb-6">
            <div className="space-y-1">
              <h2 className="text-3xl font-black text-on-surface tracking-tight font-headline uppercase">Nexus Pipeline</h2>
              <p className="text-on-surface-variant text-sm">Fine-tune your technical stack and API integrations.</p>
            </div>
            <button className="bg-primary-container text-on-primary-container px-6 py-2.5 rounded-lg font-bold text-sm hover:opacity-90 active:scale-95 transition-all shadow-[inset_0_2px_0_rgba(255,255,255,0.2)]">
              Save Changes
            </button>
          </div>

          <div className="grid grid-cols-12 gap-6">
            <section className="col-span-12 lg:col-span-8 bg-surface-container-low rounded-xl p-6 space-y-6">
              <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                <span className="material-symbols-outlined text-primary">key</span>
                <h3 className="text-lg font-bold uppercase tracking-tight">API Integrations</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-xs font-bold text-outline uppercase tracking-widest">Gemini API Key</label>
                  <div className="flex gap-2">
                    <div className="relative flex-1 group">
                      <input type="password" value="••••••••••••••••••••••••••••" readOnly className="w-full bg-surface-container-highest border-none rounded-lg py-3 pl-4 pr-10 text-on-surface focus:ring-2 focus:ring-primary-container transition-all font-mono text-sm" />
                      <button className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface">
                        <span className="material-symbols-outlined text-sm">visibility</span>
                      </button>
                    </div>
                    <button className="px-4 py-3 bg-surface-variant hover:bg-surface-bright text-on-surface rounded-lg text-xs font-bold uppercase transition-colors whitespace-nowrap">Verify</button>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                    <p className="text-[10px] text-on-surface-variant">Required for AI-driven scripting and topic research.</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-bold text-outline uppercase tracking-widest">Claude API Key</label>
                  <div className="flex gap-2">
                    <div className="relative flex-1 group">
                      <input type="password" value="sk-ant-api03-xxxxxxxxxx" readOnly className="w-full bg-surface-container-highest border-none rounded-lg py-3 pl-4 pr-10 text-on-surface focus:ring-2 focus:ring-primary-container transition-all font-mono text-sm" />
                      <button className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface">
                        <span className="material-symbols-outlined text-sm">visibility</span>
                      </button>
                    </div>
                    <button className="px-4 py-3 bg-surface-variant hover:bg-surface-bright text-on-surface rounded-lg text-xs font-bold uppercase transition-colors whitespace-nowrap">Verify</button>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-error text-sm">cancel</span>
                    <p className="text-[10px] text-on-surface-variant">Optional secondary model for enhanced creative writing.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="col-span-12 lg:col-span-4 bg-surface-container-low rounded-xl p-6 space-y-6">
              <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                <span className="material-symbols-outlined text-primary">terminal</span>
                <h3 className="text-lg font-bold uppercase tracking-tight">Core Environment</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-surface-container/50 rounded-lg border border-white/5">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <span className="text-sm font-medium">FFmpeg</span>
                  </div>
                  <span className="text-[10px] font-black text-secondary uppercase tracking-widest">Installed</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-surface-container/50 rounded-lg border border-white/5">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <span className="text-sm font-medium">Python 3.11</span>
                  </div>
                  <span className="text-[10px] font-black text-secondary uppercase tracking-widest">Installed</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
