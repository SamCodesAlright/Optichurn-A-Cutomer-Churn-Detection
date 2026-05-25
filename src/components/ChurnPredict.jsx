import React from "react";
import styles from "../style";

const ChurnPredict = () => {
  const labelsAndPlaceholders = [
    { label: "User Watch Time", type: "number", placeholder: "" },
    { label: "No. of Unique Titles", type: "number", placeholder: "" },
    { label: "Watch Frequency", type: "number", placeholder: "" },
    {
      label: "Average Content Ratings",
      type: "number", 
      placeholder: "",
    },
    { label: "Logins Per Month", type: "number", placeholder: "" },
    { label: "Subscription Type", type: "text", placeholder: "" },
    { label: "Billing Cycle", type: "text", placeholder: "" },
    {
      label: "Average GB Used in Month",
      type: "number", 
      placeholder: "",
    },
    { label: "Subscription Tenure", type: "number", placeholder: "" },
    {
      label: "Platform FeedBack Score",
      type: "number", 
      placeholder: "",
    },
    { label: "No. of Buffering", type: "number", placeholder: "" },
    { label: "Age Group", type: "number", placeholder: "" },
  ];

  return (
    <section className="w-full">
      <h1 className={`${styles.heading2} ${styles.flexCenter} mb-12`}>
        Predict The Customer Churn
      </h1>
      <div className={`${styles.flexCenter} relative`}>
        <input
          type="text"
          className="w-[52%] border border-gray-300 rounded-md py-2 px-4 pr-12 focus:outline-none focus:border-blue-700 mr-4 text-xl bg-gray-900 text-white"
          placeholder="Enter Customer ID..."
        />
        <button
          type="button"
          className={`py-3 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none`}
        >
          Display Details
        </button>
      </div>
      <div className={`${styles.flexCenter} ${styles.paddingY} relative`}>
        <div className="w-[80%] max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {labelsAndPlaceholders.map((item, index) => (
            <div key={index} className="mb-4">
              <label className="block text-base mb-1 text-gray-500 font-poppins font-medium text-[16px] text-primary">
                {item.label}
              </label>
              <div className="relative">
                <input
                  type={item.type}
                  className="w-full border border-gray-500 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500 font-poppins font-medium text-[16px] text-primary text-white bg-gray-900"
                  placeholder={item.placeholder}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={`${styles.flexCenter} ${styles.paddingX} relative`}>
        <button
          type="button"
          className={`py-3 px-6 font-poppins font-medium text-[24px] text-primary bg-blue-gradient rounded-[10px] outline-none mr-10`}
        >
          Predict
        </button>
        <label className="block mb-1 text-white font-poppins font-medium text-[32px] text-primary ">
          This customer will <span className="text-gradient">"CHURN"</span>
        </label>
      </div>
    </section>
  );
};

export default ChurnPredict;
