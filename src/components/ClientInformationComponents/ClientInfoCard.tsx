// components/ClientInfoCard.tsx
import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/Badge";
import { Divider } from "@/components/ui/divider";
import { Label } from "@/components/ui/label";

interface ClientInfoProps {
  creditNumber: string;
  clientName: string;
  folio: string;
  balances: {
    overdue: string;
    current: string;
    withInterest: string;
    withIVA: string;
  };
  interests: {
    overdueInterest: string;
    interest: string;
    totalToPay: string;
    cutoffDate: string;
  };
  status: {
    overdueMonths: number;
    overduePayments: number;
    moratoryMonths: number;
    yearAssigned: number;
  };
}

export const ClientInfoCard: React.FC<ClientInfoProps> = ({
  creditNumber,
  clientName,
  folio,
  balances,
  interests,
  status,
}) => {
  return (
    <Card className="max-w-auto mx-auto bg-gray-800 text-white p-2">
      <div className="grid grid-cols-3 gap-4">
        {/* Sección 1 */}
        <div>
          <div className="flex items-center justify-between gap-2 rounded-md bg-blue-50 py-1 px-2 text-sm dark:bg-blue-900/50">
            <span className="text-blue-800 dark:text-blue-400">
              Número de crédito:
            </span>
          </div>
          <div>
            <Label>{creditNumber}</Label>
          </div>
          <Divider className="my-1" />
          <div className="space-y-1">
            <div className="flex justify-between">
              <Label>Saldo vencido</Label>
              <Badge variant="error">{balances.overdue}</Badge>
            </div>
            <div className="flex justify-between">
              <Label>Saldo actual</Label>
              <Badge variant="success">{balances.current}</Badge>
            </div>
            <div className="flex justify-between">
              <Label>Saldo con intereses</Label>
              <Badge variant="error">{balances.withInterest}</Badge>
            </div>
            <div className="flex justify-between">
              <Label>Saldo con IVA</Label>
              <Badge variant="error">{balances.withIVA}</Badge>
            </div>
          </div>
        </div>

        {/* Sección 2 */}
        <div>
          <div className="flex items-center justify-between gap-2 rounded-md bg-blue-50 py-1 px-2 text-sm dark:bg-blue-900/50">
            <span className="text-blue-800 dark:text-blue-400">
              Nombre del cliente:
            </span>
          </div>
          <div>
            <Label>{clientName}</Label>
          </div>
          <Divider className="my-1" />
          <div className="space-y-1">
            <div className="flex justify-between">
              <Label>Intereses moratorios</Label>
              <Badge variant="error">{interests.overdueInterest}</Badge>
            </div>
            <div className="flex justify-between">
              <Label>Intereses</Label>
              <Badge variant="error">{interests.interest}</Badge>
            </div>
            <div className="flex justify-between">
              <Label>Saldo para liquidar</Label>
              <Badge variant="error">{interests.totalToPay}</Badge>
            </div>
            <div className="flex justify-between">
              <Label>Fecha de corte</Label>
              <Badge color="blue">{interests.cutoffDate}</Badge>
            </div>
          </div>
        </div>

        {/* Sección 3 */}
        <div>
          <div className="flex items-center justify-between gap-2 rounded-md bg-blue-50 py-1 px-2 text-sm dark:bg-blue-900/50">
            <span className="text-blue-800 dark:text-blue-400">
              Folio:
            </span>
          </div>
          <div>
            <Label>{folio}</Label>
          </div>

          <Divider className="my-1" />
          <div className="space-y-1">
            <div className="flex justify-between">
              <Label>Meses vencidos</Label>
              <Badge color="blue">{status.overdueMonths}</Badge>
            </div>
            <div className="flex justify-between">
              <Label>Pagos vencidos</Label>
              <Badge color="blue">{status.overduePayments}</Badge>
            </div>
            <div className="flex justify-between">
              <Label>Meses moratorios</Label>
              <Badge color="blue">{status.moratoryMonths}</Badge>
            </div>
            <div className="flex justify-between">
              <Label>Año de asignación</Label>
              <Badge color="blue">{status.yearAssigned}</Badge>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
