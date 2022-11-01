import './app-info.css'


const AppInfo = ({numberOfTables, columnsSelected}) => {
    return (
        <div className="app-info">
            <h2>Количество таблиц: {numberOfTables}</h2>
            <h2>Выбрано колонок:{columnsSelected}</h2>
        </div>
    )
}


export default AppInfo;