import Alert from "rocksolidjs/Alert";

export default function Example() {
  return (
    <div class="grid gap-4 w-full">
      <Alert color="default">
        This is a default alert.
      </Alert>
      <Alert color="success">
        Your changes were saved successfully.
      </Alert>
      <Alert color="warning">
        Please review your changes before continuing.
      </Alert>
      <Alert color="info">
        A new update is available.
      </Alert>
      <Alert color="error">
        Something went wrong. Please try again.
      </Alert>
    </div>
  );
}