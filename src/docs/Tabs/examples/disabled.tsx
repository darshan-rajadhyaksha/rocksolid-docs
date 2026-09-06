import Tab from "rocksolidjs/Tab";
import TabsContext from "rocksolidjs/TabsContext";
import TabPanel from "rocksolidjs/TabPanel";
import Tabs from "rocksolidjs/Tabs";

export default function Example() {
  return (
    <div class="max-w-5xl w-full">
      <TabsContext defaultValue="home" tabId="disabled-example">
        <Tabs class="mb-2">
          <Tab label="Home" value="home" />
          <Tab label="Profile" value="profile" />
          <Tab label="Settings" value="settings" disabled />
        </Tabs>
        <TabPanel value="home" tabIndex={0}>
          Welcome to the home page.
        </TabPanel>
        <TabPanel value="profile" tabIndex={0}>
          View and manage your profile.
        </TabPanel>
        <TabPanel value="settings" tabIndex={0}>
          Manage your account settings.
        </TabPanel>
      </TabsContext>
    </div>
  );
}