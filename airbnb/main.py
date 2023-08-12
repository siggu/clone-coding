class Player:
    def __init__(self, name, xp):
        self.name = name
        self.xp = xp

    def say_hello(self):
        print(f"hello my name is {self.name}")


nico = Player("nico", 1000)
nico.say_hello()
