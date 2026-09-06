import Button from "rocksolidjs/Button";

export default function Example() {
  return (
    <div class="flex flex-wrap gap-4">
      <Button
        startIcon={<span aria-hidden>+</span>}
        >
        Start content
      </Button>
      <Button
        endIcon={<span aria-hidden>→</span>}
      >
        End content
      </Button>
      <Button
        startIcon={<span aria-hidden>+</span>}
        endIcon={<span aria-hidden>→</span>}
      >
        Both
      </Button>
    </div>
  );
}