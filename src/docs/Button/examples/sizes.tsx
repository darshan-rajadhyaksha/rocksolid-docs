import Button from "rocksolidjs/Button";

export default function Example() {
  return (
    <div class="flex flex-col gap-4">
      <div class="flex flex-wrap gap-4">
        <Button size="small" color="default">
          Small
        </Button>
        <Button size="small" color="success">
          Small
        </Button>
        <Button size="small" color="error">
          Small
        </Button>
      </div>
      <div class="flex flex-wrap gap-4">
        <Button size="medium" color="default">
          Medium
        </Button>
        <Button size="medium" color="success">
          Medium
        </Button>
        <Button size="medium" color="error">
          Medium
        </Button>
      </div>
      <div class="flex flex-wrap gap-4">
        <Button size="large" color="default">
          Large
        </Button>
        <Button size="large" color="success">
          Large
        </Button>
        <Button size="large" color="error">
          Large
        </Button>
      </div>
    </div>
  );
}