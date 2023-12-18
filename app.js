// mysql2 패키지를 불러옴
const mysql = require('mysql2');

// MariaDB 연결 설정 객체 생성
const connection = mysql.createConnection({
    // MariaDB 서버의 호스트 주소 (보통 localhost 또는 127.0.0.1)
    host: 'localhost',
    // MariaDB에 접속할 사용자 이름
    user: 'your_username', // 여기서 'your_username'을 실제 MariaDB 사용자 이름으로 변경
    // MariaDB에 접속할 사용자 비밀번호
    password: '7501', // 여기서 '7501'을 실제 MariaDB 사용자 비밀번호로 변경
    // 사용할 데이터베이스 이름
    database: 'your_database', // 여기서 'your_database'를 실제 사용할 데이터베이스 이름으로 변경
});

// 연결 테스트
connection.connect((err) => {
    // 연결 중 에러가 발생한 경우
    if (err) {
        console.error('Error connecting to MariaDB:', err);
        return;
    }
    // 연결이 성공하면 콘솔에 메시지 출력
    console.log('데이터베이스 연결 성공!');
});

// 연결 종료
connection.end();
