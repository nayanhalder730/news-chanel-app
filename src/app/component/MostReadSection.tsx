import React from "react";

export interface IMostRead {
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
  rank: number;
}

const MostReadSection = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read");
  const data = await res.json();
  const mostReaddata: IMostRead[] = data.data;

  return (
    <div className="flex flex-col gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
      <h1 className="text-xl font-bold text-red-600 border-b border-gray-100 pb-2">
        সর্বাধিক পঠিত
      </h1>

      <div className="flex flex-col gap-3">
        {mostReaddata.map((news: IMostRead, ind: number) => (
          <section key={news.id} className="flex items-center gap-3 group cursor-pointer">
            <span className="flex items-center justify-center min-w-7 h-7 rounded-md bg-red-100 text-red-600 font-bold text-sm group-hover:bg-red-600 group-hover:text-white transition-colors">
              {ind + 1}
            </span>
            <h2 className="text-base  text-gray-800 group-hover:text-red-600 transition-colors line-clamp-2">
              {news.title}
            </h2>
          </section>
        ))}
      </div>
    </div>
  );
};

export default MostReadSection;