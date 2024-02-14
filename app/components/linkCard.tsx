import React from "react";
import Link from "next/link";

interface LinkProps {
  title: string;
  url: string;
  // thumbnail: string;
}

const LinkCard: React.FC<LinkProps> = ({ title, url }) => {
  return (
    <Link
      href={url}
      target="_blank"
      className="mt-3 flex h-8 w-[80vw] items-center justify-center rounded-md bg-main-purple1 py-7 md:h-20 md:w-[30vw]"
    >
      {title}
    </Link>
  );
};

export default LinkCard;
