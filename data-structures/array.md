## Mảng

Mảng (array) là một cấu trúc dữ liệu lưu trữ nhiều phần tử có cùng kiểu trong các ô nhớ liên tiếp.

Điểm quan trọng nhất của mảng truyền thống là: có thể truy cập phần tử bằng chỉ số trong thời gian O(1).

## Ưu nhược điểm

**Ưu điểm:**

- Truy cập nhanh (O(1)) nhờ các ô nhớ liên tiếp.
- Đơn giản, dễ sử dụng.
- Tận dụng cache CPU tốt nên hiệu năng cao.
- Thích hợp cho các bài toán cần truy cập ngẫu nhiên nhiều.

**Nhược điểm:**

- Kích thước cố định (với mảng truyền thống cần biết trước).
- Chèn/xóa phần tử tốn kém (O(n)) vì phải dịch chuyển nhiều phần tử.
- Khi cần mảng lớn, đôi khi khó cấp phát một block bộ nhớ liên tục.
- Không linh hoạt bằng danh sách liên kết nếu kích thước thay đổi liên tục.
