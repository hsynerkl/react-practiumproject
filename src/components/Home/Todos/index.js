import { useEffect, useState } from "react";
import {
  getTodos,
  deleteTodo,
  updateTodo,
  updateItem,
} from "../../../features/todosSlice";
import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import deleteIcon from "../../../assets/images/delete.png";
import editIcon from "../../../assets/images/edit.png";
import confirmIcon from "../../../assets/images/confirmation.png";
import xIcon from "../../../assets/images/x.png";

export const Todos = () => {
  const data = useSelector((state) => state.todos.Items);
  const [doneData, setDoneData] = useState([]);
  const [notDoneData, setNotDoneData] = useState([]);
  const dispatch = useDispatch();

  const getData = () => {
    dispatch(getTodos());
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleUpdate = (content, isCompleted, id) => {
    dispatch(
      updateTodo({ content: content, isCompleted: isCompleted, id: id })
    );
  };

  useEffect(() => {
    var completeData = [],
      notCompleteData = [];
    if (data.length > 0) {
      data.map((a) =>
        a.isCompleted == true ? completeData.push(a) : notCompleteData.push(a)
      );
      setDoneData(completeData);
      setNotDoneData(notCompleteData);
    }
  }, [data]);

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {doneData.length > 0 && (
        <>
          <div style={{ textAlign: "center" }}>Done!</div>
          {doneData.map((a) => (
            <div className="todo" key={a.id}>
              <div className="todo-content">{a.content}</div>
              <div className="todoButtons">
                <div
                  className="todoDeleteButton"
                  onClick={() => handleDelete(a.id)}
                >
                  <img src={deleteIcon} alt="deleteIcon" width="24" />
                </div>
                <div
                  className="todoUpdateButton"
                  onClick={() =>
                    dispatch(
                      updateItem({
                        content: a.content,
                        isCompleted: a.isCompleted,
                        id: a.id,
                      })
                    )
                  }
                >
                  <img src={editIcon} alt="editIcon" width="22" />
                </div>

                <div
                  className="todoUpdateButton"
                  onClick={() => handleUpdate(a.content, false, a.id)}
                >
                  <img src={xIcon} alt="xIcon" width="22" />
                </div>
              </div>
            </div>
          ))}
        </>
      )}
      {notDoneData.length > 0 && (
        <>
          <div style={{ textAlign: "center" }}>Not Done :(</div>
          {notDoneData.map((a) => (
            <div className="todo" key={a.id}>
              <div className="todo-content">{a.content}</div>
              <div className="todoButtons">
                <div
                  className="todoDeleteButton"
                  onClick={() => handleDelete(a.id)}
                >
                  <img src={deleteIcon} alt="deleteIcon" width="24" />
                </div>
                <div
                  className="todoUpdateButton"
                  onClick={() =>
                    dispatch(
                      updateItem({
                        content: a.content,
                        isCompleted: a.isCompleted,
                        id: a.id,
                      })
                    )
                  }
                >
                  <img src={editIcon} alt="editIcon" width="22" />
                </div>
                <div
                  className="todoUpdateButton"
                  onClick={() => handleUpdate(a.content, true, a.id)}
                >
                  <img src={confirmIcon} alt="confirmIcon" width="22" />
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
};
