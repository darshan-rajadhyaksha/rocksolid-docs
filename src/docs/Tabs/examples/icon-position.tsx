import Tab from "rocksolidjs/Tab";
import TabsContext from "rocksolidjs/TabsContext";
import TabPanel from "rocksolidjs/TabPanel";
import Tabs from "rocksolidjs/Tabs";

export default function Example() {
  return (
    <div class="max-w-5xl w-full">
      <TabsContext defaultValue="top" tabId="icon-position">
        <Tabs class="mb-2">
          <Tab
            icon={<Icon />}
            iconPosition="top"
            label="Top"
            value="top"
          />
          <Tab
            icon={<Icon />}
            iconPosition="bottom"
            label="Bottom"
            value="bottom"
          />
          <Tab
            icon={<Icon />}
            iconPosition="start"
            label="Start"
            value="start"
          />
          <Tab
            icon={<Icon />}
            iconPosition="end"
            label="End"
            value="end"
          />
        </Tabs>

        <TabPanel value="top">
          Icon positioned above the label.
        </TabPanel>
        <TabPanel value="bottom">
          Icon positioned below the label.
        </TabPanel>
        <TabPanel value="start">
          Icon positioned to the start of the label.
        </TabPanel>
        <TabPanel value="end">
          Icon positioned to the end of the label.
        </TabPanel>
      </TabsContext>
    </div>
  );
}

function Icon() {
  return (
    <span aria-hidden="true">●</span>
  );
}