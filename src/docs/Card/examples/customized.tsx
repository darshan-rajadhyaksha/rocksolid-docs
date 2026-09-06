import Card from "rocksolidjs/Card";
import CardContent from "rocksolidjs/CardContent";
import CardFooter from "rocksolidjs/CardFooter";
import Button from "rocksolidjs/Button";
import Chip from "rocksolidjs/Chip";
import Typography from "rocksolidjs/Typography";

export default function Example() {
  return (
    <Card 
      variant="ghost"
      class="bg-gradient-to-br from-sky-500 via-blue-500 to-indigo-600 text-white shadow-lg"
    >
      <CardContent class="p-5">
        <div class="flex items-start justify-between">
          <div>
            <Typography
              variant="body2"
              class="text-white/80"
            >
              Mumbai
            </Typography>
            <Typography
              variant="h2"
              class="mt-1 font-semibold tracking-tight text-white"
            >
              28°
            </Typography>
            <Typography
              variant="body2"
              class="text-white/80"
            >
              Mostly sunny
            </Typography>
          </div>
          <div class="flex size-12 items-center justify-center rounded-full bg-white/15 text-2xl backdrop-blur-sm">
            ☀️
          </div>
        </div>
        <div class="mt-5 flex items-center gap-2">
          <Chip
            label="H: 32°"
            size="small"
            class="border-0 bg-white/15 dark:bg-white/15 text-white backdrop-blur-sm"
          />
          <Chip
            label="L: 25°"
            size="small"
            class="border-0 bg-white/15 dark:bg-white/15 text-white backdrop-blur-sm"
          />
          <Chip
            label="Humidity 54%"
            size="small"
            class="border-0 bg-white/15 dark:bg-white/15 text-white backdrop-blur-sm"
          />
        </div>
      </CardContent>
      <CardFooter 
        class="items-center justify-between border-t border-white/10 bg-white/5 px-5 py-3">
          <Typography
            variant="body2"
            class="text-white/70"
          >
            Updated 5 min ago
          </Typography>
          <Button
            size="small"
            variant="ghost"
            class="text-white hover:bg-white/10 hover:text-white"
          >
            Details
          </Button>
      </CardFooter>
    </Card>
  );
}

