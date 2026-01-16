'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; 
import Link from 'next/link'; 

const Navbar = () => {

  const router = useRouter()

  const Tocontacts= ()=>{
    router.push('/contacts')
  }

  const TogetStarted = ()=>{
    router.push('/getstarted')
  }

  const refreshHome = ()=>{
    router.push('/')
  }

  return (
    <header className='flex justify-between h-15 border-transparent border bg-blue-700 backdrop-blur-[90px]  t-0 z-50 sticky t-0'>
       <a href="/">
       <img 
       src="https://png.pngtree.com/png-vector/20190304/ourmid/pngtree-growth-business-company-logo-png-image_728232.jpg" 
        alt="the company logo"
        height={50}
        width={50}
        className='rounded-full m-1 ' />
        </a>
      
      <nav className=' t-0 z-50 justify-around '>

         <button className='bg-blue-600 font-bold text-white rounded-full m-2 py-1 px-4 border border-white hover:bg-black
         'onClick={TogetStarted}>
          Get Started
        </button>

        <button className='bg-blue-600 font-bold text-white rounded-full m-2 py-1 px-4 border border-white hover:bg-black'
        onClick={Tocontacts}>
          Contact Us
        </button>

        <a href="/"><button className='bg-blue-600 font-bold text-white rounded-full m-2 py-1 px-4 border border-white hover:bg-black'
        >
          HOME
        </button></a>

      </nav>
    </header>
  );
}

export default Navbar;
