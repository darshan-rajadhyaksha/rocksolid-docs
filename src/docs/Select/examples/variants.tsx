import Select from "rocksolidjs/Select";

const options = [
  { label: "Monthly", value: "monthly" },
  { label: "Yearly", value: "yearly" },
];

export default function Example() {
  return (
    <div class="flex flex-col gap-4">
      <Select
        variant="filled"
        options={options}
      />
      <Select
        variant="outlined"
        options={options}
      />
      <Select
        variant="ghost"
        options={options}
      />
    </div>
  );
}