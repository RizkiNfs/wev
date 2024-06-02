import type { Element, Site } from '~/types/site'

export const useSiteState = () => useState<Partial<Site>>('current-file', () => ({
  id: '',
  pages: [{ elements: [], path: '/' }]
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

  return {
    state,
    selectedElement,
    parentSelectedElement,
    setSelectedElement,
    deleteSelectedElement
  }
}