 
import { h } from 'vue'

interface LinkItem {
  title: string;
  href: string;
}

export interface Props {
  items: LinkItem[];
  linkStyle?: string;
}

export interface LinkListEl {
  el: 'el-link-list'
  props: Props
  id: string
}

export default (props: Props) => {
  return (
    h('ul', props.items?.map((link) => (
      h('li', { class: 'mb-4' }, [
        h('a', { 
          class: [props.linkStyle],
          href: link.href
        }, link.title)
      ])
    )))
  )
}