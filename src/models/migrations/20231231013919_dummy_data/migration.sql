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

INSERT INTO public."User" ("SSN", "firstName", "lastName", email, password, address, "phoneNumber") VALUES ('946085683', 'Mohamed', 'Kareem', 'mohamed234@gmail.com', '$2b$10$YDRlT1aGO2TkFxPpS60e0edeftyB.RvoMXvFmUUY1zkrRyK8UlItK', 'El Nasr Rd., Aswan, 21532, Egypt', '01893161371');
INSERT INTO public."User" ("SSN", "firstName", "lastName", email, password, address, "phoneNumber") VALUES ('906144384', 'Sameh', 'El Alfy', 'alfy2345@gmail.com', '$2b$10$fHSzBP8eKeHWB9g2CEqCJ.lJ7W0NnCwhzil29uSlW0PUpLgpIf.A.', 'El Gomhoreya St., Cairo, 11511, Egypt', '01176823972');
INSERT INTO public."User" ("SSN", "firstName", "lastName", email, password, address, "phoneNumber") VALUES ('975055166', 'Mike', 'Kraven', 'kraven@gmail.com', '$2b$10$579zKzN.60e8iCwCwwUTmOmj9Hv6wJopermh6yHKOVldl6Xj5i9/6', 'Ahmed Orabi St., Mansoura, 12556, Egypt', '01215406554');
INSERT INTO public."User" ("SSN", "firstName", "lastName", email, password, address, "phoneNumber") VALUES ('170363269', 'Peter', 'Parker', 'parker@gmail.com', '$2b$10$0.sE/yijk9Dj93vL79ETCuC1eOLYiPy3B/K6satTrcfdjUici/LMW', 'El Bahr El Aazam St., Giza, 35516, Egypt', '01308462043');
INSERT INTO public."User" ("SSN", "firstName", "lastName", email, password, address, "phoneNumber") VALUES ('325476952', 'Mary', 'Jane', 'jane2453@gmail.com', '$2b$10$eJu9FO/N6b4qyaARlWJUd.twq1xhDJXUrBO4o2N1SRV9X3OUiP2uS', 'El Nasr Rd., Aswan, 21532, Egypt', '01711907875');
INSERT INTO public."User" ("SSN", "firstName", "lastName", email, password, address, "phoneNumber") VALUES ('775613139', 'Ahmad', 'Lasheen', 'lasheen@gmail.com', '$2b$10$8CsTtQrs5/20P9VOaNXOPuGE659DazYxHVWJuqYDtU1uvds1ARw.u', 'Ahmed Orabi St., Giza, 12556, Egypt', '01978757940');
INSERT INTO public."User" ("SSN", "firstName", "lastName", email, password, address, "phoneNumber") VALUES ('948966589', 'Norman', 'Osborne', 'norman8@gmail.com', '$2b$10$eoxGxdTXODkies/MlEe8nOg84joGE8OiA0kOj0TbUJkGzISgZD3De', 'El Nasr Rd., Aswan, 21532, Egypt', '1711907875');

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

INSERT INTO public."BankAccount" ("openingDate", balance, "SSN", swiftcode, "accountType") VALUES ('2023-12-30 23:24:50.799', 1000, '170363269', 'AKQIDA9YUZL', 'SAVINGS');
INSERT INTO public."BankAccount" ("openingDate", balance, "SSN", swiftcode, "accountType") VALUES ('2023-12-30 23:32:34.728', 10000, '325476952', 'CBTIDBN0I6F', 'CURRENT');
INSERT INTO public."BankAccount" ("openingDate", balance, "SSN", swiftcode, "accountType") VALUES ('2023-12-30 23:32:34.728', 0, '948966589', 'CBTIDBN0I6F', 'SAVINGS');
INSERT INTO public."BankAccount" ("openingDate", balance, "SSN", swiftcode, "accountType") VALUES ('2023-12-30 23:32:34.728', 100000, '775613139', 'SQQDEJ3RXDO', 'SAVINGS');
INSERT INTO public."BankAccount" ("openingDate", balance, "SSN", swiftcode, "accountType") VALUES ('2023-12-30 23:32:34.728', 0, '975055166', 'YFTZZDI3OAB', 'CURRENT');
INSERT INTO public."BankAccount" ("openingDate", balance, "SSN", swiftcode, "accountType") VALUES ('2023-12-30 23:32:34.728', 4000, '906144384', 'AKQIDA9YUZL', 'SAVINGS');
INSERT INTO public."BankAccount" ("openingDate", balance, "SSN", swiftcode, "accountType") VALUES ('2023-12-30 23:32:34.728', 2000, '325476952', 'NAXWCPHKE3Q', 'SAVINGS');
INSERT INTO public."BankAccount" ("openingDate", balance, "SSN", swiftcode, "accountType") VALUES ('2023-12-30 23:32:34.728', 15000, '946085683', 'SQQDEJ3RXDO', 'CURRENT');
INSERT INTO public."BankAccount" ("openingDate", balance, "SSN", swiftcode, "accountType") VALUES ('2023-12-30 23:32:34.728', 4875, '948966589', 'SQQDEJ3RXDO', 'CURRENT');
INSERT INTO public."BankAccount" ("openingDate", balance, "SSN", swiftcode, "accountType") VALUES ('2023-12-30 23:32:34.728', 21125, '948966589', 'YFTZZDI3OAB', 'SAVINGS');

