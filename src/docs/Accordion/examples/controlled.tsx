import { createSignal } from "solid-js";
import Accordion from "rocksolidjs/Accordion";
import AccordionSummary from "rocksolidjs/AccordionSummary";
import AccordionDetails from "rocksolidjs/AccordionDetails";

export default function Example() {
  const [expanded, setExpanded] = createSignal<number | null>(null);

  const handleChange = (index: number) => {
    setExpanded(expanded() === index ? null : index);
  };

  return (
    <div class="max-w-md">
      <Accordion
        expanded={expanded() === 0}
        onChange={() => handleChange(0)}
      >
        <AccordionSummary>
          What is an electric current?
        </AccordionSummary>
        <AccordionDetails>
          Electric current is the flow of electric charge
          through a conductor or other medium.
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded() === 1}
        onChange={() => handleChange(1)}
      >
        <AccordionSummary>
          What is kinetic energy?
        </AccordionSummary>
        <AccordionDetails>
          Kinetic energy is the energy an object possesses
          because of its motion. It depends on the object's
          mass and velocity.
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded() === 2}
        onChange={() => handleChange(2)}
      >
        <AccordionSummary>
          What is the water cycle?
        </AccordionSummary>
        <AccordionDetails>
          The water cycle describes the continuous movement
          of water through evaporation, condensation,
          precipitation, and collection.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}