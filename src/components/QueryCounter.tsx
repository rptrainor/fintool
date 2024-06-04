import {
  Alert,
  AlertTitle,
} from "~/components/ui/alert"

export function QueryCounter() {
  return (
    <Alert variant="default" className="flex items-end h-9 w-fit py-2 px-4 rounded-md bg-primary text-primary-foreground border-none cursor-default">
      <AlertTitle>One free question left</AlertTitle>
    </Alert>
  )
}
