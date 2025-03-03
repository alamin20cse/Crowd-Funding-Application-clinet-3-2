import React from 'react';
import ac1 from '../assets/ac1.webp'
import ac2 from '../assets/ac2.jpg'
import ac3 from '../assets/ac3.jpg'
import { Typewriter } from 'react-simple-typewriter'


const ExtraSection = () => {
    return (
        <div className="container mx-auto px-4 py-10 space-y-16">
        {/* How It Works Section */}
        <section className="bg-gray-100 p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">How It Works</h2>





          {/* typewriter */}
          <span style={{ color: 'red', fontSize:'42px', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['1.Create a Campaign', '2.Invite Contributors', '3.Achieve Your Goal']}
            loop={10}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
           
          />
        </span>







          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-500 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Create a Campaign</h3>
              <p className="text-gray-600">
                Share your story and set a funding goal for your campaign.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-500 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Invite Contributors</h3>
              <p className="text-gray-600">
                Spread the word and invite people to support your cause.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-500 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Achieve Your Goal</h3>
              <p className="text-gray-600">
                Receive funds directly and make an impact.
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600">
              Start Your Campaign
            </button>
          </div>
        </section>
      
        {/* Success Stories Section */}
        <section className="bg-white card p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-center text-gray-400 mb-6">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Story 1 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
              <img
                src={ac1}
                alt="Success Story 1"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-700">Medical Support for Anna</h3>
              <p className="text-gray-600">$10,000 raised</p>
              <p className="text-gray-600 mt-2">
                Anna’s medical treatment was fully funded by over 200 supporters within 2 weeks!
              </p>
            </div>
      
            {/* Story 2 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
              <img
                src={ac2}
                alt="Success Story 2"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-700">Startup Funding for John</h3>
              <p className="text-gray-600">$25,000 raised</p>
              <p className="text-gray-600 mt-2">
                John launched his dream startup with the support of generous contributors!
              </p>
            </div>
      
            {/* Story 3 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
              <img
                src={ac3}
                alt="Success Story 3"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-700">Education for Sara</h3>
              <p className="text-gray-600">$5,000 raised</p>
              <p className="text-gray-600 mt-2">
                Sara’s education was made possible through contributions from kind individuals.
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600">
              See More Success Stories
            </button>
          </div>
        </section>
      </div>
      
    );
};

export default ExtraSection;