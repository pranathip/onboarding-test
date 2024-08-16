import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import ThumbsUp from "./ThumbsUp";
import ThumbsDown from "./ThumbsDown";

interface ExpenseGraphProps {
  open: boolean;
  onAnimationComplete: () => void;
}

// just creating variants for everything bc im lazy

const messageContainerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.02,
    },
  },
};

const hideShowVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const responseContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const barsContainerVariants = {
  hidden: { opacity: 1 },
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const barVariants = {
  hidden: { height: 0 },
  visible: (custom: { height: string }) => ({
    height: custom.height,
    transition: { duration: 0.3, ease: "easeOut" },
  }),
};

const highlightVariants = {
  hidden: { width: 0 },
  visible: {
    width: "80%",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

function FibonacciSequence({
  open,
  shouldAnimate,
}: {
  open: boolean;
  shouldAnimate: boolean;
}) {
  const messageText = "Compute the fibonacci sequence";
  const textControls = useAnimation();
  const responseControls = useAnimation();
  const highlightControls = useAnimation();
  const quoteControls = useAnimation();

  useEffect(() => {
    if (shouldAnimate) {
      const animate = async () => {
        await textControls.start("visible");
        await responseControls.start("visible");
        await highlightControls.start("visible");
        await quoteControls.start("visible");
      };
      animate();
      return () => {
        textControls.stop();
        responseControls.stop();
        highlightControls.stop();
        quoteControls.stop();
      };
    }
  }, [
    shouldAnimate,
    textControls,
    responseControls,
    highlightControls,
    quoteControls,
  ]);

  useEffect(() => {
    if (!open) {
      textControls.stop();
      responseControls.stop();
      highlightControls.stop();
      quoteControls.stop();
    }
  }, [open, textControls, responseControls, highlightControls, quoteControls]);

  return (
    <div className="absolute top-28 right-3 w-[250px] bg-white border border-black/10 rounded-lg shadow-sm p-3 flex flex-col gap-3">
      {/* Chat message */}
      <div className="flex flex-row gap-2">
        <Image
          src="https://avatars.githubusercontent.com/u/23707420?v=4"
          alt="pranathip"
          width={28}
          height={28}
          className="rounded-lg border border-black/8 min-w-[28px] h-[28px]"
        />
        <motion.div
          className="bg-zinc-100 py-1 px-2 text-wrap rounded-xl text-xs font-normal"
          variants={messageContainerVariants}
          initial="hidden"
          animate={textControls}
        >
          {messageText.split("").map((char, index) => (
            <motion.span key={index} variants={hideShowVariants}>
              {char}
            </motion.span>
          ))}
        </motion.div>
      </div>
      {/* Chat Response */}
      <motion.div
        className="flex flex-col gap-2 items-end w-full h-full"
        initial="hidden"
        animate={responseControls}
      >
        <motion.div
          className="text-xs bg-zinc-100 text-zinc-500 p-1 rounded-md font-mono"
          variants={hideShowVariants}
        >
          fibonacci.ts
        </motion.div>
        <motion.div
          className="w-full h-[72px] border border-black/10 rounded-lg flex flex-col gap-1 p-2"
          variants={hideShowVariants}
        >
          <div className="flex flex-row gap-1 items-center relative">
            {/* Highlight */}
            <motion.div
              className="absolute inset-0 bg-teal-300/30"
              variants={highlightVariants}
              initial="hidden"
              animate={highlightControls}
            />
            {/* Quote */}
            <motion.div
              className="absolute bottom-5 left-5 bg-white p-1 border border-black/10 rounded-lg shadow-md flex flex-row gap-2"
              variants={hideShowVariants}
              initial="hidden"
              animate={quoteControls}
            >
              <div className="flex flex-row gap-1 items-center">
                <span className="text-xs font-medium text-zinc-500">Quote</span>
                <span className="bg-black/10 px-1 text-mono text-xs text-zinc-500 rounded">
                  Q
                </span>
              </div>
              <div className="w-[1px] h-[16px] bg-black/10"></div>
              <div className="text-zinc-500 flex flex-row gap-2">
                {/* Assuming ThumbsUp and ThumbsDown are defined components */}
                <ThumbsUp />
                <ThumbsDown />
              </div>
            </motion.div>
            <span className="font-mono text-xs text-[#C01B5D] pr-1">
              function
            </span>
            <span className="font-mono text-xs text-[#0068D6]">fibonacci</span>
            <span className="font-mono text-xs text-[#171717]">() &#123;</span>
          </div>
          <div className="flex flex-row gap-1 items-center">
            <span className="font-mono text-xs text-[#C01B5D]">if</span>
            <span className="font-mono text-xs text-[#171717] pl-1">(</span>
            <span className="font-mono text-xs text-[#C01B5D]">n</span>
            <span className="font-mono text-xs text-[#0068D6]">&lt;=</span>
            <span className="font-mono text-xs text-[#C01B5D]">1</span>
            <span className="font-mono text-xs text-[#171717]">)</span>
            <span className="font-mono text-xs text-[#C01B5D]">return</span>
            <span className="font-mono text-xs text-[#171717]">[];</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

function ExpenseGraph({ open, onAnimationComplete }: ExpenseGraphProps) {
  const messageText = "Interactive graph for an expenses management app";
  const textControls = useAnimation();
  const responseControls = useAnimation();
  const barControls = useAnimation();

  useEffect(() => {
    // should prob put this in a callback
    const animate = async () => {
      await textControls.start("visible");
      await responseControls.start("visible");
      await barControls.start("visible");
      onAnimationComplete(); // Notify parent component that animation is complete
    };
    animate();
  }, [textControls, responseControls, barControls, onAnimationComplete]);

  useEffect(() => {
    if (!open) {
      textControls.stop();
      responseControls.stop();
      barControls.stop();
    }
  }, [open, textControls, responseControls, barControls]);

  const bars = [
    { height: "12px" },
    { height: "25px" },
    { height: "21px" },
    { height: "40px" },
    { height: "21px" },
    { height: "34px" },
    { height: "40px" },
    { height: "34px" },
  ];

  return (
    <div className="absolute top-5 left-3 w-[250px] bg-white border border-black/10 rounded-lg shadow-sm p-3 flex flex-col gap-3">
      {/* Chat message */}
      <div className="flex flex-row gap-2">
        <Image
          src="https://avatars.githubusercontent.com/u/124599?v=4"
          alt="shadcn"
          width={28}
          height={28}
          className="rounded-lg border border-black/8 min-w-[28px] h-[28px]"
        />
        <motion.div
          className="bg-zinc-100 py-1 px-2 text-wrap rounded-xl text-xs font-normal"
          variants={messageContainerVariants}
          initial="hidden"
          animate={textControls}
        >
          {messageText.split("").map((char, index) => (
            <motion.span key={index} variants={hideShowVariants}>
              {char}
            </motion.span>
          ))}
        </motion.div>
      </div>
      {/* Chat Response */}
      <motion.div
        className="flex flex-col gap-2 items-end w-full h-full"
        initial="hidden"
        animate={responseControls}
        variants={responseContainerVariants}
      >
        <motion.div
          className="text-xs bg-[#F0F7FF] text-[#0067D6] p-1 rounded-md font-mono"
          variants={hideShowVariants}
        >
          &lt;ExpensesGraph /&gt;
        </motion.div>
        <motion.div
          className="w-full h-[72px] border border-black/10 rounded-lg flex flex-row justify-between p-2"
          variants={barsContainerVariants}
          initial="hidden"
          animate={barControls}
        >
          {/* Left graph info */}
          <div className="flex flex-col gap-1">
            <div className="bg-black/10 h-[6px] w-[30px] rounded-sm"></div>
            <div className="bg-black/10 h-[6px] w-[41px] rounded-sm"></div>
            <div className="text-xs text-zinc-500">$ 2,400.00</div>
            <div className="bg-black/20 h-[6px] w-[41px] rounded-full mt-2"></div>
          </div>
          {/* Graph */}
          <div className="flex gap-1 items-end">
            {bars.map((bar, index) => (
              <motion.div
                key={index}
                className="bg-[#0067D6] w-[6px] rounded-sm"
                custom={bar}
                variants={barVariants}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

function Grid() {
  return (
    <>
      {/* Horizontal Lines */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-16 w-full">
        <hr className="border-black/5 border-dashed w-full" />
        <hr className="border-black/5 border-dashed w-full" />
        <hr className="border-black/5 border-dashed w-full" />
        <hr className="border-black/5 border-dashed w-full" />
        <hr className="border-black/5 border-dashed w-full" />
        <hr className="border-black/5 border-dashed w-full" />
      </div>
      {/* Vertical Lines */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-row gap-16 h-full">
        <div className="border-black/5 border-dashed border-l h-full"></div>
        <div className="border-black/5 border-dashed border-l h-full"></div>
        <div className="border-black/5 border-dashed border-l h-full"></div>
        <div className="border-black/5 border-dashed border-l h-full"></div>
        <div className="border-black/5 border-dashed border-l h-full"></div>
        <div className="border-black/5 border-dashed border-l h-full"></div>
        <div className="border-black/5 border-dashed border-l h-full"></div>
        <div className="border-black/5 border-dashed border-l h-full"></div>
        <div className="border-black/5 border-dashed border-l h-full"></div>
      </div>
    </>
  );
}

export default function AnimationVisual({ open }: { open: boolean }) {
  const [shouldAnimateFibonacci, setShouldAnimateFibonacci] = useState(false);

  const handleExpenseGraphComplete = () => {
    setShouldAnimateFibonacci(true);
  };

  return (
    <div className="h-[250px] bg-zinc-50 relative overflow-hidden">
      <Grid />
      <ExpenseGraph
        open={open}
        onAnimationComplete={handleExpenseGraphComplete}
      />
      <FibonacciSequence open={open} shouldAnimate={shouldAnimateFibonacci} />
    </div>
  );
}
