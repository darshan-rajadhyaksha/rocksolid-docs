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
        disabled
      />
      <Select
        variant="outlined"
        options={options}
        disabled
      />
      <Select
        variant="ghost"
        options={options}
        disabled
      />
    </div>
  );
}