--
-- TOC entry 3455 (class 0 OID 16728)
-- Dependencies: 229
-- Data for Name: ATM; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."ATM" (latitude, longitude, "bankId") VALUES (30.94441444094134, 26.0270233136464, '');
INSERT INTO public."ATM" (latitude, longitude, "bankId") VALUES (27.40752967056378, 29.71677141341944, '');
INSERT INTO public."ATM" (latitude, longitude, "bankId") VALUES (23.60738758885266, 25.72905193073249, '');
INSERT INTO public."ATM" (latitude, longitude, "bankId") VALUES (22.57334439970264, 30.93136450228213, '');
INSERT INTO public."ATM" (latitude, longitude, "bankId") VALUES (24.80057904193118, 27.16172672290164, '');
INSERT INTO public."ATM" (latitude, longitude, "bankId") VALUES (27.78851524561149, 28.23101580603353, '');
INSERT INTO public."ATM" (latitude, longitude, "bankId") VALUES (23.35477146615899, 31.81103145834266, '');
INSERT INTO public."ATM" (latitude, longitude, "bankId") VALUES (30.46208412870827, 29.18573062913811, '');
INSERT INTO public."ATM" (latitude, longitude, "bankId") VALUES (30.61510969345533, 33.38413230974297, '');
INSERT INTO public."ATM" (latitude, longitude, "bankId") VALUES (24.51484299961557, 27.09667505694397, '');
INSERT INTO public."ATM" (latitude, longitude, "bankId") VALUES (30.39615875840234, 25.94675257861808, '');
INSERT INTO public."ATM" (latitude, longitude, "bankId") VALUES (31.6085444626898, 30.47310333009692, '');
INSERT INTO public."ATM" (latitude, longitude, "bankId") VALUES (31.05026581175527, 28.35126853646209, '');
INSERT INTO public."ATM" (latitude, longitude, "bankId") VALUES (25.80323784438219, 25.77018591805813, '');
INSERT INTO public."ATM" (latitude, longitude, "bankId") VALUES (23.78443793946131, 32.52844432748307, '');
INSERT INTO public."ATM" (latitude, longitude, "bankId") VALUES (25.01212103984133, 28.01763560457604, '');
INSERT INTO public."ATM" (latitude, longitude, "bankId") VALUES (31.2502289513161, 25.57595838465307, '');
INSERT INTO public."ATM" (latitude, longitude, "bankId") VALUES (27.49057938184236, 31.2413955264965, '');
INSERT INTO public."ATM" (latitude, longitude, "bankId") VALUES (23.379369939104, 32.8139462886049, '');
INSERT INTO public."ATM" (latitude, longitude, "bankId") VALUES (23.04350066124042, 32.33786638459392, '');

