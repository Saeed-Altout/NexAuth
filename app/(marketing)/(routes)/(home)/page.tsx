import { Hero } from "./_components/hero";
import { Features } from "./_components/features";
import { Testimonials } from "./_components/testimonials";

export default function MarketingPage() {
  return (
    <main className="flex-1">
      <Hero />
      <Features />
      <Testimonials />
    </main>
  );
}
