import { ReactElement } from "react";
import { Divider, Tabs, Tooltip } from "antd";
import type { TabsProps } from "antd";
import TodoList from "../TodoList/TodoList";
import TodosContextProvider from "../store/TodoList/TodosContextProvider";
import "./styles.css";
import { AppProvider } from "../store/Product/context";
import ShoppingCart from "../ShoppingCart";

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Todo list",
    children: (
      <TodosContextProvider>
        <Divider orientation="left">Context API</Divider>
        <TodoList />
      </TodosContextProvider>
    ),
  },
  {
    key: "2",
    label: (
      <Tooltip placement="top" title={"Mặc dù đã đọc, học và làm theo hướng dẫn, nhưng tôi vẫn chưa hiểu lắm"}>
        Shoping Cart
      </Tooltip>
    ),
    children: (
      <AppProvider>
        <Divider orientation="left">Global state</Divider>
        <ShoppingCart />
      </AppProvider>
    ),
  }
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
