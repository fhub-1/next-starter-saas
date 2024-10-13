import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Skeleton } from "@nextui-org/skeleton";

export default function SkeletonLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
      <Card className="w-full max-w-md">
        <CardHeader className="flex flex-col items-center pb-0 pt-8">
          <Skeleton className="h-20 w-20 rounded-full" />
          <Skeleton className="mt-4 h-8 w-3/4 rounded-lg" />
          <Skeleton className="mt-2 h-4 w-1/2 rounded-lg" />
        </CardHeader>
        <CardBody className="flex flex-col items-center py-8">
          <Skeleton className="h-12 w-64 rounded-lg" />
          <div className="mt-8 flex w-full flex-col space-y-3">
            <Skeleton className="h-4 w-full rounded-lg" />
            <Skeleton className="h-4 w-full rounded-lg" />
            <Skeleton className="h-4 w-3/4 rounded-lg" />
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
