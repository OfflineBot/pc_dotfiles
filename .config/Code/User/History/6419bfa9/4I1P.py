
import random
from typing import List
from typing import Tuple

games_won = 0
games_lost = 0


def create_game() -> List:
    list = [0, 0, 1]
    random.shuffle(list)
    return list


def select_place(game) -> Tuple[int]:
    rand = random.randint(1, 3)
    rand -= 1
    value = game[rand]
    return value


def switch(game) -> int:
    pass


def play_game():
    win = 1
    loss = 0

    game = create_game()
    played = select_place(game)

    stayed = played
    switch = switch(game)




def simulation():
    play_game()


if __name__ == "__main__":
    simulation()
