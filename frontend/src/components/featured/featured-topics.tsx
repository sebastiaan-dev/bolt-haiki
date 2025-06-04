import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel"
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import { FeaturedTopic } from "~/types"
import { Skeleton } from "../ui/skeleton"

interface FeaturedTopicsProps {
  topics?: FeaturedTopic[]
  isLoading?: boolean
}

export function FeaturedTopics({ topics, isLoading }: FeaturedTopicsProps) {
  if (isLoading) {
    return <FeaturedTopicsSkeleton />
  }

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {topics?.map((topic) => (
          <CarouselItem key={topic.id} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {topic.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-[16/9] relative rounded-lg overflow-hidden mb-4">
                    <img
                      src={topic.imageUrl}
                      alt={topic.title}
                      className="object-cover"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {topic.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

function FeaturedTopicsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: 3 }).map((_, i) => (
        <Card key={i}>
          <CardHeader>
            <Skeleton className="h-4 w-[150px]" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-[200px] w-full mb-4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3 mt-2" />
          </CardContent>
        </Card>
      ))}
    </div>
  )
}