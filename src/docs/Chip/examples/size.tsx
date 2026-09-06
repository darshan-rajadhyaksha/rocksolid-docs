import Chip  from "rocksolidjs/Chip";

export default function Example() {
  return (
    <div class="flex gap-4 items-center">
      <Chip label="Small" size="small" />
      <Chip label="Medium" size="medium" />
      <Chip label="Large" size="large" />
    </div>
  );
}