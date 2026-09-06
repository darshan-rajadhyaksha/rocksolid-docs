import Input from "rocksolidjs/Input";
import Label from "rocksolidjs/Label";

export default function Example() {
  return (
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-1">
        <Label for="default-email" color="default">
          Email address
        </Label>
        <Input
          id="default-email"
          type="email"
          placeholder="you@example.com"
          fullWidth
        />
      </div>
      <div class="flex flex-col gap-1">
        <Label for="success-email" color="success">
          Email address
        </Label>
        <Input
          id="success-email"
          type="email"
          value="john@example.com"
          fullWidth
        />
      </div>
      <div class="flex flex-col gap-1">
        <Label for="warning-email" color="warning">
          Email address
        </Label>
        <Input
          id="warning-email"
          type="email"
          value="john@example"
          fullWidth
        />
      </div>
      <div class="flex flex-col gap-1">
        <Label for="info-email" color="info">
          Email address
        </Label>
        <Input
          id="info-email"
          type="email"
          placeholder="Enter your email"
          fullWidth
        />
      </div>
      <div class="flex flex-col gap-1">
        <Label for="error-email" color="error">
          Email address
        </Label>
        <Input
          id="error-email"
          type="email"
          value="invalid-email"
          fullWidth
        />
      </div>
    </div>
  );
}