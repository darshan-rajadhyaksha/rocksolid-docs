import Checkbox from "rocksolidjs/Checkbox";

export default function Example() {
  return (
    <Checkbox
      defaultChecked
      slotProps={{
        base: {
          class: `
            text-purple-600
            dark:text-purple-400
            hover:text-purple-700
            dark:hover:text-purple-300
          `,
        },
      }}
    />
  );
}