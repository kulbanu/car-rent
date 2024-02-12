export const sendMessage = async (data = {}) => {
  // Default options are marked with *
  const response = await fetch('https://flask-kqwk.onrender.com/api/answer', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  return response.json()
}
