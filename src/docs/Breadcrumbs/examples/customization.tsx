import Breadcrumbs from "rocksolidjs/Breadcrumbs";
import Link from "rocksolidjs/Link";
import Typography from "rocksolidjs/Typography";

export default function Example() {
  return (
    <Breadcrumbs
      aria-label="Breadcrumb"
      class="text-sm"
      seperator="›"
      slotProps={{
        ol: {
          class: "flex items-center gap-2.5",
        },
        li: {
          class: "text-gray-600 dark:text-gray-300",
        },
        seperator: {
          class: "text-gray-400 dark:text-gray-500 text-lg",
        },
      }}
    >
      <Link class="py-1 px-2 rounded-sm bg-neutral-200 text-neutral-900 dark:bg-neutral-800 dark:text-white" href="/">Home</Link>
      <Link class="py-1 px-2 rounded-sm bg-neutral-200 text-neutral-900 dark:bg-neutral-800 dark:text-white" href="/products">Products</Link>
      <Typography as="span" color="textPrimary">Details</Typography>
    </Breadcrumbs>
  );
}