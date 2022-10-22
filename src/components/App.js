import "../assets/css/App.scss";

import Footer from "./Footer";
import { Header } from "./Header";
import TransactionsTable from "./TransactionsTable";

function App() {
  return (
    <div>
      <Header />
      <TransactionsTable />
      <Footer />
    </div>
  );
}

export default App;
