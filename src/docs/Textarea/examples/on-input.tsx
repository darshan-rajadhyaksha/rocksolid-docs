import { createSignal } from "solid-js";
import Textarea from "rocksolidjs/Textarea";

export default function Example() {
  const [message, setMessage] = createSignal("");

  return (
    <div class="flex flex-col gap-2">
      <Textarea
        value={message()}
        placeholder="Write a message..."
        aria-label="Message"
        onInput={(event: InputEvent) => (
          setMessage((event.currentTarget as HTMLTextAreaElement).value)
        )}
      />

      <p class="text-sm text-muted-foreground">
        {message().length} characters
      </p>
    </div>
  );
}