import { twMerge } from "tailwind-merge";
import { Element } from "@/lib/ui/misc";
import Link from "next/link";

export const Text: React.FC<any> = ({
  as = "h1",
  level,
  className,
  ...rest
}) => {
  const LEVEL_CLASSES: Record<string, string> = {
    h1: "text-3xl",
    h2: "text-2xl",
    h3: "text-xl",
    h4: "text-lg",
    h5: "text-md",
    h6: "text-sm",
    p: "text-md",
    span: "text-xs",
  };
  return (
    <Element
      as={as}
      className={twMerge(LEVEL_CLASSES[level ?? as], className)}
      {...rest}
    />
  );
};

export const Button: React.FC<any> = ({ children, ...rest }) => {
  return <button {...rest}>{children}</button>;
};

export const Href: React.FC<any> = ({ ...rest }) => {
  return <Link {...rest} />;
};

export const HorizontalRule: React.FC<any> = ({ className, ...rest }) => (
  <div {...rest} className={twMerge("w-full", className)}>
    <div className="flex w-full bg-orange-500 h-[1px]"></div>
  </div>
);

export const VerticalRule: React.FC<any> = ({ className, ...rest }) => (
  <div
    {...rest}
    className={twMerge("flex h-auto bg-orange-500 w-[1px]", className)}
  >
    &nbsp;
  </div>
);
