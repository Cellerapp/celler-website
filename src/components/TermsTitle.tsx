import React from "react";

const TermsTitle: React.FC<{
  titles: string[];
  activeTitle: string;
}> = ({ titles, activeTitle }) => {
  const removeNumberFromTitle = (title: string) => {
    // Remove leading numbers and periods (e.g., "1.", "2.", etc.)
    return title.replace(/^\d+\.\s*/, "");
  };

  return (
    <div className="flex flex-col gap-4">
      <h4 className={"text-white text-[15px] font-bold"}>On this page</h4>
      {titles.map((title, index) => {
        const cleanedTitle = removeNumberFromTitle(title);

        return (
          <h4
            key={index}
            className={` ${
              cleanedTitle === removeNumberFromTitle(activeTitle)
                ? "text-blue-500 font-bold text-[15px]"
                : "text-white text-[15px]"
            }`}
          >
            {cleanedTitle}
          </h4>
        );
      })}
    </div>
  );
};

export default TermsTitle;
