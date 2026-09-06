import Button from "rocksolidjs/Button";
import Divider from "rocksolidjs/Divider";

export default function Example() {
  return (
    <div class="flex items-center rounded-lg border border-neutral-200 dark:border-neutral-800">
      <Button variant="ghost" class="rounded-none rounded-tl-[inherit] rounded-bl-[inherit]">Edit</Button>
      <Divider aria-hidden orientation="vertical" />
      <Button variant="ghost" class="rounded-none">Duplicate</Button>
      <Divider aria-hidden orientation="vertical" />
      <Button variant="ghost" class="rounded-none rounded-tr-[inherit] rounded-br-[inherit]">Delete</Button>
    </div>
  );
}