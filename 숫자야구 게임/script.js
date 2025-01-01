//1. 게임 초기화
//a. 시도 가능 횟수를 설정합니다. 입력한 숫자를 확인할 때마다 1씩 감소합니다.
//b. 중복되지 않는 3개의 랜덤한 숫자를 설정합니다.
//c. html의 input과 결과창의 내용을 비웁니다.


let attempts = 9;
let randomNumbers = [];

function initializeGame() {
    attempts = 9;
    document.getElementById('attempts').textContent = attempts;

    randomNumbers = [];
    while(randomNumbers.length < 3) {
        const num = Math.floor(Math.random() * 10);
        if(!randomNumbers.includes(num)) {
            randomNumbers.push(num);
        }
    }
    
    document.getElementById('number1').value = '';
    document.getElementById('number2').value = '';
    document.getElementById('number3').value = '';
    document.getElementById('results').innerHTML = '';
    document.getElementById('game-result-img').src = '';
    document.querySelector('.submit-button').disabled = false;
}

function check_numbers() {
    if(attempts <= 0) {
        alert("게임 종료! 다시 시작하려면 초기화하세요.");
        return;
    }

    const inputNumbers = [
        parseInt(document.getElementById('number1').value),
        parseInt(document.getElementById('number2').value),
        parseInt(document.getElementById('number3').value)
    ];

    //입력 안된 값 처리
    if(inputNumbers.some(isNaN)) {
        alert("모든 입력 칸에 숫자를 입력하세요!");
        document.getElementById('number1').value = '';
        document.getElementById('number2').value = '';
        document.getElementById('number3').value = '';
        return;
    }

    attempts--;
    document.getElementById('attempts').textContent = attempts;

    let strikes = 0;
    let balls = 0;
    const checkedIndexes = new Set(); // 이미 처리한 위치를 저장

    inputNumbers.forEach((num, index) => {
        if (randomNumbers.includes(num)) {
            // 스트라이크로 처리된 인덱스 기록
            if (randomNumbers.indexOf(num) === index) {
                strikes++;
                checkedIndexes.add(index); 
            } else if (!checkedIndexes.has(randomNumbers.indexOf(num))) {
                balls++;
                checkedIndexes.add(randomNumbers.indexOf(num)); // 볼로 처리된 인덱스 기록
            }
        }
    });
    

    //결과 출력하기
    const resultHTMLString = (strikes === 0 && balls === 0)
        ? "<span class=\"num-result out\">O</span>" // 아웃 처리
        : `${strikes} <span class=\"num-result strike\">S</span> ${balls} <span class=\"num-result ball\">B</span>`; // 스트라이크/볼 결과

    // 입력한 숫자 표시
    const num_result = document.createElement("span");
    num_result.className = "num-result";
    num_result.innerText = `${inputNumbers[0]} ${inputNumbers[1]} ${inputNumbers[2]}`;

    // ":" 구분자
    const result_divider = document.createElement("span");
    result_divider.innerText = "  :  ";

    // 결과 표시
    const check_result = document.createElement("span");
    check_result.className = "num-result";
    check_result.innerHTML = resultHTMLString;

    // 결과 컨테이너에 추가
    const resultContainer = document.createElement("div");
    resultContainer.className = "check-result";
    resultContainer.appendChild(num_result);
    resultContainer.appendChild(result_divider);
    resultContainer.appendChild(check_result);

    // 결과창 업데이트
    const resultsContainer = document.getElementById('results');
    resultsContainer.appendChild(resultContainer);

    if(strikes === 3) {
        document.getElementById('game-result-img').src = 'success.png';
        document.querySelector('.submit-button').disabled = true;
    }
    else if(attempts === 0) {
        document.getElementById('game-result-img').src = 'fail.png';
        document.querySelector('.submit-button').disabled = true;
    }
    document.getElementById('number1').value = '';
    document.getElementById('number2').value = '';
    document.getElementById('number3').value = '';
}

window.onload = initializeGame;