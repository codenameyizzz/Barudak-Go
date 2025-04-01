import React, { useState } from "react";
import "../styles/ChatList.css";

// Sample chat data (replace with real data from Firestore or an API in a full app)
const sampleChats = [
  {
    id: "chat1",
    name: "QUIETLY X OPSIONAL",
    profilePic: "https://via.placeholder.com/50",
    subtext: "~Kevin Aditia .gdk",
    timestamp: "17:56",
    unreadCount: 36,
  },
  {
    id: "chat2",
    name: "Room Chat Quietly",
    profilePic: "https://via.placeholder.com/50",
    subtext: "+62 895-3924-17557 joined using...",
    timestamp: "17:57",
    unreadCount: 2,
  },
  {
    id: "chat3",
    name: "Partisi Road to 2025",
    profilePic: "https://via.placeholder.com/50",
    subtext: "DEL Ferdi Parker: 👀 Sticker",
    timestamp: "17:24",
    unreadCount: 11,
  },
  {
    id: "chat4",
    name: "Big 4 Kue Sus",
    profilePic: "https://via.placeholder.com/50",
    subtext: "DEL Ferdi Parker: ok",
    timestamp: "17:06",
    unreadCount: 0,
  },
];

export const ChatList = ({ setRoom }) => {
  const [search, setSearch] = useState("");
  const [chats] = useState(sampleChats);

  // Filter chats based on search input
  const filteredChats = chats.filter((chat) =>
    chat.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="chat-list">
      {/* Header */}
      <div className="header">
        <h1>Chats</h1>
        <div className="menu-icon">⋮</div>
      </div>

      {/* Search Bar */}
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search or start a new chat"
        className="search-bar"
      />

      {/* Chat List */}
      <div className="chats">
        {filteredChats.map((chat) => (
          <div
            key={chat.id}
            className="chat-entry"
            onClick={() => setRoom(chat.id)} // Set the selected chat room
          >
            <img
              src={chat.profilePic}
              alt="Profile"
              className="profile-pic"
            />
            <div className="chat-info">
              <div className="name">{chat.name}</div>
              <div className="subtext">{chat.subtext}</div>
            </div>
            <div className="timestamp">{chat.timestamp}</div>
            {chat.unreadCount > 0 && (
              <div className="unread-indicator">{chat.unreadCount}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};