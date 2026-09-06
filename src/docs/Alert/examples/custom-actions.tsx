import Alert from "rocksolidjs/Alert";
import Button from "rocksolidjs/Button";

export default function Example() {
  return (
    <Alert
      color="warning"
      action={<Button size="small" color="warning">Review</Button>}
      onClose={() => console.log("Close action")}
    >
      Please review your account settings.
    </Alert>
  );
}