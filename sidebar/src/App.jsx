import "./App.css";
import {
  LayoutDashboard,
  Boxes,
  LifeBuoy,
  Settings,
  Receipt,
  UserCircle,
  Package,
} from "lucide-react";
import SideBar, { SideBarItem } from "./SideBar";

function App() {
  return (
    <>
      <main>
        <SideBar>
          <SideBarItem icon={<LayoutDashboard />} text="Dashboard" active />
          <SideBarItem icon={<UserCircle />} text="Users" alert />
          <SideBarItem icon={<Boxes />} text="Inventory" />
          <SideBarItem icon={<Package />} text="Orders" />
          <SideBarItem icon={<Receipt />} text="Billings" />
          <SideBarItem icon={<Settings />} text="Settings" />
          <SideBarItem icon={<LifeBuoy />} text="Help" />
        </SideBar>
      </main>
    </>
  );
}

export default App;
