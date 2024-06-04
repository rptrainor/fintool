import * as React from "react"
import {
  Dialog,
  DialogContent
} from "~/components/ui/dialog"

export function Modal({ children, isOpen, onClose }: { children: React.ReactNode, isOpen: boolean, onClose: () => void }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose} modal>
      <DialogContent className="sm:max-w-md max-w-[calc(100vw-2rem)] h-2/3 m mx-auto rounded-md">
        {children}
      </DialogContent>
    </Dialog>
  )
}
