import type { ComponentProps } from "solid-js";
import Accordion from "rocksolidjs/Accordion";
import AccordionSummary from "rocksolidjs/AccordionSummary";
import AccordionDetails from "rocksolidjs/AccordionDetails";

export default function Example() {
  return (
    <div class="max-w-md">
      <Accordion>
        <AccordionSummary
          collapsedIcon={<TriangleIcon />}
          expandedIcon={<TriangleIcon class="rotate-180" />}
        >
          What is a molecule?
        </AccordionSummary>
        <AccordionDetails>
          A molecule is a group of two or more atoms held
          together by chemical bonds.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          collapsedIcon="+"
          expandedIcon="-"
        >
          What causes the seasons?
        </AccordionSummary>
        <AccordionDetails>
          Earth's seasons are primarily caused by the tilt
          of Earth's rotational axis as it orbits the Sun.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          collapsedIcon={<TriangleIcon />}
          expandedIcon={<TriangleIcon class="rotate-180" />}
        >
          What is sound?
        </AccordionSummary>
        <AccordionDetails>
          Sound is a mechanical wave produced by vibrations
          that travel through a medium such as air, water,
          or a solid material.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

const TriangleIcon = (
  props: ComponentProps<"svg">
) => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<path d="M0 0h24v24H0z" fill="none" />
		<path fill="currentColor" d="M10.285 3.858c.777-1.294 2.653-1.294 3.43 0l8.468 14.113c.8 1.333-.16 3.029-1.715 3.029H3.532c-1.554 0-2.514-1.696-1.715-3.029z" />
	</svg>
);