/* =====================================================================
   NỘI DUNG LỚP 6 — Lê Quang Đạt — bộ sách Kết nối tri thức với cuộc sống
   Cách viết giống file data-lop3.js (xem chú thích ở đầu file đó).
   Danh sách bài Toán 6 theo đúng mục lục SGK Toán 6 tập 1 và tập 2.
   ===================================================================== */
window.HOCTAP = window.HOCTAP || { students: [] };
(function () {
  const W = (en, vi) => `<button class="say" data-say="${en}">${en}${vi ? ` <span class="muted">– ${vi}</span>` : ''}</button>`;
  const words = list => `<div class="words">${list.map(([e, v]) => W(e, v)).join('')}</div>`;
  const listen = en => `<button class="say" data-say="${en}">Bấm để nghe</button>`;
  const soon = (id, title) => ({ id, title });
  const sup = (a, n) => `${a}<sup>${n}</sup>`;

  /* ------------------------------- TOÁN 6 ------------------------------- */
  const toanCu = {
    id: 'toan', name: 'Toán', tt: 'Toán', color: 'b', ill: 'toan6', book: 'Toán 6 · Kết nối tri thức',
    chapters: [
      { title: 'Chương I. Tập hợp các số tự nhiên', lessons: [
        { id: 'b1', title: 'Bài 1. Tập hợp',
          theory: `<p>Tập hợp là một nhóm các đối tượng (gọi là <b>phần tử</b>). Đặt tên tập hợp bằng chữ in hoa: A, B, C…</p>
          <div class="note"><ul><li>x là phần tử của A: <b>x ∈ A</b> (đọc: x thuộc A).</li><li>y không là phần tử của A: <b>y ∉ A</b> (đọc: y không thuộc A).</li></ul></div>
          <h3>Hai cách mô tả tập hợp</h3><ol><li><b>Liệt kê</b> các phần tử: A = {0; 1; 2; 3; 4}.</li><li>Nêu <b>dấu hiệu đặc trưng</b>: A = {x ∈ ℕ | x &lt; 5}.</li></ol>
          <div class="tip"><p>ℕ = {0; 1; 2; 3; …} là tập hợp các số tự nhiên. ℕ* là tập hợp các số tự nhiên <b>khác 0</b>.</p></div>`,
          quiz: [
            { q: 'Cho A = {x ∈ ℕ | x &lt; 5}. Tập A có bao nhiêu phần tử?', a: ['5'], e: 'A = {0; 1; 2; 3; 4}, có 5 phần tử (nhớ tính cả số 0).' },
            { q: 'Cho B = {2; 4; 6; 8}. Khẳng định nào đúng?', opts: ['4 ∈ B', '5 ∈ B', '8 ∉ B', '2 ∉ B'], a: 0, e: '4 là phần tử của B.' },
            { q: 'Số 0 có thuộc ℕ* không?', opts: ['Không', 'Có'], a: 0, keep: true, e: 'ℕ* là tập các số tự nhiên khác 0.' },
            { q: 'Tập hợp các chữ cái trong từ “TOAN” có bao nhiêu phần tử?', a: ['4'], e: '{T; O; A; N} có 4 phần tử.' },
            { q: 'Tập hợp các chữ cái trong từ “HOCHOC” có bao nhiêu phần tử?', a: ['3'], e: '{H; O; C}. Mỗi phần tử chỉ viết một lần.' },
            { q: 'Cách viết nào đúng cho C = {x ∈ ℕ | 3 &lt; x ≤ 7}?', opts: ['C = {4; 5; 6; 7}', 'C = {3; 4; 5; 6; 7}', 'C = {4; 5; 6}'], a: 0, e: 'x lớn hơn 3 và nhỏ hơn hoặc bằng 7.' },
          ] },
        { id: 'b2', title: 'Bài 2. Cách ghi số tự nhiên',
          theory: `<p>Hệ thập phân dùng 10 chữ số 0; 1; 2; …; 9. Cứ 10 đơn vị ở một hàng thì bằng 1 đơn vị ở hàng liền trước.</p>
          <div class="vd"><p>Trong số 3 572: chữ số 5 ở hàng trăm, có giá trị là <b>500</b>.</p><p>abc‾ = a × 100 + b × 10 + c (a ≠ 0).</p></div>
          <h3>Số La Mã</h3><div class="tw"><table class="t"><tr><th>I</th><th>V</th><th>X</th><th>IV</th><th>IX</th><th>XIV</th><th>XIX</th><th>XXIV</th><th>XXX</th></tr><tr><td>1</td><td>5</td><td>10</td><td>4</td><td>9</td><td>14</td><td>19</td><td>24</td><td>30</td></tr></table></div>`,
          quiz: [
            { q: 'Trong số 4 739, giá trị của chữ số 7 là:', opts: ['700', '7', '70', '7 000'], a: 0, e: '7 ở hàng trăm nên có giá trị 700.' },
            { q: 'Số XIX là số mấy?', a: ['19'], e: 'X + IX = 10 + 9 = 19.' },
            { q: 'Số 24 viết bằng số La Mã là:', opts: ['XXIV', 'XXVI', 'IVXX', 'XXIIII'], a: 0, e: 'XX + IV = 24.' },
            { q: 'Số tự nhiên nhỏ nhất có 4 chữ số khác nhau là số nào?', a: ['1023', '1 023'], e: 'Chữ số đầu nhỏ nhất khác 0 là 1, sau đó 0, 2, 3.' },
            { q: 'Số XXVIII là số mấy?', a: ['28'], e: '10 + 10 + 5 + 1 + 1 + 1 = 28.' },
          ] },
        soon('b3', 'Bài 3. Thứ tự trong tập hợp các số tự nhiên'),
        soon('b4', 'Bài 4. Phép cộng và phép trừ số tự nhiên'),
        { id: 'b5', title: 'Bài 5. Phép nhân và phép chia số tự nhiên',
          theory: `<div class="note"><p>Tính chất của phép nhân: giao hoán a · b = b · a; kết hợp (a · b) · c = a · (b · c); phân phối a · (b + c) = a · b + a · c.</p></div>
          <h3>Phép chia có dư</h3><p class="big">a = b · q + r &nbsp;(0 &lt; r &lt; b)</p><p>a là số bị chia, b là số chia, q là thương, r là số dư. Nếu r = 0 thì a chia hết cho b.</p>
          <div class="tip"><p>Tính nhanh: 25 · 4 = 100; 125 · 8 = 1 000. Ví dụ 25 · 37 · 4 = (25 · 4) · 37 = 3 700.</p></div>`,
          quiz: [
            { q: 'Tính nhanh: 25 · 37 · 4 = ?', a: ['3700', '3 700'], e: '(25 · 4) · 37 = 100 · 37 = 3 700.' },
            { q: 'Tính nhanh: 47 · 36 + 47 · 64 = ?', a: ['4700', '4 700'], e: '47 · (36 + 64) = 47 · 100 = 4 700.' },
            { q: 'Chia 47 cho 5 được thương là 9. Số dư là bao nhiêu?', a: ['2'], e: '47 = 5 · 9 + 2.' },
            { q: 'Trong phép chia cho 6, số dư có thể là:', opts: ['0; 1; 2; 3; 4; 5', '1; 2; 3; 4; 5; 6', '0; 1; 2; 3; 4; 5; 6'], a: 0, e: 'Số dư luôn nhỏ hơn số chia.' },
            { q: 'Tính nhanh: 125 · 16 = ?', a: ['2000', '2 000'], e: '125 · 8 · 2 = 1 000 · 2 = 2 000.' },
          ] },
        { id: 'b6', title: 'Bài 6. Luỹ thừa với số mũ tự nhiên', sum: 'Mỗi lần làm là một đề mới', gen: 'luythua', n: 10,
          theory: `<p>Luỹ thừa bậc n của a là tích của n thừa số a: <b>${sup('a', 'n')} = a · a · … · a</b> (n thừa số). a là <b>cơ số</b>, n là <b>số mũ</b>.</p>
          <div class="vd"><p>${sup(2, 3)} = 2 · 2 · 2 = 8 &nbsp;·&nbsp; ${sup(5, 2)} = 25 (đọc: 5 bình phương) &nbsp;·&nbsp; ${sup(3, 3)} = 27 (3 lập phương)</p></div>
          <div class="note"><p class="big">${sup('a', 'm')} · ${sup('a', 'n')} = ${sup('a', 'm + n')}</p><p class="big">${sup('a', 'm')} : ${sup('a', 'n')} = ${sup('a', 'm − n')} &nbsp;(a ≠ 0, m ≥ n)</p><p>Quy ước: ${sup('a', 1)} = a; ${sup('a', 0)} = 1 (a ≠ 0).</p></div>` },
        { id: 'b7', title: 'Bài 7. Thứ tự thực hiện các phép tính',
          theory: `<div class="note"><p><b>Không có ngoặc:</b> Luỹ thừa → Nhân, chia → Cộng, trừ. Cùng bậc thì làm từ trái sang phải.</p><p><b>Có ngoặc:</b> ( ) → [ ] → { }.</p></div>
          <div class="vd"><p>3 + 2 · ${sup(4, 2)} = 3 + 2 · 16 = 3 + 32 = <b>35</b></p><p>[20 − (4 + 2) · 3] : 2 = [20 − 18] : 2 = <b>1</b></p></div>
          <div class="warn"><p>Lỗi hay gặp: tính 3 + 2 trước rồi mới nhân. Phải nhân trước, cộng sau!</p></div>`,
          quiz: [
            { q: '3 + 2 · 5 = ?', a: ['13'], e: 'Nhân trước: 2 · 5 = 10, rồi 3 + 10 = 13.' },
            { q: `20 − ${sup(3, 2)} · 2 = ?`, a: ['2'], e: `${sup(3, 2)} = 9; 9 · 2 = 18; 20 − 18 = 2.` },
            { q: '[20 − (4 + 2) · 3] : 2 = ?', a: ['1'], e: '(4 + 2) = 6; 6 · 3 = 18; 20 − 18 = 2; 2 : 2 = 1.' },
            { q: '60 : 5 · 2 = ?', a: ['24'], e: 'Cùng bậc, từ trái sang phải: 60 : 5 = 12; 12 · 2 = 24.' },
            { q: `${sup(2, 3)} + ${sup(3, 2)} = ?`, a: ['17'], e: '8 + 9 = 17.' },
            { q: '100 − {5 · [12 − (3 + 5)]} = ?', a: ['80'], e: '(3 + 5) = 8; [12 − 8] = 4; 5 · 4 = 20; 100 − 20 = 80.' },
          ] },
      ] },
      { title: 'Chương II. Tính chia hết trong tập hợp các số tự nhiên', lessons: [
        soon('b8', 'Bài 8. Quan hệ chia hết và tính chất'),
        { id: 'b9', title: 'Bài 9. Dấu hiệu chia hết', sum: 'Mỗi lần làm là một đề mới', gen: 'dauhieu', n: 10,
          theory: `<div class="tw"><table class="t"><tr><th>Chia hết cho</th><th>Dấu hiệu</th></tr>
          <tr><td>2</td><td>Chữ số tận cùng là 0; 2; 4; 6; 8</td></tr><tr><td>5</td><td>Chữ số tận cùng là 0 hoặc 5</td></tr>
          <tr><td>3</td><td>Tổng các chữ số chia hết cho 3</td></tr><tr><td>9</td><td>Tổng các chữ số chia hết cho 9</td></tr></table></div>
          <div class="tip"><p>Chia hết cho cả 2 và 5 ⇔ tận cùng là 0. Số chia hết cho 9 thì chắc chắn chia hết cho 3 (nhưng ngược lại chưa chắc).</p></div>` },
        { id: 'b10', title: 'Bài 10. Số nguyên tố',
          theory: `<div class="note"><ul><li><b>Số nguyên tố</b> là số tự nhiên lớn hơn 1, chỉ có hai ước là 1 và chính nó.</li><li><b>Hợp số</b> là số tự nhiên lớn hơn 1, có nhiều hơn hai ước.</li><li>Số 0 và số 1 <b>không</b> là số nguyên tố, cũng <b>không</b> là hợp số.</li></ul></div>
          <p>Các số nguyên tố nhỏ hơn 30: 2; 3; 5; 7; 11; 13; 17; 19; 23; 29. Số 2 là số nguyên tố chẵn duy nhất.</p>
          <h3>Phân tích ra thừa số nguyên tố</h3><div class="vd"><p>60 = 2 · 30 = 2 · 2 · 15 = 2 · 2 · 3 · 5 = <b>${sup(2, 2)} · 3 · 5</b></p></div>`,
          quiz: [
            { q: 'Số nào là số nguyên tố?', opts: ['17', '21', '1', '27'], a: 0, e: '17 chỉ có ước 1 và 17. 21 = 3 · 7, 27 = 3 · 9.' },
            { q: 'Số 1 là:', opts: ['Không là số nguyên tố, không là hợp số', 'Số nguyên tố', 'Hợp số'], a: 0, e: 'Số nguyên tố và hợp số đều phải lớn hơn 1.' },
            { q: 'Số nguyên tố chẵn duy nhất là số nào?', a: ['2'], e: 'Các số chẵn khác 2 đều chia hết cho 2 nên là hợp số.' },
            { q: 'Phân tích 60 ra thừa số nguyên tố:', opts: [`${sup(2, 2)} · 3 · 5`, '2 · 3 · 10', '4 · 15', `${sup(2, 2)} · 15`], a: 0, e: '60 = 2 · 2 · 3 · 5. Các thừa số phải đều là số nguyên tố.' },
            { q: 'Có bao nhiêu số nguyên tố nhỏ hơn 20?', a: ['8'], e: '2; 3; 5; 7; 11; 13; 17; 19.' },
          ] },
        { id: 'b11', title: 'Bài 11. Ước chung. Ước chung lớn nhất',
          theory: `<p><b>ƯCLN(a, b)</b> là số lớn nhất trong tập hợp các ước chung của a và b.</p>
          <div class="note"><p>Cách tìm ƯCLN bằng phân tích ra thừa số nguyên tố:</p><ol><li>Phân tích mỗi số ra thừa số nguyên tố.</li><li>Chọn các thừa số nguyên tố <b>chung</b>.</li><li>Lấy mỗi thừa số với <b>số mũ nhỏ nhất</b>, rồi nhân lại.</li></ol></div>
          <div class="vd"><p>24 = ${sup(2, 3)} · 3; 36 = ${sup(2, 2)} · ${sup(3, 2)} → ƯCLN(24, 36) = ${sup(2, 2)} · 3 = <b>12</b>.</p></div>
          <div class="tip"><p>Nếu ƯCLN(a, b) = 1 thì a và b là hai số <b>nguyên tố cùng nhau</b>. Rút gọn phân số về tối giản: chia tử và mẫu cho ƯCLN.</p></div>`,
          quiz: [
            { q: 'ƯCLN(24, 36) = ?', a: ['12'], e: '24 = 2³ · 3; 36 = 2² · 3² → 2² · 3 = 12.' },
            { q: 'ƯCLN(18, 30) = ?', a: ['6'], e: '18 = 2 · 3²; 30 = 2 · 3 · 5 → 2 · 3 = 6.' },
            { q: 'ƯCLN(8, 15) = ?', a: ['1'], e: '8 và 15 không có ước chung nào khác 1: hai số nguyên tố cùng nhau.' },
            { q: 'Cô có 24 bút và 36 quyển vở, muốn chia đều vào các phần quà (cả bút và vở). Có thể chia nhiều nhất bao nhiêu phần quà?', a: ['12'], e: 'Số phần quà lớn nhất = ƯCLN(24, 36) = 12.' },
            { q: 'Ước chung của 12 và 18 là:', opts: ['1; 2; 3; 6', '1; 2; 3; 4; 6', '6; 12; 18', '1; 6'], a: 0, e: 'Các ước chung là các ước của ƯCLN(12, 18) = 6.' },
          ] },
        { id: 'b12', title: 'Bài 12. Bội chung. Bội chung nhỏ nhất',
          theory: `<p><b>BCNN(a, b)</b> là số nhỏ nhất khác 0 trong tập hợp các bội chung của a và b.</p>
          <div class="note"><p>Cách tìm BCNN:</p><ol><li>Phân tích mỗi số ra thừa số nguyên tố.</li><li>Chọn các thừa số nguyên tố <b>chung và riêng</b>.</li><li>Lấy mỗi thừa số với <b>số mũ lớn nhất</b>, rồi nhân lại.</li></ol></div>
          <div class="vd"><p>12 = ${sup(2, 2)} · 3; 18 = 2 · ${sup(3, 2)} → BCNN(12, 18) = ${sup(2, 2)} · ${sup(3, 2)} = <b>36</b>.</p></div>
          <div class="tip"><p>Quy đồng mẫu các phân số: mẫu chung nhỏ nhất là BCNN của các mẫu.</p></div>`,
          quiz: [
            { q: 'BCNN(6, 8) = ?', a: ['24'], e: '6 = 2 · 3; 8 = 2³ → 2³ · 3 = 24.' },
            { q: 'BCNN(12, 18) = ?', a: ['36'], e: '2² · 3² = 36.' },
            { q: 'BCNN(5, 7) = ?', a: ['35'], e: 'Hai số nguyên tố cùng nhau thì BCNN là tích: 5 · 7 = 35.' },
            { q: 'Hai bạn trực nhật: An cứ 4 ngày trực một lần, Bình cứ 6 ngày trực một lần. Hôm nay cả hai cùng trực. Sau ít nhất bao nhiêu ngày nữa hai bạn lại cùng trực?', a: ['12'], e: 'BCNN(4, 6) = 12.' },
            { q: 'Bội chung nhỏ nhất của 9 và 3 là:', opts: ['9', '3', '27', '1'], a: 0, e: '9 chia hết cho 3 nên BCNN(9, 3) = 9.' },
          ] },
      ] },
      { title: 'Chương III. Số nguyên', lessons: [
        { id: 'b13', title: 'Bài 13. Tập hợp các số nguyên',
          theory: `<p>Tập hợp các số nguyên: <b>ℤ = {…; −3; −2; −1; 0; 1; 2; 3; …}</b>.</p>
          <ul><li>Số nguyên dương: 1; 2; 3; … · Số nguyên âm: −1; −2; −3; …</li><li>Số 0 không là số nguyên dương, cũng không là số nguyên âm.</li></ul>
          <div class="note"><p>Trên trục số (nằm ngang), điểm bên trái biểu diễn số nhỏ hơn. Mọi số nguyên âm đều nhỏ hơn 0 và nhỏ hơn mọi số nguyên dương.</p><p><b>Số đối</b> của a là −a. Số đối của −5 là 5; số đối của 0 là 0.</p></div>
          <div class="vd"><p>Nhiệt độ 3 độ dưới 0 °C viết là −3 °C. Độ cao 50 m dưới mực nước biển viết là −50 m.</p></div>`,
          quiz: [
            { q: 'Số đối của −7 là số nào?', a: ['7'], e: 'Số đối của −7 là 7.' },
            { q: 'Chọn khẳng định đúng:', opts: ['−5 &lt; −2', '−5 &gt; −2', '−5 = −2'], a: 0, keep: true, e: 'Trên trục số, −5 nằm bên trái −2.' },
            { q: 'Số nguyên lớn nhất trong các số −10; −3; −8; −1 là:', opts: ['−1', '−10', '−3', '−8'], a: 0, e: '−1 gần 0 nhất nên lớn nhất.' },
            { q: 'Nhiệt độ ở Sa Pa sáng nay là 2 độ dưới 0 °C. Viết là:', opts: ['−2 °C', '2 °C', '−20 °C'], a: 0, e: 'Dưới 0 °C dùng số âm.' },
            { q: 'Có bao nhiêu số nguyên x thoả mãn −3 &lt; x &lt; 3?', a: ['5'], e: 'x ∈ {−2; −1; 0; 1; 2}.' },
          ] },
        { id: 'b14', title: 'Bài 14. Phép cộng và phép trừ số nguyên', sum: 'Mỗi lần làm là một đề mới', gen: 'songuyen', n: 10,
          theory: `<div class="note"><ul><li><b>Cộng hai số cùng dấu:</b> cộng hai phần số tự nhiên, giữ nguyên dấu. (−3) + (−5) = −8.</li>
          <li><b>Cộng hai số khác dấu:</b> lấy phần số tự nhiên lớn trừ phần nhỏ, đặt dấu của số có phần số tự nhiên lớn hơn. (−9) + 4 = −5; 9 + (−4) = 5.</li>
          <li><b>Trừ:</b> a − b = a + (−b). Ví dụ 3 − 8 = 3 + (−8) = −5; 2 − (−6) = 2 + 6 = 8.</li></ul></div>
          <div class="tip"><p>Hai số đối nhau có tổng bằng 0: (−12) + 12 = 0.</p></div>` },
        { id: 'b15', title: 'Bài 15. Quy tắc dấu ngoặc',
          theory: `<div class="note"><ul><li>Bỏ ngoặc có dấu <b>“+”</b> đằng trước: giữ nguyên dấu các số hạng trong ngoặc.</li><li>Bỏ ngoặc có dấu <b>“−”</b> đằng trước: <b>đổi dấu tất cả</b> các số hạng trong ngoặc.</li></ul></div>
          <div class="vd"><p>15 − (7 − 3) = 15 − 7 + 3 = 11</p><p>(25 + 37) − (25 − 63) = 25 + 37 − 25 + 63 = 100</p></div>`,
          quiz: [
            { q: '15 − (7 − 3) = ?', a: ['11'], e: '15 − 7 + 3 = 11.' },
            { q: 'Bỏ ngoặc đúng: a − (b − c + d) =', opts: ['a − b + c − d', 'a − b − c + d', 'a + b − c + d'], a: 0, e: 'Đổi dấu tất cả số hạng trong ngoặc.' },
            { q: 'Tính nhanh: (25 + 37) − (25 − 63) = ?', a: ['100'], e: '25 + 37 − 25 + 63 = 37 + 63 = 100.' },
            { q: 'Tính nhanh: (−34) + 2026 − (2026 − 34) = ?', a: ['0'], e: '−34 + 2026 − 2026 + 34 = 0.' },
            { q: '12 − (−5 + 9) = ?', a: ['8'], e: '12 + 5 − 9 = 8.' },
          ] },
        { id: 'b16', title: 'Bài 16. Phép nhân số nguyên',
          theory: `<div class="note"><ul><li>Tích hai số nguyên <b>cùng dấu</b> là số dương: (−4) · (−5) = 20.</li><li>Tích hai số nguyên <b>khác dấu</b> là số âm: (−4) · 5 = −20.</li><li>a · 0 = 0.</li></ul></div>
          <div class="tip"><p>Tích có <b>chẵn</b> thừa số âm thì mang dấu “+”, có <b>lẻ</b> thừa số âm thì mang dấu “−”.</p></div>`,
          quiz: [
            { q: '(−4) · (−5) = ?', a: ['20'], e: 'Cùng dấu → dương.' },
            { q: '(−6) · 7 = ?', a: ['-42'], e: 'Khác dấu → âm: −42.' },
            { q: '(−2) · (−3) · (−5) = ?', a: ['-30'], e: 'Ba thừa số âm (lẻ) → âm: −30.' },
            { q: `Dấu của tích (−1) · (−2) · (−3) · (−4) là:`, opts: ['Dương', 'Âm'], a: 0, keep: true, e: 'Bốn thừa số âm (chẵn) → dương.' },
            { q: 'Tìm x biết: (−3) · x = 15', a: ['-5'], e: 'x = 15 : (−3) = −5.' },
          ] },
        soon('b17', 'Bài 17. Phép chia hết. Ước và bội của một số nguyên'),
      ] },
      { title: 'Chương IV. Một số hình phẳng trong thực tiễn', lessons: [
        { id: 'b18', title: 'Bài 18. Hình tam giác đều. Hình vuông. Hình lục giác đều',
          theory: `<div class="tw"><table class="t"><tr><th>Hình</th><th>Đặc điểm</th></tr>
          <tr><td>Tam giác đều</td><td>3 cạnh bằng nhau; 3 góc bằng nhau (mỗi góc 60°)</td></tr>
          <tr><td>Hình vuông</td><td>4 cạnh bằng nhau; 4 góc vuông; 2 đường chéo bằng nhau</td></tr>
          <tr><td>Lục giác đều</td><td>6 cạnh bằng nhau; 6 góc bằng nhau; 3 đường chéo chính bằng nhau</td></tr></table></div>
          <div class="tip"><p>Lục giác đều ghép được từ <b>6 tam giác đều</b>. Tổ ong có các ô hình lục giác đều.</p></div>`,
          quiz: [
            { q: 'Mỗi góc của tam giác đều bằng bao nhiêu độ?', a: ['60'], e: '3 góc bằng nhau, tổng 180° → mỗi góc 60°.' },
            { q: 'Hình lục giác đều có bao nhiêu đường chéo chính?', a: ['3'], e: '3 đường chéo chính đi qua tâm, bằng nhau.' },
            { q: 'Lục giác đều ghép được từ bao nhiêu tam giác đều?', a: ['6'], e: 'Nối tâm với 6 đỉnh được 6 tam giác đều.' },
            { q: 'Hình nào có 4 cạnh bằng nhau và 4 góc vuông?', opts: ['Hình vuông', 'Hình thoi', 'Hình chữ nhật', 'Tam giác đều'], a: 0, e: 'Hình thoi có 4 cạnh bằng nhau nhưng góc không nhất thiết vuông.' },
          ] },
        soon('b19', 'Bài 19. Hình chữ nhật. Hình thoi. Hình bình hành. Hình thang cân'),
        { id: 'b20', title: 'Bài 20. Chu vi và diện tích của một số tứ giác đã học',
          theory: `<div class="tw"><table class="t"><tr><th>Hình</th><th>Chu vi</th><th>Diện tích</th></tr>
          <tr><td>Hình vuông cạnh a</td><td>4a</td><td>${sup('a', 2)}</td></tr>
          <tr><td>Hình chữ nhật a, b</td><td>2(a + b)</td><td>a · b</td></tr>
          <tr><td>Hình bình hành cạnh a, b; chiều cao h ứng với a</td><td>2(a + b)</td><td>a · h</td></tr>
          <tr><td>Hình thoi cạnh a; đường chéo m, n</td><td>4a</td><td>[[m · n/2]]</td></tr>
          <tr><td>Hình thang cân đáy a, b; chiều cao h</td><td>tổng 4 cạnh</td><td>[[(a + b) · h/2]]</td></tr></table></div>`,
          quiz: [
            { q: 'Hình thoi có hai đường chéo 6 cm và 8 cm. Diện tích là bao nhiêu cm²?', a: ['24'], e: '(6 · 8) : 2 = 24 (cm²).' },
            { q: 'Hình bình hành có cạnh đáy 10 cm, chiều cao tương ứng 4 cm. Diện tích là bao nhiêu cm²?', a: ['40'], e: '10 · 4 = 40 (cm²).' },
            { q: 'Hình thang cân có hai đáy 6 cm và 10 cm, chiều cao 5 cm. Diện tích là bao nhiêu cm²?', a: ['40'], e: '(6 + 10) · 5 : 2 = 40 (cm²).' },
            { q: 'Hình vuông có chu vi 20 cm. Diện tích là bao nhiêu cm²?', a: ['25'], e: 'Cạnh = 20 : 4 = 5 cm; diện tích 5² = 25 cm².' },
            { q: 'Mảnh vườn hình chữ nhật dài 15 m, rộng 8 m. Chu vi là bao nhiêu mét?', a: ['46'], e: '2 · (15 + 8) = 46 (m).' },
          ] },
      ] },
      { title: 'Chương V. Tính đối xứng của hình phẳng trong tự nhiên', lessons: [
        { id: 'b21', title: 'Bài 21. Hình có trục đối xứng',
          theory: `<p>Một hình có <b>trục đối xứng</b> d nếu gấp hình theo đường d thì hai nửa hình trùng khít lên nhau.</p>
          <div class="tw"><table class="t"><tr><th>Hình</th><th>Số trục đối xứng</th></tr>
          <tr><td>Tam giác đều</td><td>3</td></tr><tr><td>Hình vuông</td><td>4</td></tr><tr><td>Hình chữ nhật</td><td>2</td></tr><tr><td>Hình thoi</td><td>2</td></tr>
          <tr><td>Hình thang cân</td><td>1</td></tr><tr><td>Lục giác đều</td><td>6</td></tr><tr><td>Hình tròn</td><td>Vô số (mọi đường kính)</td></tr><tr><td>Hình bình hành (thường)</td><td>Không có</td></tr></table></div>`,
          quiz: [
            { q: 'Hình vuông có bao nhiêu trục đối xứng?', a: ['4'], e: '2 đường chéo và 2 đường nối trung điểm các cạnh đối.' },
            { q: 'Hình thang cân có bao nhiêu trục đối xứng?', a: ['1'], e: 'Đường thẳng đi qua trung điểm hai đáy.' },
            { q: 'Hình nào có vô số trục đối xứng?', opts: ['Hình tròn', 'Hình vuông', 'Lục giác đều'], a: 0, e: 'Mọi đường kính đều là trục đối xứng.' },
            { q: 'Hình nào không có trục đối xứng?', opts: ['Hình bình hành (không phải hình chữ nhật, hình thoi)', 'Hình chữ nhật', 'Tam giác đều'], a: 0, e: 'Hình bình hành thường chỉ có tâm đối xứng.' },
            { q: 'Chữ cái in hoa nào có trục đối xứng?', opts: ['A', 'F', 'G', 'R'], a: 0, e: 'Chữ A có một trục đối xứng thẳng đứng.' },
          ] },
        soon('b22', 'Bài 22. Hình có tâm đối xứng'),
      ] },
      { title: 'Chương VI. Phân số (Tập 2)', lessons: [
        { id: 'b23', title: 'Bài 23. Mở rộng khái niệm phân số. Phân số bằng nhau', sum: 'Luyện rút gọn — mỗi lần một đề mới', gen: 'rutgon', n: 8,
          theory: `<p>Phân số [[a/b]] với a, b ∈ ℤ, b ≠ 0. a là tử số, b là mẫu số. Ví dụ [[−2/5]] là kết quả của phép chia (−2) : 5.</p>
          <div class="note"><p>Hai phân số [[a/b]] và [[c/d]] bằng nhau nếu <b>a · d = b · c</b>.</p><p>Tính chất cơ bản: nhân hoặc chia cả tử và mẫu với cùng một số khác 0 (chia cho ước chung) thì được phân số bằng nó.</p></div>
          <div class="vd"><p>Rút gọn [[18/24]]: ƯCLN(18, 24) = 6 → [[18/24]] = [[3/4]] (phân số tối giản).</p></div>
          <div class="tip"><p>Khi gõ đáp án, viết phân số dạng <b>a/b</b>, ví dụ 3/4 hoặc -2/5.</p></div>` },
        soon('b24', 'Bài 24. So sánh phân số. Hỗn số dương'),
        { id: 'b25', title: 'Bài 25. Phép cộng và phép trừ phân số', sum: 'Mỗi lần làm là một đề mới', gen: 'phanso', n: 8,
          theory: `<div class="note"><ul><li>Cùng mẫu: [[a/m]] + [[b/m]] = [[a + b/m]].</li><li>Khác mẫu: <b>quy đồng mẫu</b> (mẫu chung thường là BCNN các mẫu) rồi cộng tử.</li><li>Trừ: [[a/b]] − [[c/d]] = [[a/b]] + [[−c/d]].</li></ul></div>
          <div class="vd"><p>[[1/4]] + [[1/6]] = [[3/12]] + [[2/12]] = [[5/12]] &nbsp;(BCNN(4, 6) = 12)</p></div>
          <div class="tip"><p>Gõ đáp án dạng <b>a/b</b> và rút gọn tối giản. Nếu kết quả là số nguyên thì gõ số nguyên.</p></div>` },
        { id: 'b26', title: 'Bài 26. Phép nhân và phép chia phân số',
          theory: `<div class="note"><p class="big">[[a/b]] · [[c/d]] = [[a · c/b · d]]</p><p class="big">[[a/b]] : [[c/d]] = [[a/b]] · [[d/c]] &nbsp;(c ≠ 0)</p><p>[[d/c]] là <b>phân số nghịch đảo</b> của [[c/d]] (tích của chúng bằng 1).</p></div>
          <div class="vd"><p>[[2/3]] · [[9/4]] = [[18/12]] = [[3/2]] &nbsp;·&nbsp; [[3/5]] : [[6/7]] = [[3/5]] · [[7/6]] = [[21/30]] = [[7/10]]</p></div>`,
          quiz: [
            { q: '[[2/3]] · [[9/4]] = ? (viết dạng a/b, tối giản)', a: ['3/2'], e: '18/12 = 3/2.' },
            { q: 'Phân số nghịch đảo của [[−3/5]] là:', opts: ['[[−5/3]]', '[[3/5]]', '[[5/3]]', '[[−3/5]]'], a: 0, e: '(−3/5) · (−5/3) = 1.' },
            { q: '[[3/5]] : [[6/7]] = ? (viết dạng a/b)', a: ['7/10'], e: '3/5 · 7/6 = 21/30 = 7/10.' },
            { q: '[[3/4]] của 20 là bao nhiêu?', a: ['15'], e: '20 · 3/4 = 15.' },
            { q: '[[1/2]] : 2 = ? (viết dạng a/b)', a: ['1/4'], e: '1/2 · 1/2 = 1/4.' },
          ] },
        soon('b27', 'Bài 27. Hai bài toán về phân số'),
      ] },
      { title: 'Chương VII. Số thập phân', lessons: [
        soon('b28', 'Bài 28. Số thập phân'),
        soon('b29', 'Bài 29. Tính toán với số thập phân'),
        { id: 'b30', title: 'Bài 30. Làm tròn và ước lượng',
          theory: `<div class="note"><p>Làm tròn số thập phân đến một hàng: nhìn chữ số <b>ngay bên phải</b> hàng đó.</p><ul><li>Nếu chữ số đó <b>nhỏ hơn 5</b>: giữ nguyên chữ số hàng làm tròn, bỏ các chữ số phía sau.</li><li>Nếu chữ số đó <b>từ 5 trở lên</b>: cộng thêm 1 vào chữ số hàng làm tròn.</li></ul></div>
          <div class="vd"><p>3,1416 làm tròn đến hàng phần trăm: 3,14 · 2,875 làm tròn đến hàng phần mười: 2,9 · 1 749 làm tròn đến hàng trăm: 1 700.</p></div>
          <div class="tip"><p>Ước lượng giúp kiểm tra nhanh kết quả: 19,8 · 5,1 ≈ 20 · 5 = 100.</p></div>`,
          quiz: [
            { q: 'Làm tròn 3,1416 đến hàng phần trăm:', a: ['3,14', '3.14'], e: 'Chữ số ngay sau hàng phần trăm là 1 < 5.' },
            { q: 'Làm tròn 2,875 đến hàng phần mười:', a: ['2,9', '2.9'], e: 'Chữ số sau hàng phần mười là 7 ≥ 5 → 2,9.' },
            { q: 'Làm tròn 1 749 đến hàng trăm:', a: ['1700', '1 700'], e: 'Chữ số hàng chục là 4 < 5.' },
            { q: 'Ước lượng 19,8 · 5,1 khoảng:', opts: ['100', '10', '1 000', '25'], a: 0, e: '≈ 20 · 5 = 100.' },
            { q: 'Làm tròn 12,96 đến hàng phần mười:', a: ['13,0', '13.0', '13'], e: '9 ≥ 5 nên 12,9 + 0,1 = 13,0.' },
          ] },
        { id: 'b31', title: 'Bài 31. Một số bài toán về tỉ số và tỉ số phần trăm',
          theory: `<div class="note"><ul><li>Tỉ số phần trăm của a và b: [[a/b]] · 100%.</li><li>Tìm m% của một số a: a · [[m/100]].</li><li>Tìm một số biết m% của nó bằng b: b : [[m/100]].</li></ul></div>
          <div class="vd"><p>Lớp có 40 bạn, 18 bạn nữ. Tỉ số phần trăm bạn nữ: 18 : 40 · 100% = 45%.</p><p>Áo giá 200 000 đồng, giảm 15%: số tiền giảm 200 000 · 15 : 100 = 30 000 đồng.</p></div>`,
          quiz: [
            { q: 'Lớp có 40 bạn, 18 bạn nữ. Bạn nữ chiếm bao nhiêu phần trăm? (chỉ gõ số)', a: ['45'], e: '18 : 40 · 100 = 45 (%).' },
            { q: '25% của 80 là bao nhiêu?', a: ['20'], e: '80 · 25 : 100 = 20.' },
            { q: 'Áo giá 200 000 đồng, được giảm 15%. Giá sau khi giảm là bao nhiêu đồng?', a: ['170000', '170 000', '170.000'], e: 'Giảm 30 000 đồng → 170 000 đồng.' },
            { q: '20% của một số là 12. Số đó là bao nhiêu?', a: ['60'], e: '12 : 20 · 100 = 60.' },
            { q: 'Tỉ số của 3 m và 50 cm là:', opts: ['6', '[[3/50]]', '[[50/3]]', '60'], a: 0, e: 'Đổi cùng đơn vị: 300 cm : 50 cm = 6.' },
          ] },
      ] },
      { title: 'Chương VIII. Những hình hình học cơ bản', lessons: [
        soon('b32', 'Bài 32. Điểm và đường thẳng'),
        soon('b33', 'Bài 33. Điểm nằm giữa hai điểm. Tia'),
        soon('b34', 'Bài 34. Đoạn thẳng. Độ dài đoạn thẳng'),
        { id: 'b35', title: 'Bài 35. Trung điểm của đoạn thẳng',
          theory: `<p>Điểm I là <b>trung điểm</b> của đoạn thẳng AB nếu I nằm giữa A, B và IA = IB.</p><div class="note"><p class="big">IA = IB = [[AB/2]]</p></div>`,
          quiz: [
            { q: 'AB = 12 cm, I là trung điểm của AB. IA = ? (cm)', a: ['6'], e: '12 : 2 = 6.' },
            { q: 'M là trung điểm của CD, MC = 4,5 cm. CD = ? (cm)', a: ['9'], e: 'CD = 2 · 4,5 = 9.' },
            { q: 'Điểm I nằm giữa A và B, IA = 3 cm, IB = 5 cm. I có phải trung điểm của AB không?', opts: ['Không', 'Có'], a: 0, keep: true, e: 'IA ≠ IB.' },
          ] },
        soon('b36', 'Bài 36. Góc'),
        { id: 'b37', title: 'Bài 37. Số đo góc',
          theory: `<p>Đo góc bằng <b>thước đo góc</b>, đơn vị là độ (°).</p>
          <div class="tw"><table class="t"><tr><th>Loại góc</th><th>Số đo</th></tr><tr><td>Góc nhọn</td><td>lớn hơn 0° và nhỏ hơn 90°</td></tr><tr><td>Góc vuông</td><td>bằng 90°</td></tr><tr><td>Góc tù</td><td>lớn hơn 90° và nhỏ hơn 180°</td></tr><tr><td>Góc bẹt</td><td>bằng 180°</td></tr></table></div>`,
          quiz: [
            { q: 'Góc 120° là góc gì?', opts: ['Góc tù', 'Góc nhọn', 'Góc vuông', 'Góc bẹt'], a: 0, keep: true, e: '90° < 120° < 180°.' },
            { q: 'Góc 45° là góc gì?', opts: ['Góc tù', 'Góc nhọn', 'Góc vuông', 'Góc bẹt'], a: 1, keep: true, e: '45° < 90°.' },
            { q: 'Góc bẹt có số đo bao nhiêu độ?', a: ['180'], e: 'Góc bẹt = 180°.' },
            { q: 'Lúc 3 giờ đúng, kim giờ và kim phút tạo thành góc bao nhiêu độ?', a: ['90'], e: 'Góc vuông 90°.' },
          ] },
      ] },
      { title: 'Chương IX. Dữ liệu và xác suất thực nghiệm', lessons: [
        soon('b38', 'Bài 38. Dữ liệu và thu thập dữ liệu'),
        soon('b39', 'Bài 39. Bảng thống kê và biểu đồ tranh'),
        soon('b40', 'Bài 40. Biểu đồ cột'),
        soon('b41', 'Bài 41. Biểu đồ cột kép'),
        soon('b42', 'Bài 42. Kết quả có thể và sự kiện trong trò chơi, thí nghiệm'),
        { id: 'b43', title: 'Bài 43. Xác suất thực nghiệm',
          theory: `<div class="note"><p class="big">Xác suất thực nghiệm = [[Số lần sự kiện A xảy ra/Tổng số lần thực hiện]]</p></div>
          <div class="vd"><p>Tung đồng xu 50 lần, mặt sấp xuất hiện 22 lần. Xác suất thực nghiệm xuất hiện mặt sấp là [[22/50]] = [[11/25]] = 0,44.</p></div>`,
          quiz: [
            { q: 'Tung đồng xu 50 lần, mặt sấp xuất hiện 22 lần. Xác suất thực nghiệm xuất hiện mặt ngửa là: (viết dạng a/b, tối giản)', a: ['14/25'], e: 'Mặt ngửa: 50 − 22 = 28 lần → 28/50 = 14/25.' },
            { q: 'Gieo xúc xắc 20 lần, mặt 6 chấm xuất hiện 5 lần. Xác suất thực nghiệm xuất hiện mặt 6 chấm là:', opts: ['[[1/4]]', '[[1/6]]', '[[5/6]]', '[[1/5]]'], a: 0, e: '5/20 = 1/4.' },
            { q: 'Lấy bóng từ hộp 40 lần, được bóng xanh 30 lần. Xác suất thực nghiệm lấy được bóng xanh là bao nhiêu? (số thập phân)', a: ['0,75', '0.75'], e: '30/40 = 0,75.' },
          ] },
      ] },
    ],
  };

  /* ---------- TOÁN 6 theo đúng mục lục SGK Toán 6 tập 1, tập 2 ---------- */
  const old6 = toanCu.chapters.flatMap(c => c.lessons);
  const O = (id, extra) => Object.assign({}, old6.find(l => l.id === id), extra || {});
  const B = (n, title, o) => Object.assign({ id: 'b' + n, title: `Bài ${n}. ${title}` }, o);
  const LT = (id, title, mix, theory) => ({ id, title, gen: 'mix', mix, n: 10, sum: 'Trộn các dạng bài · mỗi lần một đề mới', theory: theory || `<p>Bài luyện tập trộn các dạng toán đã học. Mỗi lần làm là một đề mới.</p><div class="tip"><p>Câu nào sai, đọc kĩ lời giải rồi bấm “Làm đề mới” để luyện tiếp.</p></div>` });
  const toan = {
    id: 'toan', name: 'Toán', tt: 'Toán', color: 'b', ill: 'toan6', book: 'Toán 6 · Kết nối tri thức',
    chapters: [
      { title: 'Chương I. Tập hợp các số tự nhiên', lessons: [
        O('b1'), O('b2'),
        B(3, 'Thứ tự trong tập hợp các số tự nhiên', { gen: 'n6thutu', theory: `<ul><li>Trên tia số, điểm biểu diễn số nhỏ nằm bên trái điểm biểu diễn số lớn.</li><li>a ≤ b nghĩa là a &lt; b hoặc a = b.</li><li>Mỗi số tự nhiên có đúng một số liền sau; mỗi số tự nhiên khác 0 có đúng một số liền trước.</li></ul><div class="note"><p>Tính chất bắc cầu: nếu a &lt; b và b &lt; c thì a &lt; c.</p></div>` }),
        B(4, 'Phép cộng và phép trừ số tự nhiên', { gen: 'n6tinhnhanh', theory: `<div class="note"><p>Giao hoán: a + b = b + a · Kết hợp: (a + b) + c = a + (b + c).</p><p>Tìm số hạng: x + b = c ⇒ x = c − b. Phép trừ a − b chỉ thực hiện được (trong ℕ) khi a ≥ b.</p></div><div class="vd"><p>Tính nhanh: 46 + 17 + 54 = (46 + 54) + 17 = 100 + 17 = <b>117</b>.</p></div>` }),
        O('b5'),
        LT('l1a', 'Luyện tập chung (sau Bài 5)', ['n6thutu', 'n6tinhnhanh', 'bang']),
        O('b6'), O('b7'),
        LT('l1b', 'Luyện tập chung (sau Bài 7)', ['luythua', 'n6tinhnhanh']),
        LT('c1', 'Bài tập cuối chương I', ['n6thutu', 'n6tinhnhanh', 'luythua']),
      ] },
      { title: 'Chương II. Tính chia hết trong tập hợp các số tự nhiên', lessons: [
        B(8, 'Quan hệ chia hết và tính chất', { gen: 'chiahet', theory: `<p>a chia hết cho b (b ≠ 0) nếu có số tự nhiên q sao cho a = b · q. Kí hiệu a ⋮ b. Khi đó a là <b>bội</b> của b, b là <b>ước</b> của a.</p><div class="note"><ul><li>Nếu a ⋮ m và b ⋮ m thì (a + b) ⋮ m.</li><li>Nếu a ⋮ m và b không chia hết cho m thì (a + b) không chia hết cho m.</li></ul></div><div class="vd"><p>Ư(12) = {1; 2; 3; 4; 6; 12} · B(5) = {0; 5; 10; 15; …}</p></div>` }),
        O('b9'),
        O('b10', { gen: 'phantich', n: 3 }),
        LT('l2a', 'Luyện tập chung (sau Bài 10)', ['chiahet', 'dauhieu', 'phantich']),
        O('b11', { gen: 'ucln', n: 3 }), O('b12', { gen: 'bcnn', n: 3 }),
        LT('l2b', 'Luyện tập chung (sau Bài 12)', ['ucln', 'bcnn', 'phantich']),
        LT('c2', 'Bài tập cuối chương II', ['chiahet', 'dauhieu', 'phantich', 'ucln', 'bcnn']),
      ] },
      { title: 'Chương III. Số nguyên', lessons: [
        O('b13', { gen: 'mix', mix: ['sosanhZ', 'soDoi'], n: 3 }), O('b14'), O('b15', { gen: 'dauNgoac', n: 3 }),
        LT('l3a', 'Luyện tập chung (sau Bài 15)', ['sosanhZ', 'songuyen', 'dauNgoac']),
        O('b16', { gen: 'songuyen', n: 3 }),
        B(17, 'Phép chia hết. Ước và bội của một số nguyên', { gen: 'chiaZ', theory: `<div class="note"><p>Chia hai số nguyên: cùng dấu thì thương dương, khác dấu thì thương âm.</p><p>a chia hết cho b (b ≠ 0) nếu có số nguyên q để a = b · q. Mỗi ước dương của một số đều có một ước âm tương ứng.</p></div><div class="vd"><p>(−24) : 6 = −4 · (−24) : (−6) = 4 · Các ước của 6: ±1; ±2; ±3; ±6.</p></div>` }),
        LT('l3b', 'Luyện tập chung (sau Bài 17)', ['songuyen', 'chiaZ', 'dauNgoac']),
        LT('c3', 'Bài tập cuối chương III', ['sosanhZ', 'soDoi', 'songuyen', 'dauNgoac', 'chiaZ']),
      ] },
      { title: 'Chương IV. Một số hình phẳng trong thực tiễn', lessons: [
        O('b18'),
        B(19, 'Hình chữ nhật. Hình thoi. Hình bình hành. Hình thang cân', {
          theory: `<div class="tw"><table class="t"><tr><th>Hình</th><th>Đặc điểm chính</th></tr><tr><td>Hình chữ nhật</td><td>4 góc vuông; các cạnh đối bằng nhau; 2 đường chéo bằng nhau</td></tr><tr><td>Hình thoi</td><td>4 cạnh bằng nhau; 2 đường chéo vuông góc với nhau</td></tr><tr><td>Hình bình hành</td><td>Các cạnh đối song song và bằng nhau; các góc đối bằng nhau</td></tr><tr><td>Hình thang cân</td><td>Hai đáy song song; hai cạnh bên bằng nhau; hai đường chéo bằng nhau</td></tr></table></div>`,
          quiz: [{ q: 'Hình có 4 cạnh bằng nhau và hai đường chéo vuông góc là:', opts: ['Hình thoi', 'Hình chữ nhật', 'Hình thang cân'], a: 0, e: 'Hình thoi.' }, { q: 'Hai đường chéo của hình chữ nhật:', opts: ['Bằng nhau', 'Vuông góc', 'Không bằng nhau'], a: 0, e: 'Bằng nhau.' }, { q: 'Hình thang cân có hai cạnh bên:', opts: ['Bằng nhau', 'Song song'], a: 0, keep: true, e: 'Bằng nhau.' }, { q: 'Hình bình hành có các cạnh đối:', opts: ['Song song và bằng nhau', 'Vuông góc'], a: 0, keep: true, e: 'Song song và bằng nhau.' }] }),
        O('b20', { gen: 'dienTichTG', n: 3 }),
        LT('l4a', 'Luyện tập chung', ['dienTichTG', 'chuvi']),
        LT('c4', 'Bài tập cuối chương IV', ['dienTichTG', 'chuvi', 'dientich']),
      ] },
      { title: 'Chương V. Tính đối xứng của hình phẳng trong tự nhiên', lessons: [
        O('b21', { gen: 'hinhDX', n: 3 }),
        B(22, 'Hình có tâm đối xứng', { gen: 'hinhDX', theory: `<p>Hình có <b>tâm đối xứng</b> O nếu quay hình nửa vòng (180°) quanh O thì hình trùng với chính nó.</p><div class="note"><p>Có tâm đối xứng: hình tròn, hình vuông, hình chữ nhật, hình thoi, hình bình hành, lục giác đều. Không có: tam giác đều, hình thang cân.</p></div>` }),
        LT('l5a', 'Luyện tập chung', ['hinhDX']),
        LT('c5', 'Bài tập cuối chương V', ['hinhDX']),
      ] },
      { title: 'Chương VI. Phân số (Tập 2)', lessons: [
        O('b23'),
        B(24, 'So sánh phân số. Hỗn số dương', { gen: 'mix', mix: ['sosanhPS', 'honSo'], n: 10, theory: `<div class="note"><ul><li>Cùng mẫu dương: phân số nào có tử lớn hơn thì lớn hơn.</li><li>Khác mẫu: quy đồng mẫu (mẫu dương) rồi so sánh tử.</li></ul></div><p><b>Hỗn số</b>: [[7/3]] = 2[[1/3]] vì 7 : 3 = 2 dư 1.</p>` }),
        LT('l6a', 'Luyện tập chung (sau Bài 24)', ['rutgon', 'sosanhPS', 'honSo']),
        O('b25'), O('b26', { gen: 'nhanchiaPS', n: 3 }),
        B(27, 'Hai bài toán về phân số', { gen: 'gtps', theory: `<div class="note"><p>Tìm giá trị phân số của một số: [[m/n]] của b là b · [[m/n]].</p><p>Tìm một số biết giá trị phân số của nó: nếu [[m/n]] của x là a thì x = a : [[m/n]].</p></div><div class="vd"><p>[[2/3]] của 24 là 16 · [[3/4]] của x là 18 ⇒ x = 24.</p></div>` }),
        LT('l6b', 'Luyện tập chung (sau Bài 27)', ['phanso', 'nhanchiaPS', 'gtps']),
        LT('c6', 'Bài tập cuối chương VI', ['rutgon', 'sosanhPS', 'phanso', 'nhanchiaPS', 'gtps']),
      ] },
      { title: 'Chương VII. Số thập phân', lessons: [
        B(28, 'Số thập phân', {
          theory: `<p>Phân số thập phân (mẫu là 10, 100, 1 000…) viết được dưới dạng số thập phân: [[3/10]] = 0,3 · [[-27/100]] = −0,27.</p><div class="note"><p>Số thập phân gồm phần nguyên (bên trái dấu phẩy) và phần thập phân (bên phải dấu phẩy). So sánh hai số thập phân dương: so phần nguyên trước, rồi lần lượt từng chữ số phần thập phân.</p></div>`,
          quiz: [{ q: 'Viết [[7/100]] dưới dạng số thập phân:', a: ['0,07', '0.07'], e: '0,07.' }, { q: 'Chọn dấu đúng: 2,35 … 2,4', opts: ['&gt;', '&lt;', '='], a: 1, keep: true, e: 'Phần mười: 3 < 4.' }, { q: 'Số đối của 1,5 là:', opts: ['−1,5', '1,5', '0,5'], a: 0, e: '−1,5.' }, { q: 'Chọn dấu đúng: −0,8 … −0,5', opts: ['&gt;', '&lt;', '='], a: 1, keep: true, e: 'Số âm nào gần 0 hơn thì lớn hơn.' }] }),
        B(29, 'Tính toán với số thập phân', { gen: 'thapphan', theory: `<div class="note"><ul><li>Cộng, trừ: đặt các dấu phẩy thẳng cột rồi tính như số tự nhiên.</li><li>Nhân với 10, 100, 1 000: dời dấu phẩy sang phải 1, 2, 3 chữ số.</li></ul></div><div class="tip"><p>Gõ đáp án dùng dấu phẩy, ví dụ 12,5 (gõ dấu chấm cũng được).</p></div>` }),
        O('b30', { gen: 'lamtronTP', n: 3 }), O('b31', { gen: 'phantram', n: 3 }),
        LT('l7a', 'Luyện tập chung', ['thapphan', 'lamtronTP', 'phantram']),
        LT('c7', 'Bài tập cuối chương VII', ['thapphan', 'lamtronTP', 'phantram']),
      ] },
      { title: 'Chương VIII. Những hình hình học cơ bản', lessons: [
        B(32, 'Điểm và đường thẳng', {
          theory: `<ul><li>Điểm được kí hiệu bằng chữ in hoa (A, B…), đường thẳng bằng chữ thường (a, d…).</li><li>Qua hai điểm phân biệt có <b>một và chỉ một</b> đường thẳng.</li><li>Ba điểm cùng nằm trên một đường thẳng là ba điểm <b>thẳng hàng</b>.</li><li>Hai đường thẳng có một điểm chung là <b>cắt nhau</b>; không có điểm chung là <b>song song</b>.</li></ul>`,
          quiz: [{ q: 'Qua hai điểm phân biệt có bao nhiêu đường thẳng?', a: ['1'], e: 'Một và chỉ một.' }, { q: 'Hai đường thẳng không có điểm chung là hai đường thẳng:', opts: ['Song song', 'Cắt nhau', 'Trùng nhau'], a: 0, e: 'Song song.' }, { q: 'Ba điểm cùng thuộc một đường thẳng gọi là:', opts: ['Ba điểm thẳng hàng', 'Ba điểm phân biệt'], a: 0, keep: true, e: 'Thẳng hàng.' }, { q: 'Cho 4 điểm, không có 3 điểm nào thẳng hàng. Vẽ được bao nhiêu đường thẳng đi qua 2 trong 4 điểm đó?', a: ['6'], e: '4 · 3 : 2 = 6.' }] }),
        B(33, 'Điểm nằm giữa hai điểm. Tia', {
          theory: `<p>Hình gồm điểm O và một phần đường thẳng bị chia ra bởi O gọi là <b>tia gốc O</b>.</p><div class="note"><p>Hai tia chung gốc và tạo thành một đường thẳng là hai <b>tia đối nhau</b>.</p></div>`,
          quiz: [{ q: 'Điểm O nằm trên đường thẳng xy. Tia Ox và tia Oy là hai tia:', opts: ['Đối nhau', 'Trùng nhau'], a: 0, keep: true, e: 'Chung gốc, tạo thành đường thẳng xy.' }, { q: 'Tia Ox có gốc là:', opts: ['Điểm O', 'Điểm x'], a: 0, keep: true, e: 'Gốc O.' }, { q: 'A, B, C thẳng hàng theo thứ tự đó. Điểm nằm giữa hai điểm còn lại là:', opts: ['B', 'A', 'C'], a: 0, e: 'B.' }] }),
        B(34, 'Đoạn thẳng. Độ dài đoạn thẳng', { gen: 'doanthang', theory: `<p><b>Đoạn thẳng AB</b> gồm hai điểm A, B và tất cả các điểm nằm giữa A và B.</p><div class="note"><p>Nếu M nằm giữa A và B thì AM + MB = AB.</p></div>` }),
        O('b35', { gen: 'doanthang', n: 2 }),
        LT('l8a', 'Luyện tập chung (sau Bài 35)', ['doanthang']),
        B(36, 'Góc', {
          theory: `<p><b>Góc</b> là hình gồm hai tia chung gốc. Gốc chung là đỉnh, hai tia là hai cạnh của góc. Góc xOy kí hiệu là ∠xOy.</p>`,
          quiz: [{ q: 'Góc xOy có đỉnh là:', opts: ['O', 'x', 'y'], a: 0, e: 'Điểm chung O.' }, { q: 'Góc là hình gồm:', opts: ['Hai tia chung gốc', 'Hai đoạn thẳng', 'Ba điểm'], a: 0, e: 'Định nghĩa góc.' }, { q: 'Kim giờ và kim phút đồng hồ tạo thành:', opts: ['Một góc', 'Một đoạn thẳng'], a: 0, keep: true, e: 'Hai kim chung gốc ở tâm.' }] }),
        O('b37', { gen: 'goc', n: 3 }),
        LT('l8b', 'Luyện tập chung (sau Bài 37)', ['goc', 'doanthang']),
        LT('c8', 'Bài tập cuối chương VIII', ['goc', 'doanthang']),
      ] },
      { title: 'Chương IX. Dữ liệu và xác suất thực nghiệm', lessons: [
        B(38, 'Dữ liệu và thu thập dữ liệu', {
          theory: `<ul><li>Dữ liệu <b>là số</b> (số liệu): chiều cao, cân nặng, điểm số…</li><li>Dữ liệu <b>không phải là số</b>: màu sắc yêu thích, tên môn học…</li></ul><p>Thu thập dữ liệu bằng: quan sát, làm thí nghiệm, lập phiếu hỏi, phỏng vấn…</p>`,
          quiz: [{ q: 'Dữ liệu nào là số liệu?', opts: ['Chiều cao các bạn trong lớp', 'Màu áo yêu thích', 'Tên các loài hoa'], a: 0, e: 'Chiều cao là số.' }, { q: 'Muốn biết các bạn thích môn thể thao nào, cách thu thập phù hợp là:', opts: ['Lập phiếu hỏi', 'Làm thí nghiệm', 'Đo đạc'], a: 0, e: 'Phiếu hỏi.' }, { q: '“Nhiệt độ mỗi ngày trong tuần” là dữ liệu:', opts: ['Là số', 'Không phải là số'], a: 0, keep: true, e: 'Nhiệt độ là số.' }] }),
        B(39, 'Bảng thống kê và biểu đồ tranh', {
          theory: `<p>Biểu đồ tranh dùng biểu tượng để biểu diễn số lượng. Ví dụ: mỗi ● ứng với 5 học sinh.</p><div class="tw"><table class="t"><tr><th>Môn yêu thích</th><th>Biểu đồ tranh (● = 5 học sinh)</th></tr><tr><td>Toán</td><td>● ● ● ●</td></tr><tr><td>Văn</td><td>● ●</td></tr><tr><td>Tiếng Anh</td><td>● ● ●</td></tr></table></div>`,
          quiz: [{ q: 'Có bao nhiêu học sinh thích Toán?', a: ['20'], e: '4 · 5 = 20.' }, { q: 'Số học sinh thích Tiếng Anh nhiều hơn thích Văn bao nhiêu?', a: ['5'], e: '15 − 10 = 5.' }, { q: 'Tổng số học sinh được hỏi là:', a: ['45'], e: '(4 + 2 + 3) · 5 = 45.' }] }),
        B(40, 'Biểu đồ cột', {
          theory: `<p>Biểu đồ cột: trục ngang ghi các đối tượng, trục đứng ghi số lượng; mỗi cột cao bằng số liệu tương ứng.</p><div class="vd"><p>Số cây trồng: Lớp 6A: 30 · 6B: 25 · 6C: 40 · 6D: 35 (đọc từ chiều cao các cột).</p></div>`,
          quiz: [{ q: 'Theo ví dụ, lớp nào trồng nhiều cây nhất?', opts: ['6C', '6A', '6D', '6B'], a: 0, e: '40 cây.' }, { q: 'Lớp 6D trồng nhiều hơn lớp 6B bao nhiêu cây?', a: ['10'], e: '35 − 25 = 10.' }, { q: 'Cả bốn lớp trồng được bao nhiêu cây?', a: ['130'], e: '30 + 25 + 40 + 35 = 130.' }] }),
        B(41, 'Biểu đồ cột kép', {
          theory: `<p>Biểu đồ cột kép vẽ hai cột cạnh nhau cho mỗi đối tượng, giúp so sánh hai bộ dữ liệu (ví dụ số học sinh nam và nữ của từng lớp).</p><div class="vd"><p>Lớp 6A: nam 20, nữ 18 · Lớp 6B: nam 17, nữ 21.</p></div>`,
          quiz: [{ q: 'Lớp nào có nhiều học sinh nữ hơn?', opts: ['6B', '6A'], a: 0, keep: true, e: '21 > 18.' }, { q: 'Lớp 6A có tất cả bao nhiêu học sinh?', a: ['38'], e: '20 + 18 = 38.' }, { q: 'Tổng số học sinh nam của hai lớp là:', a: ['37'], e: '20 + 17 = 37.' }] }),
        B(42, 'Kết quả có thể và sự kiện trong trò chơi, thí nghiệm', {
          theory: `<p>Khi gieo một con xúc xắc, có 6 <b>kết quả có thể</b>: 1, 2, 3, 4, 5, 6 chấm.</p><div class="note"><p>Sự kiện có thể xảy ra hoặc không xảy ra tuỳ kết quả. Ví dụ: “Gieo được mặt chẵn chấm” xảy ra khi được 2, 4 hoặc 6 chấm.</p></div>`,
          quiz: [{ q: 'Tung một đồng xu có bao nhiêu kết quả có thể?', a: ['2'], e: 'Sấp hoặc ngửa.' }, { q: 'Gieo xúc xắc, sự kiện “được mặt có số chấm lớn hơn 4” có bao nhiêu kết quả thuận lợi?', a: ['2'], e: '5 và 6.' }, { q: 'Gieo xúc xắc, sự kiện “được mặt 7 chấm” là sự kiện:', opts: ['Không thể', 'Chắc chắn', 'Có thể'], a: 0, keep: true, e: 'Xúc xắc chỉ có 1 – 6 chấm.' }] }),
        O('b43', { gen: 'xstn', n: 3 }),
        LT('l9a', 'Luyện tập chung', ['xstn']),
        LT('c9', 'Bài tập cuối chương IX', ['xstn']),
      ] },
    ],
  };

  /* ------------------------------ NGỮ VĂN 6 ------------------------------ */
  const nguvan = {
    id: 'nguvan', name: 'Ngữ văn', tt: 'Văn', color: 'p', ill: 'nguvan', book: 'Ngữ văn 6 · Kết nối tri thức',
    chapters: [
      { title: 'Kiến thức Tiếng Việt', lessons: [
        { id: 'tudon', title: 'Từ đơn và từ phức (từ ghép, từ láy)',
          theory: `<div class="tw"><table class="t"><tr><th>Loại từ</th><th>Cấu tạo</th><th>Ví dụ</th></tr>
          <tr><td>Từ đơn</td><td>Gồm một tiếng</td><td>nhà, sách, chạy, đẹp</td></tr>
          <tr><td>Từ ghép</td><td>Từ phức; các tiếng có quan hệ về <b>nghĩa</b></td><td>bàn ghế, xe đạp, quần áo</td></tr>
          <tr><td>Từ láy</td><td>Từ phức; các tiếng có quan hệ láy <b>âm</b> (lặp âm đầu, vần hoặc cả tiếng)</td><td>lung linh, xinh xắn, ầm ầm, lom khom</td></tr></table></div>
          <div class="warn"><p>Có từ trông giống từ láy nhưng là từ ghép, vì cả hai tiếng đều có nghĩa: <i>tươi tốt, đi đứng, mặt mũi</i>.</p></div>`,
          quiz: [
            { q: 'Từ nào là từ đơn?', opts: ['sách', 'sách vở', 'xinh xắn', 'học sinh'], a: 0, e: '“Sách” chỉ có một tiếng.' },
            { q: 'Từ nào là từ láy?', opts: ['lung linh', 'bàn ghế', 'nhà cửa', 'xe đạp'], a: 0, e: 'Lặp âm đầu “l”.' },
            { q: 'Từ nào là từ ghép?', opts: ['quần áo', 'lom khom', 'ầm ầm', 'thăm thẳm'], a: 0, e: '“Quần” và “áo” đều có nghĩa, ghép lại theo nghĩa.' },
            { q: '“Tươi tốt” là:', opts: ['Từ ghép', 'Từ láy', 'Từ đơn'], a: 0, keep: true, e: 'Cả “tươi” và “tốt” đều có nghĩa.' },          ] },
        { id: 'tutu', title: 'Biện pháp tu từ: so sánh, nhân hoá, ẩn dụ, hoán dụ, điệp ngữ',
          theory: `<div class="tw"><table class="t"><tr><th>Biện pháp</th><th>Cách làm</th><th>Ví dụ</th></tr>
          <tr><td>So sánh</td><td>Đối chiếu sự vật này với sự vật khác có nét tương đồng</td><td>Trẻ em <mark>như</mark> búp trên cành.</td></tr>
          <tr><td>Nhân hoá</td><td>Gọi, tả, trò chuyện với vật như với người</td><td>Chị gió <mark>hát</mark> ru cây lá.</td></tr>
          <tr><td>Ẩn dụ</td><td>Gọi tên sự vật này bằng tên sự vật khác có nét <b>tương đồng</b></td><td>Thấy <mark>mặt trời</mark> (chỉ Bác Hồ) …</td></tr>
          <tr><td>Hoán dụ</td><td>Gọi tên sự vật này bằng tên sự vật khác có quan hệ <b>gần gũi</b></td><td><mark>Cả lớp</mark> đứng dậy chào cô (chỉ các bạn trong lớp).</td></tr>
          <tr><td>Điệp ngữ</td><td>Lặp lại từ ngữ để nhấn mạnh</td><td><mark>Nhớ</mark> sao lớp học i tờ / <mark>Nhớ</mark> sao ngày tháng…</td></tr></table></div>
          <div class="tip"><p>Ẩn dụ giống so sánh nhưng <b>ẩn đi</b> sự vật được so sánh và từ so sánh.</p></div>`,
          quiz: [
            { q: '“Ông trời mặc áo giáp đen ra trận.” sử dụng biện pháp:', opts: ['Nhân hoá', 'So sánh', 'Hoán dụ', 'Điệp ngữ'], a: 0, e: 'Ông trời được tả như người: mặc áo, ra trận.' },
            { q: '“Mặt trăng tròn như cái đĩa bạc.” sử dụng biện pháp:', opts: ['So sánh', 'Nhân hoá', 'Ẩn dụ'], a: 0, e: 'Có từ so sánh “như”.' },
            { q: '“Cả sân trường reo hò.” — “sân trường” chỉ những người ở sân trường. Đây là:', opts: ['Hoán dụ', 'Ẩn dụ', 'So sánh'], a: 0, e: 'Lấy nơi chốn để chỉ người ở đó: quan hệ gần gũi.' },
            { q: 'Ẩn dụ dựa trên quan hệ nào giữa hai sự vật?', opts: ['Tương đồng (giống nhau)', 'Gần gũi (đi liền nhau)', 'Trái ngược'], a: 0, e: 'Hoán dụ mới dựa trên quan hệ gần gũi.' },
            { q: 'Biện pháp lặp lại từ ngữ để nhấn mạnh gọi là:', a: ['điệp ngữ', 'điệp từ'], e: 'Điệp ngữ.' },
          ] },
        { id: 'trangngu', title: 'Trạng ngữ',
          theory: `<p><b>Trạng ngữ</b> là thành phần phụ của câu, bổ sung thông tin về thời gian, nơi chốn, nguyên nhân, mục đích, phương tiện…</p>
          <div class="vd"><p><mark>Sáng nay</mark>, chúng em đi tham quan. (thời gian)</p><p><mark>Trên cành cây</mark>, chim hót líu lo. (nơi chốn)</p><p><mark>Vì trời mưa</mark>, trận đấu bị hoãn. (nguyên nhân)</p><p><mark>Để đạt điểm cao</mark>, Đạt ôn bài chăm chỉ. (mục đích)</p></div>
          <div class="tip"><p>Trạng ngữ thường đứng đầu câu và ngăn cách với nòng cốt câu bằng dấu phẩy.</p></div>`,
          quiz: [
            { q: '“<mark>Vì trời mưa</mark>, trận đấu bị hoãn.” Trạng ngữ chỉ:', opts: ['Nguyên nhân', 'Thời gian', 'Nơi chốn', 'Mục đích'], a: 0, keep: true, e: 'Trả lời câu hỏi “Vì sao?”.' },
            { q: '“<mark>Trên cành cây</mark>, chim hót líu lo.” Trạng ngữ chỉ:', opts: ['Nguyên nhân', 'Thời gian', 'Nơi chốn', 'Mục đích'], a: 2, keep: true, e: 'Trả lời câu hỏi “Ở đâu?”.' },
            { q: '“<mark>Để đạt điểm cao</mark>, Đạt ôn bài chăm chỉ.” Trạng ngữ chỉ:', opts: ['Nguyên nhân', 'Thời gian', 'Nơi chốn', 'Mục đích'], a: 3, keep: true, e: 'Trả lời câu hỏi “Để làm gì?”.' },
            { q: 'Trạng ngữ đứng đầu câu thường được ngăn cách bằng:', opts: ['Dấu phẩy', 'Dấu chấm', 'Dấu chấm than'], a: 0, e: 'Dấu phẩy.' },
          ] },
      ] },
      { title: 'Thể loại văn bản', lessons: [
        { id: 'dongthoai', title: 'Truyện đồng thoại. Ngôi kể',
          theory: `<p><b>Truyện đồng thoại</b> là truyện viết cho thiếu nhi, nhân vật thường là loài vật hoặc đồ vật được nhân hoá, vừa mang đặc tính của loài vật vừa mang đặc điểm của con người.</p>
          <div class="note"><ul><li><b>Ngôi thứ nhất:</b> người kể xưng “tôi”, là nhân vật trong truyện, kể những gì mình thấy và trải qua.</li><li><b>Ngôi thứ ba:</b> người kể giấu mình, gọi nhân vật bằng tên, có thể kể mọi chuyện.</li></ul></div>
          <div class="vd"><p>Đoạn trích “Bài học đường đời đầu tiên” (Tô Hoài) kể theo ngôi thứ nhất: nhân vật Dế Mèn xưng “tôi”.</p></div>`,
          quiz: [
            { q: 'Nhân vật trong truyện đồng thoại thường là:', opts: ['Loài vật, đồ vật được nhân hoá', 'Các vị thần', 'Nhân vật lịch sử'], a: 0, e: 'Đặc trưng của truyện đồng thoại.' },
            { q: 'Người kể xưng “tôi” và là một nhân vật trong truyện. Đó là ngôi kể thứ mấy?', opts: ['Thứ nhất', 'Thứ hai', 'Thứ ba'], a: 0, keep: true, e: 'Ngôi thứ nhất.' },
            { q: 'Tác giả của “Dế Mèn phiêu lưu kí” là:', opts: ['Tô Hoài', 'Nguyễn Nhật Ánh', 'Võ Quảng', 'Thạch Lam'], a: 0, e: 'Nhà văn Tô Hoài.' },
            { q: 'Ưu điểm của ngôi kể thứ ba là:', opts: ['Người kể có thể kể linh hoạt mọi chuyện', 'Bộc lộ trực tiếp cảm xúc của “tôi”'], a: 0, keep: true, e: 'Người kể giấu mình, biết hết mọi chuyện.' },
          ] },
        { id: 'lucbat', title: 'Thơ lục bát',
          theory: `<p><b>Thơ lục bát</b> gồm các cặp câu: câu <b>6 tiếng</b> (lục) và câu <b>8 tiếng</b> (bát).</p>
          <div class="note"><ul><li><b>Vần:</b> tiếng thứ 6 câu 6 vần với tiếng thứ 6 câu 8; tiếng thứ 8 câu 8 vần với tiếng thứ 6 câu 6 tiếp theo.</li><li><b>Thanh:</b> các tiếng thứ 2, 6, 8 là thanh bằng, tiếng thứ 4 là thanh trắc. Trong câu 8, tiếng thứ 6 và thứ 8 thường một tiếng thanh huyền, một tiếng thanh ngang.</li><li><b>Nhịp:</b> thường ngắt nhịp chẵn (2/2/2, 4/4).</li></ul></div>
          <div class="vd"><p>Trong đầm gì đẹp bằng <mark>sen</mark><br>Lá xanh bông trắng lại <mark>chen</mark> nhị vàng. (ca dao)</p><p>“sen” (tiếng 6 câu 6) vần với “chen” (tiếng 6 câu 8).</p></div>`,
          quiz: [
            { q: 'Một cặp câu lục bát gồm:', opts: ['Câu 6 tiếng và câu 8 tiếng', 'Câu 7 tiếng và câu 8 tiếng', 'Hai câu 6 tiếng'], a: 0, e: 'Lục = 6, bát = 8.' },
            { q: 'Trong thơ lục bát, tiếng thứ 6 của câu 6 vần với:', opts: ['Tiếng thứ 6 của câu 8', 'Tiếng thứ 8 của câu 8', 'Tiếng thứ 2 của câu 8'], a: 0, e: 'Vần lưng ở tiếng thứ 6 câu bát.' },
            { q: 'Thơ lục bát thường ngắt nhịp:', opts: ['Chẵn (2/2/2, 4/4)', 'Lẻ (3/3)', 'Không ngắt nhịp'], a: 0, e: 'Nhịp chẵn là phổ biến.' },
            { q: 'Tiếng thứ 4 trong câu lục bát thường mang thanh:', opts: ['Trắc', 'Bằng'], a: 0, keep: true, e: 'Tiếng 2 bằng, 4 trắc, 6 bằng.' },
          ] },
        { id: 'truyenthuyet', title: 'Truyền thuyết và truyện cổ tích',
          theory: `<div class="tw"><table class="t"><tr><th></th><th>Truyền thuyết</th><th>Truyện cổ tích</th></tr>
          <tr><td>Nội dung</td><td>Liên quan đến sự kiện, nhân vật lịch sử</td><td>Cuộc sống, số phận con người bình thường</td></tr>
          <tr><td>Nhân vật</td><td>Người anh hùng có công với cộng đồng</td><td>Người mồ côi, người em, người dũng sĩ, người thông minh…</td></tr>
          <tr><td>Ý nghĩa</td><td>Thể hiện thái độ, cách đánh giá của nhân dân với lịch sử</td><td>Ước mơ về công bằng, cái thiện thắng cái ác</td></tr>
          <tr><td>Ví dụ</td><td>Thánh Gióng, Sơn Tinh – Thuỷ Tinh</td><td>Thạch Sanh, Cây khế</td></tr></table></div>
          <p>Cả hai đều có <b>yếu tố kì ảo</b>.</p>`,
          quiz: [
            { q: '“Thánh Gióng” thuộc thể loại:', opts: ['Truyền thuyết', 'Truyện cổ tích', 'Truyện đồng thoại'], a: 0, keep: true, e: 'Gắn với sự kiện chống giặc Ân thời Hùng Vương.' },
            { q: '“Thạch Sanh” thuộc thể loại:', opts: ['Truyền thuyết', 'Truyện cổ tích', 'Truyện đồng thoại'], a: 1, keep: true, e: 'Nhân vật dũng sĩ mồ côi, cái thiện thắng cái ác.' },
            { q: 'Truyện cổ tích thường thể hiện:', opts: ['Ước mơ về công bằng, cái thiện thắng cái ác', 'Các sự kiện lịch sử có thật', 'Cách làm thơ'], a: 0, e: 'Đặc điểm của truyện cổ tích.' },
            { q: 'Trong “Sơn Tinh – Thuỷ Tinh”, hiện tượng tự nhiên nào được giải thích?', opts: ['Lũ lụt hằng năm', 'Động đất', 'Nhật thực'], a: 0, e: 'Thuỷ Tinh dâng nước đánh Sơn Tinh hằng năm.' },
          ] },
      ] },
      { title: 'Các bài học trong sách', lessons: [
        soon('bai1', 'Bài 1. Tôi và các bạn'), soon('bai2', 'Bài 2. Gõ cửa trái tim'), soon('bai3', 'Bài 3. Yêu thương và chia sẻ'),
        soon('bai4', 'Bài 4. Quê hương yêu dấu'), soon('bai5', 'Bài 5. Những nẻo đường xứ sở'), soon('bai6', 'Bài 6. Chuyện kể về những người anh hùng'),
        soon('bai7', 'Bài 7. Thế giới cổ tích'), soon('bai8', 'Bài 8. Khác biệt và gần gũi'), soon('bai9', 'Bài 9. Trái Đất – ngôi nhà chung'), soon('bai10', 'Bài 10. Cuốn sách tôi yêu'),
      ] },
    ],
  };

  /* Tiếng Anh: xem file tienganh-lop6.js */
  const tienganh = window.HOCTAP_TA6;

  /* --------------------------- GIÁO DỤC CÔNG DÂN 6 --------------------------- */
  const gdcd = {
    id: 'gdcd', name: 'Giáo dục công dân', tt: 'GDCD', color: 'o', ill: 'gdcd', book: 'Giáo dục công dân 6 · Kết nối tri thức',
    chapters: [
      { title: 'Học kì 1', lessons: [
        soon('b1', 'Bài 1. Tự hào về truyền thống gia đình, dòng họ'),
        soon('b2', 'Bài 2. Yêu thương con người'),
        { id: 'b3', title: 'Bài 3. Siêng năng, kiên trì',
          theory: `<div class="note"><p><b>Siêng năng</b> là đức tính cần cù, tự giác, miệt mài làm việc thường xuyên.</p><p><b>Kiên trì</b> là quyết tâm làm đến cùng, không bỏ dở dù gặp khó khăn.</p></div>
          <p>Trái với siêng năng, kiên trì là: lười biếng, ỷ lại, ngại khó, dễ nản lòng.</p>
          <div class="tip"><p>Câu tục ngữ: “Có công mài sắt, có ngày nên kim.”</p></div>`,
          quiz: [
            { q: 'Câu tục ngữ nào nói về sự kiên trì?', opts: ['Có công mài sắt, có ngày nên kim', 'Ăn quả nhớ kẻ trồng cây', 'Lá lành đùm lá rách'], a: 0, e: 'Kiên trì làm thì sẽ thành công.' },
            { q: 'Biểu hiện nào trái với siêng năng?', opts: ['Gặp bài khó thì bỏ, chép lời giải trên mạng', 'Tự giác làm bài tập mỗi tối', 'Giúp mẹ việc nhà hằng ngày'], a: 0, e: 'Ngại khó, ỷ lại là trái với siêng năng, kiên trì.' },
            { q: 'Kiên trì là:', opts: ['Quyết tâm làm đến cùng dù gặp khó khăn', 'Làm thật nhanh cho xong', 'Chỉ làm việc mình thích'], a: 0, e: 'Định nghĩa kiên trì.' },
          ] },
        { id: 'b4', title: 'Bài 4. Tôn trọng sự thật',
          theory: `<p><b>Tôn trọng sự thật</b> là luôn nói đúng sự thật, suy nghĩ, hành động theo lẽ phải, không nói sai sự thật.</p>
          <div class="note"><ul><li>Giúp mọi người tin tưởng nhau, quan hệ tốt đẹp hơn.</li><li>Giúp bảo vệ lẽ phải, góp phần làm xã hội lành mạnh.</li></ul></div>`,
          quiz: [
            { q: 'Em lỡ làm vỡ lọ hoa ở nhà. Em nên:', opts: ['Nói thật với bố mẹ và xin lỗi', 'Đổ lỗi cho em mèo', 'Giấu mảnh vỡ đi'], a: 0, e: 'Nhận lỗi trung thực.' },
            { q: 'Biểu hiện nào thể hiện tôn trọng sự thật?', opts: ['Không chia sẻ tin đồn chưa kiểm chứng trên mạng', 'Nói dối để được điểm cao', 'Che giấu lỗi của bạn để bạn không bị phạt'], a: 0, e: 'Kiểm chứng thông tin trước khi chia sẻ.' },
          ] },
        soon('b5', 'Bài 5. Tự lập'),
        soon('b6', 'Bài 6. Tự nhận thức bản thân'),
      ] },
      { title: 'Học kì 2', lessons: [
        { id: 'b7', title: 'Bài 7. Ứng phó với tình huống nguy hiểm',
          theory: `<div class="tw"><table class="t"><tr><th>Số điện thoại</th><th>Dùng khi</th></tr><tr><td><b>113</b></td><td>Công an (gặp kẻ xấu, trộm cắp)</td></tr><tr><td><b>114</b></td><td>Cứu hoả, cứu nạn cứu hộ</td></tr><tr><td><b>115</b></td><td>Cấp cứu y tế</td></tr><tr><td><b>111</b></td><td>Tổng đài quốc gia bảo vệ trẻ em</td></tr></table></div>
          <div class="note"><p>Gặp nguy hiểm: <b>bình tĩnh</b>, tìm cách thoát ra nơi an toàn, kêu cứu, báo cho người lớn tin cậy hoặc gọi số khẩn cấp.</p></div>`,
          quiz: [
            { q: 'Thấy có người bị tai nạn cần cấp cứu, em gọi số:', opts: ['115', '113', '114', '111'], a: 0, e: '115 – cấp cứu y tế.' },
            { q: 'Thấy kẻ trộm đột nhập nhà hàng xóm, em gọi số:', opts: ['113', '115', '114'], a: 0, e: '113 – công an.' },
            { q: 'Số điện thoại tổng đài quốc gia bảo vệ trẻ em là:', a: ['111'], e: '111, miễn phí.' },
            { q: 'Có người lạ rủ đi chơi và cho quà khi em đang chờ bố mẹ đón. Em nên:', opts: ['Từ chối, đứng ở chỗ đông người và báo cho thầy cô', 'Đi theo vì người đó tốt bụng', 'Nhận quà rồi đi theo một đoạn'], a: 0, e: 'Không đi theo người lạ.' },
          ] },
        { id: 'b8', title: 'Bài 8. Tiết kiệm',
          theory: `<p><b>Tiết kiệm</b> là biết sử dụng hợp lí, đúng mức của cải, thời gian, sức lực của mình và của người khác.</p>
          <p>Trái với tiết kiệm: hoang phí, xa hoa. Nhưng tiết kiệm cũng khác với <b>keo kiệt, bủn xỉn</b>.</p>`,
          quiz: [
            { q: 'Việc làm nào thể hiện tiết kiệm?', opts: ['Tắt điện khi ra khỏi phòng', 'Mở vòi nước khi đánh răng', 'Mua đồ chơi mới mỗi tuần dù chưa cần'], a: 0, e: 'Sử dụng điện hợp lí.' },
            { q: 'Tiết kiệm khác với keo kiệt ở chỗ:', opts: ['Tiết kiệm là dùng hợp lí, vẫn chi khi cần thiết', 'Tiết kiệm là không bao giờ tiêu tiền'], a: 0, keep: true, e: 'Keo kiệt là không chịu chi kể cả khi cần.' },
            { q: 'Tiết kiệm thời gian là:', opts: ['Lập kế hoạch học tập, làm việc hợp lí', 'Thức khuya chơi điện tử', 'Để việc hôm nay sang ngày mai'], a: 0, e: 'Sử dụng thời gian có kế hoạch.' },
          ] },
        { id: 'b9', title: 'Bài 9. Công dân nước Cộng hoà xã hội chủ nghĩa Việt Nam',
          theory: `<div class="note"><p><b>Công dân</b> là người dân của một nước. Căn cứ để xác định công dân của một nước là <b>quốc tịch</b>.</p><p>Người có quốc tịch Việt Nam là công dân nước Cộng hoà xã hội chủ nghĩa Việt Nam.</p></div>`,
          quiz: [
            { q: 'Căn cứ để xác định công dân của một nước là:', opts: ['Quốc tịch', 'Nơi sinh sống', 'Ngôn ngữ nói'], a: 0, e: 'Quốc tịch.' },
            { q: 'Bạn nhỏ có quốc tịch Việt Nam, đang du học ở Nhật Bản có phải công dân Việt Nam không?', opts: ['Có', 'Không'], a: 0, keep: true, e: 'Vẫn có quốc tịch Việt Nam.' },
          ] },
        soon('b10', 'Bài 10. Quyền và nghĩa vụ cơ bản của công dân'),
        { id: 'b11', title: 'Bài 11. Quyền cơ bản của trẻ em',
          theory: `<p>Theo Luật Trẻ em Việt Nam, <b>trẻ em là người dưới 16 tuổi</b>.</p>
          <div class="tw"><table class="t"><tr><th>Nhóm quyền</th><th>Ví dụ</th></tr><tr><td>Quyền được sống còn</td><td>được khai sinh, chăm sóc sức khoẻ, nuôi dưỡng</td></tr><tr><td>Quyền được bảo vệ</td><td>không bị xâm hại, bạo lực, bóc lột</td></tr><tr><td>Quyền được phát triển</td><td>được học tập, vui chơi, giải trí</td></tr><tr><td>Quyền được tham gia</td><td>được bày tỏ ý kiến về những việc liên quan đến mình</td></tr></table></div>`,
          quiz: [
            { q: 'Theo Luật Trẻ em Việt Nam, trẻ em là người:', opts: ['Dưới 16 tuổi', 'Dưới 18 tuổi', 'Dưới 12 tuổi'], a: 0, e: 'Dưới 16 tuổi.' },
            { q: 'Được đi học thuộc nhóm quyền nào?', opts: ['Quyền được phát triển', 'Quyền được bảo vệ', 'Quyền được tham gia'], a: 0, e: 'Học tập giúp trẻ phát triển.' },
            { q: 'Được bày tỏ ý kiến về việc chọn câu lạc bộ ở trường thuộc nhóm quyền nào?', opts: ['Quyền được tham gia', 'Quyền được sống còn', 'Quyền được bảo vệ'], a: 0, e: 'Quyền được tham gia.' },
          ] },
        soon('b12', 'Bài 12. Thực hiện quyền trẻ em'),
      ] },
    ],
  };

  /* --------------------------- LỊCH SỬ VÀ ĐỊA LÍ 6 --------------------------- */
  const lsdl = {
    id: 'lsdl', name: 'Lịch sử và Địa lí', tt: 'Sử Địa', color: 'g', ill: 'lsdl', book: 'Lịch sử và Địa lí 6 · Kết nối tri thức',
    chapters: [
      { title: 'Phân môn Lịch sử', lessons: [
        { id: 'thoigian', title: 'Thời gian trong lịch sử',
          theory: `<ul><li><b>Âm lịch</b>: tính theo chu kì Mặt Trăng quay quanh Trái Đất.</li><li><b>Dương lịch</b>: tính theo chu kì Trái Đất quay quanh Mặt Trời.</li></ul>
          <div class="note"><p>1 thập kỉ = 10 năm · 1 thế kỉ = 100 năm · 1 thiên niên kỉ = 1 000 năm.</p><p>Năm 1 là năm đầu Công nguyên (CN). Trước năm 1 là trước Công nguyên (TCN).</p></div>
          <div class="vd"><p>Thế kỉ I: từ năm 1 đến năm 100 · Thế kỉ XXI: từ năm 2001 đến năm 2100. Năm 2026 thuộc thế kỉ <b>XXI</b>.</p><p>Năm 179 TCN cách năm 2026: 179 + 2026 = <b>2 205</b> năm.</p></div>`,
          quiz: [
            { q: 'Một thế kỉ là bao nhiêu năm?', a: ['100'], e: '1 thế kỉ = 100 năm.' },
            { q: 'Năm 1945 thuộc thế kỉ nào?', opts: ['XX', 'XIX', 'XXI'], a: 0, keep: true, e: 'Thế kỉ XX: 1901 – 2000.' },
            { q: 'Dương lịch được tính dựa theo:', opts: ['Chu kì Trái Đất quay quanh Mặt Trời', 'Chu kì Mặt Trăng quay quanh Trái Đất'], a: 0, keep: true, e: 'Dương lịch theo Mặt Trời.' },
            { q: 'Năm 40 (khởi nghĩa Hai Bà Trưng) cách năm 2026 bao nhiêu năm?', a: ['1986', '1 986'], e: '2026 − 40 = 1 986.' },
            { q: 'Năm 111 TCN cách năm 2026 bao nhiêu năm?', a: ['2137', '2 137'], e: '111 + 2026 = 2 137.' },
          ] },
        soon('nguongoc', 'Nguồn gốc loài người'),
        soon('nguyenthuy', 'Xã hội nguyên thuỷ'),
        soon('aicap', 'Ai Cập và Lưỡng Hà cổ đại'),
        soon('ando', 'Ấn Độ cổ đại'),
        soon('trungquoc', 'Trung Quốc từ thời cổ đại đến thế kỉ VII'),
        soon('hylap', 'Hy Lạp và La Mã cổ đại'),
        soon('dna', 'Các quốc gia sơ kì ở Đông Nam Á'),
        { id: 'vanlang', title: 'Nhà nước Văn Lang, Âu Lạc',
          theory: `<div class="tw"><table class="t"><tr><th></th><th>Văn Lang</th><th>Âu Lạc</th></tr>
          <tr><td>Thời gian</td><td>Khoảng thế kỉ VII TCN</td><td>Khoảng năm 208 TCN</td></tr>
          <tr><td>Người đứng đầu</td><td>Hùng Vương</td><td>An Dương Vương (Thục Phán)</td></tr>
          <tr><td>Kinh đô</td><td>Phong Châu (Phú Thọ)</td><td>Phong Khê (Cổ Loa, Đông Anh, Hà Nội)</td></tr></table></div>
          <p>Giúp việc cho vua Hùng có Lạc hầu, Lạc tướng; đứng đầu các chiềng, chạ là bồ chính.</p>
          <div class="note"><p>Đời sống: ở nhà sàn, ăn cơm nếp, nhuộm răng, ăn trầu, xăm mình; lễ hội đua thuyền, đánh trống đồng. <b>Trống đồng Đông Sơn</b> là biểu tượng văn hoá tiêu biểu.</p></div>`,
          quiz: [
            { q: 'Nhà nước đầu tiên của người Việt là:', opts: ['Văn Lang', 'Âu Lạc', 'Đại Việt', 'Đại Cồ Việt'], a: 0, e: 'Văn Lang, khoảng thế kỉ VII TCN.' },
            { q: 'Kinh đô của nước Văn Lang là:', opts: ['Phong Châu', 'Cổ Loa', 'Hoa Lư', 'Thăng Long'], a: 0, e: 'Phong Châu (Phú Thọ ngày nay).' },
            { q: 'Người lập ra nước Âu Lạc là:', opts: ['An Dương Vương (Thục Phán)', 'Hùng Vương', 'Ngô Quyền'], a: 0, e: 'Thục Phán – An Dương Vương.' },
            { q: 'Thành Cổ Loa ngày nay thuộc:', opts: ['Hà Nội', 'Phú Thọ', 'Ninh Bình'], a: 0, e: 'Huyện Đông Anh, Hà Nội.' },
            { q: 'Hiện vật tiêu biểu cho văn hoá thời Văn Lang – Âu Lạc là:', opts: ['Trống đồng Đông Sơn', 'Kim tự tháp', 'Vạn Lí Trường Thành'], a: 0, e: 'Trống đồng Đông Sơn.' },
          ] },
        soon('bacthuoc', 'Thời kì Bắc thuộc và các cuộc khởi nghĩa tiêu biểu'),
        soon('bachdang', 'Bước ngoặt lịch sử đầu thế kỉ X'),
      ] },
      { title: 'Phân môn Địa lí', lessons: [
        { id: 'kinhvi', title: 'Hệ thống kinh, vĩ tuyến. Toạ độ địa lí',
          theory: `<ul><li><b>Kinh tuyến</b>: nửa đường tròn nối cực Bắc với cực Nam. Kinh tuyến gốc (0°) đi qua đài thiên văn Grin-uých (Luân Đôn, Anh).</li><li><b>Vĩ tuyến</b>: vòng tròn vuông góc với kinh tuyến. Vĩ tuyến gốc (0°) là <b>Xích đạo</b>.</li></ul>
          <div class="note"><p>Toạ độ địa lí của một điểm gồm <b>kinh độ</b> và <b>vĩ độ</b> của điểm đó.</p></div>`,
          quiz: [
            { q: 'Vĩ tuyến gốc (0°) là:', opts: ['Xích đạo', 'Chí tuyến Bắc', 'Vòng cực'], a: 0, e: 'Xích đạo là vĩ tuyến dài nhất.' },
            { q: 'Kinh tuyến gốc đi qua đài thiên văn Grin-uých ở nước:', opts: ['Anh', 'Pháp', 'Mỹ', 'Đức'], a: 0, e: 'Luân Đôn, nước Anh.' },
            { q: 'Toạ độ địa lí của một điểm gồm:', opts: ['Kinh độ và vĩ độ', 'Độ cao và độ sâu', 'Chiều dài và chiều rộng'], a: 0, e: 'Kinh độ và vĩ độ.' },
          ] },
        { id: 'tile', title: 'Tỉ lệ bản đồ. Tính khoảng cách thực tế',
          theory: `<p>Tỉ lệ bản đồ cho biết mức độ thu nhỏ so với thực tế. Tỉ lệ <b>1 : 100 000</b> nghĩa là 1 cm trên bản đồ ứng với 100 000 cm = <b>1 km</b> ngoài thực tế.</p>
          <div class="note"><p class="big">Khoảng cách thực tế = Khoảng cách trên bản đồ × mẫu số tỉ lệ</p></div>
          <div class="vd"><p>Bản đồ tỉ lệ 1 : 500 000, đo được 4 cm → thực tế 4 × 500 000 = 2 000 000 cm = <b>20 km</b>.</p></div>
          <div class="tip"><p>Đổi nhanh: bỏ 5 chữ số 0 ở cm là ra km (100 000 cm = 1 km).</p></div>`,
          quiz: [
            { q: 'Bản đồ tỉ lệ 1 : 100 000. Khoảng cách 5 cm trên bản đồ ứng với bao nhiêu km ngoài thực tế?', a: ['5'], e: '5 × 100 000 = 500 000 cm = 5 km.' },
            { q: 'Bản đồ tỉ lệ 1 : 500 000. Đo được 4 cm. Khoảng cách thực tế là bao nhiêu km?', a: ['20'], e: '4 × 500 000 = 2 000 000 cm = 20 km.' },
            { q: 'Bản đồ tỉ lệ 1 : 1 000 000. Hai thành phố cách nhau 3 cm trên bản đồ. Thực tế cách nhau bao nhiêu km?', a: ['30'], e: '3 × 1 000 000 = 3 000 000 cm = 30 km.' },
            { q: 'Bản đồ nào thể hiện chi tiết hơn?', opts: ['Tỉ lệ 1 : 10 000', 'Tỉ lệ 1 : 1 000 000'], a: 0, keep: true, e: 'Mẫu số càng nhỏ, bản đồ càng chi tiết.' },
          ] },
        { id: 'tudquay', title: 'Chuyển động của Trái Đất',
          theory: `<h3>Tự quay quanh trục</h3><ul><li>Hướng: từ <b>Tây sang Đông</b>. Thời gian: khoảng <b>24 giờ</b> một vòng.</li><li>Hệ quả: ngày đêm luân phiên; giờ ở các nơi khác nhau; vật chuyển động bị lệch hướng.</li></ul>
          <h3>Quay quanh Mặt Trời</h3><ul><li>Thời gian: <b>365 ngày 6 giờ</b> một vòng. Quỹ đạo hình elip.</li><li>Trục Trái Đất nghiêng và không đổi hướng → sinh ra <b>các mùa</b>.</li></ul>`,
          quiz: [
            { q: 'Trái Đất tự quay quanh trục theo hướng:', opts: ['Từ Tây sang Đông', 'Từ Đông sang Tây', 'Từ Bắc xuống Nam'], a: 0, e: 'Vì vậy ta thấy Mặt Trời mọc ở phía Đông.' },
            { q: 'Trái Đất tự quay một vòng quanh trục hết khoảng bao nhiêu giờ?', a: ['24'], e: 'Khoảng 24 giờ (một ngày đêm).' },
            { q: 'Hiện tượng ngày đêm luân phiên là do:', opts: ['Trái Đất tự quay quanh trục', 'Mặt Trăng quay quanh Trái Đất', 'Gió thổi'], a: 0, e: 'Hệ quả của chuyển động tự quay.' },
            { q: 'Trái Đất quay một vòng quanh Mặt Trời hết:', opts: ['365 ngày 6 giờ', '24 giờ', '30 ngày'], a: 0, e: 'Đó là một năm.' },
          ] },
        { id: 'cautao', title: 'Cấu tạo của Trái Đất. Động đất và núi lửa',
          theory: `<p>Trái Đất gồm ba lớp từ ngoài vào trong: <b>vỏ Trái Đất → man-ti (lớp phủ) → nhân (lõi)</b>.</p>
          <div class="note"><ul><li>Vỏ Trái Đất mỏng nhất, là nơi tồn tại sự sống.</li><li>Vỏ Trái Đất bị chia thành các <b>mảng kiến tạo</b>. Nơi các mảng tiếp xúc hay xảy ra động đất, núi lửa.</li></ul></div>`,
          quiz: [
            { q: 'Lớp nào của Trái Đất mỏng nhất?', opts: ['Vỏ Trái Đất', 'Man-ti', 'Nhân'], a: 0, keep: true, e: 'Vỏ Trái Đất mỏng nhất.' },
            { q: 'Động đất, núi lửa thường xảy ra ở:', opts: ['Nơi tiếp xúc giữa các mảng kiến tạo', 'Giữa các đồng bằng', 'Ở các cực'], a: 0, e: 'Vùng tiếp xúc mảng kiến tạo.' },
            { q: 'Thứ tự các lớp từ ngoài vào trong là:', opts: ['Vỏ → man-ti → nhân', 'Nhân → man-ti → vỏ', 'Man-ti → vỏ → nhân'], a: 0, e: 'Vỏ ở ngoài cùng, nhân ở trong cùng.' },
          ] },
        soon('khiquyen', 'Lớp vỏ khí. Khí áp và gió'),
        soon('songho', 'Sông và hồ. Biển và đại dương'),
      ] },
    ],
  };

  /* -------------------------- KHOA HỌC TỰ NHIÊN 6 -------------------------- */
  const khtn = {
    id: 'khtn', name: 'Khoa học tự nhiên', tt: 'KHTN', color: 'p', ill: 'khtn', book: 'Khoa học tự nhiên 6 · Kết nối tri thức',
    chapters: [
      { title: 'Các phép đo', lessons: [
        { id: 'phepdo', title: 'Đo chiều dài, khối lượng, thời gian, nhiệt độ',
          theory: `<div class="tw"><table class="t"><tr><th>Đại lượng</th><th>Đơn vị chuẩn</th><th>Dụng cụ đo</th></tr>
          <tr><td>Chiều dài</td><td>mét (m)</td><td>thước</td></tr><tr><td>Khối lượng</td><td>ki-lô-gam (kg)</td><td>cân</td></tr>
          <tr><td>Thời gian</td><td>giây (s)</td><td>đồng hồ</td></tr><tr><td>Nhiệt độ</td><td>°C (thường dùng), K, °F</td><td>nhiệt kế</td></tr></table></div>
          <div class="note"><p><b>GHĐ</b> (giới hạn đo): giá trị lớn nhất ghi trên dụng cụ. <b>ĐCNN</b> (độ chia nhỏ nhất): hiệu giá trị hai vạch chia liên tiếp.</p></div>
          <div class="tip"><p>Nước đá tan: 0 °C = 32 °F. Nước sôi: 100 °C = 212 °F. Đổi: °F = °C × 1,8 + 32.</p></div>`,
          quiz: [
            { q: 'Đơn vị đo khối lượng trong hệ đơn vị chuẩn (SI) là:', opts: ['kg', 'g', 'tấn', 'lạng'], a: 0, e: 'Ki-lô-gam (kg).' },
            { q: 'Thước có vạch lớn nhất là 30 cm, giữa hai vạch liền nhau là 1 mm. ĐCNN của thước là:', opts: ['1 mm', '30 cm', '1 cm'], a: 0, e: 'ĐCNN = khoảng cách 2 vạch liền kề = 1 mm.' },
            { q: 'GHĐ của thước ở câu trên là:', opts: ['30 cm', '1 mm', '31 cm'], a: 0, e: 'Giá trị lớn nhất ghi trên thước.' },
            { q: '100 °C bằng bao nhiêu °F?', a: ['212'], e: '100 × 1,8 + 32 = 212.' },
            { q: 'Dụng cụ đo nhiệt độ cơ thể là:', opts: ['Nhiệt kế y tế', 'Lực kế', 'Cân'], a: 0, e: 'Nhiệt kế y tế.' },
          ] },
      ] },
      { title: 'Chất quanh ta', lessons: [
        { id: 'theChat', title: 'Các thể của chất và sự chuyển thể',
          theory: `<p>Chất tồn tại ở ba thể: <b>rắn, lỏng, khí</b>.</p>
          <div class="tw"><table class="t"><tr><th>Quá trình</th><th>Chuyển từ → sang</th><th>Ví dụ</th></tr>
          <tr><td>Nóng chảy</td><td>rắn → lỏng</td><td>đá tan thành nước</td></tr><tr><td>Đông đặc</td><td>lỏng → rắn</td><td>nước để tủ đá thành đá</td></tr>
          <tr><td>Bay hơi</td><td>lỏng → khí</td><td>phơi quần áo khô</td></tr><tr><td>Ngưng tụ</td><td>khí → lỏng</td><td>hơi nước đọng trên nắp nồi</td></tr></table></div>
          <div class="note"><p><b>Sự sôi</b> là sự bay hơi xảy ra cả trên mặt thoáng và trong lòng chất lỏng. Nước sôi ở 100 °C (áp suất thường).</p></div>`,
          quiz: [
            { q: 'Cục nước đá để ngoài trời tan thành nước. Đây là sự:', opts: ['Nóng chảy', 'Đông đặc', 'Ngưng tụ', 'Bay hơi'], a: 0, e: 'Rắn → lỏng.' },
            { q: 'Hơi nước đọng thành giọt trên nắp nồi. Đây là sự:', opts: ['Ngưng tụ', 'Bay hơi', 'Nóng chảy'], a: 0, e: 'Khí → lỏng.' },
            { q: 'Ở áp suất thường, nước sôi ở bao nhiêu °C?', a: ['100'], e: '100 °C.' },
            { q: 'Chất nào ở thể khí ở nhiệt độ phòng?', opts: ['Oxygen', 'Sắt', 'Nước', 'Muối ăn'], a: 0, e: 'Oxygen là chất khí.' },
          ] },
        { id: 'oxygen', title: 'Oxygen. Không khí',
          theory: `<div class="note"><p>Thành phần không khí (theo thể tích): khoảng <b>78% nitrogen</b>, <b>21% oxygen</b>, 1% các khí khác (carbon dioxide, hơi nước, khí hiếm…).</p></div>
          <p>Oxygen là chất khí không màu, không mùi, ít tan trong nước, <b>duy trì sự cháy và sự sống</b>.</p>
          <p>Ô nhiễm không khí do khói xe, khí thải nhà máy, đốt rác… Biện pháp: trồng cây xanh, dùng phương tiện công cộng, không đốt rác.</p>`,
          quiz: [
            { q: 'Khí chiếm tỉ lệ lớn nhất trong không khí là:', opts: ['Nitrogen', 'Oxygen', 'Carbon dioxide'], a: 0, e: 'Khoảng 78%.' },
            { q: 'Oxygen chiếm khoảng bao nhiêu phần trăm thể tích không khí? (chỉ gõ số)', a: ['21'], e: 'Khoảng 21%.' },
            { q: 'Khí nào duy trì sự cháy?', opts: ['Oxygen', 'Nitrogen', 'Hơi nước'], a: 0, e: 'Oxygen duy trì sự cháy.' },
            { q: 'Biện pháp nào giúp giảm ô nhiễm không khí?', opts: ['Trồng nhiều cây xanh', 'Đốt rác thải', 'Đi xe máy cả quãng đường ngắn'], a: 0, e: 'Cây xanh hấp thụ khí carbon dioxide và tạo ra oxygen.' },
          ] },
        { id: 'honhop', title: 'Hỗn hợp. Tách chất ra khỏi hỗn hợp',
          theory: `<ul><li><b>Chất tinh khiết</b>: chỉ gồm một chất (nước cất).</li><li><b>Hỗn hợp</b>: gồm hai hay nhiều chất trộn lẫn (nước muối, không khí).</li><li><b>Dung dịch</b>: hỗn hợp đồng nhất của dung môi và chất tan (nước đường).</li><li><b>Huyền phù</b>: chất rắn lơ lửng trong chất lỏng (nước phù sa). <b>Nhũ tương</b>: chất lỏng phân tán trong chất lỏng (dầu ăn lắc với nước).</li></ul>
          <div class="note"><p>Cách tách chất: <b>lọc</b> (tách chất rắn không tan), <b>cô cạn</b> (lấy chất rắn tan trong nước), <b>chiết</b> (tách hai chất lỏng không hoà tan vào nhau).</p></div>`,
          quiz: [
            { q: 'Muốn lấy muối từ nước muối, ta dùng cách:', opts: ['Cô cạn', 'Lọc', 'Chiết'], a: 0, e: 'Đun cho nước bay hơi hết, còn lại muối.' },
            { q: 'Muốn tách cát ra khỏi nước, ta dùng cách:', opts: ['Lọc', 'Cô cạn', 'Chiết'], a: 0, e: 'Cát không tan, giữ lại trên giấy lọc.' },
            { q: 'Muốn tách dầu ăn ra khỏi nước, ta dùng cách:', opts: ['Chiết', 'Lọc', 'Cô cạn'], a: 0, e: 'Dầu nổi trên nước, dùng phễu chiết.' },
            { q: 'Nước đường là:', opts: ['Dung dịch', 'Huyền phù', 'Chất tinh khiết'], a: 0, e: 'Đường tan đều trong nước.' },
          ] },
      ] },
      { title: 'Tế bào – đơn vị cơ sở của sự sống', lessons: [
        { id: 'tebao', title: 'Tế bào. Cấu tạo và chức năng',
          theory: `<p><b>Tế bào</b> là đơn vị cơ sở cấu tạo nên mọi cơ thể sống.</p>
          <div class="note"><p>Tế bào gồm 3 thành phần chính: <b>màng tế bào</b>, <b>tế bào chất</b>, <b>nhân</b> (hoặc vùng nhân).</p></div>
          <ul><li><b>Tế bào nhân sơ</b> (vi khuẩn): chưa có màng nhân, chỉ có vùng nhân.</li><li><b>Tế bào nhân thực</b> (động vật, thực vật, nấm): có nhân hoàn chỉnh.</li><li>Tế bào thực vật có thêm <b>thành tế bào</b> và <b>lục lạp</b> (quang hợp).</li></ul>
          <div class="vd"><p>Một tế bào phân chia tạo ra 2 tế bào con. Sau 3 lần phân chia liên tiếp: 1 → 2 → 4 → 8 tế bào (= ${sup(2, 3)}).</p></div>`,
          quiz: [
            { q: 'Thành phần nào chỉ có ở tế bào thực vật, không có ở tế bào động vật?', opts: ['Lục lạp', 'Màng tế bào', 'Nhân', 'Tế bào chất'], a: 0, e: 'Lục lạp giúp thực vật quang hợp.' },
            { q: 'Vi khuẩn có tế bào:', opts: ['Nhân sơ', 'Nhân thực'], a: 0, keep: true, e: 'Vi khuẩn chưa có màng nhân.' },
            { q: 'Một tế bào phân chia 4 lần liên tiếp tạo ra bao nhiêu tế bào con?', a: ['16'], e: '2⁴ = 16.' },
            { q: 'Ba thành phần chính của tế bào là:', opts: ['Màng tế bào, tế bào chất, nhân', 'Rễ, thân, lá', 'Da, cơ, xương'], a: 0, e: 'Màng, tế bào chất, nhân (vùng nhân).' },
          ] },
        soon('cothe', 'Từ tế bào đến cơ thể'),
      ] },
      { title: 'Đa dạng thế giới sống', lessons: [
        soon('phanloai', 'Phân loại thế giới sống'),
        soon('virus', 'Virus và vi khuẩn'),
        soon('thucvat', 'Đa dạng thực vật'),
        soon('dongvat', 'Đa dạng động vật'),
      ] },
      { title: 'Năng lượng và cuộc sống', lessons: [
        { id: 'luc', title: 'Lực và biểu diễn lực. Trọng lượng',
          theory: `<p>Tác dụng đẩy hoặc kéo của vật này lên vật khác gọi là <b>lực</b>. Đơn vị lực là <b>niutơn (N)</b>, đo bằng <b>lực kế</b>.</p>
          <div class="note"><p>Lực có thể làm vật: thay đổi tốc độ, thay đổi hướng chuyển động, hoặc bị biến dạng.</p><p><b>Trọng lượng</b> là độ lớn lực hút của Trái Đất tác dụng lên vật: P ≈ 10 · m (m tính bằng kg, P tính bằng N).</p></div>`,
          quiz: [
            { q: 'Đơn vị đo lực là:', opts: ['Niutơn (N)', 'Ki-lô-gam (kg)', 'Mét (m)'], a: 0, e: 'Niutơn, kí hiệu N.' },
            { q: 'Một vật có khối lượng 5 kg có trọng lượng khoảng bao nhiêu N?', a: ['50'], e: 'P = 10 · 5 = 50 N.' },
            { q: 'Dụng cụ đo lực là:', opts: ['Lực kế', 'Nhiệt kế', 'Đồng hồ'], a: 0, e: 'Lực kế.' },
            { q: 'Bóp quả bóng cao su làm quả bóng méo đi. Lực đã làm quả bóng:', opts: ['Bị biến dạng', 'Đổi hướng chuyển động', 'Đứng yên'], a: 0, e: 'Hình dạng thay đổi.' },
          ] },
        soon('nangluong', 'Năng lượng và sự chuyển hoá năng lượng'),
        soon('traidat', 'Trái Đất và bầu trời'),
      ] },
    ],
  };

  /* ------------------------------ CÔNG NGHỆ 6 ------------------------------ */
  const congnghe = {
    id: 'congnghe', name: 'Công nghệ', tt: 'CN', color: 'y', ill: 'congnghe', book: 'Công nghệ 6 · Kết nối tri thức',
    chapters: [
      { title: 'Chương 1. Nhà ở', lessons: [
        { id: 'nhao', title: 'Khái quát về nhà ở',
          theory: `<p>Nhà ở là nơi trú ngụ, bảo vệ con người trước thời tiết, đáp ứng nhu cầu sinh hoạt của gia đình.</p>
          <div class="note"><p>Các bộ phận chính: <b>móng nhà, sàn nhà, khung nhà, tường, mái nhà, cửa ra vào, cửa sổ</b>.</p></div>
          <p>Một số kiểu nhà ở Việt Nam: nhà ba gian truyền thống, nhà liên kế (nhà ống), nhà chung cư, nhà sàn, nhà nổi.</p>`,
          quiz: [
            { q: 'Bộ phận nào nằm sâu dưới đất, đỡ toàn bộ ngôi nhà?', opts: ['Móng nhà', 'Mái nhà', 'Tường'], a: 0, e: 'Móng nhà chịu lực cho cả ngôi nhà.' },
            { q: 'Kiểu nhà thường thấy ở vùng sông nước miền Tây Nam Bộ là:', opts: ['Nhà nổi', 'Nhà sàn trên núi', 'Nhà ba gian'], a: 0, e: 'Nhà nổi trên sông.' },
            { q: 'Bộ phận che chắn, bảo vệ ngôi nhà khỏi mưa nắng từ phía trên là:', opts: ['Mái nhà', 'Sàn nhà', 'Móng nhà'], a: 0, e: 'Mái nhà.' },
          ] },
        { id: 'nangluong', title: 'Sử dụng năng lượng trong gia đình tiết kiệm, hiệu quả',
          theory: `<div class="note"><ul><li>Tắt các đồ dùng điện khi không sử dụng.</li><li>Dùng đồ dùng tiết kiệm điện (đèn LED, thiết bị có nhãn năng lượng).</li><li>Tận dụng ánh sáng và gió tự nhiên.</li><li>Điều chỉnh ngọn lửa bếp gas phù hợp với đáy nồi.</li></ul></div>`,
          quiz: [
            { q: 'Loại bóng đèn nào tiết kiệm điện nhất?', opts: ['Đèn LED', 'Đèn sợi đốt', 'Cả hai như nhau'], a: 0, e: 'Đèn LED tiêu thụ ít điện hơn nhiều.' },
            { q: 'Việc làm nào gây lãng phí năng lượng?', opts: ['Bật điều hoà nhưng mở cửa sổ', 'Tắt quạt khi ra ngoài', 'Kéo rèm lấy ánh sáng ban ngày'], a: 0, e: 'Hơi lạnh thoát ra ngoài, tốn điện.' },
          ] },
        soon('nhathongminh', 'Ngôi nhà thông minh'),
      ] },
      { title: 'Chương 2. Bảo quản và chế biến thực phẩm', lessons: [
        { id: 'thucpham', title: 'Thực phẩm và dinh dưỡng',
          theory: `<div class="tw"><table class="t"><tr><th>Nhóm chất</th><th>Có nhiều trong</th><th>Vai trò</th></tr>
          <tr><td>Tinh bột, đường</td><td>gạo, ngô, khoai, bánh mì</td><td>Cung cấp năng lượng chính</td></tr>
          <tr><td>Chất đạm</td><td>thịt, cá, trứng, sữa, đậu</td><td>Xây dựng, phát triển cơ thể</td></tr>
          <tr><td>Chất béo</td><td>mỡ, dầu ăn, bơ, lạc</td><td>Cung cấp năng lượng, giữ ấm</td></tr>
          <tr><td>Vitamin, chất khoáng</td><td>rau xanh, trái cây</td><td>Tăng sức đề kháng, giúp cơ thể khoẻ mạnh</td></tr></table></div>
          <p>Cách bảo quản: làm lạnh, đông lạnh, làm khô, ướp muối. Chế biến: không dùng nhiệt (trộn, muối chua) và dùng nhiệt (luộc, kho, nướng, rán).</p>`,
          quiz: [
            { q: 'Thực phẩm nào giàu chất đạm?', opts: ['Trứng', 'Gạo', 'Dầu ăn', 'Cải xanh'], a: 0, e: 'Trứng giàu chất đạm.' },
            { q: 'Nhóm thực phẩm cung cấp năng lượng chính cho cơ thể là:', opts: ['Tinh bột, đường', 'Vitamin', 'Chất khoáng'], a: 0, e: 'Gạo, ngô, khoai…' },
            { q: 'Rau xanh, trái cây cung cấp nhiều:', opts: ['Vitamin và chất khoáng', 'Chất béo', 'Chất đạm'], a: 0, e: 'Giúp tăng sức đề kháng.' },
            { q: 'Làm dưa cải muối chua là phương pháp chế biến:', opts: ['Không dùng nhiệt', 'Dùng nhiệt'], a: 0, keep: true, e: 'Không đun nấu.' },
          ] },
      ] },
      { title: 'Chương 3. Trang phục và thời trang', lessons: [
        { id: 'vai', title: 'Các loại vải thường dùng trong may mặc',
          theory: `<div class="tw"><table class="t"><tr><th>Loại vải</th><th>Nguồn gốc</th><th>Đặc điểm</th></tr>
          <tr><td>Sợi thiên nhiên</td><td>bông, lanh, tơ tằm, len</td><td>Thấm hút tốt, thoáng mát, dễ nhàu</td></tr>
          <tr><td>Sợi hoá học</td><td>nhân tạo, tổng hợp (từ gỗ, dầu mỏ…)</td><td>Bền, ít nhàu, thấm hút kém (sợi tổng hợp)</td></tr>
          <tr><td>Sợi pha</td><td>pha giữa hai loại trên</td><td>Kết hợp ưu điểm của cả hai</td></tr></table></div>`,
          quiz: [
            { q: 'Vải sợi bông có đặc điểm:', opts: ['Thấm hút tốt, thoáng mát, dễ nhàu', 'Không thấm nước, không nhàu'], a: 0, keep: true, e: 'Vải sợi thiên nhiên.' },
            { q: 'Mùa hè nóng nực nên chọn quần áo bằng vải:', opts: ['Sợi bông', 'Sợi tổng hợp dày'], a: 0, keep: true, e: 'Thấm mồ hôi, thoáng mát.' },
            { q: 'Tơ tằm thuộc loại vải:', opts: ['Sợi thiên nhiên', 'Sợi hoá học', 'Sợi pha'], a: 0, e: 'Từ kén tằm.' },
          ] },
      ] },
      { title: 'Chương 4. Đồ dùng điện trong gia đình', lessons: [
        soon('dendien', 'Đèn điện'), soon('noicom', 'Nồi cơm điện'), soon('bep', 'Bếp hồng ngoại'), soon('antoandien', 'An toàn điện trong gia đình'),
      ] },
    ],
  };

  /* ------------------------------- TIN HỌC 6 ------------------------------- */
  const tin = {
    id: 'tin', name: 'Tin học', tt: 'Tin', color: 'b', ill: 'tin', book: 'Tin học 6 · Kết nối tri thức',
    chapters: [
      { title: 'Chủ đề 1. Máy tính và cộng đồng', lessons: [
        { id: 'thongtin', title: 'Thông tin và dữ liệu. Xử lí thông tin',
          theory: `<ul><li><b>Dữ liệu</b>: được thể hiện dưới dạng chữ, số, hình ảnh, âm thanh…</li><li><b>Thông tin</b>: ý nghĩa mà con người hiểu được từ dữ liệu.</li><li><b>Vật mang tin</b>: giấy, ảnh, thẻ nhớ, USB, đĩa…</li></ul>
          <div class="note"><p>Bốn hoạt động xử lí thông tin: <b>thu nhận → xử lí → lưu trữ → truyền</b>.</p><p>Máy tính có các bộ phận tương ứng: thiết bị vào (bàn phím, chuột), bộ xử lí (CPU), bộ nhớ, thiết bị ra (màn hình, loa, máy in).</p></div>`,
          quiz: [
            { q: 'Thiết bị nào là thiết bị vào (nhập dữ liệu)?', opts: ['Bàn phím', 'Màn hình', 'Loa', 'Máy in'], a: 0, e: 'Bàn phím, chuột, micro… là thiết bị vào.' },
            { q: 'Thiết bị nào là thiết bị ra?', opts: ['Máy in', 'Chuột', 'Bàn phím'], a: 0, e: 'Máy in đưa kết quả ra giấy.' },
            { q: 'USB là:', opts: ['Vật mang tin', 'Thông tin', 'Bộ xử lí'], a: 0, e: 'USB dùng để lưu trữ dữ liệu.' },
            { q: 'Bộ phận xử lí thông tin trong máy tính là:', opts: ['CPU (bộ xử lí trung tâm)', 'Màn hình', 'Chuột'], a: 0, e: 'CPU.' },
          ] },
        { id: 'bit', title: 'Biểu diễn thông tin. Đơn vị đo dung lượng',
          theory: `<p>Máy tính biểu diễn thông tin bằng dãy <b>bit</b> chỉ gồm hai kí hiệu 0 và 1.</p>
          <div class="tw"><table class="t"><tr><th>Đơn vị</th><th>Bằng</th></tr><tr><td>1 byte (B)</td><td>8 bit</td></tr><tr><td>1 kilobyte (KB)</td><td>1 024 B</td></tr><tr><td>1 megabyte (MB)</td><td>1 024 KB</td></tr><tr><td>1 gigabyte (GB)</td><td>1 024 MB</td></tr><tr><td>1 terabyte (TB)</td><td>1 024 GB</td></tr></table></div>
          <div class="tip"><p>Tính gần đúng, có thể coi 1 GB ≈ 1 000 MB.</p></div>`,
          quiz: [
            { q: '1 byte bằng bao nhiêu bit?', a: ['8'], e: '1 byte = 8 bit.' },
            { q: '1 KB bằng bao nhiêu byte?', a: ['1024', '1 024'], e: '1 KB = 1 024 B.' },
            { q: '2 GB bằng bao nhiêu MB?', a: ['2048', '2 048'], e: '2 × 1 024 = 2 048 MB.' },
            { q: 'Thẻ nhớ 4 GB chứa được khoảng bao nhiêu ảnh, mỗi ảnh 2 MB? (coi 1 GB ≈ 1 000 MB)', a: ['2000', '2 000'], e: '4 000 : 2 = 2 000 ảnh.' },
            { q: 'Đơn vị nào lớn nhất?', opts: ['TB', 'GB', 'MB', 'KB'], a: 0, e: 'TB > GB > MB > KB.' },
          ] },
      ] },
      { title: 'Chủ đề 2. Mạng máy tính và Internet', lessons: [
        { id: 'mang', title: 'Mạng máy tính. Internet',
          theory: `<p><b>Mạng máy tính</b> là nhóm các máy tính và thiết bị được kết nối để chia sẻ dữ liệu, thiết bị.</p>
          <div class="note"><p>Thành phần của mạng: <b>thiết bị đầu cuối</b> (máy tính, điện thoại, máy in), <b>thiết bị kết nối</b> (dây cáp, bộ chuyển mạch, bộ định tuyến, wifi) và <b>phần mềm mạng</b>.</p></div>
          <p><b>Internet</b> là mạng kết nối các mạng máy tính trên khắp thế giới.</p>`,
          quiz: [
            { q: 'Internet là:', opts: ['Mạng kết nối các mạng máy tính trên toàn thế giới', 'Một phần mềm soạn thảo', 'Một máy tính rất mạnh'], a: 0, e: 'Internet là mạng toàn cầu.' },
            { q: 'Thiết bị nào là thiết bị kết nối mạng?', opts: ['Bộ định tuyến (router)', 'Máy in', 'Bàn phím'], a: 0, e: 'Router giúp kết nối mạng.' },
            { q: 'Lợi ích của mạng máy tính là:', opts: ['Chia sẻ dữ liệu và thiết bị', 'Làm máy chạy chậm hơn'], a: 0, keep: true, e: 'Ví dụ dùng chung một máy in.' },
          ] },
      ] },
      { title: 'Chủ đề 4. Đạo đức, pháp luật và văn hoá trong môi trường số', lessons: [
        { id: 'antoan', title: 'An toàn thông tin trên Internet',
          theory: `<div class="warn"><ul><li>Không chia sẻ mật khẩu, địa chỉ nhà, số điện thoại với người lạ trên mạng.</li><li>Đặt mật khẩu mạnh: dài, có chữ hoa, chữ thường, số và kí hiệu.</li><li>Không mở thư, đường liên kết lạ.</li><li>Bị bắt nạt hoặc đe doạ trên mạng: <b>báo ngay cho bố mẹ, thầy cô</b>.</li></ul></div>`,
          quiz: [
            { q: 'Mật khẩu nào mạnh nhất?', opts: ['Dat#2014!xanh', '123456', 'dat2014', 'matkhau'], a: 0, e: 'Dài, có chữ hoa/thường, số và kí hiệu.' },
            { q: 'Một người lạ trên mạng xin số điện thoại và địa chỉ nhà em. Em nên:', opts: ['Không cung cấp và báo bố mẹ', 'Gửi ngay cho họ', 'Gửi địa chỉ trường'], a: 0, e: 'Bảo vệ thông tin cá nhân.' },
            { q: 'Em nhận được tin nhắn “Bạn trúng thưởng điện thoại, bấm vào link để nhận”. Em nên:', opts: ['Không bấm vào và báo người lớn', 'Bấm vào ngay', 'Chia sẻ cho bạn bè'], a: 0, e: 'Thường là lừa đảo.' },
          ] },
      ] },
      { title: 'Chủ đề 6. Giải quyết vấn đề với sự trợ giúp của máy tính', lessons: [
        { id: 'thuattoan', title: 'Thuật toán. Các cấu trúc điều khiển',
          theory: `<p><b>Thuật toán</b> là một dãy các chỉ dẫn rõ ràng, có trình tự, để giải quyết một nhiệm vụ. Có thể mô tả bằng ngôn ngữ tự nhiên hoặc <b>sơ đồ khối</b>.</p>
          <div class="tw"><table class="t"><tr><th>Cấu trúc</th><th>Ý nghĩa</th><th>Ví dụ</th></tr>
          <tr><td>Tuần tự</td><td>Các bước làm lần lượt</td><td>Đánh răng: lấy bàn chải → bóp kem → chải → súc miệng</td></tr>
          <tr><td>Rẽ nhánh</td><td>Nếu … thì … (nếu không thì …)</td><td>Nếu trời mưa thì mang áo mưa</td></tr>
          <tr><td>Lặp</td><td>Lặp lại một số bước</td><td>Chạy 5 vòng quanh sân</td></tr></table></div>`,
          quiz: [
            { q: '“Nếu đạt điểm 10 thì được thưởng sao.” là cấu trúc:', opts: ['Rẽ nhánh', 'Tuần tự', 'Lặp'], a: 0, keep: true, e: 'Có điều kiện “nếu … thì …”.' },
            { q: '“Nhảy dây 20 lần” là cấu trúc:', opts: ['Rẽ nhánh', 'Tuần tự', 'Lặp'], a: 2, keep: true, e: 'Lặp lại một hành động.' },
            { q: 'Thuật toán là:', opts: ['Dãy các chỉ dẫn rõ ràng, có trình tự để giải quyết một nhiệm vụ', 'Một loại máy tính', 'Một trò chơi'], a: 0, e: 'Định nghĩa thuật toán.' },
            { q: 'Trong sơ đồ khối, hình thoi dùng để biểu diễn:', opts: ['Điều kiện (rẽ nhánh)', 'Bắt đầu / kết thúc', 'Một bước xử lí'], a: 0, e: 'Hình thoi là điều kiện; hình chữ nhật là bước xử lí; hình elip (ô van) là bắt đầu / kết thúc.' },
          ] },
      ] },
    ],
  };

  /* ---------- Mục lục theo đúng sách (giữ mã bài cũ cho các bài đã có nội dung) ---------- */
  const pk = (subj, id, title) => { const l = subj.chapters.flatMap(c => c.lessons).find(x => x.id === id); if (!l) throw new Error('thiếu bài ' + id); return Object.assign({}, l, title ? { title } : {}); };
  const ch = (title, lessons) => ({ title, lessons });
  const nums = (pre, from, names) => names.map((t, i) => ({ id: pre + (from + i), title: `Bài ${from + i}. ${t}` }));
  const khtnMoi = Object.assign({}, khtn, { chapters: [
    ch('Chương I. Mở đầu về khoa học tự nhiên', [...nums('b', 1, ['Giới thiệu về Khoa học tự nhiên', 'An toàn trong phòng thực hành', 'Sử dụng kính lúp', 'Sử dụng kính hiển vi quang học']), pk(khtn, 'phepdo', 'Bài 5 – 8. Đo chiều dài, khối lượng, thời gian, nhiệt độ')]),
    ch('Chương II. Chất quanh ta', [...nums('b', 9, ['Sự đa dạng của chất']), pk(khtn, 'theChat', 'Bài 10. Các thể của chất và sự chuyển thể'), pk(khtn, 'oxygen', 'Bài 11. Oxygen. Không khí')]),
    ch('Chương III. Một số vật liệu, nguyên liệu, nhiên liệu, lương thực – thực phẩm thông dụng', nums('b', 12, ['Một số vật liệu', 'Một số nguyên liệu', 'Một số nhiên liệu', 'Một số lương thực, thực phẩm'])),
    ch('Chương IV. Hỗn hợp. Tách chất ra khỏi hỗn hợp', [pk(khtn, 'honhop', 'Bài 16 – 17. Hỗn hợp các chất. Tách các chất khỏi hỗn hợp')]),
    ch('Chương V. Tế bào', [pk(khtn, 'tebao', 'Bài 18 – 19. Tế bào. Cấu tạo và chức năng các thành phần của tế bào'), ...nums('b', 20, ['Sự lớn lên và sinh sản của tế bào', 'Thực hành: Quan sát và phân biệt một số loại tế bào'])]),
    ch('Chương VI. Từ tế bào tới cơ thể', nums('b', 22, ['Cơ thể sinh vật', 'Tổ chức cơ thể đa bào', 'Thực hành: Quan sát và mô tả cơ thể đơn bào và cơ thể đa bào'])),
    ch('Chương VII. Đa dạng thế giới sống', nums('b', 25, ['Hệ thống phân loại sinh vật', 'Khoá lưỡng phân', 'Vi khuẩn', 'Thực hành: Làm sữa chua và quan sát vi khuẩn', 'Virus', 'Nguyên sinh vật', 'Thực hành: Quan sát nguyên sinh vật', 'Nấm', 'Thực hành: Quan sát các loại nấm', 'Thực vật', 'Thực hành: Quan sát và phân biệt một số nhóm thực vật', 'Động vật', 'Thực hành: Quan sát và nhận biết một số nhóm động vật ngoài thiên nhiên', 'Đa dạng sinh học', 'Tìm hiểu sinh vật ngoài thiên nhiên'])),
    ch('Chương VIII. Lực trong đời sống', [pk(khtn, 'luc', 'Bài 40 – 41, 43. Lực. Biểu diễn lực. Trọng lượng'), ...nums('b', 42, ['Biến dạng của lò xo']), ...nums('b', 44, ['Lực ma sát', 'Lực cản của nước'])]),
    ch('Chương IX. Năng lượng', nums('b', 46, ['Năng lượng và sự truyền năng lượng', 'Một số dạng năng lượng', 'Sự chuyển hoá năng lượng', 'Năng lượng hao phí', 'Năng lượng tái tạo', 'Tiết kiệm năng lượng'])),
    ch('Chương X. Trái Đất và bầu trời', nums('b', 52, ['Chuyển động nhìn thấy của Mặt Trời. Thiên thể', 'Mặt Trăng', 'Hệ Mặt Trời', 'Ngân Hà'])),
  ] });
  const lsdlMoi = Object.assign({}, lsdl, { chapters: [
    ch('Lịch sử · Chương 1. Vì sao phải học lịch sử', [...nums('ls', 1, ['Lịch sử và cuộc sống', 'Dựa vào đâu để biết và phục dựng lại lịch sử']), pk(lsdl, 'thoigian', 'Bài 3. Thời gian trong lịch sử')]),
    ch('Lịch sử · Chương 2. Thời kì nguyên thuỷ', nums('ls', 4, ['Nguồn gốc loài người', 'Xã hội nguyên thuỷ', 'Sự chuyển biến và phân hoá của xã hội nguyên thuỷ'])),
    ch('Lịch sử · Chương 3. Xã hội cổ đại', nums('ls', 7, ['Ai Cập và Lưỡng Hà cổ đại', 'Ấn Độ cổ đại', 'Trung Quốc từ thời cổ đại đến thế kỉ VII', 'Hy Lạp và La Mã cổ đại'])),
    ch('Lịch sử · Chương 4. Đông Nam Á từ những thế kỉ tiếp giáp Công nguyên đến thế kỉ X', nums('ls', 11, ['Các quốc gia sơ kì ở Đông Nam Á', 'Sự hình thành và bước đầu phát triển của các vương quốc phong kiến ở Đông Nam Á (từ thế kỉ VII đến thế kỉ X)', 'Giao lưu văn hoá ở Đông Nam Á từ đầu Công nguyên đến thế kỉ X'])),
    ch('Lịch sử · Chương 5. Việt Nam từ khoảng thế kỉ VII TCN đến đầu thế kỉ X', [pk(lsdl, 'vanlang', 'Bài 14. Nhà nước Văn Lang, Âu Lạc'), ...nums('ls', 15, ['Chính sách cai trị của các triều đại phong kiến phương Bắc và sự chuyển biến của xã hội Âu Lạc', 'Các cuộc khởi nghĩa tiêu biểu giành độc lập trước thế kỉ X', 'Cuộc đấu tranh bảo tồn và phát triển văn hoá dân tộc của người Việt', 'Bước ngoặt lịch sử đầu thế kỉ X', 'Vương quốc Chăm-pa từ thế kỉ II đến thế kỉ X', 'Vương quốc Phù Nam'])]),
    ch('Địa lí · Chương 1. Bản đồ – phương tiện thể hiện bề mặt Trái Đất', [pk(lsdl, 'kinhvi', 'Bài 1. Hệ thống kinh, vĩ tuyến. Toạ độ địa lí'), ...nums('dl', 2, ['Bản đồ. Một số lưới kinh, vĩ tuyến. Phương hướng trên bản đồ']), pk(lsdl, 'tile', 'Bài 3. Tỉ lệ bản đồ. Tính khoảng cách thực tế dựa vào tỉ lệ bản đồ'), ...nums('dl', 4, ['Kí hiệu và bảng chú giải bản đồ. Tìm đường đi trên bản đồ', 'Lược đồ trí nhớ'])]),
    ch('Địa lí · Chương 2. Trái Đất – hành tinh của hệ Mặt Trời', [...nums('dl', 6, ['Trái Đất trong hệ Mặt Trời']), pk(lsdl, 'tudquay', 'Bài 7 – 8. Chuyển động tự quay quanh trục và quanh Mặt Trời của Trái Đất'), ...nums('dl', 9, ['Xác định phương hướng ngoài thực tế'])]),
    ch('Địa lí · Chương 3. Cấu tạo của Trái Đất. Vỏ Trái Đất', [pk(lsdl, 'cautao', 'Bài 10. Cấu tạo của Trái Đất. Các mảng kiến tạo'), ...nums('dl', 11, ['Quá trình nội sinh và quá trình ngoại sinh. Hiện tượng tạo núi', 'Núi lửa và động đất', 'Các dạng địa hình chính trên Trái Đất. Khoáng sản', 'Thực hành: Đọc lược đồ địa hình tỉ lệ lớn và lát cắt địa hình đơn giản'])]),
    ch('Địa lí · Chương 4. Khí hậu và biến đổi khí hậu', nums('dl', 15, ['Lớp vỏ khí của Trái Đất. Khí áp và gió', 'Nhiệt độ không khí. Mây và mưa', 'Thời tiết và khí hậu. Biến đổi khí hậu', 'Thực hành: Phân tích biểu đồ nhiệt độ, lượng mưa'])),
    ch('Địa lí · Chương 5. Nước trên Trái Đất', nums('dl', 19, ['Thuỷ quyển và vòng tuần hoàn lớn của nước', 'Sông và hồ. Nước ngầm và băng hà', 'Biển và đại dương'])),
    ch('Địa lí · Chương 6. Đất và sinh vật trên Trái Đất', nums('dl', 22, ['Lớp đất trên Trái Đất', 'Sự sống trên Trái Đất', 'Rừng nhiệt đới', 'Sự phân bố các đới thiên nhiên trên Trái Đất', 'Thực hành: Tìm hiểu môi trường tự nhiên địa phương'])),
    ch('Địa lí · Chương 7. Con người và thiên nhiên', nums('dl', 27, ['Dân số và sự phân bố dân cư trên thế giới', 'Mối quan hệ giữa con người và thiên nhiên', 'Bảo vệ tự nhiên và khai thác thông minh các tài nguyên thiên nhiên vì sự phát triển bền vững', 'Thực hành: Tìm hiểu mối quan hệ giữa con người và thiên nhiên ở địa phương'])),
  ] });
  const congngheMoi = Object.assign({}, congnghe, { chapters: [
    ch('Chương 1. Nhà ở', [pk(congnghe, 'nhao', 'Bài 1. Khái quát về nhà ở'), ...nums('b', 2, ['Xây dựng nhà ở', 'Ngôi nhà thông minh'])]),
    ch('Chương 2. Bảo quản và chế biến thực phẩm', [pk(congnghe, 'thucpham', 'Bài 4. Thực phẩm và dinh dưỡng'), ...nums('b', 5, ['Phương pháp bảo quản và chế biến thực phẩm', 'Dự án: Bữa ăn kết nối yêu thương'])]),
    ch('Chương 3. Trang phục và thời trang', [pk(congnghe, 'vai', 'Bài 7. Trang phục trong đời sống (các loại vải)'), ...nums('b', 8, ['Sử dụng và bảo quản trang phục', 'Thời trang'])]),
    ch('Chương 4. Đồ dùng điện trong gia đình', [...nums('b', 10, ['Khái quát về đồ dùng điện trong gia đình', 'Đèn điện', 'Nồi cơm điện', 'Bếp hồng ngoại']), pk(congnghe, 'nangluong', 'Bài 14. Dự án: An toàn và tiết kiệm trong gia đình')]),
  ] });
  const tinMoi = Object.assign({}, tin, { chapters: [
    ch('Chủ đề 1. Máy tính và cộng đồng', [pk(tin, 'thongtin', 'Bài 1 – 2. Thông tin và dữ liệu. Xử lí thông tin'), pk(tin, 'bit', 'Bài 3. Thông tin trong máy tính')]),
    ch('Chủ đề 2. Mạng máy tính và Internet', [pk(tin, 'mang', 'Bài 4 – 5. Mạng máy tính. Internet')]),
    ch('Chủ đề 3. Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin', nums('b', 6, ['Mạng thông tin toàn cầu', 'Tìm kiếm thông tin trên Internet', 'Thư điện tử'])),
    ch('Chủ đề 4. Đạo đức, pháp luật và văn hoá trong môi trường số', [pk(tin, 'antoan', 'Bài 9. An toàn thông tin trên Internet')]),
    ch('Chủ đề 5. Ứng dụng tin học', nums('b', 10, ['Sơ đồ tư duy', 'Định dạng văn bản', 'Trình bày thông tin ở dạng bảng', 'Thực hành: Tìm kiếm và thay thế', 'Thực hành tổng hợp: Hoàn thiện sổ lưu niệm'])),
    ch('Chủ đề 6. Giải quyết vấn đề với sự trợ giúp của máy tính', [pk(tin, 'thuattoan', 'Bài 15 – 16. Thuật toán. Cấu trúc điều khiển'), ...nums('b', 17, ['Chương trình máy tính'])]),
  ] });

  /* Gắn nội dung bổ sung (noidung-khtn6.js, noidung-lsdl6.js) vào các bài trong mục lục */
  [[khtnMoi, 'khtn'], [lsdlMoi, 'lsdl'], [nguvan, 'nguvan']].forEach(([subj, key]) => { const nd = (window.ND_LOP6 || {})[key] || {}; subj.chapters.forEach(c => { c.lessons = c.lessons.map(l => (!l.theory && nd[l.id]) ? Object.assign({}, l, nd[l.id]) : l); }); });
  if (window.CD_TOAN6) toan.chapters.push(...window.CD_TOAN6);
  window.HOCTAP.students.push({
    id: 'dat', photo: 'anh/dat.jpg', name: 'Quang Đạt', short: 'Đạt', full: 'Lê Quang Đạt', grade: 6, color: 'b', avatar: 'kidDat',
    subjects: [nguvan, toan, tienganh, gdcd, lsdlMoi, khtnMoi, congngheMoi, tinMoi],
  });
})();
