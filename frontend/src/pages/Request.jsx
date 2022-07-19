import { RequestComponent } from '../components/index'
import {Helmet} from "react-helmet";

function Team() {
    return(
        <div className="wrapper">
            <Helmet>
                <title>Mondino Tracker - Заявка принята</title>
            </Helmet>
            <RequestComponent/>
        </div>
    )
}

export default Team;