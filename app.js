const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '7501',
    database: process.env.DB_NAME || 'admin',
});

// 프로미스를 사용한 연결
const connectPromise = new Promise((resolve, reject) => {
    connection.connect((err) => {
        if (err) {
            reject(err);
        } else {
            resolve();
        }
    });
});

// 연결 후에 실행할 프로미스 체인
connectPromise
    .then(() => {
        console.log('데이터베이스 연결 성공!');
        // 테이블 조회 쿼리
        const query = 'SELECT * FROM users';
        return queryPromise(query);  // 쿼리 실행 프로미스 체인 호출
    })
    .then((results) => {
        console.log('users 테이블의 데이터:');
        console.table(results);
    })
    .catch(handleError)  // 에러 핸들링

    // 연결 종료
    .finally(() => connection.end());

// 쿼리 실행을 프로미스로 래핑
function queryPromise(query) {
    return new Promise((resolve, reject) => {
        connection.query(query, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}

// 에러 핸들링 함수 정의
function handleError(err) {
    console.error('Error:', err.message);
}
