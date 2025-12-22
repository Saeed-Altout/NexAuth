"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Marquee } from "@/components/ui/marquee";

const testimonials = [
  {
    name: "Alex Rivera",
    username: "@arivera",
    body: "Fast Auth saved us weeks of development time. It's simply the best.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    country: "🇸 USA",
  },
  {
    name: "Sarah Chen",
    username: "@schen_dev",
    body: "The security features are top-notch. I feel safe using this in production.",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    country: "�� Canada",
  },
  {
    name: "Matteo Ricci",
    username: "@matteo_r",
    body: "Finally, an auth library that doesn't feel like a black box. Amazing work!",
    img: "https://randomuser.me/api/portraits/men/51.jpg",
    country: "🇮🇹 Italy",
  },
  {
    name: "Priya Patel",
    username: "@priya_codes",
    body: "The TypeScript support is flawless. Every prop is typed perfectly.",
    img: "https://randomuser.me/api/portraits/women/53.jpg",
    country: "🇮🇳 India",
  },
  {
    name: "James Wilson",
    username: "@jwilson",
    body: "Integrated it into my Next.js app in under 10 minutes. Mind blowing.",
    img: "https://randomuser.me/api/portraits/men/33.jpg",
    country: "�� UK",
  },
  {
    name: "Louise Dubois",
    username: "@louise_d",
    body: "The Prisma adapter makes database management a breeze.",
    img: "https://randomuser.me/api/portraits/women/22.jpg",
    country: "🇫🇷 France",
  },
  {
    name: "Kenji Tanaka",
    username: "@kenji_t",
    body: "Performance is blazing fast. My users love the login speed.",
    img: "https://randomuser.me/api/portraits/men/85.jpg",
    country: "🇯🇵 Japan",
  },
  {
    name: "Emily Davis",
    username: "@em_davis",
    body: "Documentation is super clear and easy to follow. Great job team!",
    img: "https://randomuser.me/api/portraits/women/45.jpg",
    country: "🇺 Australia",
  },
  {
    name: "Carlos Rodriguez",
    username: "@carlos_r",
    body: "Customization is key for me, and Fast Auth delivers on all fronts.",
    img: "https://randomuser.me/api/portraits/men/61.jpg",
    country: "🇪🇸 Spain",
  },
];

function TestimonialCard({
  img,
  name,
  username,
  body,
  country,
}: (typeof testimonials)[number]) {
  return (
    <Card className="w-80 border-none bg-muted/20 hover:bg-muted/40 transition-colors duration-300">
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <Avatar className="h-10 w-10 border-2 border-background">
            <AvatarImage src={img} alt={username} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <figcaption className="text-sm font-semibold text-foreground flex items-center gap-2">
              {name} <span className="text-xs opacity-70">{country}</span>
            </figcaption>
            <p className="text-xs font-medium text-muted-foreground">
              {username}
            </p>
          </div>
        </div>
        <blockquote className="text-sm text-muted-foreground leading-relaxed">
          &quot;{body}&quot;
        </blockquote>
      </CardContent>
    </Card>
  );
}

export function Testimonials() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto mb-12">
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter md:text-5xl text-foreground">
            Loved by developers worldwide
          </h2>
          <p className="max-w-[700px] text-muted-foreground text-lg md:text-xl">
            Join thousands of developers building secure, scalable, and
            delightful authentication experiences with Fast Auth.
          </p>
        </div>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center gap-6">
        {/* Marquee moving left to right (default) */}
        <Marquee pauseOnHover repeat={4} className="[--duration:60s]">
          {testimonials.slice(0, 5).map((review) => (
            <TestimonialCard key={review.username} {...review} />
          ))}
        </Marquee>

        {/* Marquee moving right to left (reverse) */}
        <Marquee pauseOnHover reverse repeat={4} className="[--duration:60s]">
          {testimonials.slice(4).map((review) => (
            <TestimonialCard key={review.username} {...review} />
          ))}
        </Marquee>

        {/* Stylish gradient overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background via-background/80 to-transparent z-10"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background via-background/80 to-transparent z-10"></div>
      </div>
    </section>
  );
}
