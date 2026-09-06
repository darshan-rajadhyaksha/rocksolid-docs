import Input from "rocksolidjs/Input";

export default function Example() {
  return (
    <div class="flex flex-col gap-4">
      <Input
        color="default"
        placeholder="Default"
        aria-label="Default"
      />
      <Input
        color="success"
        value="john@example.com"
        aria-label="Valid email"
      />
      <Input
        color="warning"
        value="john@example"
        aria-label="Email with warning"
      />
      <Input
        color="info"
        placeholder="Enter your username"
        aria-label="Username"
      />
      <Input
        color="error"
        value="invalid-value"
        aria-label="Invalid value"
      />
    </div>
  );
}