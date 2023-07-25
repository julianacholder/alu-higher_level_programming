#!/usr/bin/python3
""" a class Square that defines a square by: (based on 0-square.py)

Private instance attribute: size
Instantiation with size (no type/value verification)
You are not allowed to import any module 
"""


class Square:
    """ Creates a square"""
    def __init__(self, size):
        """ Initializes size"""
        self.__size = size
