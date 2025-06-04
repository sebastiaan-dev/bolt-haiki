import * as React from "react"
import { useQuery } from "@tanstack/react-query"
import { useDebounce } from "use-debounce"
import { SearchIcon } from "lucide-react"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "~/components/ui/command"
import { SearchMode, SearchResult } from "~/types"

interface UniversalSearchProps {
  mode: SearchMode
  onResultClick?: (result: SearchResult) => void
}

export function UniversalSearch({ mode, onResultClick }: UniversalSearchProps) {
  const [search, setSearch] = React.useState("")
  const [debouncedSearch] = useDebounce(search, 300)

  const searchQuery = useQuery({
    queryKey: ["search", mode, debouncedSearch],
    queryFn: async () => {
      if (!debouncedSearch) return []
      // Replace with actual API call
      return Promise.resolve<SearchResult[]>([])
    },
    enabled: Boolean(debouncedSearch),
  })

  return (
    <Command className="rounded-lg border shadow-md">
      <CommandInput
        placeholder={`Search ${mode}s...`}
        value={search}
        onValueChange={setSearch}
        className="h-12"
      />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Results">
          {searchQuery.data?.map((result) => (
            <CommandItem
              key={result.id}
              value={result.title}
              onSelect={() => onResultClick?.(result)}
            >
              <SearchIcon className="mr-2 h-4 w-4" />
              <span>{result.title}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  )
}