--
-- PostgreSQL database dump
--

-- Dumped from database version 16.1 (Debian 16.1-1.pgdg120+1)
-- Dumped by pg_dump version 16.0

-- Started on 2023-12-31 02:11:59


--
-- TOC entry 3442 (class 0 OID 16578)
-- Dependencies: 216
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."User" ("SSN", "firstName", "lastName", email, password, address, "phoneNumber") VALUES ('946085683', 'Mohamed', 'Kareem', 'mohamed234@gmail.com', '', 'El Nasr Rd., Aswan, 21532, Egypt', '01893161371');
INSERT INTO public."User" ("SSN", "firstName", "lastName", email, password, address, "phoneNumber") VALUES ('906144384', 'Sameh', 'El Alfy', 'alfy2345@gmail.com', '', 'El Gomhoreya St., Cairo, 11511, Egypt', '01176823972');
INSERT INTO public."User" ("SSN", "firstName", "lastName", email, password, address, "phoneNumber") VALUES ('975055166', 'Mike', 'Kraven', 'kraven@gmail.com', '', 'Ahmed Orabi St., Mansoura, 12556, Egypt', '01215406554');
INSERT INTO public."User" ("SSN", "firstName", "lastName", email, password, address, "phoneNumber") VALUES ('170363269', 'Peter', 'Parker', 'parker@gmail.com', '', 'El Bahr El Aazam St., Giza, 35516, Egypt', '01308462043');
INSERT INTO public."User" ("SSN", "firstName", "lastName", email, password, address, "phoneNumber") VALUES ('948966589', 'Norman', 'Osborne', 'norman8@gmail.com', '', 'El Nasr Rd., Aswan, 21532, Egypt', '1711907875');
INSERT INTO public."User" ("SSN", "firstName", "lastName", email, password, address, "phoneNumber") VALUES ('325476952', 'Mary', 'Jane', 'jane2453@gmail.com', '', 'El Nasr Rd., Aswan, 21532, Egypt', '01711907875');
INSERT INTO public."User" ("SSN", "firstName", "lastName", email, password, address, "phoneNumber") VALUES ('775613139', 'Ahmad', 'Lasheen', 'lasheen@gmail.com', '', 'Ahmed Orabi St., Giza, 12556, Egypt', '01978757940');

--
-- TOC entry 3443 (class 0 OID 16585)
-- Dependencies: 217
-- Data for Name: Bank; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Bank" (swiftcode, "branchName") VALUES ('ZVYUVNS0965', '7 Emarat');
INSERT INTO public."Bank" (swiftcode, "branchName") VALUES ('YFTZZDI3OAB', 'Abbaseyya');
INSERT INTO public."Bank" (swiftcode, "branchName") VALUES ('CBTIDBN0I6F', 'El Nozha');
INSERT INTO public."Bank" (swiftcode, "branchName") VALUES ('SQQDEJ3RXDO', 'Alexandria');
INSERT INTO public."Bank" (swiftcode, "branchName") VALUES ('OKPYVNR1P3Q', 'EL Bostan');
INSERT INTO public."Bank" (swiftcode, "branchName") VALUES ('AKQIDA9YUZL', 'Madinet Nasr');
INSERT INTO public."Bank" (swiftcode, "branchName") VALUES ('NAXWCPHKE3Q', '5th Settlement');

