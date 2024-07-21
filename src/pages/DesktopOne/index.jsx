import React from "react";

import { Button, Img, Text } from "components";

const DesktopOnePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto pb-[39px] w-full">
        <header className="bg-gray-50 flex md:flex-col md:gap-5 h-20 md:h-auto items-center justify-center md:px-5 px-6 shadow-bs w-full">
          <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 h-20 md:h-auto items-start justify-center w-full">
            <div className="flex flex-1 flex-col items-start justify-start w-full">
              <div className="flex flex-col h-20 md:h-auto items-center justify-start p-4 w-full">
                <div className="flex flex-col items-start justify-start w-auto">
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="text-base text-blue_gray-500 w-auto"
                      size="txtInterMedium16"
                    >
                      About
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-start justify-start w-full">
              <div className="flex flex-col h-20 md:h-auto items-start justify-start w-full">
                <div className="flex flex-col h-20 md:h-auto items-center justify-start p-4 w-full">
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-base text-blue_gray-500 w-auto"
                        size="txtInterMedium16"
                      >
                        Questions
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-start justify-start w-full">
              <div className="flex flex-col h-20 md:h-auto items-center justify-start p-4 w-full">
                <div className="flex flex-col items-start justify-start w-auto">
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="text-base text-blue_gray-500 w-auto"
                      size="txtInterMedium16"
                    >
                      Insights
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-start justify-start w-full">
              <div className="flex flex-col h-20 md:h-auto items-start justify-start w-full">
                <div className="flex flex-col h-20 md:h-auto items-center justify-start p-4 w-full">
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-base text-blue_gray-500 w-auto"
                        size="txtInterMedium16"
                      >
                        Locations
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-4 items-center justify-start w-auto">
            <Button
              className="cursor-pointer min-w-[115px] rounded-lg text-base text-center"
              shape="round"
              color="light_green_900"
              size="sm"
              variant="fill"
            >
              Landlord
            </Button>
            <Button
              className="cursor-pointer min-w-[100px] rounded-lg text-base text-center"
              shape="round"
              color="light_green_900"
              size="sm"
              variant="outline"
            >
              Tenant
            </Button>
          </div>
        </header>
        <div className="h-[690px] md:h-[777px] max-w-[1080px] mt-[87px] mx-auto md:px-5 relative w-full">
          <Img
            className="h-[690px] m-auto object-cover rounded-[27px] w-full"
            src="images/img_rectangle9.png"
            alt="rectangleNine"
          />
          <div className="absolute bottom-[31%] flex flex-col gap-10 inset-x-[0] justify-start mx-auto w-[84%]">
            <Text
              className="md:text-5xl text-6xl text-center text-white-A700"
              size="txtInterExtraBold60"
            >
              {" "}
              123 MainStreet, Anytown, USA
            </Text>
            <div className="flex flex-row gap-7 items-center justify-start md:ml-[0] ml-[283px] w-[34%] md:w-full">
              <Img
                className="h-10 md:h-auto rounded-[50%] w-[15%]"
                src="images/img_unknown1.png"
                alt="unknownOne"
              />
              <Text
                className="text-center text-white-A700 text-xl"
                size="txtInterExtraBold20"
              >
                5 people are interested
              </Text>
            </div>
          </div>
        </div>
        <Button
          className="!text-white-A700 cursor-pointer font-medium min-w-[353px] mt-[51px] rounded-[15px] shadow-bs1 text-center text-xl"
          color="light_green_900"
          size="md"
          variant="fill"
        >
          Add New House +
        </Button>
      </div>
    </>
  );
};

export default DesktopOnePage;
