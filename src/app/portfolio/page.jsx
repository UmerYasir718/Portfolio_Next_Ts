"use client"; // This marks the file as a Client Component
import Image from "next/image";
import { useEffect, useState } from "react";
export default function Portfolio() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Function to fetch data from the JSON file in the public folder
    const fetchData = async () => {
      try {
        const res = await fetch("./Data.json");
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await res.json();
        console.log(result);
        setData(result);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className='container grid gird-cols-1 lg:grid-cols-2 mx-auto gap-4'>
        {data.map((projectData) => (
          <div className='cards mb-6' key={projectData.id}>
            <div className='max-w-lg  border border-gray-500 rounded-lg  min-h-[600px] max-h-[600px] pt-24 pb-8 px-8 portfolioCard' >
              <div className='absolute top-0 bottom-0 left-0 w-1 bg-white rounded-l-lg'></div>
              <a href='#'>
                <Image className='rounded-t-lg min-w-[400px] min-h-[200px]' src={projectData.img} alt={projectData.title}
                  width={500}
                  height={300} />
              </a>
              <div className='p-5'>
                <a href=''>
                  <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                    {projectData.title}
                  </h5>
                </a>
                <p className='mb-3 font-normal text-white'>
                  {projectData.description}
                </p>
                <a
                  href={projectData.viewLink}
                  className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                >
                  GitHub
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
        ))}
      </div>
    </div>
  );
}
