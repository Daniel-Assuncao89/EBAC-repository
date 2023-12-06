#  A simple generator function
def my_gen():
    n = 1
    print("First print, n é igual a {}".format(n))
    #  Generator function contains yield statements
    yield n

    n += 1
    print("Second print, n é igual a {}".format(n))
    yield n

    n += 1
    print("Third and last print, n é igual a {}".format(n))
    yield n
