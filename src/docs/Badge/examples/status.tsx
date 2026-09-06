import Avatar from "rocksolidjs/Avatar";
import Badge from "rocksolidjs/Badge";

export default function Example() {
  return (
    <div class="w-full flex justify-center gap-4">
      <Badge
        overlap="circle"
        color="success"
      >
        <Avatar
          src="https://i.pravatar.cc/150?img=12"
          alt="Online user"
        />
      </Badge>
      <Badge
        overlap="circle"
        slotProps={{
          badge: {
            class: "bg-yellow-500 dark:bg-yellow-400",
          },
        }}
      >
        <Avatar
          src="https://i.pravatar.cc/150?img=13"
          alt="Busy user"
        />
      </Badge>
      <Badge
        overlap="circle"
        slotProps={{
          badge: {
            class: "bg-gray-500 dark:bg-gray-400",
          },
        }}
      >
        <Avatar
          src="https://i.pravatar.cc/150?img=14"
          alt="Offline user"
        />
      </Badge>
    </div>
  );
}