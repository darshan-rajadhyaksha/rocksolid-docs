import Textarea from "rocksolidjs/Textarea";

export default function Example() {
  return (
    <div class="flex flex-col gap-4">
      <Textarea
        color="default"
        placeholder="Default feedback"
        aria-label="Default feedback"
      />
      <Textarea
        color="success"
        value="Your response has been saved successfully."
        aria-label="Success message"
      />
      <Textarea
        color="warning"
        placeholder="Add any important details..."
        aria-label="Warning"
      />
      <Textarea
        color="info"
        value="Additional information is required for this request."
        aria-label="Information"
      />
      <Textarea
        color="error"
        placeholder="Please explain what went wrong"
        aria-label="Error details"
      />
    </div>
  );
}