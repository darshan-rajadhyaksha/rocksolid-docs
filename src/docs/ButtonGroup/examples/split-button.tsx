import Button from "rocksolidjs/Button";
import ButtonGroup from "rocksolidjs/ButtonGroup";
import type { ComponentProps } from "solid-js";

export default function Example() {
  return (
    <ButtonGroup>
      <Button>
        Export
      </Button>
      <Button aria-label="More export options" class="px-2">
        <ChevronDown class="text-lg" />
      </Button>
    </ButtonGroup>
  );
}

const ChevronDown = (
  props: ComponentProps<"svg">,
) => (
  <svg 
    {...props}
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
      d="m12 15.41l5.71-5.7l-1.42-1.42l-4.29 4.3l-4.29-4.3l-1.42 1.42z"
    />
  </svg>
);