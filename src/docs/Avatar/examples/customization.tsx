import Avatar from "rocksolidjs/Avatar";

export default function Example() {
  return (
    <Avatar
      src="https://i.pravatar.cc/150?img=12"
      alt="User avatar"
      class="size-12 border border-2 border-blue-500"
      slotProps={{
        img: {
          loading: "lazy",
        },
      }}
    />
  );
}