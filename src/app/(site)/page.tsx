import TitleSection from "@/components/landing-page/title-section";
import { Button } from "@/components/ui/button";
import React from "react";

const HomePage = () => {
  return (
    <>
      <section
        className=" overflow-hidden
      px-4
      sm:px-6
      mt-10
      sm:flex
      sm:flex-col
      gap-4
      md:justify-center
      md:items-center"
      >
        <TitleSection
          pill="✨ Your Workspace, Perfected"
          title="All-In-One Collaboration and Productivity Platform"
        />
        <div
          className="
          p-[2px]
          mt-6
          rounded-xl
          sm:w-[300px]
        "
        >
          <Button
            variant="default"
            className=" w-full
            rounded-[10px]
            p-6
            text-2xl
            bg-slate-950
        "
          >
            Get Cypress Free
          </Button>
        </div>
      </section>
    </>
  );
};

export default HomePage;
