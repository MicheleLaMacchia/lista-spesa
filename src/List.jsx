import {FaEdit, FaTrash} from 'react-icons/fa'

const List = ({items, deleteItem, editItem}) => {

  return (
    <div className="grocery-list">
      {items.map(item => {
        const {id, title} = item;
        return(
          <article key={id} className="grocery-item">
            <p className="title">{title}</p>
            <div className="btn-container">
              <button type="button" className="edit-btn"
                      onClick={() => editItem(id)}>
                <FaEdit size={"20px"}/>
              </button>
              <button type="button" className="delete-btn"
                      onClick={() => deleteItem(id)}>
                <FaTrash size={"18px"} />
              </button>
            </div>
          </article>
        )
      })}
    </div>
  );
}
 
export default List;