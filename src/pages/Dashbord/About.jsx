import React, { useEffect, useState } from 'react';

function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the fade-in animation when the component mounts
    setIsVisible(true);
  }, []);

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-100">
      <div
        className={`w-11/12 md:w-3/4 lg:w-11/12 min-h-1/2 bg-white shadow-lg rounded-lg p-8 transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-start">About</h2>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.
          <br />
          <br />
          Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          <br />
          <br />
          Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.
          <br />
          <br />
          Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
        </p>
      </div>
    </div>
  );
}

export default About;
