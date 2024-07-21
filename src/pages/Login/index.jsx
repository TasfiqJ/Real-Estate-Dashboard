import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";
import LogInColumn from "components/LogInColumn";

const LoginPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-poppins sm:gap-10 md:gap-10 items-center justify-between mx-auto md:pl-10 sm:pl-5 pl-[175px] w-full">
        <div className="flex flex-col h-[583px] md:h-auto items-start justify-start w-auto sm:w-full">
          <div className="flex flex-col items-start justify-start w-full">
            <div className="flex flex-col h-[53px] md:h-auto items-start justify-start w-auto">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-auto"
                size="txtPoppinsMedium32"
              >
                Welcome back!
              </Text>
            </div>
            <Text
              className="mt-0.5 text-base text-black-900"
              size="txtPoppinsMedium16"
            >
              Enter your Credentials to access your account
            </Text>
            <LogInColumn
              className="flex flex-col h-[58px] md:h-auto items-start justify-start mt-[59px] w-[404px] sm:w-full"
              password="Email address"
            />
            <LogInColumn className="flex flex-col h-[58px] md:h-auto items-start justify-start mt-5 w-[404px] sm:w-full" />
            <div className="flex flex-row gap-1.5 items-start justify-start mt-[21px] w-[30%] md:w-full">
              <div className="border border-black-900 border-solid h-[9px] rounded-sm w-[9px]"></div>
              <Text
                className="text-[9px] text-black-900"
                size="txtPoppinsMedium9"
              >
                Remember for 30 days
              </Text>
            </div>
            <div className="h-[35px] md:h-[52px] mt-5 pb-[3px] relative w-full">
              <Img
                className="h-8 mx-auto w-[404px]"
                src="images/img_frame55.svg"
                alt="frameFiftyFive"
              />
              <a
                href="javascript:"
                className="absolute h-max inset-[0] justify-center m-auto text-[13px] text-white-A700 w-max"
              >
                 <Link size="txtPoppinsBold13"
                 to="/desktopone">Login</Link>
              </a>
            </div>
            <div className="md:h-12 h-3.5 mt-[34px] relative w-full">
              <Line className="absolute bg-gray-100 bottom-[21%] h-0.5 inset-x-[0] mx-auto w-full" />
              <Text
                className="absolute bg-white-A700 h-full inset-[0] justify-center m-auto px-1 text-[9px] text-black-900 w-max"
                size="txtPoppinsMedium9"
              >
                Or
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row gap-[23px] items-center justify-start mt-[89px] w-auto sm:w-full">
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[190px]"
                leftIcon={
                  <Img
                    className="h-6"
                    src="images/img_icons8google_1.svg"
                    alt="icons8-google 1"
                  />
                }
                shape="round"
                color="blue_gray_100"
                size="xs"
                variant="outline"
              >
                <div className="font-medium leading-[normal] text-left text-xs">
                  Sign in with Google
                </div>
              </Button>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[190px]"
                leftIcon={
                  <Img
                    className="h-6"
                    src="images/img_icons8applelogo_1.svg"
                    alt="icons8-apple-logo 1"
                  />
                }
                shape="round"
                color="blue_gray_100"
                size="xs"
                variant="outline"
              >
                <div className="font-medium leading-[normal] text-left text-xs">
                  Sign in with Apple
                </div>
              </Button>
            </div>
            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[93px] mt-[23px]">
              <Text
                className="text-black-900 text-sm"
                size="txtPoppinsMedium14"
              >
                <span className="text-black-900 font-poppins text-left font-medium">
                  Don’t h
                </span>
                <span className="text-black-900 font-poppins text-left font-medium">
                  ave an account?{" "}
                </span>
                <span className="text-indigo-A700 font-poppins text-left font-medium">
                  Sign Up
                </span>
              </Text>
            </div>
          </div>
        </div>
        <Img
          className="h-[1042px] md:h-auto object-cover"
          src="images/img_8tipsforrent_1042x738.png"
          alt="8tipsforrent"
        />
      </div>
    </>
  );
};

export default LoginPage;
