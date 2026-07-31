# Deploy PWA lên GitHub Pages

## Cách 1 — Qua giao diện web (không cần Git)
1. Vào https://github.com/new → tạo repo mới (vd `cshl-app`), để **Public**.
2. Vào repo vừa tạo → **Add file → Upload files** → kéo thả TOÀN BỘ nội dung bên trong thư mục này (không kéo cả thư mục `cshl_pwa_github`, mà kéo `index.html`, `manifest.json`, `sw.js`, `privacy.html`, `.nojekyll`, và 2 thư mục `vendor/`, `icons/` vào thẳng gốc repo).
3. Commit.
4. Vào **Settings → Pages** (menu bên trái) → mục "Build and deployment" → Source chọn **"Deploy from a branch"** → Branch chọn **main** / **/ (root)** → Save.
5. Đợi 1-2 phút, GitHub hiện link dạng `https://<username>.github.io/<ten-repo>/` — đó là link PWA của bạn.

## Cách 2 — Qua Git command line
```bash
cd cshl_pwa_github
git init
git add -A
git commit -m "Deploy CSHL PWA"
git branch -M main
git remote add origin https://github.com/<username>/<ten-repo>.git
git push -u origin main
```
Sau đó bật Pages giống bước 4 ở Cách 1.

## Sau khi có link
- Mở link trên **điện thoại** (Chrome/Safari) → sẽ thấy nút "Thêm vào màn hình chính" / "Cài đặt ứng dụng" — đây là bước cài PWA để dùng như app thật, có icon riêng, chạy offline.
- Nếu sửa `index.html` sau này: chỉ cần upload lại đè lên file cũ (hoặc `git push` lại) — GitHub Pages tự cập nhật trong ~1 phút.
- Nếu người dùng đã cài PWA trước đó mà không thấy bản mới: có thể do Service Worker cache — mở Cài đặt trình duyệt → xoá dữ liệu trang → mở lại link.

## Lưu ý
- Repo phải **Public** thì GitHub Pages miễn phí mới hoạt động (repo Private cần gói GitHub Pro trở lên).
- `privacy.html` sau khi deploy sẽ có link dạng `https://<username>.github.io/<ten-repo>/privacy.html` — dùng link này khi nộp Privacy Policy URL lên Google Play Console (nhớ điền tên/email liên hệ vào file trước khi deploy).
