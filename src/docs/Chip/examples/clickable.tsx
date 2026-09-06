import Chip  from "rocksolidjs/Chip";

export default function Example() {
  const handleClick = (event: MouseEvent) => {
    console.log("Chip clicked", event);
  };
  return (
    <Chip
      label="Click me"
      onClick={handleClick} 
    />
  );
}
