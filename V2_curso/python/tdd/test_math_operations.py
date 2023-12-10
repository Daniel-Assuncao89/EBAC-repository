import unittest

from math_operations import addition_operation, subtraction_operation


class TestMathOperations(unittest.TestCase):
    def test_addition_operation(self):
        math_addition_result = addition_operation(num_1=5, num_2=10)
        self.assertEquals(math_addition_result, 15)

    def test_subtraction_operation(self):
        math_subtraction_result = subtraction_operation(num_1=5, num_2=5)
        self.assertEquals(math_subtraction_result, 0)


if __name__ == '__main__':
    unittest.main()
