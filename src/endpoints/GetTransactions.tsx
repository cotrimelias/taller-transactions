export type Transaction = {
    id: number,
    date: Date,
    description: string,
    amount: number
};

type TransactionResponse = {
    data: Transaction[]
}
export const getAllTransactions = async (): Promise<TransactionResponse> => {
    try {
        const result = '{ "data": [{ "id": "1239812", "date": "2024-10-03", "description": "Bread for grandma", "amount": "2.74" }, { "id": "3139812", "date": "2024-11-27", "description": "New leash for dog", "amount": "12.74" }] }'
        return JSON.parse(result);
    } catch(e) {
        throw new Error(e)
    }
}