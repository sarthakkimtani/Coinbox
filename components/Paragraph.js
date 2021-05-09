import { useState } from "react";

export default function Paragraph({ children }) {
  const [readMore, setReadMore] = useState(true);
  const toggleReadMore = () => {
    setReadMore(!readMore);
  };
  return (
    <p>
      {readMore ? children.slice(0, 250) : children}
      <span onClick={toggleReadMore}>
        {readMore ? "...Read More" : " Show Less"}
      </span>
    </p>
  );
}
