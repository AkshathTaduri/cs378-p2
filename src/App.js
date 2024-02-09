import './App.css';
import MenuItem from './components/MenuItem';

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
  return (
    <div>
      <img src="https://logos-world.net/wp-content/uploads/2023/06/Wingstop-Logo-1994.png" alt="Wingstop" class="logo"></img>
      <p class="styled-heading">Where Flavor Gets Its Wings</p>
      <p class="heading">Order Online</p>
      <div className="menu">
        {menuItems.map((item) => (
          <MenuItem
            title={item.title}
            description={item.description}
            imageName={item.imageName}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
