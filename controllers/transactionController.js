// @desc Get all transactions
//@route GET /api/v1/transactions
//@access public
exports.getTransactions = (req, res, next) => {
  res.send('GET transactions');
}

// @desc Add all transactions
//@route POST/api/v1/transactions
//@access public
exports.addTransaction = (req, res, next) => {
  res.send('ADD transactions');
}

// @desc Delete all transactions
//@route DELETE /api/v1/transactions
//@access public
exports.deleteTransaction = (req, res, next) => {
  res.send('DELETE transactions');
}
