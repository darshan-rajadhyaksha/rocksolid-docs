import Accordion from "rocksolidjs/Accordion";
import AccordionSummary from "rocksolidjs/AccordionSummary";
import AccordionDetails from "rocksolidjs/AccordionDetails";

export default function Example() {
  return (
    <div class="max-w-md space-y-2">
      <Accordion
        class="overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-950"
      >
        <AccordionSummary
          class="px-4 py-3 font-semibold text-neutral-900 dark:text-neutral-100"
        >
          What is photosynthesis?
        </AccordionSummary>
        <AccordionDetails
          class="border-t border-neutral-200 px-4 text-sm leading-6 text-neutral-600 dark:border-neutral-800 dark:text-neutral-400"
        >
          Photosynthesis is the process by which plants,
          algae, and some bacteria convert light energy into
          chemical energy. Plants use sunlight, water, and
          carbon dioxide to produce glucose and oxygen.
        </AccordionDetails>
      </Accordion>
      <Accordion
        class="overflow-hidden rounded-xl border border-blue-200 bg-blue-50/50 dark:border-blue-900 dark:bg-blue-950/20"
      >
        <AccordionSummary
          class="px-5 py-4 font-medium text-blue-900 dark:text-blue-100"
        >
          How does gravity work?
        </AccordionSummary>
        <AccordionDetails
          class="border-t border-blue-200 px-5 text-sm leading-6 text-blue-800 dark:border-blue-900 dark:text-blue-200"
        >
          Gravity is the attractive force between objects with
          mass. It keeps planets in orbit around stars and
          causes objects near Earth's surface to accelerate
          toward the ground.
        </AccordionDetails>
      </Accordion>
      <Accordion
        class="overflow-hidden rounded-2xl border border-purple-200 bg-purple-50/50 dark:border-purple-900 dark:bg-purple-950/20"
      >
        <AccordionSummary
          class="px-6 py-4 text-lg font-semibold text-purple-900 dark:text-purple-100"
        >
          What is a black hole?
        </AccordionSummary>
        <AccordionDetails
          class="border-t border-purple-200 px-6 text-sm leading-7 text-purple-800 dark:border-purple-900 dark:text-purple-200"
        >
          A black hole is a region of spacetime where gravity
          is extremely strong. Beyond its event horizon,
          nothing can escape, including light.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}