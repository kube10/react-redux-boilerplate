import { useDispatch } from "react-redux";
import { useState } from "react";
import { itemAdded } from "../store/itemsSlice";
import { nanoid } from "@reduxjs/toolkit";

const AddListItemForm = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const onItemAdded = () => {
    if (text !== "") {
      dispatch(
        itemAdded({
          id: nanoid(),
          text,
        })
      );

      setText("");
    }
  };

  return (
    <section>
      <form>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          id="itemText"
          placeholder="Item text here"
        />
        <button onClick={onItemAdded} type="button">
          Add item
        </button>
      </form>
    </section>
  );
};

export default AddListItemForm;
