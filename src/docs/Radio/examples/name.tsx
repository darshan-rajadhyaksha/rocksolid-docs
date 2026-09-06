import Radio from "rocksolidjs/Radio";
import RadioGroup from "rocksolidjs/RadioGroup";
import Label from "rocksolidjs/Label";

export default function Example() {
  return (
    <RadioGroup
      class="flex flex-col gap-4"
      name="contact-method"
      defaultValue="email"
    >
      <div class="flex items-center gap-1">
        <Radio id="contact-email" value="email" />
        <Label for="contact-email">Email</Label>
      </div>
      <div class="flex items-center gap-1">
        <Radio id="contact-phone" value="phone" />
        <Label for="contact-phone">Phone</Label>
      </div>
      <div class="flex items-center gap-1">
        <Radio id="contact-sms" value="sms" />
        <Label for="contact-sms">SMS</Label>
      </div>
    </RadioGroup>
  );
}