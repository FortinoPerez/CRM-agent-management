import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select"

export function SelectSubdictum() {
  const data = [
    {
      value: "aclartion-label",
      label: "Aclaración",
    },
    {
      value: "undefied-label",
      label: "Cliente no define",
    },
    {
      value: "active-account-label",
      label: "Cuenta corriente",
    },
    {
      value: "account-closed-label",
      label: "Cuenta liquidada",
    },
    {
      value: "death-label",
      label: "Defunción",
    },
    {
        value: "family-message-label",
        label: "Mensaje con familiar",
    },
    {
        value: "third-message-label",
        label: "Mensaje con tercero",
    },
    {
        value: "negative-payment-label",
        label: "Negativa de pago",
    },
    {
        value: "payment-made-label",
        label: "Pago efectuado",
    },
    {
        value: "partial-payment-label",
        label: "Pago parcial",
    },
    {
        value: "promise-payment-label",
        label: "Promesa de pago",
    },
    {
        value: "promise-payment-fulfilled-label",
        label: "Seguimiento por la App",
    },
  ]

  return (
    <>
      <Label htmlFor="size">Subdictamen</Label>
      <Select>
        <SelectTrigger id="size" className="mt-0">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          {data.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  )
}