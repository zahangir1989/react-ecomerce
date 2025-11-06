import React from "react";

const BecomePartner = () => {
  const features = [
    {
      icon: "🔍",
      title: "Lorem ipsum dolor sit",
      description:
        "We work the way you do by adapting to your workflows and rhythm we",
    },
    {
      icon: "⚙️",
      title: "Lorem ipsum dolor sit",
      description:
        "We work the way you do by adapting to your workflows and rhythm we.",
    },
    {
      icon: "🔍",
      title: "Lorem ipsum dolor sit",
      description:
        "We work the way you do by adapting to your workflows and rhythm we",
    },
  ];
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">
          {" "}
          Lorem ipsum dolor sit amet{" "}
        </h2>
        <p className="text-gray-600">
          Lorem, ipsum dolor sit amet consectetur adipisicing{" "}
        </p>
      </div>

      {/* Partner Logo */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center p-6">
            <div className="w-24 h-24 rounded-full mb-6 flex items-center justify-center " style={{
                backgroundColor: index === 0 ? "#F1EFFD" : index ===1 ? "#FFE7E7" : "#FFF3E4"
            }}>
              <div className="text-3xl">{feature.icon}</div>
            </div>
            <h3 className="text-2xl font-medium mb-3">{feature.title}</h3>
            <p className="text-gray-500 text-center">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Partner Button */}
      <div className="text-center mt-12">
        <button className="bg-blue-600 text-white cursor-pointer px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors relative">
          Become a Partner
          <div className="absolute -z-10 w-full h-full rounded-full bg-blue-600/30 blur-xl top-0 left-0"></div>
        </button>
      </div>
    </section>
  );
};

// Baki 1 or 2 section tmi nije banaba tahole kiso shikte parba bro!!!!!!!!!!
//  Programmin korle Gumano jabe na 
// 100% Affort dite hobe

export default BecomePartner;
