<template>
  <nuxt-page />
</template>

<style>
html {
  scroll-padding-top: 150px;
}

body {
  @apply text-neutral-800 bg-neutral-100 font-sans;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html, body, #__nuxt {
  height: 100%;
}

h1, h2, h3, h4 {
  @apply font-serif;
}

:focus{
  outline: none;
}
:focus-visible{
  outline: none;
  @apply ring-2 ring-primary-300 ring-offset-2 ring-offset-white;
}
</style>