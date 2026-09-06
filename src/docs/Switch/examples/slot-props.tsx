import Label from "rocksolidjs/Label";
import Switch from "rocksolidjs/Switch";

export default function Example() {
  return (
    <div class="flex items-center gap-3">
      <Switch
        id="custom-switch"
        defaultChecked
        slotProps={{
          base: {
            "aria-label": "Custom switch",
            class: "rounded-md",
          },
          handle: {
            class: "rounded-sm",
          },
        }}
      />
      <Label for="custom-switch">Custom switch</Label>
    </div>
  );
}