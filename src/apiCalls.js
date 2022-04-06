const fetchTricks = () => {
  return fetch('http://localhost:3001/api/v1/tricks	')
    .then(response => {
      if (!response.ok) {
        throw new Error("Something went wrong! Please try again later.")
      } else {
        return response.json()
      }
    })
}


export default fetchTricks;