let language = {
    eng: {
        one: "I am analytical introvert that sets and pursue goals in life.",
        two: "📜 About me",
        three: "I would describe myself as person who is persistent, diligent and I like challenges. I'm results-driven, which means that I'm not scared of trying new things, making mistakes and learn from them to achieve my goals in the result.",
        four: "Every area of life I see as game or sport that require practice and our results in this areas depends on discipline, motivation and invested efforts. I believe in myself and I demand from myself to continuosly improve and gain much more experience. I'm still young and I learn quick. I also have ability to quickly adapt to requirements that are needed from me. I care about growth in my private life and in my profession. My values in life are: logic, rationalism, stoicism, wealth, pursuit of excellence.",
        five: "If you hire me, you will get a person that want to develop himself and is passionate about it. Someone that is also results-driven and cares about improving his work to the maximum possible level of efficiency.",
        six: "🎯 Skills:",
        sixAndHalf: "Hard skills: ReactJs, Javascript, Git/Github, HTML, CSS, C/C++, OpenGL, basics of computer graphics (Gimp, 3ds max,blender), Microsoft Office, knowledge of the english language (B2/C1), driving license cat. B.",
        seven: "Soft skills: teamwork, resistance to stress, self-discipline, patience, flexibility, time managment, analitycal thinking.",
        eight: "Check me out on github and codepen:",
        nine: "🏆 My development plan:",
        ten: "Now my goal is to find my first job in IT as junior front-end developer and I also want develop my skills in front-end technologies focusing on ReactJs framework and redux, JavaScript, HTML, CSS and also node.js.",
        eleven: "My next step is to still develop myself in front-end technologies but my goal would be to master framework of ReactJs.",
        twelve: "Later I would want to gain knowledge and develop in area of backend and also writing mobile applications with React Native.",
        thirteen: "The first and best victory is to conquer self. To be conquered by self is, of all things, the most shameful and vile. -----------------------------------------------------------[Platon]",
        fourteen: "💡 Hoobies",
        fourteenAndHalf: "Besides programming and technology, I like hitting the gym and working out in my free time. My goals for this year are to benchpress 140kg, squat 150kg w przysiadzie and deadlift 200kg. I already kind of achieved the squat, but I need money for food to achieve rest 😉",
        fifteen: "I also like computer games. I'm a student of applied computer science at Lodz Univeristy of technology with specialization of computer games and simulations. Besides game dev and playing RPG's FPS's or RTS's I'm will be always eager to play chess with you.",
        sixteen: "I also like the subject of personal growth. I like challenges and I like to complete them. If I have time I read books about finances, social skills or other interesting stuff. My favourite book is Think and Grow Rich by Napoleon Hill",
        seventeen: "Besides all that I like automotive industry(especially old BMW(especially BMW E30)), snowboard and playing instruments",
    },
    pl: {
        one: "Jestem analitycznym introwertykiem i dążę w życiu do osiągnięcia swoich celów.",
        two: "📜 O Mnie",
        three: "Opisałbym się jako osobę wytrwałą, pracowitą i lubiącą wyzwania. Jestem osobą nastawioną na rezulat, co oznacza że nie boję się próbować nowych rzeczy, popełniać błędów i wyciągać wnioski aby w rezultacie osiągnąć wyznaczony cel.",
        four: "Każdą dziedziną życiową widzę jako grę lub sport który wymaga treningu i w zależności od motywacji, dyscypliny i włożonego wysiłku osiągamy pewne rezultaty. Wierzę w siebie i oczekuję od siebie ciągłej poprawy swoich umiejętności i zdobywania coraz większego doświadczenia. Jestem młody i szybko się uczę oraz potrafię się przystosować do wymagań stawianych przede mną. Zależy mi na rozwoju zarówno w życiu prywatnym jak i zawodowym. Moje wartości w życiu to: logika, racjonalizm, stoicyzm, majątek, dążenie do mistrzostwa.",
        five: "Jeśli mnie zatrudnisz otrzymasz osobę która chce się rozwijać i podchodzi do tego z pasją, która jest nastawiona na rezultat i zależy jej na jak największej efektywności swojej pracy.",
        six: "🎯 Umiejętności:",
        sixAndHalf: "Umiejętności twarde: React, Javascript, Git, HTML, CSS, C/C++, OpenGL, Podstawy grafiki komputerowej (Gimp, 3ds max), znajomość pakietu MS Office, znajomość języka angielskiego (B2/C1), prawo jazdy kat. B.",
        seven: "Umiejętności miękkie: Praca w zespole, odporność na stres, dyscyplina, cierpliwość, elastyczność, zarządzanie czasem, analityczne myślenie.",
        eight: "Zachęcam do odwiedzenia mojego konta github i codepen:",
        nine: "🏆 Mój plan rozwoju:",
        ten: "Obecnie zależy mi na znalezieniu pierwszej pracy w charakterze front-end developera oraz rozwijaniu swoich umiejętności w technologiach front-endowych z naciskiem na ReactJs i redux, JavaScript, HTML, CSS oraz node.js.",
        eleven: "Następnie będę dalej się rozwijał w technologiach front-end ale z większym naciskiem na framework Reacta.",
        twelve: " Kolejnym moim krokiem będzie jak najlepsze opanowanie backendu oraz pisania aplikacji mobilnych z wykorzystaniem React Native.",
        thirteen: "Najważniejszym i największym triumfem człowieka jest zwycięstwo nad samym sobą. Bycie pokonanym przez samego siebie jest ze wszystkich rzeczy najbardziej haniebne i niegodziwe. [Platon]",
        fourteen: "💡 Zainteresowania",
        fourteenAndHalf: "Oprócz interesowania się programowaniem i technologią w wolnym czasie lubię przerzucać żelastwo na siłowni. Moje cele na te rok to 140kg na ławce płaskiej, 150kg w przysiadzie i 200kg w martwym ciągu.",
        fifteen: "Interesuje się także grami komputerowymi. Jestem studentem 3 roku informatyki stosowanej na Politechnice Łódzkiej na specjalności technologie gier i symulacji komputerowych. Oprócz tworzenia gier i ogrywania RPGów FPSów czy RTSów zawsze chętnie zagram partię szachów.",
        sixteen: "Poza tym interesuję się rozwojem osobistym. Lubię sobie stawiać wyzwania i dążyć do ich wykonania. Jeśli mam na to czas to szukam informacji lub czytam książki z zakresu finansów, umiejętności społecznych, stoicyzmu.",
        seventeen: "Poza wymienionymi lubię motoryzację,(szczególnie stare BMW) jazdę na snowboardzie oraz grę na keyboardzie.",
    }
};

