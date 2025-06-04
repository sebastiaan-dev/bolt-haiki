import * as React from "react"
import { Link } from "@tanstack/react-router"
import { MenuIcon } from "lucide-react"
import { Button } from "~/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet"
import { ToggleGroup, ToggleGroupItem } from "~/components/ui/toggle-group"
import { SearchMode } from "~/types"

export function Header() {
  const [searchMode, setSearchMode] = React.useState<SearchMode>("article")
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">ResearchWiki AI</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link to="/papers" className="transition-colors hover:text-foreground/80">Papers</Link>
            <Link to="/articles" className="transition-colors hover:text-foreground/80">Articles</Link>
            <Link to="/about" className="transition-colors hover:text-foreground/80">About</Link>
          </nav>
        </div>
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <ToggleGroup type="single" value={searchMode} onValueChange={(value) => value && setSearchMode(value as SearchMode)}>
              <ToggleGroupItem value="article" aria-label="Toggle article search">
                Articles
              </ToggleGroupItem>
              <ToggleGroupItem value="paper" aria-label="Toggle paper search">
                Papers
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          <nav className="flex items-center">
            <Button variant="ghost" className="mr-2">Sign In</Button>
            <Button>Get Started</Button>
          </nav>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden" size="icon">
                <MenuIcon className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="flex flex-col space-y-4">
                <Link to="/papers" className="text-sm font-medium" onClick={() => setIsOpen(false)}>
                  Papers
                </Link>
                <Link to="/articles" className="text-sm font-medium" onClick={() => setIsOpen(false)}>
                  Articles
                </Link>
                <Link to="/about" className="text-sm font-medium" onClick={() => setIsOpen(false)}>
                  About
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}