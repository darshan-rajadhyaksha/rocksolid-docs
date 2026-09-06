import Textarea from "rocksolidjs/Textarea";

export default function Example() {
  return (
    <Textarea
      disabled
      value="This response is no longer editable."
      aria-label="Disabled response"
    />
  );
}