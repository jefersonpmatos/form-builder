import { Suspense } from "react";
import { GetFormStats } from "@/actions/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

import Layout from "./(dashboard)/layout";

import { LuView } from "react-icons/lu";
import { FaWpforms } from "react-icons/fa";
import { HiCursorClick } from "react-icons/hi";
import { TbArrowBounce } from "react-icons/tb";
import { EyeOpenIcon } from "@radix-ui/react-icons";
import { Separator } from "@/components/ui/separator";
import CreateFormBtn from "@/components/create-form-btn";
export default function Home() {
  return (
    <Layout>
      <div className="container pt-4">
        <Suspense fallback={<StatsCards loading={true} />}>
          <CardStatsWrapper />
        </Suspense>
        <Separator className="my-6" />
        <h2 className="text-4xl font-bold col-span-2">Your forms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CreateFormBtn />
        </div>
      </div>
    </Layout>
  );
}

async function CardStatsWrapper() {
  const stats = await GetFormStats();
  return <StatsCards loading={false} data={stats} />;
}

interface StatsCardsProps {
  data?: Awaited<ReturnType<typeof GetFormStats>>;
  loading: boolean;
}

function StatsCards(props: StatsCardsProps) {
  const { data, loading } = props;
  return (
    <div className="w-full pt-8 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <StatsCard
        title="Total visitis"
        icon={<EyeOpenIcon className="text-blue-600" />}
        helperText="All time form visitis"
        value={data?.visits?.toLocaleString() || ""}
        loading={loading}
      />

      <StatsCard
        title="Total submissions"
        icon={<FaWpforms className="text-yellow-600" />}
        helperText="All time form submissions"
        value={data?.submissions?.toLocaleString() || ""}
        loading={loading}
      />

      <StatsCard
        title="Submission rate"
        icon={<HiCursorClick className="text-green-600" />}
        helperText="Visits that result in form submission"
        value={data?.submissionRate?.toLocaleString() + "%" || ""}
        loading={loading}
      />

      <StatsCard
        title="Bounce rate"
        icon={<TbArrowBounce className="text-red-600" />}
        helperText="Visits that leave without interecating"
        value={data?.submissionRate?.toLocaleString() + "%" || ""}
        loading={loading}
      />
    </div>
  );
}

interface StatsCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  helperText: string;
  loading: boolean;
}

function StatsCard({
  title,
  value,
  icon,
  helperText,
  loading,
}: StatsCardProps) {
  return (
    <Card className="rounded-none">
      <CardHeader className="flex flex-row items-end justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {loading && (
            <Skeleton>
              <span className="opacity-0">0</span>
            </Skeleton>
          )}

          {!loading && value}
        </div>
        <p className="text-xs text-muted-foreground pt-1">{helperText}</p>
      </CardContent>
    </Card>
  );
}
