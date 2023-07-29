import { NewsCard } from "@/lib/ui";

const generateGridStyles = (position: number[], size: number[]) => {
  return {
    gridArea: `${position?.[0] ?? "auto"} / ${position?.[1] ?? "auto"} / span ${
      size?.[0] ?? 1
    } / span ${size?.[1] ?? 1}`,
  };
};

export const Bento: React.FC<any> = ({ data = [] }) => {
  return (
    <div className="grid auto-rows-[16rem] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-4">
      {data.map(({ position, size, className, view }: any, i: number) => (
        <div key={i} className={className} style={className ? {} : generateGridStyles(position, size)}>
          {view}
        </div>
      ))}
    </div>
  );
};
