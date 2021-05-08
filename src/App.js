import "./App.css";

import { useGlobalContext } from "./context";

// components
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";

function App() {
  // if (loading) {
  //   return (
  //     <div>
  //       <h1>Loading...</h1>
  //     </div>
  //   );
  // }

  // Return
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
