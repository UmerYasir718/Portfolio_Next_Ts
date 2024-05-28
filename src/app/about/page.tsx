import Image from "next/image";
import Logo from "/public/new.png";
export default function About() {
  return (
    <div>
      {/* <div className='container mx-auto'> */}
      <div className='text-blue-400 text-5xl font-bold my-6  md:mx-8'>
        About Me
      </div>
      {/* </div> */}
      <div className='container mx-16 top-[100px]  text-white w-full md:w-2/4 text-xl'>
        <div className='text-white text-5xl font-bold my-4'>Overview</div>
        As a Software Engineering student, I bring expertise MERN stack
        development with proven success in MongoDB, Express.js, React.js, and
        Node.js. My internship refined both front-end and back-end skills,
        showcasing dedication to intuitive interfaces and staying current with
        emerging technologies.
      </div>
      {/* <div className='container mx-auto  top-[100px]  grid  grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 '>
        <div className='container w-80 h-80 bg-gradient-to-t from-cyan-400 to-blue-500 text-black p-10 mx-auto rounded flex justify-center align-content-center '>
          Full Stack Developer
        </div>
        <div className='container w-80 h-80 bg-gradient-to-t from-cyan-400 to-blue-500 text-black p-10 mx-auto rounded flex justify-center align-content-center '>
          Front End Developer
        </div>
        <div className='container w-80 h-80 bg-gradient-to-t from-cyan-400 to-blue-500 text-black p-10 mx-auto rounded flex justify-center align-content-center '>
          Back-End Developer
        </div>
        <div className='container w-80 h-80 bg-gradient-to-t from-cyan-400 to-blue-500 text-black p-10 mx-auto rounded flex justify-center align-content-center '>
          Data Scientist
        </div>
      </div> */}
      {/* <div className='absolute top-0 bottom-0 left-0 w-1 bg-blue-500 rounded-l-lg'></div>
      <div className='absolute w-4 h-4 bg-white border-4 border-blue-500 rounded-full -top-2 -left-2'></div> */}
      <div className='flex  justify-center flex-wrap top-[100px] gap-4 w-full md:w-2/4 my-16'>
        <div className=' w-80 h-80 bg-gradient-to-t from-cyan-400 to-blue-500 text-black p-10 mx-auto rounded flex items-center  mb-6 flex-col'>
          <Image
            src={Logo}
            alt='Logo'
            className=''
            style={{ width: "80px", height: "80px" }}
          />
          <p className='my-32 font-semibold'>Full Stack Developer</p>
        </div>
        <div className=' w-80 h-80 bg-gradient-to-t from-cyan-400 to-blue-500 text-black p-10 mx-auto rounded flex items-center  mb-6 flex-col'>
          <Image
            src={Logo}
            alt='Logo'
            className=''
            style={{ width: "80px", height: "80px" }}
          />
          <p className='my-32 font-semibold'>Front End Developer</p>
        </div>
        <div className=' w-80 h-80 bg-gradient-to-t from-cyan-400 to-blue-500 text-black p-10 mx-auto rounded flex items-center mb-6 flex-col'>
          <Image
            src={Logo}
            alt='Logo'
            className=''
            style={{ width: "80px", height: "80px" }}
          />
          <p className='my-32 font-semibold'>Back-End Developer</p>
        </div>
        <div className=' w-80 h-80 bg-gradient-to-t from-cyan-400 to-blue-500 text-black p-10 mx-auto rounded flex items-center mb-6 flex-col'>
          <Image
            src={Logo}
            alt='Logo'
            className=''
            style={{ width: "80px", height: "80px" }}
          />
          <p className='my-32 font-semibold'>Data Scientist</p>
        </div>
      </div>
    </div>
  );
}
