import Button from "rocksolidjs/Button";
import ButtonGroup from "rocksolidjs/ButtonGroup";

export default function Example() {
  return (
    <div class="flex flex-col items-center gap-4">
      <ButtonGroup variant="solid">
        <Button>Solid</Button>
        <Button>Action</Button>
      </ButtonGroup>
      <ButtonGroup variant="filled">
        <Button>Filled</Button>
        <Button>Action</Button>
      </ButtonGroup>
      <ButtonGroup variant="outlined">
        <Button>Outlined</Button>
        <Button>Action</Button>
      </ButtonGroup>
      <ButtonGroup variant="ghost">
        <Button>Ghost</Button>
        <Button>Action</Button>
      </ButtonGroup>
    </div>
  );
}