function changeEng() {
    document.getElementById("one").innerHTML = language.eng.one;
    document.getElementById("two").innerHTML = language.eng.two;
    document.getElementById("three").innerHTML = language.eng.three;
    document.getElementById("four").innerHTML = language.eng.four;
    document.getElementById("five").innerHTML = language.eng.five;
    document.getElementById("six").innerHTML = language.eng.six;
    document.getElementById("sixAndHalf").innerHTML = language.eng.sixAndHalf;
    document.getElementById("seven").innerHTML = language.eng.seven;
    document.getElementById("eight").innerHTML = language.eng.eight;
    document.getElementById("nine").innerHTML = language.eng.nine;
    document.getElementById("ten").innerHTML = language.eng.ten;
    document.getElementById("eleven").innerHTML = language.eng.eleven;
    document.getElementById("twelve").innerHTML = language.eng.twelve;
    document.getElementById("thirteen").innerHTML = language.eng.thirteen;
    document.getElementById("fourteen").innerHTML = language.eng.fourteen;
    document.getElementById("fourteenAndHalf").innerHTML = language.eng.fourteenAndHalf;
    document.getElementById("fifteen").innerHTML = language.eng.fifteen;
    document.getElementById("sixteen").innerHTML = language.eng.sixteen;
    document.getElementById("seventeen").innerHTML = language.eng.seventeen;
};

function changePl() {
    document.getElementById("one").innerHTML = language.pl.one;
    document.getElementById("two").innerHTML = language.pl.two;
    document.getElementById("three").innerHTML = language.pl.three;
    document.getElementById("four").innerHTML = language.pl.four;
    document.getElementById("five").innerHTML = language.pl.five;
    document.getElementById("six").innerHTML = language.pl.six;
    document.getElementById("sixAndHalf").innerHTML = language.pl.sixAndHalf;
    document.getElementById("seven").innerHTML = language.pl.seven;
    document.getElementById("eight").innerHTML = language.pl.eight;
    document.getElementById("nine").innerHTML = language.pl.nine;
    document.getElementById("ten").innerHTML = language.pl.ten;
    document.getElementById("eleven").innerHTML = language.pl.eleven;
    document.getElementById("twelve").innerHTML = language.pl.twelve;
    document.getElementById("thirteen").innerHTML = language.pl.thirteen;
    document.getElementById("fourteen").innerHTML = language.pl.fourteen;
    document.getElementById("fourteenAndHalf").innerHTML = language.pl.fourteenAndHalf;
    document.getElementById("fifteen").innerHTML = language.pl.fifteen;
    document.getElementById("sixteen").innerHTML = language.pl.sixteen;
    document.getElementById("seventeen").innerHTML = language.pl.seventeen;
}