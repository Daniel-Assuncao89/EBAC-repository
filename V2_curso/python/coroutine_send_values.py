def func():
    print('Function part 1')

    x = yield
    print(x)
    print('Function part 2')

    a = yield
    print(a)
    print('Function part 3')

try:
    y = func()

    next(y)

    y.send(6)  # Function part 2 executed and value sent 6

    y.send(12)  # Function part 3 executed and value sent 12 and StopIteration raised

    next(y)

except StopIteration as e:
    pass