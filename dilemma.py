import random
rounds = 10
sims = 100
def strategy(rate=0.7):
    return "C" if random.random() < rate else "D"
def run_sim(communication=False):
    boost = 0.2 if communication else 0
    coop = 0
    defect = 0
    for _ in range(rounds):
        rate = 0.65 + boost
        p1 = strategy(rate)
        p2 = strategy(rate)

        if p1 == "C" and p2 == "C":
            coop += 1
        else:
            defect += 1
    return coop, defect
def stats(results):
    total_coop = sum(c for c, d in results)
    total_rounds = sims * rounds
    coop_rate = round((total_coop / total_rounds) * 100, 2)
    return coop_rate, round(100 - coop_rate, 2)
# Run simulations
no_comm = [run_sim(False) for _ in range(sims)]
with_comm = [run_sim(True) for _ in range(sims)]
no_coop, no_def = stats(no_comm)
wc_coop, wc_def = stats(with_comm)
print("\n=== PRISONER'S DILEMMA RESULTS ===")
print(f"\nWithout Communication: Cooperation: {no_coop}%, Defection: {no_def}%")
print(f"With Communication:    Cooperation: {wc_coop}%, Defection: {wc_def}%")
print(f"\nCommunication increased cooperation by: {round(wc_coop-no_coop,2)}%")