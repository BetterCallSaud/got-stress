import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const nav = useNavigate();
  function navigateToAddEntry() {
    nav("/addEntry", { replace: true });
  }

  function navigateToUpdateEntry() {
    nav("/updateEntry", { replace: true });
  }

  function navigateToDeleteEntry() {
    nav("/deleteEntry", { replace: true });
  }

  function navigateToShowEntries() {
    nav("/showEntries", { replace: true });
  }

  return (
    <div
      className="flex flex-col items-center px-10 py-10 text-center bg-[url('https://wallpapertag.com/wallpaper/full/f/c/7/950188-cool-black-background-designs-1920x1080-for-ipad.jpg')] bg-cover text-white"
      style={{ height: "40rem" }}
    >
      <h1 className="underline">Dashboard</h1>
      <br />
      <p className="mx-20 mb-10">
        This is the dashboard. You can <b>create, update or delete</b> your
        entries and even VIEW your entries that are stored in our schema-based
        NoSQL database.
      </p>
      <div className="w-full flex flex-col items-center justify-center">
        <button className="my-2 text-white" onClick={navigateToShowEntries}>
          Show Entries
        </button>
        <button className="my-2 text-white" onClick={navigateToAddEntry}>
          Add Entry
        </button>
        <button className="my-2 text-white" onClick={navigateToUpdateEntry}>
          Update Entry
        </button>
        <button className="my-2 text-white" onClick={navigateToDeleteEntry}>
          Delete Entry
        </button>
      </div>
    </div>
  );
}
