import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Card from './Card';

function App() {
  const [category, setCategory] = useState("All");
  const [priority, setPriority] = useState("All");
  const ogProducts = [
    {"Category":"UI", "Description":"Submit button coming at the exterme left", "Priority": 2, "Status":"open", "Change Status": "Close Defect"}, 
    {"Category":"Functional", "Description":"While submitting the form data, give confirmation popup", "Priority": 1, "Status":"open", "Change Status": "Close Defect"},
    {"Category":"Change Request", "Description":"Add remove functionality", "Priority": 3, "Status":"closed", "Change Status": "No action pending"}
  ];
  const [products, setProducts] = useState(ogProducts);

  const handleChange = (category, priority) => {
    const filteredProducts = ogProducts.filter(product =>
      ((category === "All" || product.Category === category) && 
      (priority === "All" || product.Priority.toString() === priority))
    );
    setProducts(filteredProducts);
  };

  return (
    <div className="App">
      <h1>Defect Tracker</h1>

      <a href='http://google.com'>Logout</a>

      <h2>Filter Details</h2>

      <label> Priority: 
        <select value={priority} onChange={(event) => {const x = event.target.value; setPriority(x); handleChange(category, x);}}>
          <option value={'All'}>All</option>
          <option value={'2'}>2</option>
          <option value={'1'}>1</option>
          <option value={'3'}>3</option>
        </select>
      </label>

      <label> Category: 
        <select value={category} onChange={(event) => {const x = event.target.value; setCategory(x); handleChange(x, priority);}}>
          <option value={'All'}>All</option>
          <option value={'UI'}>UI</option>
          <option value={'Functional'}>Functional</option>
          <option value={'Change Request'}>Change Request</option>
        </select>
      </label>

      <Card products={products} category={category} priority={priority}></Card>
    </div>
  );
}

export default App;
