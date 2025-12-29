import React from 'react'
import { BiTime } from 'react-icons/bi';
import { BsStack } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';
import { HiLightBulb } from 'react-icons/hi';

export default function ServiceSection() {
    const services = [
    {
      icon: <BsStack className="w-8 h-8 text-indigo-600" />,
      title: "Web Design",
      description: "One for all and all for one, Muskehounds are always ready.",
      link: "#learn-more",
    },
    {
      icon: <HiLightBulb className="w-8 h-8 text-amber-400" />,
      title: "Ad-Creatives",
      description: "Alphabet Village and the subline of her own road.",
      link: "#learn-more",
    },
    {
      icon: <FiSettings className="w-8 h-8 text-red-400" />,
      title: "Automation",
      description: "Little Blind Text should turn around and return.",
      link: "#learn-more",
    },
    {
      icon: <BiTime className="w-8 h-8 text-cyan-400" />,
      title: "Infographics",
      description: "Nothing the copy said could convince her.",
      link: "#learn-more",
    },
  ];
  return (
    <div className='py-20 container mx-auto px-4 sm:px-6 lg:px-8'>
   <div className='flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24'>

    {/* Header */}
    <div className='md:w-1/3'>
    <h2 className='text-3xl md:text-4xl font-bold mb-6 md:w-4/5'>
    Lorem ipsum dolor sit amet</h2>
<p className='text-gray-700 text-lg mb-4 md:w-4/5'>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, maiores, error magnam vel saepe inventore</p>
    </div>

    {/* Service Grid */}
    <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
     {
        services.map((service, index) =>(
            <div key={index} className='bg-white max-w-72 cursor-pointer rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300'>
                <div className='mb-4'> {service.icon}</div>
                <h3 className='text-xl font-medium mb-2'>{service.title}</h3>
                <p className='text-gray-500 mb-4'>{service.description}</p>
                <a className='text-indigo-600 font-medium hover:text-indigo-700 transition-colors' href={service.link}> Learn More</a>

            </div>
        ))
     }
    </div>
   </div>
    </div>
  )
}
