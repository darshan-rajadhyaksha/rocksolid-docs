import Chip  from "rocksolidjs/Chip";

export default function Example() {
  return (
    <div class="flex gap-4">
      <Chip label="Disabled" disabled />
      <Chip label="Disabled" variant="outlined" disabled />
      <Chip label="Disabled with delete" disabled onDelete={() => {}} />
    </div>
  );
}