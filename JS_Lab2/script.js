/**
 * Массив транзакций
 */
const transactions = [
  {
    transaction_id: "1",
    transaction_date: "2019-01-01",
    transaction_amount: 100.0,
    transaction_type: "debit",
    transaction_description: "Payment for groceries",
    merchant_name: "SuperMart",
    card_type: "Visa",
  },
  {
    transaction_id: "2",
    transaction_date: "2019-01-02",
    transaction_amount: 50.0,
    transaction_type: "credit",
    transaction_description: "Refund for returned item",
    merchant_name: "OnlineShop",
    card_type: "MasterCard",
  },
  {
    transaction_id: "3",
    transaction_date: "2019-01-03",
    transaction_amount: 75.0,
    transaction_type: "debit",
    transaction_description: "Dinner with friends",
    merchant_name: "RestaurantABC",
    card_type: "Amex",
  },
];

/**
 * Возвращает массив уникальных типов транзакций
 */
function getUniqueTransactionTypes(transactions) {
  return [...new Set(transactions.map(t => t.transaction_type))];
}

/**
 * Вычисляет сумму всех транзакций
 */
function calculateTotalAmount(transactions) {
  return transactions.reduce((sum, t) => sum + t.transaction_amount, 0);
}

/**
 * Вычисляет сумму транзакций за указанную дату
 */
function calculateTotalAmountByDate(transactions, year, month = null, day = null) {
  return transactions.filter(t => {
    const [tYear, tMonth, tDay] = t.transaction_date.split("-").map(Number);
    return tYear === year && (month === null || tMonth === month) && (day === null || tDay === day);
  }).reduce((sum, t) => sum + t.transaction_amount, 0);
}

/**
 * Возвращает транзакции указанного типа
 */
function getTransactionByType(transactions, type) {
  return transactions.filter(t => t.transaction_type === type);
}

/**
 * Возвращает транзакции в указанном диапазоне дат
 */
function getTransactionsInDateRange(transactions, startDate, endDate) {
  return transactions.filter(t => t.transaction_date >= startDate && t.transaction_date <= endDate);
}

/**
 * Возвращает транзакции по имени магазина
 */
function getTransactionsByMerchant(transactions, merchantName) {
  return transactions.filter(t => t.merchant_name === merchantName);
}

/**
 * Возвращает среднюю сумму транзакций
 */
function calculateAverageTransactionAmount(transactions) {
  return transactions.length ? calculateTotalAmount(transactions) / transactions.length : 0;
}

/**
 * Возвращает транзакции в указанном диапазоне сумм
 */
function getTransactionsByAmountRange(transactions, minAmount, maxAmount) {
  return transactions.filter(t => t.transaction_amount >= minAmount && t.transaction_amount <= maxAmount);
}

/**
 * Вычисляет сумму всех дебетовых транзакций
 */
function calculateTotalDebitAmount(transactions) {
  return transactions.filter(t => t.transaction_type === "debit")
                      .reduce((sum, t) => sum + t.transaction_amount, 0);
}

/**
 * Возвращает месяц с наибольшим количеством транзакций
 */
function findMostTransactionsMonth(transactions) {
  const count = {};
  transactions.forEach(t => {
    const month = t.transaction_date.slice(0, 7);
    count[month] = (count[month] || 0) + 1;
  });
  return Object.keys(count).reduce((a, b) => (count[a] > count[b] ? a : b), "");
}

/**
 * Возвращает месяц с наибольшим числом дебетовых транзакций
 */
function findMostDebitTransactionMonth(transactions) {
  const count = {};
  transactions.filter(t => t.transaction_type === "debit").forEach(t => {
    const month = t.transaction_date.slice(0, 7);
    count[month] = (count[month] || 0) + 1;
  });
  return Object.keys(count).reduce((a, b) => (count[a] > count[b] ? a : b), "");
}

/**
 * Возвращает каких транзакций больше
 */
function mostTransactionTypes(transactions) {
  const debitCount = transactions.filter(t => t.transaction_type === "debit").length;
  const creditCount = transactions.filter(t => t.transaction_type === "credit").length;
  return debitCount > creditCount ? "debit" : creditCount > debitCount ? "credit" : "equal";
}

/**
 * Возвращает транзакции до указанной даты
 */
function getTransactionsBeforeDate(transactions, date) {
  return transactions.filter(t => t.transaction_date < date);
}

/**
 * Возвращает транзакцию по ID
 */
function findTransactionById(transactions, id) {
  return transactions.find(t => t.transaction_id === id) || null;
}

/**
 * Возвращает массив описаний транзакций
 */
function mapTransactionDescriptions(transactions) {
  return transactions.map(t => t.transaction_description);
}

/** Тестирование функций */
console.log("Уникальные типы транзакций:", getUniqueTransactionTypes(transactions));
console.log("Общая сумма транзакций:", calculateTotalAmount(transactions));
console.log("Сумма транзакций за 2019-01-01:", calculateTotalAmountByDate(transactions, 2019, 1, 1));
console.log("Транзакции типа debit:", getTransactionByType(transactions, "debit"));
console.log("Транзакции в диапазоне дат:", getTransactionsInDateRange(transactions, "2019-01-01", "2019-01-03"));
console.log("Средняя сумма транзакции:", calculateAverageTransactionAmount(transactions));
console.log("Транзакции в диапазоне сумм:", getTransactionsByAmountRange(transactions, 50, 100));
console.log("Общая сумма дебетовых транзакций:", calculateTotalDebitAmount(transactions));
console.log("Месяц с наибольшим количеством транзакций:", findMostTransactionsMonth(transactions));
console.log("Месяц с наибольшим числом дебетовых транзакций:", findMostDebitTransactionMonth(transactions));
console.log("Каких транзакций больше:", mostTransactionTypes(transactions));
console.log("Транзакции до 2019-01-02:", getTransactionsBeforeDate(transactions, "2019-01-02"));
console.log("Транзакция с ID 2:", findTransactionById(transactions, "2"));
console.log("Описания транзакций:", mapTransactionDescriptions(transactions));
