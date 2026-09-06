import Button from "rocksolidjs/Button";

export default function Example() {
  return (
    <div class="flex flex-wrap gap-4">
      <Button disabled>
        Disabled Solid
      </Button>
      <Button variant="outlined" disabled>
        Disabled Outlined
      </Button>
      <Button variant="filled" disabled>
        Disabled Filled
      </Button>
      <Button variant="ghost" disabled>
        Disabled Text
      </Button>
    </div>
  );
}