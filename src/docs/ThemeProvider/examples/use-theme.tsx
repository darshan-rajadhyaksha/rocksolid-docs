import Button, { type ButtonProps } from "rocksolidjs/Button";
import ThemeProvider from "rocksolidjs/ThemeProvider";
import createTheme from "rocksolidjs/styles/createTheme";
import useTheme from "rocksolidjs/styles/useTheme";

export default function Example() {
  const theme = createTheme({});
  return (
    <ThemeProvider theme={theme}>
      <MyButton>Customized Button</MyButton>
    </ThemeProvider>
  );
}

const MyButton = (
  props: ButtonProps,
) => {
  const theme = useTheme();
  return (
    <Button
      {...props}
      class={theme.rounded.full}
    />
  );
};