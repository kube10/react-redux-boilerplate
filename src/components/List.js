import { useSelector } from "react-redux";

const List = () => {
  const items = useSelector((state) => state.items);

  const renderedItems = items.map((item) => {
    return <li key={item.id}>{item.text}</li>;
  });

  return <ul>{renderedItems}</ul>;
};

export default List;
