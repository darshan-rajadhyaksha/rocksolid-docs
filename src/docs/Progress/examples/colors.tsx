import Progress from "rocksolidjs/Progress";
import Typography from "rocksolidjs/Typography";

export default function Example() {
  return (
    <div class="flex w-full max-w-md flex-col gap-4">
      <div class="flex flex-col gap-2">
        <Typography>Default</Typography>
        <Progress color="default" value={45} />
      </div>
      <div class="flex flex-col gap-2">
        <Typography>Success</Typography>
        <Progress color="success" value={100} />
      </div>
      <div class="flex flex-col gap-2">
        <Typography>Warning</Typography>
        <Progress color="warning" value={65} />
      </div>
      <div class="flex flex-col gap-2">
        <Typography>Info</Typography>
        <Progress color="info" value={35} />
      </div>
      <div class="flex flex-col gap-2">
        <Typography>Error</Typography>
        <Progress color="error" value={20} />
      </div>
    </div>
  );
}