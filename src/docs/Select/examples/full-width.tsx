import Select from "rocksolidjs/Select";

export default function Example() {
  return (
    <div class="w-full">
      <Select
        fullWidth
        options={[
          { label: "Credit card", value: "credit-card" },
          { label: "Debit card", value: "debit-card" },
          { label: "UPI", value: "upi" },
          { label: "Bank transfer", value: "bank-transfer" },
        ]}
      />
    </div>
  );
}