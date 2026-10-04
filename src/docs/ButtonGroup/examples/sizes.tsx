import Button from "rocksolidjs/Button";
import ButtonGroup from "rocksolidjs/ButtonGroup";

export default function Example() {
  return (
    <div class="flex flex-col items-center gap-4">
      <ButtonGroup size="small">
        <Button>Small</Button>
        <Button>Action</Button>
      </ButtonGroup>
      <ButtonGroup size="medium">
        <Button>Medium</Button>
        <Button>Action</Button>
      </ButtonGroup>
      <ButtonGroup size="large">
        <Button>Large</Button>
        <Button>Action</Button>
      </ButtonGroup>
    </div>
  );
}