--
-- TOC entry 3444 (class 0 OID 16592)
-- Dependencies: 218
-- Data for Name: BankAccount; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."BankAccount" ("openingDate", balance, "SSN", swiftcode, "accountNumber", "accountType") VALUES ('2023-12-30 23:24:50.799', 1000, '170363269', 'AKQIDA9YUZL', 1, 'SAVINGS');
INSERT INTO public."BankAccount" ("openingDate", balance, "SSN", swiftcode, "accountNumber", "accountType") VALUES ('2023-12-30 23:32:34.728', 10000, '325476952', 'CBTIDBN0I6F', 2, 'CURRENT');
INSERT INTO public."BankAccount" ("openingDate", balance, "SSN", swiftcode, "accountNumber", "accountType") VALUES ('2023-12-30 23:32:34.728', 0, '948966589', 'CBTIDBN0I6F', 7, 'SAVINGS');
INSERT INTO public."BankAccount" ("openingDate", balance, "SSN", swiftcode, "accountNumber", "accountType") VALUES ('2023-12-30 23:32:34.728', 100000, '775613139', 'SQQDEJ3RXDO', 8, 'SAVINGS');
INSERT INTO public."BankAccount" ("openingDate", balance, "SSN", swiftcode, "accountNumber", "accountType") VALUES ('2023-12-30 23:32:34.728', 0, '975055166', 'YFTZZDI3OAB', 9, 'CURRENT');
INSERT INTO public."BankAccount" ("openingDate", balance, "SSN", swiftcode, "accountNumber", "accountType") VALUES ('2023-12-30 23:32:34.728', 4000, '906144384', 'AKQIDA9YUZL', 10, 'SAVINGS');
INSERT INTO public."BankAccount" ("openingDate", balance, "SSN", swiftcode, "accountNumber", "accountType") VALUES ('2023-12-30 23:32:34.728', 2000, '325476952', 'NAXWCPHKE3Q', 3, 'SAVINGS');
INSERT INTO public."BankAccount" ("openingDate", balance, "SSN", swiftcode, "accountNumber", "accountType") VALUES ('2023-12-30 23:32:34.728', 15000, '946085683', 'SQQDEJ3RXDO', 4, 'CURRENT');
INSERT INTO public."BankAccount" ("openingDate", balance, "SSN", swiftcode, "accountNumber", "accountType") VALUES ('2023-12-30 23:32:34.728', 2000, '948966589', 'SQQDEJ3RXDO', 5, 'CURRENT');
INSERT INTO public."BankAccount" ("openingDate", balance, "SSN", swiftcode, "accountNumber", "accountType") VALUES ('2023-12-30 23:32:34.728', 24000, '948966589', 'YFTZZDI3OAB', 6, 'SAVINGS');

--
-- TOC entry 3455 (class 0 OID 16728)
-- Dependencies: 229
-- Data for Name: ATM; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."ATM" ("atmId", latitude, longitude, "bankId") VALUES (1, 30.94441444094134, 26.0270233136464, '');
INSERT INTO public."ATM" ("atmId", latitude, longitude, "bankId") VALUES (3, 27.40752967056378, 29.71677141341944, '');
INSERT INTO public."ATM" ("atmId", latitude, longitude, "bankId") VALUES (4, 23.60738758885266, 25.72905193073249, '');
INSERT INTO public."ATM" ("atmId", latitude, longitude, "bankId") VALUES (2, 22.57334439970264, 30.93136450228213, '');
INSERT INTO public."ATM" ("atmId", latitude, longitude, "bankId") VALUES (5, 24.80057904193118, 27.16172672290164, '');
INSERT INTO public."ATM" ("atmId", latitude, longitude, "bankId") VALUES (7, 27.78851524561149, 28.23101580603353, '');
INSERT INTO public."ATM" ("atmId", latitude, longitude, "bankId") VALUES (6, 23.35477146615899, 31.81103145834266, '');
INSERT INTO public."ATM" ("atmId", latitude, longitude, "bankId") VALUES (8, 30.46208412870827, 29.18573062913811, '');
INSERT INTO public."ATM" ("atmId", latitude, longitude, "bankId") VALUES (9, 30.61510969345533, 33.38413230974297, '');
INSERT INTO public."ATM" ("atmId", latitude, longitude, "bankId") VALUES (10, 24.51484299961557, 27.09667505694397, '');
INSERT INTO public."ATM" ("atmId", latitude, longitude, "bankId") VALUES (11, 30.39615875840234, 25.94675257861808, '');
INSERT INTO public."ATM" ("atmId", latitude, longitude, "bankId") VALUES (12, 31.6085444626898, 30.47310333009692, '');
INSERT INTO public."ATM" ("atmId", latitude, longitude, "bankId") VALUES (13, 31.05026581175527, 28.35126853646209, '');
INSERT INTO public."ATM" ("atmId", latitude, longitude, "bankId") VALUES (14, 25.80323784438219, 25.77018591805813, '');
INSERT INTO public."ATM" ("atmId", latitude, longitude, "bankId") VALUES (15, 23.78443793946131, 32.52844432748307, '');
INSERT INTO public."ATM" ("atmId", latitude, longitude, "bankId") VALUES (16, 25.01212103984133, 28.01763560457604, '');
INSERT INTO public."ATM" ("atmId", latitude, longitude, "bankId") VALUES (17, 31.2502289513161, 25.57595838465307, '');
INSERT INTO public."ATM" ("atmId", latitude, longitude, "bankId") VALUES (18, 27.49057938184236, 31.2413955264965, '');
INSERT INTO public."ATM" ("atmId", latitude, longitude, "bankId") VALUES (19, 23.379369939104, 32.8139462886049, '');
INSERT INTO public."ATM" ("atmId", latitude, longitude, "bankId") VALUES (20, 23.04350066124042, 32.33786638459392, '');
INSERT INTO public."ATM" ("atmId", latitude, longitude, "bankId") VALUES (21, 5, 87, '');

