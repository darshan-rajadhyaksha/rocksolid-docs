import { createResource, Show } from "solid-js";

type DynamicComponentRendererProps = {
  name: string;
}

const examples = import.meta.glob("/src/docs/**/*.tsx", { eager: false });

const DynamicComponentRenderer = (
  props: DynamicComponentRendererProps,
) => {
  const path = `/src/docs/${props.name}.tsx`;
  const loadExample = examples[path];
  if (!loadExample) {
    throw new Error(`Example not found: ${path}`);
  }
  const [example] = createResource(loadExample);
  return (
    <Show
      when={example()}
      fallback={
        <div class="flex items-center justify-center text-sm text-slate-400">
          Loading example...
        </div>
      }
    >
      {(module) => {
        const Component = module()?.default;
        return <Component />;
      }}
    </Show>
  );
};

export default DynamicComponentRenderer;