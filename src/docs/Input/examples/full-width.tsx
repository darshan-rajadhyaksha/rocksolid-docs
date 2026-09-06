import Input from "rocksolidjs/Input";

export default function Example() {
  return (
    <div class="w-full">
      <Input
        fullWidth
        placeholder="Enter your email address"
        aria-label="Email address"
      />
    </div>
  );
}