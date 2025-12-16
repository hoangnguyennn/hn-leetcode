## Ngăn xếp

Ngăn xếp là một cấu trúc dữ liệu tuyến tính hoạt động theo nguyên tắc LIFO – Last In, First Out: phần tử được thêm vào cuối cùng sẽ được lấy ra đầu tiên.

Nó giống như chồng sách: đặt cuốn mới lên trên, muốn lấy thì cũng lấy từ trên xuống.

Các thao tác chính:

- push(x): thêm phần tử lên đỉnh stack
- pop(): lấy phần tử trên đỉnh và loại bỏ nó
- peek() / top(): xem phần tử trên cùng nhưng không xóa
- isEmpty(): kiểm tra rỗng
- size(): lấy số lượng phần tử trong stack

## Ưu nhược điểm

**Ưu điểm:**

- Thao tác rất nhanh: push/pop đều là O(1).
- Dễ triển khai (dùng mảng hoặc linked list đều được).
- Rất phù hợp cho các bài toán mang tính "quay ngược", "lùi lại".

**Nhược điểm:**

- Chỉ truy cập được phần tử trên cùng (top).
- Không linh hoạt khi cần truy cập ngẫu nhiên vào phần tử ở giữa.
- Cấu trúc LIFO khiến nhiều bài toán không phù hợp.
