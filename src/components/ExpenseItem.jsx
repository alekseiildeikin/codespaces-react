import './ExpenseItem.css';

const ExpenseItem = () => {
    const date = new Date(2024, 10, 12)
    const title = 'New book'
    const price = 30.99
    return (
        <div className='expense-item'>
            <ExpenseItem
            date={date}
            title={title}
            price={price}
            />
        </div>
    )
}

export default ExpenseItem