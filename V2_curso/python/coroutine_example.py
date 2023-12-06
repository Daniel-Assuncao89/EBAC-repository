def func():
    print('Function Starts')

    yield

    print('End of Function')

try:
    y = func()
    print(type(y))
    next(y)
    next(y)

except StopIteration as e:
    pass