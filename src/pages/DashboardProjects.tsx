import SideNavBar from '../components/SideNavBar';
import TopNavBar from '../components/TopNavBar';
import { Link } from 'react-router-dom';

export default function DashboardProjects() {
  return (
    <div className="flex h-screen w-full bg-surface">
      <SideNavBar variant="global" />
      <main className="flex-1 ml-64 flex flex-col h-screen">
        <TopNavBar
          breadcrumbs={[
            { label: 'Dashboard', to: '/dashboard' },
            { label: 'Projects' }
          ]}
        />

        <div className="flex-1 p-8 mt-16 max-w-7xl mx-auto w-full overflow-y-auto custom-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
            <div className="md:col-span-2 bg-surface-container rounded-xl p-6 relative overflow-hidden group">
              <div className="relative z-10">
                <p className="text-[0.6875rem] text-primary mb-1 uppercase font-bold tracking-widest">Ongoing Production</p>
                <h2 className="text-3xl font-black mb-4 font-headline">Cyberpunk Short 2024</h2>
                <div className="flex items-center gap-4">
                  <span className="bg-primary-container/20 text-primary-fixed px-3 py-1 rounded-full text-xs font-bold border border-primary/20">Rendering 84%</span>
                  <span className="text-on-surface-variant text-xs flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">schedule</span>
                    14m remaining
                  </span>
                </div>
              </div>
              <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 pointer-events-none transition-transform group-hover:scale-105 duration-700">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkvAx_q0yUefmvQUpNsYUTO0UnI700W37t6_XXRxWdP6x-TMRP8uOkhrHENM_CYesbft_QZ97Ip4f1VNzpIlv7_mDo7EOIv5X5oJqdGOg_hPXAzBKHN-fonFF-JqwmZnaFv7HTWbMFElKYB-jSdo4zOEgOsj0R5PRIzzNqoLHEMqr3UMzOBbvdb08lX2g9G0OMDnFcciCR8lDBkjG-ztqq6MyjJsX7OPCSiUhrKCrKGfr_I-LoWJrueOAvf0Cu7uQimbVR4OKutQ"
                  alt="Futuristic Neon City"
                  className="object-cover h-full w-full grayscale"
                />
              </div>
            </div>

            <div className="bg-surface-container rounded-xl p-6 flex flex-col justify-between">
              <p className="text-[0.6875rem] text-on-surface-variant mb-2 font-bold tracking-widest">STORAGE USAGE</p>
              <div className="text-4xl font-black text-on-surface font-headline">1.2<span className="text-xl text-outline">TB</span></div>
              <div className="w-full bg-surface-container-highest h-2 rounded-full mt-4">
                <div className="bg-secondary h-full rounded-full w-3/4"></div>
              </div>
            </div>

            <div className="bg-surface-container rounded-xl p-6 flex flex-col justify-between border-l-4 border-tertiary">
              <p className="text-[0.6875rem] text-on-surface-variant mb-2 font-bold tracking-widest">TEAM ACTIVITY</p>
              <div className="flex -space-x-2">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxLBzLSKkn2i-RSk-s1OlsBl-Y4hBW4i7_Taya5EsY3LNbiUMAKEu8-6JUAh7hnNNwSMjXfnojDfuQtLIqwMTvjbA91k67TJrtT-LALcZD5zNibCYsjAUPXs2rW2bTU12Zj4aOtWFRPdhBHs9TpjlGVvWr-U6ICeuA0DxkPp154wNxsMPd0qnWhO0EaAdTTI4XFmjlMeUnyhyJFTJN2T_HMzU-bY4JCogLGOC64bG0XD1h-2ucckQUzYW9SuuAQ-eFvE--_BXbxw" className="w-8 h-8 rounded-full border-2 border-surface-container object-cover" alt="User 1" />
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDl6hS5ESDpewz-DeI6ZHqeGchPKqKWBya0NAYDt0gcHwUJrcg86_a7PrPnV4IIH-Yr05S4K8leQ43nFpo5q_Wv0d31JytWWb5nSoSIYPLXE-TvuFb4SvGxys67vWKqP-P5qH89Av3ktOfD2RogH0sO5q6lwn5LIdsFpzitlOEfT_5zJr0_w7gq8T5e9t8Pr7lftTPpU0uBwV6ck4XH3azm9HGW_nXX8RUXa9MhiPHLu-ygvD-poTjceSx2V1Cy_3ViC-B0CZyqIQ" className="w-8 h-8 rounded-full border-2 border-surface-container object-cover" alt="User 2" />
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1qqBMTRU23f3_oV8EOqQz8kSj9DTlJOzMvh_8C-oF_fx4Kf-j0bTwrQ-RZK_iGcvIeikFaxCMuIVpwDqlulp_2pNR8MCPDWJbEqyW01Gm2Hnmtkh5KP4TC9Fydy01OKqFH41IvXuft_F1aj_R8WS3m1Ex_ujKQW4D6of4nCukT8uWHqVFaqRDKIHhB5oLeJdDHkr1UojoGDpT5RVBZcp5wLHa8kboEk-IFSljDirFvuDM5uhzXC7D8Fhw-cezw66IJGTEEuOFyw" className="w-8 h-8 rounded-full border-2 border-surface-container object-cover" alt="User 3" />
                <div className="w-8 h-8 rounded-full bg-surface-container-highest border-2 border-surface-container flex items-center justify-center text-[10px] font-bold">+4</div>
              </div>
              <p className="text-xs text-tertiary mt-4">3 tasks need review</p>
            </div>
          </div>

          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold font-headline">Active Projects</h3>
            <div className="flex items-center gap-2">
              <button className="p-1.5 hover:bg-surface-container-highest rounded text-outline transition-colors">
                <span className="material-symbols-outlined">grid_view</span>
              </button>
              <button className="p-1.5 hover:bg-surface-container-highest rounded text-outline transition-colors">
                <span className="material-symbols-outlined">list</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/project/alpha/research" className="block bg-surface-container-low group hover:bg-surface-container rounded-xl overflow-hidden shadow-xl shadow-black/20 hover:-translate-y-1 hover:shadow-primary/20 hover:ring-2 hover:ring-primary/50 transition-all duration-300">
              <div className="relative h-40 overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5Emg3vU7wn4caHdDnoJ3EF-XOLot6qD8HY6bor0kOf8YKjqRT6RrU9ZVqwsXI8VvISkfWfgNj6fOXN2E6cNZOV9zNT2yUBwD9FeL0B3taJJrZnDqsdFH5myx5Y1Sko3rMDBG1Mq4LIWb0tpxFkK3SSt0oS8AXW_LT17peLTmBxrDruIjvS5bYAPuR9waFYwfTZFw0NSHm61gui5alnp4fkugNDzQm4pQicJWDCu7zn6PsF-DCs_aPwzgJflSf_-NR41Bv6t7wHQ"
                  alt="Project Thumbnail"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-tertiary-container text-on-tertiary-container text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest shadow-lg">In Progress</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent opacity-60"></div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-1 relative">
                  <h4 className="font-bold text-on-surface truncate group-hover:text-primary transition-colors">Cyberpunk Short 2024</h4>
                  <span className="material-symbols-outlined text-outline cursor-pointer hover:text-on-surface">more_vert</span>
                </div>
                <p className="text-xs text-on-surface-variant mb-6 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">history</span> Edited 2 hours ago
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2 w-full justify-between items-center relative">
                      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-surface-container-highest -z-10 -translate-y-1/2"></div>
                      <div className="w-3 h-3 rounded-full bg-secondary"></div>
                      <div className="w-3 h-3 rounded-full bg-secondary"></div>
                      <div className="w-3 h-3 rounded-full bg-secondary"></div>
                      <div className="w-3 h-3 rounded-full bg-tertiary animate-pulse"></div>
                      <div className="w-3 h-3 rounded-full bg-outline-variant"></div>
                    </div>
                  </div>
                  <div className="flex justify-between text-[10px] text-outline-variant font-bold uppercase tracking-widest">
                    <span>Research</span>
                    <span>Render</span>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/project/beta/research" className="block bg-surface-container-low group hover:bg-surface-container rounded-xl overflow-hidden shadow-xl shadow-black/20 hover:-translate-y-1 hover:shadow-primary/20 hover:ring-2 hover:ring-primary/50 transition-all duration-300">
              <div className="relative h-40 overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCP-op_UQ0Sm4fuP4hqDyLf8ZAqVfmfbOl4f_WorOPKF67KzSstJfTRxCpdhC-v8-q_0lhFDhXazvwD_So9_5P6BLWf_egAw25SWPrKIi-bssPjUHl1Ac21zWOeUc5P_gx9crzapivp-HVmmSbTZ25yBb2FmdYokD3mY_bDDYnqSPoqvVljNN2A1fTJ_kR9Le8iwJrMbmmM6995FwQDyNOtARYxLCCU_URvV11OnBTJ4gkVJ01ronccf6Fdnop2gZ2AYkA3A0jU8Q"
                  alt="Project Thumbnail"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-secondary-container text-on-secondary-container text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest shadow-lg">Complete</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent opacity-60"></div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-1 relative">
                  <h4 className="font-bold text-on-surface truncate group-hover:text-primary transition-colors">Nature Documentary V2</h4>
                  <span className="material-symbols-outlined text-outline cursor-pointer hover:text-on-surface">more_vert</span>
                </div>
                <p className="text-xs text-on-surface-variant mb-6 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">history</span> Edited Yesterday
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2 w-full justify-between items-center relative">
                      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-secondary -z-10 -translate-y-1/2"></div>
                      <div className="w-3 h-3 rounded-full bg-secondary"></div>
                      <div className="w-3 h-3 rounded-full bg-secondary"></div>
                      <div className="w-3 h-3 rounded-full bg-secondary"></div>
                      <div className="w-3 h-3 rounded-full bg-secondary"></div>
                      <div className="w-3 h-3 rounded-full bg-secondary"></div>
                    </div>
                  </div>
                  <div className="flex justify-between text-[10px] text-outline-variant font-bold uppercase tracking-widest">
                    <span>Research</span>
                    <span>Render</span>
                  </div>
                </div>
              </div>
            </Link>

            <div className="border-2 border-dashed border-outline-variant/30 rounded-xl flex flex-col items-center justify-center p-8 hover:border-primary/50 transition-colors cursor-pointer group h-full min-h-[300px]">
              <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center text-outline group-hover:text-primary group-hover:scale-110 transition-all">
                <span className="material-symbols-outlined">add</span>
              </div>
              <p className="mt-4 font-bold text-outline group-hover:text-on-surface">Start New Project</p>
              <p className="text-[10px] text-outline-variant mt-1 uppercase tracking-widest">Select Template</p>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
