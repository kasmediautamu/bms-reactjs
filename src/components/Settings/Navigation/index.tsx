import { useRouteMatch } from "react-router"
import { Link } from "react-router-dom"
import './styles.scss'
const SettingsNav =()=>{
    let { url } = useRouteMatch()
    return (
        <div className="settings__nav">
        <div className="settings__header">Select Settings</div>
        <Link to={`${url}/bank-level-limits-maintenance`} className="settings__options">Bank level limits maintenace</Link>
        <Link to={`${url}/daily-user-limits-maintenace`} className="settings__options">Daily user limits maintenace</Link>
        <Link to={`${url}/global-service-message`} className="settings__options">Global service message</Link>  
        </div>
    )
}
export default SettingsNav