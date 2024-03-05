import { Divider } from "antd";
import List from "../../components/List";
import Products from "../../components/Product";

const ShoppingCart = () => {
  return (
    <div className="gap-4">
      <Products />
      <Divider orientation="left">Create product</Divider>
      <List />
    </div>
  );
};

export default ShoppingCart;
