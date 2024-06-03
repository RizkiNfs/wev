 
import { h } from 'vue'

type Type = 'twitter' | 'linkedin';

export interface Props {
  items: {
    href: string;
    type: Type;
  }[];
  class?: string
  color?: string
}

export interface SocialMediaIconsEl {
  el: 'el-social-media-icons'
  props: Props
  id: string
}

export default (props: Props) => {
  return (
    h('ul', { class: ['flex gap-x-4 justify-center', props.class] }, props.items?.map((i) => (
      h('li', [
        h('a', { href: i.href }, [
          h('svg', { xmlns: 'http://www.w3.org/2000/svg', class: `text-[${props.color}]`, viewBox: '0 0 16 16', width: 32, height: 32 }, [
            h('use', { href: `/icons/${i.type}.svg#content` })
          ])
        ])
      ])
    )))
  )
}