--
-- TOC entry 3446 (class 0 OID 16600)
-- Dependencies: 220
-- Data for Name: Card; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Card" ("cardId", "cardNumber", cvv, "expiryDate", "accountNumber") VALUES (3, '0925 4803 1536 8407', '952', '2023-07-01 00:00:00', 1);
INSERT INTO public."Card" ("cardId", "cardNumber", cvv, "expiryDate", "accountNumber") VALUES (4, '0847 4597 7812 1767', '688', '2024-01-01 00:00:00', 7);
INSERT INTO public."Card" ("cardId", "cardNumber", cvv, "expiryDate", "accountNumber") VALUES (5, '1413 4974 4160 4899', '953', '2027-01-01 00:00:00', 3);
INSERT INTO public."Card" ("cardId", "cardNumber", cvv, "expiryDate", "accountNumber") VALUES (6, '1780 0685 6293 0845', '552', '2026-01-01 00:00:00', 1);
INSERT INTO public."Card" ("cardId", "cardNumber", cvv, "expiryDate", "accountNumber") VALUES (7, '7621 1767 4763 1581', '792', '2023-01-01 00:00:00', 7);
INSERT INTO public."Card" ("cardId", "cardNumber", cvv, "expiryDate", "accountNumber") VALUES (8, '4527 2959 2659 2656', '268', '2025-01-01 00:00:00', 9);

--
-- TOC entry 3448 (class 0 OID 16609)
-- Dependencies: 222
-- Data for Name: Loan; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Loan" ("loanId", amount, "interestRate", "startDate", "endDate", "accountNumber") VALUES (1, 1000, 12, '2023-01-01 00:00:00', '2023-02-01 00:00:00', 1);
INSERT INTO public."Loan" ("loanId", amount, "interestRate", "startDate", "endDate", "accountNumber") VALUES (2, 50000, 10, '2023-01-01 00:00:00', '2024-01-01 00:00:00', 4);
INSERT INTO public."Loan" ("loanId", amount, "interestRate", "startDate", "endDate", "accountNumber") VALUES (3, 40000, 15, '2023-05-01 00:00:00', '2024-04-01 00:00:00', 2);
INSERT INTO public."Loan" ("loanId", amount, "interestRate", "startDate", "endDate", "accountNumber") VALUES (4, 20000, 20, '2023-10-01 00:00:00', '2023-12-01 00:00:00', 4);
INSERT INTO public."Loan" ("loanId", amount, "interestRate", "startDate", "endDate", "accountNumber") VALUES (5, 100000, 10, '2023-04-01 00:00:00', '2023-11-01 00:00:00', 7);
INSERT INTO public."Loan" ("loanId", amount, "interestRate", "startDate", "endDate", "accountNumber") VALUES (6, 200000, 20, '2023-06-01 00:00:00', '2024-01-01 00:00:00', 3);


