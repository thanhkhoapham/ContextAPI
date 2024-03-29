import { useState } from "react";
import InputField from "../../components/inputs/InputField";
import { useTodosContext } from "../store/TodoList/utils";
import { TodoAPI } from "../../api/todos/client";
import TodoItem from "../../components/todo/TodoItem";
import { Button, Input } from "antd";

const http = new TodoAPI();

const TodoList = () => {
  const { todos, setTodos } = useTodosContext();
  const [addedValue, setAddedValue] = useState("");

  const [input, setInput] = useState("");
  const handleAddNewTodo = async () => {
    const addedTodo = await http.addNew({
      title: addedValue,
      id: Math.floor(Math.random() * todos.length + 15).toString(),
    });

    setTodos((prev) => [addedTodo, ...prev]);
  };

  const handleAddedValueChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setAddedValue(e.target.value);

  const handleSearch = async () => {
    const filteredTodos = await http.search(input);
    setTodos(filteredTodos);
  };

  return (
    <div className="flex flex-col">
      <section className="w-[70%] flex items-center py-3">
        <div className="flex h-full">
          <h1 className="text-xl font-bold pr-[10px]">Add Todo: </h1>
          <InputField value={addedValue} onChange={handleAddedValueChange} />
        </div>
        <Button
          className="ml-4 bg-white flex items-center"
          onClick={handleAddNewTodo}
        >
          Add to list
        </Button>
      </section>

      <section className="w-[70%] mr-[50px]">
        <div className="flex">
          <span className="font-bold pr-[10px] text-2xl">Filter:</span>
          <Input
            className="w-[190px] pr-[10px]"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></Input>
          <Button className="ml-[15px] bg-white" onClick={handleSearch}>
            Find
          </Button>
        </div>

        <ul className="text-base font-medium">
          {todos.map((todo) => (
            <li className="pt-[10px]" key={todo?.id}>
              <TodoItem todo={todo} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default TodoList;
