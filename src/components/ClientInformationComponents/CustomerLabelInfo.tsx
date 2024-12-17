"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const CustomerInformation = () => {
  return (
    <div>
      {/* Primera Fila */}
      <div className="grid grid-cols-4 gap-2">
        <div className="col-span-2">
          <Label htmlFor="nombre">Nombre completo</Label>
          <Input id="nombre" placeholder="LILIA CASTRILLO SANTOS" disabled />
        </div>
        <div className="col-span-1">
          <Label htmlFor="saldo-vencido">Saldo vencido</Label>
          <Input id="saldo-vencido" placeholder="$0" disabled />
        </div>
        <div className="col-span-1">
          <Label htmlFor="saldo-actual">Saldo actual</Label>
          <Input id="saldo-actual" placeholder="$0.52" disabled />
        </div>
      </div>

      {/* Segunda Fila */}
      <div className="grid grid-cols-4 gap-2">
        <div>
          <Label htmlFor="numero-cliente">Número de cliente</Label>
          <Input id="numero-cliente" placeholder="13976539" disabled />
        </div>
        <div>
          <Label htmlFor="edad">Edad</Label>
          <Input id="edad" placeholder="39" disabled />
        </div>
        <div>
          <Label htmlFor="saldo-vencimiento">Saldo con intereses</Label>
          <Input id="saldo-intereses" placeholder="$0" disabled />
        </div>
        <div>
          <Label htmlFor="saldo-iva">Saldo con IVA</Label>
          <Input id="saldo-iva" placeholder="$0" disabled />
        </div>

        {/* Tercera Fila */}
        <div>
          <Label htmlFor="saldo-liquidacion">Saldo total de liquidación</Label>
          <Input id="saldo-liquidacion" placeholder="$0" disabled />
        </div>
        <div>
          <Label htmlFor="saldo-condonacion">Saldo a pagar condonación</Label>
          <Input id="saldo-condonacion" placeholder="$0" disabled />
        </div>
        <div>
          <Label htmlFor="saldo-iva">Intereses moratorios</Label>
          <Input id="int-mora" placeholder="$0" disabled />
        </div>
        <div>
          <Label htmlFor="intereses">Intereses</Label>
          <Input id="intereses" placeholder="$0" disabled />
        </div>

        {/* Cuarta Fila */}
        <div>
          <Label htmlFor="mora-inicio">Mora inicio</Label>
          <Input id="mora-inicio" placeholder="5" disabled />
        </div>
        <div>
          <Label htmlFor="mora-actual">Mora actual</Label>
          <Input id="mora-actual" placeholder="5" disabled />
        </div>
        <div>
          <Label htmlFor="saldo-liquidar">Saldo para liquidar</Label>
          <Input id="saldo-liquidar" placeholder="$0" disabled />
        </div>
        <div>
          <Label htmlFor="producto">Producto</Label>
          <Input id="producto" placeholder="$6800" disabled />
        </div>

        {/* Quinta Fila */}
        <div>
          <Label htmlFor="ultimo-mov">Último movimiento</Label>
          <Input id="ultimo-mov" placeholder="00/00/0000" disabled />
        </div>
        <div>
          <Label htmlFor="fecha-corte">Fecha de corte</Label>
          <Input id="fecha-corte" placeholder="11/12/2024" disabled />
        </div>
        <div>
          <Label htmlFor="mes-venecidos">Meses vencidos</Label>
          <Input id="meses-vencidos" placeholder="$0" disabled />
        </div>
        <div>
          <Label htmlFor="pago-vencido">Pagos vencidos</Label>
          <Input id="pagos-vencidos" placeholder="$0" disabled />
        </div>

        {/* Sexta Fila */}
        <div>
          <Label htmlFor="tipo-producto">Tipo de producto</Label>
          <Input id="tipo-producto" placeholder="PRESTAMO DIGITAL" disabled />
        </div>
        <div>
          <Label htmlFor="estatus">Estatus</Label>
          <Input id="estatus" placeholder="Activo" disabled />
        </div>
        <div>
          <Label htmlFor="campana">Campaña</Label>
          <Input id="campana" placeholder="Campaña 2-8" disabled />
        </div>
        <div>
          <Label htmlFor="rfc">RFC</Label>
          <Input id="rfc" placeholder="CASL850319BP6" disabled />
        </div>

        {/* Septima Fila */}
        <div>
          <Label htmlFor="direccion">Dirección</Label>
          <Input id="direccion" placeholder="-" disabled />
        </div>
        <div>
          <Label htmlFor="codigo-postal">Código postal</Label>
          <Input id="codigo-postal" placeholder="58962" disabled />
        </div>

        {/* Tercera Columna */}
      </div>
    </div>
  );
};

export default CustomerInformation;
