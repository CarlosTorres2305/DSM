--1
select unidade as "Fatec", count(curso) as "Quantidade"
from tbcurso
group by unidade
order by unidade;

--2
select unidade as "Fatec", count(curso) as "Quantidade"
from tbcurso
group by unidade
order by unidade desc;

--3
SELECT unidade as Fatec, COUNT(curso) AS Quantidade
FROM tbcurso
GROUP BY unidade
ORDER BY Quantidade DESC
LIMIT 1;

--4
SELECT unidade as Fatec, COUNT(curso) AS Quantidade
FROM tbcurso
GROUP BY unidade
ORDER BY Quantidade DESC
LIMIT 1 OFFSET 1;

--5
SELECT unidade as Fatec, COUNT(curso) AS Quantidade
FROM tbcurso
GROUP BY unidade
HAVING COUNT(curso) = 3;

--6
SELECT unidade AS Fatec, turno, COUNT(curso) AS Quantidade
FROM tbcurso
GROUP BY Fatec, turno
ORDER BY Fatec, turno;

--7
SELECT unidade AS Fatec, turno, COUNT(curso) AS Quantidade
FROM tbcurso
GROUP BY Fatec, turno
HAVING COUNT(curso) = 5;

--8
SELECT unidade AS Fatec, turno, COUNT(curso) AS Quantidade
FROM tbcurso
WHERE municipio LIKE '%São José dos Campos%'
GROUP BY Fatec, turno;

--9
SELECT unidade AS Fatec, turno, SUM(vaga) AS Quantidade
FROM tbcurso
WHERE municipio LIKE '%São José dos Campos%'
GROUP BY Fatec, turno, vaga;

--10
SELECT turno, SUM(vaga) AS Quantidade
FROM tbcurso
GROUP BY turno;






