const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'your_username',
    password: '7501',
    database: 'admin',
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MariaDB:', err);
        return;
    }
    console.log('데이터베이스 연결 성공!');

    // 테이블 조회 쿼리
    const query = 'SELECT * FROM users';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error querying database:', err);
            return;
        }

        // 조회 결과 출력
        console.log('users 테이블의 데이터:');
        console.table(results);

        // 연결 종료
        connection.end();
    });
});
