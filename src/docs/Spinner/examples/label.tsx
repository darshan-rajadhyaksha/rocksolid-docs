import Spinner from "rocksolidjs/Spinner";

export default function Example() {
  return (
    <div class="flex flex-col gap-4">
      <Spinner label="Loading results" />
      <Spinner label="Saving" />
      <Spinner label="Processing payment" />
    </div>
  );
}