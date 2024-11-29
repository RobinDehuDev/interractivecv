"use client";
import {
  BorderLessButton,
  HiddenButton,
  NavigationButton,
} from "~/components/custom/CustomButton";
import { EXPERIENCE } from "./experience";
import Markdown from "react-markdown";
import { useEffect, useState } from "react";
import { Home, X } from "lucide-react";
import { cn } from "~/lib/utils";

export default function Experience() {
  const [selectedExperience, setExp] = useState(EXPERIENCE[0]!);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    return () => {
      setOpen(false);
    };
  }, []);

  return (
    <div className="flex h-screen flex-col">
      <header className="flex w-full items-center">
        <NavigationButton href="/">
          <Home />
        </NavigationButton>
        <h1 className="ml-4 text-center text-3xl font-bold">Robin DEHU</h1>
      </header>
      <SelectList
        className={cn("md:flex", {
          hidden: open,
        })}
        onSelect={(exp) => {
          setExp(exp);
          setOpen(true);
        }}
        selectedExperience={selectedExperience}
      />
      <ExperienceFullCard
        className={cn("md:hidden", {
          hidden: !open,
        })}
        exp={selectedExperience}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}

const scrollbar = cn(
  "[&::-webkit-scrollbar]:w-2",
  "[&::-webkit-scrollbar-track]:rounded-full",
  "[&::-webkit-scrollbar-track]:bg-none",
  "[&::-webkit-scrollbar-thumb]:rounded-full",
  "[&::-webkit-scrollbar-thumb]:bg-white [&::-webkit-scrollbar-thumb]:bg-opacity-30",
);

function SelectList({
  className,
  selectedExperience,
  onSelect,
}: {
  className?: string;
  selectedExperience: (typeof EXPERIENCE)[number];
  onSelect: (exp: (typeof EXPERIENCE)[number]) => void;
}) {
  return (
    <section
      className={cn(
        "container mx-auto flex flex-1 flex-row justify-center overflow-y-hidden md:gap-8",
        className,
      )}
    >
      <section
        className={cn(
          "flex max-w-96 flex-1 flex-col gap-4 overflow-y-auto overflow-x-hidden pb-8 pr-2",
          scrollbar,
        )}
      >
        {EXPERIENCE.map((exp, index) => (
          <ExperienceSummaryClickableCard
            key={index}
            onClick={() => onSelect(exp)}
            exp={exp}
          />
        ))}
      </section>
      <ExperienceFullCard
        exp={selectedExperience}
        className="hidden max-w-[900px] pb-8 md:flex md:flex-1"
      />
    </section>
  );
}

function ExperienceSummaryClickableCard({
  exp,
  onClick,
}: {
  exp: (typeof EXPERIENCE)[number];
  onClick: () => void;
}) {
  return (
    <BorderLessButton
      className="scroll w-full rounded-3xl bg-white bg-opacity-5 shadow-lg"
      innerClassName="w-full rounded-3xl p-5 flex flex-col items-start text-left"
      onClick={onClick}
    >
      <p className="text-lg font-semibold">{exp.title}</p>
      <p className="mt-3 text-base">
        <span className="font-semibold">{exp.companyName}</span>
        <span className="font-light">, {exp.location}</span>
      </p>
      <p className="mt-1 font-light opacity-80">
        {exp.startDate} - {exp.endDate}
      </p>
      <Markdown className="mt-4">{exp.shortDescription}</Markdown>
    </BorderLessButton>
  );
}

function ExperienceFullCard({
  exp,
  className,
  onClose,
}: {
  exp: (typeof EXPERIENCE)[number];
  className?: string;
  onClose?: () => void;
}) {
  return (
    <div
      className={cn(
        "flex h-full flex-col gap-4 overflow-y-auto p-5",
        scrollbar,
        className,
      )}
    >
      <header className="flex justify-between gap-2">
        <p className="text-2xl font-semibold">{exp.title}</p>
        {onClose ? (
          <HiddenButton onClick={onClose}>
            <X className="h-8 w-8 self-start" />
          </HiddenButton>
        ) : null}
      </header>

      <section>
        <p className="text-base">
          <span className="font-semibold">{exp.companyName}</span>
          <span className="font-light">, {exp.location}</span>
        </p>
        <p className="mt-1 font-light opacity-80">
          {exp.startDate} - {exp.endDate}
        </p>
      </section>

      <Markdown className="mt-3">{exp.longDescription}</Markdown>

      <section className="mt-3">
        <span className="font-semibold">Technos :</span>
        <Markdown className="pl-4">{exp.tools}</Markdown>
      </section>

      <section className="mt-3">
        <span className="font-semibold">Soft skills :</span>
        <Markdown className="pl-4">{exp.softSkills}</Markdown>
      </section>
    </div>
  );
}
