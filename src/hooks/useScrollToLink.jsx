import { useCallback } from 'react'

const useScrollToLink = (setShowOffcanvas = undefined) => {
  const scrollToTop = useCallback((sectionId) => {
    if (typeof document !== 'undefined') {
      const section = document.getElementById(sectionId)

      if (section) {
        window.scrollTo({
          top: section.offsetTop,
          behavior: 'smooth'
        })
      }
    }
  }, [])

  const handleLinkClick = useCallback(
    (event) => {
      event.preventDefault()

      const { target, currentTarget } = event
      // referring to the currentTarget element allows navigation when clicking on the logo in the mobile menu for example
      let elementWithHref = null

      if (target.hasAttribute('href')) {
        elementWithHref = target
      } else if (currentTarget.hasAttribute('href')) {
        elementWithHref = currentTarget
      }

      if (elementWithHref) {
        const sectionId = elementWithHref.hash.substring(1)
        scrollToTop(sectionId)
      }

      if (typeof window === 'undefined') {
        return
      }

      // hide the mobile menu after clicking on a link
      if (
        setShowOffcanvas &&
        window.matchMedia('(max-width: 767.98px)').matches
      ) {
        setShowOffcanvas(false)
      }
    },
    [scrollToTop, setShowOffcanvas]
  )

  return handleLinkClick
}

export default useScrollToLink
