
export const getGoogleAuthUrl = () => {
  return $fetch('/api/auth/google/authorization-url')
}

export const postGoogleAuthCode = (code: string) => {
  return $fetch('/api/auth/google/signin', { method: 'post', body: { code } })
}
