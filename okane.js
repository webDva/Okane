class Okane {
    constructor(APIKey, paymentProcessor = "stripe") {
        if (paymentProcessor === "stripe") {
            this.paymentProcessorType = paymentProcessor;
            this.paymentProcessor = Stripe(APIKey);
        }
    }
}