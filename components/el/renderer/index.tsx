import type { LinkListEl } from '../link-list'
import type { TextEl } from '../text'
import type { AvatarEl } from '../avatar'
import type { SocialMediaIconsEl } from '../social-media-icons'


type Element = LinkListEl | TextEl | AvatarEl | SocialMediaIconsEl

export interface Props {
  elements: Element[]
}

export default (props: Props) => {

  const elements = props.elements

  return elements.map((element) => {
    const { el, props } = element
    const El = resolveComponent(el)
    // @ts-expect-error - I'm not sure how to type this <= thank's copilot
    return <El {...props} />
  })

}