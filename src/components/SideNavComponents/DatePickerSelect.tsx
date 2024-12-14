"use client"

import React from "react"
import { DatePicker } from "@/components/ui/DatePicker"

export const DatePickerYearNavigation = () => {
  const [date, setDate] = React.useState<Date | undefined>(undefined)
  return (
    <div className="flex flex-col gap-y-4">
      <DatePicker
        enableYearNavigation
        value={date}
        onChange={setDate}
        className="w-full"
      />
    </div>
  )
}