type FirebaseQuestions = Record<
    string,
    {
        id: string
        description: string
        category: string
        price: string
        type: string
        createdAt: string
        empty?: string
    }
>
export function useTransaction(data: any) {
    const firebaseQuestions: FirebaseQuestions = data

    const transactionsSnapshot = Object.entries(firebaseQuestions).map(
        ([key, value]) => {
            return {
                id: key,
                description: value.description,
                price: value.price,
                category: value.category,
                type: value.type,
                createdAt: value.createdAt,
            }
        }
    )
    return { transactionsSnapshot }
}
