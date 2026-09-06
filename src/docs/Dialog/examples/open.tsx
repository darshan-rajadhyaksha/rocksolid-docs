import { createEffect, createSignal } from "solid-js";
import Button from "rocksolidjs/Button";
import Dialog from "rocksolidjs/Dialog";
import DialogActions from "rocksolidjs/DialogActions";
import DialogContent from "rocksolidjs/DialogContent";
import DialogTitle from "rocksolidjs/DialogTitle";

export default function Example() {
  const [open, setOpen] = createSignal(false);

  let openButton!: HTMLButtonElement, 
      closeBtn!: HTMLButtonElement;

  createEffect(() => {
    if (open()) {
      closeBtn.focus();
    }
  });

  const handleDialogClose = () => {
    setOpen(false);
    openButton.focus();
  };

  return (
    <>
      <Button
        ref={openButton}
        onClick={() => setOpen(true)}
      >
        Open dialog
      </Button>

      <Dialog
        open={open()}
        aria-labelledby="welcome-dialog-title"
        onClose={handleDialogClose}
        class="max-w-md"
      >
        <DialogTitle id="welcome-dialog-title">
          Welcome to the workspace
        </DialogTitle>
        <DialogContent>
          Your workspace is ready. You can invite your team, create
          projects, and start collaborating.
        </DialogContent>
        <DialogActions>
          <Button
            ref={closeBtn}
            onClick={handleDialogClose}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}