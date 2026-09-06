import Button from "rocksolidjs/Button";

export default function Example() {
  return (
    <div class="flex flex-wrap gap-4">
      <Button color="default">Default</Button>
      <Button color="success">Success</Button>
      <Button color="warning">Warning</Button>
      <Button color="info">Info</Button>
      <Button color="error">Error</Button>
    </div>
  );
}