'use client'

import * as React from "react"

import { Card } from "~/components/ui/card"
import {
  Carousel,
  CarouselContent,
} from "~/components/ui/carousel"
import { Button } from "~/components/ui/button"

export function SuggestedQueries() {

  return (
    <Carousel
      className="w-full sm:max-w-2xl bg-transparent"
    >
      <div className="font-medium text-white/80">Conversation Starters</div>
      <CarouselContent className="-ml-1 flex flex-col gap-2 sm:px-3 sm:flex-row">
        {SUGGESTIONS.map((suggestion) => (
          <Button variant="ghost" key={suggestion.text} className="sm:pl-1 sm:py-2 pt-2 w-full basis-1/3 bg-transparent block whitespace-pre-wrap text-left h-auto rounded-md hover:bg-transparent">
            <Card className="flex h-full border-none px-2 py-1 bg-secondary/10 hover:bg-primary-foreground/20 rounded-md cursor-pointer">
              <p className="text-base text-ellipsis text-truncate text-white font-medium">{suggestion.text}</p>
            </Card>
          </Button>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

const SUGGESTIONS = [
  {
    text: "$TSLA - How has net income changed over the past four quarters?"
  },
  {
    text: "$WFC - Market share growth strategy for Wells in IB?"
  },
  {
    text: "/aapl vision pro"
  }
]