import Components from "../components";
import {Helmet} from "react-helmet";

function Application(){
    return(
        <div className="wrapper">
             <Helmet>
                <title>Mondino Tracker - Заявка для партнерства</title>
            </Helmet>
            <Components.ApplicationForm/>
        </div>
    )
}

export default Application;