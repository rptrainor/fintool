import {
  Alert,
  AlertTitle,
} from "~/components/ui/alert"

export function QueryCounter() {
  return (
    <Alert variant="default" className="h-8 w-fit py-2 px-4 rounded-md bg-primary text-primary-foreground border-none">
      <AlertTitle>One free question left</AlertTitle>
    </Alert>
  )
}
