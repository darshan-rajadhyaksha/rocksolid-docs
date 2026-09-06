import Button from "rocksolidjs/Button";
import ThemeProvider from "rocksolidjs/ThemeProvider";
import createTheme from "rocksolidjs/styles/createTheme";

export default function Example() {
  const theme = createTheme({
    colors: {
      default: {
        solid: {
          background: "bg-blue-500 dark:bg-blue-400",
          text: "text-neutral-50 dark:text-neutral-900",
        },
      },
    },
  });

  return (
    <div class="flex flex-col gap-4">
      <Button>Button With Default Theme</Button>
      <ThemeProvider theme={theme}>
        <Button>Button With Overriden Theme</Button>
      </ThemeProvider>
    </div>
  );
};