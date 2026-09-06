import Checkbox from "rocksolidjs/Checkbox";

export default function Example() {
  return (
    <div class="flex flex-col gap-4">
      <div class="flex items-center gap-4">
        <Checkbox size="small" />
        <Checkbox size="medium" />
        <Checkbox size="large" />
      </div>
      <div class="flex items-center gap-4">
        <Checkbox size="small" defaultChecked />
        <Checkbox size="medium" defaultChecked />
        <Checkbox size="large" defaultChecked />
      </div>
    </div>
  );
}