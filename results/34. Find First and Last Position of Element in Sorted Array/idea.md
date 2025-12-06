# Ý tưởng

Bài toán này không có gì phức tạp hết, nó là binary search.

Tìm kiếm nhị phân (binary search) là bài toán áp dụng cho mảng đã được sắp xếp.

Ta xác định vị trí giữa của mảng, nếu giá trị cần tìm lớn hơn giá trị giữa mảng thì ta chỉ tìm kiếm trên nửa sau của mảng, còn ngược lại thì tìm kiếm nửa trước của mảng.

Sau khi đã xác định được index của vị trí cần tìm thì làm thêm một bước phụ nữa, là di chuyển left và right tới vị trí biên của target (trong trường hợp giá trị cần tìm kiếm nó bị trùng lặp).

- Độ phức tạp thời gian là O(log n), binary search triển khai theo vòng lặp thì có độ phức tạp là O(log n)
- Độ phức tạp không gian là O(1), không cần thêm không gian phụ
