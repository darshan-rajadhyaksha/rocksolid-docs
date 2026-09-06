import Typography from "rocksolidjs/Typography";

export default function Example() {
  return (
    <div class="max-w-xs">
      <Typography truncate>
        This is a long piece of text that will be truncated when it does
        not fit within the available space.
      </Typography>
    </div>
  );
}