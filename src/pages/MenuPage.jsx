import React from "react";
import Hero from "../componets/Hero";
import menuBg from "../assets/heromenu.jpg";
import MenuCard from "../componets/menu";

import menu1 from "../assets/menu1.jpg";
import menu2 from "../assets/menu2.jpg";
import menu3 from "../assets/menu3.jpg";
import menu4 from "../assets/menu4.jpg";

export default function MenuPage() {
  const menuData = [
    {
      image: menu1,
      header: "Breakfast",
      dishes: [
        { name: "English Breakfast", description: "smoked bacon, sausage, tomato, mushrooms, black pudding, baked beans, eggs", price: "$12" },
        { name: "Avocado Toast", description: "poached egg, avocado, onion, tomatoes, bread", price: "$8" },
        { name: "Burrito", description: "tortilla, egg, cheese, potatoes, pork meat", price: "$11" },
      ],
    },
    {
      image: menu2,
      header: "Lunch",
      dishes: [
        { name: "Caesar Salad", description: "chicken breast, romaine lettuce, croutons, parmesan", price: "$15" },
        { name: "Spaghetti Carbonara", description: "spaghetti, pancetta, garlic, eggs, parmesan, pepper", price: "$14" },
        { name: "Pizza", description: "chorizo, italian salami, tomatoes, mushrooms, olives", price: "$12" },
      ],
    },
    {
      image: menu3,
      header: "Dinner",
      dishes: [
        { name: "Spicy Beef", description: "spicy beef, potatoes, carrots, cheese sauce, spices", price: "$17" },
        { name: "Spaghetti Bolognese", description: "onion, carrot, celery, minced meat, spaghetti, parmesan", price: "$15" },
        { name: "Chickpea Curry", description: "onion, chickpea, garlic, mushrooms, tomatoes, spices", price: "$12" },
      ],
    },
    {
      image: menu4,
      header: "Dessert",
      dishes: [
        { name: "Lemon Cake", description: "flour, sugar, baking powder, lemon", price: "$9" },
        { name: "Cinnamon Rolls", description: "flour, salt, sugar, cinnamon, yeast, sour cream, milk", price: "$11" },
        { name: "Vegan Pancakes", description: "flour, sugar, baking powder, soya milk, blueberries", price: "$8" },
      ],
    },
  ];

  return (
    <>
      <Hero title="Menu" background={menuBg} />

      <div className="menu-page">
        {menuData.map((menu, index) => (
          <MenuCard
            key={index}
            header={menu.header}
            image={menu.image}
            dishes={menu.dishes}
            theme={index % 2 === 0 ? "light" : "dark"} 
          />
        ))}
      </div>
    </>
  );
}
