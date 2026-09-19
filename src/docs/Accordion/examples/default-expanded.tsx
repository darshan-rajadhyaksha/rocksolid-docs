import Accordion from "rocksolidjs/Accordion";
import AccordionSummary from "rocksolidjs/AccordionSummary";
import AccordionDetails from "rocksolidjs/AccordionDetails";

export default function Example() {
  return (
    <div class="max-w-md">
      <Accordion defaultExpanded>
        <AccordionSummary>
          What is photosynthesis?
        </AccordionSummary>
        <AccordionDetails>
          Photosynthesis is the process by which plants use sunlight, water, and
          carbon dioxide to produce glucose and oxygen.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>
          What is cellular respiration?
        </AccordionSummary>
        <AccordionDetails>
          Cellular respiration is the process by which cells break down glucose
          to release energy in the form of ATP.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>
          What is DNA replication?
        </AccordionSummary>
        <AccordionDetails>
          DNA replication is the process by which a cell copies its DNA before
          cell division, ensuring that each daughter cell receives a complete
          genetic sequence.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}