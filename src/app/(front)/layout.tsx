import Navbar from "@/components/frontend/Navbar";
import React, { ReactNode } from "react";

function FrontLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full flex-col">
      <Navbar />

      <div className="">{children}</div>
    </div>
  );
}
export default FrontLayout;
