import { useState } from "react";

const cars = ["Mercedes", "BMW", "Audi", "Toyota"];
const colors = ["Black", "White", "Red", "Blue"];

function App() {
  const [selectedCar, setSelectedCar] = useState(cars[0]);
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Car Selection</h2>

      <div style={{ marginBottom: "10px" }}>
        <label>
          Car:
          <select
            value={selectedCar}
            onChange={(e) => setSelectedCar(e.target.value)}
          >
            {cars.map((car) => (
              <option key={car} value={car}>
                {car}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>
          Color:
          <select
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
          >
            {colors.map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>
        </label>
      </div>

      <h3>
        You selected a {selectedColor} - {selectedCar}
      </h3>
    </div>
  );
}

export default App;