import { Outlet } from 'react-router-dom';

export function AppLayout() {
  return (
    <div>
      {/* AppContainer placeholder */}
      <Outlet />
    </div>
  );
}
