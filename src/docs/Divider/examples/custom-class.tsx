import Divider from "rocksolidjs/Divider";
import Typography from "rocksolidjs/Typography";

export default function Example() {
  return (
    <div class="w-full max-w-sm text-center">
      <Typography variant="body1">Account</Typography>
      <Divider aria-hidden class="my-2 border-4 rounded-full" />
      <Typography variant="body1">Preferences</Typography>
    </div>
  );
}