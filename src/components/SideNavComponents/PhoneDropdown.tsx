import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select"

export function DropdownPhone() {
  const data = [
    {
      value: "phone-contact-one",
      label: "4434534723",
    },
    {
      value: "phone-contact-two",
      label: "4434534724",
    },
    {
      value: "phone-contact-three",
      label: "4434534725",
    },
  ]

  return (
    <>
      <Label htmlFor="size">Número de teléfono contactado</Label>
      <Select>
        <SelectTrigger id="size" className="mt-2">
          <SelectValue placeholder="Opcines" />
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