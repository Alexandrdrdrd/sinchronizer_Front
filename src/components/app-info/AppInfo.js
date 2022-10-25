import './app-info.css'


const AppInfo = ({tableCounter}) => {
    return (
        <div className="app-info">
            <h1>Количество таблиц: {tableCounter}</h1>
        </div>
    )
}


export default AppInfo;