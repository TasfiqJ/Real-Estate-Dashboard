import React from "react";

const sizeClasses = {
  txtPoppinsMedium9: "font-medium font-poppins",
  txtPoppinsMedium14: "font-medium font-poppins",
  txtPoppinsMedium32: "font-medium font-poppins",
  txtPoppinsMedium10: "font-medium font-poppins",
  txtInterExtraBold20: "font-extrabold font-inter",
  txtInterMedium16: "font-inter font-medium",
  txtInterExtraBold60: "font-extrabold font-inter",
  txtPoppinsBold13: "font-bold font-poppins",
  txtPoppinsMedium16: "font-medium font-poppins",
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
