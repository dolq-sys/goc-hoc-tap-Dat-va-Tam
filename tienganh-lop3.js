/* =====================================================================
   TIẾNG ANH 3 — Global Success — 20 Units
   Mỗi Unit:  v  = từ vựng [tiếng Anh, nghĩa, (tên hình nếu khác)]
              g  = ngữ pháp / mẫu câu (HTML)
              pr = phát âm: hai nhóm âm, mỗi nhóm vài từ
              rd = đọc hiểu: đoạn văn + câu hỏi
              ls = nghe: hội thoại 2 người [người nói, câu] + câu hỏi
                   (file âm thanh: audio/lop3-u<số>.wav — chưa có file thì máy tự đọc)
              q  = bài tập ngữ pháp (website tự thêm câu hỏi từ vựng có hình)
   Đoạn đọc, hội thoại và câu hỏi do người soạn tự viết, bám theo chủ đề của sách.
   ===================================================================== */
(function () {
  const TF = ['Đúng', 'Sai'];
  const U = (n, title, o) => ({ id: 'u' + n, title: `Unit ${n}. ${title}`, en: Object.assign({ audio: `audio/lop3-u${n}.mp4` }, o), quiz: o.q });
  const ex = (en, vi) => `<p><button class="say" data-say="${en.replace(/"/g, '&quot;')}">${en}</button>${vi ? ` <span class="muted">${vi}</span>` : ''}</p>`;

  const units = [
    U(1, 'Hello', {
      v: [['hello', 'xin chào'], ['hi', 'chào'], ['goodbye', 'tạm biệt'], ['bye', 'tạm biệt'], ['nice to meet you', 'rất vui được gặp bạn'], ['fine', 'khoẻ'], ['thank you', 'cảm ơn']],
      g: `<div class="vd">${ex("Hello, I'm Mai.", 'Xin chào, mình là Mai.')}${ex('Hi, Mai. I\'m Nam.', 'Chào Mai. Mình là Nam.')}</div>
        <div class="vd">${ex('How are you?', 'Bạn có khoẻ không?')}${ex("I'm fine, thank you.", 'Mình khoẻ, cảm ơn bạn.')}</div>
        <div class="note"><p><b>I'm</b> = I am (mình là / tôi là).</p></div>`,
      pr: { sounds: [['/h/', ['hello', 'hi', 'hat']], ['/b/', ['bye', 'book', 'ball']]] },
      rd: { t: `<p>Hello! I'm Mai. I'm a pupil. This is my friend Nam. Nam says, “Hi, Mai. How are you?” I say, “I'm fine, thank you.” Then we go to class. At the end of the day, we say, “Goodbye!”</p>`,
        q: [{ q: 'Mai là học sinh.', opts: TF, a: 0, keep: true, e: '“I\'m a pupil.”' }, { q: 'Bạn của Mai tên là gì?', opts: ['Nam', 'Ben', 'Linh'], a: 0, e: '“This is my friend Nam.”' }, { q: 'Cuối ngày, hai bạn nói gì?', opts: ['Goodbye!', 'Hello!', 'Thank you!'], a: 0, e: 'Cuối ngày chào tạm biệt: Goodbye!' }] },
      ls: { s: [['Linh', "Hello, I'm Linh."], ['Ben', "Hi, Linh. I'm Ben."], ['Linh', 'Nice to meet you, Ben.'], ['Ben', 'Nice to meet you, too. How are you?'], ['Linh', "I'm fine, thank you. Goodbye, Ben!"], ['Ben', 'Bye, Linh!']],
        q: [{ q: 'Bạn trai tên là gì?', opts: ['Ben', 'Nam', 'Linh'], a: 0, e: "“Hi, Linh. I'm Ben.”" }, { q: 'Linh có khoẻ không?', opts: ['Linh khoẻ', 'Linh bị ốm'], a: 0, keep: true, e: "“I'm fine, thank you.”" }, { q: 'Câu cuối cùng Ben nói là:', opts: ['Bye, Linh!', 'Hello!', 'How are you?'], a: 0, e: 'Ben chào tạm biệt.' }] },
      q: [{ q: 'Chọn từ đúng: “Hello, I ___ Linh.”', opts: ['am', 'is', 'are'], a: 0, keep: true, e: 'I am = I\'m.' }, { q: '“How are you?” – Em trả lời:', opts: ["I'm fine, thank you.", "I'm Nam.", 'Goodbye.'], a: 0, e: 'Hỏi thăm sức khoẻ.' }, { q: 'Khi chia tay bạn, em nói:', opts: ['Goodbye!', 'Hello!', 'Nice to meet you!'], a: 0, e: 'Goodbye – tạm biệt.' }],
    }),
    U(2, 'Our names', {
      v: [['one', '1'], ['two', '2'], ['three', '3'], ['four', '4'], ['five', '5'], ['six', '6'], ['seven', '7'], ['eight', '8'], ['nine', '9'], ['ten', '10']],
      g: `<div class="vd">${ex("What's your name?", 'Bạn tên là gì?')}${ex("My name's Linh.", 'Mình tên là Linh.')}</div><div class="vd">${ex('How old are you?', 'Bạn bao nhiêu tuổi?')}${ex("I'm eight years old.", 'Mình tám tuổi.')}</div>`,
      pr: { sounds: [['/n/', ['name', 'nine', 'ten']], ['/m/', ['my', 'Mai', 'mum']]] },
      rd: { t: `<p>My name's Minh. I'm eight years old. I have a new friend. Her name's Lucy. She is nine years old. We like numbers. We count from one to ten together: one, two, three, four, five, six, seven, eight, nine, ten!</p>`,
        q: [{ q: 'Minh bao nhiêu tuổi?', opts: ['8', '9', '10'], a: 0, e: "“I'm eight years old.”" }, { q: 'Bạn mới của Minh tên là gì?', opts: ['Lucy', 'Linh', 'Mai'], a: 0, e: "“Her name's Lucy.”" }, { q: 'Lucy 10 tuổi.', opts: TF, a: 1, keep: true, e: 'Lucy 9 tuổi (nine).' }] },
      ls: { s: [['Nam', "Hi! What's your name?"], ['Lucy', "My name's Lucy."], ['Nam', 'How do you spell your name?'], ['Lucy', 'L, U, C, Y.'], ['Nam', 'How old are you, Lucy?'], ['Lucy', "I'm nine years old. And you?"], ['Nam', "I'm eight."]],
        q: [{ q: 'Lucy bao nhiêu tuổi?', opts: ['9', '8', '7'], a: 0, e: "“I'm nine years old.”" }, { q: 'Nam bao nhiêu tuổi?', opts: ['8', '9', '10'], a: 0, e: "“I'm eight.”" }, { q: 'Tên “Lucy” đánh vần là:', opts: ['L-U-C-Y', 'L-U-S-Y', 'L-O-C-Y'], a: 0, e: 'L, U, C, Y.' }] },
      q: [{ q: '“How old are you?” – Em trả lời:', opts: ["I'm eight years old.", "My name's Minh.", "I'm fine."], a: 0, e: 'Hỏi tuổi.' }, { q: '“What\'s your name?” – Em trả lời:', opts: ["My name's Minh.", "I'm eight.", 'Hello.'], a: 0, e: 'Hỏi tên.' }, { q: 'Viết số 9 bằng tiếng Anh:', a: ['nine'], e: '9 = nine.' }],
    }),
    U(3, 'Our friends', {
      v: [['friend', 'bạn'], ['boy', 'bạn trai'], ['girl', 'bạn gái'], ['teacher', 'giáo viên']],
      g: `<div class="vd">${ex('This is Mai.', 'Đây là Mai. (ở gần)')}${ex('That is Ben.', 'Kia là Ben. (ở xa)')}</div><div class="vd">${ex('Is this Nam?', 'Đây có phải Nam không?')}${ex('Yes, it is.', 'Đúng vậy.')}${ex("No, it isn't.", 'Không phải.')}</div>
        <div class="note"><p><b>this</b>: người/vật ở gần · <b>that</b>: người/vật ở xa.</p></div>`,
      pr: { sounds: [['/ð/', ['this', 'that', 'they']], ['/t/', ['ten', 'two', 'teacher']]] },
      rd: { t: `<p>Look at the photo. This is my class. This is my friend Mai. She is a girl. That is Ben. He is a boy. And that is Miss Hoa. She is our teacher. We are good friends.</p>`,
        q: [{ q: 'Mai là bạn gái.', opts: TF, a: 0, keep: true, e: '“She is a girl.”' }, { q: 'Miss Hoa là ai?', opts: ['Giáo viên', 'Bạn của Ben', 'Mẹ của Mai'], a: 0, e: '“She is our teacher.”' }, { q: 'Ben là bạn gái.', opts: TF, a: 1, keep: true, e: 'Ben là bạn trai (a boy).' }] },
      ls: { s: [['Mai', 'Hi, Nam. Who is that?'], ['Nam', "That's my friend Ben."], ['Mai', 'Is that Lucy?'], ['Nam', "No, it isn't. That's Linh."], ['Mai', 'And is this your teacher?'], ['Nam', 'Yes, it is. This is Mr Long.']],
        q: [{ q: 'Bạn của Nam tên là gì?', opts: ['Ben', 'Minh', 'Tom'], a: 0, e: "“That's my friend Ben.”" }, { q: 'Bạn gái ở xa có phải Lucy không?', opts: ['Không, đó là Linh', 'Đúng là Lucy'], a: 0, keep: true, e: "“No, it isn't. That's Linh.”" }, { q: 'Thầy giáo tên là:', opts: ['Mr Long', 'Mr Nam', 'Mr Ben'], a: 0, e: '“This is Mr Long.”' }] },
      q: [{ q: 'Bạn ở gần em. Em nói: “___ is Mai.”', opts: ['This', 'That'], a: 0, keep: true, e: 'Ở gần → This.' }, { q: '“Is that Ben?” – Không phải. Em trả lời:', opts: ["No, it isn't.", 'Yes, it is.'], a: 0, keep: true, e: 'Phủ định → No, it isn\'t.' }, { q: 'Chọn từ đúng: “That ___ my friend.”', opts: ['is', 'am', 'are'], a: 0, keep: true, e: 'That is.' }],
    }),
    U(4, 'Our bodies', {
      v: [['face', 'khuôn mặt'], ['eye', 'mắt'], ['ear', 'tai'], ['nose', 'mũi'], ['mouth', 'miệng'], ['hand', 'bàn tay'], ['hair', 'tóc']],
      g: `<div class="vd">${ex("What's this?", 'Đây là cái gì?')}${ex("It's my nose.", 'Đó là mũi của mình.')}</div><div class="vd">${ex('Touch your ears!', 'Chạm vào tai!')}${ex('Open your mouth!', 'Há miệng ra!')}${ex('Close your eyes!', 'Nhắm mắt lại!')}</div>`,
      pr: { sounds: [['/f/', ['face', 'five', 'fish']], ['/h/', ['hand', 'hair', 'hello']]] },
      rd: { t: `<p>This is my robot, Tim. Tim has a big face. He has two blue eyes and two small ears. His nose is red. His mouth is big. Tim has two hands, but he has no hair!</p>`,
        q: [{ q: 'Mắt của Tim màu gì?', opts: ['Xanh dương', 'Đỏ', 'Đen'], a: 0, e: '“two blue eyes”' }, { q: 'Mũi của Tim màu đỏ.', opts: TF, a: 0, keep: true, e: '“His nose is red.”' }, { q: 'Tim có tóc.', opts: TF, a: 1, keep: true, e: '“he has no hair”' }] },
      ls: { s: [['Teacher', "Let's play a game. Touch your nose!"], ['Ben', "OK. This is my nose."], ['Teacher', 'Good! Now touch your ears.'], ['Ben', 'My ears!'], ['Teacher', 'Open your mouth.'], ['Ben', 'Ahhh!'], ['Teacher', 'Well done, Ben!']],
        q: [{ q: 'Đầu tiên cô bảo chạm vào đâu?', opts: ['Mũi', 'Tai', 'Miệng'], a: 0, e: '“Touch your nose!”' }, { q: 'Sau đó cô bảo chạm vào:', opts: ['Tai', 'Mắt', 'Tay'], a: 0, e: '“Touch your ears.”' }, { q: 'Cuối cùng cô bảo:', opts: ['Há miệng ra', 'Nhắm mắt lại', 'Giơ tay lên'], a: 0, e: '“Open your mouth.”' }] },
      q: [{ q: '“What\'s this?” (chỉ vào mắt)', opts: ["It's my eye.", "It's my ear.", "It's my hand."], a: 0, e: 'eye – mắt.' }, { q: 'Chọn từ đúng: “Touch your ___!” (chạm vào tai)', opts: ['ears', 'eyes', 'hands'], a: 0, e: 'ears – tai.' }, { q: 'Viết từ tiếng Anh nghĩa là “bàn tay”:', a: ['hand'], e: 'hand.' }],
    }),
    U(5, 'My hobbies', {
      v: [['singing', 'hát'], ['dancing', 'nhảy múa'], ['drawing', 'vẽ'], ['painting', 'tô màu'], ['running', 'chạy'], ['walking', 'đi bộ'], ['swimming', 'bơi'], ['cooking', 'nấu ăn']],
      g: `<div class="vd">${ex("What's your hobby?", 'Sở thích của bạn là gì?')}${ex("It's swimming.", 'Đó là bơi.')}${ex('My hobby is drawing.', 'Sở thích của mình là vẽ.')}</div>`,
      pr: { sounds: [['/s/', ['singing', 'swimming', 'six']], ['/r/', ['running', 'red', 'rabbit']]] },
      rd: { t: `<p>Hi, I'm Lucy. I have many hobbies. My favourite hobby is dancing. I dance every evening. My brother Tom likes swimming. He swims at the weekend. My mum's hobby is cooking. She cooks very well!</p>`,
        q: [{ q: 'Sở thích yêu thích nhất của Lucy là:', opts: ['Nhảy múa', 'Bơi', 'Nấu ăn'], a: 0, e: '“My favourite hobby is dancing.”' }, { q: 'Anh Tom thích:', opts: ['Bơi', 'Vẽ', 'Hát'], a: 0, e: '“Tom likes swimming.”' }, { q: 'Mẹ của Lucy thích nấu ăn.', opts: TF, a: 0, keep: true, e: "“My mum's hobby is cooking.”" }] },
      ls: { s: [['Mai', "What's your hobby, Nam?"], ['Nam', "It's drawing. I draw animals."], ['Mai', 'Cool!'], ['Nam', "What's your hobby, Mai?"], ['Mai', "It's singing."], ['Nam', 'Can you sing a song for me?'], ['Mai', 'Sure!']],
        q: [{ q: 'Sở thích của Nam là:', opts: ['Vẽ', 'Hát', 'Bơi'], a: 0, e: '“It\'s drawing.”' }, { q: 'Nam thích vẽ:', opts: ['Con vật', 'Ngôi nhà', 'Ô tô'], a: 0, e: '“I draw animals.”' }, { q: 'Sở thích của Mai là:', opts: ['Hát', 'Nhảy', 'Nấu ăn'], a: 0, e: '“It\'s singing.”' }] },
      q: [{ q: '“What\'s your hobby?” – Em trả lời:', opts: ["It's singing.", "It's my nose.", "I'm eight."], a: 0, e: 'Hỏi sở thích.' }, { q: 'Chọn từ đúng: “My hobby ___ swimming.”', opts: ['is', 'am', 'are'], a: 0, keep: true, e: 'My hobby is …' }, { q: 'Viết từ tiếng Anh nghĩa là “nấu ăn”:', a: ['cooking'], e: 'cooking.' }],
    }),
    U(6, 'Our school', {
      v: [['classroom', 'lớp học'], ['library', 'thư viện'], ['playground', 'sân chơi'], ['gym', 'phòng thể dục'], ['computer room', 'phòng máy tính'], ['music room', 'phòng âm nhạc'], ['art room', 'phòng mĩ thuật']],
      g: `<div class="vd">${ex('Is this our library?', 'Đây có phải thư viện của chúng ta không?')}${ex('Yes, it is.', 'Đúng vậy.')}${ex("No, it isn't.", 'Không phải.')}</div><div class="vd">${ex("Let's go to the gym!", 'Chúng mình cùng đến phòng thể dục nhé!')}${ex('OK, let\'s go.', 'Được, đi thôi.')}</div>`,
      pr: { sounds: [['/l/', ['library', "let's", 'look']], ['/g/', ['go', 'girl', 'garden']]] },
      rd: { t: `<p>This is my school. It is big and beautiful. My classroom is on the first floor. The library is next to my classroom. I read books there. The music room is big. We sing songs there. At break time, we play in the playground.</p>`,
        q: [{ q: 'Thư viện ở cạnh lớp học.', opts: TF, a: 0, keep: true, e: '“The library is next to my classroom.”' }, { q: 'Các bạn hát ở đâu?', opts: ['Phòng âm nhạc', 'Thư viện', 'Sân chơi'], a: 0, e: '“The music room… We sing songs there.”' }, { q: 'Giờ ra chơi, các bạn chơi ở:', opts: ['Sân chơi', 'Phòng máy tính', 'Lớp học'], a: 0, e: '“we play in the playground”' }] },
      ls: { s: [['Nam', 'Is this our computer room?'], ['Mai', "No, it isn't. It's the art room."], ['Nam', 'Where is the computer room?'], ['Mai', "It's over there."], ['Nam', "Let's go to the gym after class."], ['Mai', "OK, let's go!"]],
        q: [{ q: 'Phòng hai bạn đang đứng là:', opts: ['Phòng mĩ thuật', 'Phòng máy tính', 'Thư viện'], a: 0, e: "“It's the art room.”" }, { q: 'Sau giờ học, hai bạn đi đến:', opts: ['Phòng thể dục', 'Thư viện', 'Phòng âm nhạc'], a: 0, e: '“Let\'s go to the gym”' }, { q: 'Mai có đồng ý đi không?', opts: ['Có', 'Không'], a: 0, keep: true, e: '“OK, let\'s go!”' }] },
      q: [{ q: '“Is this our library?” – Đúng vậy. Em trả lời:', opts: ['Yes, it is.', "No, it isn't."], a: 0, keep: true, e: 'Đồng ý → Yes, it is.' }, { q: 'Chọn từ đúng: “Let\'s ___ to the playground.”', opts: ['go', 'goes', 'going'], a: 0, keep: true, e: "Let's + động từ nguyên thể." }, { q: '“library” nghĩa là:', opts: ['thư viện', 'sân chơi', 'lớp học'], a: 0, e: 'library – thư viện.' }],
    }),
    U(7, 'Classroom instructions', {
      v: [['stand up', 'đứng lên'], ['sit down', 'ngồi xuống'], ['open your book', 'mở sách ra'], ['close your book', 'gấp sách lại'], ['come here', 'lại đây'], ['go out', 'đi ra ngoài'], ['raise your hand', 'giơ tay lên'], ['be quiet', 'giữ trật tự']],
      g: `<div class="vd">${ex('Stand up, please!', 'Mời đứng lên!')}${ex("Don't talk!", 'Đừng nói chuyện!')}</div><div class="vd">${ex('May I go out?', 'Em có thể ra ngoài không ạ?')}${ex('Yes, you can.', 'Được, em đi đi.')}${ex("No, you can't.", 'Không, em không được ra.')}</div>
        <div class="note"><p>Câu mệnh lệnh bắt đầu bằng động từ. Muốn cấm, thêm <b>Don't</b> ở đầu câu.</p></div>`,
      pr: { sounds: [['/k/', ['come', 'close', 'cat']], ['/s/', ['sit', 'stand', 'six']]] },
      rd: { t: `<p>In our English class, Miss Hoa says, “Good morning, class! Sit down, please.” We sit down. Then she says, “Open your books.” We open our books. When I want to talk, I raise my hand. When the class is noisy, Miss Hoa says, “Be quiet, please!”</p>`,
        q: [{ q: 'Cô Hoa bảo cả lớp làm gì đầu tiên?', opts: ['Ngồi xuống', 'Đứng lên', 'Gấp sách'], a: 0, e: '“Sit down, please.”' }, { q: 'Khi muốn nói, bạn nhỏ làm gì?', opts: ['Giơ tay', 'Đứng lên', 'Ra ngoài'], a: 0, e: '“I raise my hand.”' }, { q: 'Khi lớp ồn, cô nói:', opts: ['Be quiet, please!', 'Come here!', 'Go out!'], a: 0, e: 'Be quiet – giữ trật tự.' }] },
      ls: { s: [['Teacher', 'Good morning, class. Stand up, please.'], ['Class', 'Good morning, teacher.'], ['Teacher', 'Sit down, please. Open your books at page ten.'], ['Class', 'Yes, teacher.'], ['Teacher', 'Nam, come here, please.'], ['Class', 'May I go out, teacher?'], ['Teacher', 'Yes, you can.']],
        q: [{ q: 'Cô bảo mở sách ở trang mấy?', opts: ['10', '2', '12'], a: 0, e: '“page ten”' }, { q: 'Cô gọi bạn nào lên?', opts: ['Nam', 'Mai', 'Ben'], a: 0, e: '“Nam, come here, please.”' }, { q: 'Cô có cho học sinh ra ngoài không?', opts: ['Có', 'Không'], a: 0, keep: true, e: '“Yes, you can.”' }] },
      q: [{ q: '“May I go out?” – Được. Cô trả lời:', opts: ['Yes, you can.', "No, you can't."], a: 0, keep: true, e: 'Đồng ý.' }, { q: 'Chọn câu cấm nói chuyện:', opts: ["Don't talk!", 'Talk!', 'Do talk!'], a: 0, e: "Don't + động từ." }, { q: '“close your book” nghĩa là:', opts: ['gấp sách lại', 'mở sách ra', 'đứng lên'], a: 0, e: 'close – đóng, gấp lại.' }],
    }),
    U(8, 'My school things', {
      v: [['book', 'quyển sách'], ['pen', 'bút mực'], ['pencil', 'bút chì'], ['ruler', 'thước kẻ'], ['eraser', 'cục tẩy'], ['school bag', 'cặp sách'], ['pencil case', 'hộp bút'], ['notebook', 'quyển vở']],
      g: `<div class="vd">${ex('I have a pen.', 'Mình có một cái bút.')}${ex('I have an eraser.', 'Mình có một cục tẩy.')}</div><div class="vd">${ex('Is this your ruler?', 'Đây có phải thước của bạn không?')}${ex('Yes, it is.')}${ex("No, it isn't.")}</div>
        <div class="note"><p>Dùng <b>an</b> trước từ bắt đầu bằng nguyên âm a, e, i, o, u: <i>an eraser</i>. Các từ khác dùng <b>a</b>: <i>a pen</i>.</p></div>`,
      pr: { sounds: [['/p/', ['pen', 'pencil', 'pink']], ['/b/', ['book', 'bag', 'ball']]] },
      rd: { t: `<p>This is my school bag. It's blue. In my school bag, I have two books and three notebooks. I have a pencil case, too. In my pencil case, there is a pen, a pencil, a ruler and an eraser. My eraser is pink.</p>`,
        q: [{ q: 'Cặp sách màu gì?', opts: ['Xanh dương', 'Hồng', 'Đỏ'], a: 0, e: "“It's blue.”" }, { q: 'Bạn nhỏ có mấy quyển vở?', opts: ['3', '2', '1'], a: 0, e: '“three notebooks”' }, { q: 'Cục tẩy màu hồng.', opts: TF, a: 0, keep: true, e: '“My eraser is pink.”' }] },
      ls: { s: [['Ben', 'Is this your pencil, Mai?'], ['Mai', "No, it isn't. My pencil is yellow."], ['Ben', 'Is this your ruler?'], ['Mai', 'Yes, it is. Thank you, Ben.'], ['Ben', "You're welcome."]],
        q: [{ q: 'Bút chì của Mai màu gì?', opts: ['Vàng', 'Xanh', 'Đỏ'], a: 0, e: '“My pencil is yellow.”' }, { q: 'Đồ vật nào là của Mai?', opts: ['Thước kẻ', 'Bút chì', 'Cục tẩy'], a: 0, e: '“Is this your ruler? – Yes, it is.”' }] },
      q: [{ q: 'Chọn từ đúng: “I have ___ eraser.”', opts: ['an', 'a'], a: 0, keep: true, e: 'eraser bắt đầu bằng nguyên âm e → an.' }, { q: 'Chọn từ đúng: “I have ___ pen.”', opts: ['a', 'an'], a: 0, keep: true, e: 'pen bắt đầu bằng phụ âm → a.' }, { q: 'Viết từ tiếng Anh nghĩa là “thước kẻ”:', a: ['ruler'], e: 'ruler.' }],
    }),
    U(9, 'Colours', {
      v: [['red', 'đỏ'], ['yellow', 'vàng'], ['green', 'xanh lá'], ['blue', 'xanh dương'], ['black', 'đen'], ['white', 'trắng'], ['brown', 'nâu'], ['orange', 'cam'], ['pink', 'hồng']],
      g: `<div class="vd">${ex('What colour is it?', 'Nó màu gì?')}${ex("It's red.", 'Nó màu đỏ.')}</div><div class="vd">${ex('What colour are they?', 'Chúng màu gì?')}${ex("They're green.", 'Chúng màu xanh lá.')}</div>
        <div class="note"><p>Một vật: <b>is it / It's</b> · Nhiều vật: <b>are they / They're</b>.</p></div>`,
      pr: { sounds: [['/r/', ['red', 'ruler', 'rabbit']], ['/j/', ['yellow', 'yes', 'you']]] },
      rd: { t: `<p>I love colours! My bag is orange. My pencils are red, blue and green. My notebook is white. My favourite colour is pink. My brother's favourite colour is black.</p>`,
        q: [{ q: 'Cặp sách màu gì?', opts: ['Cam', 'Hồng', 'Đen'], a: 0, e: '“My bag is orange.”' }, { q: 'Màu yêu thích của bạn nhỏ là:', opts: ['Hồng', 'Đen', 'Trắng'], a: 0, e: '“My favourite colour is pink.”' }, { q: 'Màu yêu thích của anh/em trai là đen.', opts: TF, a: 0, keep: true, e: "“My brother's favourite colour is black.”" }] },
      ls: { s: [['Mai', 'What colour is your school bag, Ben?'], ['Ben', "It's blue."], ['Mai', 'What colour are your pens?'], ['Ben', "They're black."], ['Mai', 'My pens are green.']],
        q: [{ q: 'Cặp của Ben màu gì?', opts: ['Xanh dương', 'Đen', 'Xanh lá'], a: 0, e: "“It's blue.”" }, { q: 'Bút của Ben màu gì?', opts: ['Đen', 'Xanh lá', 'Đỏ'], a: 0, e: "“They're black.”" }, { q: 'Bút của Mai màu xanh lá.', opts: TF, a: 0, keep: true, e: '“My pens are green.”' }] },
      q: [{ q: '“What colour are they?” (hai quả cam)', opts: ["They're orange.", "It's orange."], a: 0, keep: true, e: 'Nhiều vật → They\'re.' }, { q: '“What colour is it?” (quả chuối)', opts: ["It's yellow.", "They're yellow."], a: 0, keep: true, e: 'Một vật → It\'s.' }, { q: 'Viết từ tiếng Anh nghĩa là “màu đỏ”:', a: ['red'], e: 'red.' }],
    }),
    U(10, 'Break time activities', {
      v: [['football', 'bóng đá'], ['basketball', 'bóng rổ'], ['badminton', 'cầu lông'], ['volleyball', 'bóng chuyền'], ['chess', 'cờ vua'], ['table tennis', 'bóng bàn'], ['hide-and-seek', 'trốn tìm'], ['skipping', 'nhảy dây']],
      g: `<div class="vd">${ex('What do you do at break time?', 'Giờ ra chơi bạn làm gì?')}${ex('I play football.', 'Mình chơi bóng đá.')}${ex('I play chess.', 'Mình chơi cờ vua.')}</div><div class="vd">${ex('Do you like badminton?', 'Bạn có thích cầu lông không?')}${ex('Yes, I do.')}${ex("No, I don't.")}</div>`,
      pr: { sounds: [['/b/', ['badminton', 'basketball', 'ball']], ['/tʃ/', ['chess', 'chair', 'chicken']]] },
      rd: { t: `<p>At break time, my friends and I have a lot of fun. Nam and Ben play football in the playground. Mai and Linh like skipping. I don't like football. I like chess. I play chess with my friend Minh in the classroom.</p>`,
        q: [{ q: 'Nam và Ben chơi gì?', opts: ['Bóng đá', 'Cờ vua', 'Nhảy dây'], a: 0, e: '“Nam and Ben play football”' }, { q: 'Mai và Linh thích:', opts: ['Nhảy dây', 'Bóng rổ', 'Cầu lông'], a: 0, e: '“Mai and Linh like skipping.”' }, { q: 'Bạn nhỏ chơi cờ vua ở sân chơi.', opts: TF, a: 1, keep: true, e: 'Chơi cờ vua trong lớp học (in the classroom).' }] },
      ls: { s: [['Linh', 'What do you do at break time, Nam?'], ['Nam', 'I play basketball.'], ['Linh', 'Do you like table tennis?'], ['Nam', "No, I don't. What about you?"], ['Linh', 'I play hide-and-seek with my friends.']],
        q: [{ q: 'Giờ ra chơi Nam chơi:', opts: ['Bóng rổ', 'Bóng bàn', 'Trốn tìm'], a: 0, e: '“I play basketball.”' }, { q: 'Nam có thích bóng bàn không?', opts: ['Không', 'Có'], a: 0, keep: true, e: "“No, I don't.”" }, { q: 'Linh chơi:', opts: ['Trốn tìm', 'Cờ vua', 'Bóng đá'], a: 0, e: '“I play hide-and-seek”' }] },
      q: [{ q: '“Do you like chess?” – Có. Em trả lời:', opts: ['Yes, I do.', "No, I don't."], a: 0, keep: true, e: 'Có → Yes, I do.' }, { q: 'Chọn từ đúng: “I ___ football at break time.”', opts: ['play', 'plays', 'playing'], a: 0, keep: true, e: 'I + play.' }, { q: '“badminton” nghĩa là:', opts: ['cầu lông', 'bóng rổ', 'bóng chuyền'], a: 0, e: 'badminton – cầu lông.' }],
    }),
    U(11, 'My family', {
      v: [['father', 'bố'], ['mother', 'mẹ'], ['brother', 'anh/em trai'], ['sister', 'chị/em gái'], ['grandfather', 'ông'], ['grandmother', 'bà'], ['family', 'gia đình']],
      g: `<div class="vd">${ex("Who's this?", 'Đây là ai?')}${ex("It's my mother.", 'Đó là mẹ mình.')}</div><div class="vd">${ex('How old is he?', 'Anh ấy bao nhiêu tuổi?')}${ex("He's twelve.", 'Anh ấy mười hai tuổi.')}${ex('How old is she?')}${ex("She's six.")}</div>
        <div class="note"><p><b>he</b>: dùng cho con trai, đàn ông · <b>she</b>: dùng cho con gái, phụ nữ.</p></div>`,
      pr: { sounds: [['/m/', ['mother', 'my', 'mum']], ['/f/', ['father', 'family', 'five']]] },
      rd: { t: `<p>This is a photo of my family. There are five people in my family: my grandmother, my father, my mother, my brother and me. My brother is twelve years old. He likes football. My grandmother is seventy. She likes cooking.</p>`,
        q: [{ q: 'Gia đình bạn nhỏ có mấy người?', opts: ['5', '4', '6'], a: 0, e: '“There are five people”' }, { q: 'Anh trai bao nhiêu tuổi?', opts: ['12', '7', '10'], a: 0, e: '“twelve years old”' }, { q: 'Bà thích nấu ăn.', opts: TF, a: 0, keep: true, e: '“She likes cooking.”' }] },
      ls: { s: [['Ben', "Who's this, Mai?"], ['Mai', "It's my sister, Hoa."], ['Ben', 'How old is she?'], ['Mai', "She's six."], ['Ben', 'And who is that?'], ['Mai', "That's my grandfather."]],
        q: [{ q: 'Chị/em gái của Mai tên là:', opts: ['Hoa', 'Linh', 'Lan'], a: 0, e: "“It's my sister, Hoa.”" }, { q: 'Hoa bao nhiêu tuổi?', opts: ['6', '7', '8'], a: 0, e: "“She's six.”" }, { q: 'Người ở xa là:', opts: ['Ông', 'Bố', 'Anh trai'], a: 0, e: "“That's my grandfather.”" }] },
      q: [{ q: 'Chọn từ đúng: “How old is ___?” (hỏi về mẹ)', opts: ['she', 'he'], a: 0, keep: true, e: 'Mẹ là nữ → she.' }, { q: '“Who\'s this?” – (ảnh bố em)', opts: ["It's my father.", "He's twelve.", "It's my book."], a: 0, e: 'Hỏi ai → It\'s my …' }, { q: 'Viết từ tiếng Anh nghĩa là “bà”:', a: ['grandmother', 'grandma'], e: 'grandmother.' }],
    }),
    U(12, 'Jobs', {
      v: [['doctor', 'bác sĩ'], ['nurse', 'y tá'], ['teacher', 'giáo viên'], ['farmer', 'nông dân'], ['cook', 'đầu bếp'], ['driver', 'tài xế'], ['worker', 'công nhân'], ['singer', 'ca sĩ']],
      g: `<div class="vd">${ex("What's his job?", 'Công việc của ông ấy là gì?')}${ex("He's a doctor.", 'Ông ấy là bác sĩ.')}</div><div class="vd">${ex("What's her job?")}${ex("She's a teacher.")}</div><div class="note"><p><b>his</b>: của anh ấy/ông ấy · <b>her</b>: của cô ấy/bà ấy.</p></div>`,
      pr: { sounds: [['/d/', ['doctor', 'driver', 'dog']], ['/t/', ['teacher', 'tiger', 'ten']]] },
      rd: { t: `<p>My father is a doctor. He works in a big hospital. My mother is a teacher. She teaches English at a primary school. My uncle is a farmer. He grows rice. I want to be a singer in the future!</p>`,
        q: [{ q: 'Bố của bạn nhỏ làm nghề gì?', opts: ['Bác sĩ', 'Giáo viên', 'Nông dân'], a: 0, e: '“My father is a doctor.”' }, { q: 'Mẹ dạy môn:', opts: ['Tiếng Anh', 'Toán', 'Âm nhạc'], a: 0, e: '“She teaches English”' }, { q: 'Bạn nhỏ muốn trở thành:', opts: ['Ca sĩ', 'Bác sĩ', 'Tài xế'], a: 0, e: '“I want to be a singer”' }] },
      ls: { s: [['Nam', "What's your father's job, Lucy?"], ['Lucy', "He's a driver."], ['Nam', 'And your mother?'], ['Lucy', "She's a nurse."], ['Nam', 'My mother is a cook.']],
        q: [{ q: 'Bố của Lucy làm nghề:', opts: ['Tài xế', 'Y tá', 'Đầu bếp'], a: 0, e: "“He's a driver.”" }, { q: 'Mẹ của Lucy là y tá.', opts: TF, a: 0, keep: true, e: "“She's a nurse.”" }, { q: 'Mẹ của Nam làm nghề:', opts: ['Đầu bếp', 'Bác sĩ', 'Công nhân'], a: 0, e: '“My mother is a cook.”' }] },
      q: [{ q: '“What\'s her job?” – Em trả lời:', opts: ["She's a nurse.", "He's a nurse.", "It's a nurse."], a: 0, e: 'her → She\'s.' }, { q: 'Chọn từ đúng: “What\'s ___ job?” (hỏi về bố)', opts: ['his', 'her'], a: 0, keep: true, e: 'Bố → his.' }, { q: '“farmer” nghĩa là:', opts: ['nông dân', 'đầu bếp', 'công nhân'], a: 0, e: 'farmer – nông dân.' }],
    }),
    U(13, 'My house', {
      v: [['house', 'ngôi nhà'], ['living room', 'phòng khách'], ['kitchen', 'nhà bếp'], ['bedroom', 'phòng ngủ'], ['bathroom', 'phòng tắm'], ['garden', 'khu vườn']],
      g: `<div class="vd">${ex("Where's the cat?", 'Con mèo ở đâu?')}${ex("It's in the kitchen.", 'Nó ở trong bếp.')}</div><div class="vd">${ex('There is a garden.', 'Có một khu vườn.')}${ex('There are two bedrooms.', 'Có hai phòng ngủ.')}</div>`,
      pr: { sounds: [['/h/', ['house', 'here', 'hat']], ['/k/', ['kitchen', 'cat', 'cook']]] },
      rd: { t: `<p>This is my house. It is small but nice. There is a living room, a kitchen, two bedrooms and a bathroom. There is a big garden, too. My grandmother grows flowers in the garden. I like my bedroom best.</p>`,
        q: [{ q: 'Nhà có mấy phòng ngủ?', opts: ['2', '1', '3'], a: 0, e: '“two bedrooms”' }, { q: 'Bà trồng hoa ở:', opts: ['Khu vườn', 'Phòng khách', 'Nhà bếp'], a: 0, e: '“grows flowers in the garden”' }, { q: 'Ngôi nhà to.', opts: TF, a: 1, keep: true, e: '“It is small but nice.”' }] },
      ls: { s: [['Mum', 'Where are you, Nam?'], ['Nam', "I'm in my bedroom, Mum."], ['Mum', "Where's your sister?"], ['Nam', "She's in the garden."], ['Mum', 'Come to the kitchen. Dinner is ready!']],
        q: [{ q: 'Nam đang ở đâu?', opts: ['Phòng ngủ', 'Nhà bếp', 'Khu vườn'], a: 0, e: "“I'm in my bedroom”" }, { q: 'Chị/em gái của Nam ở đâu?', opts: ['Khu vườn', 'Phòng tắm', 'Phòng khách'], a: 0, e: "“She's in the garden.”" }, { q: 'Mẹ gọi Nam vào bếp để:', opts: ['Ăn tối', 'Nấu ăn', 'Rửa bát'], a: 0, e: '“Dinner is ready!”' }] },
      q: [{ q: 'Chọn từ đúng: “There ___ two bedrooms.”', opts: ['are', 'is'], a: 0, keep: true, e: 'Số nhiều → are.' }, { q: '“Where\'s the cat?” – (trong bếp)', opts: ["It's in the kitchen.", "It's a kitchen.", "They're in the kitchen."], a: 0, e: 'Chỉ vị trí → It\'s in the …' }, { q: '“bathroom” nghĩa là:', opts: ['phòng tắm', 'phòng ngủ', 'phòng khách'], a: 0, e: 'bathroom – phòng tắm.' }],
    }),
    U(14, 'My bedroom', {
      v: [['bed', 'giường'], ['chair', 'ghế'], ['desk', 'bàn học'], ['door', 'cửa ra vào'], ['window', 'cửa sổ'], ['lamp', 'đèn']],
      g: `<div class="vd">${ex("There's a bed in my room.", 'Có một cái giường trong phòng mình.')}${ex('There are two chairs.', 'Có hai cái ghế.')}</div><div class="vd">${ex('The desk is big.', 'Cái bàn to.')}${ex('The lamp is small.', 'Cái đèn nhỏ.')}${ex('The bed is new. The chair is old.')}</div>`,
      pr: { sounds: [['/d/', ['desk', 'door', 'dog']], ['/w/', ['window', 'water', 'white']]] },
      rd: { t: `<p>Welcome to my bedroom! There is a bed near the window. There is a desk and a chair. The desk is new and big. There is a lamp on the desk. There are two pictures on the wall. I love my room.</p>`,
        q: [{ q: 'Giường ở gần:', opts: ['Cửa sổ', 'Cửa ra vào', 'Bàn học'], a: 0, e: '“a bed near the window”' }, { q: 'Cái đèn ở trên bàn.', opts: TF, a: 0, keep: true, e: '“a lamp on the desk”' }, { q: 'Trên tường có mấy bức tranh?', opts: ['2', '1', '3'], a: 0, e: '“two pictures on the wall”' }] },
      ls: { s: [['Ben', 'Is your bedroom big, Mai?'], ['Mai', "No, it isn't. It's small."], ['Ben', 'Is there a desk?'], ['Mai', 'Yes, there is. And there are two chairs.'], ['Ben', 'What colour is the lamp?'], ['Mai', "It's pink."]],
        q: [{ q: 'Phòng của Mai:', opts: ['Nhỏ', 'To'], a: 0, keep: true, e: "“It's small.”" }, { q: 'Phòng có mấy cái ghế?', opts: ['2', '1', '3'], a: 0, e: '“two chairs”' }, { q: 'Đèn màu gì?', opts: ['Hồng', 'Xanh', 'Vàng'], a: 0, e: "“It's pink.”" }] },
      q: [{ q: 'Chọn từ đúng: “There ___ a lamp on the desk.”', opts: ['is', 'are'], a: 0, keep: true, e: 'Một vật → is.' }, { q: 'Trái nghĩa của “big” là:', opts: ['small', 'new', 'old'], a: 0, e: 'big – small.' }, { q: 'Viết từ tiếng Anh nghĩa là “cửa sổ”:', a: ['window'], e: 'window.' }],
    }),
    U(15, 'At the dining table', {
      v: [['bread', 'bánh mì'], ['rice', 'cơm'], ['milk', 'sữa'], ['water', 'nước'], ['juice', 'nước ép'], ['chicken', 'thịt gà'], ['fish', 'cá'], ['egg', 'trứng']],
      g: `<div class="vd">${ex('Would you like some milk?', 'Con có muốn uống sữa không?')}${ex('Yes, please.', 'Vâng, con có ạ.')}${ex('No, thanks.', 'Không, con cảm ơn.')}</div><div class="vd">${ex('What would you like to eat?', 'Con muốn ăn gì?')}${ex("I'd like some chicken.", 'Con muốn ăn thịt gà.')}</div>`,
      pr: { sounds: [['/dʒ/', ['juice', 'jam', 'jump']], ['/tʃ/', ['chicken', 'chips', 'chair']]] },
      rd: { t: `<p>It's dinner time. My family sits at the dining table. There is rice, fish, chicken and vegetables. My father likes fish. My mother likes vegetables. I'd like some chicken and an egg. After dinner, we drink orange juice.</p>`,
        q: [{ q: 'Bố thích ăn:', opts: ['Cá', 'Thịt gà', 'Rau'], a: 0, e: '“My father likes fish.”' }, { q: 'Bạn nhỏ muốn ăn:', opts: ['Thịt gà và trứng', 'Cá và cơm', 'Bánh mì'], a: 0, e: "“I'd like some chicken and an egg.”" }, { q: 'Sau bữa tối cả nhà uống:', opts: ['Nước cam', 'Sữa', 'Nước lọc'], a: 0, e: '“we drink orange juice”' }] },
      ls: { s: [['Mum', 'Would you like some bread, Ben?'], ['Ben', 'No, thanks, Mum.'], ['Mum', 'What would you like to eat?'], ['Ben', "I'd like some rice and fish, please."], ['Mum', 'Would you like some water?'], ['Ben', 'Yes, please.']],
        q: [{ q: 'Ben có ăn bánh mì không?', opts: ['Không', 'Có'], a: 0, keep: true, e: '“No, thanks.”' }, { q: 'Ben muốn ăn:', opts: ['Cơm và cá', 'Thịt gà', 'Trứng'], a: 0, e: '“rice and fish”' }, { q: 'Ben muốn uống:', opts: ['Nước', 'Sữa', 'Nước ép'], a: 0, e: '“some water? – Yes, please.”' }] },
      q: [{ q: '“Would you like some juice?” – Có. Em trả lời:', opts: ['Yes, please.', 'No, thanks.', 'Yes, I am.'], a: 0, e: 'Đồng ý lịch sự → Yes, please.' }, { q: 'Chọn từ đúng: “I\'d like ___ milk.”', opts: ['some', 'a', 'an'], a: 0, keep: true, e: 'milk không đếm được → some.' }, { q: '“rice” nghĩa là:', opts: ['cơm', 'bánh mì', 'trứng'], a: 0, e: 'rice – cơm, gạo.' }],
    }),
    U(16, 'My pets', {
      v: [['cat', 'con mèo'], ['dog', 'con chó'], ['bird', 'con chim'], ['fish', 'con cá'], ['rabbit', 'con thỏ'], ['parrot', 'con vẹt'], ['goldfish', 'cá vàng']],
      g: `<div class="vd">${ex('Do you have any pets?', 'Bạn có nuôi thú cưng không?')}${ex('Yes, I do.')}${ex("No, I don't.")}</div><div class="vd">${ex('I have two cats.', 'Mình có hai con mèo.')}${ex('How many dogs do you have?', 'Bạn có bao nhiêu con chó?')}</div><div class="note"><p>Hai con trở lên thì thêm <b>s</b>: cat → cats, dog → dogs. Riêng <b>fish</b> giữ nguyên.</p></div>`,
      pr: { sounds: [['/p/', ['pet', 'parrot', 'pen']], ['/f/', ['fish', 'goldfish', 'five']]] },
      rd: { t: `<p>I love animals. I have three pets: a dog, a cat and a parrot. My dog's name is Lucky. He is brown. My cat is white. My parrot is green and red. It can say “Hello!” Every morning, I give them food and water.</p>`,
        q: [{ q: 'Bạn nhỏ có mấy con vật nuôi?', opts: ['3', '2', '4'], a: 0, e: '“three pets”' }, { q: 'Con chó tên là gì?', opts: ['Lucky', 'Kitty', 'Polly'], a: 0, e: "“My dog's name is Lucky.”" }, { q: 'Con vẹt nói được “Hello!”.', opts: TF, a: 0, keep: true, e: '“It can say Hello!”' }] },
      ls: { s: [['Linh', 'Do you have any pets, Nam?'], ['Nam', 'Yes, I do. I have two rabbits.'], ['Linh', 'How many goldfish do you have?'], ['Nam', 'I have four goldfish.'], ['Linh', 'Wow! I have a bird.']],
        q: [{ q: 'Nam có mấy con thỏ?', opts: ['2', '3', '4'], a: 0, e: '“two rabbits”' }, { q: 'Nam có mấy con cá vàng?', opts: ['4', '2', '5'], a: 0, e: '“four goldfish”' }, { q: 'Linh có:', opts: ['Một con chim', 'Một con mèo', 'Một con chó'], a: 0, e: '“I have a bird.”' }] },
      q: [{ q: 'Chọn từ đúng: “I have three ___.”', opts: ['dogs', 'dog'], a: 0, keep: true, e: 'Ba con → dogs.' }, { q: '“Do you have any pets?” – Có. Em trả lời:', opts: ['Yes, I do.', "No, I don't.", 'Yes, I am.'], a: 0, e: 'Yes, I do.' }, { q: 'Viết từ tiếng Anh nghĩa là “con thỏ”:', a: ['rabbit'], e: 'rabbit.' }],
    }),
    U(17, 'Our toys', {
      v: [['car', 'ô tô'], ['doll', 'búp bê'], ['kite', 'diều'], ['ship', 'tàu thuỷ'], ['teddy bear', 'gấu bông'], ['robot', 'người máy'], ['ball', 'quả bóng'], ['plane', 'máy bay']],
      g: `<div class="vd">${ex('I have a kite.', 'Mình có một cái diều.')}${ex('He has a robot.', 'Bạn ấy có một con rô-bốt.')}${ex('They have three ships.', 'Các bạn ấy có ba con tàu.')}</div><div class="note"><p>I / You / We / They + <b>have</b> · He / She + <b>has</b>.</p></div>`,
      pr: { sounds: [['/k/', ['kite', 'car', 'cat']], ['/ʃ/', ['ship', 'she', 'shoe']]] },
      rd: { t: `<p>My friends and I have many toys. Mai has a doll and a teddy bear. Nam has a red car and a big robot. Ben has two planes. I have a kite. On Sunday, we fly my kite in the park.</p>`,
        q: [{ q: 'Mai có:', opts: ['Búp bê và gấu bông', 'Ô tô', 'Máy bay'], a: 0, e: '“Mai has a doll and a teddy bear.”' }, { q: 'Ben có mấy chiếc máy bay?', opts: ['2', '1', '3'], a: 0, e: '“two planes”' }, { q: 'Các bạn thả diều vào thứ Bảy.', opts: TF, a: 1, keep: true, e: 'Chủ nhật (Sunday).' }] },
      ls: { s: [['Mai', 'What toys do you have, Ben?'], ['Ben', 'I have a ship and a ball.'], ['Mai', 'What colour is your ship?'], ['Ben', "It's blue and white."], ['Mai', 'I have a teddy bear. It is brown.']],
        q: [{ q: 'Ben có:', opts: ['Tàu thuỷ và quả bóng', 'Diều', 'Rô-bốt'], a: 0, e: '“a ship and a ball”' }, { q: 'Tàu của Ben màu:', opts: ['Xanh và trắng', 'Đỏ', 'Nâu'], a: 0, e: '“blue and white”' }, { q: 'Gấu bông của Mai màu nâu.', opts: TF, a: 0, keep: true, e: '“It is brown.”' }] },
      q: [{ q: 'Chọn từ đúng: “She ___ a doll.”', opts: ['has', 'have'], a: 0, keep: true, e: 'She + has.' }, { q: 'Chọn từ đúng: “They ___ two kites.”', opts: ['have', 'has'], a: 0, keep: true, e: 'They + have.' }, { q: '“teddy bear” nghĩa là:', opts: ['gấu bông', 'búp bê', 'rô-bốt'], a: 0, e: 'teddy bear – gấu bông.' }],
    }),
    U(18, 'Playing and doing', {
      v: [['reading', 'đọc sách'], ['writing', 'viết'], ['drawing', 'vẽ'], ['singing', 'hát'], ['listening to music', 'nghe nhạc'], ['playing the piano', 'chơi đàn piano']],
      g: `<div class="vd">${ex('What are you doing?', 'Bạn đang làm gì?')}${ex("I'm reading.", 'Mình đang đọc sách.')}${ex("I'm listening to music.", 'Mình đang nghe nhạc.')}</div><div class="note"><p>Việc <b>đang</b> làm: I'm + động từ thêm <b>-ing</b>.</p></div>`,
      pr: { sounds: [['/r/', ['reading', 'red', 'run']], ['/ŋ/', ['singing', 'drawing', 'playing']]] },
      rd: { t: `<p>It's Sunday afternoon. My family is at home. My father is reading a newspaper. My mother is listening to music. My sister is playing the piano. And me? I'm drawing a picture of my family!</p>`,
        q: [{ q: 'Bố đang làm gì?', opts: ['Đọc báo', 'Nghe nhạc', 'Vẽ'], a: 0, e: '“reading a newspaper”' }, { q: 'Chị/em gái đang chơi đàn piano.', opts: TF, a: 0, keep: true, e: '“playing the piano”' }, { q: 'Bạn nhỏ đang vẽ gì?', opts: ['Gia đình mình', 'Con mèo', 'Ngôi nhà'], a: 0, e: '“a picture of my family”' }] },
      ls: { s: [['Nam', 'Hi, Lucy. What are you doing?'], ['Lucy', "I'm writing a letter."], ['Nam', 'And what is your brother doing?'], ['Lucy', "He's singing in his room."], ['Nam', "I'm listening to music."]],
        q: [{ q: 'Lucy đang:', opts: ['Viết thư', 'Đọc sách', 'Hát'], a: 0, e: "“I'm writing a letter.”" }, { q: 'Anh/em trai của Lucy đang:', opts: ['Hát', 'Vẽ', 'Chơi đàn'], a: 0, e: '“He\'s singing”' }, { q: 'Nam đang nghe nhạc.', opts: TF, a: 0, keep: true, e: "“I'm listening to music.”" }] },
      q: [{ q: '“What are you doing?” – Em trả lời:', opts: ["I'm reading.", 'I read.', 'I reading.'], a: 0, e: "I'm + V-ing." }, { q: 'Chọn từ đúng: “I\'m ___ a picture.”', opts: ['drawing', 'draw', 'draws'], a: 0, keep: true, e: 'Đang vẽ → drawing.' }, { q: '“writing” nghĩa là:', opts: ['viết', 'đọc', 'vẽ'], a: 0, e: 'writing – viết.' }],
    }),
    U(19, 'Outdoor activities', {
      v: [['cycling', 'đạp xe'], ['skating', 'trượt pa-tanh'], ['flying a kite', 'thả diều'], ['skipping', 'nhảy dây'], ['walking', 'đi bộ'], ['running', 'chạy']],
      g: `<div class="vd">${ex("What's he doing?", 'Bạn ấy (trai) đang làm gì?')}${ex("He's cycling.", 'Bạn ấy đang đạp xe.')}</div><div class="vd">${ex("What's she doing?")}${ex("She's skating.")}</div>`,
      pr: { sounds: [['/sk/', ['skating', 'skipping', 'school']], ['/s/', ['cycling', 'sun', 'sing']]] },
      rd: { t: `<p>Today is sunny. The children are in the park. Nam is cycling with his father. Mai and Linh are skipping. Ben is flying a kite. His kite is very high in the sky. Lucy is skating. Everyone is happy.</p>`,
        q: [{ q: 'Nam đang đạp xe với ai?', opts: ['Bố', 'Mẹ', 'Ben'], a: 0, e: '“with his father”' }, { q: 'Ai đang thả diều?', opts: ['Ben', 'Lucy', 'Mai'], a: 0, e: '“Ben is flying a kite.”' }, { q: 'Hôm nay trời mưa.', opts: TF, a: 1, keep: true, e: '“Today is sunny.”' }] },
      ls: { s: [['Mai', 'Look! What is Tom doing?'], ['Ben', "He's running."], ['Mai', "And what's his sister doing?"], ['Ben', "She's walking with her dog."], ['Mai', "Let's go cycling!"]],
        q: [{ q: 'Tom đang:', opts: ['Chạy', 'Đạp xe', 'Bơi'], a: 0, e: "“He's running.”" }, { q: 'Chị/em gái của Tom đang:', opts: ['Đi bộ với chó', 'Trượt pa-tanh', 'Nhảy dây'], a: 0, e: '“walking with her dog”' }, { q: 'Mai rủ Ben đi:', opts: ['Đạp xe', 'Thả diều', 'Bơi'], a: 0, e: '“Let\'s go cycling!”' }] },
      q: [{ q: '“What\'s she doing?” – Em trả lời:', opts: ["She's skipping.", "He's skipping.", "I'm skipping."], a: 0, e: 'she → She\'s.' }, { q: 'Chọn từ đúng: “He\'s ___ a kite.”', opts: ['flying', 'fly', 'flies'], a: 0, keep: true, e: 'Đang thả → flying.' }, { q: '“cycling” nghĩa là:', opts: ['đạp xe', 'chạy', 'bơi'], a: 0, e: 'cycling – đạp xe.' }],
    }),
    U(20, 'At the zoo', {
      v: [['monkey', 'con khỉ'], ['elephant', 'con voi'], ['tiger', 'con hổ'], ['giraffe', 'hươu cao cổ'], ['bear', 'con gấu'], ['horse', 'con ngựa'], ['crocodile', 'cá sấu'], ['peacock', 'con công']],
      g: `<div class="vd">${ex("What's that?", 'Kia là con gì?')}${ex("It's a tiger.", 'Đó là con hổ.')}${ex("It's an elephant.", 'Đó là con voi.')}</div><div class="vd">${ex("What's it doing?", 'Nó đang làm gì?')}${ex("It's climbing.", 'Nó đang leo trèo.')}${ex("It's swinging.", 'Nó đang đu.')}</div>`,
      pr: { sounds: [['/m/', ['monkey', 'mother', 'milk']], ['/dʒ/', ['giraffe', 'juice', 'jump']]] },
      rd: { t: `<p>Last Sunday, I went to the zoo with my family. I saw many animals. The monkeys were swinging in the trees. The elephants were big and grey. The giraffes had long necks. My favourite animal was the peacock. It was very beautiful!</p>`,
        q: [{ q: 'Bạn nhỏ đi sở thú vào:', opts: ['Chủ nhật', 'Thứ Bảy', 'Thứ Hai'], a: 0, e: '“Last Sunday”' }, { q: 'Những con khỉ đang:', opts: ['Đu trên cây', 'Bơi', 'Ngủ'], a: 0, e: '“swinging in the trees”' }, { q: 'Con vật yêu thích của bạn nhỏ là:', opts: ['Con công', 'Con hổ', 'Con voi'], a: 0, e: '“My favourite animal was the peacock.”' }] },
      ls: { s: [['Nam', "What's that, Dad?"], ['Dad', "It's a crocodile."], ['Nam', "What's it doing?"], ['Dad', "It's sleeping."], ['Nam', 'Look at the bear! It is eating.'], ['Dad', 'Yes. Bears like honey.']],
        q: [{ q: 'Con vật đầu tiên là:', opts: ['Cá sấu', 'Con gấu', 'Con hổ'], a: 0, e: "“It's a crocodile.”" }, { q: 'Cá sấu đang:', opts: ['Ngủ', 'Ăn', 'Bơi'], a: 0, e: "“It's sleeping.”" }, { q: 'Con gấu đang ăn.', opts: TF, a: 0, keep: true, e: '“It is eating.”' }] },
      q: [{ q: 'Chọn từ đúng: “It\'s ___ elephant.”', opts: ['an', 'a'], a: 0, keep: true, e: 'elephant bắt đầu bằng nguyên âm → an.' }, { q: '“What\'s it doing?” (con khỉ đang leo)', opts: ["It's climbing.", "It's a monkey.", 'It climbs.'], a: 0, e: "It's + V-ing." }, { q: 'Viết từ tiếng Anh nghĩa là “con hổ”:', a: ['tiger'], e: 'tiger.' }],
    }),
  ];

  window.HOCTAP_TA3 = {
    id: 'tienganh', name: 'Tiếng Anh', tt: 'TA', color: 'p', ill: 'tienganh', book: 'Tiếng Anh 3 · Global Success',
    chapters: [{ title: 'Học kì 1 · Units 1 – 10', lessons: units.slice(0, 10) }, { title: 'Học kì 2 · Units 11 – 20', lessons: units.slice(10) }],
  };
})();
