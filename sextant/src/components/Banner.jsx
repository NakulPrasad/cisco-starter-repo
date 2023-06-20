import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 mb-3 fw-bold text-body-emphasis">Sextant </h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Sextant is a specialized platform for field technicians, offering a
            concise and user-friendly dashboard. It provides essential
            networking metrics such as IP addresses and latency information,
            helping technicians deploy and troubleshoot networking hardware
            effectively.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
