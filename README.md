# ❄️ Cold Storage Heat Load Calculator

Công cụ **tính toán** tải nhiệt kho lạnh cho kỹ sư nhiệt lạnh — chạy hoàn toàn trên trình duyệt/thiết bị (client-side), không cần server, không thu thập dữ liệu người dùng.

**🔗 Demo trực tuyến:** `https://<username>.github.io/<ten-repo>/` *(điền lại sau khi bật GitHub Pages — xem hướng dẫn bên dưới)*

---

## Tính năng chính

- **3 hình dạng kho**: chữ nhật, khuyết góc 6 cạnh, chữ U 8 cạnh
- **Preset "Loại kho"**: Kho thấp/chất tay, Kho cao/kệ pallet, Kho ASRS tự động, Hành lang lạnh — tự điền chiều cao, sức chứa, dàn lạnh, xe nâng, cấu hình cửa gợi ý theo từng loại
- **Database tích hợp**: 239 sản phẩm (có gắn nguồn dữ liệu), vật liệu cách nhiệt, khí hậu 63 tỉnh/thành theo QCVN 02:2022/BXD, loại cửa/xe nâng — chỉnh sửa được ngay trong app
- **Tính real-time**: kết quả cập nhật ngay khi đổi thông số, kèm chẩn đoán PASS/FAIL tự động
- **Quản lý dự án**: nhiều dự án, nhiều phòng/kho tính trong 1 dự án, sao lưu/khôi phục dữ liệu
- **Xuất báo cáo** PDF và Excel chuyên nghiệp — kèm mục tiêu chuẩn áp dụng và chỉ báo độ tin cậy thông số
- **Offline-first**: cài như app (PWA) trên điện thoại/máy tính, hoạt động không cần mạng sau lần tải đầu
- Song ngữ Việt/Anh

## Công nghệ & tiêu chuẩn áp dụng

Ứng dụng thuần HTML/CSS/JavaScript (không framework), lưu trữ dữ liệu qua IndexedDB. Công thức tính toán trích dẫn từ:
- ASHRAE Refrigeration Handbook (2018/2022), Ch.23-24
- Gosney & Olama (1975) — tải xâm nhập qua cửa (Institute of Refrigeration Vol.72)
- Minnesota Technical Reference Manual (TRM) / ASHRAE — hệ số Df
- FAO/IIR — tỷ lệ thể tích net/gross
- QCVN 02:2022/BXD — dữ liệu khí hậu 63 tỉnh thành, Bộ Xây dựng Việt Nam

Chi tiết đầy đủ xem trong tab **Thông tin** của app.

## Chạy thử tại chỗ (không cần deploy)

```bash
python3 -m http.server 8080
```
rồi mở `http://localhost:8080`.

## Deploy lên GitHub Pages

Xem hướng dẫn chi tiết trong [`DEPLOY_GITHUB.md`](./DEPLOY_GITHUB.md). Tóm tắt: **Settings → Pages → Deploy from a branch → main / (root)**.

## Cài như app trên điện thoại

Sau khi có link GitHub Pages, mở bằng Chrome (Android) hoặc Safari (iOS) → chọn **"Thêm vào màn hình chính"** — app chạy như native app, có icon riêng, hoạt động offline.

## Quyền riêng tư

Ứng dụng không thu thập, không truyền bất kỳ dữ liệu nào ra ngoài — toàn bộ lưu cục bộ trên thiết bị. Xem [`privacy.html`](./privacy.html).

## Giấy phép & liên hệ

*(Điền thông tin liên hệ/giấy phép của bạn tại đây)*
