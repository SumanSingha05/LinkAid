import React from 'react'
import { Link } from 'react-router-dom';
import img1 from './Context/LOGONEW.jpg';
const LandingPage = () => {
  return (
    <div className='bg-black font-mono'>
      <nav className='h-18 bg-black top-0 sticky z-50 text-orange-400 border-b-2 border-orange-400'>
        <ul className='flex flex-row justify-end'>
          <h1 className='p-4 mr-auto ml-4 font-semibold text-orange-400 hover:text-white text-xl sm:text-2xl'><a href="#">LINKAID</a></h1>
          <li className='hidden sm:inline sm:p-5 mr-4 hover:bg-orange-400 hover:text-white font-semibold'> <a href="#"> Home</a></li>
          <li className='hidden sm:inline p-5 mr-4 hover:bg-orange-400 hover:text-white font-semibold'> <a href="#Details">About</a></li>
          {/* <li className='hidden sm:inline p-5 mr-4 hover:bg-orange-400 hover:text-white font-semibold'> <a href="#">Service</a></li> */}
          <li className='hidden sm:inline p-5 mr-4 hover:bg-orange-400 hover:text-white font-semibold'> <a href="#contact">Contact Us</a></li>
          <li className='sm:hidden inline mt-2 mr-4'><a className='text-4xl' href="#">&#8801;</a></li>
        </ul>
      </nav>
      <div className='flex'>
        <div className='sm:hidden flex flex-col'>
          <div className=' w-[100vw] h-auto block sm:hidden'>
            <img className="shadow-slate-800 m-auto w-[90vw] " src={img1} alt="" />
          </div>
          <div className='block sm:hidden w-[100vw] h-auto'>
            <div className=''>
              <h1 className='text-center p-28 text-5xl font-bold mt-0 z-1 text-white'>One Stop <span className='bg-orange-400 text-transparent bg-clip-text'>Solution</span> To All Your Problems!</h1>
            </div>
            <div className='flex flex-col'>
              <Link to="/signin" className='m-auto'><button className='border-2 border-black rounded-lg border-solid text-xl p-5 pl-28 pr-28 pt-3 pb-3 mt-5 bg-orange-400 text-white hover:bg-white hover:text-orange-400'> Sign In</button></Link>
              <Link to="/signup" className='m-auto'> <button className='border-2 border-black rounded-lg border-solid text-xl p-5 pl-28 pr-28 pt-3 pb-3 mt-5 bg-orange-400 text-white hover:bg-white hover:text-orange-400'> Sign Up</button></Link>
            </div>
          </div>
        </div>
        <div className='hidden sm:block sm:w-1/2 sm:h-[630px]'>
          <div className=''>
            <h1 className='p-28 text-6xl font-bold mt-0 z-1 text-white'> One Stop <span className='bg-orange-400 text-transparent bg-clip-text'>Solution</span> To All Your Problems!</h1>
          </div>
          <div className='flex flex-col'>
            <Link to="/signin" className='m-auto'><button className='border-2 border-black rounded-lg border-solid text-xl p-5 pl-28 pr-28 pt-3 pb-3 mt-5 bg-orange-400 text-white hover:bg-white hover:text-orange-400'> Sign In</button></Link>
            <Link to="/signup" className='m-auto'> <button className='border-2 border-black rounded-lg border-solid text-xl p-5 pl-28 pr-28 pt-3 pb-3 mt-5 bg-orange-400 text-white hover:bg-white hover:text-orange-400'> Sign Up</button></Link>
          </div>
        </div>
        <div className='hidden sm:block w-1/2 h-[630px] relative top-24'>
          <img className="shadow-slate-800 m-auto" src={img1} alt="" />
        </div>
      </div>
      <div className='bg-white'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fill-opacity="1" d="M0,224L20,202.7C40,181,80,139,120,138.7C160,139,200,181,240,181.3C280,181,320,139,360,138.7C400,139,440,181,480,218.7C520,256,560,288,600,298.7C640,309,680,299,720,266.7C760,235,800,181,840,138.7C880,96,920,64,960,80C1000,96,1040,160,1080,197.3C1120,235,1160,245,1200,245.3C1240,245,1280,235,1320,218.7C1360,203,1400,181,1420,170.7L1440,160L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"></path></svg>
      </div>
      <div id="Details" className='sm:flex sm:flex-row flex flex-wrap'>
        <div className='sm:block hidden h-[640px] w-2/3 bg-white pt-32'>
          <h1 className='text-7xl p-28 font-bold'>Our Service Is A <span className='text-orange-400'>Hammer</span> To Nail All Your <span className='text-orange-400'>Problems</span> !</h1>
        </div>
        <div className='bg-white sm:hidden w-[100vw] h-auto'>
          <h1 className='text-5xl text-center p-14 font-bold'>Our Service Is A <span className='text-orange-400'>Hammer</span> To Nail All Your <span className='text-orange-400'>Problems</span>!</h1>
        </div>
        <div className='h-auto sm:h-[640px] w-[100vw] sm:w-1/3 bg-white text-center p-10 sm:text-center m-auto sm:pt-28 sm:pr-14'>
          <p className='text-xl'>Our service specializes in bridging the gap between schools and NGOs to address and resolve their unique challenges. By leveraging our extensive connections and understanding of both sectors, we facilitate strategic partnerships and collaborations that amplify the impact of NGOs. We work closely with each NGO to identify their specific needs and then connect them with organizations that offer relevant expertise, resources, or support. This collaborative approach not only helps NGOs overcome obstacles but also fosters a synergistic environment where collective efforts lead to innovative solutions and enhanced outcomes for the communities they serve.</p>
        </div>
      </div>
      <div className='bg-white'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fill-opacity="1" d="M0,160L26.7,170.7C53.3,181,107,203,160,208C213.3,213,267,203,320,186.7C373.3,171,427,149,480,128C533.3,107,587,85,640,80C693.3,75,747,85,800,117.3C853.3,149,907,203,960,192C1013.3,181,1067,107,1120,85.3C1173.3,64,1227,96,1280,96C1333.3,96,1387,64,1413,48L1440,32L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
      </div>
      <footer id="contact" className='sm:bg-black'>
        <div className='sm:flex sm:flex-row flex-col h:auto'>
          <div className='p-20 py-5 pl-10 text-white h-52 w-[100vw] sm:h-[36vh] sm:w-1/3 line-clamp-1'>
            <h1 className='text-4xl font-semibold text-orange-400 leading-relaxed'>Stay In Touch</h1>
            <p className='leading-7 text-lg'>To get the best services available</p>
            <p className='leeading-7 text-lg'>Solving problems by bridging the gap between solvers and sufferers</p>
          </div>
          <div className='text-white py-5 sm:pt-6 w-1/3 ml-10'>
            <p><span className='text-orange-400 leading-loose text-xl'>Contact No - </span><span className='text-xl'>790826xxxx</span></p>
            <p><span className='text-orange-400 leading-loose text-xl'>Email Id - </span><span className='text-xl'>ngoservices1@gmail.com</span></p>
            <p><span className='text-orange-400 leading-loose text-xl'>Address -</span><span className='text-xl'> Crater Pally,Mars</span></p>
          </div>
          <div id='Social' className='w-1/3 py-5 pt-5 '>
            <h1 className='text-2xl font-semibold pl-10 text-orange-400'>Social Media Platforms-</h1>

            <div className='flex flex-row sm:ml-0 ml-2'>
              <a href="#" target='blank'><svg className='m-5' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="70" height="70" viewBox="0 0 48 48">
                <path fill="#3F51B5" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"></path>
              </svg>
              </a>
              <a href="#" ><svg className='m-5' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="70" height="70" viewBox="0 0 48 48">
                <radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5"></stop><stop offset=".328" stop-color="#ff543f"></stop><stop offset=".348" stop-color="#fc5245"></stop><stop offset=".504" stop-color="#e64771"></stop><stop offset=".643" stop-color="#d53e91"></stop><stop offset=".761" stop-color="#cc39a4"></stop><stop offset=".841" stop-color="#c837ab"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9"></stop><stop offset=".999" stop-color="#4168c9" stop-opacity="0"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
              </svg></a>
              <a href="https://x.com/Status_Code_" target="_blank"><svg className='bg-white sm:m-7 m-7 mr-5' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
                <path d="M 11 4 C 7.1456661 4 4 7.1456661 4 11 L 4 39 C 4 42.854334 7.1456661 46 11 46 L 39 46 C 42.854334 46 46 42.854334 46 39 L 46 11 C 46 7.1456661 42.854334 4 39 4 L 11 4 z M 11 6 L 39 6 C 41.773666 6 44 8.2263339 44 11 L 44 39 C 44 41.773666 41.773666 44 39 44 L 11 44 C 8.2263339 44 6 41.773666 6 39 L 6 11 C 6 8.2263339 8.2263339 6 11 6 z M 13.085938 13 L 22.308594 26.103516 L 13 37 L 15.5 37 L 23.4375 27.707031 L 29.976562 37 L 37.914062 37 L 27.789062 22.613281 L 36 13 L 33.5 13 L 26.660156 21.009766 L 21.023438 13 L 13.085938 13 z M 16.914062 15 L 19.978516 15 L 34.085938 35 L 31.021484 35 L 16.914062 15 z"></path>
              </svg></a>
            </div>
          </div>
        </div>
      </footer>
    </div>

  )
}

export default LandingPage