document.addEventListener('DOMContentLoaded', () => {
    let timer; // setInterval을 저장할 변수
    let isRunning = false; // 타이머가 실행 중인지 확인
    let elapsedTime = 0; // 경과 시간

    const timerDisplay = document.querySelector('.timer-display');
    const startButton = document.querySelector('.control-btn-start');
    const stopButton = document.querySelector('.control-btn-stop');
    const resetButton = document.querySelector('.control-btn-reset');
    const recordList = document.querySelector('.record-list');
    const deleteButton = document.querySelector('.delete-btn');
    const masterCheckbox = document.querySelector('.checkbox'); 

    // 타이머 화면 업데이트 함수
    function updateTimerDisplay() {
        const seconds = Math.floor(elapsedTime / 1000); // 초 단위 계산
        const milliseconds = Math.floor((elapsedTime % 1000) / 10); 
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
            <div class="record" style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
                <input type="checkbox" class="record-checkbox" style="width: 20px; height: 20px;">
                <span class="record-text">${recordText}</span>
            </div>
        `;
        recordList.appendChild(recordItem);

        // 새로 추가된 체크박스에 이벤트 추가
        const newCheckbox = recordItem.querySelector('.record-checkbox');
        newCheckbox.addEventListener('change', updateMasterCheckbox); 
    }

    // 하위 체크박스 상태 변경 감지 이벤트
    function updateMasterCheckbox() {
        const allCheckboxes = document.querySelectorAll('.record-checkbox');
        const isAllChecked = Array.from(allCheckboxes).every((checkbox) => checkbox.checked);

        // 모든 체크박스가 체크되었는지 확인
        masterCheckbox.checked = isAllChecked;
    }

    // Start 버튼 클릭 이벤트
    startButton.addEventListener('click', () => {
        if (!isRunning) {
            isRunning = true;
            timer = setInterval(() => {
                elapsedTime += 10; 
                updateTimerDisplay();
            }, 10); 
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
        isRunning = false; 
        clearInterval(timer); // 타이머 중지
        elapsedTime = 0; 
        updateTimerDisplay();
    });

    // Delete 버튼 클릭 이벤트 - 체크된 기록 삭제
    deleteButton.addEventListener('click', () => {
        const checkboxes = document.querySelectorAll('.record-checkbox');
        checkboxes.forEach((checkbox) => {
            if (checkbox.checked) {
                const recordItem = checkbox.parentElement.parentElement; 
                recordItem.remove(); 
            }
        });

        
        updateMasterCheckbox();
    });

    //챌린지 코드
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