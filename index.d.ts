interface Breadcrumb {
  to?: string,
  text: string
}

declare module '#app' {
  interface PageMeta {
    breadcrumbs?: Breadcrumb[]
  }
}

// It is always important to ensure you import/export something when augmenting a type
export {}