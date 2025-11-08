
import { StickerIcon } from 'lucide-react';
import React from 'react';
import image from '/monitor-card.png';

const AnotherSection = () => {
    return (
        <section className='container mx-auto flex flex-col md:flex-row justify-between px-6'>
          
                <div className='w-full  space-y-8'>
                    <img src={image} alt="" 
                    className='w-[800px] h-[700px] rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300'/>
                </div>
                <div className=''>
                    <div className='flex items-center gap-2 bg-blue-300 w-fit px-4 py-2 rounded-full hover:bg-orange-300 transition-colors cursor-pointer group'><span className='text-xl font-medium '>I Am Zahangir Alam</span></div>

                    <h1 className='text-4xl pt-8 lg:text-6xl font-bold leading-tight'><span className='text-blue-400 text-8xl'>Lorem</span> ipsum <span className=''>dolor sit amet Sunt, ab.</span></h1>
                    <p className='text-gray-600 text-2xl mt-8 max-w-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam optio sed vitae consectetur tempora provident molestiae rerum! Reprehenderit, magni laudantium.</p>
                   <button className="bg-blue-600 text-white px-8 py-4 mt-10 rounded-xl hover:bg-blue-700 cursor-pointer transition-all hover:shadow-lg hover:shadow-blue-100 active:scale-95">
            More
          </button>

                </div>
            
            
        </section>
    );
};

export default AnotherSection;