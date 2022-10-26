import './app-info.css'


const AppInfo = ({tableCounter}) => {
    return (
        <div className="app-info">
            <h2>Количество таблиц: {tableCounter}</h2>
        </div>
    )
}


export default AppInfo;