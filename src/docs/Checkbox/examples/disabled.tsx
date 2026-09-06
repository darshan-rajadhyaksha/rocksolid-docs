import Checkbox from "rocksolidjs/Checkbox";

export default function Example() {
  return (
    <div class="flex gap-4">
      <Checkbox disabled />
      <Checkbox disabled defaultChecked />
    </div>
  );
}