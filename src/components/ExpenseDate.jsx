const ExpenseItem = (props) => {
    
    const day = props.data.date.toLocaleString('en-US', {month: '2-digit'})
    const month = props.data.date.toLocaleString('en-US', {month: 'long'})
    const year = props.data.date.getFullYear()

    return(
        <div>
            <div>{month}</div>
            <div>{day}</div>
            <div>{year}</div>
        </div>
    )
}