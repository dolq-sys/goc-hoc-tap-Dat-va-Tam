/* =====================================================================
   NỘI DUNG BỔ SUNG — NGỮ VĂN 6 (Kết nối tri thức), 10 bài học
   Không chép văn bản trong sách (có bản quyền): chỉ nêu tên văn bản, tác giả,
   nội dung chính tóm tắt bằng lời người soạn, đặc điểm thể loại và kĩ năng viết.
   ===================================================================== */
window.ND_LOP6 = window.ND_LOP6 || {};
window.ND_LOP6.nguvan = (function () {
  const TF = ['Đúng', 'Sai'];
  const vb = list => `<h3>Văn bản tiêu biểu (đọc trong SGK)</h3><div class="tw"><table class="t"><tr><th>Văn bản</th><th>Tác giả</th><th>Nội dung chính</th></tr>${list.map(([t, a, n]) => `<tr><td><b>${t}</b></td><td>${a}</td><td>${n}</td></tr>`).join('')}</table></div>`;
  return {
    bai1: { theory: `<p><b>Chủ đề:</b> tình bạn, sự trưởng thành qua những trải nghiệm đầu đời.</p>
      <div class="note"><p><b>Thể loại: truyện đồng thoại.</b> Nhân vật là loài vật được nhân hoá, vừa mang đặc điểm loài vật vừa có suy nghĩ, tình cảm như con người. Thường kể theo <b>ngôi thứ nhất</b> (xưng “tôi”) hoặc ngôi thứ ba.</p></div>
      ${vb([['Bài học đường đời đầu tiên (trích <i>Dế Mèn phiêu lưu kí</i>)', 'Tô Hoài', 'Dế Mèn kiêu căng trêu chị Cốc, gây ra cái chết của Dế Choắt và rút ra bài học về thói hống hách.'], ['Nếu cậu muốn có một người bạn (trích <i>Hoàng tử bé</i>)', 'Ăng-toan đơ Xanh-tơ Ê-xu-pe-ri', 'Cáo dạy hoàng tử bé hiểu ý nghĩa của việc “cảm hoá” và gắn bó trong tình bạn.'], ['Bắt nạt', 'Nguyễn Thế Hoàng Linh', 'Bài thơ khuyên không nên bắt nạt người khác.']])}
      <div class="tip"><p>Tiếng Việt: <b>từ đơn, từ phức</b> (từ ghép, từ láy) — xem bài “Từ đơn và từ phức”. Viết: <b>kể lại một trải nghiệm của bản thân</b> (ngôi thứ nhất, theo trình tự thời gian, có cảm xúc, suy nghĩ).</p></div>`,
      quiz: [{ q: 'Tác giả của “Dế Mèn phiêu lưu kí” là:', opts: ['Tô Hoài', 'Nguyễn Nhật Ánh', 'Thạch Lam'], a: 0, e: 'Nhà văn Tô Hoài.' },
        { q: 'Vì sao Dế Choắt chết?', opts: ['Vì trò trêu chị Cốc của Dế Mèn', 'Vì bị ốm', 'Vì lũ lụt'], a: 0, e: 'Dế Mèn trêu chị Cốc, chị Cốc trút giận lên Dế Choắt.' },
        { q: 'Nhân vật trong truyện đồng thoại thường là:', opts: ['Loài vật được nhân hoá', 'Các vị thần'], a: 0, keep: true, e: 'Đặc điểm của đồng thoại.' },
        { q: 'Bài học Dế Mèn rút ra là gì?', opts: ['Không được kiêu căng, hống hách, hành động thiếu suy nghĩ', 'Phải luôn trêu chọc người khác'], a: 0, keep: true, e: 'Bài học đường đời đầu tiên.' }] },
    bai2: { theory: `<p><b>Chủ đề:</b> tình yêu thương trong gia đình, đặc biệt là tình mẹ con, tình anh em.</p>
      <div class="note"><p><b>Thể loại: thơ có yếu tố tự sự, miêu tả.</b> Bài thơ vừa kể một câu chuyện, vừa miêu tả cảnh vật, con người, qua đó bộc lộ cảm xúc. Cần chú ý: số tiếng mỗi dòng, vần, nhịp, hình ảnh và biện pháp tu từ.</p></div>
      ${vb([['Chuyện cổ tích về loài người', 'Xuân Quỳnh', 'Giải thích một cách thú vị về sự ra đời của thế giới, nhấn mạnh mọi thứ sinh ra là để dành cho trẻ em.'], ['Mây và sóng', 'R. Ta-go (Ấn Độ)', 'Em bé từ chối lời rủ rê của mây và sóng vì muốn ở bên mẹ — ca ngợi tình mẫu tử.'], ['Bức tranh của em gái tôi', 'Tạ Duy Anh', 'Người anh ghen tị với tài vẽ của em gái, rồi xúc động, ân hận khi thấy em vẽ mình đẹp đẽ.']])}
      <div class="tip"><p>Tiếng Việt: các biện pháp tu từ <b>so sánh, ẩn dụ</b>. Viết: <b>đoạn văn ghi lại cảm xúc</b> về một bài thơ có yếu tố tự sự, miêu tả.</p></div>`,
      quiz: [{ q: 'Bài thơ “Mây và sóng” ca ngợi:', opts: ['Tình mẫu tử', 'Tình bạn', 'Quê hương'], a: 0, e: 'Em bé chọn ở bên mẹ.' },
        { q: 'Tác giả của “Mây và sóng” là:', opts: ['Ta-go', 'Xuân Quỳnh', 'Tô Hoài'], a: 0, e: 'Nhà thơ Ấn Độ R. Ta-go.' },
        { q: 'Trong “Bức tranh của em gái tôi”, người anh cuối cùng cảm thấy:', opts: ['Xúc động, ân hận', 'Tức giận'], a: 0, keep: true, e: 'Nhận ra lòng nhân hậu của em gái.' },
        { q: 'Thơ có yếu tố tự sự là thơ:', opts: ['Có kể lại một câu chuyện', 'Không có cảm xúc'], a: 0, keep: true, e: 'Có yếu tố kể chuyện.' }] },
    bai3: { theory: `<p><b>Chủ đề:</b> lòng nhân ái, biết yêu thương và chia sẻ với người có hoàn cảnh khó khăn.</p>
      <div class="note"><p><b>Thể loại: truyện.</b> Các yếu tố: <b>cốt truyện</b> (chuỗi sự việc), <b>nhân vật</b> (ngoại hình, hành động, lời nói, suy nghĩ), <b>người kể chuyện</b> (ngôi thứ nhất hoặc thứ ba), <b>lời người kể</b> và <b>lời nhân vật</b>.</p></div>
      ${vb([['Cô bé bán diêm', 'H. C. An-đéc-xen (Đan Mạch)', 'Cô bé nghèo bán diêm trong đêm giao thừa giá rét, quẹt diêm sưởi ấm và mơ thấy những điều tốt đẹp — lời cảm thông với trẻ em bất hạnh.'], ['Gió lạnh đầu mùa', 'Thạch Lam', 'Hai chị em Sơn đem áo ấm cho bạn nghèo Hiên — tấm lòng nhân hậu của trẻ thơ.']])}
      <div class="tip"><p>Viết: <b>kể lại một trải nghiệm</b> hoặc chia sẻ một việc làm tốt, thể hiện tình yêu thương.</p></div>`,
      quiz: [{ q: 'Tác giả “Cô bé bán diêm” là:', opts: ['An-đéc-xen', 'Ta-go', 'Thạch Lam'], a: 0, e: 'An-đéc-xen (Đan Mạch).' },
        { q: '“Gió lạnh đầu mùa” ca ngợi:', opts: ['Lòng nhân hậu, biết chia sẻ của trẻ em', 'Cảnh mùa hè'], a: 0, keep: true, e: 'Sơn đem áo cho Hiên.' },
        { q: 'Chuỗi các sự việc trong truyện gọi là:', opts: ['Cốt truyện', 'Vần thơ', 'Nhịp'], a: 0, e: 'Cốt truyện.' },
        { q: 'Cô bé bán diêm quẹt diêm để:', opts: ['Sưởi ấm và nhìn thấy những điều mơ ước', 'Đốt nhà'], a: 0, keep: true, e: 'Những ước mơ hiện ra qua ánh lửa.' }] },
    bai4: { theory: `<p><b>Chủ đề:</b> tình yêu quê hương, đất nước.</p>
      <div class="note"><p><b>Thể loại: thơ lục bát</b> và <b>ca dao</b>. Lục bát: cặp câu 6 – 8 tiếng; tiếng thứ 6 câu 6 vần với tiếng thứ 6 câu 8; nhịp chẵn. Xem thêm bài “Thơ lục bát”.</p></div>
      ${vb([['Chùm ca dao về quê hương đất nước', 'Dân gian', 'Ca ngợi cảnh đẹp, sản vật, con người các vùng miền.'], ['Chuyện cổ nước mình', 'Lâm Thị Mỹ Dạ', 'Tình yêu với truyện cổ — kho tàng trí tuệ, đạo lí của cha ông.'], ['Cây tre Việt Nam', 'Thép Mới', 'Cây tre gắn bó với con người Việt Nam, tượng trưng cho phẩm chất dân tộc.']])}
      <div class="tip"><p>Viết: tập làm <b>thơ lục bát</b>; đoạn văn nêu cảm xúc về một bài ca dao.</p></div>`,
      quiz: [{ q: 'Thơ lục bát gồm các cặp câu:', opts: ['6 tiếng – 8 tiếng', '7 tiếng – 7 tiếng'], a: 0, keep: true, e: 'Lục (6) – bát (8).' },
        { q: 'Tác giả “Cây tre Việt Nam” là:', opts: ['Thép Mới', 'Tô Hoài', 'Nguyễn Tuân'], a: 0, e: 'Thép Mới.' },
        { q: 'Ca dao là sáng tác của:', opts: ['Nhân dân (dân gian)', 'Một nhà thơ nổi tiếng'], a: 0, keep: true, e: 'Văn học dân gian.' },
        { q: 'Cây tre trong bài tượng trưng cho:', opts: ['Phẩm chất con người Việt Nam', 'Sự yếu đuối'], a: 0, keep: true, e: 'Bền bỉ, kiên cường, gắn bó.' }] },
    bai5: { theory: `<p><b>Chủ đề:</b> vẻ đẹp của các vùng đất, cảnh quan trên đất nước.</p>
      <div class="note"><p><b>Thể loại: du kí</b> (ghi chép về chuyến đi). Người viết kể lại những gì mình trực tiếp thấy, nghe, trải nghiệm ở một vùng đất, kết hợp miêu tả và bày tỏ cảm xúc. Thường dùng <b>ngôi thứ nhất</b>.</p></div>
      ${vb([['Cô Tô (trích)', 'Nguyễn Tuân', 'Vẻ đẹp trong trẻo của biển đảo Cô Tô sau cơn bão và cảnh mặt trời mọc trên biển.'], ['Hang Én', 'Hà My', 'Hành trình khám phá Hang Én (Quảng Bình) – một hang động kì vĩ.']])}
      <div class="tip"><p>Viết: <b>bài văn tả cảnh</b> hoặc kể về một chuyến đi, một nơi em từng đến.</p></div>`,
      quiz: [{ q: 'Du kí là thể loại:', opts: ['Ghi chép về những chuyến đi', 'Truyện cổ tích', 'Thơ lục bát'], a: 0, e: 'Ghi chép chuyến đi.' },
        { q: 'Tác giả của bài “Cô Tô” là:', opts: ['Nguyễn Tuân', 'Thạch Lam', 'Tô Hoài'], a: 0, e: 'Nguyễn Tuân.' },
        { q: 'Hang Én nằm ở tỉnh:', opts: ['Quảng Bình', 'Quảng Ninh', 'Lào Cai'], a: 0, e: 'Quảng Bình.' },
        { q: 'Du kí thường được viết theo ngôi:', opts: ['Thứ nhất', 'Thứ ba'], a: 0, keep: true, e: 'Người viết trực tiếp trải nghiệm.' }] },
    bai6: { theory: `<p><b>Chủ đề:</b> những người anh hùng trong truyền thuyết, tinh thần yêu nước.</p>
      <div class="note"><p><b>Thể loại: truyền thuyết</b> — truyện dân gian kể về nhân vật, sự kiện liên quan đến lịch sử, có yếu tố kì ảo; thể hiện thái độ, cách đánh giá của nhân dân. Xem thêm bài “Truyền thuyết và truyện cổ tích”.</p></div>
      ${vb([['Thánh Gióng', 'Dân gian', 'Cậu bé làng Gióng lớn nhanh như thổi, cưỡi ngựa sắt đánh tan giặc Ân rồi bay về trời.'], ['Sơn Tinh – Thuỷ Tinh', 'Dân gian', 'Cuộc giao tranh giữa thần núi và thần nước, giải thích hiện tượng lũ lụt hằng năm và ca ngợi sức chống lũ.']])}
      <div class="tip"><p>Viết: <b>kể lại một truyền thuyết</b> bằng lời văn của em (giữ các sự việc chính).</p></div>`,
      quiz: [{ q: 'Thánh Gióng đánh tan giặc:', opts: ['Giặc Ân', 'Giặc Minh', 'Giặc Nguyên'], a: 0, e: 'Giặc Ân.' },
        { q: '“Sơn Tinh – Thuỷ Tinh” giải thích hiện tượng:', opts: ['Lũ lụt hằng năm', 'Động đất'], a: 0, keep: true, e: 'Lũ lụt.' },
        { q: 'Chi tiết Gióng “lớn nhanh như thổi” là yếu tố:', opts: ['Kì ảo', 'Lịch sử có thật'], a: 0, keep: true, e: 'Kì ảo.' },
        { q: 'Truyền thuyết thường liên quan đến:', opts: ['Nhân vật, sự kiện lịch sử', 'Loài vật biết nói'], a: 0, keep: true, e: 'Lịch sử.' }] },
    bai7: { theory: `<p><b>Chủ đề:</b> thế giới cổ tích — ước mơ về công bằng, cái thiện chiến thắng cái ác.</p>
      <div class="note"><p><b>Thể loại: truyện cổ tích</b>. Nhân vật thường là người mồ côi, người em, người dũng sĩ, người thông minh…; có yếu tố kì ảo; kết thúc người tốt được đền đáp, kẻ xấu bị trừng phạt.</p></div>
      ${vb([['Thạch Sanh', 'Dân gian', 'Chàng dũng sĩ mồ côi thật thà, giết chằn tinh, đại bàng, cứu công chúa, chiến thắng Lý Thông gian xảo.'], ['Cây khế', 'Dân gian', 'Người em hiền lành được chim thần trả ơn bằng vàng; người anh tham lam bị trừng phạt.']])}
      <div class="tip"><p>Viết: <b>kể lại một truyện cổ tích</b> bằng lời văn của em.</p></div>`,
      quiz: [{ q: 'Trong “Thạch Sanh”, nhân vật gian xảo là:', opts: ['Lý Thông', 'Thạch Sanh', 'Công chúa'], a: 0, e: 'Lý Thông.' },
        { q: 'Kết thúc “Cây khế”, người anh tham lam:', opts: ['Bị trừng phạt', 'Trở nên giàu có'], a: 0, keep: true, e: 'Rơi xuống biển.' },
        { q: 'Truyện cổ tích thể hiện ước mơ:', opts: ['Cái thiện thắng cái ác', 'Kẻ xấu được thưởng'], a: 0, keep: true, e: 'Công bằng.' },
        { q: 'Thạch Sanh thuộc kiểu nhân vật:', opts: ['Dũng sĩ', 'Người thông minh', 'Vua chúa'], a: 0, e: 'Dũng sĩ mồ côi.' }] },
    bai8: { theory: `<p><b>Chủ đề:</b> tôn trọng sự khác biệt, nhận ra những điểm gần gũi giữa mọi người.</p>
      <div class="note"><p><b>Thể loại: văn bản nghị luận.</b> Người viết nêu <b>ý kiến</b> về một vấn đề, đưa ra <b>lí lẽ</b> (giải thích, lập luận) và <b>bằng chứng</b> (ví dụ, số liệu, dẫn chứng) để thuyết phục người đọc.</p></div>
      <div class="vd"><p>Ý kiến: Mỗi người là một cá thể riêng, không nên so sánh mình với người khác. Lí lẽ: mỗi người có điểm mạnh, sở thích khác nhau. Bằng chứng: bạn A giỏi Toán, bạn B vẽ đẹp.</p></div>
      <div class="tip"><p>Viết: <b>bài văn trình bày ý kiến</b> về một hiện tượng trong đời sống (mở bài nêu ý kiến, thân bài nêu lí lẽ – bằng chứng, kết bài khẳng định lại).</p></div>`,
      quiz: [{ q: 'Văn bản nghị luận gồm các yếu tố:', opts: ['Ý kiến, lí lẽ, bằng chứng', 'Cốt truyện, nhân vật'], a: 0, keep: true, e: 'Ý kiến – lí lẽ – bằng chứng.' },
        { q: '“Bạn Lan được giải nhất cuộc thi vẽ” trong bài nghị luận đóng vai trò:', opts: ['Bằng chứng', 'Ý kiến'], a: 0, keep: true, e: 'Dẫn chứng cụ thể.' },
        { q: 'Tôn trọng sự khác biệt nghĩa là:', opts: ['Chấp nhận mỗi người có điểm riêng', 'Bắt mọi người giống mình'], a: 0, keep: true, e: 'Tôn trọng cá tính.' }] },
    bai9: { theory: `<p><b>Chủ đề:</b> Trái Đất là ngôi nhà chung, cần bảo vệ môi trường sống.</p>
      <div class="note"><p><b>Thể loại: văn bản thông tin.</b> Cung cấp thông tin chính xác về sự vật, hiện tượng; thường có nhan đề, sa-pô, đề mục, hình ảnh, số liệu, sơ đồ. Cách trình bày: theo trật tự thời gian, nguyên nhân – kết quả, so sánh…</p></div>
      ${vb([['Trái Đất – cái nôi của sự sống', 'Hồ Thanh Trang', 'Trái Đất có nước, không khí, nhiệt độ phù hợp cho sự sống; con người cần bảo vệ Trái Đất.'], ['Các loài chung sống với nhau như thế nào?', 'Ngọc Phú', 'Sự đa dạng của các loài và mối quan hệ cân bằng trong tự nhiên.']])}
      <div class="tip"><p>Viết: <b>biên bản</b> một cuộc họp, <b>tóm tắt</b> văn bản thông tin bằng sơ đồ.</p></div>`,
      quiz: [{ q: 'Văn bản thông tin nhằm:', opts: ['Cung cấp thông tin chính xác', 'Kể chuyện tưởng tượng'], a: 0, keep: true, e: 'Thông tin chính xác.' },
        { q: 'Yếu tố thường có trong văn bản thông tin:', opts: ['Số liệu, hình ảnh, đề mục', 'Vần, nhịp thơ'], a: 0, keep: true, e: 'Số liệu, đề mục, hình ảnh.' },
        { q: 'Trái Đất có sự sống vì có:', opts: ['Nước, không khí, nhiệt độ phù hợp', 'Nhiều núi lửa'], a: 0, keep: true, e: 'Điều kiện thuận lợi.' }] },
    bai10: { theory: `<p><b>Chủ đề:</b> niềm vui đọc sách; giới thiệu cuốn sách em yêu thích.</p>
      <div class="note"><p>Hoạt động: đọc mở rộng, viết <b>bài giới thiệu một cuốn sách</b> (tên sách, tác giả, nội dung chính, điều em thích, lời khuyên đọc), trình bày trước lớp, làm dự án “Hội chợ sách”.</p></div>
      <div class="tip"><p>Gợi ý sách: <i>Dế Mèn phiêu lưu kí</i> (Tô Hoài), <i>Hoàng tử bé</i> (Ê-xu-pe-ri), <i>Tôi thấy hoa vàng trên cỏ xanh</i> (Nguyễn Nhật Ánh), <i>Không gia đình</i> (Héc-to Ma-lô).</p></div>`,
      quiz: [{ q: 'Bài giới thiệu sách nên có:', opts: ['Tên sách, tác giả, nội dung chính, điều em thích', 'Chỉ giá tiền cuốn sách'], a: 0, keep: true, e: 'Đủ các thông tin chính.' },
        { q: '“Hoàng tử bé” là tác phẩm của:', opts: ['Ê-xu-pe-ri', 'Tô Hoài', 'An-đéc-xen'], a: 0, e: 'Ăng-toan đơ Xanh-tơ Ê-xu-pe-ri.' }] },
  };
})();
