import { createSignal } from "solid-js";
import Label from "rocksolidjs/Label";
import Switch from "rocksolidjs/Switch";

export default function Example() {
  const [enabled, setEnabled] = createSignal(false);

  return (
    <div class="flex items-center gap-2">
      <Switch
        id="dark-mode"
        checked={enabled()}
        onChange={(_: Event, checked: boolean) => setEnabled(checked)}
      />
      <Label for="dark-mode">
        Dark mode: {enabled() ? "On" : "Off"}
      </Label>
    </div>
  );
}