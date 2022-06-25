import Components from "../components/index";
import {Helmet} from "react-helmet";

function Contacts(){
    return(
        <div className="wrapper">
             <Helmet>
                <title>Mondino Tracker - Контакты</title>
            </Helmet>
            <Components.ContactsMap/>
        </div>
    )
}

export default Contacts;