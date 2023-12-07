import unittest

from bubble_sort import bubble_sort


class TestBubbleSort(unittest.TestCase):
    def test_bubble_sort(self):
        unsorted_list = [66, 23, 4, 8, 1, 70]
        sorted_list = [1, 4, 8, 23, 66, 70]

        unsorted_list = bubble_sort(unsorted_list)
        self.assertEqual(unsorted_list, sorted_list)  # add assertion here


if __name__ == '__main__':
    unittest.main()
