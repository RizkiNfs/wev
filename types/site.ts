import type { ObjectId } from 'mongodb'
import type { LinkListEl } from '~/components/el/link-list'
import type { TextEl } from '~/components/el/text'
import type { AvatarEl } from '~/components/el/avatar'
import type { SocialMediaIconsEl } from '~/components/el/social-media-icons'

export interface Page {
  elements: Element[]
  path: string
}

export interface Site {
  createdAt: string | Date
  updatedAt: string | Date
  _id: string | ObjectId
  path: string
  name?: string
  pages: Page[]
  owner: {
    _id: string | ObjectId
  }
  isPublicTemplate?: boolean
}


export type Element = LinkListEl | TextEl | AvatarEl | SocialMediaIconsEl