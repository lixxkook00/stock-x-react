import "./App.scss";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import data from "./data";

function App() {
    return (
        <>
            <Header />
            <Banner />
            <Main data={data} />
            <Footer />
        </>
    );
}

export default App;
