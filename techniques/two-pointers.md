## Two Pointers

Two Pointers dùng hai con trỏ (left và right) di chuyển trên dãy dữ liệu theo một chiến lược nhất định để giải quyết bài toán mà không cần vòng lặp lồng nhau.

Các kiểu di chuyển phổ biến:

1. Hai con trỏ di chuyển tiến về phía nhau
2. Hai con trỏ di chuyển cùng chiều nhưng tốc độ khác nhau
3. Một con trỏ đứng yên, con còn lại di chuyển

## Ví dụ, cách sử dụng

1. Hai con trỏ tiến vào giữa

```
arr = [1, 3, 4, 6, 8], target = 10

left →   1     3     4     6     8   ← right
```

- 1 + 8 = 9 < 10 → tăng left
- 3 + 8 = 11 > 10 → giảm right
- 4 + 6 = 10 tìm thấy

2. Hai con trỏ nhanh và chậm trong danh sách liên kết

```
slow: 1 bước mỗi lần
fast: 2 bước mỗi lần

Nếu có vòng lặp → fast sẽ bắt kịp slow
```

## So sánh với Sliding Window

Two Pointers và Sliding Window nhìn qua có vẻ giống nhau — đều dùng 2 con trỏ và đều chạy trong O(n).

Nhưng bản chất không giống nhau, chỉ là cùng "họ kỹ thuật two-indices".

Dưới đây là cách hiểu dễ nhất:

### Giống nhau

- Cùng dùng hai con trỏ (left, right).
- Cùng giúp loại bỏ vòng lặp lồng nhau, từ O(n^2) thành O(n).
- Cùng di chuyển theo hướng tăng dần (thường là từ trái sang phải).
- Dùng nhiều trong bài toán mảng/string.

Vì vậy nhìn code của Sliding Window thường cũng có hai con trỏ, dễ làm người học nhầm Sliding Window = Two Pointers.

Nhưng Sliding Window chỉ là một **TRƯỜNG HỢP ĐẶC BIỆT** của Two Pointers.

### Khác nhau

1. Sliding Window luôn tạo thành một "đoạn liên tục"

Nó tạo ra một cửa sổ liên tục:

```
[left ... right]
```

Window có thể:

- mở rộng (right++)
- thu hẹp (left++)

Ví dụ:

- Tìm chuỗi con dài nhất không có ký tự trùng lặp

2. Two Pointers KHÔNG yêu cầu đoạn liên tục

Hai kiểu two pointers phổ biến:

**(A) Hai con trỏ ép vào nhau**

Dành cho mảng đã sắp xếp:

```
left →       ← right
```

Không có "cửa sổ", chỉ có hai con trỏ độc lập.

Ví dụ:

Tìm hai số có tổng = target → Two Pointers, không phải sliding window.

**(B) Slow & Fast pointer (linked list)**

```
slow += 1
fast += 2
```

→ Hoàn toàn không phải "window".

Ví dụ: phát hiện vòng tròn trong linked list (Floyd's cycle detection).
