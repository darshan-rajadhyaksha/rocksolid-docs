import { createSignal, createEffect } from "solid-js";
import Button from "rocksolidjs/Button";
import Dialog from "rocksolidjs/Dialog";
import DialogActions from "rocksolidjs/DialogActions";
import DialogContent from "rocksolidjs/DialogContent";
import DialogTitle from "rocksolidjs/DialogTitle";

export default function Example() {
  const [open, setOpen] = createSignal(false);

  let openButton!: HTMLButtonElement, 
      cancelBtn!: HTMLButtonElement;
  
  createEffect(() => {
    if (open()) {
      cancelBtn.focus();
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
          Delete account
      </Button>

      <Dialog
        open={open()}
        role="alertdialog"
        aria-labelledby="delete-account-title"
        onClose={handleDialogClose}
        class="max-w-md"
      >
        <DialogTitle id="delete-account-title">
          Delete account?
        </DialogTitle>
        <DialogContent>
          This action permanently deletes your account and all of its data.
          You won't be able to undo this action.
        </DialogContent>
        <DialogActions>
          <Button
            ref={cancelBtn}
            variant="outlined"
            onClick={handleDialogClose}
          >
            Cancel
          </Button>
          <Button
            color="error"
            onClick={handleDialogClose}
          >
            Delete account
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}