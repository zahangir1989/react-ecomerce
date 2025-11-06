import React from 'react'

const PurposeSection = () => {
    const features =[
        {
            icon: "🟣",
            title: "Lorem ipsum dolor sit",
            description: "We work the way you do by adapting to your workflows and rhythm we aim to blend in for a seamless."
        },
        {
            icon: "🔴",
            title: "Lorem ipsum dolor sit",
            description: "We work the way you do by adapting to your workflows and rhythm we aim to blend in for a seamless."
        },
    ]
  return (
    <section className='w-full bg-gray-50 py-16 px-4 md:px-8'>
        <div className='max-w-6xl mx-auto'>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-8'>
                {/* Text div */}
                <div>
                    <div className='text-sm text-purple-600 font-medium'> ACIEVE MORE</div>
                    <h2 className='text-3xl font-bold text-gray-900 md:w-4/5 md:text-4xl'> Lorem ipsum dolor sit amet consectetur</h2>
                </div>
                {/* grid Div */}
                <div className='col-span-2 grid md:grid-cols-2 grid-cols-1 justify-between gap-8'>
                    {
                        features.map((feature, index)=>(
                            <div key={index} className='flex items-center space-x-4'>
                                <div className='w-12 h-12 flex items-center justify-between rounded-lg'>
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                                        {feature.title}
                                    </h3>
                                    <p className='text-gray-600'>{feature.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default PurposeSection