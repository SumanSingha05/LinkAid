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
          <li className='hidden sm:inline p-5 mr-4 hover:bg-orange-400 hover:text-white font-semibold'> <a href="#">Contact Us</a></li>
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
          <p className='text-xl'>Our service specializes in bridging the gap between NGOs and a network of complementary organizations to address and resolve their unique challenges. By leveraging our extensive connections and understanding of both sectors, we facilitate strategic partnerships and collaborations that amplify the impact of NGOs. We work closely with each NGO to identify their specific needs and then connect them with organizations that offer relevant expertise, resources, or support. This collaborative approach not only helps NGOs overcome obstacles but also fosters a synergistic environment where collective efforts lead to innovative solutions and enhanced outcomes for the communities they serve.</p>
        </div>
      </div>
      <div className='bg-white'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fill-opacity="1" d="M0,160L26.7,170.7C53.3,181,107,203,160,208C213.3,213,267,203,320,186.7C373.3,171,427,149,480,128C533.3,107,587,85,640,80C693.3,75,747,85,800,117.3C853.3,149,907,203,960,192C1013.3,181,1067,107,1120,85.3C1173.3,64,1227,96,1280,96C1333.3,96,1387,64,1413,48L1440,32L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
      </div>
      <footer className='bg-black'>
        <div className='flex flex-row'>
          <div className='p-20 py-5 text-white h-[36vh] w-1/3 line-clamp-1'>
            <h1 className='text-4xl font-semibold text-orange-400 leading-relaxed'>Stay In Touch</h1>
            <p className='leading-7 text-lg'>To get the best services available</p>
            <p className='leeading-7 text-lg'>Solving problems by bridging the gap between solvers and sufferers</p>
          </div>
          <div className='text-white py-5 pt-6'>
            <p><span className='text-orange-400 leading-loose text-xl'>Contact No - </span><span>790826xxxx</span></p>
            <p><span className='text-orange-400 leading-loose text-xl'>Email Id - </span><span>ngoservices1@gmail.com</span></p>
            <p><span className='text-orange-400 leading-loose text-xl'>Address -</span><span> Crater Pally,Mars</span></p>
          </div>
        </div>
      </footer>
    </div>

  )
}

export default LandingPage