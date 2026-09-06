import Progress from "rocksolidjs/Progress";
import Typography from "rocksolidjs/Typography";

export default function Example() {
  return (
    <div class="flex w-full max-w-md flex-col gap-2">
      <div class="flex justify-between text-sm">
        <Typography as="span">Step 7 of 10</Typography>
        <Typography as="span">70%</Typography>
      </div>
      <Progress
        min={0}
        max={10}
        value={7}
        color="info"
      />
    </div>
  );
}