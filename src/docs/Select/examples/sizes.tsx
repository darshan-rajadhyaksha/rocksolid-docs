import Select from "rocksolidjs/Select";

const options = [
  { label: "Low", value: "low" },
  { label: "Medium", value: "medium" },
  { label: "High", value: "high" },
];

export default function Example() {
  return (
    <div class="flex flex-col gap-4">
      <Select
        size="small"
        options={options}
      />
      <Select
        size="medium"
        options={options}
      />
      <Select
        size="large"
        options={options}
      />
    </div>
  );
}