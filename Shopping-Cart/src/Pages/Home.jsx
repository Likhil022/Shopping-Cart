import Men from "./Men";
import Women from "./Women";

function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Men />
      <Women />
    </div>
  );
}

export default Home;
