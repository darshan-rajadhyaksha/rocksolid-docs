import type { ComponentProps } from "solid-js";
import Radio from "rocksolidjs/Radio";

export default function Example() {
  return (
    <Radio
      name="option"
      value="option-1"
      checkedIcon={<CheckedIcon class="text-4xl" />}
      uncheckedIcon={<UncheckedIcon class="text-4xl" />}
    >
      Option 1
    </Radio>
  );
}

const CheckedIcon = (
  props: ComponentProps<"svg">,
) => (
  <svg
    {...props}
    aria-hidden={true}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
  >
    <path
      d="M0 0h24v24H0z"
      fill="none"
    />
    <path
      fill="currentColor"
      d="M12 5c-3.86 0-7 3.14-7 7s3.14 7 7 7s7-3.14 7-7s-3.14-7-7-7m0 10c-1.63 0-3-1.37-3-3s1.37-3 3-3s3 1.37 3 3s-1.37 3-3 3"
    />
  </svg>
);

const UncheckedIcon = (
  props: ComponentProps<"svg">,
) => (
  <svg
    {...props}
    aria-hidden={true}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
  >
    <path
      d="M0 0h24v24H0z"
      fill="none"
    />
    <path
      fill="currentColor"
      d="M12 5c-3.86 0-7 3.14-7 7s3.14 7 7 7s7-3.14 7-7s-3.14-7-7-7m0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5"
    />
  </svg>
);