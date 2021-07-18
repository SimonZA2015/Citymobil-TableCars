import Header from "./assets/Compomemts/Header/Header";
import Content from "./assets/Compomemts/Content/Content";
import Footerbar from "./assets/Compomemts/Foterbar/Footerbar";

const App = (props) => {

    return (
        <div>
            <Content dispatch={props.dispatch}/>
            <Footerbar/>
            <Header/>
        </div>
    );
};

export default App;
