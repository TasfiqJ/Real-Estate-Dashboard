import React from "react";

import { Input, Text } from "components";

const LogInColumn = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-row items-start justify-between w-full">
            <div className="flex flex-col items-start justify-start w-auto">
              <Text
                className="text-black-900 text-sm w-auto"
                size="txtPoppinsMedium14"
              >
                {props?.password}
              </Text>
            </div>
            {!!props?.forgotpassword ? (
              <Text
                className="text-[10px] text-indigo-900"
                size="txtPoppinsMedium10"
              >
                {props?.forgotpassword}
              </Text>
            ) : null}
          </div>
          <Input
            name="frameFiftyThree_One"
            placeholder="Name"
            className="!placeholder:text-blue_gray-100 !text-blue_gray-100 font-medium font-poppins leading-[normal] md:h-auto p-0 sm:h-auto text-[10px] text-left w-full"
            wrapClassName="w-full"
            shape="round"
            color="blue_gray_100"
            size="xs"
            variant="outline"
          ></Input>
        </div>
      </div>
    </>
  );
};

LogInColumn.defaultProps = { password: "Password" };

export default LogInColumn;
