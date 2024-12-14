import { RiInfoCardLine, RiMailAiLine, RiPhoneLine, RiUser2Line } from "@remixicon/react"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/Select"

export function SelectSearchInput() {
  const data = [
    {
      value: "credit-item",
      label: "Número de Cliente",
      icon: RiUser2Line,
    },
    {
      value: "client-item",
      label: "Nombre del Cliente",
      icon: RiInfoCardLine,
    },
    {
      value: "phone-item",
      label: "Número de Teléfono",
      icon: RiPhoneLine,
    },
    {
      value: "email-item",
      label: "Correo Electrónico",
      icon: RiMailAiLine, 
    },
  ]

  return (
    <>
      <Select defaultValue="credit-item">
        <SelectTrigger className="mx-auto w-[200px]">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          {data.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              <span className="flex items-center gap-x-2">
                <item.icon
                  className="size-4 shrink-0 text-gray-500 dark:text-gray-500"
                  aria-hidden="true"
                />
                {item.label}
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  )
}