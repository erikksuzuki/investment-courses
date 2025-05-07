"use client";

import { Star } from "lucide-react";

interface CourseCardProps {
  title: string;
  instructor: string;
  price: string;
  description: string;
  rating: number;
  reviews: number;
  enrollments: string;
  image: string;
  linkUrl?: string;
}

const CourseCard = ({
  title,
  instructor,
  price,
  description,
  rating,
  reviews,
  enrollments,
  image,
  linkUrl = "https://chat.whatsapp.com/EYts0r8s1Y2DJ1GS6gHG28",
}: CourseCardProps) => {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-lg bg-gradient-to-br from-rose-400 to-rose-600 text-white shadow-lg">
      {/* Course label */}
      <div className="p-4 pb-0">
        <span className="text-xs font-medium uppercase tracking-wider opacity-90">
          Course
        </span>
      </div>

      {/* Course title and instructor */}
      <div className="px-4 pb-4 min-h-[200px] relative overflow-hidden">
        <img src={image} className="w-[170px] absolute right-0 top-[40px]" />
        <h2 className="text-2xl font-bold leading-tight">{title}</h2>
        <div className="mt-4 flex items-center">
          <span className="text-opacity-90">—</span>
          <span className="ml-2 text-sm font-medium uppercase">
            {instructor}
          </span>
        </div>
      </div>

      {/* Dark section with details */}
      <div className="bg-gray-900 p-4">
        <div className="mb-2 text-lg font-bold">{price}</div>
        <div className="mb-3 text-sm">{description}</div>

        {/* Rating */}
        <div className="mb-2 flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={`mr-1 ${
                i < Math.floor(rating)
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-400"
              }`}
            />
          ))}
          <span className="ml-1 text-sm">({reviews})</span>
        </div>

        {/* Enrollments */}
        <div className="mb-4 text-xs text-gray-400">
          {enrollments} Enrollments
        </div>

        {/* CTA Button */}
        <button
          onClick={() => {
            window.open(linkUrl, "_blank");
          }}
          className="cursor-pointer w-full rounded border border-gray-700 bg-gray-800 py-2 text-center text-sm font-medium transition-colors hover:bg-gray-700"
        >
          Go to Course
        </button>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <ol className="list-inside list-decimal text-left font-[family-name:var(--font-geist-mono)]">
          <h1 className="md:text-[32px] text-[32px] font-bold leading-[1.1] mb-3">
            Unlock the Secrets of the Indian Stock Market – Absolutely FREE!
          </h1>
          <h2 className="md:text-[16px] text-[16px] font-semibold mb-10">
            Join thousands of smart investors learning how to grow their wealth
            with expert guidance, market insights, and proven strategies.
          </h2>
          <li className="tracking-[-.01em]">
            Tired of guessing where the market is headed? Confused by endless
            tips, jargon, and noise?
          </li>
          <li className="tracking-[-.01em]">
            We simplify stock market education for YOU – whether you&apos;re a
            complete beginner or someone looking to sharpen your edge.
          </li>
          <li className="tracking-[-.01em]">
            When you Join Now, you&apos;ll get:
          </li>
          <li className="tracking-[-.01em]">
            Free Daily Market Insights tailored to Indian stocks
          </li>
          <li className="tracking-[-.01em]">
            Easy-to-Understand Lessons on trading, investing, and strategy
          </li>
          <li className="tracking-[-.01em]">
            Exclusive Tips from market experts
          </li>
          <li className="tracking-[-.01em]">
            Live Q&A Sessions to get your doubts cleared
          </li>
          <li className="tracking-[-.01em]">
            Real-time Guidance during market hours
          </li>
          <li className="tracking-[-.01em]">
            No fees. No catch. Just pure, powerful stock market knowledge.
          </li>
          <li className="tracking-[-.01em]">
            Don&apos;t miss your chance to level up your financial game.
          </li>
          <li className="tracking-[-.01em]">
            [Join Now] – It&apos;s free, forever.
          </li>
        </ol>

        <div>
          <button
            onClick={() => {
              window.open(
                "https://chat.whatsapp.com/EYts0r8s1Y2DJ1GS6gHG28",
                "_blank"
              );
            }}
            className="cursor-pointer border border-white rounded-md w-full text-[20px] px-4 py-3 hover:bg-[rgba(255,255,255,0.1)]"
          >
            Join Us Now
          </button>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <CourseCard
            title="Mastering the Indian Stock Market"
            instructor="Aarav Mehta"
            price="₹0"
            description="Learn the ins and outs of the Indian stock market with our comprehensive course."
            rating={4.5}
            reviews={120}
            enrollments="1,500+"
            image="/indianguy.png"
          />

          <CourseCard
            title="Basics of Stock Trading in India"
            instructor="Isha Reddy"
            price="₹0"
            description="Get a beginner-friendly introduction to trading on the Indian stock exchanges."
            rating={4.5}
            reviews={120}
            enrollments="1,500+"
            image="/indianlass.png"
          />
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
