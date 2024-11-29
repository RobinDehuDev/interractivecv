"use client";
import {
  BorderLessButton,
  NavigationButton,
} from "~/components/custom/CustomButton";
import { EXPERIENCE } from "../cv/experience";
import Markdown from "react-markdown";
import { useState } from "react";
import { Home } from "lucide-react";
import { cn } from "~/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import { Card, CardContent } from "~/components/ui/card";

export default function Experience() {
  const [selectedExperience, setExp] = useState(EXPERIENCE[0]!);
  return (
    <div className="flex h-svh items-center justify-center overflow-auto">
      <Carousel className="h-[500px] bg-red-200" orientation="vertical">
        <CarouselContent className="h-svh">
          {EXPERIENCE.map((exp, index) => (
            <CarouselItem key={index}>
              <ExpSummaryClickableCard exp={exp} onClick={() => setExp(exp)} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

function ExpSummaryClickableCard({
  exp,
  onClick,
}: {
  exp: (typeof EXPERIENCE)[number];
  onClick: () => void;
}) {
  return (
    <BorderLessButton
      className="scroll w-full rounded-3xl bg-white bg-opacity-5 shadow-lg"
      innerClassName="w-full rounded-3xl p-4 flex flex-col items-start text-left"
      onClick={onClick}
    >
      <span className="text-lg font-semibold">{exp.title}</span>
      <span className="text-base">
        <span className="font-semibold">{exp.companyName}</span>
        <span className="font-light opacity-80">
          , {exp.location}, {exp.startDate} : {exp.endDate}
        </span>
      </span>
      <Markdown className="mt-3">{exp.shortDescription}</Markdown>
    </BorderLessButton>
  );
}
