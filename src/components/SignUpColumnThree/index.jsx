import React from "react";

import { Button, Img, Input, Line, Text } from "components";

const SignUpColumnThree = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col gap-[23px] items-center justify-start w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-col h-[52px] md:h-auto items-start justify-start w-auto">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-auto"
                  size="txtPoppinsMedium32"
                >
                  {props?.getstartednowOne}
                </Text>
              </div>
              <div className="flex flex-col h-[58px] md:h-auto items-start justify-start mt-[58px] w-[404px] md:w-full">
                <div className="flex flex-col items-start justify-start w-auto">
                  <Text
                    className="text-black-900 text-sm w-auto"
                    size="txtPoppinsMedium14"
                  >
                    {props?.name}
                  </Text>
                </div>
                <Input
                  name="frameFiftyThree"
                  placeholder="Enter your name"
                  className="!placeholder:text-blue_gray-100 !text-blue_gray-100 font-medium font-poppins leading-[normal] md:h-auto p-0 sm:h-auto text-[10px] text-left w-full"
                  wrapClassName="w-full"
                  shape="round"
                  color="blue_gray_100"
                  size="sm"
                  variant="outline"
                ></Input>
              </div>
              <div className="flex flex-col h-[58px] md:h-auto items-start justify-start mt-[19px] w-[404px] md:w-full">
                <div className="flex flex-col items-start justify-start w-auto">
                  <Text
                    className="text-black-900 text-sm w-auto"
                    size="txtPoppinsMedium14"
                  >
                    {props?.nameOne}
                  </Text>
                </div>
                <Input
                  name="frameFiftyThree_One"
                  placeholder="Enter your email"
                  className="!placeholder:text-blue_gray-100 !text-blue_gray-100 font-medium font-poppins leading-[normal] md:h-auto p-0 sm:h-auto text-[10px] text-left w-full"
                  wrapClassName="w-full"
                  shape="round"
                  color="blue_gray_100"
                  size="sm"
                  variant="outline"
                ></Input>
              </div>
              <div className="flex flex-col h-[58px] md:h-auto items-start justify-start mt-[19px] w-[404px] md:w-full">
                <div className="flex flex-col items-start justify-start w-auto">
                  <Text
                    className="text-black-900 text-sm w-auto"
                    size="txtPoppinsMedium14"
                  >
                    {props?.nameThree}
                  </Text>
                </div>
                <Input
                  name="frameFiftyThree_Two"
                  placeholder="Name"
                  className="!placeholder:text-blue_gray-100 !text-blue_gray-100 font-medium font-poppins leading-[normal] md:h-auto p-0 sm:h-auto text-[10px] text-left w-full"
                  wrapClassName="w-full"
                  shape="round"
                  color="blue_gray_100"
                  size="xs"
                  variant="outline"
                ></Input>
              </div>
              <div className="flex flex-row gap-1.5 items-start justify-start mt-[21px] w-[36%] md:w-full">
                <div className="border border-black-900 border-solid h-[9px] rounded-sm w-[9px]"></div>
                {props?.termstext}
              </div>
              <div className="bg-gray-200 h-[35px] md:h-[62px] mt-[30px] pb-[3px] relative w-full">
                <Img
                  className="h-8 mx-auto w-[404px]"
                  src="images/img_frame55.svg"
                  alt="frameFiftyFive"
                />
                <Text
                  className="absolute h-max inset-[0] justify-center m-auto text-[13px] text-white-A700 w-max"
                  size="txtPoppinsBold13"
                >
                  {props?.signupbutton}
                </Text>
              </div>
              <div className="h-[15px] md:h-[73px] md:ml-[0] ml-[3px] mt-[59px] relative w-full">
                <Line className="absolute bg-gray-100 bottom-[20%] h-0.5 inset-x-[0] mx-auto w-full" />
                <Text
                  className="absolute bg-white-A700 inset-x-[0] justify-center mx-auto px-1 text-[9px] text-black-900 top-[0] w-max"
                  size="txtPoppinsMedium9"
                >
                  {props?.framesixty}
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row gap-[23px] items-start justify-between mt-[60px] w-full">
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[190px] sm:mt-0 mt-0.5"
                  leftIcon={
                    <Img
                      className="h-6 mr-2.5"
                      src="images/img_icons8google_1.svg"
                      alt="icons8-google 1"
                    />
                  }
                  shape="round"
                  color="blue_gray_100"
                  size="xs"
                  variant="outline"
                >
                  <div className="font-medium font-poppins leading-[normal] text-left text-xs">
                    {props?.googlebutton}
                  </div>
                </Button>
                <Button
                  className="cursor-pointer flex items-center justify-center mb-0.5 min-w-[190px]"
                  leftIcon={
                    <Img
                      className="h-6 mr-2.5"
                      src="images/img_icons8applelogo_1.svg"
                      alt="icons8-apple-logo 1"
                    />
                  }
                  shape="round"
                  color="blue_gray_100"
                  size="xs"
                  variant="outline"
                >
                  <div className="font-medium font-poppins leading-[normal] text-left text-xs">
                    {props?.applebutton}
                  </div>
                </Button>
              </div>
            </div>
            <div className="flex flex-col h-[22px] md:h-auto items-start justify-start w-auto">
              <div className="flex flex-col items-center justify-start w-full">
                {props?.signintext}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

SignUpColumnThree.defaultProps = {
  getstartednowOne: "Get Started Now",
  name: "Name",
  nameOne: "Email address",
  nameThree: "Password",
  termstext: (
    <Text className="text-[9px] text-black-900" size="txtPoppinsMedium9">
      <span className="text-black-900 font-poppins text-left font-medium">
        I agree to the{" "}
      </span>
      <a
        href="javascript:"
        className="text-black-900 font-poppins text-left font-medium underline"
      >
        terms & policy
      </a>
    </Text>
  ),
  signupbutton: "Signup",
  framesixty: "Or",
  googlebutton: "Sign in with Google",
  applebutton: "Sign in with Apple",
  signintext: (
    <Text className="text-black-900 text-sm" size="txtPoppinsMedium14">
      <span className="text-black-900 font-poppins text-left font-medium">
        Have an account?{" "}
      </span>
      <span className="text-indigo-A700 font-poppins text-left font-medium">
        Sign In
      </span>
    </Text>
  ),
};

export default SignUpColumnThree;
