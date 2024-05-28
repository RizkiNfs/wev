export const useIsLogin = () => {
  const token = useTokenStorage()
  return ref(Boolean(token.value))
}