import Input from "rocksolidjs/Input";
import Label from "rocksolidjs/Label";

export default function Example() {
  return (
    <div class="flex flex-col gap-4">
      <div class="w-64">
        <Label for="address-1" class="mb-1" truncate required>
          Complete residential or business address
        </Label>
        <Input
          id="address-1"
          placeholder="Enter your address"
          fullWidth
        />
      </div>
      <div class="w-64">
        <Label for="address-2" class="mb-1">
          Complete residential or business address
        </Label>
        <Input
          id="address-2"
          placeholder="Enter your address"
          fullWidth
        />
      </div>
    </div>
  );
}