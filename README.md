# Uebung Swapi

## Inhalt

In dieser Übung soll es darum gehen, dass Sie den Einsatz von MobX in Verbindung mit der fetch-API trainieren.

``` Hinweise: Alle notwendigen npm-Pakete sind vorinstalliert ```

## Aufgaben

1. Erweitern Sie die vorhandene Anwendung, um einen PeopleStore. Dieser soll zunächst statische Daten enthalten, die Sie dann in der dazu zuständigen Komponente anzeigen

2. Verwenden Sie nun die fetch-API, um Daten von der über Personen StarWars API zu erhalten. Eine Dokumentation zur StarWars API finden Sie hier https://swapi.co/documentation. Beispiele wie die fetch-API zu verwenden ist, finden Sie hier https://developer.mozilla.org/de/docs/Web/API/Fetch_API/Using_Fetch

```
Daten die Sie von dem people-Endpunkt erhalten sehen in etwa wie folgt aus:

{
  "name": "Luke Skywalker",
  "height": "172",
  "mass": "77",
  "hair_color": "blond",
  "skin_color": "fair",
  "eye_color": "blue",
  "birth_year": "19BBY",
  "gender": "male",
  "homeworld": "https://swapi.co/api/planets/1/",
  "films": [
    "https://swapi.co/api/films/2/",
    "https://swapi.co/api/films/6/",
    "https://swapi.co/api/films/3/",
    "https://swapi.co/api/films/1/",
    "https://swapi.co/api/films/7/"
  ],
  "species": [
    "https://swapi.co/api/species/1/"
  ...
}

Können Sie erklären, In Relation stehende Daten nicht durch eine ID dargestellt werden, sondern durch einen Link?

```

#
## Weiterführende Aufgaben

3. Ergänzen Sie die "PeopleCard", um einen Link zur Spezies (enthalten in der Anfrage der Star Wars API). Dieser Link soll nun zu einer Detailansicht führen, auf der einige Details der Spiezies aufgeführt sind. Sie müssen also zusätzlich eine species-details-component implementieren und weitere Endpunkte der StarWars API abfragen.

4. Verwenden Sie zur Navigation zwischen den Seiten "ReactRouter". Eine Anleitung dazu finden Sie hier https://reacttraining.com/react-router/web/guides/quick-start