--
-- TOC entry 3446 (class 0 OID 16600)
-- Dependencies: 220
-- Data for Name: Card; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Card" ("cardNumber", cvv, "expiryDate", "accountNumber") VALUES ('0925480315368407', '952', '2023-07-01 00:00:00', 1);
INSERT INTO public."Card" ("cardNumber", cvv, "expiryDate", "accountNumber") VALUES ('0847459778121767', '688', '2024-01-01 00:00:00', 7);
INSERT INTO public."Card" ("cardNumber", cvv, "expiryDate", "accountNumber") VALUES ('1413497441604899', '953', '2027-01-01 00:00:00', 3);
INSERT INTO public."Card" ("cardNumber", cvv, "expiryDate", "accountNumber") VALUES ('1780068562930845', '552', '2026-01-01 00:00:00', 1);
INSERT INTO public."Card" ("cardNumber", cvv, "expiryDate", "accountNumber") VALUES ('7621176747631581', '792', '2023-01-01 00:00:00', 7);
INSERT INTO public."Card" ("cardNumber", cvv, "expiryDate", "accountNumber") VALUES ('4527295926592656', '268', '2025-01-01 00:00:00', 9);
INSERT INTO public."Card" ("cardNumber", cvv, "expiryDate", "accountNumber") VALUES ('5707237391589401', '376', '2028-12-31 10:42:43.1', 5);
INSERT INTO public."Card" ("cardNumber", cvv, "expiryDate", "accountNumber") VALUES ('6291944380750697', '439', '2028-12-31 10:44:04.041', 7);
INSERT INTO public."Card" ("cardNumber", cvv, "expiryDate", "accountNumber") VALUES ('4067514211071177', '411', '2028-12-31 10:45:07.161', 7);
INSERT INTO public."Card" ("cardNumber", cvv, "expiryDate", "accountNumber") VALUES ('6679032422816849', '801', '2028-12-31 10:49:05.627', 5);

--
-- TOC entry 3448 (class 0 OID 16609)
-- Dependencies: 222
-- Data for Name: Loan; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Loan" (amount, "interestRate", "startDate", "endDate", "accountNumber") VALUES (1000, 12, '2023-01-01 00:00:00', '2023-02-01 00:00:00', 1);
INSERT INTO public."Loan" (amount, "interestRate", "startDate", "endDate", "accountNumber") VALUES (50000, 10, '2023-01-01 00:00:00', '2024-01-01 00:00:00', 4);
INSERT INTO public."Loan" (amount, "interestRate", "startDate", "endDate", "accountNumber") VALUES (40000, 15, '2023-05-01 00:00:00', '2024-04-01 00:00:00', 2);
INSERT INTO public."Loan" (amount, "interestRate", "startDate", "endDate", "accountNumber") VALUES (20000, 20, '2023-10-01 00:00:00', '2023-12-01 00:00:00', 4);
INSERT INTO public."Loan" (amount, "interestRate", "startDate", "endDate", "accountNumber") VALUES (100000, 10, '2023-04-01 00:00:00', '2023-11-01 00:00:00', 7);
INSERT INTO public."Loan" (amount, "interestRate", "startDate", "endDate", "accountNumber") VALUES (200000, 20, '2023-06-01 00:00:00', '2024-01-01 00:00:00', 3);
INSERT INTO public."Loan" (amount, "interestRate", "startDate", "endDate", "accountNumber") VALUES (13213, 5, '2024-01-04 00:00:00', '2065-10-31 00:00:00', 7);
INSERT INTO public."Loan" (amount, "interestRate", "startDate", "endDate", "accountNumber") VALUES (3213213, 30, '2024-01-01 00:00:00', '2024-01-01 00:00:00', 7);
INSERT INTO public."Loan" (amount, "interestRate", "startDate", "endDate", "accountNumber") VALUES (434234, 26.00547945205479, '2024-01-03 00:00:00', '2027-12-31 00:00:00', 7);


--
-- TOC entry 3453 (class 0 OID 16718)
-- Dependencies: 227
-- Data for Name: Notification; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Notification" (message, date, "SSN") VALUES ('Account created successfully', '2023-12-30 23:48:09.404', '170363269');
INSERT INTO public."Notification" (message, date, "SSN") VALUES ('New promotions', '2023-12-30 23:48:09.404', '325476952');
INSERT INTO public."Notification" (message, date, "SSN") VALUES ('New promotions', '2023-12-30 23:48:09.404', '775613139');
INSERT INTO public."Notification" (message, date, "SSN") VALUES ('Happy birthday', '2023-12-30 23:48:09.404', '906144384');
INSERT INTO public."Notification" (message, date, "SSN") VALUES ('Happy new year', '2023-12-30 23:48:09.404', '946085683');
INSERT INTO public."Notification" (message, date, "SSN") VALUES ('Update your data', '2023-12-30 23:48:09.404', '325476952');
INSERT INTO public."Notification" (message, date, "SSN") VALUES ('Do not give your data to any one', '2023-12-30 23:48:09.404', '948966589');
INSERT INTO public."Notification" (message, date, "SSN") VALUES ('Always remember your password and do not write it down', '2023-12-30 23:48:09.404', '975055166');
INSERT INTO public."Notification" (message, date, "SSN") VALUES ('New promotions', '2023-12-30 23:48:09.404', '325476952');
INSERT INTO public."Notification" (message, date, "SSN") VALUES ('You will receive 3123 from 6 on undefined', '2023-12-31 09:06:40.185', '948966589');
INSERT INTO public."Notification" (message, date, "SSN") VALUES ('You will receive 3123 from 6 on undefined', '2023-12-31 09:07:00.778', '948966589');
INSERT INTO public."Notification" (message, date, "SSN") VALUES ('You will receive 543 from 6 on 2024-01-06', '2023-12-31 09:09:28', '948966589');
INSERT INTO public."Notification" (message, date, "SSN") VALUES ('You will receive 543 from 6 on 2024-01-06', '2023-12-31 09:10:16.214', '948966589');
INSERT INTO public."Notification" (message, date, "SSN") VALUES ('You will receive 543 from 6 on 2024-01-06', '2023-12-31 09:10:42.212', '948966589');
INSERT INTO public."Notification" (message, date, "SSN") VALUES ('You will receive 5000 from 5 on 2024-01-05', '2023-12-31 09:12:36.193', '948966589');


