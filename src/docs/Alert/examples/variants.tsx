import Alert from "rocksolidjs/Alert";

export default function Example() {
  return (
    <div class="w-full grid gap-4">
      <Alert color="success" variant="solid">
        This is a solid alert.
      </Alert>
      <Alert color="success" variant="filled">
        This is a filled alert.
      </Alert>
      <Alert color="success" variant="outlined">
        This is an outlined alert.
      </Alert>
    </div>
  );
}