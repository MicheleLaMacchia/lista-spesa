import React, { useEffect, useState } from "react";
import Alert from "./components/Alert";
import "./App.css";
import List from "./components/List";
import TabList from "./components/TabList";

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

const getLocalStorage = () => {
  let list = localStorage.getItem("Lista");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name && !isEditing) {
      showAlert(true, "danger", "inserire un prodotto");
    } else if (!name && isEditing) {
      showAlert(true, "danger", "modifica fallita, il campo è vuoto");
      setName("");
      setEditID(null);
      setIsEditing(false);
    } else if (name.length > 40) {
      showAlert(true, "danger", "il limite dei caratteri è 40");
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name.toUpperCase() };
          }
          return item;
        })
      );
      setName("");
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "success", "prodotto modificato con successo");
    } else {
      showAlert(true, "success", "inserimento avvenuto con successo");
      const newItem = {
        id: new Date().getTime().toString(),
        title: name.toUpperCase(),
      };
      setList([...list, newItem]);
      setName("");
    }
  };

  const handleDelete = (id) => {
    setList(list.filter((item) => item.id !== id));
    showAlert(true, "success", "prodotto eliminato con successo");
    setIsEditing(false);
    setEditID(null);
    setName("");
  };

  const handleEdit = (id) => {
    document.getElementById("text-holder").focus();
    let specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(capitalize(specificItem.title));
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  const clearList = () => {
    showAlert(true, "success", "lista svuotata con successo");
    setList([]);
    setName("");
    setEditID(null);
    setIsEditing(false);
  };

  useEffect(() => {
    localStorage.setItem("Lista", JSON.stringify(list));
  }, [list]);

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>Lista della spesa</h3>
        <div className="form-control">
          <input
            id="text-holder"
            type="text"
            className="grocery"
            placeholder="inserisci elemento"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "modifica" : "inserisci"}
          </button>
        </div>
      </form>
      <TabList />
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} deleteItem={handleDelete} editItem={handleEdit} />
          <button className="clear-btn" onClick={() => clearList()}>
            pulisci lista
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
