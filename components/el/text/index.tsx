
const as = ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const

export interface Props {
  as?: typeof as[number]
  content: string
  class?: string
}

export interface TextEl {
  el: 'el-text'
  props: Props
  id: string
}

export default (props: Props) => {
  const Tag = props.as || 'p'
  return (
    <Tag class={props.class}>
      {props.content}
    </Tag>
  )
}