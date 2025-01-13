import { policyContent } from "@/constants";
import { SectionpolContent } from "@/types/termsType";
import React, { useEffect, useRef } from "react";

const Privacy: React.FC<{
  onContentAtTop: (activePrivacyTitle: string) => void;
}> = ({ onContentAtTop }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      let activePrivacyTitle = "";
      const containerRect = containerRef.current?.getBoundingClientRect();

      if (!containerRect || !sectionsRef.current) return;

      sectionsRef.current.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (
          rect.top >= containerRect.top &&
          rect.top <= containerRect.top + 50 // Adjust sensitivity
        ) {
          activePrivacyTitle = section.getAttribute("data-title") || "";
        }
      });

      if (activePrivacyTitle) {
        // Only update if there's a new active title
        onContentAtTop(activePrivacyTitle);
      }
    };

    const container = containerRef.current;
    container?.addEventListener("scroll", handleScroll);
    return () => container?.removeEventListener("scroll", handleScroll);
  }, [onContentAtTop]);

  return (
    <div
      ref={containerRef}
      className="w-full lgss:h-[900px] lgss:overflow-y-auto  "
    >
      {policyContent.map((section: SectionpolContent, index: number) => (
        <div
          key={index}
          ref={(el) => {
            if (el) sectionsRef.current[index] = el;
          }}
          data-title={section.title}
          className="w-full mt-6"
        >
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

export default Privacy;
