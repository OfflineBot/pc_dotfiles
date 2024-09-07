
import random
from typing import List
from typing import Tuple

games_won = 0
games_normal = 0
games_lost = 0
games_lost_total = 0


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
    loss = 0
    neutral = 1
    win = 2
    game = create_game()
    played = select_place(game)
    if played == loss:
        games_lost += 1
        games_lost_total += 1
        return
    


def simulation():
    play_game()


if __name__ == "__main__":
    simulation()
