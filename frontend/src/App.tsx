import React, { useState } from "react";
import axios from "axios";
import Input from "./Input.js";
import Select from "./Select.js";

const App = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [operand, setOperand] = useState("sum");

  const onSubmitHandler = async (event: React.SyntheticEvent) => {
    try {
      event.preventDefault();
      const { data } = await axios.get(
        `/api?operand=${operand}&v1=${value1}&v2=${value2}`
      );
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div style={{ display: "flex", padding: "200px" }}>
      <form style={{ margin: "auto" }} onSubmit={onSubmitHandler}>
        <Input
          value={value1}
          label="Value 1"
          onChange={(event: React.KeyboardEvent<HTMLInputElement>) =>
            setValue1(event.target.value)
          }
        />
        <Input
          value={value2}
          label="Value 2"
          onChange={(event: React.KeyboardEvent<HTMLInputElement>) =>
            setValue2(event.target.value)
          }
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "10px 0",
          }}
        >
          <Select
            value={operand}
            onChange={(event: React.SyntheticEvent) =>
              setOperand(event.target.value)
            }
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default App;
