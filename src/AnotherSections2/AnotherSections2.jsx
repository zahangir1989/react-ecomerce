
import image2 from '/stats.png';


const AnotherSections2 = () => {
    return (
     <section className='pt-20 bg-amber-50'>
       <div className='container mx-auto gap-10 flex flex-col md:flex-row justify-between px-6'>
        <div>
           <h2 className='text-7xl font-bold'>User-friendly<br/>
           <div className='pt-5'>
             <span className='text-emerald-700  pt-20'>mobile</span> & <span className='text-cyan-200 pt-5'>other<br/> 
             <div className='pt-5'><span>devices</span></div>
             </span>
           </div>
           </h2>
           <p className='pt-10 text-xl'>Quick and easy to use the most important thing for selling products on mobile!</p>
        </div>
        <div>
           <img className='w-[600px] h-[600px]' src={image2} alt="" />

        </div>
       </div>

     </section>
    );
};

export default AnotherSections2;