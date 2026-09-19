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
        value="pending"
        options={options}
      />
      <Select
        color="success"
        value="pending"
        options={options}
      />
      <Select
        color="warning"
        value="pending"
        options={options}
      />
      <Select
        color="info"
        value="pending"
        options={options}
      />
      <Select
        color="error"
        value="pending"
        options={options}
      />
    </div>
  );
}