--
-- TOC entry 3459 (class 0 OID 16746)
-- Dependencies: 233
-- Data for Name: Review; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Review" (rating, message) VALUES (5, 'The system is very easy to use and great');
INSERT INTO public."Review" (rating, message) VALUES (4, 'I like the design so much');
INSERT INTO public."Review" (rating, message) VALUES (4, 'Very comfortable');
INSERT INTO public."Review" (rating, message) VALUES (3, 'I like it but its sometimes slow');
INSERT INTO public."Review" (rating, message) VALUES (2, 'Crashes too much');
INSERT INTO public."Review" (rating, message) VALUES (3, 'Very nice!');
INSERT INTO public."Review" (rating, message) VALUES (4, 'Great customer support!');
INSERT INTO public."Review" (rating, message) VALUES (4, 'This bank rulesss');
INSERT INTO public."Review" (rating, message) VALUES (5, 'I sure do hope its not a bank website for a project cuz that shit too real');


--
-- TOC entry 3450 (class 0 OID 16627)
-- Dependencies: 224
-- Data for Name: Transactions; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Transactions" (amount, date, "senderAccountNumber", "recipientAccountNumber", "createdAt", note) VALUES (1000, '2024-01-10 23:42:12.93', 2, 2, '2023-12-30 23:42:12.93', 'Living Expenses');
INSERT INTO public."Transactions" (amount, date, "senderAccountNumber", "recipientAccountNumber", "createdAt", note) VALUES (10000, '2024-01-10 23:42:12.93', 2, 9, '2023-12-30 23:42:12.93', 'Living Expenses');
INSERT INTO public."Transactions" (amount, date, "senderAccountNumber", "recipientAccountNumber", "createdAt", note) VALUES (20000, '2024-01-10 23:42:12.93', 8, 2, '2023-12-30 23:42:12.93', 'Living Expenses');
INSERT INTO public."Transactions" (amount, date, "senderAccountNumber", "recipientAccountNumber", "createdAt", note) VALUES (50000, '2023-12-21 23:42:12.93', 8, 7, '2023-12-15 23:44:47.23', 'Living Expenses');
INSERT INTO public."Transactions" (amount, date, "senderAccountNumber", "recipientAccountNumber", "createdAt", note) VALUES (1000, '2024-01-10 23:42:12.93', 10, 7, '2023-12-30 23:44:47.23', 'Living Expenses');
INSERT INTO public."Transactions" (amount, date, "senderAccountNumber", "recipientAccountNumber", "createdAt", note) VALUES (1500, '2024-01-10 23:42:12.93', 6, 2, '2023-12-30 23:44:47.23', 'Living Expenses');
INSERT INTO public."Transactions" (amount, date, "senderAccountNumber", "recipientAccountNumber", "createdAt", note) VALUES (2000, '2024-01-10 23:42:12.93', 1, 5, '2023-12-30 23:44:47.23', 'Living Expenses');
INSERT INTO public."Transactions" (amount, date, "senderAccountNumber", "recipientAccountNumber", "createdAt", note) VALUES (2000, '2023-12-21 23:42:12.93', 6, 9, '2023-12-15 23:44:47.23', 'Living Expenses');
INSERT INTO public."Transactions" (amount, date, "senderAccountNumber", "recipientAccountNumber", "createdAt", note) VALUES (1400, '2024-01-10 23:42:12.93', 8, 3, '2023-12-30 23:44:47.23', 'Living Expenses');
INSERT INTO public."Transactions" (amount, date, "senderAccountNumber", "recipientAccountNumber", "createdAt", note) VALUES (500, '2024-01-10 23:42:12.93', 4, 1, '2023-12-30 23:44:47.23', 'Living Expenses');
INSERT INTO public."Transactions" (amount, date, "senderAccountNumber", "recipientAccountNumber", "createdAt", note) VALUES (600, '2024-01-10 23:42:12.93', 8, 9, '2023-12-30 23:44:47.23', 'Living Expenses');
INSERT INTO public."Transactions" (amount, date, "senderAccountNumber", "recipientAccountNumber", "createdAt", note) VALUES (950, '2023-12-30 23:44:47.23', 3, 4, '2023-12-30 23:44:47.23', 'Living Expenses');
INSERT INTO public."Transactions" (amount, date, "senderAccountNumber", "recipientAccountNumber", "createdAt", note) VALUES (3123, '2023-12-31 09:06:40.182', 6, 5, '2023-12-31 09:06:40.185', 'dfds');
INSERT INTO public."Transactions" (amount, date, "senderAccountNumber", "recipientAccountNumber", "createdAt", note) VALUES (3123, '2023-12-31 09:07:00.776', 6, 5, '2023-12-31 09:07:00.778', 'dfds');
INSERT INTO public."Transactions" (amount, date, "senderAccountNumber", "recipientAccountNumber", "createdAt", note) VALUES (543, '2024-01-06 00:00:00', 6, 5, '2023-12-31 09:09:28', 'rewrewr');
INSERT INTO public."Transactions" (amount, date, "senderAccountNumber", "recipientAccountNumber", "createdAt", note) VALUES (543, '2024-01-06 00:00:00', 6, 5, '2023-12-31 09:10:16.214', 'rewrewr');
INSERT INTO public."Transactions" (amount, date, "senderAccountNumber", "recipientAccountNumber", "createdAt", note) VALUES (543, '2024-01-06 00:00:00', 6, 5, '2023-12-31 09:10:42.212', 'rewrewr');
INSERT INTO public."Transactions" (amount, date, "senderAccountNumber", "recipientAccountNumber", "createdAt", note) VALUES (5000, '2024-01-05 00:00:00', 5, 6, '2023-12-31 09:12:36.193', 'rwerwerewr');

