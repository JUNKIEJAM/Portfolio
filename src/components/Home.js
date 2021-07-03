import React from "react"
import image from "../image (1).png";
export default function Home() {
    return ( 
    <main>
        
        <img src = { image }
        alt = "Background"
        className = "absolute object-cover w-full h-full" />
        
        <section className = "relative flex justify-center min-h-screen pt-12 lg:pt-64 px">
         <h1 className = "text-6xl text-green-100 font-blod cursive leading-none lg:leading-snug home-name">
             Aloha, I'm Prithesh.</h1>
         </section ></main>
    )
}