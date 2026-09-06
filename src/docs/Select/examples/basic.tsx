import Label from "rocksolidjs/Label";
import Select from "rocksolidjs/Select";

export default function Example() {
  return (
    <div class="flex flex-col gap-1">
      <Label for="role">Role</Label>
      <Select
        id="role"
        options={[
          { label: "Administrator", value: "admin" },
          { label: "Editor", value: "editor" },
          { label: "Viewer", value: "viewer" },
        ]}
        onChange={(event: InputEvent) => {
          console.log((event.currentTarget as HTMLSelectElement).value);
        }}
      />
    </div>
  );
}