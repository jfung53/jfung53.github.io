# Chinese Restaurant Analysis

I analyzed Chinese restaurant locations along the urban/rural gradient across the US to see if small towns have higher restaurant-to-Chinese-people ratios than big cities.  

Please find the full research narrative here: [ArcGIS Storymaps site](https://storymaps.arcgis.com/stories/73dfdb3d0b654a9aa9ce8b2bbb27495b) and github repo containing the analysis [here](https://github.com/jfung53/chinese-restaurants). 

## Data

I used point-of-interest data from Foursquare OS Places, population data from the US Census (ACS 2023 5-Year Estimates), and the 12 urban/rural classifications from the National Center for Educational Statistics.  

## Observable Charts

I chose to use Observable Plot to create charts for this project for ease of use and customization. Most of the data processing was done using Python, but sometimes I did some last minute sorting directly in the Observable notebooks, each of which are linked here: 

[`Pictogram/Bar Chart`](https://observablehq.com/d/2cacb8d76251fb9f) of restaurant-to-population ratios by urban/rural locale type. To center the legend over the chart, I added it as a separate html element in Observable. 

[`Heat map`](https://observablehq.com/d/9e0db61d4557638f) of cluster/outlier analysis (local moran's i) results from ArcGIS.  
[`Simple dot plot`](https://observablehq.com/d/395319ced922dba9) of states with the largest Chinese populations. I combined this and the heat map into a single HTML page to display side-by-side.

[`Grid choropleth`](https://observablehq.com/d/620cb1dd925de09f) of the likelihood of finding a Chinese restaurant in a small town, by state. This is forked from a plot in the Observable [gallery](https://observablehq.com/@observablehq/observable-plot-grid-choropleth). The most difficult part of this chart was choosing the colours. I settled on white text and set the opacity of the squares to 80%, but it probably won't pass accessbility tests. 

[`Other charts`](https://observablehq.com/d/f185f3098374c9fd): some experiments that didn't end up being great. Instead of pre-filtering in Python, I wanted to dump all the census tracts into Observable to see what I could come up with. 

## Embedding Workflow

Since the bulk of my project was GIS-based, I chose ArcGIS StoryMaps as the narrative platform. StoryMaps doesn't support Javascript embeds, but it does support embedding HTML pages via a URL. To do this cleanly without the white bar at the bottom I chose `Runtime with Javascript` in the `Embed` dialog instead of `Iframe`. This makes the plot cell a native part of the website which is useful because I wanted it to inherit my own custom styling. 

The code looks like this. I removed the 2nd and 3rd lines (the credit and observable stylesheet):
```html
<div id="observablehq-plotStates2-9db6f6da"></div>
<p>Credit: <a href="https://observablehq.com/d/395319ced922dba9">Plot: Vertical bar chart by 616</a></p>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@observablehq/inspector@5/dist/inspector.css">
<script type="module">
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
import define from "https://api.observablehq.com/d/395319ced922dba9.js?v=4";
new Runtime().module(define, name => {
  if (name === "plotStates2") return new Inspector(document.querySelector("#observablehq-plotStates2-9db6f6da"));
});
</script>
```

The charts needed specific styling to set the tooltip text colour to black while keeping the rest of the text white to match the CSS of the StoryMaps template. This was challenging to figure out, but generative AI helped me identify that it's SVG styling that needed to be applied and I hunted down the specific classes that needed to be styled. Check it out [here](https://github.com/jfung53/jfung53.github.io/blob/main/chinese-restaurants/observable-pages/chartstyles.css). I also added a `.container` style to center the charts so they wouldn't display off-center in on the StoryMaps page.

## Closing Thoughts

The pictogram/bar chart really summarizes what I was trying to unearth in my research: that there does seem to be a Chinese restaurant in most small towns, even if there don't tend to be large Chinese communities in small towns. However, there is still some more statistical analysis I need to run to be able to reject or accept the null hypothesis that Chinese restaurants do not necessarily cluster where Chinese people do, especially in small towns. While I've identified statistically significant clusters of Chinese populations in urban areas, I don't think I quite have the right results for the restaurants.  This is probably due to the very small number of Chinese people (and restaurants) in most census tracts. To be continued... 