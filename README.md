# Covid Karte (Covid Map)

This project aims at re-implementing the features of
[the RKI Covid Map](https://corona.rki.de) in a more performant way.
It's also (currently) a test on how far you can get without a
common UI framework like React or vue.

This corona dashboard is deployed at
[covid-karte.de](https://covid-karte.de).

All data is loaded from the official RKI APIs but the project
is in no way affiliated with or endorsed by the RKI. No guarantees
for anything, especially correctness of the displayed data.

The first goal is to re-implement all features of the official corona
map and then some convenience features and then maybe some cool
features like historic views.

## Some things to remind myself of what to do

### Development server

Start the development server with

```bash
snowpack dev --reload
```

then open [http://localhost:8080/src/](http://localhost:8080/src/).

### Build

```bash
snowpack build --config ./snowpack.json
```

### Deploy

```bash
scp -r build/* uberspace:www/corona.t-animal.de
ssh uberspace chmod a+rX -R www/corona.t-animal.de/
```

(Yes, I know.)



### API calls

Todays summed data total cases
https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Landkreisdaten/FeatureServer/0/
query?f=json&where=1=1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&outStatistics=
[{%22statisticType%22:%22sum%22,%22onStatisticField%22:%22cases%22,%22outStatisticFieldName%22:%22totalCases%22},
{%22statisticType%22:%22sum%22,%22onStatisticField%22:%22deaths%22,%22outStatisticFieldName%22:%22totalDeaths%22}]
&resultType=standard&cacheHint=true


Todays diff data by LK (does not work)
https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_COVID19/FeatureServer/0/
query?f=json&groupByFieldsForStatistics=Landkreis&where=NeuerFall%20IN(1,%20-1)&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&outStatistics=
[{%22statisticType%22:%22sum%22,%22onStatisticField%22:%22AnzahlFall%22,%22outStatisticFieldName%22:%22diff%22}]
&resultType=standard&cacheHint=true


Data that contains the daily diff
https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/rki_key_data_v/FeatureServer/0/
query?f=json&where=AnzFall7T%3C%3E0&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=AdmUnitId%20asc&resultOffset=0
&resultRecordCount=1&resultType=standard&cacheHint=true