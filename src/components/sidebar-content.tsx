// sidebar-content.tsx
import { Moon, Sun } from "lucide-react";
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
} from "@/components/ui/sidebar";

import sidebarData from "@/data/sidebar-data.json";

interface AppSidebarProps {
	isDark: boolean;
	setIsDark: (value: boolean) => void;
}

export function AppSidebar({ isDark, setIsDark }: AppSidebarProps) {
	return (
		<Sidebar className="dark:border-red-primary/60 dark:bg-background dark:text-foreground">
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton className="justify-between" size="lg" asChild>
							<a href="/">
								<div className="flex">
									<div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
										<img src="/memoji.png" alt="memoji" />
									</div>
									<div className="flex flex-col gap-0.5 leading-none">
										<span className="font-semibold">Portfolio</span>
										<span className="text-xs">v2.0.0 (November, 2024)</span>
									</div>
								</div>
								<button
									onClick={(e) => {
										e.preventDefault();
										setIsDark(!isDark);
									}}
									type="button"
								>
									{isDark ? (
										<Sun
											size={20}
											strokeWidth={1}
											className="text-foreground"
										/>
									) : (
										<Moon
											size={20}
											strokeWidth={1}
											className="text-foreground"
										/>
									)}
								</button>
							</a>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarMenu>
						{sidebarData.navMain.map((section) => (
							<SidebarMenuItem key={section.title}>
								<SidebarMenuButton asChild>
									<a href={section.url} className="font-medium">
										{section.title}
									</a>
								</SidebarMenuButton>
								{section.items?.length ? (
									<SidebarMenuSub>
										{section.items.map((item) => (
											<SidebarMenuSubItem key={item.title}>
												<SidebarMenuSubButton asChild isActive={item.isActive}>
													<a href={item.url}>{item.title}</a>
												</SidebarMenuSubButton>
											</SidebarMenuSubItem>
										))}
									</SidebarMenuSub>
								) : null}
							</SidebarMenuItem>
						))}
					</SidebarMenu>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
