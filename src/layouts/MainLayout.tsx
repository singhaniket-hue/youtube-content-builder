import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div className="flex h-screen overflow-hidden bg-surface text-on-surface">
      <Outlet />
    </div>
  );
}
