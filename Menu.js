import React from "react";
import Navbar from "./Navbar";
import "./menu.css"; // Import CSS for styling

// Individual food items
const individualItems = [
  { name: "Margherita Pizza", price: "$12.99" },
  { name: "BBQ Chicken Pizza", price: "$14.99" },
  { name: "Pepperoni Pizza", price: "$13.99" },
  { name: "Veggie Delight Pizza", price: "$12.49" },
  { name: "Garlic Bread", price: "$5.99" },
  { name: "Caesar Salad", price: "$8.99" },
  { name: "Greek Salad", price: "$9.49" },
  { name: "Spaghetti Bolognese", price: "$14.99" },
  { name: "Fettuccine Alfredo", price: "$13.99" },
  { name: "Lasagna", price: "$15.99" },
  { name: "Grilled Salmon", price: "$18.99" },
  { name: "Chicken Parmesan", price: "$16.99" },
  { name: "Beef Burger", price: "$11.99" },
  { name: "Veggie Burger", price: "$10.99" },
  { name: "French Fries", price: "$4.99" },
  { name: "Mozzarella Sticks", price: "$6.99" },
  { name: "Chocolate Lava Cake", price: "$7.99" },
  { name: "Cheesecake", price: "$6.99" },
  { name: "Strawberry Milkshake", price: "$5.99" },
  { name: "Iced Coffee", price: "$4.49" }
];

// Combo meals (bundles of items)
const comboMeals = [
  { name: "Pizza + Garlic Bread Combo", price: "$17.99" },
  { name: "Burger + Fries Combo", price: "$14.99" },
  { name: "Pizza + Soda Combo", price: "$15.99" },
  { name: "Spaghetti + Caesar Salad Combo", price: "$22.99" },
  { name: "Lasagna + Chocolate Lava Cake Combo", price: "$24.99" },
  { name: "Chicken Parmesan + Iced Coffee Combo", price: "$19.99" },
  { name: "Veggie Burger + Fries Combo", price: "$13.99" }
];

function Menu() {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h2 className="text-center mb-4">Our Menu</h2>

        {/* Individual Items Section */}
        <h3>Individual Items</h3>
        <div className="row">
          {individualItems.map((item, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card shadow-sm p-3">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text text-muted">{item.price}</p>
                <button className="btn btn-primary">Order Now</button>
              </div>
            </div>
          ))}
        </div>

        {/* Combo Meals Section */}
        <h3>Combo Meals</h3>
        <div className="row">
          {comboMeals.map((item, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card shadow-sm p-3">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text text-muted">{item.price}</p>
                <button className="btn btn-primary">Order Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
