

function Footer() {
  return (
    <div className=" bg-black" id="socials" >
      <h1 className=" bg-black flex flex-row items-center justify-center mb-10 w-full text-4xl text-white p-4">Checkout The Code</h1>
        <ul className=' bg-black flex items-center justify-center mb-10'>
          <li>
            <a href={"https://github.com/YATHARTH-Sriv/speedyai-assign"}>
              <img
              src={"https://i.pinimg.com/originals/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.png"}
              alt={"github"}
              height={80}
              width={80}
              className=' hover:bg-white text-white font-bold py-2 px-4  transition duration-300 ease-in-out transform hover:scale-110 rounded-md'
              />
            </a>
          </li>
          <li>
            <a href={"https://twitter.com/yatharth_sriv"}>
              <img
              src={"https://upload.wikimedia.org/wikipedia/commons/9/95/Twitter_new_X_logo.png"}
              alt={"twitter"}
              height={70}
              width={70}
              className=' hover:bg-white text-white font-bold py-2 px-4  transition duration-300 ease-in-out transform hover:scale-110 rounded-md'
              />
            </a>
          </li>
          <li>
            <a href={"https://www.instagram.com/yatharth_sriv/"}>
              <img
              src={"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"}
              alt={"instagram"}
              height={70}
              width={70}
              className='  hover:bg-pink-600 text-white font-bold py-2 px-4  transition duration-300 ease-in-out transform hover:scale-110 rounded-md'
              />
            </a>
          </li>
        </ul>
      </div>
  )
}

export default Footer