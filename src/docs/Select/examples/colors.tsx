import Select from "rocksolidjs/Select";

const options = [
  { label: "Pending", value: "pending" },
  { label: "In progress", value: "in-progress" },
  { label: "Completed", value: "completed" },
];

export default function Example() {
  return (
    <div class="flex flex-col gap-4">
      <Select
        color="default"
        options={options}
      />
      <Select
        color="success"
        options={options}
      />
      <Select
        color="warning"
        options={options}
      />
      <Select
        color="info"
        options={options}
      />
      <Select
        color="error"
        options={options}
      />
    </div>
  );
}