import Button from "rocksolidjs/Button";
import ButtonGroup from "rocksolidjs/ButtonGroup";

export default function Example() {
  return (
    <div class="flex flex-col items-center gap-4">
      <ButtonGroup color="default">
        <Button>Default</Button>
        <Button>Action</Button>
      </ButtonGroup>
      <ButtonGroup color="success">
        <Button>Success</Button>
        <Button>Action</Button>
      </ButtonGroup>
      <ButtonGroup color="warning">
        <Button>Warning</Button>
        <Button>Action</Button>
      </ButtonGroup>
      <ButtonGroup color="info">
        <Button>Info</Button>
        <Button>Action</Button>
      </ButtonGroup>
      <ButtonGroup color="error">
        <Button>Delete</Button>
        <Button>Remove</Button>
      </ButtonGroup>
    </div>
  );
}
