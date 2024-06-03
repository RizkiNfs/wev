import type { Element, Site } from '~/types/site'

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

  return {
    state,
    selectedElement,
    parentSelectedElement,
    setSelectedElement,
    deleteSelectedElement
  }
}