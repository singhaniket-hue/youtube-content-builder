import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import DashboardEmpty from './pages/DashboardEmpty';
import DashboardProjects from './pages/DashboardProjects';
import Settings from './pages/Settings';
import ResearchStage from './pages/ResearchStage';
import ResearchStageProcessing from './pages/ResearchStageProcessing';
import ResearchStageProcessed from './pages/ResearchStageProcessed';
import ScriptStage from './pages/ScriptStage';
import ScriptEditorManual from './pages/ScriptEditorManual';
import ScriptEditorFinal from './pages/ScriptEditorFinal';
import VisualsStage from './pages/VisualsStage';
import TimelineEditor from './pages/TimelineEditor';
import RenderStage from './pages/RenderStage';
import RenderStageProcessing from './pages/RenderStageProcessing';
import RenderStageComplete from './pages/RenderStageComplete';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />

          <Route path="/dashboard" element={<DashboardProjects />} />
          <Route path="/dashboard/empty" element={<DashboardEmpty />} />

          <Route path="/settings" element={<Settings />} />

          <Route path="/project/:id/research" element={<ResearchStage />} />
          <Route path="/project/:id/research/processing" element={<ResearchStageProcessing />} />
          <Route path="/project/:id/research/processed" element={<ResearchStageProcessed />} />

          <Route path="/project/:id/script" element={<ScriptStage />} />
          <Route path="/project/:id/script/manual" element={<ScriptEditorManual />} />
          <Route path="/project/:id/script/final" element={<ScriptEditorFinal />} />

          <Route path="/project/:id/visuals" element={<VisualsStage />} />

          <Route path="/project/:id/timeline" element={<TimelineEditor />} />

          <Route path="/project/:id/render" element={<RenderStage />} />
          <Route path="/project/:id/render/processing" element={<RenderStageProcessing />} />
          <Route path="/project/:id/render/complete" element={<RenderStageComplete />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
