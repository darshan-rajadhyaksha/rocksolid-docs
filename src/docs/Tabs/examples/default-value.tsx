import Tab from "rocksolidjs/Tab";
import TabsContext from "rocksolidjs/TabsContext";
import TabPanel from "rocksolidjs/TabPanel";
import Tabs from "rocksolidjs/Tabs";

export default function Example() {
  return (
    <div class="max-w-5xl w-full">
      <TabsContext defaultValue="profile" tabId="default-value">
        <Tabs class="mb-2">
          <Tab label="Home" value="home" />
          <Tab label="Profile" value="profile" />
          <Tab label="Settings" value="settings" />
        </Tabs>
        <TabPanel value="home">
          Welcome to the home page.
        </TabPanel>
        <TabPanel value="profile">
          This tab is selected by default.
        </TabPanel>
        <TabPanel value="settings">
          Manage your account settings.
        </TabPanel>
      </TabsContext>
    </div>
  );
}