import React from 'react'
import {
    AiFillGithub,
    AiFillInstagram,
    AiFillYoutube,
    AiOutlineArrowUp,
    AiFillLinkedin,
    AiFillFacebook
  } from "react-icons/ai"
  import { Avatar } from '@chakra-ui/react'
  import img from '../assets/menufy2.png'
const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={img}
          alt="Founder"
        />

        <h2>MenuFy</h2>
        <p>@All right reserved</p>
        
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
         
          <a href="https://instagram.com/tushar_kumar_______" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/meabhisingh" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/meabhisingh" target={"blank"}>
            <AiFillFacebook />
          </a>
          <a href="https://github.com/meabhisingh" target={"blank"}>
            <AiFillYoutube />
          </a>

        </article>
        <br/>
          <p>Mobile No : +917217829262</p>
          <p>Email : sdfa@gmail.com</p>
          <p>Adress : Delhi</p>
      </aside>
      <a href="#nav">
        <AiOutlineArrowUp />
      </a>
      
      
    </footer>
  )
}

export default Footer