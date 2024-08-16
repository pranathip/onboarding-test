"use client";

import ArrowRightIcon from "./modal-parts/ArrowRightIcon";
import AnimationVisual from "./modal-parts/AnimationVisual";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex justify-center sm:p-7 sm:border sm:border-neutral-200 sm:rounded-md sm:bg-neutral-50">
        <button
          className="px-3 py-2 bg-zinc-900 text-white rounded-lg text-sm font-medium"
          onClick={() => setIsOpen(true)}
        >
          Open Modal
        </button>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="p-0 bg-transparent border-none [&>button]:hidden">
            <div className="flex justify-center items-center m-6">
              <div className="flex flex-col sm:w-[540px] w-full border border-black/10 rounded-xl shadow-[0_1px_0_0_rgba(0,0,0,0.02),0_8px_16px_-4px_rgba(0,0,0,0.04),0_24px_32px_-8px_rgba(0,0,0,0.06)] overflow-hidden">
                {/* Visual portion */}
                <AnimationVisual open={isOpen} />
                {/* Bottom portion */}
                <div className="flex flex-col p-6 border-t border-black/10 gap-6 bg-white">
                  {/* Text */}
                  <div className="flex flex-col gap-2">
                    <div className="text-lg font-semibold text-zinc-900 sm:text-xl">
                      Generate UI, execute code, ask questions
                    </div>
                    <p className="text-zinc-700 text-sm leading-[21px] font-normal">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam in dui mauris. Vivamus hendrerit arcu sed erat
                      molestie vehicula. Sed auctor neque eu tellus rhoncus ut
                      eleifend nibh porttitor.
                    </p>
                  </div>
                  {/* Buttons */}
                  <div className="flex justify-between items-center">
                    {/* Progress Indicator */}
                    <div className="flex flex-row gap-[6px] items-center">
                      <div className="w-[6px] h-[6px] bg-zinc-300 rounded-full"></div>
                      <div className="w-[6px] h-[6px] bg-zinc-300 rounded-full"></div>
                      <div className="w-[6px] h-[6px] bg-zinc-600 rounded-full"></div>
                      <div className="w-[6px] h-[6px] bg-zinc-300 rounded-full"></div>
                    </div>
                    <button className="flex items-center gap-2 pl-3 pr-2 h-[32px] bg-zinc-900 text-zinc-50 rounded-lg text-sm font-medium hover:bg-opacity-90">
                      Next <ArrowRightIcon />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
