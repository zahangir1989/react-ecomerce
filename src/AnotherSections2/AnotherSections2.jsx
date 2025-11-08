import image2 from '/stats.png'


const AnotherSections2 = () => {
    return (
     <section className='pt-20 bg-amber-50'>
       <div className='container mx-auto flex flex-col md:flex-row justify-between px-6'>
        <div>
           <h2>User-friendly mobile & other devices</h2>
           <p>Quick and easy to use the most important thing for selling products on mobile!</p>
        </div>
        <div>
            <img src={image2} alt="" />

        </div>
       </div>

     </section>
    );
};

export default AnotherSections2;