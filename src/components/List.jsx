import { FaEdit, FaTrash } from "react-icons/fa";

const List = ({ items, deleteItem, editItem, cat }) => {
  return (
    <div className="grocery-list">
      {items
        .filter((e) => e.cat === cat)
        .map((item) => {
          const { id, title } = item;
          return (
            <article key={id} className="grocery-item">
              <p className="title">{title}</p>
              <div className="btn-container">
                <button
                  type="button"
                  className="edit-btn"
                  onClick={() => editItem(id)}
                >
                  <FaEdit size={"13px"} color={"hsl(210, 22%, 49%)"} />
                </button>
                <button
                  type="button"
                  className="delete-btn"
                  onClick={() => deleteItem(id)}
                >
                  <FaTrash size={"12px"} />
                </button>
              </div>
            </article>
          );
        })}
    </div>
  );
};

export default List;
