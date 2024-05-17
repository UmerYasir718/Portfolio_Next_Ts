import Navbar from "@/myComponents/Navbar";
export default function page() {
  return (
    <section>
      <Navbar />
      <br />
      <div className='container mx-auto grid  grid-cols-1 md:grid-cols-2 gap-5 relative top-[100px]'>
        <div className=' p-10 text-gray-50 font-bold  text-5xl '>
          <p>
            Hello, I m{" "}
            <span className='text-blue-400 text-5xl '>Umer Yasir</span>
          </p>
          <p className='text-gray-50 font-normal  text-base'>
            I am a Student of BS Software Engineering currently working as a
            Full Stack Developer. Insh&apos;Allah in the future I will move
            toward Data Science.
          </p>
        </div>
        <div className='bg-blue-400 text-center  hover:bg-indigo-800 hover:text-gray-50 hover:p-20 p-10 font-bold '>
          Center Side
        </div>
      </div>
      <br />

      <div className='container mx-auto relative top-[200px] w-8 h-13 border border-gray-400 rounded-full'>
        {/* <div className='w-6 h-12 animate-bounce mx-auto fs-6'>&#x2022;</div> */}
        {/* <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='animate-bounce  mx-auto w-10 h-12 border border-gray-400 rounded'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3'
          />
        </svg> */}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke-width='1.5'
          stroke='currentColor'
          className='w-6 h-12 animate-bounce mx-auto '
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5'
          />
        </svg>
      </div>
    </section>
  );
}
// and one more thing is how to prepare for interview one month is left for come summer
