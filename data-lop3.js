/* =====================================================================
   NỘI DUNG LỚP 3 — Lê Quỳnh Tâm — bộ sách Kết nối tri thức với cuộc sống
   ---------------------------------------------------------------------
   Mỗi bài học:  { id, title, sum, theory: `HTML`, quiz: [...] }  hoặc  { gen: 'tên-bộ-sinh-đề', n: 10 }
   Bài chưa có theory/quiz/gen sẽ hiện nhãn "Sắp có".
   Câu trắc nghiệm: { q, opts: [...], a: <số thứ tự đáp án đúng, đếm từ 0>, e: 'giải thích' }
   Câu điền:        { q, a: ['đáp án', 'cách viết khác'], e: 'giải thích' }
   Viết phân số: [[1/3]]   ·   Từ tiếng Anh bấm để nghe: W('cat','con mèo')
   ===================================================================== */
window.HOCTAP = window.HOCTAP || { students: [] };
(function () {
  const W = (en, vi) => `<button class="say" data-say="${en}">${en}${vi ? ` <span class="muted">– ${vi}</span>` : ''}</button>`;
  const words = list => `<div class="words">${list.map(([e, v]) => W(e, v)).join('')}</div>`;
  const listen = en => `<button class="say" data-say="${en}">Bấm để nghe</button>`;
  const soon = (id, title) => ({ id, title });

  const bangNhan = () => `<div class="tw"><table class="t"><tr><th>×</th>${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => `<th>${n}</th>`).join('')}</tr>
    ${[2, 3, 4, 5, 6, 7, 8, 9].map(a => `<tr><th>${a}</th>${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(b => `<td>${a * b}</td>`).join('')}</tr>`).join('')}</table></div>`;

  /* ------------------------------ TOÁN 3 ------------------------------ */
  const toanCu = {
    id: 'toan', name: 'Toán', tt: 'Toán', color: 'b', ill: 'toan', book: 'Toán 3 · Kết nối tri thức',
    chapters: [
      { title: 'Ôn tập và bổ sung', lessons: [
        { id: 'so1000', title: 'Ôn tập các số đến 1 000', sum: 'Đọc, viết, so sánh số có ba chữ số',
          theory: `<p>Số có ba chữ số gồm <b>hàng trăm</b>, <b>hàng chục</b> và <b>hàng đơn vị</b>.</p>
          <div class="vd"><p>Số <b>485</b> gồm 4 trăm, 8 chục, 5 đơn vị.</p><p>Viết thành tổng: 485 = 400 + 80 + 5.</p><p>Đọc là: <i>bốn trăm tám mươi lăm</i>.</p></div>
          <h3>So sánh hai số có ba chữ số</h3>
          <ol><li>So sánh chữ số <b>hàng trăm</b>: số nào có hàng trăm lớn hơn thì lớn hơn.</li><li>Nếu hàng trăm bằng nhau thì so sánh <b>hàng chục</b>.</li><li>Nếu hàng chục cũng bằng nhau thì so sánh <b>hàng đơn vị</b>.</li></ol>
          <div class="note"><p>Số bé nhất có ba chữ số là <b>100</b>. Số lớn nhất có ba chữ số là <b>999</b>. Số liền sau của 999 là <b>1 000</b> (một nghìn).</p></div>`,
          quiz: [
            { q: 'Số “bảy trăm linh năm” viết là:', opts: ['75', '705', '750', '7005'], a: 1, e: '7 trăm, 0 chục, 5 đơn vị → 705.' },
            { q: 'Số 362 gồm:', opts: ['3 trăm, 6 chục, 2 đơn vị', '3 trăm, 2 chục, 6 đơn vị', '36 trăm, 2 đơn vị', '6 trăm, 3 chục, 2 đơn vị'], a: 0, e: 'Chữ số 3 ở hàng trăm, 6 ở hàng chục, 2 ở hàng đơn vị.' },
            { q: 'Số liền sau của 499 là số nào?', a: ['500'], e: '499 + 1 = 500.' },
            { q: 'Chọn dấu đúng: 587 … 578', opts: ['>', '<', '='], a: 0, keep: true, e: 'Hàng trăm bằng nhau (5), hàng chục 8 > 7 nên 587 > 578.' },
            { q: '600 + 40 + 9 = ?', a: ['649'], e: '6 trăm, 4 chục, 9 đơn vị là 649.' },
            { q: 'Số lớn nhất có ba chữ số là số nào?', a: ['999'], e: 'Cả ba chữ số đều là 9 lớn nhất.' },
          ] },
        { id: 'timthanhphan', title: 'Tìm thành phần trong phép cộng, phép trừ',
          theory: `<div class="note"><ul><li>Muốn tìm <b>số hạng</b>, ta lấy tổng trừ đi số hạng kia.</li><li>Muốn tìm <b>số bị trừ</b>, ta lấy hiệu cộng với số trừ.</li><li>Muốn tìm <b>số trừ</b>, ta lấy số bị trừ trừ đi hiệu.</li></ul></div>
          <div class="vd"><p>? + 35 = 80 → Số hạng = 80 − 35 = <b>45</b>.</p><p>? − 27 = 50 → Số bị trừ = 50 + 27 = <b>77</b>.</p><p>90 − ? = 60 → Số trừ = 90 − 60 = <b>30</b>.</p></div>
          <div class="tip"><p>Tìm xong, con thay số vừa tìm vào phép tính để thử lại xem có đúng không.</p></div>`,
          quiz: [
            { q: '? + 245 = 500', a: ['255'], e: 'Số hạng = 500 − 245 = 255.' },
            { q: '734 − ? = 300', a: ['434'], e: 'Số trừ = 734 − 300 = 434.' },
            { q: '? − 125 = 380', a: ['505'], e: 'Số bị trừ = 380 + 125 = 505.' },
            { q: '360 + ? = 1000', a: ['640'], e: 'Số hạng = 1000 − 360 = 640.' },
            { q: 'Muốn tìm số bị trừ, ta làm thế nào?', opts: ['Lấy hiệu cộng với số trừ', 'Lấy hiệu trừ đi số trừ', 'Lấy số trừ trừ đi hiệu'], a: 0, e: 'Số bị trừ = Hiệu + Số trừ.' },
            { q: 'Lan có một số nhãn vở, Lan cho bạn 15 cái thì còn lại 28 cái. Lúc đầu Lan có bao nhiêu nhãn vở?', a: ['43'], e: 'Số nhãn vở lúc đầu = 28 + 15 = 43.' },
          ] },
        { id: 'congtru1000', title: 'Luyện cộng, trừ trong phạm vi 1 000', sum: 'Mỗi lần làm là một đề mới', gen: 'congtru1000', n: 10,
          theory: `<p>Khi cộng, trừ số có ba chữ số, con <b>đặt tính thẳng cột</b> (đơn vị thẳng đơn vị, chục thẳng chục, trăm thẳng trăm) rồi tính <b>từ phải sang trái</b>.</p>
          <div class="vd"><p>356 + 127: 6 cộng 7 bằng 13, viết 3 nhớ 1 · 5 cộng 2 bằng 7, thêm 1 bằng 8, viết 8 · 3 cộng 1 bằng 4, viết 4 → <b>483</b>.</p></div>
          <div class="warn"><p>Đừng quên “nhớ 1” sang hàng bên trái khi cộng được 10 trở lên, và “mượn” khi trừ chữ số nhỏ hơn.</p></div>` },
      ] },
      { title: 'Bảng nhân, bảng chia', lessons: [
        { id: 'bangnhanchia', title: 'Luyện bảng nhân, bảng chia 2 – 9', sum: 'Mỗi lần làm là một đề mới', gen: 'bangnhan', n: 12,
          theory: `<p>Bảng nhân từ 2 đến 9. Con đọc thuộc từng hàng nhé:</p>${bangNhan()}
          <div class="note"><p>Phép chia là phép tính ngược của phép nhân: 6 × 7 = 42 nên 42 : 6 = 7 và 42 : 7 = 6.</p></div>
          <div class="tip"><p>Bảng 9: chữ số hàng chục tăng 1, chữ số hàng đơn vị giảm 1 (09, 18, 27, 36, 45…).</p></div>` },
        { id: 'gapgiam', title: 'Gấp một số lên nhiều lần. Giảm một số đi một số lần',
          theory: `<div class="note"><ul><li>Muốn <b>gấp</b> một số lên nhiều lần, ta lấy số đó <b>nhân</b> với số lần.</li><li>Muốn <b>giảm</b> một số đi một số lần, ta lấy số đó <b>chia</b> cho số lần.</li></ul></div>
          <div class="vd"><p>Gấp 4 lên 3 lần: 4 × 3 = <b>12</b>.</p><p>Giảm 12 đi 3 lần: 12 : 3 = <b>4</b>.</p></div>
          <div class="warn"><p>“Thêm 3” là cộng 3, còn “gấp lên 3 lần” là nhân 3. Ví dụ: 5 thêm 3 là 8, còn 5 gấp lên 3 lần là 15.</p></div>`,
          quiz: [
            { q: '6 gấp lên 4 lần được bao nhiêu?', a: ['24'], e: '6 × 4 = 24.' },
            { q: '48 giảm đi 6 lần được bao nhiêu?', a: ['8'], e: '48 : 6 = 8.' },
            { q: '7 gấp lên 3 lần là:', opts: ['10', '21', '4', '73'], a: 1, e: '7 × 3 = 21. (7 thêm 3 mới là 10.)' },
            { q: 'Mẹ có 5 quả cam. Số quả táo gấp 3 lần số quả cam. Mẹ có bao nhiêu quả táo?', a: ['15'], e: '5 × 3 = 15 (quả táo).' },
            { q: 'Nhà An nuôi 36 con gà. Số vịt bằng số gà giảm đi 4 lần. Nhà An có bao nhiêu con vịt?', a: ['9'], e: '36 : 4 = 9 (con vịt).' },
            { q: 'Số nào giảm đi 5 lần thì được 8?', a: ['40'], e: 'Ngược lại: 8 × 5 = 40.' },
          ] },
        { id: 'motphanmay', title: 'Một phần mấy',
          theory: `<p>Chia một hình thành các phần <b>bằng nhau</b>, lấy đi một phần:</p>
          <ul><li>Chia thành 2 phần bằng nhau, lấy 1 phần: [[1/2]] (một phần hai).</li><li>Chia thành 3 phần bằng nhau, lấy 1 phần: [[1/3]] (một phần ba).</li><li>Chia thành 4 phần bằng nhau, lấy 1 phần: [[1/4]] (một phần tư).</li></ul>
          <div class="note"><p>Muốn tìm [[1/3]] của một số, ta lấy số đó <b>chia cho 3</b>.</p></div>
          <div class="vd"><p>[[1/3]] của 12 cái kẹo là: 12 : 3 = <b>4</b> cái kẹo.</p></div>`,
          quiz: [
            { q: '[[1/4]] của 20 là bao nhiêu?', a: ['5'], e: '20 : 4 = 5.' },
            { q: '[[1/2]] của 18 kg là bao nhiêu ki-lô-gam?', a: ['9'], e: '18 : 2 = 9 (kg).' },
            { q: '[[1/5]] của 35 phút là bao nhiêu phút?', a: ['7'], e: '35 : 5 = 7 (phút).' },
            { q: 'Một cái bánh được cắt thành 6 phần bằng nhau. Em ăn 1 phần. Em đã ăn mấy phần cái bánh?', opts: ['[[1/6]]', '[[1/5]]', '[[6/1]]', '[[1/2]]'], a: 0, e: '6 phần bằng nhau, lấy 1 phần → [[1/6]].' },
            { q: 'Lớp 3A có 32 bạn, trong đó [[1/4]] số bạn đi xe buýt. Có bao nhiêu bạn đi xe buýt?', a: ['8'], e: '32 : 4 = 8 (bạn).' },
          ] },
      ] },
      { title: 'Làm quen với hình phẳng, hình khối', lessons: [
        { id: 'hinhphang', title: 'Điểm ở giữa, trung điểm. Hình tròn. Góc vuông',
          theory: `<h3>Trung điểm của đoạn thẳng</h3><p>Điểm M là <b>trung điểm</b> của đoạn thẳng AB khi M nằm giữa A và B, và AM = MB.</p>
          <h3>Hình tròn</h3><ul><li>Điểm chính giữa là <b>tâm</b> (thường gọi là O).</li><li>Đoạn thẳng nối tâm với một điểm trên đường tròn là <b>bán kính</b>.</li><li>Đoạn thẳng đi qua tâm, nối hai điểm trên đường tròn là <b>đường kính</b>.</li></ul>
          <div class="note"><p>Đường kính dài gấp <b>2 lần</b> bán kính. Vẽ hình tròn bằng <b>com-pa</b>.</p></div>
          <h3>Góc vuông</h3><p>Dùng <b>ê-ke</b> để kiểm tra một góc có phải góc vuông hay không.</p>
          <h3>Hình khối</h3><p>Khối lập phương và khối hộp chữ nhật đều có <b>6 mặt, 8 đỉnh, 12 cạnh</b>. Các mặt của khối lập phương là hình vuông bằng nhau.</p>`,
          quiz: [
            { q: 'Hình tròn có bán kính 4 cm thì đường kính dài bao nhiêu xăng-ti-mét?', a: ['8'], e: 'Đường kính = 4 × 2 = 8 (cm).' },
            { q: 'Đoạn thẳng AB dài 10 cm, M là trung điểm của AB. Đoạn AM dài bao nhiêu xăng-ti-mét?', a: ['5'], e: 'AM = 10 : 2 = 5 (cm).' },
            { q: 'Dụng cụ dùng để kiểm tra góc vuông là:', opts: ['Ê-ke', 'Com-pa', 'Thước dây', 'Bút chì'], a: 0, e: 'Ê-ke có một góc vuông để đối chiếu.' },
            { q: 'Khối lập phương có bao nhiêu mặt?', a: ['6'], e: 'Khối lập phương có 6 mặt là các hình vuông.' },
            { q: 'Đường kính hình tròn là 12 cm. Bán kính là bao nhiêu xăng-ti-mét?', a: ['6'], e: 'Bán kính = 12 : 2 = 6 (cm).' },
            { q: 'Dụng cụ để vẽ hình tròn là:', opts: ['Ê-ke', 'Com-pa', 'Thước đo góc'], a: 1, e: 'Com-pa giúp vẽ hình tròn đều.' },
          ] },
      ] },
      { title: 'Phép nhân, phép chia trong phạm vi 100 và 1 000', lessons: [
        { id: 'nhanchia1000', title: 'Luyện nhân, chia số có hai, ba chữ số với số có một chữ số', sum: 'Mỗi lần làm là một đề mới', gen: 'nhanchia1000', n: 10,
          theory: `<p>Nhân: đặt tính, nhân lần lượt <b>từ phải sang trái</b> (từ hàng đơn vị).</p><p>Chia: đặt tính, chia lần lượt <b>từ trái sang phải</b> (từ hàng cao nhất).</p>
          <div class="vd"><p>124 × 3: 3 nhân 4 bằng 12, viết 2 nhớ 1 · 3 nhân 2 bằng 6, thêm 1 bằng 7 · 3 nhân 1 bằng 3 → <b>372</b>.</p><p>96 : 4: 9 chia 4 được 2, dư 1 · hạ 6 được 16, 16 chia 4 được 4 → <b>24</b>.</p></div>
          <div class="note"><p>Trong phép chia có dư, <b>số dư luôn bé hơn số chia</b>.</p></div>` },
        soon('nhan10', 'Nhân số tròn chục với số có một chữ số'),
        soon('bieuthuc', 'Biểu thức số. Tính giá trị biểu thức'),
      ] },
      { title: 'Một số đơn vị đo', lessons: [
        { id: 'donvido', title: 'Mi-li-mét, gam, mi-li-lít, nhiệt độ',
          theory: `<div class="tw"><table class="t"><tr><th>Đại lượng</th><th>Đơn vị</th><th>Đổi</th></tr>
          <tr><td>Độ dài</td><td>mi-li-mét (mm)</td><td>1 cm = 10 mm · 1 m = 1 000 mm</td></tr>
          <tr><td>Khối lượng</td><td>gam (g)</td><td>1 kg = 1 000 g</td></tr>
          <tr><td>Dung tích</td><td>mi-li-lít (ml)</td><td>1 l = 1 000 ml</td></tr>
          <tr><td>Nhiệt độ</td><td>độ C (°C)</td><td>Đo bằng nhiệt kế</td></tr></table></div>
          <div class="note"><ul><li>Nước đá đang tan: khoảng 0 °C. Nước sôi: 100 °C.</li><li>Nhiệt độ cơ thể người khoẻ mạnh: khoảng 37 °C.</li></ul></div>`,
          quiz: [
            { q: '3 cm = ? mm', a: ['30'], e: '1 cm = 10 mm nên 3 cm = 30 mm.' },
            { q: '2 kg = ? g', a: ['2000', '2 000'], e: '1 kg = 1 000 g nên 2 kg = 2 000 g.' },
            { q: '1 l = ? ml', a: ['1000', '1 000'], e: '1 lít = 1 000 mi-li-lít.' },
            { q: 'Nên dùng đơn vị nào để đo độ dày của một quyển vở?', opts: ['mm', 'm', 'kg', 'l'], a: 0, e: 'Quyển vở rất mỏng, đo bằng mi-li-mét là hợp lí.' },
            { q: 'Nhiệt độ cơ thể của người khoẻ mạnh khoảng:', opts: ['37 °C', '0 °C', '100 °C', '20 °C'], a: 0, e: 'Khoảng 37 °C. Cao hơn nhiều là đang bị sốt.' },
            { q: '500 g + 500 g = ? kg', a: ['1'], e: '1 000 g = 1 kg.' },
          ] },
      ] },
      { title: 'Các số đến 10 000 (Học kì 2)', lessons: [
        { id: 'so10000', title: 'Các số có bốn chữ số. Làm tròn số',
          theory: `<p>Số có bốn chữ số gồm <b>nghìn, trăm, chục, đơn vị</b>.</p>
          <div class="vd"><p>3 572 = 3 000 + 500 + 70 + 2. Đọc: <i>ba nghìn năm trăm bảy mươi hai</i>.</p><p>5 008 đọc là <i>năm nghìn không trăm linh tám</i>.</p></div>
          <h3>Làm tròn số</h3><div class="note"><p>Làm tròn đến <b>hàng chục</b>: nhìn chữ số hàng đơn vị. Nếu bé hơn 5 thì làm tròn xuống, từ 5 trở lên thì làm tròn lên.</p><p>Làm tròn đến <b>hàng trăm</b>: nhìn chữ số hàng chục, làm tương tự.</p></div>
          <div class="vd"><p>1 247 làm tròn đến hàng chục được 1 250 (vì 7 ≥ 5).</p><p>3 649 làm tròn đến hàng trăm được 3 600 (vì 4 &lt; 5).</p></div>`,
          quiz: [
            { q: '“Năm nghìn không trăm linh tám” viết là:', opts: ['5 008', '5 080', '508', '50 008'], a: 0, e: '5 nghìn, 0 trăm, 0 chục, 8 đơn vị.' },
            { q: '4 000 + 300 + 6 = ?', a: ['4306', '4 306'], e: '4 nghìn, 3 trăm, 0 chục, 6 đơn vị → 4 306.' },
            { q: 'Làm tròn 1 247 đến hàng chục được số nào?', a: ['1250', '1 250'], e: 'Chữ số hàng đơn vị là 7 ≥ 5 nên làm tròn lên: 1 250.' },
            { q: 'Làm tròn 3 649 đến hàng trăm được số nào?', a: ['3600', '3 600'], e: 'Chữ số hàng chục là 4 < 5 nên làm tròn xuống: 3 600.' },
            { q: 'Số lớn nhất trong các số sau là:', opts: ['7 985', '7 958', '7 895', '7 859'], a: 0, e: 'Cùng 7 nghìn; so hàng trăm: 9 > 8; rồi hàng chục: 8 > 5.' },
            { q: 'Số liền trước của 6 000 là số nào?', a: ['5999', '5 999'], e: '6 000 − 1 = 5 999.' },
          ] },
        { id: 'lama', title: 'Làm quen với chữ số La Mã',
          theory: `<p>Ba chữ số La Mã cơ bản: <b>I = 1</b>, <b>V = 5</b>, <b>X = 10</b>.</p>
          <div class="tw"><table class="t"><tr>${['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XX'].map(x => `<th>${x}</th>`).join('')}</tr><tr>${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 20].map(x => `<td>${x}</td>`).join('')}</tr></table></div>
          <div class="note"><ul><li>Chữ số I đứng <b>bên phải</b> V hoặc X thì <b>cộng</b>: VI = 5 + 1 = 6.</li><li>Chữ số I đứng <b>bên trái</b> V hoặc X thì <b>trừ</b>: IV = 5 − 1 = 4, IX = 10 − 1 = 9.</li></ul></div>`,
          quiz: [
            { q: 'IV là số mấy?', a: ['4'], e: 'I đứng trước V: 5 − 1 = 4.' },
            { q: 'IX là số mấy?', a: ['9'], e: 'I đứng trước X: 10 − 1 = 9.' },
            { q: 'XII là số mấy?', a: ['12'], e: 'X + I + I = 10 + 1 + 1 = 12.' },
            { q: 'Số 7 viết bằng chữ số La Mã là:', opts: ['VII', 'IIV', 'VIII', 'IIIV'], a: 0, e: 'V + I + I = 7.' },
            { q: 'XX là số mấy?', a: ['20'], e: '10 + 10 = 20.' },
          ] },
        soon('soSanh10000', 'So sánh các số trong phạm vi 10 000'),
      ] },
      { title: 'Chu vi, diện tích một số hình phẳng', lessons: [
        { id: 'chuvi', title: 'Chu vi hình chữ nhật, hình vuông',
          theory: `<p><b>Chu vi</b> của một hình là tổng độ dài các cạnh của hình đó.</p>
          <div class="note"><p class="big">Chu vi hình chữ nhật = (dài + rộng) × 2</p><p class="big">Chu vi hình vuông = cạnh × 4</p></div>
          <div class="vd"><p>Hình chữ nhật dài 8 cm, rộng 5 cm: chu vi là (8 + 5) × 2 = <b>26 cm</b>.</p></div>
          <div class="warn"><p>Chiều dài và chiều rộng phải cùng một đơn vị đo.</p></div>`,
          quiz: [
            { q: 'Hình chữ nhật dài 8 cm, rộng 5 cm. Chu vi là bao nhiêu xăng-ti-mét?', a: ['26'], e: '(8 + 5) × 2 = 26 (cm).' },
            { q: 'Hình vuông cạnh 7 cm. Chu vi là bao nhiêu xăng-ti-mét?', a: ['28'], e: '7 × 4 = 28 (cm).' },
            { q: 'Hình tam giác có ba cạnh 3 cm, 4 cm, 5 cm. Chu vi là bao nhiêu xăng-ti-mét?', a: ['12'], e: '3 + 4 + 5 = 12 (cm).' },
            { q: 'Hình vuông có chu vi 36 cm. Cạnh hình vuông dài bao nhiêu xăng-ti-mét?', a: ['9'], e: '36 : 4 = 9 (cm).' },
            { q: 'Mảnh vườn hình chữ nhật dài 12 m, rộng 8 m. Chu vi mảnh vườn là:', opts: ['40 m', '20 m', '96 m', '28 m'], a: 0, e: '(12 + 8) × 2 = 40 (m).' },
          ] },
        { id: 'dientich', title: 'Diện tích. Xăng-ti-mét vuông',
          theory: `<p><b>Xăng-ti-mét vuông</b> (cm²) là diện tích của hình vuông có cạnh 1 cm.</p>
          <div class="note"><p class="big">Diện tích hình chữ nhật = dài × rộng</p><p class="big">Diện tích hình vuông = cạnh × cạnh</p></div>
          <div class="vd"><p>Hình chữ nhật dài 6 cm, rộng 4 cm có diện tích 6 × 4 = <b>24 cm²</b>.</p></div>
          <div class="warn"><p>Chu vi đo bằng cm, còn diện tích đo bằng <b>cm²</b>. Đừng nhầm hai công thức nhé!</p></div>`,
          quiz: [
            { q: 'Hình chữ nhật dài 6 cm, rộng 4 cm. Diện tích là bao nhiêu xăng-ti-mét vuông?', a: ['24'], e: '6 × 4 = 24 (cm²).' },
            { q: 'Hình vuông cạnh 5 cm. Diện tích là bao nhiêu xăng-ti-mét vuông?', a: ['25'], e: '5 × 5 = 25 (cm²).' },
            { q: 'Đơn vị nào dùng để đo diện tích?', opts: ['cm²', 'cm', 'kg', 'ml'], a: 0, e: 'Xăng-ti-mét vuông (cm²).' },
            { q: 'Hình vuông cạnh 8 cm. Diện tích là bao nhiêu xăng-ti-mét vuông?', a: ['64'], e: '8 × 8 = 64 (cm²).' },
            { q: 'Hình vuông cạnh 4 cm có:', opts: ['Chu vi 16 cm, diện tích 16 cm²', 'Chu vi 8 cm, diện tích 16 cm²', 'Chu vi 16 cm, diện tích 8 cm²'], a: 0, e: 'Chu vi 4 × 4 = 16 cm; diện tích 4 × 4 = 16 cm². Số giống nhau nhưng đơn vị khác nhau.' },
          ] },
      ] },
      { title: 'Cộng, trừ, nhân, chia trong phạm vi 10 000', lessons: [
        { id: 'congtru10000', title: 'Luyện cộng, trừ trong phạm vi 10 000', sum: 'Mỗi lần làm là một đề mới', gen: 'congtru10000', n: 10,
          theory: `<p>Cách làm giống như với số có ba chữ số: <b>đặt tính thẳng cột</b>, tính từ phải sang trái, nhớ đúng.</p>` },
        { id: 'dongho', title: 'Xem đồng hồ. Tháng – năm',
          theory: `<div class="note"><ul><li>1 giờ = <b>60 phút</b>.</li><li>1 năm có <b>12 tháng</b>.</li><li>Tháng có 31 ngày: 1, 3, 5, 7, 8, 10, 12.</li><li>Tháng có 30 ngày: 4, 6, 9, 11.</li><li>Tháng 2 có 28 hoặc 29 ngày.</li></ul></div>
          <div class="tip"><p>Nắm bàn tay lại, đếm các khớp xương và chỗ lõm từ trái sang phải: khớp nhô lên là tháng 31 ngày, chỗ lõm là tháng 30 ngày (trừ tháng 2).</p></div>
          <h3>Đọc giờ “kém”</h3><p>Khi kim phút đã qua số 6, ta có thể đọc kiểu “kém”: 8 giờ 45 phút = <b>9 giờ kém 15 phút</b>.</p>`,
          quiz: [
            { q: 'Tháng 9 có bao nhiêu ngày?', a: ['30'], e: 'Tháng 4, 6, 9, 11 có 30 ngày.' },
            { q: '8 giờ 50 phút còn gọi là:', opts: ['9 giờ kém 10 phút', '8 giờ kém 10 phút', '9 giờ kém 50 phút'], a: 0, e: 'Còn 10 phút nữa là 9 giờ.' },
            { q: '2 giờ = ? phút', a: ['120'], e: '60 × 2 = 120 (phút).' },
            { q: 'Tháng nào có 31 ngày?', opts: ['Tháng 7', 'Tháng 6', 'Tháng 11', 'Tháng 2'], a: 0, e: 'Tháng 7 có 31 ngày.' },
            { q: 'Thứ Hai tuần này là ngày 5. Thứ Hai tuần sau là ngày bao nhiêu?', a: ['12'], e: 'Một tuần có 7 ngày: 5 + 7 = 12.' },
          ] },
        soon('tien', 'Tiền Việt Nam'),
        soon('so100000', 'Các số đến 100 000'),
        soon('thongke', 'Làm quen với thống kê, khả năng xảy ra'),
      ] },
    ],
  };

  /* ---------- TOÁN 3 theo đúng mục lục SGK Kết nối tri thức (81 bài) ---------- */
  const old3 = toanCu.chapters.flatMap(c => c.lessons);
  const O = (id, n, title, extra) => Object.assign({}, old3.find(l => l.id === id), { id: 'b' + n, title: `Bài ${n}. ${title}` }, extra || {});
  const B = (n, title, o) => Object.assign({ id: 'b' + n, title: `Bài ${n}. ${title}` }, o);
  const LTC = (n, mix, theory, title) => B(n, title || 'Luyện tập chung', { gen: 'mix', mix, n: 10, sum: 'Ôn các dạng bài trong chủ đề · mỗi lần một đề mới', theory: theory || `<p>Bài này trộn các dạng toán của cả chủ đề. Mỗi lần làm là một đề mới, con làm nhiều lần để thật thạo nhé.</p><div class="tip"><p>Làm sai câu nào, con đọc kĩ phần giải thích rồi bấm “Làm đề mới”.</p></div>` });
  const tbl = n => `<div class="tw"><table class="t"><tr><th>Bảng nhân ${n}</th><th>Bảng chia ${n}</th></tr>${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => `<tr><td>${n} × ${i} = ${n * i}</td><td>${n * i} : ${n} = ${i}</td></tr>`).join('')}</table></div>`;
  const bangLesson = (num, n) => B(num, `Bảng nhân ${n}, bảng chia ${n}`, { gen: 'bang', arg: n, n: 12, theory: `<p>Con đọc to và học thuộc bảng nhân ${n}. Bảng chia ${n} là phép tính ngược của bảng nhân ${n}.</p>${tbl(n)}<div class="tip"><p>Mẹo: trong bảng nhân ${n}, mỗi kết quả hơn kết quả liền trước đúng ${n} đơn vị (đếm thêm ${n}).</p></div>` });
  const toan = {
    id: 'toan', name: 'Toán', tt: 'Toán', color: 'b', ill: 'toan', book: 'Toán 3 · Kết nối tri thức',
    chapters: [
      { title: 'Chủ đề 1. Ôn tập và bổ sung', lessons: [
        O('so1000', 1, 'Ôn tập các số đến 1 000'),
        O('congtru1000', 2, 'Ôn tập phép cộng, phép trừ trong phạm vi 1 000', { gen: 'congtru', arg: 1000 }),
        O('timthanhphan', 3, 'Tìm thành phần trong phép cộng, phép trừ', { gen: 'timx', n: 4 }),
        B(4, 'Ôn tập bảng nhân 2; 5, bảng chia 2; 5', { gen: 'bang', arg: [2, 5], n: 12, theory: tbl(2) + tbl(5) + `<div class="tip"><p>Bảng nhân 5: kết quả luôn có chữ số tận cùng là 0 hoặc 5.</p></div>` }),
        bangLesson(5, 3), bangLesson(6, 4),
        B(7, 'Ôn tập hình học và đo lường', {
          theory: `<div class="note"><ul><li>1 dm = 10 cm · 1 m = 10 dm = 100 cm · 1 km = 1 000 m.</li><li>Độ dài đường gấp khúc bằng tổng độ dài các đoạn thẳng của nó.</li><li>Khối lượng đo bằng ki-lô-gam (kg); dung tích đo bằng lít (l).</li></ul></div>`,
          quiz: [
            { q: '1 m = ? cm', a: ['100'], e: '1 m = 100 cm.' }, { q: '1 dm = ? cm', a: ['10'], e: '1 dm = 10 cm.' }, { q: '1 km = ? m', a: ['1000', '1 000'], e: '1 km = 1 000 m.' },
            { q: 'Đường gấp khúc gồm ba đoạn dài 5 cm, 7 cm và 4 cm. Độ dài đường gấp khúc là bao nhiêu xăng-ti-mét?', a: ['16'], e: '5 + 7 + 4 = 16 (cm).' },
            { q: 'Dùng đơn vị nào để đo lượng nước trong can?', opts: ['lít', 'ki-lô-gam', 'mét'], a: 0, e: 'Dung tích đo bằng lít.' },
          ] }),
        LTC(8, ['congtru:1000', 'timx', 'bang:2', 'bang:5', 'bang:3', 'bang:4']),
      ] },
      { title: 'Chủ đề 2. Bảng nhân, bảng chia', lessons: [
        bangLesson(9, 6), bangLesson(10, 7), bangLesson(11, 8), bangLesson(12, 9),
        B(13, 'Tìm thành phần trong phép nhân, phép chia', { gen: 'timxnc', n: 10, theory: `<div class="note"><ul><li>Muốn tìm <b>thừa số</b>, ta lấy tích chia cho thừa số kia.</li><li>Muốn tìm <b>số bị chia</b>, ta lấy thương nhân với số chia.</li><li>Muốn tìm <b>số chia</b>, ta lấy số bị chia chia cho thương.</li></ul></div><div class="vd"><p>? × 6 = 42 → 42 : 6 = <b>7</b> · ? : 4 = 8 → 8 × 4 = <b>32</b> · 35 : ? = 5 → 35 : 5 = <b>7</b></p></div>` }),
        O('motphanmay', 14, 'Một phần mấy', { gen: 'motphan', n: 4 }),
        LTC(15, ['bang:6', 'bang:7', 'bang:8', 'bang:9', 'timxnc', 'motphan']),
      ] },
      { title: 'Chủ đề 3. Làm quen với hình phẳng, hình khối', lessons: [
        B(16, 'Điểm ở giữa, trung điểm của đoạn thẳng', {
          theory: `<p>Ba điểm A, M, B thẳng hàng, M nằm giữa A và B thì M là <b>điểm ở giữa</b> hai điểm A và B.</p><div class="note"><p>M là <b>trung điểm</b> của đoạn thẳng AB khi M nằm giữa A, B và AM = MB.</p></div>`,
          quiz: [{ q: 'Đoạn AB dài 10 cm, M là trung điểm của AB. AM dài bao nhiêu xăng-ti-mét?', a: ['5'], e: '10 : 2 = 5 (cm).' }, { q: 'O là trung điểm của CD, OC = 6 cm. CD dài bao nhiêu xăng-ti-mét?', a: ['12'], e: '6 × 2 = 12 (cm).' }, { q: 'M nằm giữa A và B, AM = 3 cm, MB = 5 cm. M có phải trung điểm của AB không?', opts: ['Không', 'Có'], a: 0, keep: true, e: 'AM khác MB.' }] }),
        B(17, 'Hình tròn. Tâm, bán kính, đường kính của hình tròn', {
          theory: `<ul><li>Điểm chính giữa hình tròn là <b>tâm</b>.</li><li>Đoạn thẳng nối tâm với một điểm trên đường tròn là <b>bán kính</b>.</li><li>Đoạn thẳng đi qua tâm, nối hai điểm trên đường tròn là <b>đường kính</b>.</li></ul><div class="note"><p>Đường kính dài gấp 2 lần bán kính. Vẽ hình tròn bằng com-pa.</p></div>`,
          quiz: [{ q: 'Bán kính 4 cm thì đường kính dài bao nhiêu xăng-ti-mét?', a: ['8'], e: '4 × 2 = 8 (cm).' }, { q: 'Đường kính 12 cm thì bán kính dài bao nhiêu xăng-ti-mét?', a: ['6'], e: '12 : 2 = 6 (cm).' }, { q: 'Dụng cụ để vẽ hình tròn là:', opts: ['Com-pa', 'Ê-ke', 'Thước dây'], a: 0, e: 'Com-pa.' }, { q: 'Trong một hình tròn, các bán kính:', opts: ['Dài bằng nhau', 'Dài khác nhau'], a: 0, keep: true, e: 'Mọi bán kính của một hình tròn đều bằng nhau.' }] }),
        B(18, 'Góc, góc vuông, góc không vuông', {
          theory: `<p>Góc gồm hai cạnh chung một đỉnh. Dùng <b>ê-ke</b> để kiểm tra góc vuông: đặt đỉnh góc vuông của ê-ke trùng đỉnh góc, một cạnh ê-ke trùng một cạnh góc. Nếu cạnh kia cũng trùng thì đó là góc vuông.</p>`,
          quiz: [{ q: 'Dụng cụ để kiểm tra góc vuông là:', opts: ['Ê-ke', 'Com-pa', 'Bút chì'], a: 0, e: 'Ê-ke.' }, { q: 'Hình chữ nhật có mấy góc vuông?', a: ['4'], e: '4 góc vuông.' }, { q: 'Lúc 3 giờ đúng, kim giờ và kim phút tạo thành:', opts: ['Góc vuông', 'Góc không vuông'], a: 0, keep: true, e: 'Kim chỉ số 12 và số 3 tạo thành góc vuông.' }] }),
        B(19, 'Hình tam giác, hình tứ giác. Hình chữ nhật, hình vuông', {
          theory: `<div class="tw"><table class="t"><tr><th>Hình</th><th>Đặc điểm</th></tr><tr><td>Hình tam giác</td><td>3 cạnh, 3 đỉnh, 3 góc</td></tr><tr><td>Hình tứ giác</td><td>4 cạnh, 4 đỉnh, 4 góc</td></tr><tr><td>Hình chữ nhật</td><td>4 góc vuông; 2 cạnh dài bằng nhau, 2 cạnh ngắn bằng nhau</td></tr><tr><td>Hình vuông</td><td>4 góc vuông; 4 cạnh bằng nhau</td></tr></table></div>`,
          quiz: [{ q: 'Hình tam giác có mấy cạnh?', a: ['3'], e: '3 cạnh.' }, { q: 'Hình nào có 4 góc vuông và 4 cạnh bằng nhau?', opts: ['Hình vuông', 'Hình chữ nhật', 'Hình tam giác'], a: 0, e: 'Hình vuông.' }, { q: 'Hình chữ nhật có hai cạnh dài bằng nhau.', opts: ['Đúng', 'Sai'], a: 0, keep: true, e: 'Đúng.' }, { q: 'Hình tứ giác có mấy đỉnh?', a: ['4'], e: '4 đỉnh.' }] }),
        B(20, 'Thực hành vẽ góc vuông, vẽ đường tròn, hình vuông, hình chữ nhật và vẽ trang trí', {
          theory: `<h3>Vẽ góc vuông bằng ê-ke</h3><ol><li>Đặt góc vuông của ê-ke trùng với điểm làm đỉnh.</li><li>Kẻ hai cạnh theo hai cạnh góc vuông của ê-ke.</li></ol><h3>Vẽ đường tròn bằng com-pa</h3><ol><li>Mở com-pa bằng độ dài bán kính (ví dụ 2 cm, đo trên thước).</li><li>Đặt đầu kim vào tâm, quay đầu bút chì một vòng.</li></ol><div class="tip"><p>Vẽ hình vuông, hình chữ nhật trên giấy ô li dễ hơn vì có sẵn các đường kẻ vuông góc.</p></div>`,
          quiz: [{ q: 'Muốn vẽ hình tròn bán kính 3 cm, em mở com-pa rộng:', opts: ['3 cm', '6 cm', '1 cm'], a: 0, e: 'Độ mở com-pa bằng bán kính.' }, { q: 'Muốn vẽ góc vuông nhanh và chính xác, em dùng:', opts: ['Ê-ke', 'Com-pa'], a: 0, keep: true, e: 'Ê-ke.' }] }),
        B(21, 'Khối lập phương, khối hộp chữ nhật', {
          theory: `<div class="note"><p>Khối lập phương và khối hộp chữ nhật đều có <b>6 mặt, 8 đỉnh, 12 cạnh</b>.</p><ul><li>Các mặt của khối lập phương là hình vuông bằng nhau (con xúc xắc).</li><li>Các mặt của khối hộp chữ nhật là hình chữ nhật (hộp sữa, viên gạch).</li></ul></div>`,
          quiz: [{ q: 'Khối lập phương có bao nhiêu mặt?', a: ['6'], e: '6 mặt.' }, { q: 'Khối hộp chữ nhật có bao nhiêu đỉnh?', a: ['8'], e: '8 đỉnh.' }, { q: 'Khối lập phương có bao nhiêu cạnh?', a: ['12'], e: '12 cạnh.' }, { q: 'Con xúc xắc có dạng:', opts: ['Khối lập phương', 'Khối hộp chữ nhật', 'Hình tròn'], a: 0, e: 'Các mặt là hình vuông bằng nhau.' }] }),
        O('hinhphang', 22, 'Luyện tập chung'),
      ] },
      { title: 'Chủ đề 4. Phép nhân, phép chia trong phạm vi 100', lessons: [
        B(23, 'Nhân số có hai chữ số với số có một chữ số', { gen: 'nhan', arg: '2c1', theory: `<p>Đặt tính rồi nhân lần lượt từ phải sang trái: nhân hàng đơn vị trước, rồi đến hàng chục.</p><div class="vd"><p>24 × 3: 3 nhân 4 bằng 12, viết 2 nhớ 1; 3 nhân 2 bằng 6, thêm 1 bằng 7, viết 7 → <b>72</b>.</p></div>` }),
        O('gapgiam', 24, 'Gấp một số lên một số lần', { gen: 'gapgiam', n: 4 }),
        B(25, 'Phép chia hết, phép chia có dư', { gen: 'chiadu', theory: `<p>Phép chia có số dư bằng 0 là <b>phép chia hết</b>. Phép chia còn số dư khác 0 là <b>phép chia có dư</b>.</p><div class="vd"><p>17 : 5 = 3 (dư 2) vì 5 × 3 + 2 = 17.</p></div><div class="note"><p>Số dư luôn <b>bé hơn</b> số chia.</p></div>` }),
        B(26, 'Chia số có hai chữ số cho số có một chữ số', { gen: 'chia', arg: '2c1', theory: `<p>Đặt tính rồi chia từ trái sang phải: chia hàng chục trước, hạ hàng đơn vị xuống rồi chia tiếp.</p><div class="vd"><p>84 : 4: 8 chia 4 được 2, viết 2; hạ 4, 4 chia 4 được 1, viết 1 → <b>21</b>.</p></div>` }),
        B(27, 'Giảm một số đi một số lần', { gen: 'gapgiam', theory: `<div class="note"><p>Muốn giảm một số đi một số lần, ta <b>chia</b> số đó cho số lần.</p></div><div class="vd"><p>Giảm 24 đi 4 lần: 24 : 4 = <b>6</b>.</p></div>` }),
        B(28, 'Bài toán giải bằng hai bước tính', {
          theory: `<p>Bài toán hai bước: phải tìm một kết quả trung gian trước, rồi dùng nó để tìm đáp số.</p><div class="vd"><p>Lan có 12 cái kẹo, Hoa có nhiều hơn Lan 5 cái. Cả hai bạn có bao nhiêu cái kẹo?</p><p>Bước 1: Số kẹo của Hoa: 12 + 5 = 17 (cái). Bước 2: Cả hai bạn: 12 + 17 = <b>29</b> (cái).</p></div>`,
          quiz: [
            { q: 'Lan có 12 cái kẹo, Hoa có nhiều hơn Lan 5 cái. Cả hai bạn có bao nhiêu cái kẹo?', a: ['29'], e: 'Hoa: 17 cái; cả hai: 12 + 17 = 29.' },
            { q: 'Thùng thứ nhất có 25 l dầu, thùng thứ hai ít hơn thùng thứ nhất 8 l. Cả hai thùng có bao nhiêu lít dầu?', a: ['42'], e: 'Thùng hai: 17 l; cả hai: 42 l.' },
            { q: 'Mỗi hộp có 6 cái bánh. Mẹ mua 4 hộp, cả nhà ăn hết 9 cái. Còn lại bao nhiêu cái bánh?', a: ['15'], e: '6 × 4 = 24; 24 − 9 = 15.' },
            { q: 'Có 40 quả cam chia đều vào 5 đĩa, mỗi đĩa ăn mất 2 quả. Mỗi đĩa còn bao nhiêu quả?', a: ['6'], e: '40 : 5 = 8; 8 − 2 = 6.' },
            { q: 'Bao gạo nặng 15 kg, bao ngô nặng gấp 3 lần bao gạo. Cả hai bao nặng bao nhiêu ki-lô-gam?', a: ['60'], e: 'Bao ngô 45 kg; cả hai 60 kg.' },
          ] }),
        LTC(29, ['nhan:2c1', 'chia:2c1', 'chiadu', 'gapgiam', 'bang:7', 'bang:8']),
      ] },
      { title: 'Chủ đề 5. Một số đơn vị đo độ dài, khối lượng, dung tích, nhiệt độ', lessons: [
        B(30, 'Mi-li-mét', { theory: `<div class="note"><p>Mi-li-mét viết tắt là <b>mm</b>. 1 cm = 10 mm · 1 m = 1 000 mm.</p></div><p>Dùng mm để đo những vật rất nhỏ, rất mỏng: độ dày quyển vở, chiều dài con kiến.</p>`, quiz: [{ q: '4 cm = ? mm', a: ['40'], e: '4 × 10 = 40.' }, { q: '1 m = ? mm', a: ['1000', '1 000'], e: '1 m = 1 000 mm.' }, { q: '50 mm = ? cm', a: ['5'], e: '50 : 10 = 5.' }, { q: 'Độ dày quyển sách Toán khoảng:', opts: ['8 mm', '8 m', '8 km'], a: 0, e: 'Khoảng vài mi-li-mét.' }] }),
        B(31, 'Gam', { theory: `<div class="note"><p>Gam viết tắt là <b>g</b>. 1 kg = 1 000 g.</p></div><p>Dùng cân đồng hồ hoặc cân đĩa để cân. Gói mì khoảng 75 g, quả trứng gà khoảng 50 g.</p>`, quiz: [{ q: '3 kg = ? g', a: ['3000', '3 000'], e: '3 × 1 000.' }, { q: '500 g + 500 g = ? kg', a: ['1'], e: '1 000 g = 1 kg.' }, { q: '250 g + 150 g = ? g', a: ['400'], e: '250 + 150 = 400.' }, { q: 'Quả trứng gà nặng khoảng:', opts: ['50 g', '50 kg', '5 kg'], a: 0, e: 'Khoảng 50 g.' }] }),
        B(32, 'Mi-li-lít', { theory: `<div class="note"><p>Mi-li-lít viết tắt là <b>ml</b>. 1 l = 1 000 ml.</p></div><p>Hộp sữa nhỏ khoảng 180 ml; chai nước khoảng 500 ml.</p>`, quiz: [{ q: '2 l = ? ml', a: ['2000', '2 000'], e: '2 × 1 000.' }, { q: '300 ml + 700 ml = ? l', a: ['1'], e: '1 000 ml = 1 l.' }, { q: 'Một thìa (muỗng) thuốc khoảng:', opts: ['5 ml', '5 l', '500 l'], a: 0, e: 'Rất ít nước.' }] }),
        B(33, 'Nhiệt độ. Đơn vị đo nhiệt độ', { theory: `<p>Đo nhiệt độ bằng <b>nhiệt kế</b>. Đơn vị: độ C, viết là <b>°C</b>.</p><div class="note"><ul><li>Nước đá đang tan: 0 °C · Nước sôi: 100 °C.</li><li>Cơ thể người khoẻ mạnh: khoảng 37 °C.</li></ul></div>`, quiz: [{ q: 'Nhiệt độ cơ thể người khoẻ mạnh khoảng:', opts: ['37 °C', '0 °C', '100 °C'], a: 0, e: '37 °C.' }, { q: 'Nước sôi ở bao nhiêu độ C?', a: ['100'], e: '100 °C.' }, { q: 'Dụng cụ đo nhiệt độ là:', opts: ['Nhiệt kế', 'Cân', 'Thước'], a: 0, e: 'Nhiệt kế.' }] }),
        B(34, 'Thực hành và trải nghiệm với các đơn vị mi-li-mét, gam, mi-li-lít, độ C', { theory: `<p>Cùng bố mẹ thử ở nhà:</p><ul><li>Dùng thước đo độ dày quyển vở (mm).</li><li>Dùng cân nhà bếp cân 1 quả trứng, 1 quả táo (g).</li><li>Đọc số ml trên hộp sữa, chai nước.</li><li>Xem nhiệt độ trên ứng dụng thời tiết hoặc nhiệt kế.</li></ul>`, quiz: [{ q: 'Hộp sữa nhỏ thường ghi:', opts: ['180 ml', '180 l', '180 kg'], a: 0, e: '180 ml.' }, { q: 'Nhiệt độ trong phòng một ngày mát trời khoảng:', opts: ['25 °C', '90 °C', '0 °C'], a: 0, e: 'Khoảng 25 °C.' }, { q: 'Quả táo nặng khoảng:', opts: ['200 g', '200 kg', '2 g'], a: 0, e: 'Khoảng 200 g.' }] }),
        O('donvido', 35, 'Luyện tập chung', { gen: 'doidv', n: 5 }),
      ] },
      { title: 'Chủ đề 6. Phép nhân, phép chia trong phạm vi 1 000', lessons: [
        B(36, 'Nhân số có ba chữ số với số có một chữ số', { gen: 'nhan', arg: '3c1', theory: `<p>Đặt tính rồi nhân lần lượt từ hàng đơn vị, đến hàng chục, rồi hàng trăm. Nhớ cộng phần “nhớ” vào hàng tiếp theo.</p><div class="vd"><p>124 × 3 = <b>372</b> · 215 × 4 = <b>860</b></p></div>` }),
        B(37, 'Chia số có ba chữ số cho số có một chữ số', { gen: 'mix', mix: ['chia:3c1', 'chia:3c1', 'chiadu'], n: 10, theory: `<p>Đặt tính rồi chia từ hàng trăm. Nếu chữ số hàng trăm bé hơn số chia, lấy hai chữ số đầu để chia.</p><div class="vd"><p>648 : 3 = <b>216</b> · 156 : 4: 1 không chia được cho 4, lấy 15 chia 4 được 3 dư 3, hạ 6 được 36, 36 chia 4 được 9 → <b>39</b>.</p></div>` }),
        B(38, 'Biểu thức số. Tính giá trị của biểu thức số', { gen: 'bieuthuc', theory: `<div class="note"><ol><li>Chỉ có cộng, trừ (hoặc chỉ có nhân, chia): tính từ trái sang phải.</li><li>Có cả cộng, trừ, nhân, chia: nhân, chia trước; cộng, trừ sau.</li><li>Có dấu ngoặc ( ): tính trong ngoặc trước.</li></ol></div><div class="vd"><p>60 + 4 × 5 = 60 + 20 = <b>80</b> · (60 + 4) × 5 = 64 × 5 = <b>320</b></p></div>` }),
        B(39, 'So sánh số lớn gấp mấy lần số bé', { gen: 'gapmaylan', theory: `<div class="note"><p>Muốn biết số lớn gấp mấy lần số bé, ta lấy <b>số lớn chia cho số bé</b>.</p></div><div class="vd"><p>Đoạn thẳng AB dài 12 cm, CD dài 3 cm: 12 : 3 = 4. AB dài gấp <b>4 lần</b> CD.</p></div>` }),
        LTC(40, ['nhan:3c1', 'chia:3c1', 'bieuthuc', 'gapmaylan']),
      ] },
      { title: 'Chủ đề 7. Ôn tập học kì 1', lessons: [
        LTC(41, ['nhan:2c1', 'nhan:3c1', 'chia:2c1', 'chia:3c1', 'bang:6', 'bang:9'], null, 'Ôn tập phép nhân, phép chia trong phạm vi 100, 1 000'),
        LTC(42, ['bieuthuc'], `<div class="note"><p>Nhớ thứ tự: trong ngoặc trước → nhân, chia → cộng, trừ.</p></div>`, 'Ôn tập biểu thức số'),
        LTC(43, ['doidv', 'motphan', 'gapmaylan'], null, 'Ôn tập hình học và đo lường'),
        LTC(44, ['congtru:1000', 'timx', 'timxnc', 'nhan:3c1', 'chia:3c1', 'bieuthuc', 'gapgiam', 'motphan', 'doidv'], null, 'Ôn tập chung'),
      ] },
      { title: 'Chủ đề 8. Các số đến 10 000 (Học kì 2)', lessons: [
        O('so10000', 45, 'Các số có bốn chữ số. Số 10 000', { gen: 'cauto', arg: 4, n: 4 }),
        B(46, 'So sánh các số trong phạm vi 10 000', { gen: 'sosanh', arg: 4, theory: `<div class="note"><ul><li>Số nào có nhiều chữ số hơn thì lớn hơn.</li><li>Cùng số chữ số: so sánh từng cặp chữ số từ trái sang phải (hàng nghìn, trăm, chục, đơn vị).</li></ul></div><div class="vd"><p>4 589 &lt; 4 598 vì cùng 4 nghìn, 5 trăm; hàng chục 8 &lt; 9.</p></div>` }),
        O('lama', 47, 'Làm quen với chữ số La Mã', { gen: 'lama', n: 4 }),
        B(48, 'Làm tròn số đến hàng chục, hàng trăm', { gen: 'mix', mix: ['lamtron:chuc', 'lamtron:tram'], n: 10, theory: `<div class="note"><p>Làm tròn đến hàng chục: nhìn chữ số hàng đơn vị. Bé hơn 5 thì làm tròn xuống, từ 5 trở lên thì làm tròn lên.</p><p>Làm tròn đến hàng trăm: nhìn chữ số hàng chục.</p></div><div class="vd"><p>347 → 350 (hàng chục) · 347 → 300 (hàng trăm)</p></div>` }),
        LTC(49, ['cauto:4', 'sosanh:4', 'lama', 'lamtron:chuc', 'lamtron:tram']),
      ] },
      { title: 'Chủ đề 9. Chu vi, diện tích một số hình phẳng', lessons: [
        O('chuvi', 50, 'Chu vi hình tam giác, hình tứ giác, hình chữ nhật, hình vuông', { gen: 'chuvi', n: 4 }),
        O('dientich', 51, 'Diện tích của một hình. Xăng-ti-mét vuông'),
        B(52, 'Diện tích hình chữ nhật, diện tích hình vuông', { gen: 'dientich', theory: `<div class="note"><p class="big">Diện tích hình chữ nhật = dài × rộng</p><p class="big">Diện tích hình vuông = cạnh × cạnh</p></div><div class="warn"><p>Chiều dài, chiều rộng phải cùng đơn vị đo. Viết đơn vị diện tích là cm².</p></div>` }),
        LTC(53, ['chuvi', 'dientich']),
      ] },
      { title: 'Chủ đề 10. Cộng, trừ, nhân, chia trong phạm vi 10 000', lessons: [
        B(54, 'Phép cộng trong phạm vi 10 000', { gen: 'congtru', arg: '10000+', theory: `<p>Đặt tính thẳng cột (đơn vị thẳng đơn vị, chục thẳng chục…), cộng từ phải sang trái, nhớ sang hàng bên trái khi được 10 trở lên.</p>` }),
        B(55, 'Phép trừ trong phạm vi 10 000', { gen: 'congtru', arg: '10000-', theory: `<p>Đặt tính thẳng cột, trừ từ phải sang trái. Khi chữ số trên bé hơn chữ số dưới, mượn 1 ở hàng bên trái (rồi trả 1 vào hàng đó ở số trừ).</p>` }),
        B(56, 'Nhân số có bốn chữ số với số có một chữ số', { gen: 'nhan', arg: '4c1', theory: `<p>Nhân lần lượt từ hàng đơn vị đến hàng nghìn, nhớ cộng phần nhớ.</p><div class="vd"><p>1 214 × 3 = <b>3 642</b></p></div>` }),
        B(57, 'Chia số có bốn chữ số cho số có một chữ số', { gen: 'chia', arg: '4c1', theory: `<p>Chia lần lượt từ hàng nghìn. Mỗi lần chia: chia → nhân → trừ → hạ chữ số tiếp theo.</p><div class="vd"><p>4 836 : 4 = <b>1 209</b></p></div>` }),
        LTC(58, ['congtru:10000', 'nhan:4c1', 'chia:4c1', 'bieuthuc']),
      ] },
      { title: 'Chủ đề 11. Các số đến 100 000', lessons: [
        B(59, 'Các số có năm chữ số. Số 100 000', { gen: 'cauto', arg: 5, theory: `<p>Số có năm chữ số gồm: <b>chục nghìn, nghìn, trăm, chục, đơn vị</b>.</p><div class="vd"><p>42 517 = 40 000 + 2 000 + 500 + 10 + 7. Đọc: <i>bốn mươi hai nghìn năm trăm mười bảy</i>.</p><p>Số 100 000 đọc là <i>một trăm nghìn</i>.</p></div>` }),
        B(60, 'So sánh các số trong phạm vi 100 000', { gen: 'sosanh', arg: 5, theory: `<p>So sánh như với số có bốn chữ số: nhiều chữ số hơn thì lớn hơn; cùng số chữ số thì so từng hàng từ trái sang phải.</p>` }),
        B(61, 'Làm tròn số đến hàng nghìn, hàng chục nghìn', { gen: 'mix', mix: ['lamtron:nghin', 'lamtron:chucnghin'], n: 10, theory: `<div class="note"><p>Làm tròn đến hàng nghìn: nhìn chữ số hàng trăm. Làm tròn đến hàng chục nghìn: nhìn chữ số hàng nghìn.</p></div><div class="vd"><p>36 742 → 37 000 (hàng nghìn) · 36 742 → 40 000 (hàng chục nghìn)</p></div>` }),
        LTC(62, ['cauto:5', 'sosanh:5', 'lamtron:nghin', 'lamtron:chucnghin']),
      ] },
      { title: 'Chủ đề 12. Cộng, trừ trong phạm vi 100 000', lessons: [
        B(63, 'Phép cộng trong phạm vi 100 000', { gen: 'congtru', arg: '100000+', theory: `<p>Đặt tính thẳng cột và cộng từ phải sang trái, giống như với số có bốn chữ số.</p>` }),
        B(64, 'Phép trừ trong phạm vi 100 000', { gen: 'congtru', arg: '100000-', theory: `<p>Đặt tính thẳng cột và trừ từ phải sang trái, nhớ mượn khi cần.</p>` }),
        LTC(65, ['congtru:100000', 'timx']),
      ] },
      { title: 'Chủ đề 13. Xem đồng hồ. Tháng – năm. Tiền Việt Nam', lessons: [
        O('dongho', 66, 'Xem đồng hồ. Tháng – năm', { gen: 'thoigian', n: 4 }),
        B(67, 'Thực hành xem đồng hồ, xem lịch', { gen: 'thoigian', theory: `<p>Cùng bố mẹ: xem lịch treo tường, tìm ngày sinh nhật của con là thứ mấy; xem đồng hồ lúc đi ngủ, lúc thức dậy.</p>` }),
        B(68, 'Tiền Việt Nam', { gen: 'tien', theory: `<p>Một số tờ tiền Việt Nam: 1 000 đồng, 2 000 đồng, 5 000 đồng, 10 000 đồng, 20 000 đồng, 50 000 đồng, 100 000 đồng.</p><div class="tip"><p>Khi mua hàng: số tiền trả lại = số tiền đưa − giá tiền món hàng.</p></div>` }),
        LTC(69, ['thoigian', 'tien']),
      ] },
      { title: 'Chủ đề 14. Nhân, chia trong phạm vi 100 000', lessons: [
        B(70, 'Nhân số có năm chữ số với số có một chữ số', { gen: 'nhan', arg: '5c1', theory: `<p>Nhân lần lượt từ hàng đơn vị đến hàng chục nghìn, nhớ cộng phần nhớ.</p><div class="vd"><p>12 035 × 4 = <b>48 140</b></p></div>` }),
        B(71, 'Chia số có năm chữ số cho số có một chữ số', { gen: 'chia', arg: '5c1', theory: `<p>Chia lần lượt từ hàng chục nghìn (hoặc lấy hai chữ số đầu nếu chữ số đầu bé hơn số chia).</p><div class="vd"><p>36 925 : 5 = <b>7 385</b></p></div>` }),
        LTC(72, ['nhan:5c1', 'chia:5c1', 'chiadu']),
      ] },
      { title: 'Chủ đề 15. Làm quen với yếu tố thống kê, xác suất', lessons: [
        B(73, 'Thu thập, phân loại, ghi chép số liệu. Bảng số liệu', {
          theory: `<p>Ví dụ: Tổ 1 hỏi các bạn thích quả gì và ghi lại thành bảng số liệu:</p><div class="tw"><table class="t"><tr><th>Quả</th><th>Cam</th><th>Xoài</th><th>Dưa hấu</th><th>Chuối</th></tr><tr><td>Số bạn</td><td>5</td><td>8</td><td>6</td><td>3</td></tr></table></div>`,
          quiz: [{ q: 'Có bao nhiêu bạn thích xoài?', a: ['8'], e: 'Xoài: 8 bạn.' }, { q: 'Quả được nhiều bạn thích nhất là:', opts: ['Xoài', 'Cam', 'Chuối'], a: 0, e: '8 bạn.' }, { q: 'Tổ 1 hỏi tất cả bao nhiêu bạn?', a: ['22'], e: '5 + 8 + 6 + 3 = 22.' }, { q: 'Số bạn thích dưa hấu nhiều hơn số bạn thích chuối bao nhiêu bạn?', a: ['3'], e: '6 − 3 = 3.' }] }),
        B(74, 'Khả năng xảy ra của một sự kiện', {
          theory: `<div class="note"><p>Một sự kiện có thể: <b>chắc chắn</b> xảy ra, <b>có thể</b> xảy ra, hoặc <b>không thể</b> xảy ra.</p></div><div class="vd"><p>Hộp chỉ có bi đỏ. Lấy một viên: <i>chắc chắn</i> được bi đỏ; <i>không thể</i> được bi xanh.</p></div>`,
          quiz: [{ q: 'Hộp có 3 bi đỏ, 2 bi xanh. Lấy 1 viên bi, được bi xanh là sự kiện:', opts: ['Có thể', 'Chắc chắn', 'Không thể'], a: 0, keep: true, e: 'Có bi xanh nên có thể lấy được.' }, { q: 'Hộp chỉ có bi đỏ. Lấy được bi vàng là sự kiện:', opts: ['Có thể', 'Chắc chắn', 'Không thể'], a: 2, keep: true, e: 'Không có bi vàng.' }, { q: 'Ngày mai Mặt Trời mọc ở phía Đông là sự kiện:', opts: ['Có thể', 'Chắc chắn', 'Không thể'], a: 1, keep: true, e: 'Luôn đúng.' }] }),
        B(75, 'Thực hành và trải nghiệm thu thập, phân loại, ghi chép số liệu, đọc bảng số liệu', {
          theory: `<p>Con hỏi các thành viên trong gia đình (hoặc bạn cùng tổ) thích màu gì, ghi lại bằng gạch đếm rồi lập bảng số liệu.</p>`,
          quiz: [{ q: 'Bảng: Đỏ 4 bạn, Xanh 6 bạn, Vàng 2 bạn. Màu nào ít bạn thích nhất?', opts: ['Vàng', 'Đỏ', 'Xanh'], a: 0, e: '2 bạn.' }, { q: 'Theo bảng trên, có tất cả bao nhiêu bạn?', a: ['12'], e: '4 + 6 + 2 = 12.' }] }),
      ] },
      { title: 'Chủ đề 16. Ôn tập cuối năm', lessons: [
        LTC(76, ['cauto:4', 'cauto:5', 'sosanh:5', 'lamtron:tram', 'lamtron:nghin'], null, 'Ôn tập các số trong phạm vi 10 000, 100 000'),
        LTC(77, ['congtru:100000', 'timx'], null, 'Ôn tập phép cộng, phép trừ trong phạm vi 100 000'),
        LTC(78, ['nhan:4c1', 'nhan:5c1', 'chia:4c1', 'chia:5c1', 'timxnc'], null, 'Ôn tập phép nhân, phép chia trong phạm vi 100 000'),
        LTC(79, ['chuvi', 'dientich', 'doidv', 'thoigian', 'tien'], null, 'Ôn tập hình học và đo lường'),
        B(80, 'Ôn tập bảng số liệu, khả năng xảy ra của một sự kiện', { quiz: [{ q: 'Bảng số cây trồng: Lớp 3A: 15 cây, 3B: 12 cây, 3C: 18 cây. Lớp nào trồng nhiều cây nhất?', opts: ['3C', '3A', '3B'], a: 0, e: '18 cây.' }, { q: 'Cả ba lớp trồng được bao nhiêu cây?', a: ['45'], e: '15 + 12 + 18 = 45.' }, { q: 'Tung đồng xu, được mặt sấp là sự kiện:', opts: ['Có thể', 'Chắc chắn', 'Không thể'], a: 0, keep: true, e: 'Có thể sấp hoặc ngửa.' }] }),
        LTC(81, ['congtru:100000', 'nhan:5c1', 'chia:5c1', 'bieuthuc', 'chuvi', 'dientich', 'lamtron:nghin', 'tien', 'thoigian'], null, 'Ôn tập chung'),
      ] },
    ],
  };

  /* ---------------------------- TIẾNG VIỆT 3 ---------------------------- */
  const tiengviet = {
    id: 'tiengviet', name: 'Tiếng Việt', tt: 'TV', color: 'o', ill: 'tiengviet', book: 'Tiếng Việt 3 · Kết nối tri thức',
    chapters: [
      { title: 'Những trải nghiệm thú vị', lessons: [
        { id: 'tuloai', title: 'Từ chỉ sự vật, hoạt động, đặc điểm',
          theory: `<div class="tw"><table class="t"><tr><th>Loại từ</th><th>Dùng để chỉ</th><th>Ví dụ</th></tr>
          <tr><td><b>Sự vật</b></td><td>người, con vật, đồ vật, cây cối, hiện tượng</td><td>học sinh, con mèo, cái bàn, cây bàng, cơn mưa</td></tr>
          <tr><td><b>Hoạt động</b></td><td>việc làm, cử động</td><td>chạy, đọc, viết, hát, bơi</td></tr>
          <tr><td><b>Đặc điểm</b></td><td>màu sắc, hình dáng, tính nết</td><td>đỏ thắm, cao, tròn xoe, chăm chỉ</td></tr></table></div>
          <div class="tip"><p>Hỏi “<b>Là gì?</b>” để tìm từ chỉ sự vật, “<b>Làm gì?</b>” để tìm từ chỉ hoạt động, “<b>Thế nào?</b>” để tìm từ chỉ đặc điểm.</p></div>`,
          quiz: [
            { q: 'Từ nào chỉ <b>hoạt động</b>?', opts: ['quyển vở', 'chạy nhảy', 'xanh biếc', 'cô giáo'], a: 1, e: '“Chạy nhảy” là việc làm, cử động.' },
            { q: 'Từ nào chỉ <b>đặc điểm</b>?', opts: ['tròn xoe', 'cái cặp', 'tập thể dục', 'con chim'], a: 0, e: '“Tròn xoe” tả hình dáng.' },
            { q: 'Trong câu “Chú mèo mướp nằm sưởi nắng.”, từ chỉ sự vật là:', opts: ['mèo mướp', 'nằm', 'sưởi', 'nắng ấm'], a: 0, e: '“Mèo mướp” là con vật.' },
            { q: 'Nhóm nào gồm toàn từ chỉ sự vật?', opts: ['bút, thước, cặp sách', 'bút, viết, đẹp', 'hát, múa, vẽ', 'cao, thấp, béo'], a: 0, e: 'Bút, thước, cặp sách đều là đồ vật.' },
            { q: 'Trong câu “Bầu trời trong xanh.”, từ chỉ đặc điểm là:', opts: ['bầu trời', 'trong xanh'], a: 1, keep: true, e: '“Trong xanh” trả lời câu hỏi “Thế nào?”.' },
          ] },
      ] },
      { title: 'Cổng trường rộng mở', lessons: [
        { id: 'kieucau', title: 'Câu kể, câu hỏi, câu cảm, câu khiến',
          theory: `<div class="tw"><table class="t"><tr><th>Kiểu câu</th><th>Dùng để</th><th>Dấu hiệu</th><th>Ví dụ</th></tr>
          <tr><td>Câu kể</td><td>kể, tả, giới thiệu</td><td>dấu chấm</td><td>Nhà em ở gần trường.</td></tr>
          <tr><td>Câu hỏi</td><td>hỏi điều chưa biết</td><td>ai, gì, nào, sao, không…; dấu chấm hỏi</td><td>Bạn đã làm bài chưa?</td></tr>
          <tr><td>Câu cảm</td><td>bộc lộ cảm xúc</td><td>ôi, chao ôi, quá, thật; dấu chấm than</td><td>Ôi, bông hoa đẹp quá!</td></tr>
          <tr><td>Câu khiến</td><td>yêu cầu, đề nghị</td><td>hãy, đừng, chớ, nào, đi; dấu chấm than hoặc dấu chấm</td><td>Em hãy đóng cửa sổ lại.</td></tr></table></div>`,
          quiz: [
            { q: '“Ôi, bông hoa đẹp quá!” là kiểu câu gì?', opts: ['Câu kể', 'Câu hỏi', 'Câu cảm', 'Câu khiến'], a: 2, keep: true, e: 'Có “ôi”, “quá” và dấu chấm than, bộc lộ cảm xúc.' },
            { q: '“Bạn đã làm bài tập chưa?” là kiểu câu gì?', opts: ['Câu kể', 'Câu hỏi', 'Câu cảm', 'Câu khiến'], a: 1, keep: true, e: 'Câu dùng để hỏi, có dấu chấm hỏi.' },
            { q: '“Em hãy đóng cửa sổ lại.” là kiểu câu gì?', opts: ['Câu kể', 'Câu hỏi', 'Câu cảm', 'Câu khiến'], a: 3, keep: true, e: 'Có từ “hãy”, dùng để yêu cầu.' },
            { q: '“Nhà em ở gần trường.” là kiểu câu gì?', opts: ['Câu kể', 'Câu hỏi', 'Câu cảm', 'Câu khiến'], a: 0, keep: true, e: 'Câu giới thiệu, kết thúc bằng dấu chấm.' },
            { q: 'Từ nào thường có trong câu khiến?', opts: ['hãy', 'quá', 'không', 'ôi'], a: 0, e: '“Hãy”, “đừng”, “chớ” thường dùng để yêu cầu, đề nghị.' },
          ] },
      ] },
      { title: 'Mái nhà yêu thương', lessons: [
        { id: 'sosanh', title: 'Biện pháp so sánh',
          theory: `<p><b>So sánh</b> là đối chiếu sự vật này với sự vật khác có nét giống nhau, để câu văn sinh động, dễ hình dung hơn.</p>
          <div class="note"><p class="big">Sự vật 1 + (đặc điểm) + từ so sánh + Sự vật 2</p><p>Từ so sánh hay gặp: <b>như, là, giống như, tựa như, như là</b>.</p></div>
          <div class="vd"><p>Mặt trời đỏ rực <mark>như</mark> quả cầu lửa.</p><p>Đôi mắt em bé tròn <mark>như</mark> hai hòn bi ve.</p></div>`,
          quiz: [
            { q: 'Trong câu “Mặt hồ sáng long lanh như tấm gương.”, mặt hồ được so sánh với gì?', opts: ['tấm gương', 'long lanh', 'mặt hồ', 'như'], a: 0, e: 'Sự vật 2 là “tấm gương”.' },
            { q: 'Từ so sánh trong câu “Lá cờ đỏ thắm như máu.” là:', a: ['như'], e: 'Từ “như” nối hai sự vật được so sánh.' },
            { q: 'Câu nào có hình ảnh so sánh?', opts: ['Ông trăng tròn như cái đĩa.', 'Ông trăng rất tròn.', 'Em ngắm trăng.', 'Trăng lên cao.'], a: 0, e: 'Trăng được so sánh với cái đĩa bằng từ “như”.' },
            { q: 'Chọn từ phù hợp: “Hoa phượng đỏ rực như …”', opts: ['ngọn lửa', 'tấm thảm xanh', 'dòng sông'], a: 0, e: 'Hoa phượng màu đỏ giống ngọn lửa.' },
            { q: 'Điền từ so sánh: “Tiếng suối trong ___ tiếng hát xa.”', a: ['như'], e: 'Có thể điền “như”.' },
          ] },
      ] },
      { title: 'Cộng đồng gắn bó', lessons: [
        { id: 'chinhta', title: 'Chính tả: s/x, r/d/gi, ch/tr',
          theory: `<p>Những cặp âm hay viết nhầm. Con đọc to và ghi nhớ các từ hay gặp:</p>
          <div class="tw"><table class="t"><tr><th>Âm</th><th>Từ đúng hay gặp</th></tr>
          <tr><td>s / x</td><td>sạch sẽ, sáng sủa, sân trường · xinh xắn, xanh xao, xe đạp</td></tr>
          <tr><td>r / d / gi</td><td>rì rào, rực rỡ · dịu dàng, dạy dỗ · giữ gìn, gia đình, giỏi giang</td></tr>
          <tr><td>ch / tr</td><td>chăm chỉ, che chở, chú ý · trang trại, trong trẻo, trường học</td></tr></table></div>
          <div class="tip"><p>Gặp từ chưa chắc, con tra từ điển hoặc hỏi bố mẹ, thầy cô.</p></div>`,
          quiz: [
            { q: 'Từ nào viết đúng chính tả?', opts: ['sạch sẽ', 'xạch xẽ', 'sạch xẽ'], a: 0, e: 'Viết đúng: sạch sẽ.' },
            { q: 'Từ nào viết đúng chính tả?', opts: ['chăm chỉ', 'trăm chỉ', 'chăm trỉ'], a: 0, e: 'Viết đúng: chăm chỉ.' },
            { q: 'Từ nào viết đúng chính tả?', opts: ['giữ gìn', 'dữ dìn', 'rữ rìn'], a: 0, e: 'Viết đúng: giữ gìn.' },
            { q: 'Từ nào viết đúng chính tả?', opts: ['trang trại', 'chang chại', 'trang chại'], a: 0, e: 'Viết đúng: trang trại.' },
            { q: 'Từ nào viết đúng chính tả?', opts: ['xinh xắn', 'sinh sắn', 'xinh sắn'], a: 0, e: 'Viết đúng: xinh xắn.' },
            { q: 'Từ nào viết đúng chính tả?', opts: ['rực rỡ', 'dực dỡ', 'giực giỡ'], a: 0, e: 'Viết đúng: rực rỡ.' },
          ] },
      ] },
      { title: 'Những sắc màu thiên nhiên (Học kì 2)', lessons: [
        { id: 'nghia', title: 'Từ có nghĩa giống nhau, từ có nghĩa trái ngược',
          theory: `<div class="tw"><table class="t"><tr><th>Nghĩa giống nhau</th><th>Nghĩa trái ngược</th></tr>
          <tr><td>chăm chỉ – siêng năng</td><td>cao – thấp</td></tr><tr><td>to – lớn</td><td>nóng – lạnh</td></tr>
          <tr><td>xinh đẹp – xinh xắn</td><td>vui – buồn</td></tr><tr><td>mẹ – má (tiếng miền Nam)</td><td>chăm chỉ – lười biếng</td></tr></table></div>`,
          quiz: [
            { q: 'Từ có nghĩa trái ngược với “dài” là:', opts: ['ngắn', 'cao', 'to', 'rộng'], a: 0, e: 'Dài – ngắn.' },
            { q: 'Từ có nghĩa giống với “siêng năng” là:', opts: ['chăm chỉ', 'lười biếng', 'nhanh nhẹn'], a: 0, e: 'Siêng năng – chăm chỉ.' },
            { q: 'Từ có nghĩa trái ngược với “chăm chỉ” là:', opts: ['lười biếng', 'cần cù', 'siêng năng'], a: 0, e: 'Chăm chỉ – lười biếng.' },
            { q: 'Viết từ có nghĩa trái ngược với “trắng”:', a: ['đen'], e: 'Trắng – đen.' },
            { q: 'Cặp từ nào có nghĩa trái ngược?', opts: ['nóng – lạnh', 'to – lớn', 'đẹp – xinh'], a: 0, e: 'Nóng và lạnh có nghĩa trái ngược nhau.' },
          ] },
      ] },
      { title: 'Bài học từ cuộc sống', lessons: [
        { id: 'dauhaicham', title: 'Dấu hai chấm, dấu ngoặc kép',
          theory: `<div class="note"><p><b>Dấu hai chấm (:)</b> báo hiệu phần <b>liệt kê</b> hoặc <b>lời nói</b> của nhân vật.</p><p><b>Dấu ngoặc kép (“ ”)</b> đánh dấu <b>lời nói trực tiếp</b> của nhân vật.</p></div>
          <div class="vd"><p>Vườn nhà em có nhiều cây<mark>:</mark> cam, bưởi, xoài, nhãn.</p><p>Mẹ dặn<mark>: “</mark>Con nhớ đội mũ khi ra nắng nhé!<mark>”</mark></p></div>`,
          quiz: [
            { q: 'Trong câu “Trong cặp em có: sách, vở, bút.”, dấu hai chấm dùng để:', opts: ['báo hiệu phần liệt kê', 'kết thúc câu', 'hỏi'], a: 0, e: 'Sau dấu hai chấm là các đồ vật được kể ra.' },
            { q: 'Dấu ngoặc kép thường dùng để:', opts: ['đánh dấu lời nói trực tiếp', 'kết thúc câu hỏi', 'ngăn cách các từ'], a: 0, e: 'Lời nói của nhân vật đặt trong ngoặc kép.' },
            { q: 'Câu nào đặt dấu câu đúng?', opts: ['Bé nói: “Con chào mẹ ạ!”', 'Bé nói “Con chào mẹ ạ!:”', 'Bé: nói Con chào mẹ ạ!'], a: 0, e: 'Dấu hai chấm trước lời nói, lời nói nằm trong ngoặc kép.' },
          ] },
      ] },
      { title: 'Đất nước ngàn năm', lessons: [
        { id: 'cauhoi', title: 'Đặt câu hỏi: Khi nào? Ở đâu? Vì sao? Để làm gì? Bằng gì?',
          theory: `<div class="tw"><table class="t"><tr><th>Câu hỏi</th><th>Hỏi về</th><th>Ví dụ (phần được hỏi)</th></tr>
          <tr><td>Khi nào?</td><td>thời gian</td><td><mark>Sáng mai</mark>, lớp em đi tham quan.</td></tr>
          <tr><td>Ở đâu?</td><td>nơi chốn</td><td>Các bạn chơi đá cầu <mark>ở sân trường</mark>.</td></tr>
          <tr><td>Vì sao?</td><td>nguyên nhân</td><td><mark>Vì trời mưa</mark>, chúng em tập thể dục trong lớp.</td></tr>
          <tr><td>Để làm gì?</td><td>mục đích</td><td>Em chăm học <mark>để bố mẹ vui lòng</mark>.</td></tr>
          <tr><td>Bằng gì?</td><td>phương tiện, cách thức</td><td>Bố đi làm <mark>bằng xe máy</mark>.</td></tr></table></div>`,
          quiz: [
            { q: '“<mark>Sáng mai</mark>, lớp em đi tham quan.” Phần tô màu trả lời câu hỏi nào?', opts: ['Khi nào?', 'Ở đâu?', 'Vì sao?', 'Bằng gì?'], a: 0, keep: true, e: '“Sáng mai” chỉ thời gian.' },
            { q: '“<mark>Vì trời mưa</mark>, chúng em nghỉ tập thể dục.” Phần tô màu trả lời câu hỏi nào?', opts: ['Khi nào?', 'Ở đâu?', 'Vì sao?', 'Để làm gì?'], a: 2, keep: true, e: '“Vì trời mưa” chỉ nguyên nhân.' },
            { q: '“Bố đi làm <mark>bằng xe máy</mark>.” Phần tô màu trả lời câu hỏi nào?', opts: ['Khi nào?', 'Bằng gì?', 'Vì sao?', 'Ở đâu?'], a: 1, keep: true, e: '“Bằng xe máy” chỉ phương tiện.' },
            { q: '“Các bạn nhỏ chơi đá cầu <mark>ở sân trường</mark>.” Phần tô màu trả lời câu hỏi nào?', opts: ['Khi nào?', 'Ở đâu?', 'Để làm gì?', 'Bằng gì?'], a: 1, keep: true, e: '“Ở sân trường” chỉ nơi chốn.' },
            { q: '“Em chăm học <mark>để bố mẹ vui lòng</mark>.” Phần tô màu trả lời câu hỏi nào?', opts: ['Vì sao?', 'Để làm gì?', 'Khi nào?', 'Ở đâu?'], a: 1, keep: true, e: 'Chỉ mục đích của việc chăm học.' },
          ] },
      ] },
      { title: 'Trái Đất của chúng mình', lessons: [
        soon('vietdoanvan', 'Viết đoạn văn tả cảnh, kể việc làm'),
      ] },
    ],
  };

  /* Tiếng Anh: xem file tienganh-lop3.js */
  const tienganh = window.HOCTAP_TA3;

  /* ----------------------------- ĐẠO ĐỨC 3 ----------------------------- */
  const daoduc = {
    id: 'daoduc', name: 'Đạo đức', tt: 'ĐĐ', color: 'y', ill: 'daoduc', book: 'Đạo đức 3 · Kết nối tri thức',
    chapters: [
      { title: 'Em yêu Tổ quốc Việt Nam', lessons: [
        { id: 'chaoco', title: 'Chào cờ và hát Quốc ca',
          theory: `<ul><li><b>Quốc kỳ</b> Việt Nam là lá cờ nền đỏ, ở giữa có ngôi sao vàng năm cánh.</li><li><b>Quốc ca</b> Việt Nam là bài hát <i>Tiến quân ca</i> của nhạc sĩ Văn Cao.</li></ul>
          <div class="note"><p>Khi chào cờ, em:</p><ul><li>Đứng nghiêm trang, bỏ mũ, nón.</li><li>Mắt nhìn thẳng về phía lá cờ.</li><li>Hát Quốc ca to, rõ ràng.</li><li>Không nói chuyện, không đùa nghịch.</li></ul></div>`,
          quiz: [
            { q: 'Quốc kỳ Việt Nam có đặc điểm gì?', opts: ['Nền đỏ, sao vàng năm cánh', 'Nền vàng, sao đỏ', 'Nền xanh, sao trắng'], a: 0, e: 'Lá cờ đỏ sao vàng.' },
            { q: 'Quốc ca Việt Nam là bài hát nào?', opts: ['Tiến quân ca', 'Như có Bác trong ngày vui đại thắng', 'Em yêu trường em'], a: 0, e: 'Tiến quân ca, nhạc sĩ Văn Cao sáng tác.' },
            { q: 'Khi chào cờ, việc làm nào là đúng?', opts: ['Đứng nghiêm, bỏ mũ nón, hát to rõ ràng', 'Vừa hát vừa nói chuyện', 'Đội mũ và nhìn xuống đất'], a: 0, e: 'Thể hiện sự tôn trọng Tổ quốc.' },
            { q: 'Bạn Nam đứng cạnh em nói chuyện trong lúc chào cờ. Em nên:', opts: ['Nhắc nhẹ bạn giữ trật tự sau giờ chào cờ', 'Nói chuyện cùng bạn', 'Mặc kệ bạn'], a: 0, e: 'Nhắc nhở bạn một cách nhẹ nhàng.' },
          ] },
        soon('yeutoquoc', 'Em yêu Tổ quốc Việt Nam'),
      ] },
      { title: 'Em quý trọng mọi người', lessons: [
        soon('hangxom', 'Quan tâm hàng xóm láng giềng'),
        { id: 'giuloihua', title: 'Giữ lời hứa',
          theory: `<p><b>Giữ lời hứa</b> là thực hiện đúng điều mình đã hứa với người khác.</p>
          <div class="note"><ul><li>Chỉ hứa những điều mình có thể làm được.</li><li>Cố gắng làm đúng điều đã hứa.</li><li>Nếu không làm được, phải nói rõ lí do và xin lỗi.</li></ul></div>
          <div class="tip"><p>Người biết giữ lời hứa sẽ được mọi người tin tưởng và quý mến.</p></div>`,
          quiz: [
            { q: 'Giữ lời hứa là:', opts: ['Thực hiện đúng điều mình đã hứa', 'Hứa thật nhiều', 'Hứa rồi quên'], a: 0, e: 'Làm đúng điều đã hứa.' },
            { q: 'Em hứa cho bạn mượn truyện nhưng em lỡ làm mất truyện. Em nên:', opts: ['Nói thật với bạn và xin lỗi', 'Tránh mặt bạn', 'Nói là em quên'], a: 0, e: 'Nói rõ lí do và xin lỗi bạn.' },
            { q: 'Vì sao cần giữ lời hứa?', opts: ['Để mọi người tin tưởng mình', 'Để được khen thưởng', 'Vì sợ bị phạt'], a: 0, e: 'Giữ lời hứa giúp mọi người tin tưởng, quý mến mình.' },
            { q: 'Việc làm nào thể hiện giữ lời hứa?', opts: ['Hứa với mẹ làm xong bài rồi mới xem ti vi, và làm đúng như vậy', 'Hứa dọn phòng nhưng đi chơi', 'Hứa với cô sẽ học bài nhưng không học'], a: 0, e: 'Hứa và làm đúng điều đã hứa.' },
          ] },
      ] },
      { title: 'Em ham học hỏi, tích cực', lessons: [
        { id: 'hamhoc', title: 'Ham học hỏi',
          theory: `<p><b>Ham học hỏi</b> là luôn muốn biết thêm điều mới, chăm chỉ tìm hiểu.</p>
          <div class="note"><ul><li>Chăm chú nghe giảng, hăng hái phát biểu.</li><li>Hỏi thầy cô, bố mẹ, bạn bè khi chưa hiểu.</li><li>Đọc sách, tìm hiểu thêm điều mới.</li></ul></div>`,
          quiz: [
            { q: 'Biểu hiện nào là ham học hỏi?', opts: ['Hỏi cô giáo khi chưa hiểu bài', 'Ngại hỏi nên bỏ qua bài khó', 'Chép bài của bạn'], a: 0, e: 'Hỏi khi chưa hiểu là ham học hỏi.' },
            { q: 'Em thấy một loài hoa lạ trong vườn. Em nên:', opts: ['Hỏi bố mẹ hoặc tìm sách đọc về loài hoa đó', 'Ngắt hoa vứt đi', 'Không quan tâm'], a: 0, e: 'Tìm hiểu để biết thêm điều mới.' },
            { q: 'Ham học hỏi giúp em:', opts: ['Hiểu biết nhiều hơn, học tốt hơn', 'Được nghỉ học', 'Không phải làm bài'], a: 0, e: 'Ham học hỏi giúp em tiến bộ.' },
          ] },
        soon('nhiemvu', 'Tích cực hoàn thành nhiệm vụ'),
        soon('khokhan', 'Khắc phục khó khăn'),
      ] },
      { title: 'Em tuân thủ quy tắc an toàn', lessons: [
        { id: 'atgt', title: 'Tuân thủ quy tắc an toàn giao thông',
          theory: `<div class="note"><ul><li>Đi bộ trên vỉa hè hoặc sát mép đường bên phải.</li><li>Qua đường ở nơi có vạch kẻ dành cho người đi bộ; nắm tay người lớn.</li><li>Đèn <b>đỏ</b>: dừng lại · Đèn <b>vàng</b>: chậm lại, chuẩn bị dừng · Đèn <b>xanh</b>: được đi.</li><li>Đội mũ bảo hiểm đúng cách khi ngồi xe máy, xe đạp điện.</li><li>Không chơi đùa dưới lòng đường.</li></ul></div>`,
          quiz: [
            { q: 'Khi đèn giao thông màu đỏ, em phải:', opts: ['Dừng lại', 'Đi nhanh qua', 'Chạy sang đường'], a: 0, e: 'Đèn đỏ: dừng lại.' },
            { q: 'Khi ngồi sau xe máy, em cần:', opts: ['Đội mũ bảo hiểm và cài quai', 'Đứng lên yên xe', 'Buông tay khỏi người lái'], a: 0, e: 'Mũ bảo hiểm bảo vệ đầu khi có va chạm.' },
            { q: 'Em nên qua đường ở đâu?', opts: ['Ở vạch kẻ dành cho người đi bộ', 'Ở bất cứ chỗ nào', 'Giữa ngã tư khi xe đang chạy'], a: 0, e: 'Vạch kẻ đường cho người đi bộ là nơi an toàn.' },
            { q: 'Việc làm nào không an toàn?', opts: ['Đá bóng dưới lòng đường', 'Đi bộ trên vỉa hè', 'Nắm tay mẹ khi qua đường'], a: 0, e: 'Chơi dưới lòng đường rất nguy hiểm.' },
          ] },
      ] },
    ],
  };

  /* ------------------------- TỰ NHIÊN VÀ XÃ HỘI 3 ------------------------- */
  const tnxh = {
    id: 'tnxh', name: 'Tự nhiên và Xã hội', tt: 'TNXH', color: 'g', ill: 'tnxh', book: 'Tự nhiên và Xã hội 3 · Kết nối tri thức',
    chapters: [
      { title: 'Gia đình', lessons: [
        { id: 'honoi', title: 'Họ nội, họ ngoại',
          theory: `<div class="tw"><table class="t"><tr><th>Họ nội (bên bố)</th><th>Họ ngoại (bên mẹ)</th></tr>
          <tr><td>Ông nội, bà nội: bố mẹ của bố</td><td>Ông ngoại, bà ngoại: bố mẹ của mẹ</td></tr>
          <tr><td>Bác: anh, chị của bố</td><td>Bác: anh, chị của mẹ</td></tr>
          <tr><td>Chú: em trai của bố · Cô: em gái của bố</td><td>Cậu: em trai của mẹ · Dì: em gái của mẹ</td></tr></table></div>
          <div class="tip"><p>Cách gọi trên là cách gọi ở miền Bắc. Ở miền khác có thể gọi khác một chút.</p></div>`,
          quiz: [
            { q: 'Em gái của mẹ, em gọi là:', opts: ['Dì', 'Cô', 'Bác', 'Thím'], a: 0, e: 'Em gái của mẹ là dì.' },
            { q: 'Em trai của bố, em gọi là:', opts: ['Chú', 'Cậu', 'Bác'], a: 0, e: 'Em trai của bố là chú.' },
            { q: 'Bố của mẹ, em gọi là:', opts: ['Ông ngoại', 'Ông nội', 'Bác'], a: 0, e: 'Bố mẹ của mẹ là ông bà ngoại.' },
            { q: 'Em trai của mẹ, em gọi là:', opts: ['Cậu', 'Chú', 'Dì'], a: 0, e: 'Em trai của mẹ là cậu.' },
            { q: 'Ông nội, bà nội thuộc họ nào của em?', opts: ['Họ nội', 'Họ ngoại'], a: 0, keep: true, e: 'Họ nội là họ bên bố.' },
          ] },
        { id: 'hoahoan', title: 'Phòng tránh hoả hoạn khi ở nhà',
          theory: `<h3>Nguyên nhân gây cháy</h3><ul><li>Đun nấu mà không trông chừng.</li><li>Chập điện, cắm quá nhiều đồ dùng vào một ổ điện.</li><li>Trẻ em nghịch diêm, bật lửa.</li></ul>
          <div class="warn"><p>Khi có cháy:</p><ul><li>Bình tĩnh, hô to để mọi người biết.</li><li>Gọi số <b>114</b> (Cứu hoả).</li><li>Cúi thấp người, dùng khăn ướt che mũi miệng, thoát ra theo lối thoát hiểm.</li><li>Không đi thang máy, không quay lại lấy đồ.</li></ul></div>`,
          quiz: [
            { q: 'Khi có cháy, em gọi số điện thoại nào?', opts: ['114', '113', '115', '111'], a: 0, e: '114 là số của lực lượng cứu hoả.' },
            { q: 'Khi thoát khỏi đám cháy có nhiều khói, em nên:', opts: ['Cúi thấp người, che mũi bằng khăn ướt', 'Đứng thẳng chạy thật nhanh', 'Đi thang máy'], a: 0, e: 'Khói bay lên cao, cúi thấp người để ít hít khói.' },
            { q: 'Việc làm nào có thể gây cháy?', opts: ['Nghịch diêm, bật lửa', 'Tắt bếp sau khi nấu', 'Rút phích điện khi không dùng'], a: 0, e: 'Không bao giờ nghịch diêm, bật lửa.' },
            { q: 'Khi đã thoát ra ngoài, em có nên quay lại lấy đồ chơi không?', opts: ['Không', 'Có'], a: 0, keep: true, e: 'Tuyệt đối không quay lại đám cháy.' },
          ] },
        soon('vesinhnha', 'Giữ vệ sinh xung quanh nhà'),
      ] },
      { title: 'Thực vật và động vật', lessons: [
        { id: 'bophancay', title: 'Chức năng các bộ phận của thực vật',
          theory: `<div class="tw"><table class="t"><tr><th>Bộ phận</th><th>Chức năng chính</th></tr>
          <tr><td>Rễ</td><td>Hút nước và chất khoáng; giữ cây đứng vững</td></tr><tr><td>Thân</td><td>Vận chuyển nước, chất dinh dưỡng; nâng đỡ lá, hoa, quả</td></tr>
          <tr><td>Lá</td><td>Dùng ánh sáng để tạo chất dinh dưỡng nuôi cây; trao đổi khí</td></tr><tr><td>Hoa</td><td>Tạo thành quả và hạt</td></tr>
          <tr><td>Quả</td><td>Chứa và bảo vệ hạt</td></tr><tr><td>Hạt</td><td>Gieo xuống đất, nảy mầm thành cây mới</td></tr></table></div>`,
          quiz: [
            { q: 'Bộ phận nào hút nước và chất khoáng từ đất?', opts: ['Rễ', 'Lá', 'Hoa', 'Quả'], a: 0, e: 'Rễ hút nước, chất khoáng.' },
            { q: 'Bộ phận nào dùng ánh sáng để tạo chất dinh dưỡng nuôi cây?', opts: ['Lá', 'Rễ', 'Hạt'], a: 0, e: 'Lá cây làm nhiệm vụ này.' },
            { q: 'Hạt gieo xuống đất có thể:', opts: ['Nảy mầm thành cây mới', 'Biến thành rễ', 'Biến thành lá'], a: 0, e: 'Hạt giúp cây sinh ra cây mới.' },
            { q: 'Thân cây có chức năng:', opts: ['Vận chuyển nước, nâng đỡ lá hoa quả', 'Hút nước từ đất', 'Tạo hạt'], a: 0, e: 'Thân như “đường ống” và “cột chống” của cây.' },
          ] },
        soon('dongvat', 'Các bộ phận của động vật'),
      ] },
      { title: 'Con người và sức khoẻ', lessons: [
        { id: 'tieuhoa', title: 'Cơ quan tiêu hoá',
          theory: `<p>Thức ăn đi qua: <b>miệng → thực quản → dạ dày → ruột non → ruột già → hậu môn</b>.</p>
          <p>Các tuyến giúp tiêu hoá: tuyến nước bọt, gan, tuỵ.</p>
          <div class="note"><ul><li>Ăn chín, uống sôi; rửa tay trước khi ăn.</li><li>Nhai kĩ, ăn đủ chất, ăn nhiều rau và quả.</li><li>Không chạy nhảy ngay sau khi ăn no.</li></ul></div>`,
          quiz: [
            { q: 'Thức ăn sau khi qua thực quản sẽ xuống:', opts: ['Dạ dày', 'Ruột già', 'Phổi', 'Tim'], a: 0, e: 'Miệng → thực quản → dạ dày.' },
            { q: 'Bộ phận nào không thuộc cơ quan tiêu hoá?', opts: ['Phổi', 'Dạ dày', 'Ruột non', 'Gan'], a: 0, e: 'Phổi thuộc cơ quan hô hấp.' },
            { q: 'Việc làm nào tốt cho cơ quan tiêu hoá?', opts: ['Nhai kĩ, ăn chín uống sôi', 'Ăn xong chạy nhảy ngay', 'Ăn nhiều đồ ngọt'], a: 0, e: 'Nhai kĩ giúp dạ dày làm việc nhẹ nhàng hơn.' },
          ] },
        soon('tuanhoan', 'Cơ quan tuần hoàn'),
        soon('thankinh', 'Cơ quan thần kinh'),
      ] },
      { title: 'Trái Đất và bầu trời', lessons: [
        { id: 'phuonghuong', title: 'Phương hướng',
          theory: `<p>Có bốn phương chính: <b>Đông, Tây, Nam, Bắc</b>.</p>
          <div class="note"><p>Mặt Trời mọc ở phía <b>Đông</b> và lặn ở phía <b>Tây</b>.</p></div>
          <div class="tip"><p>Buổi sáng, đứng giang tay, tay phải chỉ về phía Mặt Trời mọc (Đông), tay trái chỉ phía Tây. Khi đó trước mặt em là phía <b>Bắc</b>, sau lưng là phía <b>Nam</b>.</p></div>`,
          quiz: [
            { q: 'Mặt Trời mọc ở phía nào?', opts: ['Đông', 'Tây', 'Nam', 'Bắc'], a: 0, keep: true, e: 'Mặt Trời mọc ở phía Đông.' },
            { q: 'Mặt Trời lặn ở phía nào?', opts: ['Đông', 'Tây', 'Nam', 'Bắc'], a: 1, keep: true, e: 'Mặt Trời lặn ở phía Tây.' },
            { q: 'Tay phải chỉ hướng Đông, tay trái chỉ hướng Tây. Trước mặt em là hướng:', opts: ['Bắc', 'Nam', 'Đông', 'Tây'], a: 0, keep: true, e: 'Trước mặt là Bắc, sau lưng là Nam.' },
          ] },
        soon('traidat', 'Trái Đất. Quả địa cầu'),
      ] },
    ],
  };

  /* ------------------------ TIN HỌC VÀ CÔNG NGHỆ 3 ------------------------ */
  const tincn = {
    id: 'tincn', name: 'Tin học và Công nghệ', tt: 'Tin', color: 'b', ill: 'tincn', book: 'Tin học 3 · Công nghệ 3 · Kết nối tri thức',
    chapters: [
      { title: 'Tin học: Máy tính và em', lessons: [
        { id: 'thongtin', title: 'Thông tin và xử lí thông tin',
          theory: `<p><b>Thông tin</b> là những gì đem lại hiểu biết cho con người. Em nhận thông tin bằng các giác quan: mắt (nhìn), tai (nghe), mũi (ngửi), lưỡi (nếm), da (chạm).</p>
          <div class="vd"><p>Em <b>nhìn</b> thấy đèn đỏ (nhận thông tin) → em hiểu là phải dừng lại (xử lí thông tin) → em <b>dừng lại</b> (quyết định, hành động).</p></div>`,
          quiz: [
            { q: 'Em nghe tiếng trống trường báo hết giờ ra chơi. Em nhận thông tin bằng:', opts: ['Tai', 'Mắt', 'Mũi', 'Lưỡi'], a: 0, e: 'Tiếng trống nghe bằng tai.' },
            { q: 'Nhìn thấy trời có nhiều mây đen, em quyết định mang ô. Đây là:', opts: ['Xử lí thông tin để ra quyết định', 'Không có thông tin', 'Chơi trò chơi'], a: 0, e: 'Từ thông tin “mây đen” em đoán trời sắp mưa và mang ô.' },
            { q: 'Em ngửi thấy mùi khét trong bếp. Em nhận thông tin bằng:', opts: ['Mũi', 'Tai', 'Da'], a: 0, e: 'Mùi được nhận bằng mũi. Em cần báo ngay cho người lớn.' },
          ] },
        { id: 'chuotbanphim', title: 'Tư thế ngồi. Làm quen với chuột và bàn phím',
          theory: `<h3>Tư thế ngồi đúng</h3><ul><li>Lưng thẳng, vai thả lỏng, hai chân đặt trên sàn.</li><li>Mắt cách màn hình khoảng 50 – 80 cm, nhìn hơi chếch xuống.</li><li>Ánh sáng chiếu từ bên cạnh, không chiếu thẳng vào màn hình.</li></ul>
          <h3>Cầm chuột</h3><p>Úp bàn tay phải lên chuột: <b>ngón trỏ</b> đặt lên nút trái, <b>ngón giữa</b> đặt lên nút phải. Các thao tác: di chuyển chuột, nháy chuột, nháy đúp chuột, kéo thả chuột.</p>
          <h3>Bàn phím</h3><div class="note"><p><b>Hàng phím cơ sở</b> có hai phím <b>F</b> và <b>J</b> có gờ nổi để đặt hai ngón trỏ. Phím cách (dài nhất) dùng ngón cái.</p></div>`,
          quiz: [
            { q: 'Hai phím có gờ nổi trên hàng phím cơ sở là:', opts: ['F và J', 'A và L', 'G và H', 'D và K'], a: 0, e: 'Đặt hai ngón trỏ lên F và J.' },
            { q: 'Khi cầm chuột, ngón trỏ đặt lên:', opts: ['Nút trái chuột', 'Nút phải chuột', 'Dưới chuột'], a: 0, e: 'Ngón trỏ ở nút trái, ngón giữa ở nút phải.' },
            { q: 'Mắt nên cách màn hình khoảng:', opts: ['50 – 80 cm', '5 cm', '3 m'], a: 0, e: 'Khoảng 50 – 80 cm để bảo vệ mắt.' },
            { q: 'Phím dài nhất trên bàn phím là:', opts: ['Phím cách (Space)', 'Phím Enter', 'Phím F'], a: 0, e: 'Phím cách dùng ngón cái để gõ.' },
          ] },
        soon('internet', 'Xem tin tức và giải trí trên Internet'),
        soon('thumuc', 'Sắp xếp để dễ tìm. Cây thư mục'),
      ] },
      { title: 'Công nghệ: Đồ dùng trong gia đình', lessons: [
        { id: 'denhoc', title: 'Sử dụng đèn học và quạt điện an toàn',
          theory: `<p>Đèn học gồm: <b>đế đèn, thân đèn, chụp đèn, bóng đèn, công tắc, dây nguồn</b>.</p>
          <div class="warn"><ul><li>Không chạm tay vào bóng đèn đang sáng vì có thể rất nóng.</li><li>Không nhìn thẳng vào bóng đèn.</li><li>Tay phải khô khi cắm, rút phích điện. Nhờ người lớn nếu chưa biết.</li><li>Không thò tay, thò đồ vật vào lồng quạt đang quay.</li><li>Tắt đèn, tắt quạt khi không dùng để tiết kiệm điện.</li></ul></div>`,
          quiz: [
            { q: 'Bộ phận dùng để bật, tắt đèn học là:', opts: ['Công tắc', 'Chụp đèn', 'Đế đèn'], a: 0, e: 'Công tắc dùng để bật, tắt.' },
            { q: 'Việc làm nào không an toàn?', opts: ['Thò tay vào lồng quạt đang quay', 'Tắt quạt khi ra khỏi phòng', 'Cắm điện khi tay khô'], a: 0, e: 'Cánh quạt quay có thể làm đứt tay.' },
            { q: 'Vì sao không nên chạm vào bóng đèn đang sáng?', opts: ['Bóng đèn có thể rất nóng', 'Vì đèn sẽ tắt', 'Vì đèn sẽ sáng hơn'], a: 0, e: 'Có thể bị bỏng.' },
          ] },
        soon('tivi', 'Sử dụng máy thu hình (ti vi)'),
        soon('lamdochoi', 'Làm đồ dùng học tập, đồ chơi'),
      ] },
    ],
  };

  /* ---------- Mục lục theo đúng sách (giữ mã bài cũ cho các bài đã có nội dung) ---------- */
  const pk = (subj, id, title) => { const l = subj.chapters.flatMap(c => c.lessons).find(x => x.id === id); if (!l) throw new Error('thiếu bài ' + id); return Object.assign({}, l, title ? { title } : {}); };
  const sn = (id, title) => ({ id, title });
  const ch = (title, lessons) => ({ title, lessons });
  const tvBai = (from, names) => names.map((t, i) => sn('tv' + (from + i), `Bài ${from + i}. ${t}`));
  const tiengvietMoi = Object.assign({}, tiengviet, { chapters: [
    ch('Chủ điểm: Những trải nghiệm thú vị (Tuần 1 – 4)', [...tvBai(1, ['Ngày gặp lại', 'Về thăm quê', 'Cánh rừng trong nắng', 'Lần đầu ra biển', 'Nhật kí tập bơi', 'Tập nấu ăn', 'Mùa hè lấp lánh', 'Tạm biệt mùa hè']), pk(tiengviet, 'tuloai', 'Luyện từ và câu: Từ chỉ sự vật, hoạt động, đặc điểm')]),
    ch('Chủ điểm: Cổng trường rộng mở (Tuần 5 – 8)', [...tvBai(9, ['Đi học vui sao', 'Con đường đến trường', 'Lời giải toán đặc biệt', 'Bài tập làm văn', 'Bàn tay cô giáo', 'Cuộc họp của chữ viết', 'Thư viện', 'Ngày em vào Đội']), pk(tiengviet, 'kieucau', 'Luyện từ và câu: Câu kể, câu hỏi, câu cảm, câu khiến')]),
    ch('Ôn tập giữa học kì 1 (Tuần 9)', [sn('ontapgk1', 'Ôn tập giữa học kì 1')]),
    ch('Chủ điểm: Mái nhà yêu thương (Tuần 10 – 13)', [...tvBai(17, ['Ngưỡng cửa', 'Món quà đặc biệt', 'Khi cả nhà bé tí', 'Trò chuyện cùng mẹ', 'Tia nắng bé nhỏ', 'Để cháu nắm tay ông', 'Tôi yêu em tôi', 'Bạn nhỏ trong nhà']), pk(tiengviet, 'sosanh', 'Luyện từ và câu: Biện pháp so sánh')]),
    ch('Chủ điểm: Cộng đồng gắn bó (Tuần 14 – 17)', [...tvBai(25, ['Những bậc đá chạm mây', 'Đi tìm mặt trời', 'Những chiếc áo ấm', 'Con đường của bé', 'Ngôi nhà trong cỏ', 'Những ngọn hải đăng', 'Người làm đồ chơi', 'Cây bút thần']), pk(tiengviet, 'chinhta', 'Chính tả: s/x, r/d/gi, ch/tr')]),
    ch('Ôn tập và đánh giá cuối học kì 1 (Tuần 18)', [sn('ontapck1', 'Ôn tập và đánh giá cuối học kì 1')]),
    ...tiengviet.chapters.filter(c => /Học kì 2|Bài học từ cuộc sống|Đất nước ngàn năm|Trái Đất của chúng mình/.test(c.title)).map(c => Object.assign({}, c, { title: 'Chủ điểm: ' + c.title })),
  ] });
  const daoducMoi = Object.assign({}, daoduc, { chapters: [
    ch('Chủ đề 1. Em yêu Tổ quốc Việt Nam', [pk(daoduc, 'chaoco', 'Bài 1. Chào cờ và hát Quốc ca'), sn('b2', 'Bài 2. Tự hào Tổ quốc Việt Nam')]),
    ch('Chủ đề 2. Quan tâm hàng xóm láng giềng', [sn('b3', 'Bài 3. Quan tâm hàng xóm láng giềng')]),
    ch('Chủ đề 3. Ham học hỏi', [pk(daoduc, 'hamhoc', 'Bài 4. Ham học hỏi')]),
    ch('Chủ đề 4. Giữ lời hứa', [pk(daoduc, 'giuloihua', 'Bài 5. Giữ lời hứa')]),
    ch('Chủ đề 5. Tích cực hoàn thành nhiệm vụ', [sn('b6', 'Bài 6. Tích cực hoàn thành nhiệm vụ')]),
    ch('Chủ đề 6. Khám phá bản thân', [sn('b7', 'Bài 7. Khám phá bản thân')]),
    ch('Chủ đề 7. Xử lí bất hoà với bạn bè', [sn('b8', 'Bài 8. Xử lí bất hoà với bạn bè')]),
    ch('Chủ đề 8. Tuân thủ quy tắc an toàn giao thông', [pk(daoduc, 'atgt', 'Bài 9. Đi bộ an toàn'), sn('b10', 'Bài 10. An toàn khi tham gia các phương tiện giao thông')]),
  ] });
  const tnxhMoi = Object.assign({}, tnxh, { chapters: [
    ch('Chủ đề 1. Gia đình', [pk(tnxh, 'honoi', 'Bài 1. Họ hàng và những ngày kỉ niệm của gia đình'), pk(tnxh, 'hoahoan', 'Bài 2. Phòng tránh hoả hoạn khi ở nhà'), sn('b3', 'Bài 3. Vệ sinh xung quanh nhà'), sn('b4', 'Bài 4. Ôn tập chủ đề Gia đình')]),
    ch('Chủ đề 2. Trường học', [sn('b5', 'Bài 5. Hoạt động kết nối với cộng đồng'), sn('b6', 'Bài 6. Truyền thống trường em'), sn('b7', 'Bài 7. Giữ an toàn và vệ sinh ở trường'), sn('b8', 'Bài 8. Ôn tập chủ đề Trường học')]),
    ch('Chủ đề 3. Cộng đồng địa phương', [sn('b9', 'Bài 9. Hoạt động sản xuất nông nghiệp'), sn('b10', 'Bài 10. Hoạt động sản xuất thủ công và công nghiệp'), sn('b11', 'Bài 11. Di tích lịch sử – văn hoá và cảnh quan thiên nhiên'), sn('b12', 'Bài 12. Ôn tập chủ đề Cộng đồng địa phương')]),
    ch('Chủ đề 4. Thực vật và động vật', [sn('b13', 'Bài 13. Một số bộ phận của thực vật'), pk(tnxh, 'bophancay', 'Bài 14. Chức năng một số bộ phận của thực vật'), sn('b15', 'Bài 15. Một số bộ phận của động vật và chức năng của chúng'), sn('b16', 'Bài 16. Sử dụng hợp lí thực vật và động vật'), sn('b17', 'Bài 17. Ôn tập chủ đề Thực vật và động vật')]),
    ch('Chủ đề 5. Con người và sức khoẻ', [pk(tnxh, 'tieuhoa', 'Bài 18. Cơ quan tiêu hoá'), sn('b19', 'Bài 19. Chăm sóc và bảo vệ cơ quan tiêu hoá'), sn('b20', 'Bài 20. Cơ quan tuần hoàn'), sn('b21', 'Bài 21. Chăm sóc và bảo vệ cơ quan tuần hoàn'), sn('b22', 'Bài 22. Cơ quan thần kinh'), sn('b23', 'Bài 23. Chăm sóc và bảo vệ cơ quan thần kinh'), sn('b24', 'Bài 24. Thu thập thông tin về các chất và hoạt động có hại cho sức khoẻ'), sn('b25', 'Bài 25. Ôn tập chủ đề Con người và sức khoẻ')]),
    ch('Chủ đề 6. Trái Đất và bầu trời', [pk(tnxh, 'phuonghuong', 'Bài 26. Xác định các phương trong không gian'), sn('b27', 'Bài 27. Trái Đất và các đới khí hậu'), sn('b28', 'Bài 28. Bề mặt Trái Đất'), sn('b29', 'Bài 29. Mặt Trời, Trái Đất, Mặt Trăng'), sn('b30', 'Bài 30. Ôn tập chủ đề Trái Đất và bầu trời')]),
  ] });
  const tincnMoi = Object.assign({}, tincn, { chapters: [
    ch('Tin học · Chủ đề 1. Máy tính và em', [pk(tincn, 'thongtin', 'Bài 1. Thông tin và quyết định'), sn('t2', 'Bài 2. Xử lí thông tin'), sn('t3', 'Bài 3. Máy tính và em'), pk(tincn, 'chuotbanphim', 'Bài 4. Làm việc với máy tính'), sn('t5', 'Bài 5. Sử dụng bàn phím')]),
    ch('Tin học · Chủ đề 2. Mạng máy tính và Internet', [sn('t6', 'Bài 6. Khám phá thông tin trên Internet')]),
    ch('Tin học · Chủ đề 3. Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin', [sn('t7', 'Bài 7. Sắp xếp để dễ tìm'), sn('t8', 'Bài 8. Sơ đồ hình cây. Tổ chức thông tin trong máy tính'), sn('t9', 'Bài 9. Thực hành với tệp và thư mục trong máy tính')]),
    ch('Tin học · Chủ đề 4. Đạo đức, pháp luật và văn hoá trong môi trường số', [sn('t10', 'Bài 10. Bảo vệ thông tin khi dùng máy tính')]),
    ch('Tin học · Chủ đề 5. Ứng dụng tin học', [sn('t11', 'Bài 11. Bài trình chiếu của em'), sn('t12', 'Bài 12. Tìm hiểu về thế giới tự nhiên'), sn('t13', 'Bài 13. Luyện tập sử dụng chuột')]),
    ch('Tin học · Chủ đề 6. Giải quyết vấn đề với sự trợ giúp của máy tính', [sn('t14', 'Bài 14. Em thực hiện công việc như thế nào'), sn('t15', 'Bài 15. Công việc được thực hiện theo điều kiện'), sn('t16', 'Bài 16. Công việc của em và sự trợ giúp của máy tính')]),
    ch('Công nghệ · Phần một. Công nghệ và đời sống', [sn('c1', 'Bài 1. Tự nhiên và công nghệ'), pk(tincn, 'denhoc', 'Bài 2. Sử dụng đèn học'), sn('c3', 'Bài 3. Sử dụng quạt điện'), sn('c4', 'Bài 4. Sử dụng máy thu thanh'), sn('c5', 'Bài 5. Sử dụng máy thu hình'), sn('c6', 'Bài 6. An toàn với môi trường công nghệ trong gia đình')]),
    ch('Công nghệ · Phần hai. Thủ công kĩ thuật', [sn('c7', 'Bài 7. Dụng cụ và vật liệu làm thủ công'), sn('c8', 'Bài 8. Làm đồ dùng học tập'), sn('c9', 'Bài 9. Làm biển báo giao thông'), sn('c10', 'Bài 10. Làm đồ chơi')]),
  ] });

  /* Gắn nội dung bổ sung (noidung-tv3.js, noidung-lop3-khac.js); bài ôn tập lấy câu hỏi từ các bài trong chủ đề */
  [[tiengvietMoi, 'tiengviet'], [daoducMoi, 'daoduc'], [tnxhMoi, 'tnxh'], [tincnMoi, 'tincn']].forEach(([subj, key]) => {
    const nd = (window.ND_LOP3 || {})[key] || {};
    subj.chapters.forEach(c => { c.lessons = c.lessons.map(l => (!l.theory && nd[l.id]) ? Object.assign({}, l, nd[l.id]) : l); });
    const all = subj.chapters.flatMap(c => c.lessons);
    all.forEach(l => { if (l.review) l.quiz = l.review.flatMap(id => ((all.find(x => x.id === id) || {}).quiz || []).slice(0, 2)); });
  });
  window.HOCTAP.students.push({
    id: 'tam', photo: 'anh/tam.jpg', name: 'Quỳnh Tâm', short: 'Tâm', full: 'Lê Quỳnh Tâm', grade: 3, color: 'o', avatar: 'kidTam',
    subjects: [tiengvietMoi, toan, tienganh, daoducMoi, tnxhMoi, tincnMoi],
  });
})();
