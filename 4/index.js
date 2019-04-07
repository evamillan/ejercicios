const jsonUrl = 'https://raw.githubusercontent.com/deldersveld/topojson/master/countries/spain/spain-comunidad-with-canary-islands.json';
const tooltip = document.getElementById('tooltip');

const width = 1400;
const height = 700;

const svg = d3.select('#map-container')
  .append('svg')
  .attr('preserveAspectRatio', 'xMinYMin meet')
  .attr('viewBox', '0 0 ' + width + ' ' + height);

const projection = d3.geoMercator()
  .translate([width/2, height/2])
  .scale(1800)
  .center([0,36]);

const path = d3.geoPath()
  .projection(projection);

const map = d3.json(jsonUrl);

map.then(data => {
const regions = topojson.feature(data, data.objects.ESP_adm1);

svg.selectAll('path')
  .data(regions.features)
  .enter()
  .append('path')
  .attr('class','region')
  .attr('d', path)
  .on('mouseover', function(region) {
    position = d3.mouse(this);

    tooltip.innerHTML = region.properties.NAME_1;
    tooltip.style.top = position[1] + 30 +'px';
    tooltip.style.left = position[0] +'px';
    tooltip.style.display = 'block';

    d3.select(this).style('fill', 'rgb(0, 85, 149)');
  })
  .on('mouseout', function(region) {
    d3.select(this).style('fill', 'rgb(153, 153, 153)');

    tooltip.style.display = 'none';
    });

});
