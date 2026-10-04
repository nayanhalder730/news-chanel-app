import React from "react";
import MyComponentt from "react-fast-marquee";
import Marquee from "react-fast-marquee";
export interface IHeadLineData {
  id: string;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
  type: string;
  isLive: boolean;
  firstPublished: string;
  lastPublished: string;
  source: string;
}

const headlinedata = async () => {
  const response = await fetch(
    "https://news-api-v2.vercel.app/api/news?limit=10",
  );
  const data = await response.json();
  return data.data;
};

const HeadLine = async () => {
  const data = await headlinedata();

  return (
    <div className="bg-red-200 py-2 px-4 shadow-md space-x-2">
      <div className="max-w-7xl mx-auto flex items-center space-x-2">
        <div className="font-bold bg-red-400 text-white py-1 px-3 rounded">সর্বশেষ</div>
        <Marquee speed={90}>
          {data.map((item: IHeadLineData) => (
            <span key={item.id}>
              <strong> ● </strong>
              <span className=""> {item.title} </span>
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default HeadLine;
