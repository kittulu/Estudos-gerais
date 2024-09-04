----TABELA PESSOA----
CREATE TABLE PESSOA (
id SERIAL PRIMARY KEY,
nome VARCHAR(300)  NOT NULL,
idade INT, 
email VARCHAR(100)
);
select * from venda;
select * from pessoa;
INSERT INTO PESSOA(Nome, idade, email) values
('Itamar', 27, 'batata@gmail.com'),
('Poliana', 19, 'pol@outlook.com'),
('Andre', 21, 'arroz@gmail.com'),
('Miqueias', 23, 'feijao@gmail.com'),
('Will', 20, 'morango@gmail.com')
----TABELA VENDA-----
CREATE TABLE VENDA (
id SERIAL PRIMARY KEY,
data DATE NOT NULL,
quantidade DECIMAL(10,4) NOT NULL,
valor DECIMAL(10,4) NOT NULL,
cliente_id INT REFERENCES pessoa (id),
vendedor_id INT REFERENCES pessoa (id)
);


----
INSERT INTO VENDA (data, quantidade, valor, cliente_id, vendedor_id) values
(current_date, generate_series(1, 10000), 250.80, 1, 5),
(current_date, 100, 250.80, 2, 5),
(current_date, 100, 250.80, 3, 5),
(current_date, 100, 250.80, 4, 5),
(current_date, 100, 250.80, 1, 5),
(current_date, 100, 250.80, 1, 5),
(current_date, 100, 250.80, 2, 5),
(current_date, 100, 250.80, 1, 5),
(current_date, 100, 250.80, 1, 5),
(current_date, 100, 250.80, 4, 5),
(current_date, 100, 250.80, 1, 5),
(current_date, 100, 250.80, 1, 3),
(current_date, 100, 250.80, 1, 5),
(current_date, 100, 250.80, 5, 2),
(current_date, 100, 250.80, 1, 5),
(current_date, 100, 250.80, 1, 5),
(current_date, 100, 250.80, 1, 5),
(current_date, 100, 250.80, 1, 5),
(current_date, 100, 250.80, 1, 5),
(current_date, 100, 250.80, 1, 5),
(current_date, 100, 250.80, 1, 5),
(current_date, 100, 250.80, 1, 5),
(current_date, 100, 250.80, 1, 5),
(current_date, 100, 250.80, 1, 5),
(current_date, 100, 250.80, 1, 5),
(current_date, 100, 250.80, 1, 5),
(current_date, 100, 250.80, 1, 5),
(current_date, 100, 250.80, 1, 5);
