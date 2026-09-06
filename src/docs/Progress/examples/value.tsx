import { createSignal, onCleanup } from "solid-js";
import Progress from "rocksolidjs/Progress";
import Typography from "rocksolidjs/Typography";

export default function Example() {
  const [value, setValue] = createSignal(0);

  const interval = setInterval(() => {
    setValue((current) => {
      if (current >= 100) {
        clearInterval(interval);
        return 100;
      }
      return current + 1;
    });
  }, 1000);

  onCleanup(() => clearInterval(interval));

  return (
    <div class="flex w-full max-w-md flex-col gap-2">
      <div class="flex items-center justify-between">
        <Typography>Uploading...</Typography>
        <Typography>{value()}%</Typography>
      </div>
      <Progress value={value()} />
    </div>
  );
}