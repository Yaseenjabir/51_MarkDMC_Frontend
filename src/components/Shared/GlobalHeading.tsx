import React from "react";
import { Badge } from "@/components/ui/badge";

export default function GlobalHeading() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-3">
      <Badge
        variant="outline"
        className="rounded-full px-5 text-base font-medium bg-sage-green text-white"
      >
        Strategy
      </Badge>
      <h1 className="text-2xl font-bold text-center md:text-3xl">
        Our only goal: help you reach yours
      </h1>
    </div>
  );
}
