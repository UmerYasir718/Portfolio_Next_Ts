import Image from "next/image";
import Link from "next/link";
import Logo from "/public/new.png";
export default function Navbar() {
  return (
    <>
      <div className='container my-4 mx-auto '>
        <div className='flex flex-row float-left justify-center items-center'>
          <Image
            src={Logo}
            alt='Logo'
            className=''
            style={{ width: "80px", height: "80px" }}
          />
          <div className='text-2xl capitalize hover:bg-gray-50'>
            <Link href='/'>Umer Yasir</Link>
          </div>
        </div>
        <div className='nav'>
          <ul className='flex flex-row float-right gap-3'>
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
        </div>
      </div>
    </>
  );
}
