import Skeleton from "rocksolidjs/Skeleton";

export default function Example() {
  return (
    <div class="flex items-center gap-4">
      <Skeleton variant="circle" />
      <Skeleton variant="rectangle" />
    </div>
  );
}