/* =====================================================================
   NỘI DUNG BỔ SUNG — KHOA HỌC TỰ NHIÊN 6 (Kết nối tri thức)
   Khoá: mã bài trong mục lục (b1, b2, …). Mỗi bài: { theory, quiz }.
   Nội dung do người soạn tự viết, tóm tắt kiến thức trọng tâm của từng bài.
   ===================================================================== */
window.ND_LOP6 = window.ND_LOP6 || {};
window.ND_LOP6.khtn = (function () {
  const TF = ['Đúng', 'Sai'];
  return {
    b1: { theory: `<p><b>Khoa học tự nhiên</b> nghiên cứu các sự vật, hiện tượng của thế giới tự nhiên và ảnh hưởng của chúng đến cuộc sống con người.</p>
      <div class="note"><p>Các lĩnh vực chính: <b>Vật lí</b> (vật chất, năng lượng), <b>Hoá học</b> (chất và sự biến đổi của chất), <b>Sinh học</b> (sinh vật), <b>Khoa học Trái Đất</b> và <b>Thiên văn học</b>.</p></div>
      <p><b>Vật sống</b> có các đặc điểm: trao đổi chất, lớn lên, sinh sản, cảm ứng. <b>Vật không sống</b> không có các đặc điểm đó.</p>`,
      quiz: [{ q: 'Lĩnh vực nghiên cứu về các sinh vật là:', opts: ['Sinh học', 'Vật lí', 'Hoá học', 'Thiên văn học'], a: 0, e: 'Sinh học nghiên cứu sinh vật.' },
        { q: 'Vật nào là vật sống?', opts: ['Con mèo', 'Hòn đá', 'Cái bàn', 'Chiếc xe đạp'], a: 0, e: 'Con mèo trao đổi chất, lớn lên, sinh sản.' },
        { q: 'Nghiên cứu sự chuyển động của các hành tinh thuộc lĩnh vực:', opts: ['Thiên văn học', 'Hoá học', 'Sinh học'], a: 0, e: 'Thiên văn học nghiên cứu các thiên thể.' }] },
    b2: { theory: `<div class="note"><ul><li>Chỉ làm thí nghiệm khi có giáo viên hướng dẫn.</li><li>Không nếm, không ngửi trực tiếp hoá chất; không ăn uống trong phòng thực hành.</li><li>Đeo kính, găng tay, áo bảo hộ khi cần; thu dọn, rửa tay sau khi làm xong.</li></ul></div>
      <div class="tw"><table class="t"><tr><th>Loại biển</th><th>Hình dạng</th></tr><tr><td>Biển cấm</td><td>Hình tròn, viền đỏ</td></tr><tr><td>Biển cảnh báo nguy hiểm</td><td>Hình tam giác, nền vàng, viền đen</td></tr><tr><td>Biển chỉ dẫn an toàn</td><td>Hình chữ nhật hoặc vuông, nền xanh</td></tr></table></div>`,
      quiz: [{ q: 'Biển cảnh báo nguy hiểm có dạng:', opts: ['Tam giác nền vàng, viền đen', 'Hình tròn viền đỏ', 'Hình vuông nền xanh'], a: 0, e: 'Tam giác vàng viền đen.' },
        { q: 'Được nếm thử hoá chất trong phòng thực hành để nhận biết.', opts: TF, a: 1, keep: true, e: 'Tuyệt đối không nếm hoá chất.' },
        { q: 'Biển cấm thường có dạng:', opts: ['Hình tròn viền đỏ', 'Tam giác vàng', 'Hình chữ nhật xanh'], a: 0, e: 'Biển cấm: tròn, viền đỏ.' }] },
    b3: { theory: `<p><b>Kính lúp</b> là một tấm kính lồi, giúp nhìn rõ vật nhỏ, thường phóng to khoảng <b>3 – 20 lần</b>.</p>
      <div class="note"><ol><li>Đặt kính lúp gần sát vật.</li><li>Từ từ đưa kính ra xa vật cho đến khi nhìn thấy vật rõ nét.</li></ol></div><p>Dùng để quan sát: gân lá, côn trùng nhỏ, chữ rất nhỏ…</p>`,
      quiz: [{ q: 'Kính lúp thường phóng to vật khoảng:', opts: ['3 – 20 lần', '1 000 lần', '2 lần'], a: 0, e: 'Khoảng 3 – 20 lần.' },
        { q: 'Kính lúp có thể dùng để quan sát:', opts: ['Gân lá cây', 'Tế bào vi khuẩn', 'Các hành tinh'], a: 0, e: 'Vi khuẩn cần kính hiển vi.' },
        { q: 'Mặt kính của kính lúp là kính:', opts: ['Lồi', 'Lõm', 'Phẳng'], a: 0, e: 'Kính lồi (rìa mỏng hơn ở giữa).' }] },
    b4: { theory: `<p><b>Kính hiển vi quang học</b> phóng to ảnh của vật khoảng <b>40 – 3 000 lần</b>, dùng để quan sát những vật rất nhỏ như tế bào.</p>
      <div class="note"><p>Các bộ phận chính: <b>thị kính</b> (mắt nhìn vào), <b>vật kính</b>, <b>bàn kính</b> (đặt mẫu vật), <b>ốc to – ốc nhỏ</b> (điều chỉnh độ nét), <b>đèn</b> hoặc gương chiếu sáng.</p></div>
      <div class="warn"><p>Cầm kính bằng hai tay: một tay cầm thân kính, một tay đỡ chân kính.</p></div>`,
      quiz: [{ q: 'Bộ phận mắt nhìn vào khi quan sát là:', opts: ['Thị kính', 'Vật kính', 'Bàn kính'], a: 0, e: 'Thị kính.' },
        { q: 'Mẫu vật được đặt ở:', opts: ['Bàn kính', 'Thị kính', 'Chân kính'], a: 0, e: 'Bàn kính.' },
        { q: 'Kính hiển vi quang học phóng to khoảng:', opts: ['40 – 3 000 lần', '3 – 20 lần', '1 triệu lần'], a: 0, e: '40 – 3 000 lần.' }] },
    b9: { theory: `<p>Mọi vật thể đều do <b>chất</b> tạo nên. Vật thể tự nhiên (cây, đá, nước biển) và vật thể nhân tạo (bàn, ấm, xe đạp).</p>
      <div class="note"><ul><li><b>Tính chất vật lí</b>: thể (rắn, lỏng, khí), màu, mùi, vị, tính tan, nhiệt độ sôi, nhiệt độ nóng chảy, tính dẫn điện, dẫn nhiệt…</li><li><b>Tính chất hoá học</b>: khả năng biến đổi thành chất khác (cháy, bị gỉ, bị phân huỷ…).</li></ul></div>
      <div class="vd"><p>Đường tan trong nước: tính chất vật lí. Đường cháy thành than: tính chất hoá học.</p></div>`,
      quiz: [{ q: 'Đinh sắt để lâu ngoài không khí bị gỉ. Đây là:', opts: ['Tính chất hoá học', 'Tính chất vật lí'], a: 0, keep: true, e: 'Tạo ra chất mới (gỉ sắt).' },
        { q: 'Muối tan trong nước. Đây là:', opts: ['Tính chất vật lí', 'Tính chất hoá học'], a: 0, keep: true, e: 'Không tạo chất mới.' },
        { q: 'Vật thể nào là vật thể tự nhiên?', opts: ['Cây xanh', 'Cái bàn', 'Quyển vở'], a: 0, e: 'Cây có sẵn trong tự nhiên.' }] },
    b12: { theory: `<div class="tw"><table class="t"><tr><th>Vật liệu</th><th>Tính chất</th><th>Ví dụ sử dụng</th></tr><tr><td>Kim loại</td><td>Dẫn điện, dẫn nhiệt tốt; dễ bị gỉ (sắt)</td><td>Nồi, dây điện</td></tr><tr><td>Nhựa</td><td>Nhẹ, bền, cách điện; khó phân huỷ</td><td>Chai, ống nước</td></tr><tr><td>Thuỷ tinh</td><td>Trong suốt, dễ vỡ</td><td>Cửa kính, cốc</td></tr><tr><td>Gốm, sứ</td><td>Cứng, cách nhiệt, giòn</td><td>Bát đĩa, gạch</td></tr><tr><td>Cao su</td><td>Đàn hồi, cách điện</td><td>Lốp xe, găng tay</td></tr><tr><td>Gỗ</td><td>Dễ chế biến, cách nhiệt</td><td>Bàn ghế</td></tr></table></div>
      <div class="tip"><p>Dùng vật liệu an toàn, tiết kiệm; hạn chế đồ nhựa dùng một lần.</p></div>`,
      quiz: [{ q: 'Vật liệu dẫn điện tốt, dùng làm lõi dây điện là:', opts: ['Kim loại (đồng)', 'Nhựa', 'Gỗ'], a: 0, e: 'Đồng dẫn điện tốt.' },
        { q: 'Vỏ dây điện làm bằng nhựa vì nhựa:', opts: ['Cách điện', 'Dẫn điện', 'Dễ vỡ'], a: 0, e: 'Cách điện để an toàn.' },
        { q: 'Vật liệu nào trong suốt, dễ vỡ?', opts: ['Thuỷ tinh', 'Cao su', 'Gỗ'], a: 0, e: 'Thuỷ tinh.' }] },
    b13: { theory: `<p><b>Nguyên liệu</b> là vật liệu tự nhiên (hoặc nhân tạo) ban đầu dùng để sản xuất ra sản phẩm.</p>
      <div class="vd"><ul><li>Quặng sắt → gang, thép.</li><li>Đá vôi → vôi, xi măng.</li><li>Cát → thuỷ tinh.</li><li>Dầu mỏ → xăng, nhựa.</li><li>Gỗ, tre, nứa → giấy, đồ gỗ.</li></ul></div>
      <div class="tip"><p>Nguyên liệu khoáng sản có hạn, cần khai thác hợp lí và tái chế.</p></div>`,
      quiz: [{ q: 'Nguyên liệu để sản xuất xi măng là:', opts: ['Đá vôi', 'Quặng sắt', 'Cát'], a: 0, e: 'Đá vôi.' },
        { q: 'Nguyên liệu để sản xuất thép là:', opts: ['Quặng sắt', 'Gỗ', 'Đá vôi'], a: 0, e: 'Quặng sắt.' },
        { q: 'Thuỷ tinh được làm chủ yếu từ:', opts: ['Cát', 'Dầu mỏ', 'Đất sét'], a: 0, e: 'Cát (silica).' }] },
    b14: { theory: `<p><b>Nhiên liệu</b> là những chất cháy được, khi cháy toả nhiệt và phát sáng.</p>
      <div class="tw"><table class="t"><tr><th>Thể</th><th>Ví dụ</th></tr><tr><td>Rắn</td><td>Than, củi</td></tr><tr><td>Lỏng</td><td>Xăng, dầu hoả</td></tr><tr><td>Khí</td><td>Khí gas, khí thiên nhiên, khí biogas</td></tr></table></div>
      <div class="note"><p>Dùng nhiên liệu an toàn, hiệu quả: cung cấp đủ không khí cho sự cháy, điều chỉnh ngọn lửa phù hợp, tắt bếp khi không dùng. Tăng dùng năng lượng thay thế: Mặt Trời, gió…</p></div>`,
      quiz: [{ q: 'Khí gas là nhiên liệu ở thể:', opts: ['Khí', 'Lỏng', 'Rắn'], a: 0, keep: true, e: 'Thể khí.' },
        { q: 'Xăng là nhiên liệu ở thể:', opts: ['Lỏng', 'Rắn', 'Khí'], a: 0, keep: true, e: 'Thể lỏng.' },
        { q: 'Để nhiên liệu cháy hoàn toàn cần:', opts: ['Cung cấp đủ không khí (oxygen)', 'Đậy kín bếp', 'Đổ thêm nước'], a: 0, e: 'Cần đủ oxygen.' }] },
    b15: { theory: `<ul><li><b>Lương thực</b>: thức ăn chứa nhiều tinh bột như gạo, ngô, khoai, sắn, lúa mì.</li><li><b>Thực phẩm</b>: thức ăn cung cấp chất dinh dưỡng như thịt, cá, trứng, sữa, rau, quả.</li></ul>
      <div class="note"><p>Các nhóm chất dinh dưỡng: tinh bột (đường), chất đạm, chất béo, vitamin và chất khoáng. Cần ăn đa dạng, cân đối.</p></div><div class="warn"><p>Bảo quản thực phẩm đúng cách; không ăn thực phẩm ôi thiu, quá hạn.</p></div>`,
      quiz: [{ q: 'Đâu là lương thực?', opts: ['Gạo', 'Cá', 'Rau cải'], a: 0, e: 'Gạo giàu tinh bột.' },
        { q: 'Thịt, cá, trứng cung cấp nhiều:', opts: ['Chất đạm', 'Tinh bột', 'Chất xơ'], a: 0, e: 'Chất đạm.' },
        { q: 'Nên ăn thực phẩm đã quá hạn sử dụng nếu trông vẫn bình thường.', opts: TF, a: 1, keep: true, e: 'Không ăn đồ quá hạn.' }] },
    b20: { theory: `<p>Tế bào <b>lớn lên</b> đến một kích thước nhất định thì <b>phân chia</b>: từ 1 tế bào tạo ra 2 tế bào con.</p>
      <div class="note"><p class="big">Sau n lần phân chia: 1 tế bào → 2<sup>n</sup> tế bào</p></div>
      <p>Ý nghĩa: giúp cơ thể lớn lên, thay thế tế bào già, tế bào bị tổn thương.</p>`,
      quiz: [{ q: 'Một tế bào phân chia 3 lần liên tiếp tạo ra bao nhiêu tế bào?', a: ['8'], e: '2³ = 8.' },
        { q: 'Một tế bào phân chia 5 lần liên tiếp tạo ra bao nhiêu tế bào?', a: ['32'], e: '2⁵ = 32.' },
        { q: 'Sự phân chia tế bào giúp:', opts: ['Cơ thể lớn lên, thay thế tế bào già', 'Cơ thể nhỏ đi', 'Tế bào biến mất'], a: 0, e: 'Giúp sinh trưởng và thay thế.' }] },
    b21: { theory: `<p>Thực hành quan sát: <b>tế bào biểu bì vảy hành</b> (dùng kính hiển vi), <b>tế bào trứng cá</b> (nhìn được bằng mắt thường hoặc kính lúp), tế bào lá cây.</p>
      <div class="note"><ol><li>Bóc một lớp vảy hành thật mỏng, đặt lên lam kính có giọt nước.</li><li>Đậy lá kính (lamen), thấm bớt nước thừa.</li><li>Quan sát ở vật kính nhỏ trước, rồi đến vật kính lớn.</li></ol></div>`,
      quiz: [{ q: 'Tế bào trứng cá có thể quan sát bằng:', opts: ['Mắt thường hoặc kính lúp', 'Chỉ kính hiển vi điện tử'], a: 0, keep: true, e: 'Trứng cá là tế bào khá lớn.' },
        { q: 'Khi quan sát bằng kính hiển vi, nên dùng vật kính nào trước?', opts: ['Vật kính có độ phóng đại nhỏ', 'Vật kính có độ phóng đại lớn'], a: 0, keep: true, e: 'Nhỏ trước, lớn sau.' }] },
    b22: { theory: `<div class="tw"><table class="t"><tr><th>Cơ thể đơn bào</th><th>Cơ thể đa bào</th></tr><tr><td>Chỉ gồm <b>một</b> tế bào</td><td>Gồm <b>nhiều</b> tế bào</td></tr><tr><td>Vi khuẩn, trùng roi, trùng giày, nấm men, tảo lục đơn bào</td><td>Cây xanh, nấm rơm, con mèo, con người</td></tr></table></div>
      <p>Cơ thể sinh vật có các đặc trưng sống: cảm ứng, sinh trưởng, sinh sản, hô hấp, bài tiết, dinh dưỡng.</p>`,
      quiz: [{ q: 'Sinh vật nào là cơ thể đơn bào?', opts: ['Trùng giày', 'Cây lúa', 'Con cá'], a: 0, e: 'Trùng giày chỉ có một tế bào.' },
        { q: 'Cơ thể người là cơ thể:', opts: ['Đa bào', 'Đơn bào'], a: 0, keep: true, e: 'Gồm rất nhiều tế bào.' },
        { q: 'Nấm men là cơ thể:', opts: ['Đơn bào', 'Đa bào'], a: 0, keep: true, e: 'Nấm men đơn bào.' }] },
    b23: { theory: `<div class="note"><p class="big">Tế bào → Mô → Cơ quan → Hệ cơ quan → Cơ thể</p></div>
      <ul><li><b>Mô</b>: nhóm tế bào giống nhau cùng thực hiện một chức năng (mô cơ, mô thần kinh).</li><li><b>Cơ quan</b>: nhiều mô cùng hoạt động (tim, dạ dày, lá cây).</li><li><b>Hệ cơ quan</b>: nhiều cơ quan phối hợp (hệ tiêu hoá, hệ tuần hoàn; ở thực vật: hệ chồi và hệ rễ).</li></ul>`,
      quiz: [{ q: 'Thứ tự các cấp tổ chức từ nhỏ đến lớn là:', opts: ['Tế bào → mô → cơ quan → hệ cơ quan → cơ thể', 'Mô → tế bào → cơ quan → cơ thể', 'Cơ quan → mô → tế bào'], a: 0, e: 'Tế bào là cấp nhỏ nhất.' },
        { q: 'Tim là:', opts: ['Một cơ quan', 'Một mô', 'Một tế bào'], a: 0, e: 'Tim là cơ quan thuộc hệ tuần hoàn.' },
        { q: 'Ở thực vật có hai hệ cơ quan là:', opts: ['Hệ chồi và hệ rễ', 'Hệ tiêu hoá và hệ hô hấp'], a: 0, keep: true, e: 'Hệ chồi, hệ rễ.' }] },
    b24: { theory: `<p>Thực hành: lấy một giọt nước ao (hoặc nước ngâm rơm) quan sát bằng kính hiển vi để thấy <b>trùng giày, trùng roi</b> (cơ thể đơn bào). Quan sát cây rêu, con thuỷ tức (cơ thể đa bào).</p><div class="tip"><p>Trùng giày có hình dạng giống chiếc đế giày, di chuyển nhờ lông bơi.</p></div>`,
      quiz: [{ q: 'Trùng giày di chuyển nhờ:', opts: ['Lông bơi', 'Chân', 'Cánh'], a: 0, e: 'Lông bơi phủ quanh cơ thể.' },
        { q: 'Cây rêu là cơ thể:', opts: ['Đa bào', 'Đơn bào'], a: 0, keep: true, e: 'Gồm nhiều tế bào.' }] },
    b25: { theory: `<p>Sinh vật được chia thành <b>5 giới</b>: Khởi sinh, Nguyên sinh, Nấm, Thực vật, Động vật.</p>
      <div class="note"><p>Các bậc phân loại từ nhỏ đến lớn: <b>Loài → Chi (giống) → Họ → Bộ → Lớp → Ngành → Giới</b>.</p></div>
      <div class="vd"><p>Tên khoa học gồm tên chi và tên loài, viết nghiêng: người hiện đại là <i>Homo sapiens</i>.</p></div>`,
      quiz: [{ q: 'Sinh vật được chia thành mấy giới?', a: ['5'], e: '5 giới.' },
        { q: 'Bậc phân loại nhỏ nhất là:', opts: ['Loài', 'Giới', 'Ngành', 'Họ'], a: 0, e: 'Loài.' },
        { q: 'Vi khuẩn thuộc giới:', opts: ['Khởi sinh', 'Nấm', 'Thực vật'], a: 0, e: 'Giới Khởi sinh (nhân sơ).' }] },
    b26: { theory: `<p><b>Khoá lưỡng phân</b> là cách phân loại sinh vật dựa trên từng cặp đặc điểm <b>đối lập</b>, chia dần mỗi nhóm thành hai nhóm nhỏ hơn cho đến khi xác định được từng sinh vật.</p>
      <div class="vd"><p>Có cánh hay không có cánh? → Có cánh: chim, bướm. Có lông vũ hay không? → Có: chim; Không: bướm.</p></div>`,
      quiz: [{ q: 'Khoá lưỡng phân chia mỗi nhóm thành mấy nhóm nhỏ?', a: ['2'], e: '“Lưỡng” nghĩa là hai.' },
        { q: 'Các đặc điểm dùng trong khoá lưỡng phân phải:', opts: ['Đối lập nhau', 'Giống nhau'], a: 0, keep: true, e: 'Ví dụ: có cánh / không có cánh.' }] },
    b27: { theory: `<p><b>Vi khuẩn</b> là sinh vật đơn bào, nhân sơ, rất nhỏ (chỉ thấy bằng kính hiển vi). Hình dạng: hình cầu, hình que, hình xoắn, hình dấu phẩy.</p>
      <div class="tw"><table class="t"><tr><th>Có lợi</th><th>Gây hại</th></tr><tr><td>Làm sữa chua, muối dưa; phân huỷ xác sinh vật; cố định đạm cho cây</td><td>Gây bệnh: tả, lao, thương hàn, uốn ván; làm hỏng thức ăn</td></tr></table></div>
      <div class="tip"><p>Phòng bệnh: ăn chín uống sôi, rửa tay, giữ vệ sinh, tiêm phòng.</p></div>`,
      quiz: [{ q: 'Vi khuẩn có cấu tạo tế bào:', opts: ['Nhân sơ', 'Nhân thực'], a: 0, keep: true, e: 'Chưa có màng nhân.' },
        { q: 'Vi khuẩn nào có lợi?', opts: ['Vi khuẩn làm sữa chua', 'Vi khuẩn gây bệnh lao', 'Vi khuẩn gây bệnh tả'], a: 0, e: 'Vi khuẩn lactic.' },
        { q: 'Bệnh nào do vi khuẩn gây ra?', opts: ['Bệnh tả', 'Bệnh cúm', 'Bệnh sởi'], a: 0, e: 'Cúm và sởi do virus.' }] },
    b28: { theory: `<p>Thực hành <b>làm sữa chua</b>: sữa + một ít sữa chua làm men, ủ ấm khoảng 40 – 45 °C trong 6 – 8 giờ. <b>Vi khuẩn lactic</b> biến đổi đường trong sữa thành axit lactic làm sữa đông lại, có vị chua.</p>`,
      quiz: [{ q: 'Vi khuẩn giúp làm sữa chua là:', opts: ['Vi khuẩn lactic', 'Vi khuẩn lao', 'Virus cúm'], a: 0, e: 'Vi khuẩn lactic.' },
        { q: 'Nhiệt độ ủ sữa chua thích hợp khoảng:', opts: ['40 – 45 °C', '0 °C', '100 °C'], a: 0, e: 'Ấm vừa để vi khuẩn phát triển.' }] },
    b29: { theory: `<p><b>Virus</b> rất nhỏ, <b>chưa có cấu tạo tế bào</b>, gồm vỏ protein và vật chất di truyền. Virus chỉ sống và sinh sản được <b>bên trong tế bào</b> của sinh vật khác (kí sinh).</p>
      <div class="vd"><p>Bệnh do virus: cúm, sởi, quai bị, thuỷ đậu, COVID-19, sốt xuất huyết.</p></div>
      <div class="tip"><p>Phòng bệnh: tiêm vaccine, đeo khẩu trang, rửa tay, diệt muỗi.</p></div>`,
      quiz: [{ q: 'Virus có cấu tạo tế bào.', opts: TF, a: 1, keep: true, e: 'Virus chưa có cấu tạo tế bào.' },
        { q: 'Bệnh nào do virus gây ra?', opts: ['Sởi', 'Lao', 'Tả'], a: 0, e: 'Sởi do virus.' },
        { q: 'Cách phòng bệnh do virus hiệu quả:', opts: ['Tiêm vaccine', 'Uống nhiều nước ngọt', 'Thức khuya'], a: 0, e: 'Vaccine giúp cơ thể có miễn dịch.' }] },
    b30: { theory: `<p><b>Nguyên sinh vật</b> phần lớn là sinh vật đơn bào nhân thực: trùng roi, trùng giày, trùng biến hình, tảo silic…</p>
      <div class="note"><ul><li>Có lợi: tảo quang hợp tạo oxygen, làm thức ăn cho cá.</li><li>Gây bệnh: <b>sốt rét</b> (trùng sốt rét, lây qua muỗi Anopheles), <b>kiết lị</b> (trùng kiết lị, qua thức ăn, nước uống bẩn).</li></ul></div>`,
      quiz: [{ q: 'Bệnh sốt rét lây truyền qua:', opts: ['Muỗi Anopheles', 'Ruồi', 'Không khí'], a: 0, e: 'Muỗi đốt truyền trùng sốt rét.' },
        { q: 'Nguyên sinh vật có tế bào:', opts: ['Nhân thực', 'Nhân sơ'], a: 0, keep: true, e: 'Nhân thực.' },
        { q: 'Phòng bệnh kiết lị bằng cách:', opts: ['Ăn chín uống sôi, rửa tay sạch', 'Ngủ màn'], a: 0, keep: true, e: 'Trùng kiết lị qua đường tiêu hoá.' }] },
    b31: { theory: `<p>Thực hành quan sát nguyên sinh vật trong giọt nước ao, hồ bằng kính hiển vi: nhận ra trùng roi (có roi bơi, màu xanh lục), trùng giày (hình đế giày).</p>`,
      quiz: [{ q: 'Trùng roi xanh có màu xanh lục vì có:', opts: ['Hạt diệp lục', 'Máu xanh', 'Lông xanh'], a: 0, e: 'Có diệp lục, quang hợp được.' },
        { q: 'Để quan sát nguyên sinh vật cần dùng:', opts: ['Kính hiển vi', 'Mắt thường', 'Kính râm'], a: 0, e: 'Chúng rất nhỏ.' }] },
    b32: { theory: `<p><b>Nấm</b> là sinh vật nhân thực, sống dị dưỡng (không tự tạo chất hữu cơ). Có nấm đơn bào (nấm men) và nấm đa bào (nấm rơm, nấm hương).</p>
      <div class="tw"><table class="t"><tr><th>Có lợi</th><th>Có hại</th></tr><tr><td>Làm thức ăn (nấm rơm, mộc nhĩ); nấm men làm bánh mì; làm thuốc</td><td>Nấm độc; gây bệnh hắc lào, lang ben; làm hỏng thức ăn (mốc)</td></tr></table></div>
      <div class="warn"><p>Không hái, không ăn nấm lạ mọc ngoài tự nhiên vì có thể là nấm độc.</p></div>`,
      quiz: [{ q: 'Nấm men dùng để:', opts: ['Làm bánh mì', 'Làm sữa chua', 'Chữa bệnh sốt rét'], a: 0, e: 'Nấm men làm bột nở.' },
        { q: 'Bệnh hắc lào do sinh vật nào gây ra?', opts: ['Nấm', 'Vi khuẩn', 'Virus'], a: 0, e: 'Nấm.' },
        { q: 'Nấm có tự tạo được chất hữu cơ nhờ quang hợp không?', opts: ['Không', 'Có'], a: 0, keep: true, e: 'Nấm không có diệp lục.' }] },
    b33: { theory: `<p>Thực hành quan sát nấm mốc (trên bánh mì, cơm để lâu) bằng kính lúp, và nấm mũ (nấm rơm): mũ nấm, cuống nấm, phiến nấm.</p>`,
      quiz: [{ q: 'Bộ phận của nấm mũ gồm:', opts: ['Mũ nấm, cuống nấm', 'Rễ, thân, lá', 'Hoa, quả'], a: 0, e: 'Mũ và cuống.' },
        { q: 'Nấm mốc thường mọc trên:', opts: ['Bánh mì để lâu', 'Hòn đá khô', 'Kính cửa sổ'], a: 0, e: 'Nơi ẩm, có chất hữu cơ.' }] },
    b34: { theory: `<div class="tw"><table class="t"><tr><th>Nhóm</th><th>Đặc điểm</th><th>Ví dụ</th></tr><tr><td>Rêu</td><td>Chưa có mạch dẫn, chưa có rễ thật; sinh sản bằng bào tử</td><td>Cây rêu tường</td></tr><tr><td>Dương xỉ</td><td>Có mạch dẫn, có rễ thật; sinh sản bằng bào tử</td><td>Cây dương xỉ, rau bợ</td></tr><tr><td>Hạt trần</td><td>Có hạt nằm lộ trên lá noãn; chưa có hoa, quả</td><td>Cây thông, vạn tuế</td></tr><tr><td>Hạt kín</td><td>Có hoa, quả; hạt nằm trong quả</td><td>Cây lúa, cam, hoa hồng</td></tr></table></div>
      <p>Vai trò: tạo oxygen, điều hoà khí hậu, chống xói mòn, cung cấp lương thực, gỗ, thuốc.</p>`,
      quiz: [{ q: 'Cây thông thuộc nhóm:', opts: ['Hạt trần', 'Hạt kín', 'Rêu'], a: 0, e: 'Hạt nằm lộ trên lá noãn.' },
        { q: 'Nhóm thực vật có hoa và quả là:', opts: ['Hạt kín', 'Dương xỉ', 'Hạt trần'], a: 0, e: 'Hạt kín.' },
        { q: 'Rêu sinh sản bằng:', opts: ['Bào tử', 'Hạt', 'Hoa'], a: 0, e: 'Bào tử.' }] },
    b35: { theory: `<p>Thực hành: quan sát mẫu cây rêu, cây dương xỉ, cành thông, cây có hoa; ghi lại đặc điểm (có mạch dẫn không, có hạt không, có hoa không) rồi xếp vào nhóm.</p>`,
      quiz: [{ q: 'Mặt dưới lá dương xỉ thường có các đốm nhỏ màu nâu là:', opts: ['Túi bào tử', 'Hạt', 'Sâu bệnh'], a: 0, e: 'Túi bào tử.' },
        { q: 'Cây bưởi thuộc nhóm:', opts: ['Hạt kín', 'Hạt trần'], a: 0, keep: true, e: 'Có hoa, quả.' }] },
    b36: { theory: `<div class="tw"><table class="t"><tr><th>Không xương sống</th><th>Có xương sống</th></tr><tr><td>Ruột khoang (sứa, san hô), giun (giun đất), thân mềm (ốc, mực), chân khớp (tôm, nhện, côn trùng)</td><td>Cá, lưỡng cư (ếch), bò sát (rắn, rùa), chim, thú (động vật có vú)</td></tr></table></div>
      <p>Động vật có lợi (thực phẩm, sức kéo) và có hại (truyền bệnh: muỗi, ruồi, chuột; phá hoại mùa màng).</p>`,
      quiz: [{ q: 'Con ếch thuộc lớp:', opts: ['Lưỡng cư', 'Bò sát', 'Cá'], a: 0, e: 'Lưỡng cư.' },
        { q: 'Con tôm thuộc nhóm:', opts: ['Chân khớp', 'Thân mềm', 'Có xương sống'], a: 0, e: 'Chân khớp.' },
        { q: 'Cá voi thuộc lớp:', opts: ['Thú', 'Cá'], a: 0, keep: true, e: 'Cá voi đẻ con, nuôi con bằng sữa.' }] },
    b37: { theory: `<p>Thực hành ngoài thiên nhiên (vườn trường, công viên): quan sát, chụp ảnh, ghi chép động vật gặp được, rồi xếp vào các nhóm. Không bắt, không làm hại động vật.</p>`,
      quiz: [{ q: 'Con bướm thuộc nhóm:', opts: ['Chân khớp (côn trùng)', 'Chim', 'Thân mềm'], a: 0, e: 'Côn trùng.' },
        { q: 'Con ốc sên thuộc nhóm:', opts: ['Thân mềm', 'Chân khớp'], a: 0, keep: true, e: 'Thân mềm.' }] },
    b38: { theory: `<p><b>Đa dạng sinh học</b> là sự phong phú về số lượng loài và môi trường sống. Rừng mưa nhiệt đới có đa dạng sinh học cao nhất; hoang mạc, vùng cực thấp hơn.</p>
      <div class="note"><p>Vai trò: cung cấp lương thực, thuốc, giữ cân bằng tự nhiên. Bảo vệ: trồng rừng, không săn bắt động vật hoang dã, lập vườn quốc gia, khu bảo tồn.</p></div>`,
      quiz: [{ q: 'Nơi có đa dạng sinh học cao nhất là:', opts: ['Rừng mưa nhiệt đới', 'Hoang mạc', 'Vùng cực'], a: 0, e: 'Rừng mưa nhiệt đới.' },
        { q: 'Việc làm bảo vệ đa dạng sinh học:', opts: ['Không mua bán động vật hoang dã', 'Chặt phá rừng', 'Săn bắt chim'], a: 0, e: 'Bảo vệ động vật hoang dã.' }] },
    b39: { theory: `<p>Hoạt động tìm hiểu sinh vật ngoài thiên nhiên: chuẩn bị dụng cụ (kính lúp, sổ, máy ảnh), quan sát, ghi chép, dùng khoá lưỡng phân để nhận biết, báo cáo kết quả. Tuân thủ an toàn và bảo vệ môi trường.</p>`,
      quiz: [{ q: 'Khi tìm hiểu sinh vật ngoài thiên nhiên, em nên:', opts: ['Quan sát, chụp ảnh, ghi chép', 'Bẻ cành, bắt con vật về nhà'], a: 0, keep: true, e: 'Không làm hại sinh vật.' }] },
    b42: { theory: `<p>Khi treo vật vào lò xo, lò xo bị dãn ra. <b>Độ dãn</b> của lò xo:</p><div class="note"><p class="big">Δl = l − l₀</p><p>l₀: chiều dài ban đầu; l: chiều dài khi bị dãn. Trong giới hạn đàn hồi, độ dãn tỉ lệ với khối lượng vật treo.</p></div>
      <div class="vd"><p>Lò xo dài 10 cm, treo vật dài thành 12 cm: độ dãn 2 cm. Treo vật nặng gấp đôi: độ dãn 4 cm.</p></div>`,
      quiz: [{ q: 'Lò xo dài 15 cm, treo vật dài thành 18 cm. Độ dãn là bao nhiêu cm?', a: ['3'], e: '18 − 15 = 3.' },
        { q: 'Treo vật 100 g thì lò xo dãn 2 cm. Treo vật 300 g thì dãn bao nhiêu cm?', a: ['6'], e: 'Gấp 3 lần khối lượng → dãn 6 cm.' },
        { q: 'Lò xo bị kéo quá mạnh có thể:', opts: ['Mất tính đàn hồi', 'Ngắn lại'], a: 0, keep: true, e: 'Vượt giới hạn đàn hồi.' }] },
    b44: { theory: `<ul><li><b>Ma sát trượt</b>: vật trượt trên bề mặt vật khác (phanh xe).</li><li><b>Ma sát lăn</b>: vật lăn trên bề mặt (bánh xe lăn) – nhỏ hơn ma sát trượt.</li><li><b>Ma sát nghỉ</b>: giữ vật không trượt (người đi bộ không bị trượt).</li></ul>
      <div class="note"><p>Ma sát có lợi (giúp đi lại, phanh xe) và có hại (làm mòn, cản trở chuyển động). Tăng ma sát: làm nhám bề mặt (rắc cát đường trơn). Giảm ma sát: tra dầu mỡ, dùng ổ bi.</p></div>`,
      quiz: [{ q: 'Tra dầu mỡ vào xích xe đạp để:', opts: ['Giảm ma sát', 'Tăng ma sát'], a: 0, keep: true, e: 'Giảm ma sát có hại.' },
        { q: 'Lực ma sát giữ cho người đi bộ không trượt chân là:', opts: ['Ma sát nghỉ', 'Ma sát lăn', 'Ma sát trượt'], a: 0, e: 'Ma sát nghỉ.' },
        { q: 'Lốp xe có rãnh để:', opts: ['Tăng ma sát, chống trượt', 'Giảm ma sát'], a: 0, keep: true, e: 'Bám đường tốt hơn.' }] },
    b45: { theory: `<p>Khi vật chuyển động trong nước (hoặc không khí), nước tác dụng lên vật một lực cản chuyển động gọi là <b>lực cản của nước</b>. Vật có diện tích mặt cản lớn thì lực cản lớn.</p>
      <div class="vd"><p>Cá, tàu thuyền có hình thoi, đầu nhọn để giảm lực cản. Đi bộ dưới nước khó hơn trên cạn.</p></div>`,
      quiz: [{ q: 'Thân cá có hình thoi để:', opts: ['Giảm lực cản của nước', 'Tăng lực cản'], a: 0, keep: true, e: 'Bơi nhanh hơn.' },
        { q: 'Đi bộ dưới nước khó hơn trên cạn vì:', opts: ['Lực cản của nước lớn hơn của không khí', 'Nước nhẹ hơn không khí'], a: 0, keep: true, e: 'Nước cản mạnh hơn.' }] },
    b46: { theory: `<p><b>Năng lượng</b> giúp vật thực hiện công việc, làm vật chuyển động, nóng lên, phát sáng… Đơn vị năng lượng là <b>jun (J)</b>; 1 kJ = 1 000 J.</p>
      <div class="note"><p>Năng lượng có thể truyền từ vật này sang vật khác: Mặt Trời truyền năng lượng (ánh sáng, nhiệt) đến Trái Đất; bếp truyền nhiệt làm nóng nồi nước.</p></div>`,
      quiz: [{ q: 'Đơn vị đo năng lượng là:', opts: ['Jun (J)', 'Niutơn (N)', 'Mét (m)'], a: 0, e: 'Jun.' },
        { q: '2 kJ = ? J', a: ['2000', '2 000'], e: '1 kJ = 1 000 J.' },
        { q: 'Nguồn năng lượng lớn nhất cho Trái Đất là:', opts: ['Mặt Trời', 'Mặt Trăng', 'Gió'], a: 0, e: 'Mặt Trời.' }] },
    b47: { theory: `<div class="tw"><table class="t"><tr><th>Dạng năng lượng</th><th>Ví dụ</th></tr><tr><td>Động năng</td><td>Xe đang chạy, nước chảy</td></tr><tr><td>Thế năng hấp dẫn</td><td>Quả táo trên cây, nước trên đập cao</td></tr><tr><td>Thế năng đàn hồi</td><td>Lò xo bị nén, dây cung bị kéo căng</td></tr><tr><td>Nhiệt năng</td><td>Nước nóng, bếp lửa</td></tr><tr><td>Quang năng</td><td>Ánh sáng Mặt Trời, đèn</td></tr><tr><td>Điện năng</td><td>Dòng điện</td></tr><tr><td>Hoá năng</td><td>Thức ăn, xăng, pin</td></tr><tr><td>Năng lượng âm</td><td>Tiếng trống, tiếng loa</td></tr></table></div>`,
      quiz: [{ q: 'Quả bóng đang lăn có:', opts: ['Động năng', 'Thế năng đàn hồi', 'Điện năng'], a: 0, e: 'Vật chuyển động có động năng.' },
        { q: 'Dây cung bị kéo căng có:', opts: ['Thế năng đàn hồi', 'Quang năng'], a: 0, keep: true, e: 'Thế năng đàn hồi.' },
        { q: 'Thức ăn dự trữ năng lượng dưới dạng:', opts: ['Hoá năng', 'Động năng', 'Âm năng'], a: 0, e: 'Hoá năng.' }] },
    b48: { theory: `<p>Năng lượng có thể <b>chuyển hoá</b> từ dạng này sang dạng khác.</p><div class="vd"><ul><li>Bóng đèn: điện năng → quang năng + nhiệt năng.</li><li>Quạt điện: điện năng → động năng (+ nhiệt, âm).</li><li>Pin mặt trời: quang năng → điện năng.</li></ul></div>
      <div class="note"><p><b>Định luật bảo toàn năng lượng</b>: năng lượng không tự sinh ra, không tự mất đi, chỉ chuyển từ dạng này sang dạng khác hoặc truyền từ vật này sang vật khác.</p></div>`,
      quiz: [{ q: 'Quạt điện chuyển hoá điện năng chủ yếu thành:', opts: ['Động năng', 'Quang năng', 'Hoá năng'], a: 0, e: 'Cánh quạt quay.' },
        { q: 'Pin mặt trời chuyển hoá:', opts: ['Quang năng → điện năng', 'Điện năng → quang năng'], a: 0, keep: true, e: 'Ánh sáng → điện.' },
        { q: 'Năng lượng có thể tự sinh ra.', opts: TF, a: 1, keep: true, e: 'Định luật bảo toàn năng lượng.' }] },
    b49: { theory: `<p>Khi chuyển hoá, chỉ một phần năng lượng là <b>có ích</b>, phần còn lại là <b>năng lượng hao phí</b> (thường ở dạng nhiệt).</p><div class="note"><p class="big">Năng lượng toàn phần = có ích + hao phí</p></div><div class="vd"><p>Đèn sợi đốt: phần lớn điện năng biến thành nhiệt (hao phí), chỉ một phần nhỏ thành ánh sáng. Đèn LED hao phí ít hơn.</p></div>`,
      quiz: [{ q: 'Đèn nhận 100 J điện năng, phát ra 20 J quang năng. Năng lượng hao phí là bao nhiêu J?', a: ['80'], e: '100 − 20 = 80.' },
        { q: 'Năng lượng hao phí ở bóng đèn sợi đốt chủ yếu ở dạng:', opts: ['Nhiệt', 'Âm thanh', 'Hoá năng'], a: 0, e: 'Bóng nóng lên.' },
        { q: 'Loại đèn nào ít hao phí năng lượng hơn?', opts: ['Đèn LED', 'Đèn sợi đốt'], a: 0, keep: true, e: 'Đèn LED.' }] },
    b50: { theory: `<div class="tw"><table class="t"><tr><th>Năng lượng tái tạo</th><th>Không tái tạo</th></tr><tr><td>Mặt Trời, gió, nước (thuỷ điện), sinh khối, địa nhiệt, thuỷ triều</td><td>Than đá, dầu mỏ, khí tự nhiên</td></tr><tr><td>Có sẵn, có thể bổ sung liên tục, ít gây ô nhiễm</td><td>Hình thành rất lâu, sẽ cạn kiệt, gây ô nhiễm khi đốt</td></tr></table></div>`,
      quiz: [{ q: 'Năng lượng nào là năng lượng tái tạo?', opts: ['Năng lượng gió', 'Than đá', 'Dầu mỏ'], a: 0, e: 'Gió.' },
        { q: 'Dầu mỏ là nguồn năng lượng:', opts: ['Không tái tạo', 'Tái tạo'], a: 0, keep: true, e: 'Sẽ cạn kiệt.' },
        { q: 'Nhà máy thuỷ điện dùng năng lượng của:', opts: ['Nước', 'Than', 'Gió'], a: 0, e: 'Dòng nước.' }] },
    b51: { theory: `<div class="note"><ul><li>Tắt điện, quạt, ti vi khi không dùng; rút phích sạc khi đầy.</li><li>Dùng đèn LED, thiết bị có nhãn tiết kiệm năng lượng.</li><li>Tận dụng ánh sáng, gió tự nhiên.</li><li>Đi bộ, đi xe đạp, dùng phương tiện công cộng.</li></ul></div><p>Tiết kiệm năng lượng giúp tiết kiệm tiền, bảo vệ môi trường, giữ tài nguyên cho tương lai.</p>`,
      quiz: [{ q: 'Việc làm tiết kiệm năng lượng:', opts: ['Tắt đèn khi ra khỏi phòng', 'Mở tủ lạnh lâu', 'Bật ti vi khi ngủ'], a: 0, e: 'Tắt đèn khi không dùng.' },
        { q: 'Đi học bằng xe đạp thay xe máy giúp:', opts: ['Tiết kiệm năng lượng và giảm ô nhiễm', 'Tốn nhiều xăng hơn'], a: 0, keep: true, e: 'Không dùng xăng.' }] },
    b52: { theory: `<p>Hằng ngày ta thấy Mặt Trời <b>mọc ở phía Đông</b>, lặn ở phía Tây. Thực ra đó là <b>chuyển động nhìn thấy</b>, do Trái Đất tự quay quanh trục từ Tây sang Đông.</p>
      <div class="note"><p><b>Thiên thể</b> là các vật thể tự nhiên trong vũ trụ: Mặt Trời, Mặt Trăng, các ngôi sao, hành tinh, sao chổi, thiên thạch.</p></div><p>Sao tự phát sáng (Mặt Trời là một ngôi sao); hành tinh và Mặt Trăng không tự phát sáng, chỉ phản chiếu ánh sáng Mặt Trời.</p>`,
      quiz: [{ q: 'Ta thấy Mặt Trời mọc ở phía Đông vì:', opts: ['Trái Đất tự quay từ Tây sang Đông', 'Mặt Trời quay quanh Trái Đất'], a: 0, keep: true, e: 'Chuyển động nhìn thấy.' },
        { q: 'Thiên thể nào tự phát sáng?', opts: ['Mặt Trời', 'Mặt Trăng', 'Trái Đất'], a: 0, e: 'Mặt Trời là một ngôi sao.' }] },
    b53: { theory: `<p><b>Mặt Trăng</b> là vệ tinh tự nhiên của Trái Đất, không tự phát sáng mà phản chiếu ánh sáng Mặt Trời.</p>
      <div class="note"><p>Các pha Mặt Trăng (khoảng 29,5 ngày): Trăng mới (không trăng) → Trăng lưỡi liềm → Trăng bán nguyệt (thượng huyền) → <b>Trăng tròn</b> (khoảng giữa tháng âm lịch) → Trăng bán nguyệt (hạ huyền) → lưỡi liềm → trăng mới.</p></div>`,
      quiz: [{ q: 'Trăng tròn thường vào khoảng ngày nào của tháng âm lịch?', opts: ['Ngày 15', 'Ngày 1', 'Ngày 30'], a: 0, e: 'Rằm (ngày 14 – 16).' },
        { q: 'Mặt Trăng sáng vì:', opts: ['Phản chiếu ánh sáng Mặt Trời', 'Tự phát sáng'], a: 0, keep: true, e: 'Không tự phát sáng.' },
        { q: 'Một chu kì pha Mặt Trăng khoảng:', opts: ['29,5 ngày', '7 ngày', '365 ngày'], a: 0, e: 'Khoảng một tháng âm lịch.' }] },
    b54: { theory: `<p><b>Hệ Mặt Trời</b> gồm Mặt Trời ở trung tâm và <b>8 hành tinh</b> quay quanh, theo thứ tự từ gần đến xa:</p>
      <div class="note"><p class="big">Thuỷ – Kim – Trái Đất – Hoả – Mộc – Thổ – Thiên Vương – Hải Vương</p></div><p>Sao Mộc lớn nhất; sao Thuỷ nhỏ nhất và gần Mặt Trời nhất. Trái Đất là hành tinh thứ 3.</p>`,
      quiz: [{ q: 'Hệ Mặt Trời có mấy hành tinh?', a: ['8'], e: '8 hành tinh.' },
        { q: 'Hành tinh lớn nhất là:', opts: ['Sao Mộc', 'Sao Thổ', 'Trái Đất'], a: 0, e: 'Sao Mộc.' },
        { q: 'Hành tinh gần Mặt Trời nhất là:', opts: ['Sao Thuỷ', 'Sao Kim', 'Sao Hoả'], a: 0, e: 'Sao Thuỷ.' }] },
    b55: { theory: `<p><b>Ngân Hà</b> là thiên hà chứa hệ Mặt Trời của chúng ta, gồm hàng trăm tỉ ngôi sao, có dạng xoắn ốc. Đêm trời quang, ở nơi ít đèn, ta thấy Ngân Hà như một dải sáng mờ vắt ngang bầu trời.</p>`,
      quiz: [{ q: 'Hệ Mặt Trời nằm trong thiên hà:', opts: ['Ngân Hà', 'Tiên Nữ'], a: 0, keep: true, e: 'Ngân Hà.' },
        { q: 'Ngân Hà có dạng:', opts: ['Xoắn ốc', 'Hình vuông', 'Hình tam giác'], a: 0, e: 'Thiên hà xoắn ốc.' }] },
  };
})();
