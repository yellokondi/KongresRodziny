--Order of inserting new blog onto a main page:
--Insert a full article into Articles table.
--Insert a blog entry into Blogs table.
--If a given blog entry has tags, insert them into Tags table.
--Bind tags with a particular blog by inserting respective key ids into BlogTags table.


--Populate Articles table:
--Press Release:
INSERT INTO Articles(Title, ImageURI, [FullText], CreatedOn)
VALUES('Press Release', '/Content/article_images/150106_press_release.jpg',
N'Ogłaszamy II Polonijny Kongres Rodziny, Chicago 2015.<br />
Od 6 – 15 lutego 2015 odbędzie się II Polonijny Kongres Rodziny w Chicago: tydzień poświęcony wykładom rekolekcyjnym oraz spotkaniom warsztatowym dla małżeństw, osób przygotowujących się do sakramentu małżeństwa, dla osób, które pragną pogłębić swoją wiedzę i życie duchowe, i dla młodzieży, wraz z towarzyszącymi wydarzeniami kulturalnymi.<br /><br />
Kongres pod hasłem „Oblicza Miłości – Rodzice.  Wszyscy Jesteśmy Powołani Do Miłości i Wychowania” jest organizowany z inicjatywy świeckich członków fundacji Strong Family / Silna Rodzina wraz z archidiecezjalnym Biurem Duszpasterstwa Rodzin i Biurem Duszpasterstwa Młodych Dorosłych.  Opiekunem duchowym przedsięwzięcia jest O. Jerzy Karpiński, SJ. Patronat nad Kongresem objął Arcybiskup Chicago.<br /><br />
W oczekiwaniu na Synod Rodziny, który odbędzie się w październiku 2015 roku w Rzymie, Ojciec święty Franciszek I zachęca wszystkich wiernych do rozważania tajemnicy rodziny poprzez cały nadchodzący rok. Jako organizatorzy Kongresu czujemy się z szczególnie zachęceni do dalszej pracy w przygotowywaniu wydarzenia, które pozwoli głębiej zrozumieć i docenić życie rodzinne w naszej Archidiecezji.<br /><br />
Wszyscy wiemy, że podstawą szczęśliwego małżeństwa oraz trwałej i szczęśliwej rodziny jest miłość między mężem a żoną oraz między rodzicami a dziećmi. Szczęśliwa rodzina to taka, w której każdy kocha każdego. Ale być odpowiedzialnym rodzicem to jednocześnie kochać i wymagać. Kochać i wychowywać dzieci to wspierać je w rozwoju. Wszyscy jesteśmy powołani do miłości i do wychowywania tych, których kochamy.<br /><br />
Wszyscy - to znaczy, nie tylko ci, którzy są wzorem i którzy nie borykają się z poważnymi problemami. Do miłości i wychowywania swoich bliskich powołani są także ci, którzy czują się poturbowani i boleśnie doświadczeni, którzy przeszli przez krzyż, rozłąkę, porzucenie czy opuszczenie. Wszyscy możemy uczyć się dojrzałej miłości od Jezusa i stawać się błogosławieństwem dla naszych bliskich.<br /><br />
W czasie II Kongresu rekolekcje, warsztaty, i konferencje dotyczyć będą różnych obliczy miłości w małżeństwie i rodzinie. Miłość to taki sposób odnoszenia się do drugiej osoby, dzięki któremu kochanej osobie chce się żyć i który sprawia, że kochana osoba znajduje siłę, by radzić sobie nawet w bardzo trudnych sytuacjach życiowych. Miłość, jakiej uczy nas Jezus, przejawia się w naszej trosce, wierności, odpowiedzialności, uczciwości, wytrwałości, w naszym ciągłym nawracaniu się po to, by naszych bliskich kochać coraz bardziej i coraz mądrzej. Kochać na wzór Jezusa to być gotowym do oddania życia za bliskich. To traktować małżonka i dzieci jak największe skarby na tej ziemi. To stawać się dla nich zamkiem obronnym i świadkiem miłości Boga do człowieka.<br /><br />
Biorąc pod uwagę złożony i bogaty charakter hasła przewodniego, program Kongresu został podzielony na pięć głównych działów po to, aby każdy mógł znaleźć coś, co szczególnie do niego przemówi czy to modlitwę, konferencje, warsztaty, sympozjum, czy tez wydarzenia kulturalne.   Prezentacje odbędą się głównie w języku polskim, ale również po angielsku w szeregu parafii na terenie Archidiecezji Chicago.<br /><br />
Swój udział już zadeklarowali: Jezuicki Ośrodek Milenijny, Parafie: Miłosierdzia Bożego, Ojców Cystersów, Św. Brunona, Św. Daniela Proroka, Św. Ferdynanda, Św. Gertrudy, Św. Konstancji, Św. Cyryla i Metodego, Św. Tomasza Becketta, Św. Trójcy, Św. Wiliama, Św. Władysława oraz Bazylika św. Jacka.<br /><br />
Dzięki hojności naszych sponsorów i dzięki wysiłkowi wolontariuszy wszystkie przedsięwzięcia i wydarzenia Kongresu są bezpłatne dla uczestników.<br /><br />
Fundacja Strong Family oraz organizatorzy Kongresu Rodziny są wdzięczni Biskupowi Andrzejowi P. Wypych za wsparcie i pobłogosławienie inicjatywy tego wydarzenia.<br /><br />
Appendix:<br /><br /> 
Prezenterzy II Kongresu Rodziny w porządku alfabetycznym:<br /><br />
O. Paweł Bandurski<br />
Konferencjonista<br /><br />
Pani Viola Brzezińska<br />
Piosenkarka<br /><br />
Ks. Marek Dziewiecki, Polska<br />
Rekolekcjonista<br /><br />
Dr. Robert Lawler<br />
Lekarz Ginekolog<br /><br />
Pani Sheila Laugminas<br />
Redaktor Relevant Radio<br /><br />
Pan Mark Nimo<br />
Motywator<br /><br />
Pani Małgorzata Olczak<br />
Psycholog<br /><br />
Ks. Prof. Marian Pokrywka<br />
Teolog<br /><br />
Dr. Inż. Jacek Pulikowski<br />
Terapeuta Rodzinny<br /><br />
Diakon Chuck Thompson<br />
Mówca<br /><br />
<a href="http://www.kongresrodzinychicago.org">www.kongresrodzinychicago.org</a> / <a href="http://www.facebook.com/KongresRodziny">www.facebook.com/KongresRodziny</a>',
GETUTCDATE())

