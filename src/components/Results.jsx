//import React from 'react'
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import Loading from "../components/Loading"
import ReactPlayer from "react-player"
import { useStateContext } from "../contexts/StateContextProvider"
const Results = () => {
    const {results,isLoading,getResults,searchTerm} = useStateContext()
    const location = useLocation()

    useEffect(()=>{
        if(searchTerm)
        {
            if(location.pathname === '/videos')
            {

                getResults(`/search/q=${searchTerm} videos`);
            }
            else{
                getResults(`${location.pathname}/q=${searchTerm}&num=40`);
            }
        }

    })

    if(isLoading) return <Loading/>
 
      switch(location.pathname)
      {
         case '/search':
            return (
                <div className=" flex flex-wrap justify-between space-y-6 sm:px-56">
                 {results?.results?.map(({link,title},index)=>(
                     <div key={index} className="md:w-2/5 w-full">
                     <a href={link} target="_blank" rel="noreferrer">
                        <p className=" text-sm">
                         {link.length>30 ? link.substring(0,30):link}
                        </p>
                        <p className="text-lg hover:underline dark:text-blue-700">
                          {title}
                        </p>
                     </a>
                     </div>
                 ))}                       
                </div>
            )
            case '/images':
                return(
                    <div className="flex flex-wrap justify-center items-center">
                     {results?.image_results?.map(({image,link:{href,title},index})=>(
                        <a className="sm:p-3 p-5 " href={href} target="_blank" key={index} rel="noreferrer">
                        <img src={image?.src} alt={title} loading="lazy"/>
                        <p className="w-36 break-words text-sm mt-2">
                           {title}     
                        </p>
                        </a>
                     ))}
                    </div>
                )

                case '/news':
                return(
                    <div className="flex flex-wrap justify-between space-y-6 sm:px-56 items-center">
                     {results?.entries?.map(({links,id,source,title})=>(
                        <div key={id} className="md:w-2/5 w-full" >
                        <a  href={links?.[0].href} target="_blank"  rel="noreferrer" className="hover:underline">

                        <p className="text-lg dark:text-blue-300 text-blue-700">
                           {title}     
                        </p>
                        </a>
                        <div className="flex gap-4">
                            <a href={source?.href} target="_blank" rel="noreferrer" className="hover:underline">
                             {source?.href}
                            </a>
                        </div>
                        </div>
                     ))}
                    </div>
                )

         case '/videos':
          return(
            <div className="flex flex-wrap">
            {results?.results?.map((video,index)=>(
                <div key={index} className="p-2">
              {video.additional_links?.[0].href &&  <ReactPlayer url={video.additional_links?.[0].href} controls width="355px" height="200px"  />}
                 </div>
            ))}
            </div>
          )
          default :
          return 'ERROR'

      }
}

export default Results
