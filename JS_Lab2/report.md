# Лабороторная работа №2

## Описание кода

### Массив транзакций
Код начинается с объявления массива `transactions`, который содержит объекты, представляющие транзакции. Каждый объект включает такие свойства, как `transaction_id`, `transaction_date`, `transaction_amount`, `transaction_type`, `transaction_description`, `merchant_name`, и `card_type`.

### Функции

1. **`getUniqueTransactionTypes(transactions)`**
    Возвращает массив уникальных типов транзакций, используя `Set` для удаления дубликатов.

2. **`calculateTotalAmount(transactions)`**
    Вычисляет общую сумму всех транзакций с помощью метода `reduce`.

3. **`calculateTotalAmountByDate(transactions, year, month, day)`**
    Фильтрует транзакции по указанной дате и вычисляет их сумму.

4. **`getTransactionByType(transactions, type)`**
    Возвращает транзакции определенного типа, например, "debit" или "credit".

5. **`getTransactionsInDateRange(transactions, startDate, endDate)`**
    Возвращает транзакции, которые произошли в указанном диапазоне дат.

6. **`getTransactionsByMerchant(transactions, merchantName)`**
    Фильтрует транзакции по имени магазина.

7. **`calculateAverageTransactionAmount(transactions)`**
    Вычисляет среднюю сумму транзакций.

8. **`getTransactionsByAmountRange(transactions, minAmount, maxAmount)`**
    Возвращает транзакции, сумма которых находится в указанном диапазоне.

9. **`calculateTotalDebitAmount(transactions)`**
    Вычисляет общую сумму всех дебетовых транзакций.

10. **`findMostTransactionsMonth(transactions)`**
     Определяет месяц с наибольшим количеством транзакций.

11. **`findMostDebitTransactionMonth(transactions)`**
     Определяет месяц с наибольшим числом дебетовых транзакций.

12. **`mostTransactionTypes(transactions)`**
     Сравнивает количество дебетовых и кредитных транзакций и возвращает, каких больше.

13. **`getTransactionsBeforeDate(transactions, date)`**
     Возвращает транзакции, которые произошли до указанной даты.

14. **`findTransactionById(transactions, id)`**
     Находит транзакцию по ее ID.

15. **`mapTransactionDescriptions(transactions)`**
     Возвращает массив описаний всех транзакций.

### Тестирование функций
В конце кода приведены примеры вызова всех функций с выводом результатов в консоль.

## Вывод
Код предоставляет набор функций для анализа массива транзакций, включая фильтрацию, вычисление сумм, поиск по критериям и статистический анализ. Это полезный инструмент для работы с финансовыми данными.