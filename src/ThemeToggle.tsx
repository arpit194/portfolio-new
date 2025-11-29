import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="cursor-pointer" title="Toggle Theme">
      {theme === "dark" ? (
        <Moon className="size-4" onClick={() => setTheme("light")} />
      ) : (
        <Sun className="size-4" onClick={() => setTheme("dark")} />
      )}
    </div>
  );
}
