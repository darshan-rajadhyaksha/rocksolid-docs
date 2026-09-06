import Radio from "rocksolidjs/Radio";
import RadioGroup from "rocksolidjs/RadioGroup";
import Label from "rocksolidjs/Label";

export default function Example() {
  return (
    <RadioGroup
      class="flex flex-col gap-4"
      name="plan"
    >
      <div class="flex items-center gap-1">
        <Radio id="free" value="free" />
        <Label for="free">Free</Label>
      </div>
      <div class="flex items-center gap-1">
        <Radio id="pro" value="pro" />
        <Label for="pro">Pro</Label>
      </div>
      <div class="flex items-center gap-1">
        <Radio id="enterprise" value="enterprise" />
        <Label for="enterprise">Enterprise</Label>
      </div>
    </RadioGroup>
  );
}