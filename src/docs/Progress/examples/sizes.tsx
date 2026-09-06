import Progress from "rocksolidjs/Progress";
import Typography from "rocksolidjs/Typography";

export default function Example() {
  return (
    <div class="flex w-full max-w-md flex-col gap-4">
      <div class="flex flex-col gap-2">
        <Typography>Small</Typography>
        <Progress size="small" value={60} />
      </div>
      <div class="flex flex-col gap-2">
        <Typography>Medium</Typography>
        <Progress size="medium" value={60} />
      </div>
      <div class="flex flex-col gap-2">
        <Typography>Large</Typography>
        <Progress size="large" value={60} />
      </div>
    </div>
  );
}