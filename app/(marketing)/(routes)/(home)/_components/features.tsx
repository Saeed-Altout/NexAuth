import { Zap, Shield, Code2, Layers, Lock, Fingerprint } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Blazing Fast Performance",
    description:
      "Built on top of Next.js primitives for minimal latency and maximum speed. Your users won't wait.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description:
      "OWASP-compliant protection against XSS, CSRF, and standard attack vectors out of the box.",
  },
  {
    icon: Code2,
    title: "100% Type Safe",
    description:
      "End-to-end type safety with TypeScript. Catch errors at compile time, not runtime.",
  },
  {
    icon: Layers,
    title: "Seamless Integration",
    description:
      "Drop-in components that fit perfectly into your existing Shadcn UI and Tailwind workflow.",
  },
  {
    icon: Lock,
    title: "Role-Based Access",
    description:
      "Granular permission controls and role management built directly into the core.",
  },
  {
    icon: Fingerprint,
    title: "Social Logins",
    description:
      "Pre-configured providers for Google, GitHub, and more. Set up in seconds.",
  },
];

export function Features() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none opacity-40">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="flex flex-col items-center text-center space-y-4 mb-16">
        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20">
          Features
        </div>
        <h2 className="text-3xl font-bold tracking-tighter md:text-5xl bg-clip-text text-transparent bg-linear-to-br from-foreground to-muted-foreground">
          Why choose Fast Auth?
        </h2>
        <p className="max-w-[800px] text-muted-foreground text-lg md:text-xl">
          We&apos;ve thought of everything so you can focus on building your
          product. Powerful features wrapped in a simple, elegant API.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="border-muted/50 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 bg-background/60 backdrop-blur-sm"
          >
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <feature.icon className="w-6 h-6" />
              </div>
              <CardTitle className="text-xl">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
