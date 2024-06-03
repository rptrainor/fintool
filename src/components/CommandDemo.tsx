'use client'

import { BuildingOffice2Icon, DocumentTextIcon, BoltIcon } from '@heroicons/react/24/outline'

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "~/components/ui/command"

export function CommandDemo() {
  return (
    <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Ask about a company's filings&#8230;" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Shortcuts">
          <CommandItem className="flex items-center gap-2">
            <BuildingOffice2Icon className="h-4 w-4" />
            <span className="grow">Companies</span>
            <p className="text-muted-foreground">
              Press{" "}
              <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                &#36;
              </kbd>
            </p>
          </CommandItem>
          <CommandItem className="flex items-center gap-2">
            <DocumentTextIcon className="h-4 w-4" />
            <span className="grow">Documents</span>
            <p className="text-muted-foreground">
              Press{" "}
              <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                &#64;
              </kbd>
            </p>
          </CommandItem>
          <CommandItem className="flex items-center gap-2">
            <BoltIcon className="h-4 w-4" />
            <span className="grow">Suggestions</span>
            <p className="text-muted-foreground">
              Press{" "}
              <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                &#47;
              </kbd>
            </p>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
