import Alert from "rocksolidjs/Alert";

export default function Example() {
  return (
    <div class="w-full grid gap-4">
      <Alert
        color="info"
        variant="solid"
        onClose={(event: MouseEvent) => {
          console.log("Alert closed", event);
        }}
      >
        This alert can be dismissed.
      </Alert>
      <Alert
        color="info"
        onClose={(event: MouseEvent) => {
          console.log("Alert closed", event);
        }}
      >
        This alert can be dismissed.
      </Alert>
      <Alert
        color="info"
        variant="outlined"
        onClose={(event: MouseEvent) => {
          console.log("Alert closed", event);
        }}
      >
        This alert can be dismissed.
      </Alert>
    </div>
  );
}