import Accordion from "rocksolidjs/Accordion";
import AccordionSummary from "rocksolidjs/AccordionSummary";
import AccordionDetails from "rocksolidjs/AccordionDetails";
import Typography from "rocksolidjs/Typography";

export default function Example() {
  return (
    <div class="max-w-md">
      <Accordion>
        <AccordionSummary>
          What is biology?
        </AccordionSummary>
        <AccordionDetails>
          <Typography class="mb-2">
            Biology is the study of living organisms.
          </Typography>
          <Accordion>
            <AccordionSummary>
              What is cell biology?
            </AccordionSummary>
            <AccordionDetails>
              Cell biology is the study of the structure and function of cells.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary>
              What is molecular biology?
            </AccordionSummary>
            <AccordionDetails>
              Molecular biology studies the molecular mechanisms of living systems.
            </AccordionDetails>
          </Accordion>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}