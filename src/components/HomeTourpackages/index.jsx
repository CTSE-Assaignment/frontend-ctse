import React from "react";
import { Text, Heading, Img } from "./..";

export default function HomeTourpackages({
  image = "images/img_rectangle_16_404x330.png",
  place = "Polonnaruwa",
  from = "from",
  colombofort = "Colombo Fort",
  weekday = "MONDAY",
  badullaisa = "The Polonnaruwa legacy may have lasted for only two centuries ...",
  ...props
}) {
  return (
    <div {...props}>
      <Img src={image} alt="image" className="h-[404px] w-full rounded-[24px] object-cover md:h-auto" />
      <div className="flex flex-col items-start gap-[11px] self-stretch">
        <Heading size="lg" as="h1" className="text-center">
          {place}
        </Heading>
        <div className="flex flex-wrap items-start gap-2.5">
          <Heading as="h2" className="mt-[3px] !text-blue_gray-900_cc">
            {from}
          </Heading>
          <Heading size="lg" as="h3" className="!font-extrabold !text-orange-600">
            {colombofort}
          </Heading>
        </div>
        <div className="flex items-center gap-1.5">
          <Img src="images/img_calendar_orange_600_24x24.svg" alt="calendar_one" className="h-[24px] w-[24px]" />
          <Heading size="xs" as="h2" className="text-center !text-orange-600">
            {weekday}
          </Heading>
        </div>
        <Text size="s" as="p" className="leading-[26px] !text-blue_gray-900">
          {badullaisa}
        </Text>
      </div>
    </div>
  );
}
