/* =====================================================================
   NỘI DUNG BỔ SUNG — LỊCH SỬ VÀ ĐỊA LÍ 6 (Kết nối tri thức)
   Khoá: mã bài trong mục lục (ls1…ls20, dl2…dl30). Mỗi bài: { theory, quiz }.
   Nội dung do người soạn tự viết, tóm tắt kiến thức trọng tâm của từng bài.
   ===================================================================== */
window.ND_LOP6 = window.ND_LOP6 || {};
window.ND_LOP6.lsdl = (function () {
  const TF = ['Đúng', 'Sai'];
  return {
    /* ======================= LỊCH SỬ ======================= */
    ls1: { theory: `<p><b>Lịch sử</b> là tất cả những gì đã xảy ra trong quá khứ. <b>Môn Lịch sử</b> tìm hiểu quá khứ của loài người.</p>
      <div class="note"><p>Học lịch sử giúp em biết cội nguồn của bản thân, gia đình, dân tộc; hiểu hiện tại và rút ra bài học cho tương lai.</p></div>`,
      quiz: [{ q: 'Lịch sử là:', opts: ['Những gì đã xảy ra trong quá khứ', 'Những gì sẽ xảy ra trong tương lai', 'Truyện cổ tích'], a: 0, e: 'Quá khứ.' },
        { q: 'Học lịch sử giúp em:', opts: ['Hiểu cội nguồn và rút ra bài học', 'Đoán trước tương lai chính xác'], a: 0, keep: true, e: 'Biết quá khứ, hiểu hiện tại.' }] },
    ls2: { theory: `<p>Các nhà sử học dựa vào các <b>nguồn tư liệu</b> để biết và phục dựng lại lịch sử:</p>
      <div class="tw"><table class="t"><tr><th>Loại tư liệu</th><th>Ví dụ</th></tr><tr><td>Tư liệu hiện vật</td><td>Trống đồng, công cụ đá, đền tháp</td></tr><tr><td>Tư liệu chữ viết</td><td>Bia đá, sách cổ, văn bản</td></tr><tr><td>Tư liệu truyền miệng</td><td>Truyền thuyết, ca dao, câu chuyện kể lại</td></tr></table></div>
      <div class="note"><p><b>Tư liệu gốc</b> là tư liệu ra đời vào thời điểm xảy ra sự kiện, đáng tin cậy nhất.</p></div>`,
      quiz: [{ q: 'Trống đồng Đông Sơn là loại tư liệu:', opts: ['Hiện vật', 'Chữ viết', 'Truyền miệng'], a: 0, e: 'Hiện vật.' },
        { q: 'Truyền thuyết Thánh Gióng là tư liệu:', opts: ['Truyền miệng', 'Hiện vật', 'Chữ viết'], a: 0, e: 'Truyền miệng.' },
        { q: 'Tư liệu đáng tin cậy nhất là:', opts: ['Tư liệu gốc', 'Lời kể lại sau nhiều đời'], a: 0, keep: true, e: 'Tư liệu gốc.' }] },
    ls4: { theory: `<div class="note"><p class="big">Vượn người → Người tối cổ → Người tinh khôn</p></div>
      <ul><li><b>Người tối cổ</b> xuất hiện khoảng 4 triệu năm trước, đã biết đi thẳng bằng hai chân, biết chế tạo công cụ đá.</li><li><b>Người tinh khôn</b> (người hiện đại) xuất hiện khoảng 150 000 năm trước.</li></ul>
      <p>Ở Việt Nam, dấu tích Người tối cổ tìm thấy ở hang Thẩm Khuyên, Thẩm Hai (Lạng Sơn), núi Đọ (Thanh Hoá)…</p>`,
      quiz: [{ q: 'Quá trình tiến hoá đúng là:', opts: ['Vượn người → Người tối cổ → Người tinh khôn', 'Người tinh khôn → Người tối cổ → Vượn người'], a: 0, keep: true, e: 'Từ vượn người.' },
        { q: 'Dấu tích Người tối cổ ở núi Đọ thuộc tỉnh:', opts: ['Thanh Hoá', 'Lạng Sơn', 'Hà Nội'], a: 0, e: 'Thanh Hoá.' },
        { q: 'Người tối cổ đã biết:', opts: ['Chế tạo công cụ bằng đá', 'Làm đồ sắt', 'Viết chữ'], a: 0, e: 'Công cụ đá thô sơ.' }] },
    ls5: { theory: `<p>Xã hội nguyên thuỷ trải qua: <b>bầy người nguyên thuỷ</b> → <b>công xã thị tộc</b> (gồm những người cùng huyết thống).</p>
      <div class="note"><ul><li>Kinh tế: săn bắt, hái lượm; về sau biết trồng trọt, chăn nuôi.</li><li>Biết dùng lửa, sống trong hang động, mái đá.</li><li>Làm chung, hưởng chung; chưa có giàu nghèo.</li></ul></div>`,
      quiz: [{ q: 'Người nguyên thuỷ sống chủ yếu bằng:', opts: ['Săn bắt, hái lượm', 'Buôn bán', 'Làm công nhân'], a: 0, e: 'Săn bắt, hái lượm.' },
        { q: 'Trong xã hội nguyên thuỷ, mọi người:', opts: ['Làm chung, hưởng chung', 'Chia giàu nghèo rõ rệt'], a: 0, keep: true, e: 'Chưa có giàu nghèo.' },
        { q: 'Thị tộc gồm những người:', opts: ['Cùng huyết thống', 'Cùng nghề nghiệp'], a: 0, keep: true, e: 'Có quan hệ họ hàng.' }] },
    ls6: { theory: `<p>Khi <b>kim loại</b> xuất hiện (đồng đỏ, đồng thau rồi đến sắt), công cụ lao động tốt hơn, sản phẩm làm ra nhiều, có <b>của cải dư thừa</b>.</p>
      <div class="note"><p>Một số người chiếm giữ của dư thừa trở nên giàu có → xã hội phân hoá giàu – nghèo → xã hội nguyên thuỷ dần tan rã.</p></div>
      <p>Ở Việt Nam: các nền văn hoá Phùng Nguyên, Đồng Đậu, Gò Mun, rồi <b>Đông Sơn</b> (đồ đồng phát triển rực rỡ).</p>`,
      quiz: [{ q: 'Nguyên nhân dẫn đến xã hội nguyên thuỷ tan rã là:', opts: ['Xuất hiện kim loại, có của cải dư thừa', 'Thiên tai'], a: 0, keep: true, e: 'Phân hoá giàu nghèo.' },
        { q: 'Nền văn hoá đồ đồng nổi tiếng nhất ở Việt Nam là:', opts: ['Đông Sơn', 'Hoà Bình', 'Bắc Sơn'], a: 0, e: 'Văn hoá Đông Sơn.' }] },
    ls7: { theory: `<div class="tw"><table class="t"><tr><th></th><th>Ai Cập cổ đại</th><th>Lưỡng Hà cổ đại</th></tr><tr><td>Hình thành</td><td>Ven sông Nin</td><td>Giữa hai sông Ti-grơ và Ơ-phrát</td></tr><tr><td>Chữ viết</td><td>Chữ tượng hình (viết trên giấy pa-pi-rút)</td><td>Chữ hình nêm (viết trên đất sét)</td></tr><tr><td>Thành tựu</td><td>Kim tự tháp, ướp xác, lịch, hệ đếm cơ số 10</td><td>Bộ luật Ha-mu-ra-bi, vườn treo Ba-bi-lon, hệ đếm cơ số 60</td></tr></table></div>
      <p>Các quốc gia này ra đời khoảng thiên niên kỉ IV TCN, nhờ đất phù sa màu mỡ ven sông.</p>`,
      quiz: [{ q: 'Ai Cập cổ đại hình thành ven sông:', opts: ['Nin', 'Hoàng Hà', 'Hằng'], a: 0, e: 'Sông Nin.' },
        { q: 'Chữ hình nêm là của:', opts: ['Lưỡng Hà', 'Ai Cập', 'Trung Quốc'], a: 0, e: 'Lưỡng Hà.' },
        { q: 'Công trình nổi tiếng của Ai Cập cổ đại là:', opts: ['Kim tự tháp', 'Vạn Lý Trường Thành', 'Đền Pác-tê-nông'], a: 0, e: 'Kim tự tháp.' }] },
    ls8: { theory: `<p>Ấn Độ cổ đại hình thành ven <b>sông Ấn</b> và <b>sông Hằng</b>.</p>
      <div class="note"><p>Xã hội chia thành 4 đẳng cấp (chế độ Varna): Bra-man (tăng lữ), Ksa-tri-a (quý tộc, chiến binh), Vai-si-a (người làm ruộng, buôn bán), Su-đra (người lao động nghèo).</p></div>
      <p>Thành tựu: đạo Bà La Môn, <b>đạo Phật</b>; chữ Phạn; sử thi Ra-ma-y-a-na, Ma-ha-bha-ra-ta; phát minh <b>chữ số 0</b>.</p>`,
      quiz: [{ q: 'Đạo Phật ra đời ở:', opts: ['Ấn Độ', 'Trung Quốc', 'Ai Cập'], a: 0, e: 'Ấn Độ.' },
        { q: 'Người Ấn Độ cổ đại đã phát minh ra:', opts: ['Chữ số 0', 'Giấy', 'La bàn'], a: 0, e: 'Chữ số 0.' },
        { q: 'Xã hội Ấn Độ cổ đại có mấy đẳng cấp?', a: ['4'], e: '4 đẳng cấp.' }] },
    ls9: { theory: `<p>Trung Quốc cổ đại hình thành ven <b>Hoàng Hà</b> và <b>Trường Giang</b>. Năm <b>221 TCN</b>, <b>Tần Thuỷ Hoàng</b> thống nhất Trung Quốc.</p>
      <div class="note"><p>Thành tựu: <b>Vạn Lý Trường Thành</b>; Nho giáo (Khổng Tử); “tứ đại phát minh”: giấy, la bàn, thuốc súng, kĩ thuật in.</p></div>`,
      quiz: [{ q: 'Người thống nhất Trung Quốc năm 221 TCN là:', opts: ['Tần Thuỷ Hoàng', 'Khổng Tử', 'Lưu Bang'], a: 0, e: 'Tần Thuỷ Hoàng.' },
        { q: 'Phát minh nào của Trung Quốc cổ đại?', opts: ['Giấy', 'Chữ số 0', 'Chữ hình nêm'], a: 0, e: 'Giấy, la bàn, thuốc súng, kĩ thuật in.' },
        { q: 'Người sáng lập Nho giáo là:', opts: ['Khổng Tử', 'Tần Thuỷ Hoàng'], a: 0, keep: true, e: 'Khổng Tử.' }] },
    ls10: { theory: `<p>Hy Lạp và La Mã cổ đại hình thành ven <b>biển Địa Trung Hải</b>, kinh tế thủ công nghiệp và thương nghiệp đường biển phát triển.</p>
      <div class="note"><p>Thành tựu: chữ cái La-tinh; lịch; đền Pác-tê-nông (Hy Lạp), đấu trường Cô-li-dê (La Mã); Thế vận hội Ô-lim-pích; các nhà khoa học Py-ta-go, Ác-si-mét.</p></div>`,
      quiz: [{ q: 'Đền Pác-tê-nông thuộc:', opts: ['Hy Lạp', 'La Mã', 'Ai Cập'], a: 0, e: 'Hy Lạp.' },
        { q: 'Thế vận hội Ô-lim-pích bắt nguồn từ:', opts: ['Hy Lạp cổ đại', 'Trung Quốc cổ đại'], a: 0, keep: true, e: 'Hy Lạp.' },
        { q: 'Hy Lạp, La Mã cổ đại nằm ven biển:', opts: ['Địa Trung Hải', 'Biển Đông'], a: 0, keep: true, e: 'Địa Trung Hải.' }] },
    ls11: { theory: `<p>Từ những thế kỉ trước và sau Công nguyên, ở Đông Nam Á hình thành các <b>quốc gia sơ kì</b>: Văn Lang – Âu Lạc, Phù Nam, Chăm-pa (Lâm Ấp) ở bán đảo Đông Dương; các quốc gia ở hải đảo (In-đô-nê-xi-a).</p>
      <div class="note"><p>Cơ sở: nông nghiệp lúa nước, nghề thủ công, buôn bán đường biển; tiếp thu văn hoá Ấn Độ, Trung Quốc.</p></div>`,
      quiz: [{ q: 'Nền kinh tế chính của các quốc gia sơ kì Đông Nam Á là:', opts: ['Nông nghiệp lúa nước', 'Chăn nuôi du mục'], a: 0, keep: true, e: 'Trồng lúa nước.' },
        { q: 'Quốc gia sơ kì nào ở Đông Nam Á?', opts: ['Phù Nam', 'Ai Cập', 'Hy Lạp'], a: 0, e: 'Phù Nam.' }] },
    ls12: { theory: `<p>Từ thế kỉ VII đến thế kỉ X, ở Đông Nam Á hình thành các <b>vương quốc phong kiến</b>: Chân Lạp (Cam-pu-chia), <b>Sri Vi-giay-a</b> (đảo Xu-ma-tra, mạnh về buôn bán đường biển), Ma-ta-ram (đảo Gia-va), Chăm-pa…</p>
      <div class="note"><p>Các vương quốc phát triển nhờ nông nghiệp và đặc biệt là <b>thương mại biển</b>, nằm trên con đường buôn bán giữa Ấn Độ và Trung Quốc.</p></div>`,
      quiz: [{ q: 'Vương quốc mạnh về buôn bán đường biển ở Xu-ma-tra là:', opts: ['Sri Vi-giay-a', 'Chân Lạp'], a: 0, keep: true, e: 'Sri Vi-giay-a.' },
        { q: 'Đông Nam Á nằm trên con đường buôn bán giữa:', opts: ['Ấn Độ và Trung Quốc', 'Ai Cập và Hy Lạp'], a: 0, keep: true, e: 'Ấn Độ – Trung Quốc.' }] },
    ls13: { theory: `<p>Đông Nam Á tiếp thu văn hoá bên ngoài một cách có chọn lọc:</p><ul><li>Từ <b>Ấn Độ</b>: đạo Phật, đạo Hin-đu, chữ Phạn (cơ sở tạo chữ viết riêng), kiến trúc đền tháp.</li><li>Từ <b>Trung Quốc</b>: Nho giáo, chữ Hán (ở Việt Nam).</li></ul>
      <div class="vd"><p>Đền Bô-rô-bu-đua (In-đô-nê-xi-a), tháp Chăm (Việt Nam) chịu ảnh hưởng kiến trúc Ấn Độ.</p></div>`,
      quiz: [{ q: 'Chữ viết của nhiều nước Đông Nam Á được tạo dựa trên:', opts: ['Chữ Phạn', 'Chữ La-tinh'], a: 0, keep: true, e: 'Chữ Phạn (Ấn Độ).' },
        { q: 'Đền Bô-rô-bu-đua ở nước:', opts: ['In-đô-nê-xi-a', 'Thái Lan', 'Việt Nam'], a: 0, e: 'In-đô-nê-xi-a.' }] },
    ls15: { theory: `<p>Từ năm 179 TCN, nước Âu Lạc bị các triều đại phong kiến phương Bắc đô hộ (thời kì Bắc thuộc, kéo dài hơn 1 000 năm).</p>
      <div class="note"><ul><li>Chia nước ta thành quận, huyện, cử quan cai trị.</li><li>Bắt nộp thuế, cống nạp nặng nề sản vật quý.</li><li>Thực hiện chính sách đồng hoá: truyền bá chữ Hán, phong tục người Hán.</li></ul></div>`,
      quiz: [{ q: 'Thời kì Bắc thuộc bắt đầu từ năm:', opts: ['179 TCN', '938', '40'], a: 0, e: '179 TCN.' },
        { q: 'Chính quyền đô hộ muốn đồng hoá người Việt bằng cách:', opts: ['Truyền bá chữ Hán, phong tục người Hán', 'Dạy chữ Phạn'], a: 0, keep: true, e: 'Đồng hoá văn hoá.' }] },
    ls16: { theory: `<div class="tw"><table class="t"><tr><th>Năm</th><th>Cuộc khởi nghĩa</th></tr><tr><td>40</td><td>Hai Bà Trưng (Trưng Trắc, Trưng Nhị)</td></tr><tr><td>248</td><td>Bà Triệu</td></tr><tr><td>542</td><td>Lý Bí – năm 544 lập nước Vạn Xuân</td></tr><tr><td>713</td><td>Mai Thúc Loan</td></tr><tr><td>Khoảng 776</td><td>Phùng Hưng</td></tr></table></div>
      <div class="note"><p>Các cuộc khởi nghĩa thể hiện tinh thần yêu nước, ý chí giành độc lập của nhân dân ta.</p></div>`,
      quiz: [{ q: 'Khởi nghĩa Hai Bà Trưng nổ ra năm:', a: ['40'], e: 'Năm 40.' },
        { q: 'Người lập ra nước Vạn Xuân là:', opts: ['Lý Bí', 'Mai Thúc Loan', 'Phùng Hưng'], a: 0, e: 'Lý Bí (Lý Nam Đế), năm 544.' },
        { q: 'Khởi nghĩa Bà Triệu nổ ra năm:', a: ['248'], e: 'Năm 248.' }] },
    ls17: { theory: `<p>Dù bị đô hộ hơn 1 000 năm, người Việt vẫn <b>giữ được tiếng nói</b> và nhiều phong tục: nhuộm răng, ăn trầu, xăm mình, thờ cúng tổ tiên, thờ các vị anh hùng, lễ hội truyền thống.</p>
      <div class="note"><p>Người Việt tiếp thu có chọn lọc văn hoá bên ngoài (chữ Hán, đạo Phật) nhưng “Việt hoá” cho phù hợp.</p></div>`,
      quiz: [{ q: 'Người Việt thời Bắc thuộc vẫn giữ được:', opts: ['Tiếng nói của dân tộc', 'Không giữ được gì'], a: 0, keep: true, e: 'Giữ tiếng Việt.' },
        { q: 'Phong tục nào của người Việt được giữ gìn?', opts: ['Ăn trầu, nhuộm răng', 'Ăn bằng dao nĩa'], a: 0, keep: true, e: 'Ăn trầu, nhuộm răng.' }] },
    ls18: { theory: `<ul><li>Năm 905, <b>Khúc Thừa Dụ</b> giành quyền tự chủ.</li><li>Năm 931, <b>Dương Đình Nghệ</b> đánh bại quân Nam Hán.</li><li>Năm <b>938</b>, <b>Ngô Quyền</b> đánh tan quân Nam Hán trên <b>sông Bạch Đằng</b> bằng trận địa cọc gỗ, lợi dụng nước thuỷ triều.</li></ul>
      <div class="note"><p>Chiến thắng Bạch Đằng năm 938 chấm dứt thời kì Bắc thuộc, mở ra thời kì độc lập lâu dài cho dân tộc.</p></div>`,
      quiz: [{ q: 'Chiến thắng Bạch Đằng của Ngô Quyền diễn ra năm:', a: ['938'], e: 'Năm 938.' },
        { q: 'Ngô Quyền đã dùng cách nào để đánh giặc trên sông Bạch Đằng?', opts: ['Cắm cọc gỗ, lợi dụng thuỷ triều', 'Dùng voi chiến'], a: 0, keep: true, e: 'Trận địa cọc gỗ.' },
        { q: 'Người giành quyền tự chủ năm 905 là:', opts: ['Khúc Thừa Dụ', 'Ngô Quyền', 'Lý Bí'], a: 0, e: 'Khúc Thừa Dụ.' }] },
    ls19: { theory: `<p><b>Vương quốc Chăm-pa</b> được thành lập vào cuối thế kỉ II (năm 192) ở vùng Tượng Lâm (miền Trung Việt Nam ngày nay).</p>
      <div class="note"><p>Kinh tế: trồng lúa nước, khai thác lâm sản, đánh cá, buôn bán đường biển. Văn hoá: chữ Chăm cổ (từ chữ Phạn), đạo Hin-đu, <b>tháp Chăm</b>, <b>thánh địa Mỹ Sơn</b> (Quảng Nam).</p></div>`,
      quiz: [{ q: 'Thánh địa Mỹ Sơn là di tích của:', opts: ['Chăm-pa', 'Phù Nam', 'Văn Lang'], a: 0, e: 'Chăm-pa.' },
        { q: 'Vương quốc Chăm-pa được thành lập ở:', opts: ['Miền Trung Việt Nam', 'Miền Bắc Việt Nam'], a: 0, keep: true, e: 'Vùng Tượng Lâm.' }] },
    ls20: { theory: `<p><b>Vương quốc Phù Nam</b> hình thành khoảng thế kỉ I ở vùng châu thổ sông Cửu Long (Nam Bộ Việt Nam ngày nay).</p>
      <div class="note"><p>Kinh tế: nông nghiệp, thủ công, đặc biệt là <b>buôn bán đường biển</b>; cảng thị <b>Óc Eo</b> (An Giang) là trung tâm buôn bán lớn. Đến thế kỉ VII, Phù Nam suy yếu và bị Chân Lạp thôn tính.</p></div>`,
      quiz: [{ q: 'Cảng thị nổi tiếng của Phù Nam là:', opts: ['Óc Eo', 'Hội An', 'Vân Đồn'], a: 0, e: 'Óc Eo.' },
        { q: 'Phù Nam nằm ở vùng:', opts: ['Nam Bộ', 'Bắc Bộ'], a: 0, keep: true, e: 'Châu thổ sông Cửu Long.' }] },

    /* ======================= ĐỊA LÍ ======================= */
    dl2: { theory: `<p><b>Bản đồ</b> là hình vẽ thu nhỏ một khu vực hay toàn bộ bề mặt Trái Đất lên mặt phẳng.</p>
      <div class="note"><p>Xác định phương hướng trên bản đồ (dựa vào kinh tuyến, vĩ tuyến): <b>đầu trên – Bắc</b>, <b>đầu dưới – Nam</b>, <b>bên phải – Đông</b>, <b>bên trái – Tây</b>.</p></div>`,
      quiz: [{ q: 'Trên bản đồ, đầu phía trên của kinh tuyến chỉ hướng:', opts: ['Bắc', 'Nam', 'Đông', 'Tây'], a: 0, keep: true, e: 'Bắc.' },
        { q: 'Bên phải bản đồ là hướng:', opts: ['Bắc', 'Nam', 'Đông', 'Tây'], a: 2, keep: true, e: 'Đông.' },
        { q: 'Bản đồ là hình vẽ:', opts: ['Thu nhỏ bề mặt Trái Đất trên mặt phẳng', 'Phóng to bề mặt Trái Đất'], a: 0, keep: true, e: 'Thu nhỏ.' }] },
    dl4: { theory: `<p><b>Kí hiệu bản đồ</b> có 3 loại: kí hiệu <b>điểm</b> (sân bay, mỏ khoáng sản), kí hiệu <b>đường</b> (sông, đường giao thông, ranh giới), kí hiệu <b>diện tích</b> (vùng trồng lúa, rừng).</p>
      <div class="note"><p><b>Bảng chú giải</b> giải thích ý nghĩa các kí hiệu. Muốn đọc bản đồ, trước tiên phải đọc bảng chú giải.</p></div>`,
      quiz: [{ q: 'Dòng sông trên bản đồ được thể hiện bằng kí hiệu:', opts: ['Đường', 'Điểm', 'Diện tích'], a: 0, e: 'Kí hiệu đường.' },
        { q: 'Sân bay được thể hiện bằng kí hiệu:', opts: ['Điểm', 'Đường', 'Diện tích'], a: 0, e: 'Kí hiệu điểm.' },
        { q: 'Muốn hiểu các kí hiệu trên bản đồ, em xem:', opts: ['Bảng chú giải', 'Tên bản đồ'], a: 0, keep: true, e: 'Bảng chú giải.' }] },
    dl5: { theory: `<p><b>Lược đồ trí nhớ</b> là hình vẽ về một địa điểm hay con đường dựa trên những gì em nhớ, không cần chính xác tỉ lệ.</p><div class="vd"><p>Vẽ đường từ nhà đến trường: đánh dấu nhà, trường, các ngã rẽ, cửa hàng, công viên làm mốc.</p></div>`,
      quiz: [{ q: 'Lược đồ trí nhớ được vẽ dựa trên:', opts: ['Những gì ta nhớ', 'Ảnh vệ tinh chính xác'], a: 0, keep: true, e: 'Trí nhớ.' }] },
    dl6: { theory: `<p>Trái Đất là hành tinh <b>thứ 3</b> tính từ Mặt Trời (sau sao Thuỷ, sao Kim). Khoảng cách vừa phải giúp Trái Đất có nhiệt độ thích hợp cho sự sống.</p>
      <div class="note"><p>Trái Đất có dạng <b>hình cầu</b>. Bán kính xích đạo khoảng <b>6 378 km</b>, chiều dài đường xích đạo khoảng 40 076 km.</p></div>`,
      quiz: [{ q: 'Trái Đất là hành tinh thứ mấy tính từ Mặt Trời?', a: ['3'], e: 'Thứ 3.' },
        { q: 'Trái Đất có dạng:', opts: ['Hình cầu', 'Hình vuông', 'Hình đĩa phẳng'], a: 0, e: 'Hình cầu.' },
        { q: 'Bán kính xích đạo của Trái Đất khoảng:', opts: ['6 378 km', '637 km', '63 780 km'], a: 0, e: '≈ 6 378 km.' }] },
    dl9: { theory: `<div class="note"><ul><li>Dùng <b>la bàn</b>: kim nam châm luôn chỉ hướng Bắc – Nam.</li><li>Dựa vào <b>Mặt Trời</b>: buổi sáng Mặt Trời ở phía Đông, chiều tối ở phía Tây.</li><li>Ban đêm (ở bán cầu Bắc): dựa vào <b>sao Bắc Cực</b>.</li></ul></div>`,
      quiz: [{ q: 'Kim la bàn luôn chỉ hướng:', opts: ['Bắc – Nam', 'Đông – Tây'], a: 0, keep: true, e: 'Bắc – Nam.' },
        { q: 'Buổi sáng, Mặt Trời ở phía:', opts: ['Đông', 'Tây', 'Nam'], a: 0, keep: true, e: 'Đông.' },
        { q: 'Ban đêm ở nước ta có thể xác định hướng Bắc nhờ:', opts: ['Sao Bắc Cực', 'Mặt Trăng tròn'], a: 0, keep: true, e: 'Sao Bắc Cực.' }] },
    dl11: { theory: `<div class="tw"><table class="t"><tr><th></th><th>Quá trình nội sinh</th><th>Quá trình ngoại sinh</th></tr><tr><td>Xảy ra</td><td>Trong lòng Trái Đất</td><td>Trên bề mặt Trái Đất</td></tr><tr><td>Biểu hiện</td><td>Nâng lên, hạ xuống, uốn nếp, đứt gãy, động đất, núi lửa</td><td>Phong hoá, xâm thực (bào mòn), bồi tụ</td></tr><tr><td>Kết quả</td><td>Tạo núi, làm địa hình cao thấp</td><td>San bằng, hạ thấp địa hình</td></tr></table></div>`,
      quiz: [{ q: 'Quá trình tạo núi là quá trình:', opts: ['Nội sinh', 'Ngoại sinh'], a: 0, keep: true, e: 'Nội sinh.' },
        { q: 'Nước chảy bào mòn đất đá là quá trình:', opts: ['Ngoại sinh', 'Nội sinh'], a: 0, keep: true, e: 'Ngoại sinh (xâm thực).' }] },
    dl12: { theory: `<p><b>Núi lửa</b> là nơi mác-ma từ trong lòng đất phun trào lên mặt đất. <b>Động đất</b> là sự rung chuyển đột ngột của vỏ Trái Đất. Độ mạnh của động đất đo bằng thang Rích-te.</p>
      <div class="note"><p>Núi lửa, động đất thường xảy ra ở nơi tiếp giáp các mảng kiến tạo, như <b>“vành đai lửa Thái Bình Dương”</b>.</p></div>
      <div class="warn"><p>Khi có động đất: tránh xa cửa kính, trú dưới gầm bàn chắc chắn, che đầu; khi hết rung lắc thì ra chỗ trống, không dùng thang máy.</p></div>`,
      quiz: [{ q: 'Độ mạnh của động đất được đo bằng thang:', opts: ['Rích-te', 'Độ C', 'Mét'], a: 0, e: 'Thang Rích-te.' },
        { q: 'Khi đang ở trong lớp mà có động đất, em nên:', opts: ['Trú dưới gầm bàn chắc chắn, che đầu', 'Chạy vào thang máy'], a: 0, keep: true, e: 'Không dùng thang máy.' },
        { q: 'Vật chất nóng chảy phun ra từ núi lửa gọi là:', opts: ['Dung nham (mác-ma)', 'Nước ngầm'], a: 0, keep: true, e: 'Dung nham.' }] },
    dl13: { theory: `<div class="tw"><table class="t"><tr><th>Dạng địa hình</th><th>Đặc điểm</th></tr><tr><td>Núi</td><td>Nhô cao rõ rệt, độ cao trên 500 m so với mực nước biển, có đỉnh, sườn dốc</td></tr><tr><td>Đồi</td><td>Đỉnh tròn, sườn thoải, cao không quá 200 m so với vùng xung quanh</td></tr><tr><td>Cao nguyên</td><td>Bề mặt tương đối bằng phẳng, cao trên 500 m, sườn dốc</td></tr><tr><td>Đồng bằng</td><td>Thấp, bằng phẳng, thường dưới 200 m</td></tr></table></div>
      <div class="note"><p>Khoáng sản: năng lượng (than, dầu mỏ, khí đốt), kim loại (sắt, đồng, vàng), phi kim loại (đá vôi, apatit). Khoáng sản có hạn, cần khai thác hợp lí.</p></div>`,
      quiz: [{ q: 'Dạng địa hình thấp, bằng phẳng, thuận lợi trồng lúa là:', opts: ['Đồng bằng', 'Núi', 'Cao nguyên'], a: 0, e: 'Đồng bằng.' },
        { q: 'Than đá là khoáng sản:', opts: ['Năng lượng', 'Kim loại', 'Phi kim loại'], a: 0, e: 'Năng lượng.' },
        { q: 'Đồi có đặc điểm:', opts: ['Đỉnh tròn, sườn thoải', 'Đỉnh nhọn, sườn dốc'], a: 0, keep: true, e: 'Đỉnh tròn, sườn thoải.' }] },
    dl14: { theory: `<p><b>Đường đồng mức</b> là đường nối các điểm có cùng độ cao trên bản đồ địa hình. Các đường càng gần nhau thì sườn càng dốc; càng xa nhau thì sườn càng thoải.</p><p><b>Lát cắt địa hình</b> cho thấy hình dạng cao thấp của địa hình theo một đường cắt.</p>`,
      quiz: [{ q: 'Các đường đồng mức càng gần nhau thì sườn:', opts: ['Càng dốc', 'Càng thoải'], a: 0, keep: true, e: 'Càng dốc.' },
        { q: 'Đường đồng mức nối các điểm có cùng:', opts: ['Độ cao', 'Nhiệt độ'], a: 0, keep: true, e: 'Cùng độ cao.' }] },
    dl15: { theory: `<p>Lớp vỏ khí (khí quyển) gồm các tầng: <b>tầng đối lưu</b> (sát mặt đất, khoảng 0 – 16 km, nơi xảy ra mây, mưa, sấm chớp), <b>tầng bình lưu</b> (có lớp ô-dôn ngăn tia tử ngoại), các tầng cao.</p>
      <div class="note"><p><b>Khí áp</b> là sức ép của không khí lên bề mặt Trái Đất. <b>Gió</b> là sự chuyển động của không khí từ nơi khí áp cao về nơi khí áp thấp. Các loại gió chính: Tín phong, gió Tây ôn đới, gió Đông cực.</p></div>`,
      quiz: [{ q: 'Mây, mưa xảy ra ở tầng:', opts: ['Đối lưu', 'Bình lưu'], a: 0, keep: true, e: 'Tầng đối lưu.' },
        { q: 'Lớp ô-dôn nằm ở tầng:', opts: ['Bình lưu', 'Đối lưu'], a: 0, keep: true, e: 'Tầng bình lưu.' },
        { q: 'Gió thổi từ nơi:', opts: ['Khí áp cao về khí áp thấp', 'Khí áp thấp về khí áp cao'], a: 0, keep: true, e: 'Cao → thấp.' }] },
    dl16: { theory: `<ul><li>Nhiệt độ không khí đo bằng <b>nhiệt kế</b>; thay đổi theo vĩ độ (càng gần cực càng lạnh), theo độ cao (lên cao khoảng 100 m giảm khoảng 0,6 °C), gần hay xa biển.</li><li>Hơi nước ngưng tụ tạo thành <b>mây</b>; giọt nước lớn rơi xuống thành <b>mưa</b>. Lượng mưa đo bằng <b>vũ kế</b> (mm).</li></ul>`,
      quiz: [{ q: 'Lên cao 1 000 m, nhiệt độ giảm khoảng bao nhiêu °C?', a: ['6'], e: '0,6 °C × 10 = 6 °C.' },
        { q: 'Dụng cụ đo lượng mưa là:', opts: ['Vũ kế', 'Nhiệt kế', 'Áp kế'], a: 0, e: 'Vũ kế.' },
        { q: 'Càng về gần hai cực, nhiệt độ:', opts: ['Càng giảm', 'Càng tăng'], a: 0, keep: true, e: 'Lạnh hơn.' }] },
    dl17: { theory: `<div class="note"><p><b>Thời tiết</b>: trạng thái khí quyển trong thời gian ngắn (hôm nay mưa, mai nắng). <b>Khí hậu</b>: tình hình thời tiết lặp đi lặp lại trong nhiều năm.</p></div>
      <p>Các đới khí hậu: nhiệt đới (nóng), ôn đới (ôn hoà), hàn đới (lạnh). <b>Biến đổi khí hậu</b>: Trái Đất nóng lên, băng tan, nước biển dâng, thiên tai nhiều hơn. Ứng phó: trồng cây, tiết kiệm năng lượng, giảm khí thải.</p>`,
      quiz: [{ q: '“Hôm nay trời mưa to” nói về:', opts: ['Thời tiết', 'Khí hậu'], a: 0, keep: true, e: 'Thời gian ngắn → thời tiết.' },
        { q: 'Biểu hiện của biến đổi khí hậu là:', opts: ['Nhiệt độ Trái Đất tăng, nước biển dâng', 'Trái Đất ngày càng lạnh hơn'], a: 0, keep: true, e: 'Nóng lên toàn cầu.' },
        { q: 'Việt Nam nằm trong đới khí hậu:', opts: ['Nhiệt đới', 'Hàn đới', 'Ôn đới'], a: 0, e: 'Nhiệt đới.' }] },
    dl18: { theory: `<p>Biểu đồ nhiệt độ – lượng mưa: <b>cột</b> thể hiện lượng mưa từng tháng (mm), <b>đường</b> thể hiện nhiệt độ từng tháng (°C). Đọc biểu đồ: tìm tháng nóng nhất, lạnh nhất, mưa nhiều nhất, ít nhất.</p>`,
      quiz: [{ q: 'Trên biểu đồ khí hậu, lượng mưa thường được thể hiện bằng:', opts: ['Cột', 'Đường'], a: 0, keep: true, e: 'Cột.' },
        { q: 'Nhiệt độ thường được thể hiện bằng:', opts: ['Đường', 'Cột'], a: 0, keep: true, e: 'Đường.' }] },
    dl19: { theory: `<p><b>Thuỷ quyển</b> là toàn bộ nước trên Trái Đất: nước mặn chiếm khoảng <b>97%</b>, nước ngọt chỉ khoảng <b>3%</b> (phần lớn ở dạng băng).</p>
      <div class="note"><p class="big">Bốc hơi → Ngưng tụ thành mây → Mưa → Dòng chảy về biển</p><p>Đó là <b>vòng tuần hoàn lớn của nước</b>.</p></div>`,
      quiz: [{ q: 'Nước mặn chiếm khoảng bao nhiêu phần trăm nước trên Trái Đất?', a: ['97'], e: 'Khoảng 97%.' },
        { q: 'Nước biển bốc hơi rồi ngưng tụ thành:', opts: ['Mây', 'Băng hà'], a: 0, keep: true, e: 'Mây.' },
        { q: 'Phần lớn nước ngọt tồn tại ở dạng:', opts: ['Băng', 'Sông hồ'], a: 0, keep: true, e: 'Băng ở hai cực, núi cao.' }] },
    dl20: { theory: `<ul><li><b>Sông</b>: dòng chảy thường xuyên. Một hệ thống sông gồm sông chính, <b>phụ lưu</b> (đổ nước vào), <b>chi lưu</b> (thoát nước ra). Vùng đất cung cấp nước cho sông là <b>lưu vực</b>.</li><li><b>Hồ</b>: vùng trũng chứa nước (hồ tự nhiên, hồ nhân tạo).</li><li><b>Nước ngầm</b>: nước nằm dưới mặt đất. <b>Băng hà</b>: khối băng lớn ở vùng cực, núi cao.</li></ul>`,
      quiz: [{ q: 'Sông nhỏ đổ nước vào sông chính gọi là:', opts: ['Phụ lưu', 'Chi lưu'], a: 0, keep: true, e: 'Phụ lưu.' },
        { q: 'Hồ Hoà Bình (thuỷ điện) là hồ:', opts: ['Nhân tạo', 'Tự nhiên'], a: 0, keep: true, e: 'Do con người xây đập.' },
        { q: 'Nước nằm dưới mặt đất gọi là:', opts: ['Nước ngầm', 'Băng hà'], a: 0, keep: true, e: 'Nước ngầm.' }] },
    dl21: { theory: `<p>Có 4 đại dương: <b>Thái Bình Dương</b> (lớn nhất), Đại Tây Dương, Ấn Độ Dương, Bắc Băng Dương. Độ muối trung bình của nước biển khoảng 35‰.</p>
      <div class="note"><ul><li><b>Sóng</b>: chủ yếu do gió.</li><li><b>Thuỷ triều</b>: nước biển lên xuống theo chu kì, do sức hút của Mặt Trăng và Mặt Trời.</li><li><b>Dòng biển</b>: dòng chảy trong biển (dòng biển nóng, dòng biển lạnh).</li></ul></div>`,
      quiz: [{ q: 'Đại dương lớn nhất là:', opts: ['Thái Bình Dương', 'Đại Tây Dương', 'Ấn Độ Dương'], a: 0, e: 'Thái Bình Dương.' },
        { q: 'Thuỷ triều sinh ra chủ yếu do:', opts: ['Sức hút của Mặt Trăng và Mặt Trời', 'Gió'], a: 0, keep: true, e: 'Sức hút Mặt Trăng, Mặt Trời.' },
        { q: 'Có mấy đại dương?', a: ['4'], e: '4 đại dương.' }] },
    dl22: { theory: `<p><b>Lớp đất</b> là lớp vật chất mỏng, tơi xốp trên bề mặt lục địa. Thành phần: khoáng (chiếm phần lớn), chất hữu cơ (<b>mùn</b> – làm đất màu mỡ), nước, không khí.</p><div class="note"><p>Các nhân tố hình thành đất: đá mẹ, khí hậu, sinh vật, địa hình, thời gian.</p></div>`,
      quiz: [{ q: 'Thành phần làm cho đất màu mỡ là:', opts: ['Chất hữu cơ (mùn)', 'Cát'], a: 0, keep: true, e: 'Mùn.' },
        { q: 'Thành phần chiếm tỉ lệ lớn nhất trong đất là:', opts: ['Khoáng', 'Nước', 'Không khí'], a: 0, e: 'Khoáng.' }] },
    dl23: { theory: `<p>Sự sống có ở khắp nơi: trên cạn, dưới nước, trong không khí. Thực vật và động vật phân bố khác nhau theo vĩ độ và độ cao: vùng nóng ẩm nhiều loài nhất; vùng lạnh, hoang mạc ít loài hơn.</p>`,
      quiz: [{ q: 'Nơi có nhiều loài sinh vật nhất là vùng:', opts: ['Nóng ẩm (nhiệt đới)', 'Hoang mạc', 'Vùng cực'], a: 0, e: 'Nhiệt đới ẩm.' }] },
    dl24: { theory: `<p><b>Rừng nhiệt đới</b> phân bố ở vùng nóng quanh xích đạo.</p><ul><li><b>Rừng mưa nhiệt đới</b>: nóng ẩm quanh năm, nhiều tầng cây, rất nhiều loài (rừng A-ma-dôn – “lá phổi xanh” của Trái Đất).</li><li><b>Rừng nhiệt đới gió mùa</b>: có mùa khô, nhiều cây rụng lá (rừng ở Việt Nam).</li></ul><div class="warn"><p>Rừng đang bị chặt phá nhiều, cần bảo vệ và trồng mới.</p></div>`,
      quiz: [{ q: 'Rừng A-ma-dôn thuộc kiểu rừng:', opts: ['Rừng mưa nhiệt đới', 'Rừng lá kim'], a: 0, keep: true, e: 'Rừng mưa nhiệt đới.' },
        { q: 'Rừng nhiệt đới gió mùa có đặc điểm:', opts: ['Có mùa khô, nhiều cây rụng lá', 'Băng tuyết quanh năm'], a: 0, keep: true, e: 'Có mùa khô.' }] },
    dl25: { theory: `<div class="tw"><table class="t"><tr><th>Đới</th><th>Đặc điểm</th></tr><tr><td>Đới nóng</td><td>Nóng quanh năm; rừng mưa nhiệt đới, xa-van, hoang mạc</td></tr><tr><td>Đới ôn hoà</td><td>Có 4 mùa rõ rệt; rừng lá rộng, rừng lá kim, thảo nguyên</td></tr><tr><td>Đới lạnh</td><td>Lạnh giá quanh năm; đài nguyên, băng tuyết</td></tr></table></div>`,
      quiz: [{ q: 'Đới có 4 mùa rõ rệt là:', opts: ['Đới ôn hoà', 'Đới nóng', 'Đới lạnh'], a: 0, e: 'Đới ôn hoà.' },
        { q: 'Việt Nam thuộc đới:', opts: ['Đới nóng', 'Đới lạnh'], a: 0, keep: true, e: 'Đới nóng.' }] },
    dl26: { theory: `<p>Thực hành: quan sát môi trường tự nhiên nơi em sống (địa hình, sông hồ, đất, cây cối, động vật, thời tiết), ghi chép và trình bày; đề xuất cách bảo vệ môi trường địa phương.</p>`,
      quiz: [{ q: 'Việc nên làm để bảo vệ môi trường địa phương:', opts: ['Không xả rác xuống ao hồ', 'Đốt rác ngoài đường'], a: 0, keep: true, e: 'Giữ sạch ao hồ.' }] },
    dl27: { theory: `<p>Dân số thế giới đã vượt <b>8 tỉ người</b> (năm 2022) và vẫn tiếp tục tăng.</p><div class="note"><p>Dân cư phân bố <b>không đều</b>: đông ở đồng bằng, ven biển, nơi khí hậu thuận lợi; thưa ở hoang mạc, núi cao, vùng cực. Các siêu đô thị lớn: Tô-ky-ô, Niu Đê-li, Thượng Hải…</p></div>`,
      quiz: [{ q: 'Dân số thế giới vượt 8 tỉ người vào năm:', opts: ['2022', '2000', '1990'], a: 0, e: 'Năm 2022.' },
        { q: 'Dân cư thường đông đúc ở:', opts: ['Đồng bằng, ven biển', 'Hoang mạc, vùng cực'], a: 0, keep: true, e: 'Nơi thuận lợi.' }] },
    dl28: { theory: `<p>Thiên nhiên cung cấp cho con người đất, nước, không khí, khoáng sản, sinh vật. Con người tác động đến thiên nhiên theo hai hướng: tích cực (trồng rừng, cải tạo đất) và tiêu cực (chặt phá rừng, gây ô nhiễm, khai thác quá mức).</p>`,
      quiz: [{ q: 'Tác động tiêu cực của con người đến thiên nhiên là:', opts: ['Chặt phá rừng bừa bãi', 'Trồng cây gây rừng'], a: 0, keep: true, e: 'Chặt phá rừng.' }] },
    dl29: { theory: `<p><b>Phát triển bền vững</b>: đáp ứng nhu cầu hiện tại mà không làm ảnh hưởng đến thế hệ tương lai.</p><div class="note"><ul><li>Khai thác tài nguyên hợp lí, tiết kiệm.</li><li>Sử dụng năng lượng tái tạo.</li><li>Tái chế, giảm rác thải; bảo vệ rừng, biển, đa dạng sinh học.</li></ul></div>`,
      quiz: [{ q: 'Phát triển bền vững là:', opts: ['Đáp ứng nhu cầu hiện tại mà không ảnh hưởng thế hệ sau', 'Khai thác hết tài nguyên càng nhanh càng tốt'], a: 0, keep: true, e: 'Nghĩ đến thế hệ sau.' },
        { q: 'Việc làm thể hiện khai thác thông minh tài nguyên:', opts: ['Dùng năng lượng Mặt Trời', 'Đốt nhiều than đá'], a: 0, keep: true, e: 'Năng lượng tái tạo.' }] },
    dl30: { theory: `<p>Thực hành: tìm hiểu một ví dụ về mối quan hệ giữa con người và thiên nhiên ở địa phương (ví dụ: trồng lúa nhờ đất phù sa, ô nhiễm sông do rác thải), nêu tác động và đề xuất giải pháp.</p>`,
      quiz: [{ q: 'Khi tìm hiểu vấn đề môi trường ở địa phương, em nên:', opts: ['Quan sát, hỏi người dân, ghi chép, đề xuất giải pháp', 'Chỉ đoán mà không quan sát'], a: 0, keep: true, e: 'Thu thập thông tin thực tế.' }] },
  };
})();
