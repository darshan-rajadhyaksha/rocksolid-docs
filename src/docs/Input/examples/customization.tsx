import Input from "rocksolidjs/Input";

export default function Example() {
  return (
    <Input
      class="custom-input"
      placeholder="Search documentation"
      prefix={<span>Search</span>}
      suffix={<span>⌘K</span>}
      slotProps={{
        base: {
          "aria-label": "Search documentation",
        },
        prefix: {
          class: "text-muted-foreground",
        },
        suffix: {
          class: "text-muted-foreground",
        },
      }}
    />
  );
}