INSERT INTO Blogs(Title, ImageURI, Slug, UserName, FullArticleURL, CreatedOn, Comments, Shares)
VALUES('Press Release', '/Content/article_images/150106_press_release.jpg', 
N'Ogłaszamy II Polonijny Kongres Rodziny, Chicago 2015.<br />
Od 6 – 15 lutego 2015 odbędzie się II Polonijny Kongres Rodziny w Chicago: tydzień poświęcony wykładom rekolekcyjnym oraz spotkaniom warsztatowym dla małżeństw, 
osób przygotowujących się do sakramentu małżeństwa, dla osób, które pragną pogłębić swoją wiedzę i życie duchowe, i dla młodzieży, wraz z towarzyszącymi wydarzeniami kulturalnymi.',
'Jerzy',
'/Home/Artykul?id=1',
GETUTCDATE(),
NULL,
NULL)
--End of Press Release

--Rozpoczecie kongresu:
INSERT INTO Articles(Title, ImageURI, [FullText], CreatedOn)
VALUES(N'Rozpoczęcie Kongresu', '/Content/article_images/150107_rozpoczecie_Kongresu.jpg',
N'Oficjalne rozpoczęcie Drugiego Polonijnego Kongresu Rodziny nastąpi w dniu 7 lutego 2015 roku w Jezuickim Ośrodku Milenijnym (5835 W Irving Park Rd, Chicago).<br /><br />
Rozpoczęcie o godzinie 5pm.<br /><br />
Uroczystą Mszę św. w Sanktuarium Najświętszego Serca Jezusa odprawi JE ks. Bp Andrzej P. Wypych, Biskup Pomocniczy Archidiecezji Chicago, Delegat Arcybiskupa Chicago ds. Polonii, Krajowy Dyrektor Wykonawczy Ligi Katolickiej Pomocy Religijnej Polsce i Polonii. Będzie to Msza święta rozpoczynająca oficjalnie modlitwy i prace Kongresu. Podobnie jak w ubiegłym roku na tę Mszę świętą zapraszamy szczególnie ludzie starszych, cierpiących, chorych i poturbowanych przez życie, by prosić ich o modlitwę i ofiarowanie cierpień w intencjach rodzin potrzebujących duchowego wsparcia. Chorzy będą mogli przyjąć sakrament Namaszczenia Chorych lub kapłańskie błogosławieństwo.<br /><br />
Kazanie wygłosi ks. Dr Marek Dziewiecki, Radom (Polska).<br /><br />
W Auli Jana Pawła II (drugie piętro) przywitamy zaproszonych Gości, Dobroczyńców i Uczestników Kongresu.<br /><br />
Konferencję inauguracyjną wygłosi ojciec Paweł Bandurski, TChr, Prowincjał Chrystusowców w USA i Kanadzie.<br /><br />
JE ks. Bp Andrzej P. Wypych udzieli pasterskiego błogosławieństwa wszystkim uczestnikom Kongresu.',
GETUTCDATE())

