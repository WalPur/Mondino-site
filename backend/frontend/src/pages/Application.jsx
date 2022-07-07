import { ApplicationForm } from "../components";
import {Helmet} from "react-helmet";

function Application(){
    return(
        <div className="wrapper">
             <Helmet>
                <title>Mondino Tracker - Заявка для партнерства</title>
            </Helmet>
            <ApplicationForm/>
        </div>
    )
}

export default Application;