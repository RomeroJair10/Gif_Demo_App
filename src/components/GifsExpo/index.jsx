import { useEffect, useState } from "react"

const GifExpo = ({categories}) =>{
    const [gifsList, setGifsList] = useState([])
    
useEffect(
    ()=>{
        console.log("Me renderizo")
        const getGifsList = async () => {
            
            const gifs = await Promise.all(categories.map(async(category) => {
    
            const query = encodeURIComponent(category)
            const apikey = "ZuHKFXydNMHzdsLofDqbNM7JZjVsLzX0"
            const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${query}&limit=10`)
            const gifsList = await response.json()
            return gifsList
        }))
        let urlList = []
        gifs.forEach((gif)=>{
            const data = gif.data.map((item)=>{
                return item.images.fixed_height.url.split('?')[0]
            })
            urlList = [...urlList, ...data]
        })
        setGifsList([...urlList])
        }
        getGifsList()
    },
    [categories]
)

    return(
        <>
            <h4>Gifs Expo</h4>
           <div> 
            {
                gifsList.map((url)=>(
                    <img key={url} src={url}/>
                ))
            }
            </div>
        </>
        
    )

}

export default GifsExpo