import React from "react";
import { convertShortnameToUnicode } from "src/utils/convertShortnameToUnicode";

interface EmojiProps {
  text: string;
}

export const Emoji: React.FC<EmojiProps> = ({ text }) => {
  return (
    <span
      dangerouslySetInnerHTML={{ __html: convertShortnameToUnicode(text) }}
    />
  );
};
