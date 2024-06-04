"use client"

import * as React from "react"
import Image from 'next/image'

import { Bars3BottomLeftIcon, TrashIcon } from '@heroicons/react/24/outline'
import Logo from '../../public/logo.webp'
import { Button } from "~/components/ui/button"
import { ScrollArea } from "~/components/ui/scroll-area"
import { Separator } from "~/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "~/components/ui/sheet"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/components/ui/avatar"
import { QUERY_LIST } from "~/constants/queries"

export function SideSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size='icon' variant="secondary" className="bg-secondary/10 hover:bg-primary-foreground/20 transition-opacity">
          <Bars3BottomLeftIcon className="h-6 w-6 text-white" />
        </Button>
      </SheetTrigger>
      <SheetContent side='left' className='flex flex-col gap-y-4 bg-primary-foreground'>
        <div className='flex flex-col gap-4 sm:gap-8 md:gap-12 lg:gap-16'>
          <Image
            className="h-8 w-8 rounded-md object-cover"
            src={Logo}
            alt="Logo"
            width={40}
            height={40}
            placeholder='blur'
          />
          <p className="text-sm text-muted-foreground font-medium uppercase">
            History
          </p>
        </div>
        <ScrollArea className="h-full w-full rounded-md border">

          {QUERY_LIST.map((query) => (
            <div key={query.title} className="group hover:bg-accent cursor-pointer">
              <div className="p-4 grid grid-cols-10">
                <div className="text-ellipsis truncate text-sm text-gray-900 sm:col-span-9 col-span-8">
                  {query.title}
                  <div className="text-xs text-muted-foreground">{query.description}</div>
                </div>
                <div className="flex items-center justify-center text-sm text-muted-foreground sm:col-span-1 col-span-2">
                  <TrashIcon className="h-4 w-4 text-transparent group-hover:text-gray-900" />
                </div>
              </div>
              <Separator />
            </div>
          ))}

        </ScrollArea>
        <SheetFooter>
          <div className="flex items-center justify-start w-full gap-2">
            <Avatar>
              <AvatarImage src="https://avatars.githubusercontent.com/u/1024025" alt="Arthur Dent" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
            <p className="font-bold text-muted-foreground text-sm">arthur@apdent.com</p>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
