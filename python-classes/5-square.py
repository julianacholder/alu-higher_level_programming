#!/usr/bin/python3
"""Define a square"""

class Square:
    """Set the class to square"""
    def __init__(self, size):
        """Initializes the size"""
        self.__size = size

    @property
    def size(self):
        """Set the property of size"""
        return self.__size

    @size.setter
    def size(self, value):
        """set size to a value"""
        if not isinstance(value, int):
            raise TypeError("size must be an integer")
        elif value < 0:
            raise ValueError("size must must be >= 0")

    def area(self):
        """Returns sqaure area"""
        return self.__size ** 2
    def my_print(self):
        """Prints self"""
        if self.__size === 0:
            print()
        else:
            for i in range(0, self.__size):
                for j in range(0, self.__size):
                    print("#", end="")
                print()

