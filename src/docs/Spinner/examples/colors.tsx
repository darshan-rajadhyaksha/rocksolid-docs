import Spinner from "rocksolidjs/Spinner";

export default function Example() {
  return (
    <div class="flex items-center gap-4">
      <Spinner color="default" />
      <Spinner color="success" />
      <Spinner color="warning" />
      <Spinner color="info" />
      <Spinner color="error" />
    </div>
  );
}