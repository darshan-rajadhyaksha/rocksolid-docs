import Chip  from "rocksolidjs/Chip";

export default function Example() {
  return (
    <div class="flex gap-2">
      <Chip label="Default" color="default" />
      <Chip label="Success" color="success" />
      <Chip label="Warning" color="warning" />
      <Chip label="Info" color="info" />
      <Chip label="Error" color="error" />
    </div>
  );
}