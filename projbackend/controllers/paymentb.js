const braintree = require("braintree");

const gateway = braintree.connect({
    environment: braintree.Environment.Sandbox,
    merchantId: "djp5xyv8ps26srnn",
    publicKey: "vg37qcj2z7yyjknv",
    privateKey: "1fa0f1dda3d7b9640643031d072e5750"
});

exports.getToken = (req, res) => {
    gateway.clientToken.generate({}, function(err, response) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(response);
        }
    });
};

exports.processPayment = (req, res) => {
    let nonceFromTheClient = req.body.paymentMethodNonce;

    let amountFromTheClient = req.body.amount;
    gateway.transaction.sale(
        {
            amount: amountFromTheClient,
            paymentMethodNonce: nonceFromTheClient,

            options: {
                submitForSettlement: true
            }
        },
        function(err, result) {
            if (err) {
                res.status(500).json(error);
            } else {
                res.json(result);
            }
        }
    );
};
