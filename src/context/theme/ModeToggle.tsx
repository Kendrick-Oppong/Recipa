import { Moon, Sun, Monitor } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "./themeProvider";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className="border dark:border-none border-green600"
      >
        <Button
          variant="outline"
          size="icon"
          className="focus-visible:ring-offset-0"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          {/* <Monitor
            strokeWidth={1}
            className=" h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
          /> */}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="z-[10009] border border-green600"
      >
        <DropdownMenuItem className="cursor-pointer"  onClick={() => setTheme("light")}>
          <Sun className="mr-2 " /> Light
        </DropdownMenuItem>
        <DropdownMenuItem  className="cursor-pointer" onClick={() => setTheme("dark")}>
          <Moon className="mr-2 " /> Dark
        </DropdownMenuItem>
        <DropdownMenuItem  className="cursor-pointer" onClick={() => setTheme("system")}>
          <Monitor className="mr-2 " /> System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
