import type { Element, Site, Page, Styles } from '~/types/site'

export const useSiteState = () => useState<Site>('current-file', () => ({
  _id: '',
  pages: [{ elements: [], path: '/' }],
  owner: { _id: '' },
  path: '',
  createdAt: new Date(),
  updatedAt: new Date(),
  isPublicTemplate: false
}))


export const useSelectedElement = <T>() => useState<T|null|undefined>('selected-element')
export const useSelectedParentElement = () => useState<Element>('selected-parent-element')

export const useSiteEditor = () => {
  const state = useSiteState()
  const selectedElement = useSelectedElement<Element>()
  const parentSelectedElement = useSelectedParentElement()

  const setSelectedElement = (Element: Element, parentElement?: Element) => {
    selectedElement.value = Element
    if(parentElement) {
      parentSelectedElement.value = parentElement
    }
  }

  const deleteSelectedElement = () => {

  }

  const updateFontCollection = () => {
    
    state.value.pages.forEach((page) => {

      const fonts: Page['fonts'] = []

      page.elements.forEach((element) => {
        Object.entries(element.props).forEach(([key, styles]: [string, Styles]) => {
          if(!key.toLocaleLowerCase().includes('styles') || !styles.fontFamily?.value) {
            return
          }

          const font = fonts.find((font) => font.family === styles.fontFamily?.value)
          if(font) {
            font.weight
            if(!font.weight.includes(styles.fontWeight?.value || '400')) {
              font.weight.push(styles.fontWeight?.value || '400')
              font.weight.sort()
            }
          } else {
            fonts.push({ family: styles.fontFamily?.value, weight: [styles.fontWeight?.value || '400'], style: [] })
          }

        })
      })

      page.fonts = fonts
    })

  }

  return {
    state,
    selectedElement,
    parentSelectedElement,
    setSelectedElement,
    deleteSelectedElement,
    updateFontCollection
  }
}