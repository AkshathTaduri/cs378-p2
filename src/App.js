import React, {useState} from 'react';
import './App.css';
import MenuItem from './components/MenuItem';
import Subtotal from './components/Subtotal';
import Heading from './components/Heading';

// import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: '15PC MEAL FOR 2',
    description: '15 Boneless or Classic (Bone-In) wings with up to 2 flavors, large fries or veggie sticks, 2 dips and 2 20oz drinks',
    imageName: 'https://olo-images-live.imgix.net/58/58c8a2149a9d474e9b2596f142546f00.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=524&h=350&fit=crop&fm=png32&s=93a196d80110416309db3b560a14e3e0',
    price: 10.99,
  },
  {
    id: 2,
    title: 'CHICKEN SANDWICH COMBO',
    description: '1 crispy, juicy chicken sandwich with pickles in your choice of flavor, regular fries or veggie sticks, 1 dip and a 20oz drink',
    imageName: 'https://olo-images-live.imgix.net/cb/cb4b7e10bc6b40cd998f45cd9f9f69a1.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=524&h=350&fit=crop&fm=png32&s=cf4ef908a4555c4bfd5b5f06144089a8',
    price: 8.49,
  },
  {
    id: 3,
    title: 'LARGE 10 PC WING COMBO',
    description: '10 Boneless or Classic (Bone-In) wings with up to 2 flavors, regular fries or veggie sticks, 1 dip and a 20oz drink',
    imageName: 'https://olo-images-live.imgix.net/c1/c16e03b8d8c74a9daf51bab6426619b9.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=524&h=350&fit=crop&fm=png32&s=2fafb84327048b89160fc095b19b680e',
    price: 15.69,
  },
  {
    id: 4,
    title: 'SMALL 6 PC WING COMBO',
    description: '6 Boneless or Classic (Bone-In) wings with up to 2 flavors, regular fries or veggie sticks, 1 dip and a 20oz drink',
    imageName: 'https://olo-images-live.imgix.net/86/86f4aad2d9cc4b52be99c2fa4b222654.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=524&h=350&fit=crop&fm=png32&s=413f098d5c96cc8704151a2527dd40ec',
    price: 12.49,
  }
];


function App() {
  const [cart, setCart] = useState({});

  const addToCart = (itemId) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart};
      updatedCart[itemId] = (updatedCart[itemId] || 0) + 1;
      return updatedCart;
    });
  }

  const removeFromCart = (itemId) => {
    setCart((prevCart) => {
      const updatedCart = {...prevCart};
      if (updatedCart[itemId] > 0) {
        updatedCart[itemId] -= 1;
        if (updatedCart[itemId] === 0) {
          delete updatedCart[itemId];
        }
      }
      return updatedCart;
    });
  };

  const clearCart = () => {
    setCart({});
  };

  const calculateTotal = () => {
    return Object.keys(cart).reduce((total, itemId)  => {
      const menuItem = menuItems.find((menu) => menu.id === parseInt(itemId, 10));
      return total + menuItem.price * cart[itemId];
    }, 0);
  }

  const OrderPopup = () => {
    return (
      <div className="order-popup-container">
        <div className="order-popup">
          <h2>Your Order</h2>
          <ul>
            {Object.keys(cart).map((itemId) => {
              const menuItem = menuItems.find((menu) => menu.id === parseInt(itemId, 10));
              return (
                <li key={itemId}>
                  {cart[itemId]} {menuItem.title}
                </li>
              );
            })}
          </ul>
          <button onClick={() => setOrderPopupVisible(false)}>OK</button>
        </div>
      </div>
    );
  };

  const [orderPopupVisible, setOrderPopupVisible] = useState(false);

  const orderItems = () => {
    if (Object.keys(cart).length === 0) {
      alert("No items in cart");
    } else {
      setOrderPopupVisible(true);
    }
  };

  return (
    <div>
      <Heading
        imageSrc={"https://logos-world.net/wp-content/uploads/2023/06/Wingstop-Logo-1994.png"}
        altText={"Wingstop"}
        heading={"Where Flavor Gets Its Wings"}
        subHeading={"Order Online"}
      />
      <div className="menu">
        {menuItems.map((item) => (
          <MenuItem
            id={item.id}
            title={item.title}
            imageName={item.imageName}
            price={item.price}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            quantity={cart[item.id] || 0}
          />
        ))}
      </div>

      <Subtotal
        subtotal={calculateTotal()}
        clearCart={clearCart}
        orderItems={orderItems}
      />
      {orderPopupVisible && <OrderPopup />}
    </div>
  );
}

export default App;
