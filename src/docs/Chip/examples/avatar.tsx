import Avatar  from "rocksolidjs/Avatar";
import Chip  from "rocksolidjs/Chip";

export default function Example() {
  return (
    <Chip
      label="John Doe"
      avatar={<Avatar src="https://i.pravatar.cc/100?img=11" size="small" />}
    />
  );
}