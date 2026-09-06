import { createSignal } from "solid-js";
import Select from "rocksolidjs/Select";

export default function Example() {
  const [priority, setPriority] = createSignal("medium");

  return (
    <div class="flex flex-col gap-3">
      <Select
        options={[
          { label: "Low", value: "low" },
          { label: "Medium", value: "medium" },
          { label: "High", value: "high" },
          { label: "Urgent", value: "urgent" },
        ]}
        onChange={(event) => {
          setPriority((event.currentTarget as HTMLSelectElement).value);
        }}
      />

      <p>Selected priority: {priority()}</p>
    </div>
  );
}