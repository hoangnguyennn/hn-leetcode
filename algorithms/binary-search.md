## Binary Search

Tìm kiếm nhị phân là thuật toán tìm kiếm cực nhanh, được áp dụng cho mảng đã được sắp xếp.

Thay vì tìm kiếm tuần tự từ đầu tới cuối, tìm kiếm nhị phân sẽ:

1. Lấy phần tử giữa mảng
2. So sánh giá trị cần tìm với phần tử giữa đó
3. Nếu:

- Bằng nhau: tìm thấy
- Nhỏ hơn phần tử giữa: chỉ tìm trong nửa trước của mảng
- Lớn hơn phần tử giữa: chỉ tìm trong nửa sau của mảng

4. Lặp lại quá trình cho đến khi tìm thấy hoặc duyệt hết mảng.

## Độ phức tạp

Ta đặt kích thước mảng là `n`, sau lần kiểm tra thứ 1, kích thước mảng cần kiểm tra giảm xuống còn `n / 2^1`, tại lần kiểm tra thứ `k`, ta có kích thước mảng là `n / 2^k`.

Tại thời điểm dừng (khi mảng cần duyệt chỉ còn 1 phần tử), thì ta đã kiểm tra được `k` lần.

Từ đó, ta có công thức:

```
n / 2^k = 1

=> n = 2^k
=> k = log2(n)
```

Vì vậy, độ phức tạp thời gian của thuật toán tìm kiếm nhị phân là O(log(n))

Về không gian, ta không tạo thêm mảng mới, mà chỉ sử dụng lại mảng đầu vào, nên độ phức tạp không gian sẽ là O(1)
