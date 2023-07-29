import { FAKE_NEWS } from "@/content/misc";
import { Bento, NewsCard, Text } from "@/lib/ui";
import { randomInt } from "crypto";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Bento data={[
        { className:"row-span-2 col-span-1 lg:row-start-1 lg:col-start-1 lg:row-span-2 lg:col-span-3", view: <NewsCard {...(FAKE_NEWS[randomInt(5)])} /> },
        { className:"row-span-2 col-span-1 lg:row-start-1 lg:col-start-4 lg:row-span-1 lg:col-span-1", view: <NewsCard {...(FAKE_NEWS[randomInt(5)])} /> },
        { className:"row-span-2 col-span-1 lg:row-start-2 lg:col-start-4 lg:row-span-1 lg:col-span-1", view: <NewsCard {...(FAKE_NEWS[randomInt(5)])} /> },
        { className:"row-span-2 col-span-1 lg:row-start-3 lg:col-start-3 lg:row-span-2 lg:col-span-2", view: <NewsCard {...(FAKE_NEWS[randomInt(5)])} /> },
        { className:"row-span-2 col-span-1 lg:row-start-3 lg:col-start-1 lg:row-span-1 lg:col-span-2", view: <NewsCard {...(FAKE_NEWS[randomInt(5)])} /> },
        { className:"row-span-2 col-span-1 lg:row-start-4 lg:col-start-1 lg:row-span-1 lg:col-span-2", view: <NewsCard {...(FAKE_NEWS[randomInt(5)])} /> },
      ]} />
      <Bento data={[
        { className:"row-span-2 col-span-1 lg:row-start-1 lg:col-start-1 lg:row-span-2 lg:col-span-3", view: <NewsCard {...(FAKE_NEWS[randomInt(5)])} /> },
        { className:"row-span-2 col-span-1 lg:row-start-1 lg:col-start-4 lg:row-span-1 lg:col-span-1", view: <NewsCard {...(FAKE_NEWS[randomInt(5)])} /> },
        { className:"row-span-2 col-span-1 lg:row-start-2 lg:col-start-4 lg:row-span-1 lg:col-span-1", view: <NewsCard {...(FAKE_NEWS[randomInt(5)])} /> },
      ]} />
      {/* <div className="flex flex-row divide-x">
        <div className="w-3/4 flex flex-col divide-y">
          {[1,2,3].map((i) => (<div key={i} className="flex flex-row p-2">
            <div className="flex flex-col justify-center w-1/2">
              <Text as="h1">Some Breaking News</Text>
              <Text as="p">Some description of that breaking news...</Text>
            </div>
            <div className="h-96 w-full bg-orange-500/[0.1]" />
          </div>))}
        </div>
        <div className="w-1/4 flex flex-col divide-y">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex flex-col p-2">
              <div className="h-48 w-full bg-orange-500/[0.1]" />
              <Text as="h2">Hello</Text>
              <Text as="p">Hello</Text>
            </div>
          ))}
        </div>
      </div> */}
    </main>
  );
}
