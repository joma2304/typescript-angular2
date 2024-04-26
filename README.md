# Moment 4 Angular 2
Detta projekt ingår i kursen DT208G Programmering i TypeScript och har skapats med ramverket Angular. Det består av en sida som läser in en lista med kurser från ett api. Kruserna skrivs ut i en tabell på webbplatsen och det går att sortera dem i stigande samt fallande ordning. Det finns även en sökfunktion som låter en söka efter delar eller hela kursnamn och koder och endast få upp dem som matchar med sökningen. 

## HttpClient
Jag har skapat en service som hämtar data från API:et genom att använda mig av HttpClient. Detta görs med den inbyggda funktionen get.

## Interface
Jag har skapat ett interface för datan som hämtas så att jag inte behöver deklarera den som typen any utan instället kan ge varje del av datan rätt typ, detta för att få större typsäkerhet.  

## Sortering och filtrering
I min Course component så har jag lagt till funktionerna för att kunna sortera kurser i stigande och fallande ordning (dessa kallar jag sedan på i min HTML när man trycker på överskriften). Jag har även lagt till funktionen som gör att jag kan söka där. 

## Databinding
För att sedan använda mig av funktionerna samt att läsa ut innehållet från API:n så använder jag mig av databinding. Genom exempelvis *NgFor, för att loopa igenom arrayen och skriva ut det i min HTML, eller ([NgModel])="searchString" och (input)="applyFilters()" för att implementera sökfunktionen.


