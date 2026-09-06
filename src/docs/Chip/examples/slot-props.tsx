import Chip  from "rocksolidjs/Chip";

export default function Example() {
  return (
    <Chip
      label="Custom label"
      onDelete={() => {}}
      slotProps={{
        label: {
          class: "font-semibold",
        },
        deleteIcon: {
          class: "text-red-500",
        },
      }}
    />
  );
}