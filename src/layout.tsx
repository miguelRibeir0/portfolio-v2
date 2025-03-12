import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { AppSidebar } from './components/sidebar-content';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from './components/ui/sidebar';
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
        <div className="fixed bg-foreground/5 rounded-full p-1 top-6 left-6 z-50 md:hidden">
          <SidebarTrigger />
        </div>
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
}

export default Layout;
