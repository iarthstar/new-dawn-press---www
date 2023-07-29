import React from "react";
import { Text } from "@/lib/ui";
import { ORG_NAME } from "@/content";

export const Brand: React.FC = () => {
  return (
    <Text as="span" className="text-6xl font-black text-orange-600 uppercase">
      {ORG_NAME}
    </Text>
  );
};
