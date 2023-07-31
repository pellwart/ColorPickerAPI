
# Color-Scheme API Project

A color scheme generator app that generates selected color schemes that can be used for website or other projects. 
It uses The Color API to display the scheme colors and hex color codes. 


## API Reference

#### Get color scheme and mode

API: www.thecolorapi.com


```http
  GET https://www.thecolorapi.com/scheme?hex=f55a5a&mode=analogic
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `hex` | `string` | **Optional**. Example: 0047AB Valid hex code|

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `mode` | `string` | **Optional**. Example: analogic Define mode by which to generate the scheme from the seed color|



## Tech Stack

HTML, CSS, JavaScript


