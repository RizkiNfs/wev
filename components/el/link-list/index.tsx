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
}

export default (props: Props) => {
  return (
    <ul>
      {props.items?.map((link) => (
        <li class="mb-4">
          <a 
            class={props.linkStyle} 
            href={link.href}
          >
            {link.title}
          </a>
        </li>
      ))}
    </ul>
  )
}