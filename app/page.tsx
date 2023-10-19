import { Suspense } from "react";
import { GetFormStats, GetForms } from "@/actions/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

import Layout from "./(dashboard)/layout";

import { LuView } from "react-icons/lu";
import { FaWpforms } from "react-icons/fa";
import { HiCursorClick } from "react-icons/hi";
import { TbArrowBounce } from "react-icons/tb";
import { EyeOpenIcon } from "@radix-ui/react-icons";
import { Separator } from "@/components/ui/separator";
import CreateFormBtn from "@/components/create-form-btn";
import { Form } from "@prisma/client";
import { Badge } from "@/components/ui/badge";
import { formatDistance } from "date-fns";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";

export default function Home() {
  return (
    <Layout>
      <div className="container pt-4">
        <Suspense fallback={<StatsCards loading={true} />}>
          <CardStatsWrapper />
        </Suspense>
        <Separator className="my-6" />
        <h2 className="text-4xl font-bold col-span-2 mb-8">Your forms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CreateFormBtn />
          <Suspense
            fallback={[1, 2, 3, 4].map((el) => (
              <FormCardSkeleton key={el} />
            ))}
          >
            <FormCards />
          </Suspense>
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

export function StatsCard({
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

function FormCardSkeleton() {
  return <Skeleton className="border-2 border-primary/20 h-48 w-full" />;
}

async function FormCards() {
  const forms = await GetForms();
  return (
    <>
      {forms.map((form) => (
        <FormCard key={form.id} form={form} />
      ))}
    </>
  );
}

function FormCard({ form }: { form: Form }) {
  return (
    <Card className="rounded-none">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 justify-between">
          <span className="truncate font-bold">{form.name}</span>
          {form.published && <Badge>Published</Badge>}
          {!form.published && <Badge variant="destructive">Draft</Badge>}
        </CardTitle>
        <CardDescription className="flex items-center justify-between text-muted-foreground text-sm">
          {formatDistance(form.createdAt, new Date(), {
            addSuffix: true,
          })}

          {!form.published && (
            <span className="flex items-center gap-2">
              <EyeOpenIcon className="text-muted-foreground" />
              <span>{form.visits.toLocaleString()}</span>
              <FaWpforms className="text-muted-foreground" />
              <span>{form.submission.toLocaleString()}</span>
            </span>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className=" h-5 truncate text-sm text-muted-foreground">
        {form.description || "No description"}
      </CardContent>
      <CardFooter>
        {form.published && (
          <Button
            asChild
            variant="secondary"
            className="w-full mt-2 text-md gap-4"
          >
            <Link href={`/form/${form.id}`}>
              View submissions <BiRightArrowAlt />
            </Link>
          </Button>
        )}
        {!form.published && (
          <Button
            asChild
            variant="secondary"
            className="w-full mt-2 text-md gap-4"
          >
            <Link href={`/builder/${form.id}`}>
              Edit form <FaEdit />
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
