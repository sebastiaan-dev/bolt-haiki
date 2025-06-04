import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '~/components/hero'
import { FeaturedTopics } from '~/components/featured/featured-topics'
import { useState } from 'react'
import { SearchMode } from '~/types'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const [searchMode] = useState<SearchMode>("article")

  return (
    <div>
      <Hero searchMode={searchMode} />
      <div className="container py-12">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Featured Topics</h2>
        <FeaturedTopics />
      </div>
    </div>
  )
}