INSERT INTO Blogs(Title, ImageURI, Slug, UserName, FullArticleURL, CreatedOn, Comments, Shares)
VALUES(N'Rozpoczęcie Kongresu', '/Content/article_images/150107_rozpoczecie_Kongresu.jpg',
N'Oficjalne rozpoczęcie Drugiego Polonijnego Kongresu Rodziny nastąpi w dniu 7 lutego 2015 roku w Jezuickim Ośrodku Milenijnym (5835 W Irving Park Rd, Chicago).<br />
Rozpoczęcie o godzinie 5pm.',
'Jerzy',
'/Home/Artykul?id=2',
GETUTCDATE(),
NULL,
NULL)
--End of Rozpoczecie kongresu

--Zabawa walentynkowa:
INSERT INTO Articles(Title, ImageURI, [FullText], CreatedOn)
VALUES(N'Zabawa Walentynkowa', '/Content/article_images/walenty_web.jpg',
N'Walentynkowa zabawa taneczna. Zapraszamy, na potańcówkę 14 lutego 2015 przy kościele Św. Władyslawa.
Zaczynamy Mszą Świętą o godzinie 20:00. Sama zaś zabawa zaczyna się o godzinie 21:00 w sali pod kościołem.<br />
Adres: 5345 W Roscoe St.<br />
Chicago, IL 60641.<br />
Wstęp płatny.<br />
Impreza bezalkoholowa.',
GETUTCDATE())

INSERT INTO Blogs(Title, ImageURI, Slug, UserName, FullArticleURL, CreatedOn, Comments, Shares)
VALUES(N'Zabawa Walentynkowa', '/Content/article_images/walenty_web.jpg',
N'Walentynkowa zabawa taneczna. Zapraszamy, na potańcówkę 14 lutego 2015 przy kościele Św. Władyslawa.
Zaczynamy Mszą Świętą o godzinie 20:00. Sama zaś zabawa zaczyna się o godzinie 21:00 w sali pod kościołem.<br />
Adres: 5345 W Roscoe St.<br />
Chicago, IL 60641.<br />
Wstęp płatny.<br />
Impreza bezalkoholowa.',
'Jerzy',
'/Home/Artykul?id=3',
GETUTCDATE(),
NULL,
NULL)
--End of Zabawa walentynkowa

