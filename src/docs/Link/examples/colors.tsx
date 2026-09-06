import Link from "rocksolidjs/Link";

export default function Example() {
  return (
    <div class="flex flex-wrap justify-center items-center gap-4">
      <Link href="#" color="inherit">
        Inherit
      </Link>
      <Link href="#" color="default">
        Default
      </Link>
      <Link href="#" color="success">
        Success
      </Link>
      <Link href="#" color="warning">
        Warning
      </Link>
      <Link href="#" color="info">
        Info
      </Link>
      <Link href="#" color="error">
        Error
      </Link>
      <Link href="#" color="textPrimary">
        TextPrimary
      </Link>
      <Link href="#" color="textSecondary">
        TextSecondary
      </Link>
      <Link href="#" color="textTertiary">
        TextTertiary
      </Link>
      <Link href="#" color="disabled">
        Disabled
      </Link>
    </div>
  );
}