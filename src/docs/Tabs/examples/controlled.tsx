import { createSignal } from "solid-js";
import Tab from "rocksolidjs/Tab";
import TabsContext from "rocksolidjs/TabsContext";
import TabPanel from "rocksolidjs/TabPanel";
import Tabs from "rocksolidjs/Tabs";

export default function Example() {
  const [activeTab, setActiveTab] = createSignal("home");

  return (
    <div class="max-w-5xl w-full">
      <TabsContext
        value={activeTab()}
        onChange={(_event, tab) => setActiveTab(tab)}
        tabId="controlled"
      >
        <Tabs class="mb-2">
          <Tab label="Home" value="home" />
          <Tab label="Profile" value="profile" />
          <Tab label="Settings" value="settings" />
        </Tabs>
        <TabPanel value="home">
          Welcome to the home page.
        </TabPanel>
        <TabPanel value="profile">
          View and manage your profile.
        </TabPanel>
        <TabPanel value="settings">
          Manage your account settings.
        </TabPanel>
      </TabsContext>
    </div>
  );
}