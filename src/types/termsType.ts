// Define the types for the content structure
export type SubSectionContent = {
  subTitle?: string; // Subsections may or may not have a subtitle
  text: string;
  bulletPoints?: string[]; // Optional bullet points
};

export type SectionContent = {
  title: string;
  content: (string | SubSectionContent)[]; // Content can either be plain text or a subsection object
};


export type SectionpolContent = {
  title: string;
  content: (string | SubSectionContent)[]; // Content can either be plain text or a subsection object
};