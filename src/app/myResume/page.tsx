import Image from "next/image";
import NodeJs from "/public/NodeJs.png";
import Aspire from "/public/aspire.png";
import CodeHoppers from "/public/codeHoppers.png";
import React from "/public/react.png";
import Umt from "/public/umt.png";
export default function MyResume() {
  return (
    <div>
      <div className='container mx-auto'>
        <div className='text-blue-400 text-5xl font-bold my-6  md:mx-0 container mx-auto'>
          My Resume
        </div>
      </div>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4'>
        {/* -----------------------------------------------------------------Education Part Start form Here---------------------------------------------------------------------- */}
        <div className='firstGrid order-1 md:order-1'>
          {/* --------------------------------------------------------------------------Heading------------------------------------------------------------- */}
          <div className='text-white text-3xl font-bold mb-6 mx-6 md:mx-16'>
            Education
          </div>
          {/* -------------------------------------------------------------------------------------FirstOne------------------------------------------------------------- */}
          <div className='firstOne mx-2 md:mx-16 min-h-[200px] mb-6'>
            <div className='max-w-lg p-4 bg-white border-b-4 border-blue-500 rounded-lg shadow dark:bg-gray-800 rounded-l-lg min-h-[450px]'>
              <div className='absolute top-0 bottom-0 left-0 w-1 bg-blue-500 rounded-l-lg'></div>
              <Image
                src={Umt}
                alt='Logo'
                className='rounded-full'
                style={{ width: "100px", height: "100px" }}
              />
              <h5 className='mb-2 text-xl md:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white'>
                BS Software Engineering
              </h5>
              <p className='bg-gray-300 text-black font-semibold p-1 w-[100px] rounded mb-1 text-sm md:text-md text-center '>
                2015-2021
              </p>

              <div className='text-blue-400 text-md md:text-xl font-semibold'>
                University of Management Technology
              </div>
              <p className='mb-3  text-white-500 text-left text-sm md:text-lg'>
                The BSc Software Engineering degree at the University of
                Management and Technology offers a comprehensive curriculum and
                practical experiences, empowering students to become skilled
                software engineers in the digital age.
              </p>
            </div>
          </div>
          {/* ----------------------------------------------------------------------------------SecondOne------------------------------------------------------------- */}
          <div className='secondOne mx-2 md:mx-16 min-h-[200px] mb-6'>
            <div className='max-w-lg p-4 bg-white border-b-4 border-blue-500 rounded-lg shadow dark:bg-gray-800 rounded-l-lg min-h-[450px]'>
              <div className='absolute top-0 bottom-0 left-0 w-1 bg-blue-500 rounded-l-lg'></div>
              <Image
                src={Aspire}
                alt='Logo'
                className='rounded-full items-center'
                style={{ width: "100px", height: "100px" }}
              />
              <h5 className='mb-2 text-xl md:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white'>
                FSc Pre- Engineering
              </h5>
              <p className='bg-gray-300 text-black font-semibold p-1 w-[100px] rounded mb-1 text-sm md:text-md  text-center '>
                2019-2021
              </p>

              <div className='text-blue-400 text-md md:text-xl font-semibold'>
                Aspire College Pattoki
              </div>
              <p className='mb-3  text-white-500 text-left text-sm md:text-lg'>
                The BSc Software Engineering degree at the University of
                Management and Technology offers a comprehensive curriculum and
                practical experiences, empowering students to become skilled
                software engineers in the digital age.
              </p>
            </div>
          </div>
        </div>
        {/* --------------------------------------------------------------------Education Part End Here---------------------------------------------------------------------  */}
        {/* ------------------------------------------------------------------Experience Part Start From Here --------------------------------------------------------------- */}
        <div className='secondGrid  order-2 md:order-1'>
          {/* ----------------------------------------------------------------------------Heading------------------------------------------------------------- */}
          <div className='text-white text-3xl font-bold mb-6 mx-6 md:mx-16'>
            Experience
          </div>
          {/* ---------------------------------------------------------------------------FirstOne------------------------------------------------------------- */}
          <div className='firstOne mx-2 md:mx-16 min-h-[200px] mb-6'>
            <div className='max-w-lg p-4 bg-white border-b-4 border-blue-500 rounded-lg shadow dark:bg-gray-800 rounded-l-lg min-h-[450px]'>
              <div className='absolute top-0 bottom-0 left-0 w-1 bg-blue-500 rounded-l-lg'></div>
              <Image
                src={CodeHoppers}
                alt='Logo'
                className='rounded-full items-center'
                style={{ width: "100px", height: "100px" }}
              />
              <h5 className='mb-2 text-xl md:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white'>
                Intern As MERN Stack
              </h5>
              <p className='bg-gray-300 text-black font-semibold p-1 w-[100px] rounded mb-1 text-sm md:text-md  text-center '>
                2023-2024
              </p>

              <div className='text-blue-400 text-md md:text-xl font-semibold'>
                CodeHoppers
              </div>
              <p className='mb-3  text-white-500 text-left text-sm md:text-lg'>
                The BSc Software Engineering degree at the University of
                Management and Technology offers a comprehensive curriculum and
                practical experiences, empowering students to become skilled
                software engineers in the digital age.
              </p>
            </div>
          </div>
        </div>
        {/* ------------------------------------------------------------------Experience Part End Here----------------------------------------------------------------------------------- */}
      </div>
      {/* ------------------------------------------------------------------Certificate Part Start Here----------------------------------------------------------------------------------- */}
      {/* --------------------------------------------------------------------------Heading------------------------------------------------------------- */}
      <div className='container mx-auto'>
        <div className='text-white text-3xl font-bold mb-6 mx-6 md:mx-16'>
          Certifications
        </div>
      </div>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4'>
        {/* -------------------------------------------------------------------------------------FirstOne------------------------------------------------------------- */}
        <div className='firstGrid order-1 md:order-1'>
          <div className='firstOne mx-2 md:mx-16 min-h-[200px] mb-6'>
            <div className='max-w-lg bg-gray-800 min-h-[520px] rounded-lg border-b-8 border-blue-500'>
              <a href='https://coursera.org/verify/JS9JJNKLW6HD'>
                <Image className='rounded-t-lg' src={React} alt='' />
              </a>
              <div className='p-5'>
                <a href='#'>
                  <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                    Advanced React
                  </h5>
                </a>
                <div className='mb-3 font-normal text-white '>
                  <ul>
                    <li className='inline-flex'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 16 16'
                        fill='currentColor'
                        className='size-6 text-blue-500 '
                      >
                        <path
                          fillRule='evenodd'
                          d='M15 8c0 .982-.472 1.854-1.202 2.402a2.995 2.995 0 0 1-.848 2.547 2.995 2.995 0 0 1-2.548.849A2.996 2.996 0 0 1 8 15a2.996 2.996 0 0 1-2.402-1.202 2.995 2.995 0 0 1-2.547-.848 2.995 2.995 0 0 1-.849-2.548A2.996 2.996 0 0 1 1 8c0-.982.472-1.854 1.202-2.402a2.995 2.995 0 0 1 .848-2.547 2.995 2.995 0 0 1 2.548-.849A2.995 2.995 0 0 1 8 1c.982 0 1.854.472 2.402 1.202a2.995 2.995 0 0 1 2.547.848c.695.695.978 1.645.849 2.548A2.996 2.996 0 0 1 15 8Zm-3.291-2.843a.75.75 0 0 1 .135 1.052l-4.25 5.5a.75.75 0 0 1-1.151.043l-2.25-2.5a.75.75 0 1 1 1.114-1.004l1.65 1.832 3.7-4.789a.75.75 0 0 1 1.052-.134Z'
                          clipRule='evenodd'
                        />
                      </svg>
                      Verified by &nbsp;
                      <span className='text-blue-500 font-bold'>Meta</span>
                    </li>
                    <li>Issued May 2024</li>
                    <li></li>
                  </ul>
                </div>
                <a
                  href='https://coursera.org/verify/JS9JJNKLW6HD'
                  className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                >
                  Credentials
                  <svg
                    className='rtl:rotate-180 w-3.5 h-3.5 ms-2'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 14 10'
                  >
                    <path
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M1 5h12m0 0L9 1m4 4L9 9'
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* ----------------------------------------------------------------------------------SecondOne------------------------------------------------------------- */}
        <div className='secondGrid order-1 md:order-1'>
          <div className='secondOne mx-2 md:mx-16 min-h-[200px] mb-6'>
            <div className='max-w-lg bg-gray-800 min-h-[520px] rounded-lg border-b-8 border-blue-500'>
              <a href='https://coursera.org/verify/BZTEDZB4SJHH'>
                <Image className='rounded-t-lg' src={NodeJs} alt='' />
              </a>
              <div className='p-5'>
                <h5 className='mb-2 text-lg md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                  Developing Back-End Apps with Node.js and Express
                </h5>
                <div className='mb-3 font-normal text-white'>
                  <ul>
                    <li className='inline-flex'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 16 16'
                        fill='currentColor'
                        className='size-6 text-blue-500 '
                      >
                        <path
                          fillRule='evenodd'
                          d='M15 8c0 .982-.472 1.854-1.202 2.402a2.995 2.995 0 0 1-.848 2.547 2.995 2.995 0 0 1-2.548.849A2.996 2.996 0 0 1 8 15a2.996 2.996 0 0 1-2.402-1.202 2.995 2.995 0 0 1-2.547-.848 2.995 2.995 0 0 1-.849-2.548A2.996 2.996 0 0 1 1 8c0-.982.472-1.854 1.202-2.402a2.995 2.995 0 0 1 .848-2.547 2.995 2.995 0 0 1 2.548-.849A2.995 2.995 0 0 1 8 1c.982 0 1.854.472 2.402 1.202a2.995 2.995 0 0 1 2.547.848c.695.695.978 1.645.849 2.548A2.996 2.996 0 0 1 15 8Zm-3.291-2.843a.75.75 0 0 1 .135 1.052l-4.25 5.5a.75.75 0 0 1-1.151.043l-2.25-2.5a.75.75 0 1 1 1.114-1.004l1.65 1.832 3.7-4.789a.75.75 0 0 1 1.052-.134Z'
                          clipRule='evenodd'
                        />
                      </svg>
                      Verified by &nbsp;
                      <span className='text-blue-500 font-bold'>IBM</span>
                    </li>
                    <li>Issued Nov 2023</li>
                    <li></li>
                  </ul>
                </div>
                <a
                  href='https://coursera.org/verify/BZTEDZB4SJHH'
                  className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                >
                  Credentials
                  <svg
                    className='rtl:rotate-180 w-3.5 h-3.5 ms-2'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 14 10'
                  >
                    <path
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M1 5h12m0 0L9 1m4 4L9 9'
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------------------------------------------------------Certificate Part End Here----------------------------------------------------------------------------------- */}
    </div>
  );
}
