import SideNavGestionCliente from "@/components/SideNavComponents/SideNavGestionCliente";
import { Children } from "react";

const GestionClientePage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <div className="w-3/4 p-4"> {children}</div>
      <div className="w-1/4 p-4">
        <SideNavGestionCliente />
      </div>
    </div>
  );
};

export default GestionClientePage;