-- Cached Currency Data
INSERT INTO public."Currency" (name, symbol, exchange) VALUES ('Argentine Peso', 'ARS', 95.25);
INSERT INTO public."Currency" (name, symbol, exchange) VALUES ('Australian Dollar', 'AUD', 1.3);
INSERT INTO public."Currency" (name, symbol, exchange) VALUES ('Azerbaijani Manat', 'AZN', 1.7);
INSERT INTO public."Currency" (name, symbol, exchange) VALUES ('Bangladeshi Taka', 'BDT', 84.95);
INSERT INTO public."Currency" (name, symbol, exchange) VALUES ('Bulgarian Lev', 'BGN', 1.65);
INSERT INTO public."Currency" (name, symbol, exchange) VALUES ('Brazilian Real', 'BRL', 5.25);
INSERT INTO public."Currency" (name, symbol, exchange) VALUES ('Canadian Dollar', 'CAD', 1.25);
INSERT INTO public."Currency" (name, symbol, exchange) VALUES ('Swiss Franc', 'CHF', 0.91);
INSERT INTO public."Currency" (name, symbol, exchange) VALUES ('Chilean Peso', 'CLP', 779.5);
INSERT INTO public."Currency" (name, symbol, exchange) VALUES ('Chinese Yuan', 'CNY', 6.45);
INSERT INTO public."Currency" (name, symbol, exchange) VALUES ('Colombian Peso', 'COP', 3761);
INSERT INTO public."Currency" (name, symbol, exchange) VALUES ('Czech Koruna', 'CZK', 21.87);
INSERT INTO public."Currency" (name, symbol, exchange) VALUES ('Danish Krone', 'DKK', 6.12);
INSERT INTO public."Currency" (name, symbol, exchange) VALUES ('Egyptian Pound', 'EGP', 15.67);
INSERT INTO public."Currency" (name, symbol, exchange) VALUES ('Euro', 'EUR', 0.85);
INSERT INTO public."Currency" (name, symbol, exchange) VALUES ('British Pound', 'GBP', 0.72);
INSERT INTO public."Currency" (name, symbol, exchange) VALUES ('Hong Kong Dollar', 'HKD', 7.77);
INSERT INTO public."Currency" (name, symbol, exchange) VALUES ('Croatian Kuna', 'HRK', 6.36);
INSERT INTO public."Currency" (name, symbol, exchange) VALUES ('Hungarian Forint', 'HUF', 295.36);
INSERT INTO public."Currency" (name, symbol, exchange) VALUES ('Indonesian Rupiah', 'IDR', 14255);
INSERT INTO public."Currency" (name, symbol, exchange) VALUES ('Israeli New Shekel', 'ILS', 3.25);
INSERT INTO public."Currency" (name, symbol, exchange) VALUES ('Indian Rupee', 'INR', 74.57);
INSERT INTO public."Currency" (name, symbol, exchange) VALUES ('Icelandic Krona', 'ISK', 125);
INSERT INTO public."Currency" (name, symbol, exchange) VALUES ('Japanese Yen', 'JPY', 110.47);
INSERT INTO public."Currency" (name, symbol, exchange) VALUES ('Kenyan Shilling', 'KES', 109.2);
INSERT INTO public."Currency" (name, symbol, exchange) VALUES ('South Korean Won', 'KRW', 1176.5);
INSERT INTO public."Currency" (name, symbol, exchange) VALUES ('Kazakhstani Tenge', 'KZT', 425);
INSERT INTO public."Currency" (name, symbol, exchange) VALUES ('Moroccan Dirham', 'MAD', 9);
INSERT INTO public."Currency" (name, symbol, exchange) VALUES ('Macedonian Denar', 'MKD', 52);
INSERT INTO public."Currency" (name, symbol, exchange) VALUES ('Mexican Peso', 'MXN', 20.23);
INSERT INTO public."Currency" (name, symbol, exchange) VALUES ('Malaysian Ringgit', 'MYR', 4.15);
INSERT INTO public."Currency" (name, symbol, exchange) VALUES ('Nigerian Naira', 'NGN', 411.5);
INSERT INTO public."Currency" (name, symbol, exchange) VALUES ('Norwegian Krone', 'NOK', 8.7);
INSERT INTO public."Currency" (name, symbol, exchange) VALUES ('New Zealand Dollar', 'NZD', 1.42);
INSERT INTO public."Currency" (name, symbol, exchange) VALUES ('Peruvian Sol', 'PEN', 4.08);
INSERT INTO public."Currency" (name, symbol, exchange) VALUES ('Philippine Peso', 'PHP', 50.35);
INSERT INTO public."Currency" (name, symbol, exchange) VALUES ('Pakistani Rupee', 'PKR', 159.5);
INSERT INTO public."Currency" (name, symbol, exchange) VALUES ('Polish Zloty', 'PLN', 3.9);
INSERT INTO public."Currency" (name, symbol, exchange) VALUES ('Romanian Leu', 'RON', 4.18);
INSERT INTO public."Currency" (name, symbol, exchange) VALUES ('Serbian Dinar', 'RSD', 99);
INSERT INTO public."Currency" (name, symbol, exchange) VALUES ('Russian Ruble', 'RUB', 72.93);
INSERT INTO public."Currency" (name, symbol, exchange) VALUES ('Saudi Riyal', 'SAR', 3.75);
INSERT INTO public."Currency" (name, symbol, exchange) VALUES ('Swedish Krona', 'SEK', 8.58);
INSERT INTO public."Currency" (name, symbol, exchange) VALUES ('Singapore Dollar', 'SGD', 1.34);
INSERT INTO public."Currency" (name, symbol, exchange) VALUES ('Thai Baht', 'THB', 31.28);
INSERT INTO public."Currency" (name, symbol, exchange) VALUES ('Turkish Lira', 'TRY', 8.63);
INSERT INTO public."Currency" (name, symbol, exchange) VALUES ('Ukrainian Hryvnia', 'UAH', 27.8);
INSERT INTO public."Currency" (name, symbol, exchange) VALUES ('US Dollar', 'USD', 1);
INSERT INTO public."Currency" (name, symbol, exchange) VALUES ('Vietnamese Dong', 'VND', 23000);
INSERT INTO public."Currency" (name, symbol, exchange) VALUES ('South African Rand', 'ZAR', 14.87);
