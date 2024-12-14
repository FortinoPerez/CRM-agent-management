import React from 'react';
import { Text } from "@tremor/react";
import { Divider } from "@/components/ui/divider";
import { SelectIconExample } from "@/components/selectCamp";
import { SelectSearchInput } from "@/components/selectSearchItem";
import { InputSearchCredit } from "@/components/inputSearch";
import { ButtonHero } from "@/components/buttonSearch";

const DividerHero = () => <Divider />;

const MainInformationPage = () => {
  return (
    <div>
      {/* Main content */}
      <div className="flex-1 p-2 text-white">
        <Text className="text-3xl font-bold mb-2">
          Búsqueda avanzada de clientes
        </Text>
        <Text className="text-gray-400 mb-2">
          Consulta toda la información disponible de gestión del cliente.
        </Text>
        <div className="mt-1">
          <DividerHero />
        </div>
      </div>
    </div>
  );
};

export default MainInformationPage;