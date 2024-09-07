
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


def switch_game(game: List, pick) -> int:
    print(game)
    print(pick)
    game.pop(pick)
    print(game)
    if 1 in game:
        index = game.index(0)
        if index == 0:
            return game[1]
        else:
            return [0]
    return 0

def play_game():
    global games_lost_changed
    global games_won_changed
    global games_won_stayed
    global games_lost_stayed

    win = 1

    game = create_game()
    (played, pick) = select_place(game)

    stayed = played
    if stayed == win:
        games_won_stayed += 1
    else:
        games_lost_stayed += 1

    switch = switch_game(game, pick)
    if switch == win:
        games_won_changed += 1
    else:
        games_lost_changed += 1





def simulation():
    iterations = 1000
    for _ in range(iterations):
        play_game()
    print("===== CHANGED =====")
    print("won: ", games_won_changed, f" [{games_won_changed / iterations * 100.0}]")
    print("lost: ", games_lost_changed, f" [{games_lost_changed / iterations * 100.0}]")
    print("===== STAYED =====")
    print("won: ", games_won_stayed, f" [{games_won_stayed / iterations * 100.0}]")
    print("lost: ", games_lost_stayed, f" [{games_lost_stayed / iterations * 100.0}]")


if __name__ == "__main__":
    simulation()
