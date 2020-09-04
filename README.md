# TransCountries API

![TransCountries API Logo](https://github.com/d3vkk/transcountries-api/blob/master/trans-countries-logo.png)

Get Country names, Telephone codes and Acronyms. Built with Node.js, Express & Fuse.js

## Methods

### Country Name Search

URL

[`https://transcountriesapi.herokuapp.com/name?name=Trinidad`](https://transcountriesapi.herokuapp.com/name?name=Trinidad)

Response

```json
{
  "found": true,
  "message": "Country found",
  "country": {
    "name": "Trinidad and Tobago",
    "tel": "1-868",
    "acronym": "TT / TTO"
  }
}
```
### Country Tel Search

URL

[`https://transcountriesapi.herokuapp.com/tel?tel=354`](https://transcountriesapi.herokuapp.com/tel?tel=354)

Response

```json
{
  "found": true,
  "message": "Country found",
  "country": {
    "name": "Iceland",
    "tel": "354",
    "acronym": "IS / ISL"
  }
}
```


© 2020 Donald K • Under MIT License
