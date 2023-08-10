import * as React from 'react'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

// const useScrollToLink = (setShowOffcanvas = null, navigate) => {
const useScrollToLink = (setShowOffcanvas = null) => {
  const navigate = useNavigate()

  const scrollToTop = useCallback(
    (sectionId) => {
      if (typeof document !== 'undefined') {
        const section = document.getElementById(sectionId)

        if (section) {
          window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
          })

          navigate(`#${sectionId}`)
        }
      }
    },
    [navigate]
  )

  const handleLinkClick = useCallback(
    (event) => {
      event.preventDefault()

      const currentElement = event.target
      const parentElement = currentElement.parentElement

      if (currentElement.hasAttribute('href')) {
        const sectionId = currentElement.hash.substring(1)
        scrollToTop(sectionId)
      } else if (parentElement && parentElement.hasAttribute('href')) {
        // referring to the parent element allows navigation when clicking on the logo in the mobile menu for example
        const sectionId = parentElement.hash.substring(1)
        scrollToTop(sectionId)
      }

      // hide the mobile menu after clicking on a link
      if (typeof window === 'undefined') {
        return
      }

      if (
        setShowOffcanvas &&
        window.matchMedia('(max-width: 767.98px)').matches
      ) {
        setShowOffcanvas(false)
        // console.log('setShowOffcanvas')
      }
    },
    [scrollToTop, setShowOffcanvas]
  )

  return handleLinkClick
}

export default useScrollToLink
