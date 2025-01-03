// // 변수 선언
// let timer; // setInterval을 저장할 변수
// let isRunning = false; // 타이머가 실행 중인지 확인
// let elapsedTime = 0; // 경과 시간 (초 단위)

// // HTML 요소 가져오기
// const timerDisplay = document.querySelector('.timer-display');
// const startButton = document.querySelector('.control-btn-start');

// // 시간 포맷팅 함수 (00:00 형식)
// function formatTime(seconds) {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
//     return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
// }

// // 타이머 화면 업데이트 함수
// function updateTimerDisplay() {
//     timerDisplay.textContent = formatTime(elapsedTime);
// }

// // Start 버튼 클릭 이벤트
// startButton.addEventListener('click', () => {
//     if (!isRunning) { // 타이머가 실행 중이 아닐 때만 시작
//         isRunning = true; // 실행 상태로 설정
//         timer = setInterval(() => {
//             elapsedTime++; // 1초 증가
//             updateTimerDisplay(); // 화면 업데이트
//         }, 1000); // 1초마다 실행
//     }
// });

// // 초기 상태 설정
// updateTimerDisplay(); // 시작 시 화면을 00:00으로 초기화


//start버튼만 구현했던 코드
// document.addEventListener('DOMContentLoaded', () => {
//     let timer; // setInterval을 저장할 변수
//     let isRunning = false; // 타이머가 실행 중인지 확인
//     let elapsedTime = 0; // 경과 시간 (밀리초 단위)

//     // HTML 요소 가져오기
//     const timerDisplay = document.querySelector('.timer-display');
//     const startButton = document.querySelector('.control-btn-start');

//     // 타이머 화면 업데이트 함수
//     function updateTimerDisplay() {
//         const seconds = Math.floor(elapsedTime / 1000); // 초 단위 계산
//         const milliseconds = Math.floor((elapsedTime % 1000) / 10); // 밀리초 단위 계산 (두 자리 표시)
//         timerDisplay.textContent = `${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
//     }

//     // Start 버튼 클릭 이벤트
//     startButton.addEventListener('click', () => {
//         if (!isRunning) {
//             isRunning = true; // 실행 상태로 설정
//             timer = setInterval(() => {
//                 elapsedTime += 10; // 10ms 증가
//                 updateTimerDisplay(); // 화면 업데이트
//             }, 10); // 10ms마다 실행
//         }
//     });

//     // 초기 상태 설정
//     updateTimerDisplay(); // 시작 시 화면을 00:00으로 초기화
// });


//start와 stop버튼까지 구현했을 경우
// document.addEventListener('DOMContentLoaded', () => {
//     let timer; // setInterval을 저장할 변수
//     let isRunning = false; // 타이머가 실행 중인지 확인
//     let elapsedTime = 0; // 경과 시간 (밀리초 단위)

//     // HTML 요소 가져오기
//     const timerDisplay = document.querySelector('.timer-display');
//     const startButton = document.querySelector('.control-btn-start');
//     const stopButton = document.querySelector('.control-btn-stop');

//     // 타이머 화면 업데이트 함수
//     function updateTimerDisplay() {
//         const seconds = Math.floor(elapsedTime / 1000); // 초 단위 계산
//         const milliseconds = Math.floor((elapsedTime % 1000) / 10); // 밀리초 단위 계산 (두 자리 표시)
//         timerDisplay.textContent = `${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
//     }

//     // Start 버튼 클릭 이벤트
//     startButton.addEventListener('click', () => {
//         if (!isRunning) {
//             isRunning = true; // 실행 상태로 설정
//             timer = setInterval(() => {
//                 elapsedTime += 10; // 10ms 증가
//                 updateTimerDisplay(); // 화면 업데이트
//             }, 10); // 10ms마다 실행
//         }
//     });

//     // Stop 버튼 클릭 이벤트
//     stopButton.addEventListener('click', () => {
//         if (isRunning) {
//             isRunning = false; // 실행 상태 해제
//             clearInterval(timer); // setInterval 중지
//         }
//     });

//     // 초기 상태 설정
//     updateTimerDisplay(); // 시작 시 화면을 00:00으로 초기화
// });



//start, stop버튼 + 구간 기록 설정
// document.addEventListener('DOMContentLoaded', () => {
//     let timer; // setInterval을 저장할 변수
//     let isRunning = false; // 타이머가 실행 중인지 확인
//     let elapsedTime = 0; // 경과 시간 (밀리초 단위)

