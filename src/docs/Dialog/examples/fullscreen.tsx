import { createSignal } from "solid-js";
import Button from "rocksolidjs/Button";
import Dialog from "rocksolidjs/Dialog";
import DialogActions from "rocksolidjs/DialogActions";
import DialogContent from "rocksolidjs/DialogContent";
import DialogTitle from "rocksolidjs/DialogTitle";

export default function Example() {
  const [open, setOpen] = createSignal(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>View report</Button>

      <Dialog
        open={open()}
        fullscreen
        onClose={() => setOpen(false)}
      >
        <DialogTitle>Quarterly sales report</DialogTitle>
        <DialogContent>
          <p>
            Review your sales performance for the current quarter.
          </p>
          <ul>
            <li>Revenue increased by 18%.</li>
            <li>New customers increased by 24%.</li>
            <li>Customer retention improved by 6%.</li>
          </ul>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}