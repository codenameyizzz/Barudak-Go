import logo from './logo.svg';
import './App.css';
import { Auth } from "./components/Auth";
import { Chat } from "./components/Chat";
import { ChatList } from "./components/ChatList"; // Added import
import Cookies from 'universal-cookie';
import React, { useState } from 'react'; // Removed useRef since it's no longer needed
import { auth } from "./firebase-config";
import { signOut } from "firebase/auth";

const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setRoom] = useState(null);

  // Sign-out function
  const handleSignOut = async () => {
    try {
      await signOut(auth); // Sign out from Firebase
      cookies.remove("auth-token"); // Remove the auth-token cookie
      setIsAuth(false); // Update isAuth state
      setRoom(null); // Reset the room state
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  if (!isAuth) {
    return (
      <div className="App">
        <Auth setIsAuth={setIsAuth} />
      </div>
    );
  }

  return (
    <div>
      {room ? (
        <div>
          <Chat room={room} />
        </div>
      ) : (
        <ChatList setRoom={setRoom} /> // Replaced room input form with ChatList
      )}
      <button onClick={handleSignOut} style={{ margin: "10px" }}>
        Sign Out
      </button>
    </div>
  );
}

export default App;