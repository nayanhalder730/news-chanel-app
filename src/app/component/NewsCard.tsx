import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Article } from "../type/type";

interface NewsCardProps {
  news: Article;
}

const NewsCard = ({ news }: NewsCardProps) => {
  return (
    <Link href={`/newses/${news.id}`}>
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow">
        <div>
          {news.imageUrl && (
            <div className="relative w-full h-48">
              <Image
                src={news.imageUrl}
                alt={news.imageAlt || news.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          <div className="p-4">
            <span className="text-xs font-semibold text-red-600 uppercase tracking-wider">
              {news.category}
            </span>

            <h2 className="text-lg font-bold text-gray-900 mt-1 line-clamp-2 hover:text-red-700 transition-colors">
              {news.title}
            </h2>

            <p className="text-gray-600 text-sm mt-2 line-clamp-3">
              {news.description}
            </p>
          </div>
        </div>

        <div className="px-4 pb-4 pt-2 text-xs text-gray-500 border-t border-gray-100 flex justify-between items-center mt-2">
          <span>{news.source}</span>

          <span>
            {new Date(news.firstPublished).toLocaleDateString("bn-BD")}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;