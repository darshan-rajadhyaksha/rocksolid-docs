import Radio from "rocksolidjs/Radio";
import Label from "rocksolidjs/Label";

export default function Example() {
  return (
    <div class="flex flex-col gap-4">
      <div class="flex items-center gap-1">
        <Radio
          id="small-radio"
          value="small"
          size="small"
          checked
        />
        <Label for="small-radio">Small</Label>
      </div>
      <div class="flex items-center gap-1">
        <Radio
          id="medium-radio"
          value="medium"
          size="medium"
          checked
        />
        <Label for="medium-radio">Medium</Label>
      </div>
      <div class="flex items-center gap-1">
        <Radio
          id="large-radio"
          value="large"
          size="large"
          checked
        />
        <Label for="large-radio">Large</Label>
      </div>
    </div>
  );
}