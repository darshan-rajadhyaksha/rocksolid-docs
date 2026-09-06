import Input from "rocksolidjs/Input";

export default function Example() {
  return (
    <div class="flex flex-col gap-4">
      <Input
        type="text"
        placeholder="Full name"
        aria-label="Full name"
      />
      <Input
        type="email"
        placeholder="you@example.com"
        aria-label="Email address"
      />
      <Input
        type="password"
        placeholder="Enter your password"
        aria-label="Password"
      />
      <Input
        type="number"
        placeholder="Enter your age"
        aria-label="Age"
      />
      <Input
        type="search"
        placeholder="Search..."
        aria-label="Search"
      />
      <Input
        type="tel"
        placeholder="+1 555 123 4567"
        aria-label="Phone number"
      />
      <Input
        type="url"
        placeholder="https://example.com"
        aria-label="Website URL"
      />
    </div>
  );
}