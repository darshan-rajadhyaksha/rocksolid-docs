import IconButton from "rocksolidjs/IconButton";
import DownloadIcon from "@/icons/download";

export default function Example() {
  return (
    <IconButton disabled aria-label="Download">
      <DownloadIcon />
    </IconButton>
  );
}