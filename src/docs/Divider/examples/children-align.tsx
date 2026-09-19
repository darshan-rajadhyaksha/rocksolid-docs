import Chip from "rocksolidjs/Chip";
import Divider from "rocksolidjs/Divider";

export default function Example() {
  return (
    <div class="flex flex-col w-full gap-4">
      <Divider>CENTER</Divider>
      <Divider align="start">START</Divider>
      <Divider align="end">END</Divider>
      <Divider>
        <Chip label="CENTER"/>
      </Divider>
    </div>
  );
}