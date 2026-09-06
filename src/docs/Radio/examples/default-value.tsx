import Radio from "rocksolidjs/Radio";
import RadioGroup from "rocksolidjs/RadioGroup";
import Label from "rocksolidjs/Label";

export default function Example() {
  return (
    <RadioGroup
      class="flex flex-col gap-4"
      name="payment-method"
      defaultValue="bank"
    >
      <div class="flex items-center gap-1">
        <Radio id="card" value="card" />
        <Label for="card">Credit card</Label>
      </div>
      <div class="flex items-center gap-1">
        <Radio id="bank" value="bank" />
        <Label for="bank">Bank transfer</Label>
      </div>
      <div class="flex items-center gap-1">
        <Radio id="paypal" value="paypal" />
        <Label for="paypal">PayPal</Label>
      </div>
    </RadioGroup>
  );
}