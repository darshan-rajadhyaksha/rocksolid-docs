import Radio from "rocksolidjs/Radio";
import Label from "rocksolidjs/Label";

export default function Example() {
  const colors = [
    "default",
    "success",
    "warning",
    "info",
    "error",
  ] as const;

  return (
    <div class="flex flex-col gap-4">
      {colors.map((color) => (
        <div class="flex items-center gap-1">
          <Radio
            id={`radio-${color}`}
            value={color}
            color={color}
          />
          <Label for={`radio-${color}`}>
            {color}
          </Label>
        </div>
      ))}
    </div>
  );
}