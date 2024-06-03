"use client"
import { Bars3BottomLeftIcon } from '@heroicons/react/24/outline'

import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet"

export function SideSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size='icon' className="ml-4 mt-4 bg-white/20">
          <Bars3BottomLeftIcon className="h-6 w-6 text-white" />
        </Button>
      </SheetTrigger>
      <SheetContent side='left'>
        
      </SheetContent>
    </Sheet>
  )
}
