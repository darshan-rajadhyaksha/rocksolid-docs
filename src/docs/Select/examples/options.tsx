import Select from "rocksolidjs/Select";

export default function Example() {
  return (
    <Select
      options={[
        { label: "Engineering", value: "engineering" },
        { label: "Design", value: "design" },
        { label: "Marketing", value: "marketing" },
        { label: "Sales", value: "sales", disabled: true },
        { label: "Support", value: "support" },
      ]}
    />
  );
}