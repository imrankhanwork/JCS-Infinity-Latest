import * as React from "react"

const MOBILE_BREAKPOINT = 768 // px

/**
 * Hook to detect if the current viewport is mobile-sized.
 * Used across the JCS Infinity website for responsive rendering.
 */
export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = React.useState(() =>
    typeof window === "undefined" ? false : window.innerWidth < MOBILE_BREAKPOINT
  )

  React.useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)

    const handleChange = () => setIsMobile(mediaQuery.matches)

    // Initial check
    handleChange()

    // Listen for changes
    mediaQuery.addEventListener("change", handleChange)

    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  return isMobile
}
