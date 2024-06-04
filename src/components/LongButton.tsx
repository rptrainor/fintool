import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'

import {
  AlertTitle,
} from "~/components/ui/alert"
import { Button } from "~/components/ui/button"

export function LongButton() {
  return (
    <Button variant="secondary" className="flex items-center h-9 w-fit py-2 px-4 gap-2">
      <ChatBubbleLeftRightIcon className="h-4 w-4" />
      <AlertTitle className='mb-0'>Heads up!</AlertTitle>
    </Button>
  )
}
