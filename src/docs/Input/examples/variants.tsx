import Input from "rocksolidjs/Input";

export default function Example() {
  return (
    <div class="flex flex-col gap-4">
      <Input
        variant="outlined"
        placeholder="Outlined variant"
        aria-label="Outlined variant"
      />
      <Input
        variant="filled"
        placeholder="Filled variant"
        aria-label="Filled variant"
      />
      <Input
        variant="ghost"
        placeholder="Ghost variant"
        aria-label="Ghost variant"
      />
    </div>
  );
}