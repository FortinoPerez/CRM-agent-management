import { Text } from "@tremor/react";
import { Divider } from "@/components/ui/divider";
import { SelectIconExample } from "@/components/selectCamp";
import { SelectSearchInput } from "@/components/selectSearchItem";
import { InputSearchCredit } from "@/components/inputSearch";
import { ButtonHero } from "@/components/buttonSearch";

const DividerHero = () => <Divider />;

export default function BusquedaAvanzada() {
  return (
    <div>
      {/* Main content */}
      <div className="flex-1 p-10 text-white">
        <Text className="text-3xl font-bold mb-4">
          Búsqueda avanzada de clientes
        </Text>
        <Text className="text-gray-400 mb-6">
          Consulta toda la información disponible de gestión del cliente.
        </Text>
        <DividerHero />

        <Text className="text-white mb-6">
          Introduce el número de crédito, nombre, teléfono o correo electrónico
          para realizar la búsqueda.
        </Text>

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
  <div>
    <ButtonHero />
  </div>
</div>

        <div className="flex justify-center items-center mt-20">
          <img
            src="/search_image.png" // Reemplaza con tu imagen real
            alt="Búsqueda de clientes"
            className="w-auto h-48"
          />
        </div>

        <Text className="text-center text-gray-400 mt-6">
          Inicia la búsqueda de un cliente, aquí aparecerá toda su información
        </Text>
      </div>
    </div>
  );
}