//     // HTML 요소 가져오기
//     const timerDisplay = document.querySelector('.timer-display');
//     const startButton = document.querySelector('.control-btn-start');
//     const stopButton = document.querySelector('.control-btn-stop');
//     const recordSection = document.querySelector('.record-section');

//     // 타이머 화면 업데이트 함수
//     function updateTimerDisplay() {
//         const seconds = Math.floor(elapsedTime / 1000); // 초 단위 계산
//         const milliseconds = Math.floor((elapsedTime % 1000) / 10); // 밀리초 단위 계산
//         timerDisplay.textContent = `${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
//     }

//     // 구간 기록 추가 함수
//     function addRecord() {
//         const seconds = Math.floor(elapsedTime / 1000);
//         const milliseconds = Math.floor((elapsedTime % 1000) / 10);
//         const recordText = `${String(seconds).padStart(2, '0')} : ${String(milliseconds).padStart(2, '0')}`;

//         // 새로운 기록 추가
//         const recordItem = document.createElement('div');
//         recordItem.classList.add('record-item');
//         recordItem.innerHTML = `
//             <input type="checkbox" class="record-checkbox">
//             <span>${recordText}</span>
//         `;
//         recordSection.appendChild(recordItem);
//     }

//     // Start 버튼 클릭 이벤트
//     startButton.addEventListener('click', () => {
//         if (!isRunning) {
//             isRunning = true;
//             timer = setInterval(() => {
//                 elapsedTime += 10; // 10ms 증가
//                 updateTimerDisplay();
//             }, 10); // 10ms마다 실행
//         }
//     });

//     // Stop 버튼 클릭 이벤트
//     stopButton.addEventListener('click', () => {
//         if (isRunning) {
//             isRunning = false;
//             clearInterval(timer); // 타이머 중지
//             addRecord(); // 현재 시간을 구간 기록에 추가
//         }
//     });

//     // 초기 상태 설정
//     updateTimerDisplay();
// });


//구간기록 추가 + reset버튼 구현

document.addEventListener('DOMContentLoaded', () => {
    let timer; // setInterval을 저장할 변수
    let isRunning = false; // 타이머가 실행 중인지 확인
    let elapsedTime = 0; // 경과 시간 (밀리초 단위)

    // HTML 요소 가져오기
    const timerDisplay = document.querySelector('.timer-display');
    const startButton = document.querySelector('.control-btn-start');
    const stopButton = document.querySelector('.control-btn-stop');
    const resetButton = document.querySelector('.control-btn-reset');
    const recordList = document.querySelector('.record-list');

    // 타이머 화면 업데이트 함수
    function updateTimerDisplay() {
        const seconds = Math.floor(elapsedTime / 1000); // 초 단위 계산
        const milliseconds = Math.floor((elapsedTime % 1000) / 10); // 밀리초 단위 계산
        timerDisplay.textContent = `${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
    }

    // 구간 기록 추가 함수
    function addRecord() {
        const seconds = Math.floor(elapsedTime / 1000);
        const milliseconds = Math.floor((elapsedTime % 1000) / 10);
        const recordText = `${String(seconds).padStart(2, '0')} : ${String(milliseconds).padStart(2, '0')}`;

        // 새로운 기록 추가
        const recordItem = document.createElement('div');
        recordItem.classList.add('record-item');
        recordItem.innerHTML = `
            <img src="./circle.png" alt="구간기록 아이콘" class="record-icon">
            <span class="record-text">${recordText}</span>
        `;
        recordList.appendChild(recordItem);
    }

    // Start 버튼 클릭 이벤트
    startButton.addEventListener('click', () => {
        if (!isRunning) {
            isRunning = true;
            timer = setInterval(() => {
                elapsedTime += 10; // 10ms 증가
                updateTimerDisplay();
            }, 10); // 10ms마다 실행
        }
    });

    // Stop 버튼 클릭 이벤트
    stopButton.addEventListener('click', () => {
        if (isRunning) {
            isRunning = false;
            clearInterval(timer); // 타이머 중지
            addRecord(); // 현재 시간을 구간 기록에 추가
        }
    });

    // Reset 버튼 클릭 이벤트
    resetButton.addEventListener('click', () => {
        isRunning = false; // 실행 상태 해제
        clearInterval(timer); // 타이머 중지
        elapsedTime = 0; // 경과 시간 초기화
        updateTimerDisplay(); // 타이머 화면 초기화 (기록은 유지)
    });

    // 초기 상태 설정
    updateTimerDisplay();
});

