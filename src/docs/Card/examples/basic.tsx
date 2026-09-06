import Avatar from "rocksolidjs/Avatar";
import Card from "rocksolidjs/Card";
import CardHeader from "rocksolidjs/CardHeader";
import CardTitle from "rocksolidjs/CardTitle";
import CardContent from "rocksolidjs/CardContent";
import CardFooter from "rocksolidjs/CardFooter";
import Button from "rocksolidjs/Button";
import CardDescription from "rocksolidjs/CardDescription";
import Chip from "rocksolidjs/Chip";
import Typography from "rocksolidjs/Typography";

export default function Example() {
  return (
    <Card class="max-w-sm">
      <CardHeader class="flex flex-row items-center gap-3">
        <Avatar
          src="https://i.pravatar.cc/80?img=12"
          alt="John Doe"
          size="large"
        />
        <div>
          <CardTitle class="text-normal">John Doe</CardTitle>
          <CardDescription class="pt-0">Product Designer</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          Designing simple and accessible experiences for the next
          generation of products.
        </Typography>
        <div class="mt-3 flex gap-2">
          <Chip size="small" label="Design" />
          <Chip size="small" label="Product" />
        </div>
      </CardContent>
      <CardFooter>
        <Button>View profile</Button>
      </CardFooter>
    </Card>
  );
}