import Link from "rocksolidjs/Link";

export default function Example() {
  return (
    <div class="flex flex-wrap items-center gap-4">
      <Link href="#" underline="always">
        Always
      </Link>
      <Link href="#" underline="hover">
        Hover
      </Link>
      <Link href="#" underline="none">
        None
      </Link>
    </div>
  );
}