--Press Release (2):
INSERT INTO Articles(Title, ImageURI, [FullText], CreatedOn)
VALUES('Informacja prasowa Nr. 2', '/Content/default_blog_image/default_document.png',
N'Fundacja „Strong Family” ma przyjemność ogłosić program II Polonijnego Kongresu Rodziny, w dniach 6 – 15 lutego 2015 w Archidiecezji Chicago. Małżeństwa, osoby przygotowujące się do sakramentu małżeństwa i osoby zainteresowane poprawą jakości relacji w ich rodzinach są zapraszani do udziału w rekolekcjach, konferencjach i sympozjum związanych z tematem przewodnim: „Oblicza miłości – RODZICE. Wszyscy jesteśmy wezwani do miłości i wychowania”.<br /><br />
Najlepszą podstawą szczęśliwego małżeństwa i silnej i szczęśliwej rodziny jest miłość między mężem i żoną oraz między rodzicami i dziećmi. Szczęśliwa rodzina to taka, w której każdy kocha każdego. Ale być odpowiedzialny rodzic oznacza zarówno kochać i wymagać. Kochać i wymagać oznacza kochać i wychowywać dzieci i siebie nawzajem w celu wspierania pełnego rozwoju każdego człowieka. II Kongres Rodziny planuje konferencje, sympozjum i porady mówców, którzy są wiodącymi specjalistami w swoich dziedzinach: terapii rodzinnej, poradnictwa, psychologii, dziecięcej psychologii duchowości jak również teologii moralnej.<br /><br />
Ponadto, w oczekiwaniu na Synod o Rodzinie, którym ma się odbyć w październiku 2015 roku w Rzymie, Ojciec Święty Franciszek I zachęca wszystkich wiernych do refleksji przez cały nadchodzący rok nad tajemnicą rodziny. Z tego powodu zespół organizacyjny czuje się szczególnie zachęcony do prezentacji wydarzeń Kongresu Rodziny jako  doskonałą okazję dla głębszego zrozumienia i doceniania życia rodzinnego w naszej Archidiecezji.<br /><br />
Wydarzenia, w języku polskim i angielskim, będą odbywać się w 15 kościoła Archidiecezji. Pełna lista lokalizacji, prelegentów i dat z dokładnym programem znajduje się na stronie internetowej: <a href="http://www.kongresrodzinychicago.org">www.kongresrodzinychicago.org</a><br /><br />
Kongres Rodziny organizowany jest pod duchowym patronatem Arcybiskupa Chicago.',
GETUTCDATE())

INSERT INTO Blogs(Title, ImageURI, Slug, UserName, FullArticleURL, CreatedOn, Comments, Shares)
VALUES('Informacja prasowa Nr. 2', '/Content/default_blog_image/default_document.png', 
N'Fundacja „Strong Family” ma przyjemność ogłosić program II Polonijnego Kongresu Rodziny, w dniach 6 – 15 lutego 2015 w Archidiecezji Chicago. Małżeństwa, osoby przygotowujące się do sakramentu małżeństwa i osoby zainteresowane poprawą jakości relacji w ich rodzinach są zapraszani do udziału w rekolekcjach, konferencjach i sympozjum związanych z z tematem przewodnim: „Oblicza miłości – RODZICE. Wszyscy jesteśmy wezwani do miłości i wychowania”.<br />
Wydarzenia, w języku polskim i angielskim, będą odbywać się w 15 kościoła Archidiecezji. Pełna lista lokalizacji, prelegentów i dat z dokładnym programem znajduje się na stronie internetowej: <a href="http://www.kongresrodzinychicago.org">www.kongresrodzinychicago.org</a><br />
Kongres Rodziny organizowany jest pod duchowym patronatem Arcybiskupa Chicago.',
'Jerzy',
'/Home/Artykul?id=4',
GETUTCDATE(),
NULL,
NULL)
--End of Press Release (2)
INSERT INTO Articles(Title, ImageURI, [FullText], CreatedOn)
VALUES(N'Rozpoczęcie II-ego Kongresu Rodziny', '/Content/default_blog_image/default_document.png',
N'Rozpoczęły się pierwsze nabożeństwa w ramach Drugiego Polonijnego Kongresu Rodziny. Jak zawsze, w  pierwszy piątek miesiąca Najświętsze Serce Jezusa jest dla nas szczególnie otwarte, dzisiaj i my otworzyliśmy nasze serca na Chrystusa, na bliźniego, na nasze rodziny...
W Lombard w Sanktuarium Bożego Miłosierdzia Nabożeństwo wynagradzające i pokutne odbyło się po Mszy świętej koncelebrowanej przez ojców chrystusowców. Okolicznościowe kazanie wygłosił jezuita ojciec Jerzy Karpiński.
W formie adoracji przed wystawionym Panem Jezusem w monstrancji modlili się wierni. Można było zauważyć całe rodziny, małżonków trzymających się za ręce. Rozmyślanie było przedsatwione w formie modlitewnego rachunku sumienia, który dotyczył relacji człowieka do Boga, do bliźniego i do siebie samego. Przeplatane było minutami milczenia i śpiewem odpowiednio dobranych pieśni. Wspaniały nastrój zawdzięczamy świetnemu zespołowi miejscowej młodzieży.
Na zakończenie wszyscy przyjęli indywidualne i osobiste błogosławieństwo Najświętszym Sakramentem.
W Kosciele św Władysława w Chicago, zgromadzeni wierni po wysłuchaniu duchowej nauki ojca Pawła Bandurskiego na temat relacji z Bogiem, która jest drogą wewnętrznego uzdrowienia i przebaczenia pogrążyli sie w pięknej modlitwie. Adorujac Chrystusa w Najświęszym Sakramencie rodziny przepraszały za zaniedbania i błędy wychowawcze, dziękowały za cud wiary prosząc o dar mądrej miłości do bliskich i do samych siebie. Modlitwa zakonczyła się uwielbieniem miłosci doskonałej jaką jest sam Bóg.',
GETUTCDATE())

