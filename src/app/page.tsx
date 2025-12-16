import * as c from './components/index';

export default function Index() {
  return (
    <main className="min-h-screen w-full">
      <c.MainPage>
        <c.PeriodicTable />
        <c.ElementCard />
      </c.MainPage>
      <c.SourceCode />
      <c.License />
    </main>
  );
}
