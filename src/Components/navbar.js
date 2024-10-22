import { useMediaQuery } from 'react-responsive';
import img from '../Images/Code.png'
import 'animate.css'
import ThemeSwitcher from './ThemeSwitcher';
export default function Navbar(){{

    const isMobile = useMediaQuery({ query: '(max-width: 650px)' });

    return<>
    <main className = "customDesign">

 <div  className={isMobile ? 'flex flex-col' : 'flex flex-row'}>
  <div  className="basis-1/2 ">
  <div className = "contentSide "> 
  <h1 className = "animate__animated animate__backInDown">Hi,</h1>
  <h1 className = "animate__animated animate__backInDown">I am Sukhad</h1>

  <p  className = "animate__animated animate__backInDown textParagraphStyle">Software Developer👨‍💻</p>
  </div>
  </div>
  < div
   className="basis-1/2 ">
   
  <img   className = " ring ring-red-500 ring-offset-0 imageClass imgStyle animate__animated animate__flash animate__slower animate__repeat-3	3"src= {img}  alt ="Error loading the image"></img></div>
    </div>
  
</main>
    </>
}}