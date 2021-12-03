import About from "./components/about/about";
import Intro from "./components/intro/intro";
import ProductList from "./components/productList/ProductList";
import Contact from "./components/contact/Contact";

const App = () => {
  return <div>
    <Intro />
    <About />
    <ProductList />
    <Contact />
  </div>
};

export default App;