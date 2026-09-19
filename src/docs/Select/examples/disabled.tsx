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
        value="monthly"
        options={options}
        disabled
      />
      <Select
        variant="outlined"
        value="monthly"
        options={options}
        disabled
      />
      <Select
        variant="ghost"
        value="monthly"
        options={options}
        disabled
      />
    </div>
  );
}