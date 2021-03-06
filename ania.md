Zacznijmy od algorytmów przechodzenia / przeszukiwania.

**BFS - przechodzenie wszerz**

Pierwszy poziom stanowi wierzchołek początkowy.

Drugi poziom stanowią sąsiedzi wierzchołka początkowego.

Kolejne poziomy to wszyscy sąsiedzi wierzchołków z poziomu wyższego.

Każdy wierzchołek zapisujemy tylko raz, przy pierwszym odwiedzeniu. Sąsiadów danego wierzchołka zapisujemy w zdefiniowanym porządku (zazwyczaj alfabetycznym lub arytmetycznym) lub losowo jeżeli kolejność nie została podana.

**DFS - przechodzenie wgłąb**

Zaczynamy od wierzchołka początkowego. Przechodzimy do jego pierwszego (w określonym porządku) sąsiada. Jeżeli dany wierzchołek ma nieodwiedzonych sąsiadów to przechodzimy do pierwszego nieodwiedzonego sąsiada. Jeżeli nie ma to wracamy w górę tak długo aż natrafimy na wierzchołek, który ma nieodwiedzonych sąsiadów. Algorytm kończy działanie, gdy znajdujemy się w wierzchołku początkowym, który nie ma już nieodwiedzonych sąsiadów.

------

Rezultatem obu algorytmów jest drzewo. Oba algorytmy używane są głównie do badania spójności grafu, jeżeli wynikowe drzewo zawiera wszystkie wierzchołki grafu to jest on spójny.

Algorytm BFS używany jest również do znajdowania najkrótszych ścieżek w grafach bez ważonych krawędzi. Jeżeli szukamy najkrótszej ścieżki między wierzchołkami A i B to wykonujemy algorytm BFS z wierzchołkiem A jako wierzchołkiem początkowym. Gdy w trakcie działaniu algorytmu trafimy do wierzchołka B to sprawdzamy na jakim "poziomie" jesteśmy. Długość ścieżki jest równa indeksowi poziomu (jeżeli poziom pierwszy ma indeks 0) lub indeks pomniejszony o jeden (gdy indeksowanie zaczynamy od 1).

------

Algorytm Kruskala służy do znajdowania minimalnego drzewa rozpinającego (drzewa zawierającego wszystkie wierzchołki grafu o mininalnej sumie wag). Powiedzmy, że mamy graf spójny na 20 wierzchołkach. Szukamy drzewa, więc już wiemy, że musimy wybrać 19 krawędzi.

Krawędzie wybieramy w bardzo prosty sposób - bierzemy krawędź o najmniejszej wadze, która łączy wierzchołki, które nie są jeszcze połączone przez nasz zbiór krawędzi. Pierwsza krawędź to zawsze krawędź o najmniejszej wadze w całym grafie.

------

Algorytmy są najładniej opisane w materiałach Jaworskiego -> http://www.staff.amu.edu.pl/~jaworski/mad_tgr_cw_3_2014L.pdf, http://www.staff.amu.edu.pl/~jaworski/mad_tgr_2014_cw.pdf. Musiałbym praktycznie przepisywać jego materiały. Postaraj się to w wolnych chwilach przeczytać, a jak będziesz miała z tym problemy to rozpiszę przykład.

------

Kolorowanie grafu polega na przyporządkowaniu wierzchołkom barw lub indeksów w taki sposób, że dwa sąsiednie wierzchołków nie mają przypisanej tej samej barwy. Kolorowanie optymalne to takie, który wykorzystuje minimalną liczbę barw, indeksów. Liczba chromatyczna oznacza liczbę barw potrzebną do pokolorowania grafu w sposób optymalny. Dla grafów planarnych liczba chromatyczna może wynosić co najwyżej 4. Chyba miałem zadanie z kolorowaniem, miałem podany prosty graf i miałem określić liczbę chromatyczną.

------

Graf planarny to taki, który można narysować tak by krawędzie się nie przecinały. Minimalne grafy, które nie są planarne to graf pełny na 5 wierzchołkach (k5) i K3,3 (pełny graf dwudzielny, obie grupy złożone z 3 wierzchołków). Zgodnie z twierdzeniem Kuratowskiego, graf skończony jest planarny, gdy nie zawiera podgrafu homeomorficznego (inaczej nazywanego podziałem) z K3,3 ani z K5.

Graf homeomorficzny... Ok, wyobraź sobie K5. Teraz na którejś krawędzi dodaj wierzchołek w taki sposób, że podzieli krawędź na dwie części. Dodaj kilka innych wierzchołków w taki sam sposób. To jest graf homeomorficzny z K5.

Jeżeli będziesz musiała policzyć ściany grafu to wykorzystaj wzór Eulera (ja na egzaminie miałem zadanie podać wzór Eulera). |S| = 2 + |E| - |V|, gdzie |S| to ilość ścian, |E| ilość krawędzi, |V| ilość wierzchołków.
