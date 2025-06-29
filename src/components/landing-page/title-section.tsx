import React from "react";

interface TitleSectionProps {
  title: string;
  subheading?: string;
  pill: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({
  title,
  subheading,
  pill,
}) => {
  return (
    <React.Fragment>
      <section
        className="flex
        flex-col
        gap-4
        justify-center
        items-start
        md:items-center
      "
      >
        <article
          className="rounded-full
          p-[1px]
          text-sm
          bg-gradient-to-r
          from-background
          to-foreground
          "
        >
            <div
            className="rounded-full
            px-8
            py-3
            mr-2
            gap-6
            ml-2
            bg-slate-900
            "
            >
            {pill}
            </div>
        </article>
        {subheading ? (
          <>
            <h2
              className="text-left
              text-3xl
              sm:text-5xl
              sm:max-w-[750px]
              md:text-center
              font-semibold
              text-foreground
            "
            >
              {title}
            </h2>
            <p
              className="text-muted-foreground sm:max-w-[450px]
              md:text-center
            "
            >
              {subheading}
            </p>
          </>
        ) : (
          <h1
            className="text-left
            text-4xl
            sm:text-6xl
            sm:max-w-[850px]
            md:text-center
            font-semibold
            text-foreground
          "
          >
            {title}
          </h1>
        )}
      </section>
    </React.Fragment>
  );
};

export default TitleSection;
