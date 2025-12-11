import Sidebar from "./components/sidebar/Sidebar";
import SidebarElement from "./components/sidebar/SidebarElement";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <Sidebar>
        <SidebarElement />
        <SidebarElement />
      </Sidebar>
    </main>
  );
}
