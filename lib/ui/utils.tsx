import { cn } from "@/lib/utils/misc";

export const PageContainer: React.FC<any> = ({ className, ...rest }) => (
  <div className={cn("w-full m-auto max-w-7xl px-4", className)} {...rest} />
);

export const ZStack: React.FC<any> = ({ children, className, ...rest }) => (
  <div className={cn("grid grid-cols-1 grid-rows-1", className)} {...rest}>
    {(Array.isArray(children) ? children : [children])?.map(
      (elem: React.ReactNode, i: number) => (
        <div
          key={i}
          style={{ zIndex: i }}
          className={"col-start-1 row-start-1 col-span-1 row-span-1"}
        >
          {elem}
        </div>
      )
    )}
  </div>
);