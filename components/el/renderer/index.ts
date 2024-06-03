 
import { resolveComponent, h } from 'vue'
import type { Element } from '~/types/site'

export interface Props {
  elements?: Element[]
}

export default (props: Props) => {

  const elements = props.elements

  return elements?.map((element) => {
    const { el, props } = element
    const El = resolveComponent(el)

    return h(El, { ...props })
  })

}