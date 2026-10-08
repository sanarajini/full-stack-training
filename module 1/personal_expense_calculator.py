def calculate_savings(income, total_expenses):
    return income - total_expenses


def display_report(income, expenses, total_expenses, savings):
    print("\n========== EXPENSE SUMMARY ==========")
    print("Income         :", income)
    print("\nExpenses:")

    for category, amount in expenses:
        print(category, ":", amount)

    print("\nTotal Expenses :", total_expenses)
    print("Savings        :", savings)
    print("=====================================")


print("PERSONAL EXPENSE CALCULATOR")
print("-------------------------------------")

income = float(input("Enter your monthly income: "))

number_of_expenses = int(input("Enter number of expenses: "))

expenses = []
total_expenses = 0

for i in range(number_of_expenses):
    print("\nExpense", i + 1)

    category = input("Enter expense category: ")
    amount = float(input("Enter expense amount: "))

    expenses.append((category, amount))
    total_expenses += amount

savings = calculate_savings(income, total_expenses)

display_report(income, expenses, total_expenses, savings)