-- CreateTable
CREATE TABLE "User" (
    "SSN" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("SSN")
);

-- CreateTable
CREATE TABLE "Bank" (
    "swiftcode" TEXT NOT NULL,
    "branchName" TEXT NOT NULL,
    "accountType" TEXT NOT NULL,

    CONSTRAINT "Bank_pkey" PRIMARY KEY ("swiftcode")
);

-- CreateTable
CREATE TABLE "BankAccount" (
    "accountNumber" TEXT NOT NULL,
    "openingDate" TIMESTAMP(3) NOT NULL,
    "balance" DOUBLE PRECISION NOT NULL,
    "SSN" TEXT NOT NULL,
    "swiftcode" TEXT NOT NULL,

    CONSTRAINT "BankAccount_pkey" PRIMARY KEY ("accountNumber")
);

-- CreateTable
CREATE TABLE "Card" (
    "cardId" SERIAL NOT NULL,
    "cardNumber" TEXT NOT NULL,
    "cvv" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "expiryDate" TIMESTAMP(3) NOT NULL,
    "accountNumber" TEXT NOT NULL,

    CONSTRAINT "Card_pkey" PRIMARY KEY ("cardId")
);

-- CreateTable
CREATE TABLE "Loan" (
    "loanId" SERIAL NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "interestRate" DOUBLE PRECISION NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "accountNumber" TEXT NOT NULL,

    CONSTRAINT "Loan_pkey" PRIMARY KEY ("loanId")
);

-- CreateTable
CREATE TABLE "Teller" (
    "employeeId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "swiftcode" TEXT NOT NULL,

    CONSTRAINT "Teller_pkey" PRIMARY KEY ("employeeId")
);

-- CreateTable
CREATE TABLE "Transactions" (
    "transactionId" SERIAL NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "transactionType" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "senderAccountNumber" TEXT NOT NULL,
    "recipientAccountNumber" TEXT NOT NULL,

    CONSTRAINT "Transactions_pkey" PRIMARY KEY ("transactionId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Card_cardNumber_key" ON "Card"("cardNumber");

-- AddForeignKey
ALTER TABLE "BankAccount" ADD CONSTRAINT "BankAccount_SSN_fkey" FOREIGN KEY ("SSN") REFERENCES "User"("SSN") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BankAccount" ADD CONSTRAINT "BankAccount_swiftcode_fkey" FOREIGN KEY ("swiftcode") REFERENCES "Bank"("swiftcode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_accountNumber_fkey" FOREIGN KEY ("accountNumber") REFERENCES "BankAccount"("accountNumber") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Loan" ADD CONSTRAINT "Loan_accountNumber_fkey" FOREIGN KEY ("accountNumber") REFERENCES "BankAccount"("accountNumber") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Teller" ADD CONSTRAINT "Teller_swiftcode_fkey" FOREIGN KEY ("swiftcode") REFERENCES "Bank"("swiftcode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transactions" ADD CONSTRAINT "Transactions_senderAccountNumber_fkey" FOREIGN KEY ("senderAccountNumber") REFERENCES "BankAccount"("accountNumber") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transactions" ADD CONSTRAINT "Transactions_recipientAccountNumber_fkey" FOREIGN KEY ("recipientAccountNumber") REFERENCES "BankAccount"("accountNumber") ON DELETE RESTRICT ON UPDATE CASCADE;
