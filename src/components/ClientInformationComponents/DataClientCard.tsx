import React from "react";
import { ClientInfoCard } from "@/components/ClientInformationComponents/ClientInfoCard";

const PageCardClient = () => {
  const clientData = {
    creditNumber: "12934843093",
    clientName: "LILIA CASTRILLO SANTOS",
    folio: "A000320698",
    balances: {
      overdue: "$0",
      current: "$0.52",
      withInterest: "$0",
      withIVA: "$0",
    },
    interests: {
      overdueInterest: "$0",
      interest: "$0",
      totalToPay: "$0",
      cutoffDate: "11/12/2024",
    },
    status: {
      overdueMonths: 0,
      overduePayments: 0,
      moratoryMonths: 0,
      yearAssigned: 2024,
    },
  };

  return (
    <div>
      <ClientInfoCard {...clientData} />
    </div>
  );
};

export default PageCardClient;
