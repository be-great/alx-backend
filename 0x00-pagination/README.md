# 0x00. Pagination

## 1. Simple Pagination Using page and page_size Parameters

- page: the current page number
- page_size: the number of items per pag

```python
def paginate_simple(data, page, page_size):
    start = (page - 1) * page_size
    end = start + page_size
    return data[start:end]
```

## 2. Hypermedia Pagination with Metadata
- total_pages: the total number of pages
- total items: the total number ofitems 
- has_next: booleans indicating if more data exits
- have_previous: booleans indicating if more data exits

```python
def paginate_hypermedia(data, page, page_size):
    total_items = len(data)
    total_pages = (total_items + page_size - 1) // page_size  # Ceiling division
    start = (page - 1) * page_size
    end = start + page_size

    return {
        "data": data[start:end],
        "page": page,
        "page_size": page_size,
        "total_items": total_items,
        "total_pages": total_pages,
        "has_next": page < total_pages,
        "has_previous": page > 1,
    }
```
## 3. Deletion-Resilient Pagination
- an approach based on markers (like unique IDs or timestamps) can be helpful
```python
def paginate_resilient(data, last_id=None,  page_size=10):
    if last_id:
        # Find index of last_id in data
        x =(i for i, item in enumerate(data) if item["id"] == last_id), -1
        start_index = next(x) + 1
    else:
        start_index = 0
    end_index = start_index + page_size
    next_last_id = data[end_index - 1]["id"] if end_index < len(data) else:
        start_index = 0
    
    end_index = start_index + page_size
    next_last_id = data[end_index - 1]["id"] if end_index < len(data) else None

    return {
        "data", data[start_index:end_index],
        "next_last_id": next_last_id,
    }
```