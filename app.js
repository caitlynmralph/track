$(document).ready(function () {

    var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    var svgHeight = '300';
    var svgWidth = '300';
    var barPadding = '1';

    function createSvg(parent, height, width) {
        return d3.select(parent).append('svg').attr('height', height).attr('width', width);
    }

    //The 1975 - A Change of Heart
    var element = "audioElement1"
    var audioElement1 = document.getElementById(element);
    var audioSrc1 = audioCtx.createMediaElementSource(audioElement1);
    var analyser1 = audioCtx.createAnalyser();

    // Bind our analyser to the media element source.
    audioSrc1.connect(analyser1);
    audioSrc1.connect(audioCtx.destination);

    var frequencyData1 = new Uint8Array(200);

    var svg1 = createSvg('body', svgHeight, svgWidth);

    // d3.select("#the-1975").append(svg1)

    // Create our initial D3 chart.
    svg1.selectAll('rect')
        .data(frequencyData1)
        .enter()
        .append('rect')
        .attr('x', function (d, i) {
        return i * (svgWidth / frequencyData1.length);
        })
        .attr('width', svgWidth / frequencyData1.length - barPadding);

    //Never Shout Never - I Love You 5
    var audioElement2 = document.getElementById('audioElement2');
    var audioSrc2 = audioCtx.createMediaElementSource(audioElement2);
    var analyser2 = audioCtx.createAnalyser();

    // Bind our analyser to the media element source.
    audioSrc2.connect(analyser2);
    audioSrc2.connect(audioCtx.destination);

    var frequencyData2 = new Uint8Array(200);

    var svg2 = createSvg('body', svgHeight, svgWidth);

    // d3.select("#never-shout-never").append(svg2)

    // Create our initial D3 chart.
    svg2.selectAll('rect')
        .data(frequencyData2)
        .enter()
        .append('rect')
        .attr('x', function (d, i) {
            return i * (svgWidth / frequencyData2.length);
        })
        .attr('width', svgWidth / frequencyData2.length - barPadding);

    // Continuously loop and update chart with frequency data.
    function renderChart() {
        requestAnimationFrame(renderChart);

        // Copy frequency data to frequencyData array.
        analyser1.getByteFrequencyData(frequencyData1);

        // Update d3 chart with new data.
        svg1.selectAll('rect')
        .data(frequencyData1)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(0, 0, ' + d + ')';
        });

    // Copy frequency data to frequencyData array.
    analyser2.getByteFrequencyData(frequencyData2);

    // Update d3 chart with new data.
    svg2.selectAll('rect')
        .data(frequencyData2)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(0, 0, ' + d + ')';
        });
    }

    // Run the loop
    renderChart();

});