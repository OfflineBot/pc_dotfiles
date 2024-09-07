
import random
from typing import List
from typing import Tuple

games_won_stayed = 0
games_lost_stayed = 0

games_won_changed = 0
games_lost_changed = 0

def create_game() -> List:
    list = [0, 0, 1]
    random.shuffle(list)
    return list


def select_place(game) -> Tuple[int, int]:
    rand = random.randint(1, 3)
    rand -= 1
    value = game[rand]
    return (value, rand)


def switch(game, played) -> int:


def play_game():
    win = 1
    loss = 0

    game = create_game()
    (played, pick) = select_place(game)

    stayed = played
    if stayed == win:
        games_won_stayed += 1
    else:
        games_lost_stayed += 1

    switch = switch(game, played)





def simulation():
    play_game()


if __name__ == "__main__":
    simulation()
