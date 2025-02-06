import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { AppSidebar } from './components/sidebar-content';
import { SidebarInset, SidebarProvider } from './components/ui/sidebar';
import { useDarkMode } from './hooks/useDarkMode';

function Layout() {
  const [isDark, setIsDark] = useDarkMode();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar isDark={isDark} setIsDark={setIsDark} />
      <SidebarInset>
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
}

export default Layout;
