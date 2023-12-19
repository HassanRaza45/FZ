import React from "react";

import { Button, Img, Input, Text } from "components";

const MainPagePage = () => {
  return (
    <>
      <div className="bg-blue_gray-900 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex flex-col gap-[52px] items-center justify-end p-[31px] sm:px-5 w-full">
          <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1200px] mt-[54px] mx-auto md:px-5 w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
              size="txtInterBold32"
            >
              <span className="text-white-A700 font-inter text-left font-bold">
                F
              </span>
              <span className="text-red-A700 font-inter text-left font-bold">
                oo
              </span>
              <span className="text-white-A700 font-inter text-left font-bold">
                dy Z
              </span>
              <span className="text-red-A700_01 font-inter text-left font-bold">
                o
              </span>
              <span className="text-white-A700 font-inter text-left font-bold">
                ne{" "}
              </span>
            </Text>
            <Input
              name="frameOne"
              placeholder="Search Food...."
              className="leading-[normal] p-0 placeholder:text-white-A700 text-base text-left w-full"
              wrapClassName="sm:flex-1 sm:w-full"
            ></Input>
          </div>
          <div className="flex flex-row gap-3.5 items-start justify-start md:px-5 w-auto">
            <Button className="cursor-pointer leading-[normal] min-w-[43px] text-base text-center">
              All
            </Button>
            <Button className="cursor-pointer leading-[normal] min-w-[96px] text-base text-center">
              Breakfast
            </Button>
            <Button className="cursor-pointer leading-[normal] min-w-[71px] text-base text-center">
              Lunch
            </Button>
            <Button className="cursor-pointer leading-[normal] min-w-[74px] text-base text-center">
              Dinner
            </Button>
          </div>
        </div>
        <div className="sm:h-[1519px] h-[785px] md:h-[958px] pt-0.5 md:px-5 relative w-full">
          <Img
            className="h-[783px] m-auto object-cover w-full"
            src="images/img_jimmydeanyn0l.png"
            alt="jimmydeanyn0l"
          />
          <div className="absolute bg-black-900_c1 flex flex-col h-max inset-[0] items-center justify-center m-auto p-16 md:px-10 sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start mb-[289px] w-auto md:w-full">
              <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                <div className="h-[167px] relative w-full">
                  <Img
                    className="h-[167px] m-auto object-cover w-full"
                    src="images/img_card.png"
                    alt="card"
                  />
                  <div className="absolute flex flex-row gap-[17px] inset-x-[0] items-start justify-between mx-auto top-[4%] w-[94%]">
                    <Img
                      className="h-[133px] md:h-auto rounded-[50%] w-[133px]"
                      src="images/img_ellipse1.png"
                      alt="ellipseOne"
                    />
                    <div className="flex flex-col gap-[26px] justify-start mt-[9px]">
                      <div className="flex flex-col gap-2 items-start justify-start w-[168px]">
                        <Text
                          className="text-base text-white-A700 w-auto"
                          size="txtInterSemiBold16"
                        >
                          Boiled Eggs
                        </Text>
                        <Text
                          className="max-w-[168px] md:max-w-full text-white-A700 text-xs"
                          size="txtInterRegular12"
                        >
                          Lorem ipsum dolor sit amet consectetur. Odio elementum
                          in neque cras eget est.{" "}
                        </Text>
                      </div>
                      <Button className="cursor-pointer leading-[normal] min-w-[57px] md:ml-[0] ml-[103px] mr-2 text-center text-sm">
                        $10.00
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="h-[167px] relative w-full">
                  <Img
                    className="h-[167px] m-auto object-cover w-full"
                    src="images/img_card.png"
                    alt="card"
                  />
                  <div className="absolute flex flex-row gap-[17px] inset-x-[0] items-start justify-between mx-auto top-[4%] w-[94%]">
                    <Img
                      className="h-[133px] md:h-auto rounded-[50%] w-[133px]"
                      src="images/img_ellipse1_133x133.png"
                      alt="ellipseOne"
                    />
                    <div className="flex flex-col gap-[26px] justify-start mt-2">
                      <div className="flex flex-col gap-2 items-start justify-start w-[168px]">
                        <Text
                          className="text-base text-white-A700 w-auto"
                          size="txtInterSemiBold16"
                        >
                          RAMEN
                        </Text>
                        <Text
                          className="max-w-[168px] md:max-w-full text-white-A700 text-xs"
                          size="txtInterRegular12"
                        >
                          Lorem ipsum dolor sit amet consectetur. Odio elementum
                          in neque cras eget est.{" "}
                        </Text>
                      </div>
                      <Button className="cursor-pointer leading-[normal] min-w-[59px] md:ml-[0] ml-[103px] mr-1.5 text-center text-sm">
                        $25.00
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="h-[167px] relative w-full">
                  <Img
                    className="h-[167px] m-auto object-cover w-full"
                    src="images/img_card.png"
                    alt="card"
                  />
                  <div className="absolute flex flex-row gap-[17px] inset-x-[0] items-start justify-between mx-auto top-[4%] w-[94%]">
                    <Img
                      className="h-[133px] md:h-auto rounded-[50%] w-[133px]"
                      src="images/img_ellipse1_1.png"
                      alt="ellipseOne"
                    />
                    <div className="flex flex-col gap-[26px] items-end justify-start mt-2">
                      <div className="flex flex-col gap-2 items-start justify-start w-[168px]">
                        <Text
                          className="text-base text-white-A700 w-auto"
                          size="txtInterSemiBold16"
                        >
                          GRILLED CHICKEN
                        </Text>
                        <Text
                          className="max-w-[168px] md:max-w-full text-white-A700 text-xs"
                          size="txtInterRegular12"
                        >
                          Lorem ipsum dolor sit amet consectetur. Odio elementum
                          in neque cras eget est.{" "}
                        </Text>
                      </div>
                      <Button className="cursor-pointer leading-[normal] min-w-[60px] mr-[5px] text-center text-sm">
                        $45.00
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="h-[167px] relative w-full">
                  <Img
                    className="h-[167px] m-auto object-cover w-full"
                    src="images/img_card.png"
                    alt="card"
                  />
                  <div className="absolute flex flex-row gap-4 inset-x-[0] items-start justify-between mx-auto top-[4%] w-[94%]">
                    <Img
                      className="h-[133px] md:h-auto rounded-[50%] w-[133px]"
                      src="images/img_ellipse1_2.png"
                      alt="ellipseOne"
                    />
                    <div className="flex flex-col gap-[26px] justify-start mt-2">
                      <div className="flex flex-col gap-2 items-start justify-start w-[168px]">
                        <Text
                          className="text-base text-white-A700 w-auto"
                          size="txtInterSemiBold16"
                        >
                          CAKE
                        </Text>
                        <Text
                          className="max-w-[168px] md:max-w-full text-white-A700 text-xs"
                          size="txtInterRegular12"
                        >
                          Lorem ipsum dolor sit amet consectetur. Odio elementum
                          in neque cras eget est.{" "}
                        </Text>
                      </div>
                      <Button className="cursor-pointer leading-[normal] min-w-[57px] md:ml-[0] ml-[104px] mr-[7px] text-center text-sm">
                        $18.00
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="h-[167px] relative w-full">
                  <Img
                    className="h-[167px] m-auto object-cover w-full"
                    src="images/img_card.png"
                    alt="card"
                  />
                  <div className="absolute flex flex-row gap-[15px] inset-x-[0] items-start justify-between mx-auto top-[4%] w-[93%]">
                    <Img
                      className="h-[133px] md:h-auto rounded-[50%] w-[133px]"
                      src="images/img_ellipse1_3.png"
                      alt="ellipseOne"
                    />
                    <div className="flex flex-col gap-[26px] items-end justify-start mt-2">
                      <div className="flex flex-col gap-2 items-start justify-start w-[168px]">
                        <Text
                          className="text-base text-white-A700 w-auto"
                          size="txtInterSemiBold16"
                        >
                          BURGER
                        </Text>
                        <Text
                          className="max-w-[168px] md:max-w-full text-white-A700 text-xs"
                          size="txtInterRegular12"
                        >
                          Lorem ipsum dolor sit amet consectetur. Odio elementum
                          in neque cras eget est.{" "}
                        </Text>
                      </div>
                      <Button className="cursor-pointer leading-[normal] min-w-[60px] mr-[3px] text-center text-sm">
                        $23.00
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="h-[167px] relative w-full">
                  <Img
                    className="h-[167px] m-auto object-cover w-full"
                    src="images/img_card.png"
                    alt="card"
                  />
                  <div className="absolute flex flex-row gap-4 inset-x-[0] items-start justify-between mx-auto top-[4%] w-[94%]">
                    <Img
                      className="h-[133px] md:h-auto rounded-[50%] w-[133px]"
                      src="images/img_ellipse1_4.png"
                      alt="ellipseOne"
                    />
                    <div className="flex flex-col gap-[26px] items-end justify-start mt-2">
                      <div className="flex flex-col gap-2 items-start justify-start w-[168px]">
                        <Text
                          className="text-base text-white-A700 w-auto"
                          size="txtInterSemiBold16"
                        >
                          PANCAKE
                        </Text>
                        <Text
                          className="max-w-[168px] md:max-w-full text-white-A700 text-xs"
                          size="txtInterRegular12"
                        >
                          Lorem ipsum dolor sit amet consectetur. Odio elementum
                          in neque cras eget est.{" "}
                        </Text>
                      </div>
                      <Button className="cursor-pointer leading-[normal] min-w-[59px] mr-[5px] text-center text-sm">
                        $25.00
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPagePage;
