import React from "react";

const sizeClasses = {
  txtInterRegular12: "font-inter font-normal",
  txtInterBold32: "font-bold font-inter",
  txtInterSemiBold16: "font-inter font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
