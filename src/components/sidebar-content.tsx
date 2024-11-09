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
		<Sidebar className="border-red-primary/60 w-[300px] bg-background dark:bg-background dark:text-foreground transition-all duration-300 ease-in-out">
			<SidebarHeader className="bg-background">
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton className="justify-between" size="lg" asChild>
							<a href="/">
								<div className="flex">
									<div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
										<img src="/memoji.png" alt="memoji" />
									</div>
									<div className="flex flex-col gap-0.5 leading-none ml-1">
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
			<SidebarContent className="bg-background">
				<SidebarGroup>
					<SidebarMenu>
						{sidebarData.navMain.map((section) => (
							<SidebarMenuItem key={section.title}>
								<SidebarMenuButton asChild>
									<a
										href={section.url}
										className="font-medium hover:text-red-primary transition-colors ease-in-out duration-100"
									>
										{section.title}
									</a>
								</SidebarMenuButton>
								{section.items?.length ? (
									<SidebarMenuSub>
										{section.items.map((item) => (
											<SidebarMenuSubItem key={item.title}>
												<SidebarMenuSubButton asChild isActive={item.isActive}>
													<a
														href={item.url}
														className="hover:text-red-primary transition-colors ease-in-out duration-100"
													>
														{item.title}
													</a>
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