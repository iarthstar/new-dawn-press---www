import React from "react";
import { HorizontalRule, Brand, Text, ZStack } from "@/lib/ui";
import { ORG_NAME } from "@/content";
import Link from "next/link";
import { CATEGORIES } from "@/content/common";
import Image from "next/image";

export const Header = () => {
  const Details: React.FC<any> = ({ lineOne, lineTwo }) => (
    <div className="flex flex-col">
      <Text as="span" className="font-semibold">
        {lineOne}
      </Text>
      <Text as="span" className="text-gray-600">
        {lineTwo}
      </Text>
    </div>
  );

  const date = new Date();
  const today = new Intl.DateTimeFormat("en-US", { weekday: "long"}).format(date);
  const dateStr = new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric" }).format(date);
  return (
    <header className="w-full flex flex-col">
      <div className="w-full flex flex-row justify-between items-center py-8">
        <div className="hidden md:flex flex-row gap-x-8">
          <Details lineOne={today} lineTwo={dateStr} />
          <Details lineOne="New Delhi" lineTwo="32C, Cloudy" />
        </div>
        <div className="flex grow flex-col items-center">
          <Brand />
          <Text
            as="span"
            className="uppercase tracking-widest font-bold text-gray-500"
          >
            Voice of Indian Mango Man
          </Text>
        </div>
        <div className="hidden md:flex flex-row gap-x-8">
          <Details lineOne="Monday" lineTwo="June 2, 2023" />
          <Details lineOne="Bengaluru" lineTwo="32C, Cloudy" />
        </div>
      </div>
      <HorizontalRule />
      <HorizontalRule className="mt-1" />
      {/* NAVIGATION */}
      <div className="px-4 overflow-y-scroll flex flex-row items-center justify-center">
        {CATEGORIES.map(({ label, href }: any) => (
          <Link
            className="py-2 px-8 hover:text-orange-600 uppercase"
            key={href}
            href={href}
          >
            <Text as="span" level="h6" className="font-bold text-gray-500 hover:text-black">
              {label}
            </Text>
          </Link>
        ))}
      </div>
      <HorizontalRule />
    </header>
  );
};

export const Footer = () => {
  return (
    <footer className="w-full flex flex-col">
      <HorizontalRule />
      <div className="w-full flex flex-row justify-between py-12">
        <div className="flex flex-col items-center">
          <Brand />
          <Text
            as="span"
            className="uppercase tracking-widest font-bold text-gray-500"
          >
            Voice of Indian Mango Man
          </Text>
        </div>
        <div className="hidden md:flex flex-row gap-x-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-16 w-16 border border-orange-500 flex items-center justify-center"
            >
              {i}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-wrap md:flex-row justify-between py-12 gap-y-8">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="flex flex-col gap-y-4 min-w-[8rem]">
            <Text as="span" className="text-sm font-semibold">
              Heading {i}
            </Text>
            <Text as="span">Link 1</Text>
            <Text as="span">Link 2</Text>
            <Text as="span">Link 3</Text>
            <Text as="span">Link 4</Text>
          </div>
        ))}
        <div className="min-w-[8rem]"></div>
      </div>
      <HorizontalRule />
      <div className="w-full flex flex-row justify-between py-12">
        <Text as="span" className="">
          © {new Date().getFullYear()} <strong>{ORG_NAME}</strong>. All Rights
          Reserved.
        </Text>
        <Text as="span" className="">
          Designed & Developed by <strong>Honey Hexa</strong>
        </Text>
      </div>
    </footer>
  );
};

export const NewsCard: React.FC<any> = ({
  headline = "Title",
  abstract = "description",
  img,
}) => {
  return (
    <ZStack className="h-full w-full shadow-sm transition-shadow ease-in-out duration-500 hover:shadow-[0_48px_84px_-15px_rgba(0,0,0,0.8)] grayscale hover:grayscale-0">
      <div className="h-full w-full bg-orange-500/[0.1]" />
      <Image
        alt={headline}
        width={720}
        height={720}
        src={img}
        className="h-full w-full object-cover "
      />
      <div className="h-full w-full bg-gradient-to-t from-black via-black via-[4rem] to-[10rem]" />
      <Link href="/" className="h-full w-full flex flex-col gap-y-4 justify-end p-4">
        <Text as="h2" className="font-bold truncate drop-shadow-lg text-white">
          {headline}
        </Text>
        <Text as="p" className="truncate text-white">
          {abstract}
        </Text>
      </Link>
    </ZStack>
  );
};
