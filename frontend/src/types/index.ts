export interface SearchResult {
  id: string
  title: string
  type: 'article' | 'paper'
  snippet: string
  url: string
}

export interface User {
  id: string
  name: string
  email: string
  avatar?: string
}

export interface FeaturedTopic {
  id: string
  title: string
  description: string
  imageUrl: string
  category: string
}

export type SearchMode = 'article' | 'paper'