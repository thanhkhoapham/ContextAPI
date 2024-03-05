import React from "react";
import { AppContext } from "../../pages/store/Product/context";
import { Types } from "../../pages/store/Product/reducer";
import { Button, Divider, Input } from "antd";

const List = () => {
  const [form, setForm] = React.useState({
    name: "",
    price: 0,
  });
  const { state, dispatch } = React.useContext(AppContext);

  const handleForm = (type: string, value: string) => {
    setForm((form) => ({
      ...form,
      [type]: value,
    }));
  };

  const createProduct = () => {
    dispatch({
      type: Types.Create,
      payload: {
        id: Math.round(Math.random() * 10000),
        name: form.name,
        price: form.price,
      },
    });
  };

  const deleteProduct = (id: number) => {
    dispatch({
      type: Types.Delete,
      payload: {
        id,
      },
    });
  };

  return (
    <div className="flex flex-col">
      <div className="p-3">
        <div className="flex items-center">
          <h1>Name: </h1>
          <Input
            className="w-[50%] m-[10px]"
            value={form.name}
            onChange={(e) => {
              handleForm("name", e.target.value);
            }}
            placeholder="Name"
          />
        </div>

        <div className="flex items-center">
          <h1>Count: </h1>
          <Input
            className="w-[50%] m-[10px]"
            value={form.price}
            type="number"
            onChange={(e) => {
              handleForm("price", e.target.value);
            }}
            placeholder="Price"
          />
        </div>
      </div>


      <Button
        className="w-min h-full bg-white text-sm font-bold flex items-center justify-center"
        onClick={createProduct}
      >
        Create
      </Button>
      <div style={{ marginTop: 20 }}>
        {state.products.map((c) => (
          <div className="flex items-center pb-3 justify-between">
            <div className="mr-[20px] font-bold text-lg flex-1 p-2">
              <span>{c.name}</span>
              <span>{c.price}</span>
            </div>
            <Button
              className="bg-white text-base font-bold flex items-center justify-center"
              onClick={() => deleteProduct(c.id)}
            >
              delete
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
