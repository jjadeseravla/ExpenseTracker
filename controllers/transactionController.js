const TransactionModel = require('../models/TransactionModel');

// @desc Get all transactions
//@route GET /api/v1/transactions
//@access public
exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find();

    return res.sendStatus(200).json({
      success: true,
      count: transactions.length,
      data: transactions
    });
  } catch (err) {

    return res.sendStatus(500).json({
      success: false,
      error: 'Server error'
    });
  }
}

// @desc Add all transactions
//@route POST/api/v1/transactions
//@access public
exports.addTransaction = async (req, res, next) => {
  res.send('ADD transactions');
}

// @desc Delete all transactions
//@route DELETE /api/v1/transactions/:id
//@access public
exports.deleteTransaction = async (req, res, next) => {
  res.send('DELETE transactions');
}
