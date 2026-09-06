import Avatar from "rocksolidjs/Avatar";
import Badge from "rocksolidjs/Badge";

export default function Example() {
  return (
    <div class="w-full flex justify-center gap-4">
      <Badge
        badgeContent={5}
        overlap="circle"
      >
        <Avatar
          src="https://i.pravatar.cc/150?img=1"
          alt="User avatar"
        />
      </Badge>
      <Badge
        badgeContent={5}
        overlap="rect"
      >
        <Avatar
          src="https://i.pravatar.cc/150?img=1"
          alt="User avatar"
          rounded="none"
        />
      </Badge>
    </div>
  );
}