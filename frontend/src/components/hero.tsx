import { UniversalSearch } from "./search/universal-search"
import { SearchMode } from "~/types"

interface HeroProps {
  searchMode: SearchMode
}

export function Hero({ searchMode }: HeroProps) {
  return (
    <div className="relative isolate">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
      
      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:py-40">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Research Smarter with AI
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Discover millions of research papers and articles. Get instant insights powered by AI.
          </p>
          <div className="mt-10">
            <UniversalSearch mode={searchMode} />
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </div>
  )
}