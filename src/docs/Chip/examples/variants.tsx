import Chip  from "rocksolidjs/Chip";

export default function Example() {
  return (
    <div class="flex gap-4">
      <Chip label="Solid" variant="solid" />
      <Chip label="Filled" variant="filled" />
      <Chip label="Outlined" variant="outlined" />
    </div>
  );
}