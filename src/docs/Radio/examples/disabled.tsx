import Radio from "rocksolidjs/Radio";
import RadioGroup from "rocksolidjs/RadioGroup";
import Label from "rocksolidjs/Label";

export default function Example() {
  return (
    <RadioGroup
      name="delivery"
      defaultValue="standard"
      class="flex flex-col gap-4"
    >
      <div class="flex items-center gap-1">
        <Radio id="standard" value="standard" />
        <Label for="standard">
          Standard delivery
        </Label>
      </div>
      <div class="flex items-center gap-1">
        <Radio id="express" value="express" />
        <Label for="express">
          Express delivery
        </Label>
      </div>
      <div class="flex items-center gap-1">
        <Radio
          id="same-day"
          value="same-day"
          disabled
        />
        <Label for="same-day" disabled>
          Same-day delivery
        </Label>
      </div>
    </RadioGroup>
  );
}