import Tab from "rocksolidjs/Tab";
import TabsContext from "rocksolidjs/TabsContext";
import TabPanel from "rocksolidjs/TabPanel";
import Tabs from "rocksolidjs/Tabs";
import { createSignal } from "solid-js";

export default function Example() {
  const [activeTab, setActiveTab] = createSignal("home");

  const getClass = (tab: string) => (`
    shadow-none 
    ${activeTab() === tab ? `
      text-white
      bg-blue-500 dark:bg-blue-500
      hover:bg-blue-600 hover:dark:bg-blue-400
      active:bg-blue-600/80 active:dark:bg-blue-400/80
    ` : ""}
  `);

  return (
    <div class="w-full">
      <TabsContext
        value={activeTab()}
        onChange={(_event, tab) => setActiveTab(tab)}
        tabId="custom-styled"
      >
        <Tabs 
          class="border-none grid grid-cols-3 bg-neutral-100 dark:bg-neutral-800"
        >
          <Tab
            class={getClass("home")}
            label="Home"
            value="home"
          />
          <Tab
            class={getClass("profile")}
            label="Profile"
            value="profile"
          />
          <Tab
            class={getClass("settings")}
            label="Settings"
            value="settings"
          />
        </Tabs>

        <TabPanel class="p-4" value="home">
          Welcome to the home page.
        </TabPanel>
        <TabPanel class="p-4" value="profile">
          View and manage your profile.
        </TabPanel>
        <TabPanel class="p-4" value="settings">
          Manage your account settings.
        </TabPanel>
      </TabsContext>
    </div>
  );
}