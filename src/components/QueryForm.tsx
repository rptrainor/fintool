"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { PaperAirplaneIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

import { Button } from "~/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "~/components/ui/form"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip"
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
} from "~/components/ui/dialog"
import { ScrollArea } from "~/components/ui/scroll-area"
import { Separator } from "~/components/ui/separator"
import { Textarea } from "~/components/ui/textarea"
import { toast } from "~/components/ui/use-toast"
import { Modal } from "~/components/Modal"
import { QUERY_LIST } from "~/constants/queries"

const FormSchema = z.object({
  query: z.string()
})

export function QueryForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  const [isCompanyModalOpen, setIsCompanyModalOpen] = useState(false)
  const [isDocumentModalOpen, setIsDocumentModalOpen] = useState(false)
  const [isQuestionModalOpen, setIsQuestionModalOpen] = useState(false)

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <FormField
          control={form.control}
          name="query"
          render={({ field }) => (
            <FormItem className="bg-white rounded-t-md rounded-b-none">
              <FormControl>
                <Textarea
                  placeholder="Ask about a company's filings&#8230;"
                  className="resize-none focus-visible:outline-none focus-visible:ring-0"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <TooltipProvider>
          <div className="flex flex-wrap gap-x-2 gap-y-1 items-center bg-gray-50 px-3 py-2.5 text-xs text-gray-700 rounded-t-none rounded-b-md">
            <Tooltip>
              <TooltipTrigger onClick={() => setIsCompanyModalOpen(true)}>
                <div className="text-muted-foreground flex no-wrap gap-x-1 items-center hover:scale-110 transition-all duration-200">
                  <kbd className="pointer-events-none px-1 py-1 h-7 w-7 flex justify-center items-center select-none gap-1 rounded border bg-muted font-mono font-medium text-muted-foreground opacity-100 text-base">
                    &#36;
                  </kbd>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <span>Companies</span>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger onClick={() => setIsDocumentModalOpen(true)}>
                <div className="text-muted-foreground flex no-wrap gap-x-1 items-center hover:scale-110 transition-all duration-200">
                  <kbd className="pointer-events-none px-1 py-1 h-7 w-7 flex justify-center items-center select-none gap-1 rounded border bg-muted font-mono font-medium text-muted-foreground opacity-100 text-base">
                    &#64;
                  </kbd>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Documents</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger onClick={() => setIsQuestionModalOpen(true)}>
                <div className="text-muted-foreground flex no-wrap gap-x-1 items-center hover:scale-110 transition-all duration-200">
                  <kbd className="pointer-events-none px-1 py-1 h-7 w-7 flex justify-center items-center select-none gap-1 rounded border bg-muted font-mono font-medium text-muted-foreground opacity-100 text-base">
                    &#47;
                  </kbd>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Suggested Questions</p>
              </TooltipContent>
            </Tooltip>

            <div className="grow" />
            <Button className="px-1 py-1 h-7 w-7 flex justify-center items-center" type="submit">
              <PaperAirplaneIcon className="h-4 w-4" />
            </Button>
          </div>
        </TooltipProvider>
      </form>

      <Modal isOpen={isCompanyModalOpen} onClose={() => setIsCompanyModalOpen(false)}>
        <div className='flex flex-col gap-4 sm:gap-8 md:gap-12 lg:gap-16'>
          <p className="text-sm text-muted-foreground font-medium uppercase">
            Companies
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
              </div>
              <Separator />
            </div>
          ))}

        </ScrollArea>
      </Modal>

      <Modal isOpen={isDocumentModalOpen} onClose={() => setIsDocumentModalOpen(false)}>
        <div className='flex flex-col gap-4 sm:gap-8 md:gap-12 lg:gap-16'>
          <p className="text-sm text-muted-foreground font-medium uppercase">
            Documents
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
              </div>
              <Separator />
            </div>
          ))}

        </ScrollArea>
      </Modal>

      <Modal isOpen={isQuestionModalOpen} onClose={() => setIsQuestionModalOpen(false)}>
        <div className='flex flex-col gap-4 sm:gap-8 md:gap-12 lg:gap-16'>
          <p className="text-sm text-muted-foreground font-medium uppercase">
            Suggested Questions
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
              </div>
              <Separator />
            </div>
          ))}

        </ScrollArea>
      </Modal>
    </Form>
  )
}
