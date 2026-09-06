import Skeleton from "rocksolidjs/Skeleton";

export default function Example() {
  return (
    <div class="flex flex-col gap-3">
      <Skeleton class="h-4 w-64" />
      <Skeleton class="h-4 w-48" />
      <Skeleton class="h-24 w-full" />
    </div>
  );
}