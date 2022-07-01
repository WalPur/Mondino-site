import Components from '../components/index'
import {Helmet} from "react-helmet";

function Team() {
    return(
        <div>
            <Helmet>
                <title>Mondino Tracker - Команде</title>
            </Helmet>
            <Components.tasks/>
            <Components.leaders/>
            <Components.showboat/>
            <Components.advertising/>
        </div>
    )
}

export default Team;