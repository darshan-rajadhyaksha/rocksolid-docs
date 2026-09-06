import IconButton from "rocksolidjs/IconButton";
import DownloadIcon from "@/icons/download";

export default function Example() {
  return (
    <div class="flex items-center gap-4">
      <IconButton size="small" aria-label="Download">
        <DownloadIcon />
      </IconButton>
      <IconButton size="medium" aria-label="Download">
        <DownloadIcon />
      </IconButton>
      <IconButton size="large" aria-label="Download">
        <DownloadIcon />
      </IconButton>
    </div>
  );
}