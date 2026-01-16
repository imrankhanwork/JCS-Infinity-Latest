import { useTheme } from "next-themes"
import { Toaster as Sonner, toast } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group font-sans"
      toastOptions={{
        classNames: {
          toast:
            "group toast border bg-background text-foreground shadow-xl rounded-md px-4 py-3 transition-all duration-300 group-[.toaster]:border-border",
          description: "text-sm text-muted-foreground group-[.toast]:leading-relaxed",
          actionButton:
            "inline-flex items-center justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors",
          cancelButton:
            "inline-flex items-center justify-center rounded-md bg-muted px-3 py-1.5 text-sm font-medium text-muted-foreground hover:bg-muted/80 transition-colors",
        },
      }}
      {...props}
    />
  )
}

export { Toaster, toast }
