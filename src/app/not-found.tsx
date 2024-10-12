import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-blue-50 px-4 dark:bg-slate-950">
      <Image
        src="/placeholder.svg?height=200&width=200"
        alt="404 Illustration"
        width={200}
        height={200}
        className="mb-8"
      />
      <h1 className="mb-4 text-center text-4xl font-bold text-blue-900">
        Oops! Page Not Found
      </h1>
      <p className="mb-8 max-w-md text-center text-xl text-blue-700">
        We couldn't find the page you're looking for. It might have been moved
        or doesn't exist.
      </p>
      <Button
        as={Link}
        href="/"
        color="warning"
        variant="shadow"
        size="md"
        className="font-semibold"
      >
        Return to Home
      </Button>
    </div>
  );
}
