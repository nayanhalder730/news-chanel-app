import React from "react";
import Image from "next/image";
import Link from "next/link";

interface IBodyBlock {
  type: "text" | "image" | "subheading";
  text?: string;
  url?: string;
  caption?: string;
  altText?: string;
}

const Page = async ({ params }: { params: Promise<{ news: string }> }) => {
  const { news } = await params;

  const res = await fetch(`https://news-api-v2.vercel.app/api/article/${news}`, {
    next: { revalidate: 3600 },
  });
  const json = await res.json();
  const article = json.data;

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto py-16 text-center text-gray-500">
        সংবাদটি পাওয়া যায়নি!
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50/50 py-10">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-gray-100">
        
        {/* Top Header & Back Button */}
        <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-4">
          <Link
            href="/"
            className="text-xs font-semibold text-red-600 hover:underline flex items-center gap-1"
          >
            ← হোমে ফিরে যান
          </Link>
          <span className="text-xs text-gray-400 font-medium">
            সূত্র: <strong className="text-gray-700">{article.source}</strong>
          </span>
        </div>

        {/* Topics / Tags */}
        {article.topics && (
          <div className="flex flex-wrap gap-2 mb-4">
            {article.topics.map((topic: { id: string; name: string }) => (
              <span
                key={topic.id}
                className="text-xs bg-red-50 text-red-600 px-2.5 py-1 rounded-md font-medium"
              >
                {topic.name}
              </span>
            ))}
          </div>
        )}

        {/* Article Title */}
        <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900 leading-snug mb-4">
          {article.title}
        </h1>

        {/* Byline & Date */}
        <div className="flex items-center text-xs text-gray-500 space-x-3 mb-8 pb-4 border-b border-gray-100">
          {article.byline?.[0] && (
            <span className="font-semibold text-gray-700">
              {article.byline[0].name} ({article.byline[0].role})
            </span>
          )}
          <span>•</span>
          <span>
            {new Date(article.firstPublished).toLocaleDateString("bn-BD", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>

        {/* Dynamic Article Body (এখানে সব Text ও Image ধারাবাহিকভাবে রেন্ডার হবে) */}
        <div className="space-y-6 text-gray-800 text-lg leading-relaxed">
          {article.body?.map((block: IBodyBlock, index: number) => {
            // Text Block
            if (block.type === "text" && block.text) {
              return (
                <p key={index} className="text-gray-800 whitespace-pre-line">
                  {block.text}
                </p>
              );
            }

            // Subheading Block
            if (block.type === "subheading" && block.text) {
              return (
                <h2
                  key={index}
                  className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 mb-2 pt-4 border-t border-gray-100"
                >
                  {block.text}
                </h2>
              );
            }

            // Image Block with Captions
            if (block.type === "image" && block.url) {
              return (
                <figure key={index} className="my-6">
                  <div className="relative w-full h-[280px] sm:h-[450px] rounded-xl overflow-hidden bg-gray-100">
                    <Image
                      src={block.url}
                      alt={block.altText || article.title}
                      fill
                      priority={index === 0} // ১ম ছবিতে ফাস্ট লোড হবে
                      className="object-cover"
                    />
                  </div>
                  {block.caption && (
                    <figcaption className="text-xs text-gray-500 mt-2 text-center italic">
                      {block.caption}
                    </figcaption>
                  )}
                </figure>
              );
            }

            return null;
          })}
        </div>

      </article>
    </main>
  );
};

export default Page;