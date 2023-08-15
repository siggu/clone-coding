from typing import Any


class Dog:
    def __init__(self, name):
        self.name = name

    def __str__(self):  # 원래 __str__ 메서드는 해당 클래스의 메모리 주소값을 반환하는데, 오버라이딩해서 쓸 수 있다.
        return f"Dog: {self.name}"

    def __getattribute__(self, name):
        print(f"they want to get {name}")
        return "😊"


jia = Dog("jia")
print(jia.name)
