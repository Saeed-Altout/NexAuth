import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiPrisma,
} from "react-icons/si";

export function Hero() {
  return (
    <section className="container mx-auto px-4 pt-20 pb-32 md:pt-32 md:pb-48">
      <div className="flex flex-col items-center text-center space-y-8">
        {/* Badge */}
        <Badge
          variant="secondary"
          className="rounded-full px-4 py-1.5 text-sm font-medium border animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100"
        >
          <span className="mr-2">Production ready release</span>
          <Zap className="h-3 w-3 fill-current" />
        </Badge>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
          Fast Auth for <br className="hidden md:block" />
          <span className="bg-clip-text text-transparent bg-linear-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
            Next.js Applications
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
          Open-source authentication solution built with Next.js, TypeScript,
          and Prisma. Secure, scalable, and easy to integrate into your modern
          web projects.
        </p>

        {/* Button */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-400">
          <Button size="lg" className="h-12 px-8 text-base rounded-full">
            Get Started - It&apos;s free
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Tech Stack Icons */}
        <div className="pt-12 flex flex-wrap justify-center gap-8 md:gap-12 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-500">
          <SiNextdotjs className="h-8 w-8 text-muted-foreground hover:text-foreground transition-colors" />
          <SiReact className="h-8 w-8 text-muted-foreground hover:text-[#61DAFB] transition-colors" />
          <SiTypescript className="h-8 w-8 text-muted-foreground hover:text-[#3178C6] transition-colors" />
          <SiTailwindcss className="h-8 w-8 text-muted-foreground hover:text-[#06B6D4] transition-colors" />
          <SiPrisma className="h-8 w-8 text-muted-foreground hover:text-[#2D3748] dark:hover:text-white transition-colors" />
        </div>
      </div>
    </section>
  );
}
