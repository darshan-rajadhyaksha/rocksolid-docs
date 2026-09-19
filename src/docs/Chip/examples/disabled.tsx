import Chip  from "rocksolidjs/Chip";

export default function Example() {
  return (
    <div class="flex gap-4 flex-wrap justify-center">
      <Chip label="Disabled" disabled />
      <Chip label="Clickable Disabled" disabled onClick={() => {}} />
      <Chip label="Disabled" variant="outlined" disabled />
      <Chip label="Disabled with delete" disabled onDelete={() => {}} />
    </div>
  );
}