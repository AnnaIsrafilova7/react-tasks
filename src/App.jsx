import CardContainer from "./components/cardContainer";
const App = () => {
  const products = [
    {
      id: 1,
      name: "iPhone 15",
      price: 999,
      category: "Phone",
      image: "/iPhone 15 black.jpg",
    },
    {
      id: 2,
      name: "MacBook Air",
      price: 1299,
      category: "Laptop",
      image: "/MacBook Air.jpg",
    },
    {
      id: 3,
      name: "AirPods Pro",
      price: 249,
      category: "Audio",
      image: "/Apple AirPods.jpg",
    },
    {
      id: 4,
      name: "Samsung Galaxy S24",
      price: 899,
      category: "Phone",
      image: "./public/Samsung galaxy S24 ultra.jpg",
    },
    {
      id: 5,
      name: "iPad Air",
      price: 599,
      category: "Tablet",
      image: "./public/iPad Air.jpg",
    },
    {
      id: 6,
      name: "Apple Watch",
      price: 399,
      category: "Smart Watch",
      image: "./public/Apple Watch.jpg",
    },
  ];
  return(
    <>
    <CardContainer products={products}/>
    </>
  ) 
 
};

export default App;
