import * as c from './components/index';

export default function Index() {
  return (
    <main className="min-h-screen w-full bg-zinc-950 text-white">
      <c.MainPage>
        <c.SearchBar />
        <c.PeriodicTable />
        <c.ElementCard />
      </c.MainPage>
      <c.Sources />
      <c.SourceCode />
      <c.License />
    </main>
  );
}
