// eslint-disable-next-line
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
    // @ts-expect-error - I'm not sure how to type this <= thank's copilot
    return <El {...props} />
  })

}