INSERT INTO Blogs(Title, ImageURI, Slug, UserName, FullArticleURL, CreatedOn, Comments, Shares)
VALUES(N'Rozpoczęcie II-ego Kongresu Rodziny', '/Content/default_blog_image/default_document.png',
N'Rozpoczęły się pierwsze nabożeństwa w ramach Drugiego Polonijnego Kongresu Rodziny. Jak zawsze, w  pierwszy piątek miesiąca Najświętsze Serce Jezusa jest dla nas szczególnie otwarte, dzisiaj i my otworzyliśmy nasze serca na Chrystusa, na bliźniego, na nasze rodziny...',
'Jerzy',
'/Home/Artykul?id=5',
GETUTCDATE(),
NULL,
NULL)

INSERT INTO Articles(Title, ImageURI, [FullText], CreatedOn)
VALUES(N'Małżeństwo z Poznania, Jadwiga i Jacek Pulikowscy zostali mianowani przez Franciszka audytorami synodu o rodzinie.','/Content/article_images/pulikowscy.png',
N'W Watykanie opublikowano dziś pełną listę XIV Zgromadzenia Ogólnego Synodu Biskupów, który w dniach 4-25 października będzie obradował na temat "Powołania i misji rodziny w Kościele i świecie współczesnym".<br /><br />
W dokumencie przypomniano, że obradom będzie przewodniczył Ojciec Święty, Franciszek, zaś przewodniczącymi delegowanymi będą kardynałowie. André Vingt-Trois z Paryża, Luis Antonio G. Tagle z Manili (Filipiny), Raymundo Damasceno Assis z Aparecidy (Brazylia) oraz Wilfrid Fox Napier OFM z Durbanu w RPA. Sekretarzem generalnym jest kard. Lorenzo Baldisseri, relatorem generalnym kard. Péter Erdő z Budapesztu, zaś sekretarzem specjalnym Włoch - abp Bruno Forte.<br /><br />
Episkopat Polski reprezentować będą arcybiskupi Stanisław Gądecki i Henryk Hoser oraz bp Jan Wątroba. Jako przewodniczący dykasterii Kurii Rzymskiej - kard. Stanisław Ryłko oraz abp Zygmunt Zimowski.<br /><br />
Obecni też będą biskupi polskiego pochodzenia z innych krajów: abp Mieczysław Mokrzycki ze Lwowa, abp Tadeusz Kondrusiewicz z Mińska, abp Zbigniew Stankiewicz ze stolicy Łotwy - Rygi, abp Tomasz Peta ze stolicy Kazachstanu - Astany oraz bp Krzysztof Białasik z Boliwii.<br /><br />
W gronie audytorów znajdą się natomiast wspomniani już państwo Jadwiga i Jacek Pulikowscy z Poznania.',
GETUTCDATE())

INSERT INTO Blogs(Title, ImageURI, Slug, UserName, FullArticleURL, CreatedOn, Comments, Shares)
VALUES(N'Małżeństwo z Poznania, Jadwiga i Jacek Pulikowscy zostali mianowani przez Franciszka audytorami synodu o rodzinie.','/Content/article_images/pulikowscy.png',
N'W Watykanie opublikowano dziś pełną listę XIV Zgromadzenia Ogólnego Synodu Biskupów, który w dniach 4-25 października będzie obradował na temat "Powołania i misji rodziny w Kościele i świecie współczesnym".',
'Jerzy',
'Home/Artykul?id=1003',
GETUTCDATE(),
NULL,
NULL)