--
-- TOC entry 3453 (class 0 OID 16718)
-- Dependencies: 227
-- Data for Name: Notification; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Notification" ("notificationId", message, date, "SSN") VALUES (1, 'Account created successfully', '2023-12-30 23:48:09.404', '170363269');
INSERT INTO public."Notification" ("notificationId", message, date, "SSN") VALUES (2, 'New promotions', '2023-12-30 23:48:09.404', '325476952');
INSERT INTO public."Notification" ("notificationId", message, date, "SSN") VALUES (3, 'New promotions', '2023-12-30 23:48:09.404', '775613139');
INSERT INTO public."Notification" ("notificationId", message, date, "SSN") VALUES (4, 'Happy birthday', '2023-12-30 23:48:09.404', '906144384');
INSERT INTO public."Notification" ("notificationId", message, date, "SSN") VALUES (5, 'Happy new year', '2023-12-30 23:48:09.404', '946085683');
INSERT INTO public."Notification" ("notificationId", message, date, "SSN") VALUES (6, 'Update your data', '2023-12-30 23:48:09.404', '325476952');
INSERT INTO public."Notification" ("notificationId", message, date, "SSN") VALUES (7, 'Do not give your data to any one', '2023-12-30 23:48:09.404', '948966589');
INSERT INTO public."Notification" ("notificationId", message, date, "SSN") VALUES (8, 'Always remember your password and do not write it down', '2023-12-30 23:48:09.404', '975055166');
INSERT INTO public."Notification" ("notificationId", message, date, "SSN") VALUES (9, 'New promotions', '2023-12-30 23:48:09.404', '325476952');


--
-- TOC entry 3459 (class 0 OID 16746)
-- Dependencies: 233
-- Data for Name: Review; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Review" ("reviewId", rating, message) VALUES (1, 10, 'The system is very easy to use and great');
INSERT INTO public."Review" ("reviewId", rating, message) VALUES (2, 8, 'I like the design so much');
INSERT INTO public."Review" ("reviewId", rating, message) VALUES (3, 9, 'Very comfortable');
INSERT INTO public."Review" ("reviewId", rating, message) VALUES (4, 6, 'I like it but its sometimes slow');
INSERT INTO public."Review" ("reviewId", rating, message) VALUES (5, 5, 'Crashes too much');
INSERT INTO public."Review" ("reviewId", rating, message) VALUES (6, 7, 'Very nice!');
INSERT INTO public."Review" ("reviewId", rating, message) VALUES (7, 8, 'Great customer support!');
INSERT INTO public."Review" ("reviewId", rating, message) VALUES (8, 9, 'This bank rulesss');
INSERT INTO public."Review" ("reviewId", rating, message) VALUES (9, 10, 'I sure do hope its not a bank website for a project cuz that shit too real');


--
-- TOC entry 3450 (class 0 OID 16627)
-- Dependencies: 224
-- Data for Name: Transactions; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Transactions" ("transactionId", amount, date, "senderAccountNumber", "recipientAccountNumber", "createdAt", note) VALUES (1, 1000, '2023-12-30 23:42:12.93', 2, 2, '2023-12-30 23:42:12.93', '');
INSERT INTO public."Transactions" ("transactionId", amount, date, "senderAccountNumber", "recipientAccountNumber", "createdAt", note) VALUES (2, 10000, '2023-12-30 23:42:12.93', 2, 9, '2023-12-30 23:42:12.93', '');
INSERT INTO public."Transactions" ("transactionId", amount, date, "senderAccountNumber", "recipientAccountNumber", "createdAt", note) VALUES (3, 20000, '2023-12-30 23:42:12.93', 8, 2, '2023-12-30 23:42:12.93', '');
INSERT INTO public."Transactions" ("transactionId", amount, date, "senderAccountNumber", "recipientAccountNumber", "createdAt", note) VALUES (4, 50000, '2023-12-30 23:42:12.93', 8, 7, '2023-12-30 23:42:12.93', '');
INSERT INTO public."Transactions" ("transactionId", amount, date, "senderAccountNumber", "recipientAccountNumber", "createdAt", note) VALUES (5, 1000, '2023-12-30 23:44:47.23', 10, 7, '2023-12-30 23:44:47.23', '');
INSERT INTO public."Transactions" ("transactionId", amount, date, "senderAccountNumber", "recipientAccountNumber", "createdAt", note) VALUES (6, 1500, '2023-12-30 23:44:47.23', 6, 2, '2023-12-30 23:44:47.23', '');
INSERT INTO public."Transactions" ("transactionId", amount, date, "senderAccountNumber", "recipientAccountNumber", "createdAt", note) VALUES (7, 2000, '2023-12-30 23:44:47.23', 1, 5, '2023-12-30 23:44:47.23', '');
INSERT INTO public."Transactions" ("transactionId", amount, date, "senderAccountNumber", "recipientAccountNumber", "createdAt", note) VALUES (8, 2000, '2023-12-30 23:44:47.23', 6, 9, '2023-12-30 23:44:47.23', '');
INSERT INTO public."Transactions" ("transactionId", amount, date, "senderAccountNumber", "recipientAccountNumber", "createdAt", note) VALUES (9, 1400, '2023-12-30 23:44:47.23', 8, 3, '2023-12-30 23:44:47.23', '');
INSERT INTO public."Transactions" ("transactionId", amount, date, "senderAccountNumber", "recipientAccountNumber", "createdAt", note) VALUES (10, 500, '2023-12-30 23:44:47.23', 4, 1, '2023-12-30 23:44:47.23', '');
INSERT INTO public."Transactions" ("transactionId", amount, date, "senderAccountNumber", "recipientAccountNumber", "createdAt", note) VALUES (11, 600, '2023-12-30 23:44:47.23', 8, 9, '2023-12-30 23:44:47.23', '');
INSERT INTO public."Transactions" ("transactionId", amount, date, "senderAccountNumber", "recipientAccountNumber", "createdAt", note) VALUES (12, 950, '2023-12-30 23:44:47.23', 3, 4, '2023-12-30 23:44:47.23', '');


