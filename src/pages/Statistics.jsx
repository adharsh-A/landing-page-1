import React from "react"

const Statistics = (props) => {
  return (
      <div className="relative flex md:flex-row flex-col justify-between md:px-28 px-8 lg:h-32 bg-white/10 font-extralight tracking-wider  items-center backdrop-blur-lg z-20 shadow-2xl">
          <div className="value">
              <h2>
                  5M+
              </h2>
              <p>Customers</p>
          </div>
          <div className="value">
              <h2>
                  450M+
              </h2>
              <p>Coverage</p>
          </div>
          <div className="value">
              <h2>
                  22%
              </h2>
              <p>Earnings</p>
          </div>
          <div className="value">
              <h2>
                  8.03%
              </h2>
              <p>Interest</p>
          </div>
      
    </div>
  )
};

export default Statistics;
