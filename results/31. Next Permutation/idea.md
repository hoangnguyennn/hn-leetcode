## Ý tưởng

Bài này mình được học ở môn toán rời rạc.

Để giải bài này mình làm theo các bước như sau:

**B1: Tìm vị trí `i` lớn nhất sao cho `a[i]` < `a[i + 1]`**

Ví dụ:

```
[1, 3, 5, 4, 2]
    ^
 0, 1, 2, 3, 4
```

Thì `i` lớn nhất thoả điều kiện là `1`, mang giá trị `3`

**B2: Tìm vị trí `k` lớn nhất sao cho a[k] > a[i]**

Trong ví dụ ở trên, có số `5` ở index `2` và `4` ở index `3` là lớn hơn `3`. Và `k` lớn hơn là `3`.

**B3: Đổi vị trí 2 số ở vị trí `i` và `k`**

Tiến hành đổi vị trí `1` và `3`, ta được:

```
[1, 4, 5, 3, 2]
```

**B4: Đảo ngược đoạn từ `i + 1` tới cuối mảng (để tạo ra đoạn nhỏ nhất sau `i`)**

Ta được:

```
[1, 4, 2, 3, 5]
```

- Độ phức tạp thời gian là O(n), vì trường hợp xấu nhất thì chúng ta duyệt hết mảng, và vì không có vòng lặp lồng nhau
- Độ phức tạp không gian là O(1), vì thao tác in-place
