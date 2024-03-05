import { ReactElement, useContext } from "react";
import { Badge, Button } from "antd";
import { AppContext } from "../../pages/store/Product/context";
import { Types } from "../../pages/store/Product/reducer";
import "./styles.css"

const Products = (): ReactElement => {
  const { state, dispatch } = useContext(AppContext);

  const onClick = () => {
    dispatch({
      type: Types.Add,
    });
  };

  return (
    <div className="block flex items-center">
      <Button className="bg-white m-3" onClick={onClick}>
        Click
      </Button>
      <div>
        <Badge
          className="site-badge-count-109"
          showZero
          count={state.shoppingCart}
          style={{ backgroundColor: "#52c41a" }}
        />
      </div>
    </div>
  );
};

export default Products;
