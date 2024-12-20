#!/usr/bin/env python3
"""
1. Simple pagination
"""
import csv
import math
from typing import List


def index_range(page, page_size):
    """
    helping function
    return the start and ending index
    of the page
    """
    start = (page - 1) * page_size
    end = start + page_size
    return start, end


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """
        Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        Return the correct page of the dataset
        """
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0
        start, end = index_range(page, page_size)
        dataset = self.dataset()
        # return the slice of the database within
        # the start and end of indices
        return dataset[start: end] if start < len(dataset) else []

    def get_hyper(self, page, page_size):
        """
        return a dictionary =
        {
            'page_size': the length of the returned dataset page
            'page': the current page number
            'data': the dataset page (equivalent to return from previous task)
            'next_page': number of the next page, None if no next page
            'prev_page': number of the previous page, None if no previous page
            'total_pages': the total number of pages in
                            the dataset as an integer
        }
        """
        Dict = {'page_size': page_size, 'page': page}
        Dict['data'] = self.dataset()
        total_pages = math.ceil(len(self.dataset()) / page_size)
        Dict['next_page'] = page + 1 if page + 1 <= total_pages else None
        Dict['prev_page'] = page - 1 if page > 1 else None
        Dict['total_pages'] = total_pages
        return Dict
