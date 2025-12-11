import * as c from './components/index';

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <c.Sidebar>
        <c.SidebarElement text={"test1"} color={"text-sky-200"} />
        <c.SidebarElement text={"test2"} />
      </c.Sidebar>
      <c.MainPage>
        <c.Greet />
      </c.MainPage>
    </main>
  );
}
