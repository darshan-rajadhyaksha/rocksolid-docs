import { createSignal } from "solid-js";
import Input from "rocksolidjs/Input";

export default function Example() {
  const [value, setValue] = createSignal("");
  const maxLength = 10;
  return (
    <Input
      value={value()}
      onInput={(event: InputEvent) => setValue((event.target as HTMLInputElement).value)}
      placeholder="Type something..."
      aria-label="Controlled input"
      color={value().length > maxLength ? "error" : "default"}
      suffix={`${value().length } / ${maxLength}`}
    />
  );
}