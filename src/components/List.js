import { useSelector } from "react-redux";
import { selectAllItems } from "../store/itemsSlice";

const List = () => {
  const items = useSelector(selectAllItems);
  /*
  for selecting one item call should be eg:
  const item = useSelector(state => selectItemById(state, postId))
  */

  const renderedItems = items.map((item) => {
    return <li key={item.id}>{item.text}</li>;
  });

  return <ul>{renderedItems}</ul>;
};

export default List;
