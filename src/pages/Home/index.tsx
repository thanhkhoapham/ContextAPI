import { ReactElement } from "react";
import { Tabs, Tooltip } from "antd";
import type { TabsProps } from "antd";
import TodoListv2 from "../TodoListv2";
import TodoList from "../TodoList/TodoList";
import TodosContextProvider from "../../contexts/TodosContextProvider";
import "./styles.css";

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Todo list v1",
    children: (
      <TodosContextProvider>
        <TodoList />
      </TodosContextProvider>
    ),
  },
  {
    key: "2",
    label: (
      <Tooltip placement="top" title={"Not complete"}>
        Todo list v2
      </Tooltip>
    ),
    children: <TodoListv2 />,
  },
  {
    key: "3",
    label: "Tô Châu",
    children: "TôChâu's service",
  },
];

const Home = (): ReactElement => {
  return (
    <Tabs
      className="tabs p-[50px]"
      defaultActiveKey="1"
      items={items}
      onChange={onChange}
    />
  );
};

export default Home;
