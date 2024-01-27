export const sendMessage = async (data = {}) => {
  // Default options are marked with *
  const response = await fetch('http://127.0.0.1:5000/answer', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  return response.json()
}
