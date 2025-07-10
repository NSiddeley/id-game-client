"use client";

import { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";

//const socket = io("http://localhost:3001");

export default function Home() {

  const [name, setName] = useState("");
  const [lobbyCode, setLobbyCode] = useState("");
  const [in_lobby, set_in_lobby] = useState(false);
  const [is_ranker, set_is_ranker] = useState(false);

  const handleCreateLobby = () => {
    console.log("created lobby");

    if (name.trim() === '') {
      alert("Please enter a name to create a lobby.");
      return;
    }
    /*
    socket.emit("create_lobby", name);
    */
  }

  const handleJoinLobby = () => {
    if (name.trim() === '' && lobbyCode.length !== 4) {
      alert("Please enter a name and valid lobby code to join a lobby.");
      return;
    } else if (lobbyCode.length !== 4) {
      alert("Please enter a valid lobby code to join a lobby.");
      return;
    } else if (name.trim() === '') {
      alert("Please enter a name to join a lobby.");
      return;
    }
    /*
    socket.emit("join_lobby", name);
    */

  }

  return (
    /*
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      { in_lobby ?
        <>
          <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <button onClick={() => socket.emit("test")}>Create Lobby</button>
          </main>
        </> :
          <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <button onClick={() => set_in_lobby(true)}>Click meee</button>
          </main>
      }
    </main>
    */
    <div className="p-4 max-w-md mx-auto space-y-4">
      <h1>ID Game</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        value={lobbyCode}
        onChange={(e) => setLobbyCode(e.target.value)}
        placeholder="Enter lobby code"
        className="w-full p-2 border rounded"
      />
      <div className="flex space-x-4">
        <button
          onClick={handleCreateLobby}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >Create Lobby</button>

        <button
          onClick={handleJoinLobby}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >Join Lobby</button>
      </div>
    </div>
  );


}
