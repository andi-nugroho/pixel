"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { HugeiconsIcon } from "@hugeicons/react";
import { GithubIcon } from "@hugeicons/core-free-icons";
import { Button } from "../ui/button";
import { TextureButton } from "../ui/texture-button";

const HeroActions = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="flex flex-wrap items-center gap-3 pt-2"
      >
        <Button asChild className="group h-10 px-4" size={"lg"}>
          <Link href="/docs" className="gap-2 flex items-center">
            <span>Get Started</span>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Button>
        <TextureButton asChild size={"lg"} variant={"accent"} className="h-10 px-4">
          <Link
            href={SITE_CONFIG.github}
            target="_blank"
            rel="noopener noreferrer"
            className="gap-2 flex items-center"
          >
            <HugeiconsIcon icon={GithubIcon} className="size-4" />
            GitHub
          </Link>
        </TextureButton>
      </motion.div>
    </div>
  );
};

export default HeroActions;
