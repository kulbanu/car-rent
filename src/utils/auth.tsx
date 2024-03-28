export const signinLocalStorage = (email: string, name: string) => {
  localStorage.setItem('user', JSON.stringify({ email, name }))
}

export const getUserName = () => {
  const user = localStorage.getItem('user')
  if (user) return JSON.parse(user).name
  return null
}

export const getUserEmail = () => {
  const user = localStorage.getItem('user')
  if (user) return JSON.parse(user).email
  return null
}
