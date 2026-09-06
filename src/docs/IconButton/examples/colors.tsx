import IconButton from "rocksolidjs/IconButton";
import DownloadIcon from "@/icons/download";

export default function Example() {
  return (
    <div class="flex items-center gap-4">
      <IconButton color="default" aria-label="Download">
        <DownloadIcon />
      </IconButton>
      <IconButton color="success" aria-label="Download">
        <DownloadIcon />
      </IconButton>
      <IconButton color="warning" aria-label="Download">
        <DownloadIcon />
      </IconButton>
      <IconButton color="info" aria-label="Download">
        <DownloadIcon />
      </IconButton>
      <IconButton color="error" aria-label="Download">
        <DownloadIcon />
      </IconButton>
    </div>
  );
}