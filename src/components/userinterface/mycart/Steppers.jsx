import React from "react";

const Steppers = ({
  steps = [],
  activeStep = 0,
  width = "80%",
  bgColor = "#e5f1f7",
  activeColor = "#0d6efd",
  inactiveColor = "#adb5bd"
}) => {
  return (
    <div
      className="mx-auto mt-4 p-3 rounded-pill"
      style={{ background: bgColor, width }}
    >
      <div className="d-flex justify-content-between align-items-center position-relative">

        {/* Line */}
        <div
          className="position-absolute top-50 start-0 w-100"
          style={{
            height: 2,
            background: "#cbddea",
            zIndex: 0
          }}
        />

        {steps.map((label, index) => (
          <div
            key={index}
            className="d-flex flex-column align-items-center position-relative"
            style={{ zIndex: 1 }}
          >
            {/* Step Circle */}
            <div
              className="rounded-circle d-flex justify-content-center align-items-center"
              style={{
                width: 30,
                height: 30,
                background:
                  index <= activeStep ? activeColor : inactiveColor,
                color: "#fff",
                fontSize: 14,
                fontWeight: 600
              }}
            >
              {index + 1}
            </div>

            {/* Label */}
            <div
              className="mt-2 text-center"
              style={{
                fontSize: 12,
                fontWeight: 600,
                whiteSpace: "nowrap"
              }}
            >
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steppers;
