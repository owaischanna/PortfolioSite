import React from 'react';
import CheckOut from '../../assets/Check.jpg';
import Check from '../../assets/check2.png';

const OverHaul = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 bg-white">
      <div className="text-center p-6 w-full max-w-4xl">
        {/* Signature Image */}
        <img
          src="https://images.squarespace-cdn.com/content/v1/59d3e6cef09ca42ec71380db/1590717144675-UFF10TADHHLVSQQNQ7Y7/asset-signature.png?format=750w"
          alt="Signature"
          className="w-auto h-20 mb-10 mx-auto"
        />

        {/* Increased space between heading and justified text */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-light mb-8 text-gray-700  text-justify">
            Leading six teams to rebuild how all revenue flows into Airbnb
          </h1>

          {/* Increased font size and line height for better spacing */}
          <p className="  text-xl leading-[2rem] text-gray-600 mb-12 text-justify">
            Multiple teams added features to Airbnb’s checkout flow for nearly ten years. Each team
            optimized for their own goals, leading to a checkout experience that was long, challenging,
            and frustrating for Guests. For six months I led an effort to improve the checkout flow,
            achieving results beyond what the company thought was possible.
          </p>
        </div>

        {/* Increased image size more */}
        <div>
          <img
            src={CheckOut}
            alt="Phone with Airbnb app"
            className="rounded-lg shadow-lg mx-auto w-full h-full max-w-6xl"
          />
        </div>
        <div className="text-center mt-20 mb-16">
        <h2 className="text-5xl  mb-4 text-gray-600">Challenges </h2>
      </div>

      <div className="mb-12">
          <h3 className="text-3xl  font-light mb-8 text-gray-700 leading-snug text-justify">
          Misaligned incentives
          </h3>

          {/* Increased font size and line height for better spacing */}
          <p className="  text-xl leading-[2rem] text-gray-600 mb-12 text-justify" >
  Six teams owned pages and components throughout the checkout flow. Each team worked independently, focused usually on smaller iterative tests that more easily hit metrics goals. There wasn’t much motivation or ability to fix the major tech and UX issues that spanned the entire checkout experience. Making significant improvements would require every team to work together in lockstep towards a shared vision—something we hadn’t done before.
</p>

        </div>
        <div>
          <img
            src={Check}
            alt="Phone with Airbnb app"
            className="rounded-lg shadow-lg mx-auto w-full max-w-6xl"
          />
        </div>
        <p className="   leading-[2rem] text-gray-600 mb-12 text-justify" >
        The original checkout flow was long, duplicative, had poor visual design, and was inconsistent between platforms
</p>


      </div>
      
    </section>
  );
};

export default OverHaul;
