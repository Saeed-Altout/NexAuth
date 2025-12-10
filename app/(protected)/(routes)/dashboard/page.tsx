import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { Heading } from "@/components/heading";
import { SectionCards } from "@/components/section-cards";

export default function DashboardPage() {
  return (
    <>
      <Heading title="Dashboard" description="This is the dashboard page" />
      <SectionCards />
      <ChartAreaInteractive />
    </>
  );
}
