import { Navigation } from "./components/organisms/Navigation";

export default function Home() {
  return (
    <main className="flex">
      <div className="navigation-sidebar max-w-3xs w-full">
        <Navigation id="navigation" />
      </div>
      <div className="w-full">Main</div>
      {/* <div>Side Panel</div> */}
    </main>
  );
}
