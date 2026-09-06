import { createSignal } from "solid-js";
import Checkbox from "rocksolidjs/Checkbox";

export default function Example() {
  const [checked, setChecked] = createSignal(false);

  return (
    <Checkbox
      checked={checked()}
      onChange={(_, value) => setChecked(value)}
    />
  );
}