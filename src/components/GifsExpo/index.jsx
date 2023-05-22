import { useState } from "react"

const GifsExpo = ({categories}) => {
    const [gifsLists, setGifsLists] = useState([])


    const getGifsList = async () => {
        let gifArray = []
        categories.forEach(async(category)=> {
          const query = encodeURIComponent(category)
          const apikey = "FDbeafGrIUXzHJYHtvaE1HNPH8MR2Zjx"
          const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q${query}limit=10`)
          const gifsLists = await response.json()

        const urlGifsList = gifsLists.data.map((gif)=> {
            return gif.images.fixed_width.url
        })
        gifArray = [...gifArray, ...urlGifsList]

       })
    //    setGifsLists(...gifArray)

    }
    
getGifsList()

    return (
        <h4>GIFSEXPO</h4>
    )
}

export default GifsExpo