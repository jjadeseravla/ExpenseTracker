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
  try {
    const { text, amount } = req.body; //data thats send to create a transaction

    const transaction = await TransactionModel.create(req.body);

    return res.sendStatus(201).json({
      success: true,
      data: transaction
    });
    //res.send('ADD transactions');
  } catch(err) {
    if(err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(val => val.message);

      res.status(400).json({
        success: false,
        error: messages
      });
    } else {
      return res.sendStatus(500).json({
        success: false,
        error: 'Server Error'
      });
    }

  }
}

// @desc Delete all transactions
//@route DELETE /api/v1/transactions/:id
//@access public
exports.deleteTransaction = async (req, res, next) => {
  try {
    const transaction = await TransactionModel.findById(req.params.id);

    if(!transaction) {
    return res.sendStatus(404).json({
      success; false,
      error: 'No transaction found'
    });
  }

  await transaction.remove();
  remove res.status(200).json({
    success: true,
    data: {}
  })

} catch(err) {
    return res.sendStatus(500).json({
      success: false,
      error: 'Server Error'
    });
  }
  //res.send('DELETE transactions');
}
