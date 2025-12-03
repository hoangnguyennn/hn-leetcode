## Ý tưởng

Bài toán này khá là đơn giản nếu đã hiểu được cách triển khai danh sách liên kết.

Ta chuẩn bị 1 biến lưu lại kết quả.

Từ đầu 2 danh sách đầu vào, ta kiểm tra lần lượt xem node nào có giá trị nhỏ hơn, node có giá trị nhỏ hơn sẽ được đưa vào biến kết quả, sau đó tiếp tục di chuyển tới node tiếp theo và lặp lại các bước cho tới khi 1 trong 2 danh sách đã duyệt tới node cuối. Lúc này ta gắn phần của lại của danh sách chưa duyệt xong vào kết quả là hoàn tất.

- Độ phức tạp thời gian là O(n + m), vì cần phải duyệt qua tất cả các node của cả 2 danh sách đầu vào
- Độ phức tạp không gian là O(1), vì không cần xin cấp thêm bộ nhớ
