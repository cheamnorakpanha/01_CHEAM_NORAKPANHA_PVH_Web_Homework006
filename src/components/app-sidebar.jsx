"use client";

import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import {
  Package,
  LayoutDashboard,
  User,
  BookOpenIcon,
  Settings,
} from "lucide-react";

// This is sample data.
const data = {
  user: {
    name: "",
    email: "",
    avatar: "",
  },
  teams: [
    {
      name: "HRD SHOP",
      logo: <Package />,
      plan: "ADMIN V2.0",
    },
  ],
  navMain: [
    {
      title: "Products",
      url: "/products",
      icon: <LayoutDashboard />,
    },
    {
      title: "Customers",
      url: "#",
      icon: <User />,
    },
    {
      title: "Categories",
      url: "#",
      icon: <BookOpenIcon />,
    },
    {
      title: "Settings",
      url: "#",
      icon: <Settings />,
    },
  ],
};

export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
