import React, { useState, useEffect, useContext } from "react";
import { noteContext } from "../context/notes/NoteState";
import Noteitem from "./Noteitem";
import Alert from './Alert';
import Loding from "./Loding";

const Feed = () => {
  const { notes, auth, alert, setalert, flag, getnote, log } = useContext(noteContext);

  useEffect(() => {
    getnote();
    console.log("logout", auth);
  }, [flag, auth]);

  useEffect(() => {
    const alertTimeout = setTimeout(() => {
      setalert(false);
    }, 9000);

    return () => clearTimeout(alertTimeout);
  }, [alert, setalert]);

  return (
    log === false ? <Loading /> : (
      <div className="flex flex-col">
        {alert && <Alert message="This is deleted" />}
        <div className="items-center flex flex-col">
          {notes && notes.length !== 0 && <h1 className="text-3xl mt-8">Your notes</h1>}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {notes && notes.length === 0 ? (
              <div className="font-thin mt-10 text-4xl justify-left text-zinc-600">
                No Posts to Display
              </div>
            ) : (
              flag && notes.map((ele, i) => {
                const { title, description, tag, _id } = ele;
                return (
                  <Noteitem key={_id} id={_id} title={title} description={description} tag={tag} />
                );
              })
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default Feed;
