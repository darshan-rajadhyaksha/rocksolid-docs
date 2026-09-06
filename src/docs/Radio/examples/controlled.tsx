import { createSignal } from "solid-js";
import Radio from "rocksolidjs/Radio";
import RadioGroup from "rocksolidjs/RadioGroup";
import Label from "rocksolidjs/Label";
import Typography from "rocksolidjs/Typography";

export default function Example() {
  const [plan, setPlan] = createSignal("free");

  return (
    <div class="flex flex-col gap-2 max-w-sm">
      <RadioGroup
        class="flex flex-col gap-3"
        name="controlled-plan"
        value={plan()}
        onChange={(_, value) => setPlan(value)}
      >
        <div class="flex items-center gap-1">
          <Radio id="controlled-free" value="free"/>
          <Label for="controlled-free">Free</Label>
        </div>
        <div class="flex items-center gap-1">
          <Radio id="controlled-pro" value="pro" />
          <Label for="controlled-pro">Pro</Label>
        </div>
        <div class="flex items-center gap-1">
          <Radio id="controlled-enterprise" value="enterprise" />
          <Label for="controlled-enterprise">
            Enterprise
          </Label>
        </div>
      </RadioGroup>

      <Typography>
        Selected plan: {plan()}
      </Typography>
    </div>
  );
}