import SideNavBar from '../components/SideNavBar';
import TopNavBar from '../components/TopNavBar';
import { Link } from 'react-router-dom';

export default function ResearchStageProcessed() {
  return (
    <div className="flex h-screen w-full bg-surface">
      <SideNavBar projectId="alpha" projectName="Project Alpha" projectVersion="v2.4.1 Production" />
      <main className="flex-1 ml-64 flex flex-col h-screen overflow-hidden relative">
        <TopNavBar title="KINETIC" />

        <div className="flex-1 overflow-y-auto mt-16 p-8 custom-scrollbar">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-outline-variant/10 pb-8">
              <div>
                <nav className="flex items-center gap-2 text-xs text-on-surface-variant mb-2 uppercase tracking-widest font-bold">
                  <span>Projects</span>
                  <span className="material-symbols-outlined text-xs">chevron_right</span>
                  <span>Alpha</span>
                  <span className="material-symbols-outlined text-xs">chevron_right</span>
                  <span className="text-primary">Research</span>
                </nav>
                <div className="flex items-center gap-4">
                  <h1 className="text-4xl font-extrabold font-headline tracking-tight text-on-surface">Research</h1>
                  <span className="px-3 py-1 rounded-full bg-secondary-container/20 text-secondary text-[10px] font-black tracking-widest uppercase border border-secondary/30">PROCESSED</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Link to="/project/alpha/script" className="px-6 py-2.5 bg-primary-container text-on-primary-container rounded-lg font-bold flex items-center gap-2 shadow-lg shadow-primary-container/20 hover:scale-[1.02] active:scale-95 transition-all">
                  <span className="material-symbols-outlined">check_circle</span>
                  Continue to Script
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-12 bg-surface-container-low p-6 rounded-xl border border-outline-variant/5 shadow-xl">
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-primary">subject</span>
                  <label className="text-xs font-black uppercase tracking-widest text-on-surface-variant">Video Topic</label>
                </div>
                <input
                  type="text"
                  defaultValue="The Future of Generative AI in Professional Video Post-Production"
                  className="w-full bg-surface-container border-none text-xl font-bold text-on-surface p-4 rounded-lg focus:ring-2 focus:ring-primary-container/50 transition-all outline-none"
                />
              </div>

              <div className="md:col-span-5 bg-surface-container-low p-6 rounded-xl border border-outline-variant/5 shadow-xl">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary">search_insights</span>
                    <label className="text-xs font-black uppercase tracking-widest text-on-surface-variant">Research Queries</label>
                  </div>
                  <button className="text-primary text-xs font-bold flex items-center gap-1 hover:underline">
                    <span className="material-symbols-outlined text-sm">add</span> Add
                  </button>
                </div>
                <div className="flex flex-wrap gap-3">
                  {['AI neural rendering vs CGI', 'Nvidia Warp speed benchmarks', 'OpenUSD standard adoption', 'Sora vs Runway Gen-3 comparison'].map(query => (
                    <div key={query} className="group flex items-center gap-2 bg-surface-container-highest px-3 py-2 rounded-lg border border-outline-variant/10 text-sm">
                      <span>{query}</span>
                      <button className="opacity-0 group-hover:opacity-100 transition-opacity text-on-surface-variant hover:text-error">
                        <span className="material-symbols-outlined text-xs">close</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:col-span-7 bg-surface-container-low p-6 rounded-xl border border-outline-variant/5 shadow-xl">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-tertiary">format_list_bulleted</span>
                    <label className="text-xs font-black uppercase tracking-widest text-on-surface-variant">Key Section Titles</label>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    "The Death of the Traditional Timeline",
                    "Neural In-Painting: Seamless Object Removal",
                    "Cloud-Native Collaboration Frameworks"
                  ].map((title, idx) => (
                    <div key={idx} className="flex items-center gap-4 bg-surface-container p-3 rounded-lg border-l-4 border-primary group">
                      <span className="text-xs font-mono text-on-surface-variant opacity-50">0{idx + 1}</span>
                      <input
                        type="text"
                        defaultValue={title}
                        className="flex-1 bg-transparent border-none text-sm font-semibold text-on-surface focus:ring-0 p-0 outline-none"
                      />
                      <button className="text-on-surface-variant opacity-0 group-hover:opacity-100 transition-all hover:text-error">
                        <span className="material-symbols-outlined text-lg">delete</span>
                      </button>
                    </div>
                  ))}
                  <button className="w-full py-3 border-2 border-dashed border-outline-variant/20 rounded-lg text-on-surface-variant text-xs font-bold hover:bg-surface-container-highest transition-all flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-sm">add_circle</span>
                    Add Section
                  </button>
                </div>
              </div>

              <div className="md:col-span-12 bg-surface-container p-1 rounded-xl overflow-hidden relative min-h-[160px] flex items-center justify-center">
                <div className="absolute inset-0 z-0 opacity-40">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCx06I-wiZn0qz1JYG1o-Kk2j3YLmbT8EPohgPBYx1DFFz2A3-VMuOrVUZtfHh9lW_RUsCjJF03HlHI3jhB-mbPOOmYhfGVpBr_7X_FGeGS2HaSEbEFQkNsMw3t7b9v8D46SVXSgh7bfdPILt0AiJ2o72NR7w1cW7166M23SaE5ENa35hQRFw-CObwPHSBAf3dlTicsm4Qc-Qg7RWxUWcP22FNR6FlRF5wn0Vv5MT5lwcWJU3Dj7OTr6prHntoIf9Nm0CcOEuTNg" className="w-full h-full object-cover" alt="Background" />
                </div>
                <div className="relative z-10 text-center px-6">
                  <p className="text-secondary text-sm font-black uppercase tracking-[0.2em] mb-1">Nexus Intelligence</p>
                  <p className="text-on-surface/80 text-xs font-medium max-w-lg">Content overlap detected with "AI Workflow 2024". Recommended focus: Integration with USD-based asset pipelines for maximum differentiation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