-- Cached Currency Data
INSERT INTO public."Currency" (name, symbol, exchange) VALUES
('Argentine Peso', 'ARS', 95.25),
('Australian Dollar', 'AUD', 1.3),
('Azerbaijani Manat', 'AZN', 1.7),
('Bangladeshi Taka', 'BDT', 84.95),
('Bulgarian Lev', 'BGN', 1.65),
('Brazilian Real', 'BRL', 5.25),
('Canadian Dollar', 'CAD', 1.25),
('Swiss Franc', 'CHF', 0.91),
('Chilean Peso', 'CLP', 779.5),
('Chinese Yuan', 'CNY', 6.45),
('Colombian Peso', 'COP', 3761),
('Czech Koruna', 'CZK', 21.87),
('Danish Krone', 'DKK', 6.12),
('Egyptian Pound', 'EGP', 15.67),
('Euro', 'EUR', 0.85),
('British Pound', 'GBP', 0.72),
('Hong Kong Dollar', 'HKD', 7.77),
('Croatian Kuna', 'HRK', 6.36),
('Hungarian Forint', 'HUF', 295.36),
('Indonesian Rupiah', 'IDR', 14255),
('Israeli New Shekel', 'ILS', 3.25),
('Indian Rupee', 'INR', 74.57),
('Icelandic Krona', 'ISK', 125),
('Japanese Yen', 'JPY', 110.47),
('Kenyan Shilling', 'KES', 109.2),
('South Korean Won', 'KRW', 1176.5),
('Kazakhstani Tenge', 'KZT', 425),
('Moroccan Dirham', 'MAD', 9),
('Macedonian Denar', 'MKD', 52),
('Mexican Peso', 'MXN', 20.23),
('Malaysian Ringgit', 'MYR', 4.15),
('Nigerian Naira', 'NGN', 411.5),
('Norwegian Krone', 'NOK', 8.7),
('New Zealand Dollar', 'NZD', 1.42),
('Peruvian Sol', 'PEN', 4.08),
('Philippine Peso', 'PHP', 50.35),
('Pakistani Rupee', 'PKR', 159.5),
('Polish Zloty', 'PLN', 3.9),
('Romanian Leu', 'RON', 4.18),
('Serbian Dinar', 'RSD', 99),
('Russian Ruble', 'RUB', 72.93),
('Saudi Riyal', 'SAR', 3.75),
('Swedish Krona', 'SEK', 8.58),
('Singapore Dollar', 'SGD', 1.34),
('Thai Baht', 'THB', 31.28),
('Turkish Lira', 'TRY', 8.63),
('Ukrainian Hryvnia', 'UAH', 27.8),
('US Dollar', 'USD', 1),
('Vietnamese Dong', 'VND', 23000),
('South African Rand', 'ZAR', 14.87);
