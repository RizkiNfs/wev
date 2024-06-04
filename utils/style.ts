import type { Styles, StyleValue } from '~/types/site'

export const generateStyle = (styles: Styles) => {
  return Object.values(styles).reduce((acc:string, style: StyleValue) => {
    if(!style) return ''
    if(style.arbitrary) return `${acc} ${style.prefix}[${style.value}${style.unit || ''}]`
    return `${acc} ${style.prefix}${style.value}`
  },'')
}