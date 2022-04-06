const fetchTricks = () => {
  return fetch('http://localhost:3001/api/v1/tricks')
    .then(response => {
      if (!response.ok) {
        throw new Error("Something went wrong! Please try again later.")
      } else {
        return response.json()
      }
    })
}

const postTrick = (newTrick) => {
  return fetch('http://localhost:3001/api/v1/tricks', {
    method: "POST",
    body: JSON.stringify(newTrick),
    headers: { "Content-Type": "application/json" },
  }).then(response => {
    if(!response.ok) {
      throw new Error("Please submit a trick with all form fields filled out.")
    } else {
      return response.json()
    }
  })
}





export { fetchTricks, postTrick };