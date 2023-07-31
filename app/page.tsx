import { FAKE_NEWS } from "@/content/misc";
import { Bento, HorizontalRule, NewsCard, Text } from "@/lib/ui";
import { randomInt } from "crypto";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Bento
        data={[
          {
            className:
              "row-span-2 col-span-1 lg:row-start-1 lg:col-start-1 lg:row-span-2 lg:col-span-4",
            view: <NewsCard {...FAKE_NEWS[randomInt(5)]} />,
          },
          {
            className:
              "row-span-2 col-span-1 lg:row-span-2 lg:col-span-2",
            view: <NewsCard {...FAKE_NEWS[randomInt(5)]} />,
          },
          {
            className:
              "row-span-2 col-span-1 lg:row-span-1 lg:col-span-2",
            view: <NewsCard {...FAKE_NEWS[randomInt(5)]} />,
          },
          {
            className:
              "row-span-2 col-span-1 lg:row-span-1 lg:col-span-2",
            view: <NewsCard {...FAKE_NEWS[randomInt(5)]} />,
          },
        ]}
      />
      {/* <HorizontalRule />
      <Bento
        data={[
          {
            className:
              "row-span-2 col-span-1 lg:row-span-2 lg:col-span-2",
            view: <NewsCard {...FAKE_NEWS[randomInt(5)]} />,
          },
          {
            className:
              "row-span-2 col-span-1 lg:row-span-1 lg:col-span-2",
            view: <NewsCard {...FAKE_NEWS[randomInt(5)]} />,
          },
          {
            className:
              "row-span-2 col-span-1 lg:row-span-1 lg:col-span-2",
            view: <NewsCard {...FAKE_NEWS[randomInt(5)]} />,
          },
        ]}
      /> */}
      <HorizontalRule />
      <Text as="h2" level="h1" className="text-4xl font-black text-orange-600 pt-16 uppercase">Politics</Text>
      <Bento
        data={[
          {
            className:
              "row-span-2 col-span-1 lg:row-span-2 lg:col-span-1",
            view: <NewsCard {...FAKE_NEWS[randomInt(5)]} />,
          },
          {
            className:
              "row-span-2 col-span-1 lg:row-span-2 lg:col-span-1",
            view: <NewsCard {...FAKE_NEWS[randomInt(5)]} />,
          },
          {
            className:
              "row-span-2 col-span-1 lg:row-span-2 lg:col-span-1",
            view: <NewsCard {...FAKE_NEWS[randomInt(5)]} />,
          },
          {
            className:
              "row-span-2 col-span-1 lg:row-span-2 lg:col-span-1",
            view: <NewsCard {...FAKE_NEWS[randomInt(5)]} />,
          },
        ]}
      />
      <HorizontalRule />
      <Text as="h2" level="h1" className="text-4xl font-black text-orange-600 pt-16 uppercase">Entertainment</Text>
      <Bento
        data={[
          {
            className:
              "row-span-2 col-span-1 lg:row-span-2 lg:col-span-1",
            view: <NewsCard {...FAKE_NEWS[randomInt(5)]} />,
          },
          {
            className:
              "row-span-2 col-span-1 lg:row-span-2 lg:col-span-1",
            view: <NewsCard {...FAKE_NEWS[randomInt(5)]} />,
          },
          {
            className:
              "row-span-2 col-span-1 lg:row-span-2 lg:col-span-1",
            view: <NewsCard {...FAKE_NEWS[randomInt(5)]} />,
          },
          {
            className:
              "row-span-2 col-span-1 lg:row-span-2 lg:col-span-1",
            view: <NewsCard {...FAKE_NEWS[randomInt(5)]} />,
          },
        ]}
      />
      <HorizontalRule />
      <Text as="h2" level="h1" className="text-4xl font-black text-orange-600 pt-16 uppercase">Sports</Text>
      <Bento
        data={[
          {
            className:
              "row-span-2 col-span-1 lg:row-span-2 lg:col-span-1",
            view: <NewsCard {...FAKE_NEWS[randomInt(5)]} />,
          },
          {
            className:
              "row-span-2 col-span-1 lg:row-span-2 lg:col-span-1",
            view: <NewsCard {...FAKE_NEWS[randomInt(5)]} />,
          },
          {
            className:
              "row-span-2 col-span-1 lg:row-span-2 lg:col-span-1",
            view: <NewsCard {...FAKE_NEWS[randomInt(5)]} />,
          },
          {
            className:
              "row-span-2 col-span-1 lg:row-span-2 lg:col-span-1",
            view: <NewsCard {...FAKE_NEWS[randomInt(5)]} />,
          },
        ]}
      />
      <HorizontalRule />
      <Text as="h2" level="h1" className="text-4xl font-black text-orange-600 pt-16 uppercase">Technology</Text>
      <Bento
        data={[
          {
            className:
              "row-span-2 col-span-1 lg:row-span-2 lg:col-span-1",
            view: <NewsCard {...FAKE_NEWS[randomInt(5)]} />,
          },
          {
            className:
              "row-span-2 col-span-1 lg:row-span-2 lg:col-span-1",
            view: <NewsCard {...FAKE_NEWS[randomInt(5)]} />,
          },
          {
            className:
              "row-span-2 col-span-1 lg:row-span-2 lg:col-span-1",
            view: <NewsCard {...FAKE_NEWS[randomInt(5)]} />,
          },
          {
            className:
              "row-span-2 col-span-1 lg:row-span-2 lg:col-span-1",
            view: <NewsCard {...FAKE_NEWS[randomInt(5)]} />,
          },
        ]}
      />
    </main>
  );
}
