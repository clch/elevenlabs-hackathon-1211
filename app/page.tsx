import { ConvaiSwitcher } from "./components/ConvaiSwitcher";

export default function Page() {
  return (
    <main className="container">
      <h1>Interactive Alarm Clock</h1>
      <div className="card">
        <ConvaiSwitcher />
      </div>
    </main>
  );
}
