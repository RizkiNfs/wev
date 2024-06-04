 
import { h, defineComponent } from 'vue'
import { generateStyle } from '~/utils/style'
import type { Styles } from '~/types/site'

interface LinkItem {
  title: string
  href: string
}

export interface Props {
  items: LinkItem[]
  linkStyle?: string
  linkStyles: Styles
}

export interface LinkListEl {
  el: 'el-link-list'
  props: Props
  id: string
}

const LinkList = defineComponent({
  props: {
    items: {
      type: Array as PropType<LinkItem[]>,
      required: true
    },
    linkStyle: {
      type: String,
      default: ''
    },
    linkStyles: {
      type: Object as PropType<Props['linkStyles']>,
      default: () => ({})
    }
  },
  setup(props: Props) {

    return () => {

      return (
        h('ul', props.items?.map((link) => (
          h('li', { class: 'mb-4' }, [
            h('a', { 
              class: [props.linkStyle, generateStyle(props.linkStyles)],
              href: link.href
            }, link.title)
          ])
        )))
      )
    }
  }
})

export default LinkList
