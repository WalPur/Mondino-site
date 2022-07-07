import Components from '../components/index'
import {Helmet} from "react-helmet";

function Team() {
    return(
        <div>
            <Helmet>
                <title>Mondino Tracker - Команде</title>
            </Helmet>
            <Components.Tasks/>
            <Components.Leaders/>
            <Components.Showboat/>
            <Components.Medicine/>
        </div>
    )
}

export default Team;