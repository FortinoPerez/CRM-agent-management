import React from "react";
import { Text } from "@tremor/react";
import { Divider } from "@/components/ui/divider";
import { SelectIconExample } from "@/components/selectCamp";
import { SelectSearchInput } from "@/components/selectSearchItem";
import PageCardClient from "@/components/ClientInformationComponents/DataClientCard";
import { InputSearchCredit } from "@/components/inputSearch";
import { TabNavigationInfo } from "@/components/ClientInformationComponents/TabNavInformation";
import CustomerInformation from "@/components/ClientInformationComponents/CustomerLabelInfo";


const MainInformationPage = () => {
  return (
    <div>
      {/* Main content */}
      <div className="flex-1 p-2 text-white -mt-10">
        {" "}
        {/* Margen negativo para subir el contenido */}
        <Text className="text-3xl font-bold">
          Búsqueda avanzada de clientes
        </Text>
        <Text className="text-gray-400">
          Consulta toda la información disponible de gestión del cliente.
        </Text>
        <div className="mt-1">
          {" "}
          {/* Espacio mínimo antes del divider */}
          <Divider className="my-1" />
        </div>
        <div className="flex justify-start items-center w-full gap-4">
          <div>
            <SelectIconExample />
          </div>
          <div>
            <SelectSearchInput />
          </div>
          <div className="w-1/2">
            <InputSearchCredit />
          </div>
        </div>
        {/* Informacion del cliente Card */}
        <div className="mt-2">
          <PageCardClient />
        </div>
        <div className="mt-2">
          <TabNavigationInfo />
        </div>
        <div>
          <CustomerInformation />
        </div>
      </div>
    </div>
  );
};

export default MainInformationPage;
