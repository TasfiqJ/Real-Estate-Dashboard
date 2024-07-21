import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import SignUpColumnThree from "components/SignUpColumnThree";

const SignupPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-poppins sm:gap-10 md:gap-10 items-center justify-between mx-auto md:pl-10 sm:pl-5 pl-[175px] w-full">
        <SignUpColumnThree
          className="flex flex-col gap-2.5 h-[638px] md:h-auto items-start justify-start pb-16 w-auto sm:w-full"
          termstext={
            <Text className="font-medium text-[9px] text-black-900">
              <span className="text-black-900 font-poppins text-left">
                I agree to the{" "}
              </span>
              <a
                href="javascript:"
                className="text-black-900 font-poppins text-left underline"
              >
                terms & policy
              </a>
            </Text>
          }
          signintext={
            <Text className="font-medium text-black-900 text-sm">
              <span className="text-black-900 font-poppins text-left">
                Have an account?{" "}
              </span>
              <span className="text-indigo-A700 font-poppins text-left">
                Sign In
              </span>
            </Text>
          }
        />
        <Img
          className="h-[1042px] md:h-auto object-cover"
          src="images/img_8tipsforrent.png"
          alt="8tipsforrent"
        />
      </div>
    </>
  );
};

export default SignupPage;
