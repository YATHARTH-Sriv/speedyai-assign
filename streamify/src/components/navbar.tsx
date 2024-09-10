
import React from "react";
import {  MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = React.useState<string | null>(null);

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-30 flex justify-between items-center p-4", className)}>
      {/* Desktop Navbar */}
      <div className="hidden text-white bg-black sm:flex space-x-4 text-sm">
        <a href="#home"><MenuItem setActive={setActive} active={active} item="Home" /></a>
        <a href="#metrics"><MenuItem setActive={setActive} active={active} item="Metrics" /></a>
        <a href="#data"><MenuItem setActive={setActive} active={active} item="Data" /></a>
        <a href="#Table"><MenuItem setActive={setActive} active={active} item="Table" /></a>
      </div>
      
      {/* Mobile Navbar */}
      <div className="sm:hidden  text-white bg-black flex items-center space-x-4 text-sm">
        <a href="#metrics" className="p-2 text-xs">Metrics</a>
        <a href="#data" className="p-2 text-xs">Data</a>
        <a href="#Table" className="p-2 text-xs">Table</a>
      </div>
    </div>
  );
}

export default Navbar;