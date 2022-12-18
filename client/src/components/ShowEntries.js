import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import client from "../sanity/client";

const EntryCard = (props) => (
  <form action="/generateResults" method="post" className="h-fit w-56 border-2 mx-10 rounded-xl p-10 cursor-pointer hover:scale-105 duration-300 transition-all">
    <h3 className="text-2xl">Entry:</h3><hr className="border-2 my-2"/>
    <p className="text-blue-500">Entry ID: <b>{props.entryId}</b></p><br/>
    <p className="text-pink-500 italic">Date created: <b>{props.createdAt.slice(0,10)}</b></p>
    <div style={{ display: 'none' }}>
      <input name="factor-1" value={props.entry.anxiety}/>
      <input name="factor-2" value={props.entry.badDayFactor}/>
      <input name="factor-3" value={props.entry.bodyPain}/>
      <input name="factor-4" value={props.entry.confusion}/>
      <input name="factor-5" value={props.entry.frustration}/>
      <input name="factor-6" value={props.entry.lackOfFocus}/>
      <input name="factor-7" value={props.entry.lackOfMotivation}/>
      <input name="factor-8" value={props.entry.overthinking}/>
      <input name="remarks" value={props.entry.remarks}/>
    </div><br/>
    <button className="text-sm" type="submit">Generate Results</button>
  </form>
);

export default function ShowEntries() {
  let [entryList] = useState([]);
  let [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const query = `*[_type=="record"]`;

    client.fetch(query).then((entries) => {
      console.log(entries.length);
      entries.forEach((entry) => {
        entryList.push(
          <EntryCard
            entry={entry}
            key={entry.entryId}
            entryId={entry.entryId}
            createdAt={entry._createdAt}
          />
        );
      });

      console.log(entryList);

      setLoading(false);
      //   console.log(entryList);
    });
  }, [loading, entryList]);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center mx-10 my-10 text-center">
        <h1 className="underline">Here are your entries!</h1>
        <br /><br />
        <div className="flex flex-wrap">
          {loading ? "loading..." : entryList}
        </div>
      </div>
    </>
  );
}
