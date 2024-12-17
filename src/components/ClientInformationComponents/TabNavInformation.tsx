"use client"

import {
  RiBankCard2Line,
  RiCustomerService2Fill,
  RiExchange2Line,
  RiFileTextLine,
  RiHome2Line,
  RiIdCardLine,
} from "@remixicon/react"

import { TabNavigation, TabNavigationLink } from "@/components/ui/TabNavigation"

export const TabNavigationInfo = () => (
  <TabNavigation>
    <TabNavigationLink href="#" active className="inline-flex gap-2">
      <RiIdCardLine className="size-4" aria-hidden="true" />
      Información Principal
    </TabNavigationLink>
    <TabNavigationLink href="#" className="inline-flex gap-2">
      <RiFileTextLine className="-ml-1 size-4" aria-hidden="true" />
      Bitácora 
    </TabNavigationLink>
    <TabNavigationLink href="#" className="inline-flex gap-2">
      <RiBankCard2Line className="-ml-1 size-4" aria-hidden="true" />
      Pagos
    </TabNavigationLink>
  </TabNavigation>
)