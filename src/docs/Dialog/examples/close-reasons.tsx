import { createSignal } from "solid-js";
import Button from "rocksolidjs/Button";
import Dialog, { type DialogCloseReason } from "rocksolidjs/Dialog";
import DialogActions from "rocksolidjs/DialogActions";
import DialogContent from "rocksolidjs/DialogContent";
import DialogTitle from "rocksolidjs/DialogTitle";
import Typography from "rocksolidjs/Typography";

export default function Example() {
  const [open, setOpen] = createSignal(false);
  const [reason, setReason] = createSignal<string>();

  const handleClose = (
    _event: Event,
    closeReason: DialogCloseReason,
  ) => {
    setReason(closeReason);
    setOpen(false);
  };

  return (
    <div class="space-y-2 text-center">
      <Button
        onClick={() => setOpen(true)}
      >
        Open dialog
      </Button>

      {reason() && (
        <Typography>
          Dialog closed because of: <strong>{reason()}</strong>
        </Typography>
      )}

      <Dialog
        open={open()}
        onClose={handleClose}
      >
        <DialogTitle>Unsaved changes</DialogTitle>
        <DialogContent>
          You have changes that haven't been saved. Are you sure you want to
          leave this dialog?
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setOpen(false)}
          >
            Keep editing
          </Button>
          <Button
            onClick={() => setOpen(false)}
            color="error"
          >
            Discard changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}