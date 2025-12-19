import React from "react";

const CareerPartner = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Your Career Partner Guiding You From Enrollment to Success
        </h2>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-50 rounded-2xl p-8 text-center shadow-sm">
            <div className="h-12 w-12 bg-gray-200 rounded-full mx-auto mb-4"></div>
            <h3 className="text-lg font-semibold mb-2">Enrollment</h3>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 text-center shadow-sm">
            <div className="h-12 w-12 bg-gray-200 rounded-full mx-auto mb-4"></div>
            <h3 className="text-lg font-semibold mb-2">Training</h3>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 text-center shadow-sm">
            <div className="h-12 w-12 bg-gray-200 rounded-full mx-auto mb-4"></div>
            <h3 className="text-lg font-semibold mb-2">Mentorship</h3>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 text-center shadow-sm">
            <div className="h-12 w-12 bg-gray-200 rounded-full mx-auto mb-4"></div>
            <h3 className="text-lg font-semibold mb-2">Success</h3>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerPartner;
