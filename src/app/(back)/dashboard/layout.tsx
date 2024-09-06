import Navbar from "@/components/frontend/Navbar";
import React, { ReactNode } from "react";

function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full flex-col">
      <h2>Dashboard Layout</h2>

      {children}
    </div>
  );
}
export default DashboardLayout;
