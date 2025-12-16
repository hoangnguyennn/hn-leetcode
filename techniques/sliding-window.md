## Sliding Window

Sliding Window là một kỹ thuật tối ưu dùng để duyệt qua một dãy (array, string) bằng cách duy trì một cửa sổ con (window) trên dữ liệu.

Cửa sổ này trượt (slide) sang phải từng bước và được mở rộng hoặc thu hẹp tùy theo điều kiện bài toán.

Thay vì duyệt lại từ đầu cho mỗi đoạn con, Sliding Window giúp giảm độ phức tạp từ O(n^2) xuống O(n).

**Ví dụ cửa sổ kích thước cố định 3:**

```
[1  4  2  6  3  8]
 ^-----^
 Window: [1 4 2]

    Trượt sang phải
[1  4  2  6  3  8]
    ^-----^
    [4 2 6]
```

## Ưu nhược điểm

**Ưu điểm:**

- Giảm thời gian từ O(n^2) xuống O(n).
- Không cần dùng nhiều vòng lặp lồng nhau.
- Dễ áp dụng cho các bài toán xử lý đoạn liên tục: substring, subarray, sum,…

**Nhược điểm:**

- Chỉ dùng được khi dữ liệu/bài toán có tính liên tiếp (contiguous).
- Không phù hợp cho các bài toán yêu cầu chọn phần tử không liền kề.
- Với một số bài toán phức tạp cần quản lý thêm hash map, counter — dễ gây nhầm lẫn.
