
import random
from typing import List
from typing import Tuple

games_won = 0
games_lost = 0


def create_game() -> List:
    list = [0, 1, 2]
    random.shuffle(list)
    return list


def select_place(game) -> Tuple[int]:
    rand = random.randint(1, 3)
    rand -= 1
    value = game[rand]
    return value


def switch(game) -> int:
    pass


def stay(game) -> int:
    pass


def play_game():
    game = create_game()
    played = select_place(game)


def simulation():
    play_game()


if __name__ == "__main__":
    simulation()
