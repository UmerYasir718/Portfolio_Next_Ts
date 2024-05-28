import Image from "next/image";
import Link from "next/link";
import Logo from "/public/new.png";
export default function Navbar() {
  return (
    <div>
      <nav className='container my-4 mx-auto flex justify-between flex-row'>
        <div className='flex justify-center items-center '>
          <Image
            src={Logo}
            alt='Logo'
            className=''
            style={{ width: "80px", height: "80px" }}
          />
          <div className='text-2xl capitalize hover:bg-gray-50 hover:text-black'>
            <Link href='/'>Umer Yasir</Link>
          </div>
        </div>
        {/* <div className='flex nav'> */}
        <ul className=' gap-3 hidden md:flex'>
          <li>
            <Link href='/about' className='font-bold'>
              About
            </Link>
          </li>
          <li>
            <Link href='/myResume' className='font-bold'>
              My Resume
            </Link>
          </li>
          <li>
            <Link href='/portfolio' className='font-bold'>
              Portfolio
            </Link>
          </li>
          <li>
            <Link href='/contact' className='font-bold'>
              Contact
            </Link>
          </li>
        </ul>
        <div className='md:hidden flex text-4xl items-center'>
          <a href=''>&#8801;</a>
        </div>
        {/* <div className='md:hidden flex'></div> */}
        {/* </div> */}
      </nav>
    </div>
  );
}
