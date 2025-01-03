import random

def brGame():
    #1단계: 변수 num을 아래와 같이 선언하여라.
    num = 0
    while num < 31:
        computer = random.randint(1,3)
        for i in range(computer):
            num += 1
            print(f"computer : {num}")
            #6단계
            if num == 31:
                print("player win!")
                return
        
        #2단계: input() 함수를 이용하여 1에서 3사이의 정수를 입력받는 코드를 작성하여라.
        while True:
            #3단계: 
            try:
                player = int(input("부를 숫자의 개수를 입력하세요(1, 2, 3만 입력 가능) : "))
                #2단계에서 1,2,3을 입력하지 않는 경우, 1,2,3 중 하나를 입력하세요를 출력한다.
                if player not in [1, 2, 3]:
                    print("1, 2, 3 중 하나를 입력하세요")
                else:
                    break
            #3단계: 2단계에서 정수를 입력하지 않는 경우, 정수를 입력하세요를 출력한다.
            except ValueError:
                print("정수를 입력하세요")
        
        #4단계: 변수 num 을 이용하여, 2단계에서 입력한 수만큼 숫자를 출력하는 코드를 작성
        for i in range(player):
            num += 1
            print(f"player : {num}")
            if num == 31:
                print("computer win!")
                return
brGame()