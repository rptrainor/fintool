'use client'

import * as React from "react"

import { Card } from "~/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "~/components/ui/carousel"

export function SuggestedQueries() {

  return (
    <Carousel
      className="w-full sm:max-w-2xl bg-transparent"
    >
      <div className="font-medium mb-1 text-white/40">Conversation Starters</div>
      <CarouselContent className="-ml-1 flex flex-col gap-2 sm:flex-row">
        {SUGGESTIONS.map((suggestion) => (
          <CarouselItem key={suggestion.text} className="pl-1 basis-1/3 bg-transparent">
            <Card className="flex h-full border-none px-2 py-1 bg-secondary/10 hover:bg-primary-foreground/20 rounded-md cursor-pointer">
              <p className="text-base text-ellipsis text-truncate text-white font-medium">{suggestion.text}</p>
            </Card>
          </CarouselItem>
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