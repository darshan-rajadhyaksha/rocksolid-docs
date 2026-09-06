import Chip  from "rocksolidjs/Chip";

export default function Example() {
  const handleDelete = (event: MouseEvent) => {
    console.log("Chip deleted", event);
  };
  return (
    <Chip
      label="Removable"
      onDelete={handleDelete}
    />
  );
}