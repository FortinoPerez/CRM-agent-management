
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select"

export function SelectIconExample() {
  const data = [
    {
      value: "living-area",
      label: "BanCoppel",
    },
    {
      value: "shopping-area",
      label: "Didi",
    },
    {
      value: "business-park",
      label: "Monte de Piedad",
    },
  ]

  return (
    <>
      <Select defaultValue="living-area">
        <SelectTrigger className="w-[150px]">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          {data.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              <span className="flex items-center gap-x-2">
                {item.label}
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  )
}