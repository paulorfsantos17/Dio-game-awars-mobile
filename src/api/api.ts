const baseApiURL = "http://192.168.1.103:9090/api"


export async function clientGetGames() {
  const response = await fetch(`${baseApiURL}/games`)
  const json = await response.json()
  
  return json
}

export  async function clientSendindVote(id: number) {
  const requestOption = {
    method: 'PATCH'
  }
  try {
    const response = await fetch(`${baseApiURL}/games/${id}/vote`, requestOption)
    const responseText = await response.text()
    console.log(responseText)
  } catch(e) {
    console.log(e)
  }
}

export async function clientGetWinner() {
  const response = await fetch(`${baseApiURL}/games`)
  const json = await response.json()
  return json[0]
}