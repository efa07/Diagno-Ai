"use client"
import * as React from "react"
import { SearchForm } from "@/components/search-form"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import {
  LayoutDashboard,
  Users,
  Calendar,
  FlaskConical,
  Brain,
  FileText,
  Settings,
  User,
} from "lucide-react"

// Role-based nav data with icons
const sidebarData = {
  doctor: {
    main: [
      { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
      { title: "Patients", url: "/dashboard/doctor/patients", icon: Users },
      { title: "Appointments", url: "/dashboard/doctor/appointments", icon: Calendar },
      { title: "Lab Results", url: "/dashboard/doctor/lab-results", icon: FlaskConical },
      { title: "AI Recommendations", url: "/dashboard/doctor/chat", icon: Brain },
      { title: "Prescriptions", url: "/dashboard/doctor/prescriptions", icon: FileText },
    ],
    bottom: [{ title: "Settings", url: "/settings", icon: Settings }],
  },
  patient: {
    main: [
      { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
      { title: "Appointments", url: "/dashboard/patient/appointment", icon: Calendar },
      { title: "Prescriptions", url: "/dashboard/patient/prescriptions", icon: FileText },
      { title: "AI Recommendations", url: "/dashboard/patient/chat", icon: Brain },
    ],
    bottom: [{ title: "Profile", url: "/settings", icon: User }],
  },
}

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  role: "doctor" | "patient"
}

export function AppSidebar({ role, ...props }: AppSidebarProps) {
  const { main, bottom } = sidebarData[role]

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <h2 className="m-4 text-2xl font-extrabold">DiagnoAI</h2>
        <SearchForm />
      </SidebarHeader>

      <SidebarContent className="flex flex-col h-full">
        {/* Main section */}
        <div>
          <SidebarGroup>
            <SidebarGroupLabel>Main</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {main.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a
                        href={item.url}
                        className="flex items-center gap-2 font-semibold"
                      >
                        <item.icon className="h-5 w-5" />
                        {item.title}
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </div>

        {/* Bottom section */}
        <div className="mt-auto">
          <SidebarGroup>
            <SidebarGroupLabel>
              {role === "doctor" ? "Settings" : "Profile"}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {bottom.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a
                        href={item.url}
                        className="flex items-center gap-2 font-semibold"
                      >
                        <item.icon className="h-5 w-5" />
                        {item.title}
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </div>
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  )
}
