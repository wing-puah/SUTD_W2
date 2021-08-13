/**
return the top ten jobs by rounded average salary.
Rename the columns ‘job’ and ‘avg_salary’.
**/ 
SELECT job, ROUND(AVG(salary)) AS avg_salary
FROM payroll 
GROUP BY job
ORDER BY AVG(salary)  
DESC LIMIT 10;

/**
return the number of users having an email ending
by ‘.net’.
**/ 
SELECT COUNT(userid), name 
FROM payroll
WHERE email like '%.net';

/**
return the number of users who do not have a
registered car.
**/ 
SELECT COUNT(p.userid) 
FROM payroll p LEFT JOIN regist r
ON p.userid = r.userid 
WHERE r.userid IS NULL;

/**
return the users “not having an email” or “having a
car and a salary greater than 13000”.
**/
SELECT * FROM payroll p LEFT JOIN regist r 
ON p.userid = r.userid 
WHERE p.email IS NULL OR 
r.userid IS NOT NULL and p.salary > 13000;

/**
returns topic discussed by Alice and Bob but not by Chuck 
**/
SELECT d.topic FROM discussion d 
WHERE 
    d.user1 = 'Alice' AND d.user2 = 'Bob' OR 
    d.user1 = 'BOB' AND d.user2 = 'Alice' 
EXCEPT  
    (SELECT e.topic FROM discussion e WHERE 
        e.user1 ='Alice' AND e.user2 = 'Chuck' OR 
        e.user1 ='Chuck' AND e.user2 = 'Alice'
    );

/**
Returns number of topics  discussed by more than 10 pair of users 
**/ 
SELECT COUNT(id), topic AS topic_count 
FROM discussion GROUP BY topic 
HAVING COUNT(id) > 10;