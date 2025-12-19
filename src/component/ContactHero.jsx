import React from "react";

const ContactHero = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <p className="text-sm font-semibold text-blue-600 uppercase mb-3">
            Contact Us
          </p>

          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
            AIA is India’s Leading Institute for <br />
            <span className="text-blue-600">CFE, CIA & CAMS</span> Prep Courses
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Discover How AIA Can <br />
            Transform Your Career Growth
          </h2>

          <p className="text-gray-600 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. AIA helps
            professionals achieve global certifications with expert-led training
            and proven results.
          </p>
        </div>

        {/* Right Side – Demo Form Placeholder */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-xl font-semibold mb-6 text-center">
            Book a Free Demo
          </h3>

          {/* Form Placeholder */}
          <div className="space-y-4">
            <div className="h-12 bg-gray-100 rounded-lg"></div>
            <div className="h-12 bg-gray-100 rounded-lg"></div>
            <div className="h-12 bg-gray-100 rounded-lg"></div>
            <div className="h-12 bg-gray-100 rounded-lg"></div>

            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
