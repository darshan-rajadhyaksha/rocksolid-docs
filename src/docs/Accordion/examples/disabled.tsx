import Accordion from "rocksolidjs/Accordion";
import AccordionSummary from "rocksolidjs/AccordionSummary";
import AccordionDetails from "rocksolidjs/AccordionDetails";

export default function DisabledAccordion() {
  return (
    <div class="max-w-md">
      <Accordion>
        <AccordionSummary>
          What is the speed of light?
        </AccordionSummary>
        <AccordionDetails>
          Light travels through a vacuum at approximately
          299,792 kilometers per second.
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary>
          What is quantum entanglement?
        </AccordionSummary>
        <AccordionDetails>
          Quantum entanglement is a phenomenon where two
          particles can share a correlated quantum state,
          even when separated by large distances.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>
          What is evaporation?
        </AccordionSummary>
        <AccordionDetails>
          Evaporation occurs when molecules at the surface
          of a liquid gain enough energy to escape into
          the surrounding environment as a gas.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}