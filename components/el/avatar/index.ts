 
import { h } from 'vue'
export interface Props {
  src: string
  alt?: string
}

export interface AvatarEl {
  el: 'el-avatar'
  props: Props
  id: string
}

export default (props: Props) => {

  return (
    h('div', { class: 'p-2 flex justify-center' }, [
      h('div', { class: 'w-24 h-24 rounded-full bg-neutral-300' }, [
        h('img', { alt: props.alt || 'avatar', src: props.src, class: 'w-full h-full object-cover rounded-full' })
      ])
    ])
  )
}