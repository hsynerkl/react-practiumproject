import React, { useEffect, useState } from "react";
import { Profile } from "./Profile";
import { Todos } from "./Todos";
import "./index.css";
import { InputWithText } from "../Shared/InputWithText";
import { Button } from "../Shared/Button";
import { addTodo, cancelUpdate, updateTodo } from "../../features/todosSlice";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Home = (props) => {
  const dispatch = useDispatch();
  const notify = (text) => toast(text);
  const [content, setContent] = useState("");
  const todo = { content: "", isCompleted: "false", id: +new Date() };
  const showUpdate = useSelector((state) => state.todos.showUpdate);
  const updateItem = useSelector((state) => state.todos.updateItem);
  const [updateContent, setUpdateContent] = useState("");

  const handleUpdate = () => {
    if (content.length >= 3) {
      todo.content = content;
      dispatch(addTodo(todo));
      setContent("");
    } else {
      notify("En Az 3 Karakter Girmelisiniz.");
    }
  };

  const handleItemUpdate = () => {
    if (updateContent.length >= 3) {
      dispatch(
        updateTodo({
          content: updateContent,
          isCompleted: updateItem.isCompleted,
          id: updateItem.id,
        })
      );
      handleCancel();
    } else {
      notify("En Az 3 Karakter Girmelisiniz.");
    }
  };

  const handleCancel = () => {
    dispatch(cancelUpdate());
  };

  useEffect(() => {
    setUpdateContent(updateItem.content);
  }, [updateItem]);
  return (
    <div className="home">
      <div className="home-profile">
        <Profile props={props} />
      </div>
      <div className="home-home">
        <div className="addTodo">
          <div className="addTodoName">Add Todo</div>
          {showUpdate ? (
            <>
              <div className="addTodoInput">
                <InputWithText
                  placeholder={"Things to do:"}
                  type={"textarea"}
                  value={updateContent}
                  onChange={(e) => {
                    setUpdateContent(e);
                  }}
                />
              </div>
              <div
                className="addTodoButton"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Button text={"Update"} onClick={handleItemUpdate} />
                <Button text={"Cancel"} onClick={handleCancel} />
              </div>
            </>
          ) : (
            <>
              <div className="addTodoInput">
                <InputWithText
                  placeholder={"Things to do:"}
                  type={"textarea"}
                  value={content}
                  onChange={(e) => {
                    setContent(e);
                  }}
                />
              </div>
              <div className="addTodoButton">
                <Button text={"Add"} onClick={handleUpdate} />
              </div>
            </>
          )}
        </div>
      </div>
      <div className="home-todos">
        <Todos />
      </div>
      <ToastContainer />
    </div>
  );
};
