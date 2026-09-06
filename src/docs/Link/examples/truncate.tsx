import Link from "rocksolidjs/Link";

export default function Example() {
  return (
    <div class="w-64">
      <Link href="#" truncate>
        This is a very long link that will be truncated when it exceeds
        the available width.
      </Link>
    </div>
  );
}