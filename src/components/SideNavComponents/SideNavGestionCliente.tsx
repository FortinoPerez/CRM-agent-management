"use client";

import React from "react";
import { TextareaHero } from "@/components/SideNavComponents/TextareaActive";
import { CheckboxCall } from "./CheckboxText";
import { DropdownContact } from "./ContactDropdown";
import { DropdownPhone } from "./PhoneDropdown";
import { RadioGroupReport } from "./ReportRadiogroup";
import { DatePickerYearNavigation } from "./DatePickerSelect";
import TimePicker from "@/components/ui/TimePicker";
import { SelectSubdictum } from "./DropdownSubdictum";
import { Button } from "@/components/ui/button";

const SideNavGestionCliente = () => {
  return (
    <div className="fixed right-0 top-0 h-full w-64 bg-gray-900 text-white p-4">
      <div className="flex flex-col space-y-4">
        {/* Título */}
        <h2 className="text-xl font-semibold">Gestión del cliente</h2>

          {/* Campo para comentarios */}
          <TextareaHero />

          {/* Micrófono */}
       
          {/* Llamada telefónica */}
          <CheckboxCall />

        <div>
          <div className="mb-2">
          {/* Medio de contacto */}
          <DropdownContact />

          {/* Número de teléfono contactado */}
          <DropdownPhone />
          </div>

          <div className = "mb-2">
          {/* Dictamen */}
          <RadioGroupReport />
          </div>

          <div className = "mb-2">
          {/* Subdictamen */}
          <SelectSubdictum />
          </div>
        
          {/* Recordatorio de llamada */}
          <legend className="text-sm font-medium text-gray-900 dark:text-gray-50 mb-1">
            Recordatorio de llamada al cliente
          </legend>
          <DatePickerYearNavigation />
          <TimePicker />

        </div>

        {/* Botones */}
        <div className="flex justify-center">
          <Button variant="primary">Guardar Gestión</Button>
        </div>
      </div>
    </div>
  );
};

export default SideNavGestionCliente;
