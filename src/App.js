import React, { useEffect, useState } from "react";
import Board from "./Components/Board/Board";
import "./App.css";
import { fetchTickets, fetchUsers } from "./api.js";
import Editable from "./Components/Editabled/Editable";

function App() {
  const [boards, setBoards] = useState(
    JSON.parse(localStorage.getItem("prac-kanban")) || []
  );
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchTickets().then((tickets) => {
      setBoards(tickets);
    });
    fetchUsers().then((fetchedUsers) => {
      setUsers(fetchedUsers);
    });
  }, []);

  const [targetCard, setTargetCard] = useState({
    bid: "",
    cid: "",
  });

  const addboardHandler = (name) => {
    // ... existing code ...
  };

  const removeBoard = (id) => {
    // ... existing code ...
  };

  const addCardHandler = (id, title) => {
    // ... existing code ...
  };

  const removeCard = (bid, cid) => {
    // ... existing code ...
  };

  const dragEnded = (bid, cid) => {
    // ... existing code ...
  };

  const dragEntered = (bid, cid) => {
    // ... existing code ...
  };

  const updateCard = (bid, cid, card) => {
    // ... existing code ...
  };

  useEffect(() => {
    localStorage.setItem("prac-kanban", JSON.stringify(boards));
  }, [boards]);

  return (
    <div className="app">
      <div className="app_nav">
        <h1>Kanban Board</h1>
      </div>
      <div className="app_boards_container">
        <div className="app_boards">
          {boards.map((item) => (
            <Board
              key={item.id}
              board={item}
              addCard={addCardHandler}
              removeBoard={() => removeBoard(item.id)}
              removeCard={removeCard}
              dragEnded={dragEnded}
              dragEntered={dragEntered}
              updateCard={updateCard}
            />
          ))}
          <div className="app_boards_last">
            <Editable
              displayClass="app_boards_add-board"
              editClass="app_boards_add-board_edit"
              placeholder="Enter Board Name"
              text="Add Board"
              buttonText="Add Board"
              onSubmit={addboardHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

