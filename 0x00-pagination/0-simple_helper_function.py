#!/usr/bin/env python3
"""
Pagination
"""


def index_range(page, page_size):
    """
    helping function
    return the start and ending index
    of the page
    """
    start = (page - 1) * page_size
    end = start + page_size
    return start, end
