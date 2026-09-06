import { createSignal } from "solid-js";
import Label from "rocksolidjs/Label";
import Switch from "rocksolidjs/Switch";

export default function Example() {
  const [enabled, setEnabled] = createSignal(false);

  return (
    <div class="flex items-center gap-2">
      <Switch
        id="email-alerts"
        onChange={(_:Event, checked:boolean) => setEnabled(checked)}
      />
      <Label for="email-alerts">
        Email alerts: {enabled() ? "On" : "Off"}
      </Label>
    </div>
  );
}