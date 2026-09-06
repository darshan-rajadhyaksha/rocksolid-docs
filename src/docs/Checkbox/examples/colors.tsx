import Checkbox from "rocksolidjs/Checkbox";

export default function Example() {
  return (
    <div class="flex gap-4">
      <Checkbox color="default" defaultChecked />
      <Checkbox color="success" defaultChecked />
      <Checkbox color="warning" defaultChecked />
      <Checkbox color="info" defaultChecked />
      <Checkbox color="error" defaultChecked />
    </div>
  );
}