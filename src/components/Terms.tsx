import { termsContent } from "@/constants";
import { SectionContent } from "@/types/termsType";
import React from "react";

const Terms = () => {
  return (
    <div className="w-full">
      {termsContent.map((section: SectionContent, index: number) => (
        <div key={index} className="w-full mt-8">
          <h4 className="text-[18px] md:text-[28px] font-bold">
            {section.title}
          </h4>
          {section.content.map((item, idx) =>
            typeof item === "string" ? (
              <p
                key={idx}
                className="text-[14px] mt-2 lgss:mt-[16px] leading-[30px] tracking-wide"
              >
                {item}
              </p>
            ) : (
              <div key={idx} className="mt-4">
                {item.subTitle && (
                  <h5 className="font-semibold">{item.subTitle}</h5>
                )}
                <p className="text-[14px] mt-2 lgss:mt-[16px] leading-[30px] tracking-wide">
                  {item.text}
                </p>
                {item.bulletPoints && (
                  <ul className="list-disc ml-6 mt-2">
                    {item.bulletPoints.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            )
          )}
        </div>
      ))}
    </div>
  );
};

export default Terms;
