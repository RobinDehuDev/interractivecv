"use client";

import { cn } from "~/lib/utils";
import { Loader } from "lucide-react";
import Link, { type LinkProps } from "next/link";

type ButtonProperties = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "href"
> & {
  href?: undefined;
};
type LinkProperties = LinkProps & {
  className?: string;
  children?: React.ReactNode;
};
type Props = ButtonProperties | LinkProperties;

function ButtonOrLink(props: Props) {
  if (props.href !== undefined) return <Link {...props} />;

  return <button {...props} />;
}

export function ShapeLessButton({
  className,
  innerClassName,
  children,
  loading,
  ...props
}: { innerClassName?: string; loading?: boolean } & Parameters<
  typeof ButtonOrLink
>[0]) {
  return (
    <div className={cn("flex justify-center", className)}>
      <ButtonOrLink
        className={cn(
          "border-[1px] border-white bg-none",
          "cursor-pointer",
          "flex items-center justify-center",
          "relative shadow",
          //hover
          "transition",
          "hover:border-2 hover:bg-white hover:bg-opacity-5 hover:shadow-md",
          //Focus
          "outline-none",
          "focus:scale-[1.01] focus:border-2",
          //Active
          "active:scale-95 active:border-opacity-95",
          // Disabled
          "disabled:cursor-not-allowed disabled:opacity-30",
          "disabled:active:scale-100 disabled:active:border-opacity-100",
          "disabled:active:scale-100 disabled:active:border-opacity-100",
          innerClassName,
        )}
        {...props}
      >
        {loading ? (
          <p className="flex animate-pulse gap-2">
            <Loader className="motion-safe:animate-spin-slow" /> chargement...
          </p>
        ) : (
          children
        )}
      </ButtonOrLink>
    </div>
  );
}

export function ActionButton({
  innerClassName,
  className,
  ...props
}: Parameters<typeof ShapeLessButton>[0]) {
  return (
    <ShapeLessButton
      className={cn("h-12", className)}
      innerClassName={cn(
        "m-1 px-8 py-2 leading-6",
        "rounded-full",
        "font-medium tracking-wide",
        innerClassName,
      )}
      {...props}
    />
  );
}

export function NavigationButton({
  innerClassName,
  className,
  ...props
}: Parameters<typeof ShapeLessButton>[0]) {
  return (
    <ShapeLessButton
      className={cn("absolute left-0 top-0 z-50 m-6", className)}
      innerClassName={cn("rounded-full aspect-square w-12", innerClassName)}
      {...props}
    />
  );
}
