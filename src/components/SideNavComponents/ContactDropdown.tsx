import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select"

export function DropdownContact() {
  const data = [
    {
      value: "phone-call-gestion",
      label: "Llamada telefónica",
    },
    {
      value: "email-gestion",
      label: "Correo electrónico",
    },
    {
      value: "whatsapp-gestion",
      label: "WhatsApp",
    },
    {
      value: "sms-gestion",
      label: "SMS",
    },
    {
      value: "blast-gestion",
      label: "Blaster",
    },
  ]

  return (
    <>
      <Label htmlFor="size">Medio de contacto</Label>
      <Select>
        <SelectTrigger id="size" className="mt-2">
          <SelectValue placeholder="Opciones" />
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