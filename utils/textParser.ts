import { marked } from "marked";

export const richTextReducer = (rawRichText) => {
  const parsedRichText = marked.parse(rawRichText);
  return parsedRichText;
};
