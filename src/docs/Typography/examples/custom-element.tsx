import Typography from "rocksolidjs/Typography";

export default function Example() {
  return (
    <div class="flex flex-col gap-2">
      <Typography variant="h3" as="p">
        A heading style rendered as a paragraph
      </Typography>
      <Typography variant="body1" as="span">
        Body text rendered as a span.
      </Typography>
    </div>
  );
}