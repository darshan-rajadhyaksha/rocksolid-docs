import type { ComponentProps } from "solid-js";

const Stackblitz = (
  props: ComponentProps<"svg">,
) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none" />
    <path fill="currentColor" d="M10.83 14.38c.09-.18-.09-.36-.28-.36H5.11c-.28 0-.38-.27-.19-.45l10.41-11.5c.19-.18.56 0 .47.27l-2.53 7.37c-.09.18 0 .36.19.36h5.44c.28 0 .38.27.19.45L8.68 21.93c-.19.18-.56 0-.47-.27l2.63-7.28Z" />
  </svg>
);

export default Stackblitz;