import "./styles.css";

export default function App() {
  const showNestedData = (event) => {
    const currentElement = event.target;
    console.log("Current:", currentElement);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <table>
        <thead>
          <tr>
            <th>Regian</th>
            <th>Q1 2010</th>
            <th>Q2 2010</th>
            <th>Q3 2010</th>
            <th>Q4 2010</th>
          </tr>
        </thead>
        <tbody>
          <tbody className="labels">
            <tr>
              <td colSpan="5">
                <label htmlFor="accounting">Accounting</label>
                <input
                  type="checkbox"
                  name="accounting"
                  id="accounting"
                  data-toggle="toggle"
                  onClick={showNestedData}
                ></input>
              </td>
            </tr>
          </tbody>
          <tbody className="hide">
            <tr>
              <td>Australia</td>
              <td>$7,685.00</td>
              <td>$3,544.00</td>
              <td>$5,834.00</td>
              <td>$10,583.00</td>
            </tr>
            <tr>
              <td>Central America</td>
              <td>$7,685.00</td>
              <td>$3,544.00</td>
              <td>$5,834.00</td>
              <td>$10,583.00</td>
            </tr>
          </tbody>
          <tbody className="labels">
            <tr>
              <td colSpan="5">
                <label htmlFor="management">Management</label>
                <input
                  type="checkbox"
                  name="management"
                  id="management"
                  data-toggle="toggle"
                />
              </td>
            </tr>
          </tbody>
          <tbody className="hide">
            <tr>
              <td>Australia</td>
              <td>$7,685.00</td>
              <td>$3,544.00</td>
              <td>$5,834.00</td>
              <td>$10,583.00</td>
            </tr>
            <tr>
              <td>Central America</td>
              <td>$7,685.00</td>
              <td>$3,544.00</td>
              <td>$5,834.00</td>
              <td>$10,583.00</td>
            </tr>
            <tr>
              <td>Europe</td>
              <td>$7,685.00</td>
              <td>$3,544.00</td>
              <td>$5,834.00</td>
              <td>$10,583.00</td>
            </tr>
            <tr>
              <td>Middle East</td>
              <td>$7,685.00</td>
              <td>$3,544.00</td>
              <td>$5,834.00</td>
              <td>$10,583.00</td>
            </tr>
          </tbody>
        </tbody>
      </table>
    </div>
  );
}
