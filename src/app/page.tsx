"use client";
import PrimaryButton from "@/components/primary-button/primary-button.component";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen w-screen">
      <div className="h-5 w-60">
        <PrimaryButton
          buttonText={"OnePedia is the best!!!!"}
          handleClick={() => alert("Show time!!")}
        />
      </div>
    </main>
  );
}
