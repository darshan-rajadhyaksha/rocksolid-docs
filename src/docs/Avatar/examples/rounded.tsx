import Avatar from "rocksolidjs/Avatar";

export default function Example() {
  return (
    <div class="flex gap-4">
      <Avatar
        src="https://i.pravatar.cc/150?img=2"
        alt="Small avatar"
        rounded="small"
      />
      <Avatar
        src="https://i.pravatar.cc/150?img=2"
        alt="No rounding"
        rounded="none"
      />
      <Avatar
        src="https://i.pravatar.cc/150?img=2"
        alt="Medium avatar"
        rounded="medium"
      />
      <Avatar
        src="https://i.pravatar.cc/150?img=2"
        alt="Large avatar"
        rounded="large"
      />
      <Avatar
        src="https://i.pravatar.cc/150?img=2"
        alt="Fully rounded avatar"
        rounded="full"
      />
    </div>
  );
}