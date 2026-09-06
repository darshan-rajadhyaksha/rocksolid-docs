import Button from "rocksolidjs/Button";

export default function Example() {
  return (
    <div class="flex flex-col gap-4">
      <div class="flex flex-wrap gap-4">
        <Button variant="solid" color="default">
          Solid
        </Button>
        <Button variant="solid" color="success">
          Solid
        </Button>
        <Button variant="solid" color="error">
          Solid
        </Button>
      </div>
      <div class="flex flex-wrap gap-4">
        <Button variant="outlined" color="default">
          Outlined
        </Button>
        <Button variant="outlined" color="success">
          Outlined
        </Button>
        <Button variant="outlined" color="error">
          Outlined
        </Button>
      </div>
      <div class="flex flex-wrap gap-4">
        <Button variant="filled" color="default">
          Filled
        </Button>
        <Button variant="filled" color="success">
          Filled
        </Button>
        <Button variant="filled" color="error">
          Filled
        </Button>
      </div>
      <div class="flex flex-wrap gap-4">
        <Button variant="ghost" color="default">
          Text
        </Button>
        <Button variant="ghost" color="success">
          Text
        </Button>
        <Button variant="ghost" color="error">
          Text
        </Button>
      </div>
    </div>
  );
}