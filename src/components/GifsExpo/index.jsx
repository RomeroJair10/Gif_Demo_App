import { useEffect, useState } from "react"

const GifsExpo = ({categories}) => {
    const [gifsLists, setGifsLists] = useState([])

    useEffect(
        () => {
           const getGifsList = async () => {

                const gifs = await Promise.all(categories.map(async(category)=> {
                  const query = encodeURIComponent(category)
                  const apikey = "FDbeafGrIUXzHJYHtvaE1HNPH8MR2Zjx"
                  const response = await fetch(
                    `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${query}&limit=10
                    `)
                  const gifsLists = await response.json()
        
                 return gifsLists
               }))

               let urlList = [] 
               console.log(gifs)

               gifs.forEach((gif) => {
                const data = gif.data.map((item) =>{
                    return item.images.fixed_height.url.split('?')[0]
                })
                urlList = [...urlList, ...data]
               })
               
               setGifsLists([...urlList])
            }

            getGifsList()
            
        }  
         ,
        [categories]
    )

    return (
        <>
        <h4>GIFSEXPO</h4>
        <div>
        {
            gifsLists.map((url) => (
                <img key={url} src={url}/>
            ))
        }
        </div>
        </>
        
    )
}

export default GifsExpo