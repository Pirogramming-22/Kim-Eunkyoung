//구간기록 추가 + start, stop, reset버튼 구현 + 선택 텍스트만 삭제 + 전체 선택
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
    const deleteButton = document.querySelector('.delete-btn');
    const masterCheckbox = document.querySelector('.checkbox'); // 상단 체크박스

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
            <input type="checkbox" class="record-checkbox">
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

    // Delete 버튼 클릭 이벤트 - 체크된 기록 삭제
    deleteButton.addEventListener('click', () => {
        const checkboxes = document.querySelectorAll('.record-checkbox');
        checkboxes.forEach((checkbox) => {
            if (checkbox.checked) {
                const recordItem = checkbox.parentElement; // 부모 요소인 .record-item 가져오기
                recordItem.remove(); // 기록 삭제
            }
        });
    });

    // Master Checkbox 클릭 이벤트 - 모든 체크박스 상태 변경
    masterCheckbox.addEventListener('change', () => {
        const allCheckboxes = document.querySelectorAll('.record-checkbox');
        allCheckboxes.forEach((checkbox) => {
            checkbox.checked = masterCheckbox.checked; // 모든 체크박스 상태 동기화
        });
    });

    // 초기 상태 설정
    updateTimerDisplay();
});
