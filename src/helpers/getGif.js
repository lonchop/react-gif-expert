export const getGif = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=9JUoi0YYUfJhUlSAG9eUdY5dVDwhg58Y&q=${category}&limit=10`
  const res = await fetch(url)
  const { data } = await res.json()

  const gif = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }))

  return gif
}
