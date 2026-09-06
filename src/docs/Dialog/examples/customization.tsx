import { createSignal } from "solid-js";
import Button from "rocksolidjs/Button";
import Dialog from "rocksolidjs/Dialog";
import DialogActions from "rocksolidjs/DialogActions";
import DialogContent from "rocksolidjs/DialogContent";
import DialogTitle from "rocksolidjs/DialogTitle";
import Divider from "rocksolidjs/Divider";

export default function Example() {
  const [open, setOpen] = createSignal(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Show alert</Button>

      <Dialog
        open={open()}
        class="max-w-xs rounded-2xl"
        aria-labelledby="ios-dialog-title"
        onClose={() => setOpen(false)}
      >
        <DialogTitle
          id="ios-dialog-title"
          class="text-center"
        >
          Allow Notifications?
        </DialogTitle>
        <DialogContent class="px-6 pb-5 text-center text-balance">
            Notifications may include alerts, sounds, and icon badges.
        </DialogContent>
        <DialogActions class="flex gap-2">
          <Button
            variant="text"
            class="flex-1"
            onClick={() => setOpen(false)}
          >
            Don't Allow
          </Button>
          <Divider
            orientation="vertical" 
          />
          <Button
            variant="text"
            class="font-semibold flex-1"
            onClick={() => setOpen(false)}
          >
            Allow
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
