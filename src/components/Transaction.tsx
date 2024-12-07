type TransactionItemProps = {
    id: number,
    date: Date,
    description: string,
    amount: number,
}
const TransactionItem = ({ id, date, description, amount }: TransactionItemProps) => {
    return <div>
        <h1>Transaction #{id}</h1>
        <div>Date: {`${date}`}</div>
        <div>Amount: {amount}</div>
        <div>Description: {description}</div>
    </div>
}

export default TransactionItem