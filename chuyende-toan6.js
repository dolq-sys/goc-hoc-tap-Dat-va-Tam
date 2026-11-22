/* =====================================================================
   TOÁN 6 — CHUYÊN ĐỀ ÔN THI GIỮA KÌ / CUỐI KÌ VÀ ĐỀ ÔN TỔNG HỢP
   Mỗi chuyên đề: theory (phương pháp + ví dụ), trắc nghiệm sinh tự động (gen: 'mix'),
   tl = bài tự luận: { de, goiy, giai: [các bước], dapso: [đáp số để kiểm tra] }.
   ===================================================================== */
(function () {
  const sup = (a, n) => `${a}<sup>${n}</sup>`;
  const P = (de, giai, dapso, goiy, diem) => ({ de, giai, dapso, goiy, diem });

  /* ---------- Bài tự luận theo chuyên đề ---------- */
  const TL = {
    cd1: [
      P('Viết tập hợp A các số tự nhiên lớn hơn 5 và không vượt quá 12 bằng hai cách. Tập A có bao nhiêu phần tử? (gõ số phần tử)', ['Liệt kê: A = {6; 7; 8; 9; 10; 11; 12}.', 'Chỉ ra tính chất đặc trưng: A = {x ∈ ℕ | 5 &lt; x ≤ 12}.', 'Số phần tử: 12 − 6 + 1 = 7.'], ['7'], '“Không vượt quá 12” nghĩa là ≤ 12.'),
      P('Tính tổng S = 1 + 2 + 3 + … + 100.', ['Số số hạng: (100 − 1) : 1 + 1 = 100.', 'S = (1 + 100) · 100 : 2 = 5 050.'], ['5050'], 'Tổng = (số đầu + số cuối) × số số hạng : 2.'),
      P('Tính tổng S = 2 + 4 + 6 + … + 200.', ['Số số hạng: (200 − 2) : 2 + 1 = 100.', 'S = (2 + 200) · 100 : 2 = 10 100.'], ['10100'], 'Đếm số số hạng trước.'),
      P('Dãy số 3; 7; 11; …; 199 có bao nhiêu số hạng? Số hạng thứ 20 là số nào? (gõ số số hạng)', ['Khoảng cách giữa hai số liên tiếp là 4.', 'Số số hạng: (199 − 3) : 4 + 1 = 50.', 'Số hạng thứ 20: 3 + (20 − 1) · 4 = 79.'], ['50'], 'Số hạng thứ n = số đầu + (n − 1) × khoảng cách.'),
    ],
    cd2: [
      P(`Tính: ${sup(3, 2)} · 5 − ${sup(2, 3)} · 4 + ${sup(10, 2)} : 25`, [`Tính luỹ thừa: ${sup(3, 2)} = 9; ${sup(2, 3)} = 8; ${sup(10, 2)} = 100.`, '9 · 5 − 8 · 4 + 100 : 25 = 45 − 32 + 4.', '= 17.'], ['17'], 'Luỹ thừa → nhân, chia → cộng, trừ.'),
      P(`Tính: 100 − [60 − (9 − 2)<sup>2</sup>] : 11`, ['(9 − 2)² = 7² = 49.', '[60 − 49] = 11.', '100 − 11 : 11 = 100 − 1 = 99.'], ['99'], 'Ngoặc tròn → ngoặc vuông.'),
      P(`Tính nhanh: ${sup(2, 3)} · 19 + ${sup(2, 3)} · 81`, [`= ${sup(2, 3)} · (19 + 81)`, '= 8 · 100 = 800.'], ['800'], 'Đặt thừa số chung.'),
      P('Tìm số tự nhiên x biết: 2<sup>x + 1</sup> = 32', [`32 = ${sup(2, 5)}.`, 'Suy ra x + 1 = 5.', 'x = 4.'], ['4'], 'Viết 32 thành luỹ thừa cơ số 2.'),
      P(`Tìm x biết: 3 · (x − 5) + ${sup(2, 4)} = ${sup(4, 2)} + ${sup(3, 3)}`, ['3 · (x − 5) + 16 = 16 + 27.', '3 · (x − 5) = 27.', 'x − 5 = 9.', 'x = 14.'], ['14'], 'Tính các luỹ thừa trước.'),
      P(`So sánh ${sup(2, 300)} và ${sup(3, 200)}.`, [`${sup(2, 300)} = (${sup(2, 3)})<sup>100</sup> = ${sup(8, 100)}.`, `${sup(3, 200)} = (${sup(3, 2)})<sup>100</sup> = ${sup(9, 100)}.`, `Vì 8 &lt; 9 nên ${sup(8, 100)} &lt; ${sup(9, 100)}, tức là ${sup(2, 300)} &lt; ${sup(3, 200)}.`], null, 'Đưa về cùng số mũ 100.'),
    ],
    cd3: [
      P('Tìm x biết: 125 − 5 · (x + 4) = 65', ['5 · (x + 4) = 125 − 65 = 60.', 'x + 4 = 60 : 5 = 12.', 'x = 8.'], ['8'], 'Coi 5 · (x + 4) là số trừ chưa biết.'),
      P('Tìm x biết: (x − 36) : 12 = 15', ['x − 36 = 15 · 12 = 180.', 'x = 180 + 36 = 216.'], ['216'], 'Số bị chia = thương × số chia.'),
      P(`Tìm x biết: 2x − 138 = ${sup(2, 3)} · ${sup(3, 2)}`, ['2x − 138 = 8 · 9 = 72.', '2x = 72 + 138 = 210.', 'x = 105.'], ['105']),
      P(`Tìm x biết: 10 + 2x = ${sup(4, 5)} : ${sup(4, 3)}`, [`${sup(4, 5)} : ${sup(4, 3)} = ${sup(4, 2)} = 16.`, '10 + 2x = 16 ⇒ 2x = 6.', 'x = 3.'], ['3'], 'Chia hai luỹ thừa cùng cơ số: trừ số mũ.'),
    ],
    cd4: [
      P('Tìm các chữ số a, b để số <span style="text-decoration:overline">1a5b</span> chia hết cho cả 2, 5 và 9. (gõ số tìm được)', ['Chia hết cho 2 và 5 ⇒ b = 0.', 'Chia hết cho 9 ⇒ 1 + a + 5 + 0 = 6 + a chia hết cho 9 ⇒ a = 3.', 'Số cần tìm là 1 350.'], ['1350'], 'Làm điều kiện chia hết cho 2 và 5 trước.'),
      P('Cho A = 12 + 15 + 21 + x (x ∈ ℕ). Tìm điều kiện của x để A chia hết cho 3.', ['12, 15, 21 đều chia hết cho 3.', 'Để A chia hết cho 3 thì x phải chia hết cho 3.', 'Vậy x ∈ {0; 3; 6; 9; …}.'], null, 'Tính chất chia hết của một tổng.'),
      P('Phân tích số 120 ra thừa số nguyên tố.', ['120 = 2 · 60 = 2 · 2 · 30 = 2 · 2 · 2 · 15 = 2 · 2 · 2 · 3 · 5.', `Vậy 120 = ${sup(2, 3)} · 3 · 5.`], null, 'Chia lần lượt cho các số nguyên tố từ nhỏ đến lớn.'),
      P('Tìm số tự nhiên n để n + 4 chia hết cho n + 1.', ['n + 4 = (n + 1) + 3.', 'Vì n + 1 chia hết cho n + 1 nên 3 phải chia hết cho n + 1.', 'n + 1 ∈ Ư(3) = {1; 3} ⇒ n ∈ {0; 2}.'], null, 'Tách n + 4 thành (n + 1) + 3.'),
    ],
    cd5: [
      P('Một lớp có 24 nam và 18 nữ. Chia thành các tổ sao cho số nam và số nữ ở mỗi tổ đều bằng nhau. Chia được nhiều nhất bao nhiêu tổ? Khi đó mỗi tổ có bao nhiêu nam, bao nhiêu nữ? (gõ số tổ)', ['Số tổ là ước chung của 24 và 18, lớn nhất nên là ƯCLN(24, 18).', `24 = ${sup(2, 3)} · 3; 18 = 2 · ${sup(3, 2)} ⇒ ƯCLN = 2 · 3 = 6.`, 'Chia được nhiều nhất 6 tổ; mỗi tổ có 24 : 6 = 4 nam và 18 : 6 = 3 nữ.'], ['6'], 'Từ “nhiều nhất” và “chia đều” ⇒ ƯCLN.'),
      P('Số học sinh khối 6 của một trường trong khoảng từ 200 đến 400. Khi xếp hàng 12, hàng 15, hàng 18 đều vừa đủ. Tính số học sinh khối 6.', ['Số học sinh là bội chung của 12, 15, 18.', `12 = ${sup(2, 2)} · 3; 15 = 3 · 5; 18 = 2 · ${sup(3, 2)} ⇒ BCNN = ${sup(2, 2)} · ${sup(3, 2)} · 5 = 180.`, 'BC = {0; 180; 360; 540; …}. Trong khoảng 200 – 400 có 360.', 'Vậy khối 6 có 360 học sinh.'], ['360'], 'Xếp hàng vừa đủ ⇒ bội chung.'),
      P('An và Bình cùng trực nhật hôm nay. Cứ 10 ngày An trực một lần, 12 ngày Bình trực một lần. Sau ít nhất bao nhiêu ngày hai bạn lại cùng trực?', ['Số ngày là BCNN(10, 12).', `10 = 2 · 5; 12 = ${sup(2, 2)} · 3 ⇒ BCNN = ${sup(2, 2)} · 3 · 5 = 60.`, 'Sau ít nhất 60 ngày.'], ['60']),
      P('Một mảnh vườn hình chữ nhật dài 112 m, rộng 40 m được chia thành các ô vuông bằng nhau, không thừa đất. Cạnh ô vuông lớn nhất là bao nhiêu mét? Có bao nhiêu ô? (gõ độ dài cạnh)', ['Cạnh ô vuông là ước chung của 112 và 40, lớn nhất ⇒ ƯCLN(112, 40).', `112 = ${sup(2, 4)} · 7; 40 = ${sup(2, 3)} · 5 ⇒ ƯCLN = 8.`, 'Cạnh lớn nhất 8 m; số ô: (112 : 8) · (40 : 8) = 14 · 5 = 70 ô.'], ['8']),
      P('Số học sinh của một trường trong khoảng 300 đến 400. Khi xếp hàng 12, 15, 18 đều thừa 5 em. Tính số học sinh.', ['Số học sinh bớt 5 là bội chung của 12, 15, 18; BCNN = 180.', 'Số học sinh bớt 5 nằm trong khoảng 295 – 395 ⇒ bằng 360.', 'Số học sinh: 360 + 5 = 365.'], ['365'], 'Bớt phần thừa rồi tìm bội chung.'),
    ],
    cd6: [
      P('Tính nhanh: (−125) + 37 + 125 + (−37) + 2 026', ['= [(−125) + 125] + [37 + (−37)] + 2 026', '= 0 + 0 + 2 026 = 2 026.'], ['2026'], 'Nhóm các số đối nhau.'),
      P('Tính: (−3) · (−4) · (−25) · 5', ['Có 3 thừa số âm (lẻ) ⇒ tích mang dấu “−”.', '3 · 4 · 25 · 5 = 1 500.', 'Kết quả: −1 500.'], ['-1500'], 'Đếm số thừa số âm.'),
      P('Tìm số nguyên x biết: 2x − (−15) = 7', ['2x + 15 = 7.', '2x = 7 − 15 = −8.', 'x = −4.'], ['-4']),
      P('Tìm số nguyên x biết: −12 − (x − 8) = 5', ['Bỏ ngoặc: −12 − x + 8 = 5.', '−x − 4 = 5 ⇒ −x = 9.', 'x = −9.'], ['-9'], 'Bỏ ngoặc có dấu “−” thì đổi dấu.'),
      P('Nhiệt độ buổi sáng ở Sa Pa là −5 °C, buổi trưa tăng 8 °C, buổi tối giảm 6 °C so với buổi trưa. Tính nhiệt độ buổi tối.', ['Buổi trưa: −5 + 8 = 3 °C.', 'Buổi tối: 3 − 6 = −3 °C.'], ['-3']),
    ],
    cd7: [
      P('Một mảnh vườn hình chữ nhật dài 20 m, rộng 12 m. a) Tính diện tích. b) Người ta rào xung quanh vườn, chừa một cổng rộng 2 m. Tính chiều dài hàng rào. (gõ đáp số câu b)', ['a) Diện tích: 20 · 12 = 240 (m²).', 'b) Chu vi: 2 · (20 + 12) = 64 (m).', 'Hàng rào: 64 − 2 = 62 (m).'], ['62'], 'Hàng rào = chu vi − cổng.'),
      P('Lát nền một căn phòng hình chữ nhật dài 6 m, rộng 4 m bằng gạch hình vuông cạnh 40 cm. Cần bao nhiêu viên gạch?', ['Diện tích nền: 6 · 4 = 24 m² = 240 000 cm².', 'Diện tích một viên gạch: 40 · 40 = 1 600 cm².', 'Số viên: 240 000 : 1 600 = 150 viên.'], ['150'], 'Đổi về cùng đơn vị cm².'),
      P('Một hình thoi có hai đường chéo dài 10 cm và 16 cm. Tính diện tích hình thoi.', ['S = (10 · 16) : 2 = 80 (cm²).'], ['80']),
      P('Một hình gồm một hình chữ nhật 8 cm × 5 cm ghép với một hình vuông cạnh 5 cm (chung một cạnh 5 cm). Tính diện tích hình đó.', ['Diện tích hình chữ nhật: 8 · 5 = 40 cm².', 'Diện tích hình vuông: 5 · 5 = 25 cm².', 'Tổng: 40 + 25 = 65 (cm²).'], ['65'], 'Chia hình thành các hình quen thuộc.'),
      P('Hình thang cân có hai đáy 8 cm và 14 cm, chiều cao 6 cm. Tính diện tích.', ['S = (8 + 14) · 6 : 2 = 66 (cm²).'], ['66']),
    ],
    cd8: [
      P('Trong các chữ cái in hoa H, A, N, O, E: chữ nào có trục đối xứng? chữ nào có tâm đối xứng?', ['Có trục đối xứng: H, A, O, E.', 'Có tâm đối xứng: H, N, O.'], null, 'Gấp đôi theo một đường; quay nửa vòng quanh một điểm.'),
      P('Hình vuông có mấy trục đối xứng? Hình chữ nhật (không phải hình vuông) có mấy trục đối xứng? (gõ số trục của hình vuông)', ['Hình vuông: 4 trục (2 đường chéo, 2 đường nối trung điểm cạnh đối).', 'Hình chữ nhật: 2 trục.'], ['4']),
    ],
    cd9: [
      P('Rút gọn phân số [[−18/24]] về phân số tối giản.', ['ƯCLN(18, 24) = 6.', '[[−18/24]] = [[−18 : 6/24 : 6]] = [[−3/4]].'], ['-3/4']),
      P('Tính nhanh: [[5/7]] · [[2/11]] + [[5/7]] · [[9/11]]', ['= [[5/7]] · ([[2/11]] + [[9/11]])', '= [[5/7]] · 1 = [[5/7]].'], ['5/7'], 'Đặt thừa số chung.'),
      P('Tính: [[3/4]] − [[1/2]] + [[5/8]]', ['Mẫu chung 8: [[6/8]] − [[4/8]] + [[5/8]].', '= [[7/8]].'], ['7/8']),
      P('Tìm x biết: x − [[2/3]] = [[1/6]]', ['x = [[1/6]] + [[2/3]] = [[1/6]] + [[4/6]].', 'x = [[5/6]].'], ['5/6']),
      P('Tính tổng: [[1/1·2]] + [[1/2·3]] + [[1/3·4]] + … + [[1/9·10]]', ['Ta có [[1/n·(n+1)]] = [[1/n]] − [[1/n+1]].', 'Tổng = (1 − [[1/2]]) + ([[1/2]] − [[1/3]]) + … + ([[1/9]] − [[1/10]]).', '= 1 − [[1/10]] = [[9/10]].'], ['9/10'], 'Tách mỗi phân số thành hiệu hai phân số.'),
    ],
    cd10: [
      P('Lớp 6A có 40 học sinh: số học sinh giỏi chiếm [[1/4]], số học sinh khá chiếm [[3/5]] số học sinh cả lớp, còn lại là học sinh trung bình. Tính số học sinh mỗi loại. (gõ số học sinh trung bình)', ['Giỏi: 40 · [[1/4]] = 10 học sinh.', 'Khá: 40 · [[3/5]] = 24 học sinh.', 'Trung bình: 40 − 10 − 24 = 6 học sinh.'], ['6']),
      P('Mẹ có 1 200 000 đồng. Mẹ dùng [[1/3]] số tiền mua sách, [[1/4]] số tiền còn lại mua vở. Mẹ còn lại bao nhiêu tiền?', ['Mua sách: 1 200 000 · [[1/3]] = 400 000 đồng.', 'Còn: 800 000 đồng; mua vở: 800 000 · [[1/4]] = 200 000 đồng.', 'Còn lại: 800 000 − 200 000 = 600 000 đồng.'], ['600000'], 'Chú ý: [[1/4]] của số tiền CÒN LẠI.'),
      P('[[2/5]] số sách của một thư viện là 120 cuốn. Thư viện có bao nhiêu cuốn sách?', ['Số sách: 120 : [[2/5]] = 120 · [[5/2]] = 300 cuốn.'], ['300']),
      P('An đọc một cuốn truyện trong 3 ngày: ngày thứ nhất đọc [[1/3]] số trang, ngày thứ hai đọc [[5/8]] số trang còn lại, ngày thứ ba đọc nốt 30 trang. Cuốn truyện có bao nhiêu trang?', ['Sau ngày 1 còn 1 − [[1/3]] = [[2/3]] số trang.', 'Ngày 2 đọc [[5/8]] · [[2/3]] = [[5/12]] số trang.', 'Ngày 3 đọc 1 − [[1/3]] − [[5/12]] = [[1/4]] số trang, ứng với 30 trang.', 'Cuốn truyện có 30 : [[1/4]] = 120 trang.'], ['120'], 'Tìm xem 30 trang ứng với mấy phần cuốn truyện.'),
    ],
    cd11: [
      P('Tính: 12,5 · 4 − 3,75', ['12,5 · 4 = 50.', '50 − 3,75 = 46,25.'], ['46,25', '46.25']),
      P('Tính nhanh: 2,5 · 7,3 · 4', ['= (2,5 · 4) · 7,3', '= 10 · 7,3 = 73.'], ['73']),
      P('Một chiếc cặp giá 250 000 đồng được giảm giá 20%. Tính giá chiếc cặp sau khi giảm.', ['Số tiền giảm: 250 000 · 20 : 100 = 50 000 đồng.', 'Giá sau giảm: 250 000 − 50 000 = 200 000 đồng.'], ['200000']),
      P('Lớp có 40 học sinh, trong đó 35% thích bóng đá. Có bao nhiêu học sinh thích bóng đá?', ['40 · 35 : 100 = 14 học sinh.'], ['14']),
      P('Bác An gửi tiết kiệm 10 000 000 đồng, lãi suất 6% một năm. Sau 1 năm bác nhận được cả gốc lẫn lãi bao nhiêu tiền?', ['Tiền lãi: 10 000 000 · 6 : 100 = 600 000 đồng.', 'Cả gốc lẫn lãi: 10 600 000 đồng.'], ['10600000']),
    ],
    cd12: [
      P('Trên tia Ox lấy hai điểm A, B sao cho OA = 3 cm, OB = 7 cm. a) Tính AB. b) Gọi M là trung điểm của AB. Tính OM. (gõ OM)', ['A, B cùng nằm trên tia Ox và OA &lt; OB nên A nằm giữa O và B.', 'AB = OB − OA = 7 − 3 = 4 (cm).', 'M là trung điểm AB nên AM = 4 : 2 = 2 (cm).', 'OM = OA + AM = 3 + 2 = 5 (cm).'], ['5'], 'Xác định điểm nào nằm giữa trước.'),
      P('Cho đoạn thẳng AB = 10 cm, điểm C nằm giữa A và B sao cho AC = 4 cm. Gọi M là trung điểm AC, N là trung điểm CB. Tính MN.', ['CB = AB − AC = 10 − 4 = 6 (cm).', 'MC = AC : 2 = 2 cm; CN = CB : 2 = 3 cm.', 'MN = MC + CN = 2 + 3 = 5 (cm).'], ['5']),
      P('Lúc 2 giờ đúng, kim giờ và kim phút tạo thành góc bao nhiêu độ?', ['Mặt đồng hồ chia 12 phần, mỗi phần 360° : 12 = 30°.', 'Lúc 2 giờ, hai kim cách nhau 2 phần: 2 · 30° = 60°.'], ['60'], 'Mỗi khoảng giữa hai số trên mặt đồng hồ là 30°.'),
      P('Cho 5 điểm, không có ba điểm nào thẳng hàng. Vẽ được bao nhiêu đường thẳng đi qua hai trong 5 điểm đó?', ['Mỗi điểm nối với 4 điểm còn lại: 5 · 4 = 20.', 'Mỗi đường thẳng được đếm hai lần: 20 : 2 = 10 đường thẳng.'], ['10']),
    ],
    cd13: [
      P('Điểm kiểm tra Toán của lớp 6B: điểm 5: 2 bạn; điểm 6: 4 bạn; điểm 7: 8 bạn; điểm 8: 10 bạn; điểm 9: 5 bạn; điểm 10: 1 bạn. a) Lớp có bao nhiêu học sinh? b) Có bao nhiêu bạn đạt từ 8 điểm trở lên? (gõ đáp số câu a)', ['a) 2 + 4 + 8 + 10 + 5 + 1 = 30 học sinh.', 'b) 10 + 5 + 1 = 16 bạn.'], ['30']),
      P('Gieo một con xúc xắc 50 lần, mặt 6 chấm xuất hiện 8 lần. Tính xác suất thực nghiệm xuất hiện mặt 6 chấm.', ['Xác suất thực nghiệm = 8 : 50 = [[8/50]] = [[4/25]].'], ['4/25', '0,16', '0.16']),
      P('Lấy bóng từ một hộp 40 lần: bóng xanh 12 lần, bóng đỏ 20 lần, bóng vàng 8 lần. Tính xác suất thực nghiệm lấy được bóng đỏ.', ['[[20/40]] = [[1/2]].'], ['1/2', '0,5', '0.5']),
    ],
  };

  const cd = (n, title, theory, mix, quiz, more) => Object.assign({ id: 'cd' + n, title: `Chuyên đề ${n}. ${title}`, sum: 'Trắc nghiệm đề mới mỗi lần · có bài tự luận', theory, gen: 'mix', mix, n: 10, quiz: quiz || [], tl: TL['cd' + n] }, more || {});
  const de = (id, title, mix, picks, note) => ({ id, title, sum: 'Trắc nghiệm 12 câu + tự luận', theory: `<p>${note}</p><div class="tip"><p>Làm như thi thật: phần <b>Trắc nghiệm</b> trên web, phần <b>Tự luận</b> làm ra giấy trong khoảng 45 – 60 phút, xong mới xem lời giải.</p></div>`, gen: 'mix', mix, n: 12, tl: picks.map(([k, i], j) => Object.assign({}, TL[k][i], { diem: [1.5, 1.5, 1.5, 1, 1][j] || 1 })) });

  window.CD_TOAN6 = [
    { title: 'Chuyên đề ôn thi Học kì 1', lessons: [
      cd(1, 'Tập hợp. Dãy số cách đều', `<div class="note"><ul><li>Số phần tử của tập các số tự nhiên từ a đến b: <b>b − a + 1</b>.</li><li>Dãy cách đều: <b>Số số hạng = (số cuối − số đầu) : khoảng cách + 1</b>.</li><li><b>Tổng = (số đầu + số cuối) × số số hạng : 2</b>.</li></ul></div><div class="vd"><p>1 + 3 + 5 + … + 99: có (99 − 1) : 2 + 1 = 50 số hạng; tổng = (1 + 99) · 50 : 2 = 2 500.</p></div>`, ['daySo', 'daySo', 'n6thutu']),
      cd(2, 'Luỹ thừa. Thứ tự thực hiện phép tính (nâng cao)', `<div class="note"><ul><li>${sup('a', 'm')} · ${sup('a', 'n')} = ${sup('a', 'm+n')}; ${sup('a', 'm')} : ${sup('a', 'n')} = ${sup('a', 'm−n')}; (${sup('a', 'm')})<sup>n</sup> = ${sup('a', 'm·n')}.</li><li>Tìm x ở số mũ: đưa hai vế về cùng cơ số.</li><li>So sánh luỹ thừa: đưa về cùng cơ số hoặc cùng số mũ.</li></ul></div><div class="vd"><p>${sup(2, 30)} và ${sup(3, 20)}: ${sup(2, 30)} = ${sup(8, 10)}, ${sup(3, 20)} = ${sup(9, 10)} ⇒ ${sup(2, 30)} &lt; ${sup(3, 20)}.</p></div>`, ['luythua', 'timXLT', 'soSanhLT', 'bieuthuc']),
      cd(3, 'Tìm x (số tự nhiên)', `<div class="note"><p>Đi từ ngoài vào trong: coi cả biểu thức chứa x là một số chưa biết, dùng quy tắc tìm số hạng, số bị trừ, số trừ, thừa số, số bị chia, số chia.</p></div><div class="vd"><p>3 · (x + 2) = 27 ⇒ x + 2 = 9 ⇒ x = 7.</p></div><div class="warn"><p>Tính các luỹ thừa, phép tính không chứa x trước.</p></div>`, ['timX6', 'timX6', 'n6tinhnhanh']),
      cd(4, 'Dấu hiệu chia hết. Số nguyên tố', `<div class="note"><ul><li>Chia hết cho 2: tận cùng 0, 2, 4, 6, 8 · cho 5: tận cùng 0, 5 · cho 3 (9): tổng chữ số chia hết cho 3 (9).</li><li>Tìm chữ số *: làm điều kiện 2, 5 (chữ số tận cùng) trước, rồi đến 3, 9.</li><li>Nếu mọi số hạng chia hết cho m thì tổng chia hết cho m.</li></ul></div>`, ['chuSo', 'dauhieu', 'phantich', 'chiahet']),
      cd(5, 'ƯCLN – BCNN: bài toán thực tế', `<div class="note"><ul><li>Dấu hiệu <b>ƯCLN</b>: chia đều nhiều đối tượng thành <b>nhiều phần nhất</b>; cắt thành các phần <b>lớn nhất</b> bằng nhau.</li><li>Dấu hiệu <b>BCNN</b>: xếp hàng 2, 3, 4… đều vừa đủ; hai sự việc lặp lại, hỏi <b>sau ít nhất</b> bao lâu trùng nhau.</li><li>Xếp hàng <b>thừa r</b> em: số học sinh − r là bội chung. <b>Thiếu r</b> em: số học sinh + r là bội chung.</li></ul></div>`, ['ucln', 'bcnn', 'xepHang', 'chiaNhom']),
      cd(6, 'Số nguyên: tính nhanh, tìm x, quy tắc dấu ngoặc', `<div class="note"><ul><li>Nhóm các số đối nhau, các số tròn chục, tròn trăm.</li><li>Bỏ ngoặc có dấu “−” đằng trước: đổi dấu mọi số hạng trong ngoặc.</li><li>Tích có chẵn thừa số âm ⇒ dương; lẻ thừa số âm ⇒ âm.</li></ul></div>`, ['tinhNhanhZ', 'timXZ', 'dauNgoac', 'songuyen', 'sosanhZ']),
      cd(7, 'Chu vi, diện tích hình ghép và bài toán thực tế', `<div class="note"><ul><li>Hình ghép: chia thành các hình chữ nhật, hình vuông, tam giác, hình thang… rồi cộng (hoặc lấy hình lớn trừ phần khuyết).</li><li>Bài toán lát gạch: số viên = diện tích nền : diện tích một viên (cùng đơn vị).</li><li>Bài toán rào vườn: chiều dài rào = chu vi − phần cổng.</li></ul></div>`, ['dienTichTG', 'chuvi', 'dientich']),
      cd(8, 'Tính đối xứng của hình phẳng', `<div class="note"><p>Trục đối xứng: gấp đôi hai nửa trùng khít. Tâm đối xứng: quay nửa vòng (180°) hình trùng với chính nó.</p></div>`, ['hinhDX'], [{ q: 'Chữ cái nào có tâm đối xứng?', opts: ['N', 'A', 'E', 'T'], a: 0, e: 'Quay chữ N nửa vòng vẫn được chữ N.' }, { q: 'Chữ cái nào có trục đối xứng thẳng đứng?', opts: ['A', 'N', 'S', 'Z'], a: 0, e: 'Chữ A.' }]),
      de('de1', 'Đề ôn thi giữa học kì 1', ['luythua', 'n6tinhnhanh', 'timX6', 'dauhieu', 'chuSo', 'phantich', 'daySo', 'timXLT'], [['cd2', 0], ['cd3', 0], ['cd4', 0], ['cd5', 0], ['cd1', 2]], 'Phạm vi: Chương I (Tập hợp các số tự nhiên) và Chương II (Tính chia hết).'),
      de('de2', 'Đề ôn thi cuối học kì 1', ['timX6', 'ucln', 'bcnn', 'xepHang', 'tinhNhanhZ', 'timXZ', 'songuyen', 'dienTichTG', 'hinhDX', 'chuSo'], [['cd5', 1], ['cd6', 2], ['cd6', 0], ['cd7', 1], ['cd2', 4]], 'Phạm vi: Chương I đến Chương V (số tự nhiên, chia hết, số nguyên, hình học trực quan, đối xứng).'),
    ] },
    { title: 'Chuyên đề ôn thi Học kì 2', lessons: [
      cd(9, 'Phân số: rút gọn, so sánh, tính nhanh, tìm x', `<div class="note"><ul><li>Rút gọn: chia tử và mẫu cho ƯCLN.</li><li>So sánh: quy đồng mẫu dương rồi so sánh tử.</li><li>Tính nhanh: dùng tính chất phân phối a · b + a · c = a · (b + c).</li><li>Tổng dạng [[1/n·(n+1)]] = [[1/n]] − [[1/n+1]].</li></ul></div>`, ['rutgon', 'sosanhPS', 'phanso', 'nhanchiaPS', 'timXPS', 'honSo']),
      cd(10, 'Hai bài toán về phân số (thực tế)', `<div class="note"><ul><li>Tìm [[m/n]] của số b: b · [[m/n]].</li><li>Tìm một số biết [[m/n]] của nó bằng a: a : [[m/n]].</li><li>Chú ý “phân số của số còn lại”: tính phần còn lại trước.</li></ul></div>`, ['gtps', 'psThucTe', 'psThucTe']),
      cd(11, 'Số thập phân. Tỉ số phần trăm trong thực tế', `<div class="note"><ul><li>Giảm giá p%: giá mới = giá cũ · (100 − p)%.</li><li>Lãi suất r% một năm: tiền lãi = tiền gửi · r%.</li><li>Tỉ số phần trăm của a và b: a : b · 100%.</li></ul></div>`, ['thapphan', 'lamtronTP', 'phantram', 'giamGia']),
      cd(12, 'Đoạn thẳng, trung điểm, góc', `<div class="note"><ul><li>M nằm giữa A và B ⇒ AM + MB = AB.</li><li>Trên tia Ox có OA &lt; OB ⇒ A nằm giữa O và B, AB = OB − OA.</li><li>M là trung điểm AB ⇒ MA = MB = AB : 2.</li><li>n điểm, không có 3 điểm nào thẳng hàng: vẽ được n · (n − 1) : 2 đường thẳng.</li></ul></div>`, ['doanthang', 'goc']),
      cd(13, 'Thống kê và xác suất thực nghiệm', `<div class="note"><p>Đọc bảng thống kê, biểu đồ tranh, biểu đồ cột; xác suất thực nghiệm = số lần sự kiện xảy ra : tổng số lần thực hiện.</p></div>`, ['xstn'], [{ q: 'Biểu đồ cột: Thứ Hai bán 20 cái bánh, Thứ Ba 35, Thứ Tư 25. Ngày nào bán nhiều nhất?', opts: ['Thứ Ba', 'Thứ Hai', 'Thứ Tư'], a: 0, e: '35 cái.' }, { q: 'Theo số liệu trên, ba ngày bán được tất cả bao nhiêu cái bánh?', a: ['80'], e: '20 + 35 + 25 = 80.' }]),
      de('de3', 'Đề ôn thi giữa học kì 2', ['rutgon', 'sosanhPS', 'phanso', 'nhanchiaPS', 'gtps', 'thapphan', 'phantram'], [['cd9', 1], ['cd9', 3], ['cd10', 0], ['cd11', 2]], 'Phạm vi: Chương VI (Phân số) và Chương VII (Số thập phân).'),
      de('de4', 'Đề ôn thi cuối học kì 2', ['phanso', 'timXPS', 'psThucTe', 'giamGia', 'lamtronTP', 'doanthang', 'goc', 'xstn'], [['cd10', 3], ['cd11', 4], ['cd12', 1], ['cd13', 1], ['cd9', 4]], 'Phạm vi: Chương VI đến Chương IX (phân số, số thập phân, hình học cơ bản, dữ liệu và xác suất).'),
    ] },
  ];
})();
