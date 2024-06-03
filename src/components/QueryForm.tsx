"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { PaperAirplaneIcon } from '@heroicons/react/24/outline'

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
import { Textarea } from "~/components/ui/textarea"
import { toast } from "~/components/ui/use-toast"

const FormSchema = z.object({
  query: z.string()
})

export function QueryForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

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
  // flex min-h-[60px] w-full rounded-md border border-input px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 resize-none border-none outline-none ring-0 bg-transparent ring-none focus:ring-none focus:ring-offset-none
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="">
        <FormField
          control={form.control}
          name="query"
          render={({ field }) => (
            <FormItem className="bg-white rounded-t-md rounded-b-none">
              <FormControl>
                <Textarea
                  autoFocus
                  placeholder="Ask about a company's filings&#8230;"
                  className="resize-none focus-visible:outline-none focus-visible:ring-0"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <TooltipProvider>
          <div className="flex flex-wrap gap-x-2 gap-y-1 items-center bg-gray-50 px-4 py-2.5 text-xs text-gray-700 rounded-t-none rounded-b-md">
            <Tooltip>
              <TooltipTrigger>
                <div className="text-muted-foreground flex no-wrap gap-x-1 items-center">
                  <kbd className="pointer-events-none px-1 py-1 h-7 w-7 flex justify-center items-center select-none gap-1 rounded border bg-muted font-mono font-medium text-muted-foreground opacity-100 text-base">
                    &#36;
                  </kbd>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <span>companies</span>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <div className="text-muted-foreground flex no-wrap gap-x-1 items-center">
                  <kbd className="pointer-events-none px-1 py-1 h-7 w-7 flex justify-center items-center select-none gap-1 rounded border bg-muted font-mono font-medium text-muted-foreground opacity-100 text-base">
                    &#64;
                  </kbd>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>documents</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <div className="text-muted-foreground flex no-wrap gap-x-1 items-center">
                  <kbd className="pointer-events-none px-1 py-1 h-7 w-7 flex justify-center items-center select-none gap-1 rounded border bg-muted font-mono font-medium text-muted-foreground opacity-100 text-base">
                    &#47;
                  </kbd>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>suggestions</p>
              </TooltipContent>
            </Tooltip>

            <div className="grow" />
            <Button className="rounded-full px-1 py-1 h-7 w-7 flex justify-center items-center" type="submit">
              <PaperAirplaneIcon className="h-4 w-4" />
            </Button>
          </div>
        </TooltipProvider>
      </form>
    </Form>
  )
}
