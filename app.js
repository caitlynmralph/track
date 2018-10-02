$(document).ready(function () {

    var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    var svgHeight = '300';
    var svgWidth = '300';
    var barPadding = '1';

    function createSvg(parent, height, width) {
        return d3.select(parent).append('svg').attr('height', height).attr('width', width);
    }

    var audioElement1 = document.getElementById('audioElement1');
    var audioSrc1 = audioCtx.createMediaElementSource(audioElement1);
    var analyser1 = audioCtx.createAnalyser(); 
    audioSrc1.connect(analyser1);
    audioSrc1.connect(audioCtx.destination);
    var frequencyData1 = new Uint8Array(200);
    var svg1 = createSvg('#morning1', svgHeight, svgWidth);
    svg1.selectAll('rect')
    .data(frequencyData1)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData1.length);
    })
    .attr('width', svgWidth / frequencyData1.length - barPadding);
    var audioElement2 = document.getElementById('audioElement2');
    var audioSrc2 = audioCtx.createMediaElementSource(audioElement2);
    var analyser2 = audioCtx.createAnalyser(); 
    audioSrc2.connect(analyser2);
    audioSrc2.connect(audioCtx.destination);
    var frequencyData2 = new Uint8Array(200);
    var svg2 = createSvg('#morning1', svgHeight, svgWidth);
    svg2.selectAll('rect')
    .data(frequencyData2)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData2.length);
    })
    .attr('width', svgWidth / frequencyData2.length - barPadding);
    var audioElement3 = document.getElementById('audioElement3');
    var audioSrc3 = audioCtx.createMediaElementSource(audioElement3);
    var analyser3 = audioCtx.createAnalyser(); 
    audioSrc3.connect(analyser3);
    audioSrc3.connect(audioCtx.destination);
    var frequencyData3 = new Uint8Array(200);
    var svg3 = createSvg('#morning1', svgHeight, svgWidth);
    svg3.selectAll('rect')
    .data(frequencyData3)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData3.length);
    })
    .attr('width', svgWidth / frequencyData3.length - barPadding);
    var audioElement4 = document.getElementById('audioElement4');
    var audioSrc4 = audioCtx.createMediaElementSource(audioElement4);
    var analyser4 = audioCtx.createAnalyser(); 
    audioSrc4.connect(analyser4);
    audioSrc4.connect(audioCtx.destination);
    var frequencyData4 = new Uint8Array(200);
    var svg4 = createSvg('#morning1', svgHeight, svgWidth);
    svg4.selectAll('rect')
    .data(frequencyData4)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData4.length);
    })
    .attr('width', svgWidth / frequencyData4.length - barPadding);
    var audioElement5 = document.getElementById('audioElement5');
    var audioSrc5 = audioCtx.createMediaElementSource(audioElement5);
    var analyser5 = audioCtx.createAnalyser(); 
    audioSrc5.connect(analyser5);
    audioSrc5.connect(audioCtx.destination);
    var frequencyData5 = new Uint8Array(200);
    var svg5 = createSvg('#morning1', svgHeight, svgWidth);
    svg5.selectAll('rect')
    .data(frequencyData5)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData5.length);
    })
    .attr('width', svgWidth / frequencyData5.length - barPadding);
    var audioElement6 = document.getElementById('audioElement6');
    var audioSrc6 = audioCtx.createMediaElementSource(audioElement6);
    var analyser6 = audioCtx.createAnalyser(); 
    audioSrc6.connect(analyser6);
    audioSrc6.connect(audioCtx.destination);
    var frequencyData6 = new Uint8Array(200);
    var svg6 = createSvg('#morning1', svgHeight, svgWidth);
    svg6.selectAll('rect')
    .data(frequencyData6)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData6.length);
    })
    .attr('width', svgWidth / frequencyData6.length - barPadding);
    var audioElement7 = document.getElementById('audioElement7');
    var audioSrc7 = audioCtx.createMediaElementSource(audioElement7);
    var analyser7 = audioCtx.createAnalyser(); 
    audioSrc7.connect(analyser7);
    audioSrc7.connect(audioCtx.destination);
    var frequencyData7 = new Uint8Array(200);
    var svg7 = createSvg('#morning1', svgHeight, svgWidth);
    svg7.selectAll('rect')
    .data(frequencyData7)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData7.length);
    })
    .attr('width', svgWidth / frequencyData7.length - barPadding);
    var audioElement8 = document.getElementById('audioElement8');
    var audioSrc8 = audioCtx.createMediaElementSource(audioElement8);
    var analyser8 = audioCtx.createAnalyser(); 
    audioSrc8.connect(analyser8);
    audioSrc8.connect(audioCtx.destination);
    var frequencyData8 = new Uint8Array(200);
    var svg8 = createSvg('#morning1', svgHeight, svgWidth);
    svg8.selectAll('rect')
    .data(frequencyData8)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData8.length);
    })
    .attr('width', svgWidth / frequencyData8.length - barPadding);
    var audioElement9 = document.getElementById('audioElement9');
    var audioSrc9 = audioCtx.createMediaElementSource(audioElement9);
    var analyser9 = audioCtx.createAnalyser(); 
    audioSrc9.connect(analyser9);
    audioSrc9.connect(audioCtx.destination);
    var frequencyData9 = new Uint8Array(200);
    var svg9 = createSvg('#morning1', svgHeight, svgWidth);
    svg9.selectAll('rect')
    .data(frequencyData9)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData9.length);
    })
    .attr('width', svgWidth / frequencyData9.length - barPadding);
    var audioElement10 = document.getElementById('audioElement10');
    var audioSrc10 = audioCtx.createMediaElementSource(audioElement10);
    var analyser10 = audioCtx.createAnalyser(); 
    audioSrc10.connect(analyser10);
    audioSrc10.connect(audioCtx.destination);
    var frequencyData10 = new Uint8Array(200);
    var svg10 = createSvg('#morning1', svgHeight, svgWidth);
    svg10.selectAll('rect')
    .data(frequencyData10)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData10.length);
    })
    .attr('width', svgWidth / frequencyData10.length - barPadding);
    var audioElement11 = document.getElementById('audioElement11');
    var audioSrc11 = audioCtx.createMediaElementSource(audioElement11);
    var analyser11 = audioCtx.createAnalyser(); 
    audioSrc11.connect(analyser11);
    audioSrc11.connect(audioCtx.destination);
    var frequencyData11 = new Uint8Array(200);
    var svg11 = createSvg('#morning2', svgHeight, svgWidth);
    svg11.selectAll('rect')
    .data(frequencyData11)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData11.length);
    })
    .attr('width', svgWidth / frequencyData11.length - barPadding);
    var audioElement12 = document.getElementById('audioElement12');
    var audioSrc12 = audioCtx.createMediaElementSource(audioElement12);
    var analyser12 = audioCtx.createAnalyser(); 
    audioSrc12.connect(analyser12);
    audioSrc12.connect(audioCtx.destination);
    var frequencyData12 = new Uint8Array(200);
    var svg12 = createSvg('#morning2', svgHeight, svgWidth);
    svg12.selectAll('rect')
    .data(frequencyData12)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData12.length);
    })
    .attr('width', svgWidth / frequencyData12.length - barPadding);
    var audioElement13 = document.getElementById('audioElement13');
    var audioSrc13 = audioCtx.createMediaElementSource(audioElement13);
    var analyser13 = audioCtx.createAnalyser(); 
    audioSrc13.connect(analyser13);
    audioSrc13.connect(audioCtx.destination);
    var frequencyData13 = new Uint8Array(200);
    var svg13 = createSvg('#morning2', svgHeight, svgWidth);
    svg13.selectAll('rect')
    .data(frequencyData13)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData13.length);
    })
    .attr('width', svgWidth / frequencyData13.length - barPadding);
    var audioElement14 = document.getElementById('audioElement14');
    var audioSrc14 = audioCtx.createMediaElementSource(audioElement14);
    var analyser14 = audioCtx.createAnalyser(); 
    audioSrc14.connect(analyser14);
    audioSrc14.connect(audioCtx.destination);
    var frequencyData14 = new Uint8Array(200);
    var svg14 = createSvg('#morning2', svgHeight, svgWidth);
    svg14.selectAll('rect')
    .data(frequencyData14)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData14.length);
    })
    .attr('width', svgWidth / frequencyData14.length - barPadding);
    var audioElement15 = document.getElementById('audioElement15');
    var audioSrc15 = audioCtx.createMediaElementSource(audioElement15);
    var analyser15 = audioCtx.createAnalyser(); 
    audioSrc15.connect(analyser15);
    audioSrc15.connect(audioCtx.destination);
    var frequencyData15 = new Uint8Array(200);
    var svg15 = createSvg('#morning2', svgHeight, svgWidth);
    svg15.selectAll('rect')
    .data(frequencyData15)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData15.length);
    })
    .attr('width', svgWidth / frequencyData15.length - barPadding);
    var audioElement16 = document.getElementById('audioElement16');
    var audioSrc16 = audioCtx.createMediaElementSource(audioElement16);
    var analyser16 = audioCtx.createAnalyser(); 
    audioSrc16.connect(analyser16);
    audioSrc16.connect(audioCtx.destination);
    var frequencyData16 = new Uint8Array(200);
    var svg16 = createSvg('#morning2', svgHeight, svgWidth);
    svg16.selectAll('rect')
    .data(frequencyData16)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData16.length);
    })
    .attr('width', svgWidth / frequencyData16.length - barPadding);
    var audioElement17 = document.getElementById('audioElement17');
    var audioSrc17 = audioCtx.createMediaElementSource(audioElement17);
    var analyser17 = audioCtx.createAnalyser(); 
    audioSrc17.connect(analyser17);
    audioSrc17.connect(audioCtx.destination);
    var frequencyData17 = new Uint8Array(200);
    var svg17 = createSvg('#morning2', svgHeight, svgWidth);
    svg17.selectAll('rect')
    .data(frequencyData17)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData17.length);
    })
    .attr('width', svgWidth / frequencyData17.length - barPadding);
    var audioElement18 = document.getElementById('audioElement18');
    var audioSrc18 = audioCtx.createMediaElementSource(audioElement18);
    var analyser18 = audioCtx.createAnalyser(); 
    audioSrc18.connect(analyser18);
    audioSrc18.connect(audioCtx.destination);
    var frequencyData18 = new Uint8Array(200);
    var svg18 = createSvg('#morning2', svgHeight, svgWidth);
    svg18.selectAll('rect')
    .data(frequencyData18)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData18.length);
    })
    .attr('width', svgWidth / frequencyData18.length - barPadding);
    var audioElement19 = document.getElementById('audioElement19');
    var audioSrc19 = audioCtx.createMediaElementSource(audioElement19);
    var analyser19 = audioCtx.createAnalyser(); 
    audioSrc19.connect(analyser19);
    audioSrc19.connect(audioCtx.destination);
    var frequencyData19 = new Uint8Array(200);
    var svg19 = createSvg('#morning3', svgHeight, svgWidth);
    svg19.selectAll('rect')
    .data(frequencyData19)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData19.length);
    })
    .attr('width', svgWidth / frequencyData19.length - barPadding);
    var audioElement20 = document.getElementById('audioElement20');
    var audioSrc20 = audioCtx.createMediaElementSource(audioElement20);
    var analyser20 = audioCtx.createAnalyser(); 
    audioSrc20.connect(analyser20);
    audioSrc20.connect(audioCtx.destination);
    var frequencyData20 = new Uint8Array(200);
    var svg20 = createSvg('#morning3', svgHeight, svgWidth);
    svg20.selectAll('rect')
    .data(frequencyData20)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData20.length);
    })
    .attr('width', svgWidth / frequencyData20.length - barPadding);
    var audioElement21 = document.getElementById('audioElement21');
    var audioSrc21 = audioCtx.createMediaElementSource(audioElement21);
    var analyser21 = audioCtx.createAnalyser(); 
    audioSrc21.connect(analyser21);
    audioSrc21.connect(audioCtx.destination);
    var frequencyData21 = new Uint8Array(200);
    var svg21 = createSvg('#morning3', svgHeight, svgWidth);
    svg21.selectAll('rect')
    .data(frequencyData21)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData21.length);
    })
    .attr('width', svgWidth / frequencyData21.length - barPadding);
    var audioElement22 = document.getElementById('audioElement22');
    var audioSrc22 = audioCtx.createMediaElementSource(audioElement22);
    var analyser22 = audioCtx.createAnalyser(); 
    audioSrc22.connect(analyser22);
    audioSrc22.connect(audioCtx.destination);
    var frequencyData22 = new Uint8Array(200);
    var svg22 = createSvg('#morning3', svgHeight, svgWidth);
    svg22.selectAll('rect')
    .data(frequencyData22)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData22.length);
    })
    .attr('width', svgWidth / frequencyData22.length - barPadding);
    var audioElement23 = document.getElementById('audioElement23');
    var audioSrc23 = audioCtx.createMediaElementSource(audioElement23);
    var analyser23 = audioCtx.createAnalyser(); 
    audioSrc23.connect(analyser23);
    audioSrc23.connect(audioCtx.destination);
    var frequencyData23 = new Uint8Array(200);
    var svg23 = createSvg('#morning3', svgHeight, svgWidth);
    svg23.selectAll('rect')
    .data(frequencyData23)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData23.length);
    })
    .attr('width', svgWidth / frequencyData23.length - barPadding);
    var audioElement24 = document.getElementById('audioElement24');
    var audioSrc24 = audioCtx.createMediaElementSource(audioElement24);
    var analyser24 = audioCtx.createAnalyser(); 
    audioSrc24.connect(analyser24);
    audioSrc24.connect(audioCtx.destination);
    var frequencyData24 = new Uint8Array(200);
    var svg24 = createSvg('#morning3', svgHeight, svgWidth);
    svg24.selectAll('rect')
    .data(frequencyData24)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData24.length);
    })
    .attr('width', svgWidth / frequencyData24.length - barPadding);
    var audioElement25 = document.getElementById('audioElement25');
    var audioSrc25 = audioCtx.createMediaElementSource(audioElement25);
    var analyser25 = audioCtx.createAnalyser(); 
    audioSrc25.connect(analyser25);
    audioSrc25.connect(audioCtx.destination);
    var frequencyData25 = new Uint8Array(200);
    var svg25 = createSvg('#morning3', svgHeight, svgWidth);
    svg25.selectAll('rect')
    .data(frequencyData25)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData25.length);
    })
    .attr('width', svgWidth / frequencyData25.length - barPadding);
    var audioElement26 = document.getElementById('audioElement26');
    var audioSrc26 = audioCtx.createMediaElementSource(audioElement26);
    var analyser26 = audioCtx.createAnalyser(); 
    audioSrc26.connect(analyser26);
    audioSrc26.connect(audioCtx.destination);
    var frequencyData26 = new Uint8Array(200);
    var svg26 = createSvg('#morning3', svgHeight, svgWidth);
    svg26.selectAll('rect')
    .data(frequencyData26)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData26.length);
    })
    .attr('width', svgWidth / frequencyData26.length - barPadding);
    var audioElement27 = document.getElementById('audioElement27');
    var audioSrc27 = audioCtx.createMediaElementSource(audioElement27);
    var analyser27 = audioCtx.createAnalyser(); 
    audioSrc27.connect(analyser27);
    audioSrc27.connect(audioCtx.destination);
    var frequencyData27 = new Uint8Array(200);
    var svg27 = createSvg('#morning3', svgHeight, svgWidth);
    svg27.selectAll('rect')
    .data(frequencyData27)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData27.length);
    })
    .attr('width', svgWidth / frequencyData27.length - barPadding);
    var audioElement28 = document.getElementById('audioElement28');
    var audioSrc28 = audioCtx.createMediaElementSource(audioElement28);
    var analyser28 = audioCtx.createAnalyser(); 
    audioSrc28.connect(analyser28);
    audioSrc28.connect(audioCtx.destination);
    var frequencyData28 = new Uint8Array(200);
    var svg28 = createSvg('#afternoon4', svgHeight, svgWidth);
    svg28.selectAll('rect')
    .data(frequencyData28)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData28.length);
    })
    .attr('width', svgWidth / frequencyData28.length - barPadding);
    var audioElement29 = document.getElementById('audioElement29');
    var audioSrc29 = audioCtx.createMediaElementSource(audioElement29);
    var analyser29 = audioCtx.createAnalyser(); 
    audioSrc29.connect(analyser29);
    audioSrc29.connect(audioCtx.destination);
    var frequencyData29 = new Uint8Array(200);
    var svg29 = createSvg('#afternoon4', svgHeight, svgWidth);
    svg29.selectAll('rect')
    .data(frequencyData29)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData29.length);
    })
    .attr('width', svgWidth / frequencyData29.length - barPadding);
    var audioElement30 = document.getElementById('audioElement30');
    var audioSrc30 = audioCtx.createMediaElementSource(audioElement30);
    var analyser30 = audioCtx.createAnalyser(); 
    audioSrc30.connect(analyser30);
    audioSrc30.connect(audioCtx.destination);
    var frequencyData30 = new Uint8Array(200);
    var svg30 = createSvg('#afternoon4', svgHeight, svgWidth);
    svg30.selectAll('rect')
    .data(frequencyData30)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData30.length);
    })
    .attr('width', svgWidth / frequencyData30.length - barPadding);
    var audioElement31 = document.getElementById('audioElement31');
    var audioSrc31 = audioCtx.createMediaElementSource(audioElement31);
    var analyser31 = audioCtx.createAnalyser(); 
    audioSrc31.connect(analyser31);
    audioSrc31.connect(audioCtx.destination);
    var frequencyData31 = new Uint8Array(200);
    var svg31 = createSvg('#afternoon4', svgHeight, svgWidth);
    svg31.selectAll('rect')
    .data(frequencyData31)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData31.length);
    })
    .attr('width', svgWidth / frequencyData31.length - barPadding);
    var audioElement32 = document.getElementById('audioElement32');
    var audioSrc32 = audioCtx.createMediaElementSource(audioElement32);
    var analyser32 = audioCtx.createAnalyser(); 
    audioSrc32.connect(analyser32);
    audioSrc32.connect(audioCtx.destination);
    var frequencyData32 = new Uint8Array(200);
    var svg32 = createSvg('#afternoon4', svgHeight, svgWidth);
    svg32.selectAll('rect')
    .data(frequencyData32)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData32.length);
    })
    .attr('width', svgWidth / frequencyData32.length - barPadding);
    var audioElement33 = document.getElementById('audioElement33');
    var audioSrc33 = audioCtx.createMediaElementSource(audioElement33);
    var analyser33 = audioCtx.createAnalyser(); 
    audioSrc33.connect(analyser33);
    audioSrc33.connect(audioCtx.destination);
    var frequencyData33 = new Uint8Array(200);
    var svg33 = createSvg('#afternoon4', svgHeight, svgWidth);
    svg33.selectAll('rect')
    .data(frequencyData33)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData33.length);
    })
    .attr('width', svgWidth / frequencyData33.length - barPadding);
    var audioElement35 = document.getElementById('audioElement35');
    var audioSrc35 = audioCtx.createMediaElementSource(audioElement35);
    var analyser35 = audioCtx.createAnalyser(); 
    audioSrc35.connect(analyser35);
    audioSrc35.connect(audioCtx.destination);
    var frequencyData35 = new Uint8Array(200);
    var svg35 = createSvg('#afternoon5', svgHeight, svgWidth);
    svg35.selectAll('rect')
    .data(frequencyData35)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData35.length);
    })
    .attr('width', svgWidth / frequencyData35.length - barPadding);
    var audioElement36 = document.getElementById('audioElement36');
    var audioSrc36 = audioCtx.createMediaElementSource(audioElement36);
    var analyser36 = audioCtx.createAnalyser(); 
    audioSrc36.connect(analyser36);
    audioSrc36.connect(audioCtx.destination);
    var frequencyData36 = new Uint8Array(200);
    var svg36 = createSvg('#afternoon5', svgHeight, svgWidth);
    svg36.selectAll('rect')
    .data(frequencyData36)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData36.length);
    })
    .attr('width', svgWidth / frequencyData36.length - barPadding);
    var audioElement37 = document.getElementById('audioElement37');
    var audioSrc37 = audioCtx.createMediaElementSource(audioElement37);
    var analyser37 = audioCtx.createAnalyser(); 
    audioSrc37.connect(analyser37);
    audioSrc37.connect(audioCtx.destination);
    var frequencyData37 = new Uint8Array(200);
    var svg37 = createSvg('#afternoon5', svgHeight, svgWidth);
    svg37.selectAll('rect')
    .data(frequencyData37)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData37.length);
    })
    .attr('width', svgWidth / frequencyData37.length - barPadding);
    var audioElement38 = document.getElementById('audioElement38');
    var audioSrc38 = audioCtx.createMediaElementSource(audioElement38);
    var analyser38 = audioCtx.createAnalyser(); 
    audioSrc38.connect(analyser38);
    audioSrc38.connect(audioCtx.destination);
    var frequencyData38 = new Uint8Array(200);
    var svg38 = createSvg('#afternoon5', svgHeight, svgWidth);
    svg38.selectAll('rect')
    .data(frequencyData38)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData38.length);
    })
    .attr('width', svgWidth / frequencyData38.length - barPadding);
    var audioElement39 = document.getElementById('audioElement39');
    var audioSrc39 = audioCtx.createMediaElementSource(audioElement39);
    var analyser39 = audioCtx.createAnalyser(); 
    audioSrc39.connect(analyser39);
    audioSrc39.connect(audioCtx.destination);
    var frequencyData39 = new Uint8Array(200);
    var svg39 = createSvg('#afternoon5', svgHeight, svgWidth);
    svg39.selectAll('rect')
    .data(frequencyData39)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData39.length);
    })
    .attr('width', svgWidth / frequencyData39.length - barPadding);
    var audioElement40 = document.getElementById('audioElement40');
    var audioSrc40 = audioCtx.createMediaElementSource(audioElement40);
    var analyser40 = audioCtx.createAnalyser(); 
    audioSrc40.connect(analyser40);
    audioSrc40.connect(audioCtx.destination);
    var frequencyData40 = new Uint8Array(200);
    var svg40 = createSvg('#afternoon5', svgHeight, svgWidth);
    svg40.selectAll('rect')
    .data(frequencyData40)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData40.length);
    })
    .attr('width', svgWidth / frequencyData40.length - barPadding);
    var audioElement41 = document.getElementById('audioElement41');
    var audioSrc41 = audioCtx.createMediaElementSource(audioElement41);
    var analyser41 = audioCtx.createAnalyser(); 
    audioSrc41.connect(analyser41);
    audioSrc41.connect(audioCtx.destination);
    var frequencyData41 = new Uint8Array(200);
    var svg41 = createSvg('#afternoon5', svgHeight, svgWidth);
    svg41.selectAll('rect')
    .data(frequencyData41)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData41.length);
    })
    .attr('width', svgWidth / frequencyData41.length - barPadding);
    var audioElement42 = document.getElementById('audioElement42');
    var audioSrc42 = audioCtx.createMediaElementSource(audioElement42);
    var analyser42 = audioCtx.createAnalyser(); 
    audioSrc42.connect(analyser42);
    audioSrc42.connect(audioCtx.destination);
    var frequencyData42 = new Uint8Array(200);
    var svg42 = createSvg('#afternoon5', svgHeight, svgWidth);
    svg42.selectAll('rect')
    .data(frequencyData42)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData42.length);
    })
    .attr('width', svgWidth / frequencyData42.length - barPadding);
    var audioElement43 = document.getElementById('audioElement43');
    var audioSrc43 = audioCtx.createMediaElementSource(audioElement43);
    var analyser43 = audioCtx.createAnalyser(); 
    audioSrc43.connect(analyser43);
    audioSrc43.connect(audioCtx.destination);
    var frequencyData43 = new Uint8Array(200);
    var svg43 = createSvg('#afternoon5', svgHeight, svgWidth);
    svg43.selectAll('rect')
    .data(frequencyData43)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData43.length);
    })
    .attr('width', svgWidth / frequencyData43.length - barPadding);
    var audioElement44 = document.getElementById('audioElement44');
    var audioSrc44 = audioCtx.createMediaElementSource(audioElement44);
    var analyser44 = audioCtx.createAnalyser(); 
    audioSrc44.connect(analyser44);
    audioSrc44.connect(audioCtx.destination);
    var frequencyData44 = new Uint8Array(200);
    var svg44 = createSvg('#afternoon5', svgHeight, svgWidth);
    svg44.selectAll('rect')
    .data(frequencyData44)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData44.length);
    })
    .attr('width', svgWidth / frequencyData44.length - barPadding);
    var audioElement45 = document.getElementById('audioElement45');
    var audioSrc45 = audioCtx.createMediaElementSource(audioElement45);
    var analyser45 = audioCtx.createAnalyser(); 
    audioSrc45.connect(analyser45);
    audioSrc45.connect(audioCtx.destination);
    var frequencyData45 = new Uint8Array(200);
    var svg45 = createSvg('#afternoon6', svgHeight, svgWidth);
    svg45.selectAll('rect')
    .data(frequencyData45)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData45.length);
    })
    .attr('width', svgWidth / frequencyData45.length - barPadding);
    var audioElement46 = document.getElementById('audioElement46');
    var audioSrc46 = audioCtx.createMediaElementSource(audioElement46);
    var analyser46 = audioCtx.createAnalyser(); 
    audioSrc46.connect(analyser46);
    audioSrc46.connect(audioCtx.destination);
    var frequencyData46 = new Uint8Array(200);
    var svg46 = createSvg('#afternoon6', svgHeight, svgWidth);
    svg46.selectAll('rect')
    .data(frequencyData46)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData46.length);
    })
    .attr('width', svgWidth / frequencyData46.length - barPadding);
    var audioElement47 = document.getElementById('audioElement47');
    var audioSrc47 = audioCtx.createMediaElementSource(audioElement47);
    var analyser47 = audioCtx.createAnalyser(); 
    audioSrc47.connect(analyser47);
    audioSrc47.connect(audioCtx.destination);
    var frequencyData47 = new Uint8Array(200);
    var svg47 = createSvg('#afternoon6', svgHeight, svgWidth);
    svg47.selectAll('rect')
    .data(frequencyData47)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData47.length);
    })
    .attr('width', svgWidth / frequencyData47.length - barPadding);
    var audioElement48 = document.getElementById('audioElement48');
    var audioSrc48 = audioCtx.createMediaElementSource(audioElement48);
    var analyser48 = audioCtx.createAnalyser(); 
    audioSrc48.connect(analyser48);
    audioSrc48.connect(audioCtx.destination);
    var frequencyData48 = new Uint8Array(200);
    var svg48 = createSvg('#afternoon6', svgHeight, svgWidth);
    svg48.selectAll('rect')
    .data(frequencyData48)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData48.length);
    })
    .attr('width', svgWidth / frequencyData48.length - barPadding);
    var audioElement49 = document.getElementById('audioElement49');
    var audioSrc49 = audioCtx.createMediaElementSource(audioElement49);
    var analyser49 = audioCtx.createAnalyser(); 
    audioSrc49.connect(analyser49);
    audioSrc49.connect(audioCtx.destination);
    var frequencyData49 = new Uint8Array(200);
    var svg49 = createSvg('#afternoon6', svgHeight, svgWidth);
    svg49.selectAll('rect')
    .data(frequencyData49)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData49.length);
    })
    .attr('width', svgWidth / frequencyData49.length - barPadding);
    var audioElement50 = document.getElementById('audioElement50');
    var audioSrc50 = audioCtx.createMediaElementSource(audioElement50);
    var analyser50 = audioCtx.createAnalyser(); 
    audioSrc50.connect(analyser50);
    audioSrc50.connect(audioCtx.destination);
    var frequencyData50 = new Uint8Array(200);
    var svg50 = createSvg('#afternoon6', svgHeight, svgWidth);
    svg50.selectAll('rect')
    .data(frequencyData50)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData50.length);
    })
    .attr('width', svgWidth / frequencyData50.length - barPadding);
    var audioElement51 = document.getElementById('audioElement51');
    var audioSrc51 = audioCtx.createMediaElementSource(audioElement51);
    var analyser51 = audioCtx.createAnalyser(); 
    audioSrc51.connect(analyser51);
    audioSrc51.connect(audioCtx.destination);
    var frequencyData51 = new Uint8Array(200);
    var svg51 = createSvg('#afternoon6', svgHeight, svgWidth);
    svg51.selectAll('rect')
    .data(frequencyData51)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData51.length);
    })
    .attr('width', svgWidth / frequencyData51.length - barPadding);
    var audioElement52 = document.getElementById('audioElement52');
    var audioSrc52 = audioCtx.createMediaElementSource(audioElement52);
    var analyser52 = audioCtx.createAnalyser(); 
    audioSrc52.connect(analyser52);
    audioSrc52.connect(audioCtx.destination);
    var frequencyData52 = new Uint8Array(200);
    var svg52 = createSvg('#afternoon6', svgHeight, svgWidth);
    svg52.selectAll('rect')
    .data(frequencyData52)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData52.length);
    })
    .attr('width', svgWidth / frequencyData52.length - barPadding);
    var audioElement53 = document.getElementById('audioElement53');
    var audioSrc53 = audioCtx.createMediaElementSource(audioElement53);
    var analyser53 = audioCtx.createAnalyser(); 
    audioSrc53.connect(analyser53);
    audioSrc53.connect(audioCtx.destination);
    var frequencyData53 = new Uint8Array(200);
    var svg53 = createSvg('#afternoon6', svgHeight, svgWidth);
    svg53.selectAll('rect')
    .data(frequencyData53)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData53.length);
    })
    .attr('width', svgWidth / frequencyData53.length - barPadding);
    var audioElement54 = document.getElementById('audioElement54');
    var audioSrc54 = audioCtx.createMediaElementSource(audioElement54);
    var analyser54 = audioCtx.createAnalyser(); 
    audioSrc54.connect(analyser54);
    audioSrc54.connect(audioCtx.destination);
    var frequencyData54 = new Uint8Array(200);
    var svg54 = createSvg('#afternoon6', svgHeight, svgWidth);
    svg54.selectAll('rect')
    .data(frequencyData54)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData54.length);
    })
    .attr('width', svgWidth / frequencyData54.length - barPadding);
    var audioElement55 = document.getElementById('audioElement55');
    var audioSrc55 = audioCtx.createMediaElementSource(audioElement55);
    var analyser55 = audioCtx.createAnalyser(); 
    audioSrc55.connect(analyser55);
    audioSrc55.connect(audioCtx.destination);
    var frequencyData55 = new Uint8Array(200);
    var svg55 = createSvg('#afternoon6', svgHeight, svgWidth);
    svg55.selectAll('rect')
    .data(frequencyData55)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData55.length);
    })
    .attr('width', svgWidth / frequencyData55.length - barPadding);
    var audioElement56 = document.getElementById('audioElement56');
    var audioSrc56 = audioCtx.createMediaElementSource(audioElement56);
    var analyser56 = audioCtx.createAnalyser(); 
    audioSrc56.connect(analyser56);
    audioSrc56.connect(audioCtx.destination);
    var frequencyData56 = new Uint8Array(200);
    var svg56 = createSvg('#afternoon6', svgHeight, svgWidth);
    svg56.selectAll('rect')
    .data(frequencyData56)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData56.length);
    })
    .attr('width', svgWidth / frequencyData56.length - barPadding);
    var audioElement57 = document.getElementById('audioElement57');
    var audioSrc57 = audioCtx.createMediaElementSource(audioElement57);
    var analyser57 = audioCtx.createAnalyser(); 
    audioSrc57.connect(analyser57);
    audioSrc57.connect(audioCtx.destination);
    var frequencyData57 = new Uint8Array(200);
    var svg57 = createSvg('#afternoon6', svgHeight, svgWidth);
    svg57.selectAll('rect')
    .data(frequencyData57)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData57.length);
    })
    .attr('width', svgWidth / frequencyData57.length - barPadding);
    var audioElement58 = document.getElementById('audioElement58');
    var audioSrc58 = audioCtx.createMediaElementSource(audioElement58);
    var analyser58 = audioCtx.createAnalyser(); 
    audioSrc58.connect(analyser58);
    audioSrc58.connect(audioCtx.destination);
    var frequencyData58 = new Uint8Array(200);
    var svg58 = createSvg('#afternoon6', svgHeight, svgWidth);
    svg58.selectAll('rect')
    .data(frequencyData58)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData58.length);
    })
    .attr('width', svgWidth / frequencyData58.length - barPadding);
    var audioElement59 = document.getElementById('audioElement59');
    var audioSrc59 = audioCtx.createMediaElementSource(audioElement59);
    var analyser59 = audioCtx.createAnalyser(); 
    audioSrc59.connect(analyser59);
    audioSrc59.connect(audioCtx.destination);
    var frequencyData59 = new Uint8Array(200);
    var svg59 = createSvg('#afternoon7', svgHeight, svgWidth);
    svg59.selectAll('rect')
    .data(frequencyData59)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData59.length);
    })
    .attr('width', svgWidth / frequencyData59.length - barPadding);
    var audioElement60 = document.getElementById('audioElement60');
    var audioSrc60 = audioCtx.createMediaElementSource(audioElement60);
    var analyser60 = audioCtx.createAnalyser(); 
    audioSrc60.connect(analyser60);
    audioSrc60.connect(audioCtx.destination);
    var frequencyData60 = new Uint8Array(200);
    var svg60 = createSvg('#afternoon7', svgHeight, svgWidth);
    svg60.selectAll('rect')
    .data(frequencyData60)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData60.length);
    })
    .attr('width', svgWidth / frequencyData60.length - barPadding);
    var audioElement61 = document.getElementById('audioElement61');
    var audioSrc61 = audioCtx.createMediaElementSource(audioElement61);
    var analyser61 = audioCtx.createAnalyser(); 
    audioSrc61.connect(analyser61);
    audioSrc61.connect(audioCtx.destination);
    var frequencyData61 = new Uint8Array(200);
    var svg61 = createSvg('#afternoon7', svgHeight, svgWidth);
    svg61.selectAll('rect')
    .data(frequencyData61)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData61.length);
    })
    .attr('width', svgWidth / frequencyData61.length - barPadding);
    var audioElement62 = document.getElementById('audioElement62');
    var audioSrc62 = audioCtx.createMediaElementSource(audioElement62);
    var analyser62 = audioCtx.createAnalyser(); 
    audioSrc62.connect(analyser62);
    audioSrc62.connect(audioCtx.destination);
    var frequencyData62 = new Uint8Array(200);
    var svg62 = createSvg('#afternoon7', svgHeight, svgWidth);
    svg62.selectAll('rect')
    .data(frequencyData62)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData62.length);
    })
    .attr('width', svgWidth / frequencyData62.length - barPadding);
    var audioElement63 = document.getElementById('audioElement63');
    var audioSrc63 = audioCtx.createMediaElementSource(audioElement63);
    var analyser63 = audioCtx.createAnalyser(); 
    audioSrc63.connect(analyser63);
    audioSrc63.connect(audioCtx.destination);
    var frequencyData63 = new Uint8Array(200);
    var svg63 = createSvg('#afternoon7', svgHeight, svgWidth);
    svg63.selectAll('rect')
    .data(frequencyData63)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData63.length);
    })
    .attr('width', svgWidth / frequencyData63.length - barPadding);
    var audioElement64 = document.getElementById('audioElement64');
    var audioSrc64 = audioCtx.createMediaElementSource(audioElement64);
    var analyser64 = audioCtx.createAnalyser(); 
    audioSrc64.connect(analyser64);
    audioSrc64.connect(audioCtx.destination);
    var frequencyData64 = new Uint8Array(200);
    var svg64 = createSvg('#afternoon7', svgHeight, svgWidth);
    svg64.selectAll('rect')
    .data(frequencyData64)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData64.length);
    })
    .attr('width', svgWidth / frequencyData64.length - barPadding);
    var audioElement65 = document.getElementById('audioElement65');
    var audioSrc65 = audioCtx.createMediaElementSource(audioElement65);
    var analyser65 = audioCtx.createAnalyser(); 
    audioSrc65.connect(analyser65);
    audioSrc65.connect(audioCtx.destination);
    var frequencyData65 = new Uint8Array(200);
    var svg65 = createSvg('#afternoon7', svgHeight, svgWidth);
    svg65.selectAll('rect')
    .data(frequencyData65)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData65.length);
    })
    .attr('width', svgWidth / frequencyData65.length - barPadding);
    var audioElement66 = document.getElementById('audioElement66');
    var audioSrc66 = audioCtx.createMediaElementSource(audioElement66);
    var analyser66 = audioCtx.createAnalyser(); 
    audioSrc66.connect(analyser66);
    audioSrc66.connect(audioCtx.destination);
    var frequencyData66 = new Uint8Array(200);
    var svg66 = createSvg('#afternoon7', svgHeight, svgWidth);
    svg66.selectAll('rect')
    .data(frequencyData66)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData66.length);
    })
    .attr('width', svgWidth / frequencyData66.length - barPadding);
    var audioElement67 = document.getElementById('audioElement67');
    var audioSrc67 = audioCtx.createMediaElementSource(audioElement67);
    var analyser67 = audioCtx.createAnalyser(); 
    audioSrc67.connect(analyser67);
    audioSrc67.connect(audioCtx.destination);
    var frequencyData67 = new Uint8Array(200);
    var svg67 = createSvg('#afternoon7', svgHeight, svgWidth);
    svg67.selectAll('rect')
    .data(frequencyData67)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData67.length);
    })
    .attr('width', svgWidth / frequencyData67.length - barPadding);
    var audioElement68 = document.getElementById('audioElement68');
    var audioSrc68 = audioCtx.createMediaElementSource(audioElement68);
    var analyser68 = audioCtx.createAnalyser(); 
    audioSrc68.connect(analyser68);
    audioSrc68.connect(audioCtx.destination);
    var frequencyData68 = new Uint8Array(200);
    var svg68 = createSvg('#afternoon7', svgHeight, svgWidth);
    svg68.selectAll('rect')
    .data(frequencyData68)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData68.length);
    })
    .attr('width', svgWidth / frequencyData68.length - barPadding);
    var audioElement69 = document.getElementById('audioElement69');
    var audioSrc69 = audioCtx.createMediaElementSource(audioElement69);
    var analyser69 = audioCtx.createAnalyser(); 
    audioSrc69.connect(analyser69);
    audioSrc69.connect(audioCtx.destination);
    var frequencyData69 = new Uint8Array(200);
    var svg69 = createSvg('#afternoon7', svgHeight, svgWidth);
    svg69.selectAll('rect')
    .data(frequencyData69)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData69.length);
    })
    .attr('width', svgWidth / frequencyData69.length - barPadding);
    var audioElement70 = document.getElementById('audioElement70');
    var audioSrc70 = audioCtx.createMediaElementSource(audioElement70);
    var analyser70 = audioCtx.createAnalyser(); 
    audioSrc70.connect(analyser70);
    audioSrc70.connect(audioCtx.destination);
    var frequencyData70 = new Uint8Array(200);
    var svg70 = createSvg('#afternoon7', svgHeight, svgWidth);
    svg70.selectAll('rect')
    .data(frequencyData70)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData70.length);
    })
    .attr('width', svgWidth / frequencyData70.length - barPadding);
    var audioElement71 = document.getElementById('audioElement71');
    var audioSrc71 = audioCtx.createMediaElementSource(audioElement71);
    var analyser71 = audioCtx.createAnalyser(); 
    audioSrc71.connect(analyser71);
    audioSrc71.connect(audioCtx.destination);
    var frequencyData71 = new Uint8Array(200);
    var svg71 = createSvg('#afternoon7', svgHeight, svgWidth);
    svg71.selectAll('rect')
    .data(frequencyData71)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData71.length);
    })
    .attr('width', svgWidth / frequencyData71.length - barPadding);
    var audioElement72 = document.getElementById('audioElement72');
    var audioSrc72 = audioCtx.createMediaElementSource(audioElement72);
    var analyser72 = audioCtx.createAnalyser(); 
    audioSrc72.connect(analyser72);
    audioSrc72.connect(audioCtx.destination);
    var frequencyData72 = new Uint8Array(200);
    var svg72 = createSvg('#afternoon7', svgHeight, svgWidth);
    svg72.selectAll('rect')
    .data(frequencyData72)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData72.length);
    })
    .attr('width', svgWidth / frequencyData72.length - barPadding);
    var audioElement73 = document.getElementById('audioElement73');
    var audioSrc73 = audioCtx.createMediaElementSource(audioElement73);
    var analyser73 = audioCtx.createAnalyser(); 
    audioSrc73.connect(analyser73);
    audioSrc73.connect(audioCtx.destination);
    var frequencyData73 = new Uint8Array(200);
    var svg73 = createSvg('#afternoon7', svgHeight, svgWidth);
    svg73.selectAll('rect')
    .data(frequencyData73)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData73.length);
    })
    .attr('width', svgWidth / frequencyData73.length - barPadding);
    var audioElement75 = document.getElementById('audioElement75');
    var audioSrc75 = audioCtx.createMediaElementSource(audioElement75);
    var analyser75 = audioCtx.createAnalyser(); 
    audioSrc75.connect(analyser75);
    audioSrc75.connect(audioCtx.destination);
    var frequencyData75 = new Uint8Array(200);
    var svg75 = createSvg('#night8', svgHeight, svgWidth);
    svg75.selectAll('rect')
    .data(frequencyData75)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData75.length);
    })
    .attr('width', svgWidth / frequencyData75.length - barPadding);
    var audioElement76 = document.getElementById('audioElement76');
    var audioSrc76 = audioCtx.createMediaElementSource(audioElement76);
    var analyser76 = audioCtx.createAnalyser(); 
    audioSrc76.connect(analyser76);
    audioSrc76.connect(audioCtx.destination);
    var frequencyData76 = new Uint8Array(200);
    var svg76 = createSvg('#night8', svgHeight, svgWidth);
    svg76.selectAll('rect')
    .data(frequencyData76)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData76.length);
    })
    .attr('width', svgWidth / frequencyData76.length - barPadding);
    var audioElement77 = document.getElementById('audioElement77');
    var audioSrc77 = audioCtx.createMediaElementSource(audioElement77);
    var analyser77 = audioCtx.createAnalyser(); 
    audioSrc77.connect(analyser77);
    audioSrc77.connect(audioCtx.destination);
    var frequencyData77 = new Uint8Array(200);
    var svg77 = createSvg('#night8', svgHeight, svgWidth);
    svg77.selectAll('rect')
    .data(frequencyData77)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData77.length);
    })
    .attr('width', svgWidth / frequencyData77.length - barPadding);
    var audioElement78 = document.getElementById('audioElement78');
    var audioSrc78 = audioCtx.createMediaElementSource(audioElement78);
    var analyser78 = audioCtx.createAnalyser(); 
    audioSrc78.connect(analyser78);
    audioSrc78.connect(audioCtx.destination);
    var frequencyData78 = new Uint8Array(200);
    var svg78 = createSvg('#night8', svgHeight, svgWidth);
    svg78.selectAll('rect')
    .data(frequencyData78)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData78.length);
    })
    .attr('width', svgWidth / frequencyData78.length - barPadding);
    var audioElement79 = document.getElementById('audioElement79');
    var audioSrc79 = audioCtx.createMediaElementSource(audioElement79);
    var analyser79 = audioCtx.createAnalyser(); 
    audioSrc79.connect(analyser79);
    audioSrc79.connect(audioCtx.destination);
    var frequencyData79 = new Uint8Array(200);
    var svg79 = createSvg('#night8', svgHeight, svgWidth);
    svg79.selectAll('rect')
    .data(frequencyData79)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData79.length);
    })
    .attr('width', svgWidth / frequencyData79.length - barPadding);
    var audioElement80 = document.getElementById('audioElement80');
    var audioSrc80 = audioCtx.createMediaElementSource(audioElement80);
    var analyser80 = audioCtx.createAnalyser(); 
    audioSrc80.connect(analyser80);
    audioSrc80.connect(audioCtx.destination);
    var frequencyData80 = new Uint8Array(200);
    var svg80 = createSvg('#night8', svgHeight, svgWidth);
    svg80.selectAll('rect')
    .data(frequencyData80)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData80.length);
    })
    .attr('width', svgWidth / frequencyData80.length - barPadding);
    var audioElement81 = document.getElementById('audioElement81');
    var audioSrc81 = audioCtx.createMediaElementSource(audioElement81);
    var analyser81 = audioCtx.createAnalyser(); 
    audioSrc81.connect(analyser81);
    audioSrc81.connect(audioCtx.destination);
    var frequencyData81 = new Uint8Array(200);
    var svg81 = createSvg('#night8', svgHeight, svgWidth);
    svg81.selectAll('rect')
    .data(frequencyData81)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData81.length);
    })
    .attr('width', svgWidth / frequencyData81.length - barPadding);
    var audioElement82 = document.getElementById('audioElement82');
    var audioSrc82 = audioCtx.createMediaElementSource(audioElement82);
    var analyser82 = audioCtx.createAnalyser(); 
    audioSrc82.connect(analyser82);
    audioSrc82.connect(audioCtx.destination);
    var frequencyData82 = new Uint8Array(200);
    var svg82 = createSvg('#night8', svgHeight, svgWidth);
    svg82.selectAll('rect')
    .data(frequencyData82)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData82.length);
    })
    .attr('width', svgWidth / frequencyData82.length - barPadding);
    var audioElement83 = document.getElementById('audioElement83');
    var audioSrc83 = audioCtx.createMediaElementSource(audioElement83);
    var analyser83 = audioCtx.createAnalyser(); 
    audioSrc83.connect(analyser83);
    audioSrc83.connect(audioCtx.destination);
    var frequencyData83 = new Uint8Array(200);
    var svg83 = createSvg('#night8', svgHeight, svgWidth);
    svg83.selectAll('rect')
    .data(frequencyData83)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData83.length);
    })
    .attr('width', svgWidth / frequencyData83.length - barPadding);
    var audioElement84 = document.getElementById('audioElement84');
    var audioSrc84 = audioCtx.createMediaElementSource(audioElement84);
    var analyser84 = audioCtx.createAnalyser(); 
    audioSrc84.connect(analyser84);
    audioSrc84.connect(audioCtx.destination);
    var frequencyData84 = new Uint8Array(200);
    var svg84 = createSvg('#night8', svgHeight, svgWidth);
    svg84.selectAll('rect')
    .data(frequencyData84)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData84.length);
    })
    .attr('width', svgWidth / frequencyData84.length - barPadding);
    var audioElement85 = document.getElementById('audioElement85');
    var audioSrc85 = audioCtx.createMediaElementSource(audioElement85);
    var analyser85 = audioCtx.createAnalyser(); 
    audioSrc85.connect(analyser85);
    audioSrc85.connect(audioCtx.destination);
    var frequencyData85 = new Uint8Array(200);
    var svg85 = createSvg('#night8', svgHeight, svgWidth);
    svg85.selectAll('rect')
    .data(frequencyData85)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData85.length);
    })
    .attr('width', svgWidth / frequencyData85.length - barPadding);
    var audioElement86 = document.getElementById('audioElement86');
    var audioSrc86 = audioCtx.createMediaElementSource(audioElement86);
    var analyser86 = audioCtx.createAnalyser(); 
    audioSrc86.connect(analyser86);
    audioSrc86.connect(audioCtx.destination);
    var frequencyData86 = new Uint8Array(200);
    var svg86 = createSvg('#night8', svgHeight, svgWidth);
    svg86.selectAll('rect')
    .data(frequencyData86)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData86.length);
    })
    .attr('width', svgWidth / frequencyData86.length - barPadding);
    var audioElement87 = document.getElementById('audioElement87');
    var audioSrc87 = audioCtx.createMediaElementSource(audioElement87);
    var analyser87 = audioCtx.createAnalyser(); 
    audioSrc87.connect(analyser87);
    audioSrc87.connect(audioCtx.destination);
    var frequencyData87 = new Uint8Array(200);
    var svg87 = createSvg('#night8', svgHeight, svgWidth);
    svg87.selectAll('rect')
    .data(frequencyData87)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData87.length);
    })
    .attr('width', svgWidth / frequencyData87.length - barPadding);
    var audioElement89 = document.getElementById('audioElement89');
    var audioSrc89 = audioCtx.createMediaElementSource(audioElement89);
    var analyser89 = audioCtx.createAnalyser(); 
    audioSrc89.connect(analyser89);
    audioSrc89.connect(audioCtx.destination);
    var frequencyData89 = new Uint8Array(200);
    var svg89 = createSvg('#night9', svgHeight, svgWidth);
    svg89.selectAll('rect')
    .data(frequencyData89)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData89.length);
    })
    .attr('width', svgWidth / frequencyData89.length - barPadding);
    var audioElement90 = document.getElementById('audioElement90');
    var audioSrc90 = audioCtx.createMediaElementSource(audioElement90);
    var analyser90 = audioCtx.createAnalyser(); 
    audioSrc90.connect(analyser90);
    audioSrc90.connect(audioCtx.destination);
    var frequencyData90 = new Uint8Array(200);
    var svg90 = createSvg('#night9', svgHeight, svgWidth);
    svg90.selectAll('rect')
    .data(frequencyData90)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData90.length);
    })
    .attr('width', svgWidth / frequencyData90.length - barPadding);
    var audioElement91 = document.getElementById('audioElement91');
    var audioSrc91 = audioCtx.createMediaElementSource(audioElement91);
    var analyser91 = audioCtx.createAnalyser(); 
    audioSrc91.connect(analyser91);
    audioSrc91.connect(audioCtx.destination);
    var frequencyData91 = new Uint8Array(200);
    var svg91 = createSvg('#night9', svgHeight, svgWidth);
    svg91.selectAll('rect')
    .data(frequencyData91)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData91.length);
    })
    .attr('width', svgWidth / frequencyData91.length - barPadding);
    var audioElement92 = document.getElementById('audioElement92');
    var audioSrc92 = audioCtx.createMediaElementSource(audioElement92);
    var analyser92 = audioCtx.createAnalyser(); 
    audioSrc92.connect(analyser92);
    audioSrc92.connect(audioCtx.destination);
    var frequencyData92 = new Uint8Array(200);
    var svg92 = createSvg('#night9', svgHeight, svgWidth);
    svg92.selectAll('rect')
    .data(frequencyData92)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData92.length);
    })
    .attr('width', svgWidth / frequencyData92.length - barPadding);
    var audioElement93 = document.getElementById('audioElement93');
    var audioSrc93 = audioCtx.createMediaElementSource(audioElement93);
    var analyser93 = audioCtx.createAnalyser(); 
    audioSrc93.connect(analyser93);
    audioSrc93.connect(audioCtx.destination);
    var frequencyData93 = new Uint8Array(200);
    var svg93 = createSvg('#night9', svgHeight, svgWidth);
    svg93.selectAll('rect')
    .data(frequencyData93)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData93.length);
    })
    .attr('width', svgWidth / frequencyData93.length - barPadding);
    var audioElement94 = document.getElementById('audioElement94');
    var audioSrc94 = audioCtx.createMediaElementSource(audioElement94);
    var analyser94 = audioCtx.createAnalyser(); 
    audioSrc94.connect(analyser94);
    audioSrc94.connect(audioCtx.destination);
    var frequencyData94 = new Uint8Array(200);
    var svg94 = createSvg('#night9', svgHeight, svgWidth);
    svg94.selectAll('rect')
    .data(frequencyData94)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData94.length);
    })
    .attr('width', svgWidth / frequencyData94.length - barPadding);
    var audioElement95 = document.getElementById('audioElement95');
    var audioSrc95 = audioCtx.createMediaElementSource(audioElement95);
    var analyser95 = audioCtx.createAnalyser(); 
    audioSrc95.connect(analyser95);
    audioSrc95.connect(audioCtx.destination);
    var frequencyData95 = new Uint8Array(200);
    var svg95 = createSvg('#night9', svgHeight, svgWidth);
    svg95.selectAll('rect')
    .data(frequencyData95)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData95.length);
    })
    .attr('width', svgWidth / frequencyData95.length - barPadding);
    var audioElement96 = document.getElementById('audioElement96');
    var audioSrc96 = audioCtx.createMediaElementSource(audioElement96);
    var analyser96 = audioCtx.createAnalyser(); 
    audioSrc96.connect(analyser96);
    audioSrc96.connect(audioCtx.destination);
    var frequencyData96 = new Uint8Array(200);
    var svg96 = createSvg('#night9', svgHeight, svgWidth);
    svg96.selectAll('rect')
    .data(frequencyData96)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData96.length);
    })
    .attr('width', svgWidth / frequencyData96.length - barPadding);
    var audioElement97 = document.getElementById('audioElement97');
    var audioSrc97 = audioCtx.createMediaElementSource(audioElement97);
    var analyser97 = audioCtx.createAnalyser(); 
    audioSrc97.connect(analyser97);
    audioSrc97.connect(audioCtx.destination);
    var frequencyData97 = new Uint8Array(200);
    var svg97 = createSvg('#night9', svgHeight, svgWidth);
    svg97.selectAll('rect')
    .data(frequencyData97)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData97.length);
    })
    .attr('width', svgWidth / frequencyData97.length - barPadding);
    var audioElement98 = document.getElementById('audioElement98');
    var audioSrc98 = audioCtx.createMediaElementSource(audioElement98);
    var analyser98 = audioCtx.createAnalyser(); 
    audioSrc98.connect(analyser98);
    audioSrc98.connect(audioCtx.destination);
    var frequencyData98 = new Uint8Array(200);
    var svg98 = createSvg('#night9', svgHeight, svgWidth);
    svg98.selectAll('rect')
    .data(frequencyData98)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData98.length);
    })
    .attr('width', svgWidth / frequencyData98.length - barPadding);
    var audioElement99 = document.getElementById('audioElement99');
    var audioSrc99 = audioCtx.createMediaElementSource(audioElement99);
    var analyser99 = audioCtx.createAnalyser(); 
    audioSrc99.connect(analyser99);
    audioSrc99.connect(audioCtx.destination);
    var frequencyData99 = new Uint8Array(200);
    var svg99 = createSvg('#night10', svgHeight, svgWidth);
    svg99.selectAll('rect')
    .data(frequencyData99)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData99.length);
    })
    .attr('width', svgWidth / frequencyData99.length - barPadding);
    var audioElement100 = document.getElementById('audioElement100');
    var audioSrc100 = audioCtx.createMediaElementSource(audioElement100);
    var analyser100 = audioCtx.createAnalyser(); 
    audioSrc100.connect(analyser100);
    audioSrc100.connect(audioCtx.destination);
    var frequencyData100 = new Uint8Array(200);
    var svg100 = createSvg('#night10', svgHeight, svgWidth);
    svg100.selectAll('rect')
    .data(frequencyData100)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData100.length);
    })
    .attr('width', svgWidth / frequencyData100.length - barPadding);
    var audioElement101 = document.getElementById('audioElement101');
    var audioSrc101 = audioCtx.createMediaElementSource(audioElement101);
    var analyser101 = audioCtx.createAnalyser(); 
    audioSrc101.connect(analyser101);
    audioSrc101.connect(audioCtx.destination);
    var frequencyData101 = new Uint8Array(200);
    var svg101 = createSvg('#night10', svgHeight, svgWidth);
    svg101.selectAll('rect')
    .data(frequencyData101)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData101.length);
    })
    .attr('width', svgWidth / frequencyData101.length - barPadding);
    var audioElement102 = document.getElementById('audioElement102');
    var audioSrc102 = audioCtx.createMediaElementSource(audioElement102);
    var analyser102 = audioCtx.createAnalyser(); 
    audioSrc102.connect(analyser102);
    audioSrc102.connect(audioCtx.destination);
    var frequencyData102 = new Uint8Array(200);
    var svg102 = createSvg('#night10', svgHeight, svgWidth);
    svg102.selectAll('rect')
    .data(frequencyData102)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData102.length);
    })
    .attr('width', svgWidth / frequencyData102.length - barPadding);
    var audioElement103 = document.getElementById('audioElement103');
    var audioSrc103 = audioCtx.createMediaElementSource(audioElement103);
    var analyser103 = audioCtx.createAnalyser(); 
    audioSrc103.connect(analyser103);
    audioSrc103.connect(audioCtx.destination);
    var frequencyData103 = new Uint8Array(200);
    var svg103 = createSvg('#night10', svgHeight, svgWidth);
    svg103.selectAll('rect')
    .data(frequencyData103)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData103.length);
    })
    .attr('width', svgWidth / frequencyData103.length - barPadding);
    var audioElement104 = document.getElementById('audioElement104');
    var audioSrc104 = audioCtx.createMediaElementSource(audioElement104);
    var analyser104 = audioCtx.createAnalyser(); 
    audioSrc104.connect(analyser104);
    audioSrc104.connect(audioCtx.destination);
    var frequencyData104 = new Uint8Array(200);
    var svg104 = createSvg('#night10', svgHeight, svgWidth);
    svg104.selectAll('rect')
    .data(frequencyData104)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData104.length);
    })
    .attr('width', svgWidth / frequencyData104.length - barPadding);
    var audioElement105 = document.getElementById('audioElement105');
    var audioSrc105 = audioCtx.createMediaElementSource(audioElement105);
    var analyser105 = audioCtx.createAnalyser(); 
    audioSrc105.connect(analyser105);
    audioSrc105.connect(audioCtx.destination);
    var frequencyData105 = new Uint8Array(200);
    var svg105 = createSvg('#night10', svgHeight, svgWidth);
    svg105.selectAll('rect')
    .data(frequencyData105)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData105.length);
    })
    .attr('width', svgWidth / frequencyData105.length - barPadding);
    var audioElement106 = document.getElementById('audioElement106');
    var audioSrc106 = audioCtx.createMediaElementSource(audioElement106);
    var analyser106 = audioCtx.createAnalyser(); 
    audioSrc106.connect(analyser106);
    audioSrc106.connect(audioCtx.destination);
    var frequencyData106 = new Uint8Array(200);
    var svg106 = createSvg('#night10', svgHeight, svgWidth);
    svg106.selectAll('rect')
    .data(frequencyData106)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData106.length);
    })
    .attr('width', svgWidth / frequencyData106.length - barPadding);
    var audioElement107 = document.getElementById('audioElement107');
    var audioSrc107 = audioCtx.createMediaElementSource(audioElement107);
    var analyser107 = audioCtx.createAnalyser(); 
    audioSrc107.connect(analyser107);
    audioSrc107.connect(audioCtx.destination);
    var frequencyData107 = new Uint8Array(200);
    var svg107 = createSvg('#night10', svgHeight, svgWidth);
    svg107.selectAll('rect')
    .data(frequencyData107)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData107.length);
    })
    .attr('width', svgWidth / frequencyData107.length - barPadding);
    var audioElement108 = document.getElementById('audioElement108');
    var audioSrc108 = audioCtx.createMediaElementSource(audioElement108);
    var analyser108 = audioCtx.createAnalyser(); 
    audioSrc108.connect(analyser108);
    audioSrc108.connect(audioCtx.destination);
    var frequencyData108 = new Uint8Array(200);
    var svg108 = createSvg('#night10', svgHeight, svgWidth);
    svg108.selectAll('rect')
    .data(frequencyData108)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData108.length);
    })
    .attr('width', svgWidth / frequencyData108.length - barPadding);
    var audioElement109 = document.getElementById('audioElement109');
    var audioSrc109 = audioCtx.createMediaElementSource(audioElement109);
    var analyser109 = audioCtx.createAnalyser(); 
    audioSrc109.connect(analyser109);
    audioSrc109.connect(audioCtx.destination);
    var frequencyData109 = new Uint8Array(200);
    var svg109 = createSvg('#night10', svgHeight, svgWidth);
    svg109.selectAll('rect')
    .data(frequencyData109)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData109.length);
    })
    .attr('width', svgWidth / frequencyData109.length - barPadding);


    function renderChart() {
        requestAnimationFrame(renderChart);
        analyser1.getByteFrequencyData(frequencyData1);
        svg1.selectAll('rect')
        .data(frequencyData1)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(245, 238, ' + d + ')';
        });
analyser2.getByteFrequencyData(frequencyData2);
        svg2.selectAll('rect')
        .data(frequencyData2)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(245, 238, ' + d + ')';
        });
analyser3.getByteFrequencyData(frequencyData3);
        svg3.selectAll('rect')
        .data(frequencyData3)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(245, 238, ' + d + ')';
        });
analyser4.getByteFrequencyData(frequencyData4);
        svg4.selectAll('rect')
        .data(frequencyData4)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(245, 238, ' + d + ')';
        });
analyser5.getByteFrequencyData(frequencyData5);
        svg5.selectAll('rect')
        .data(frequencyData5)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(245, 238, ' + d + ')';
        });
analyser6.getByteFrequencyData(frequencyData6);
        svg6.selectAll('rect')
        .data(frequencyData6)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(245, 238, ' + d + ')';
        });
analyser7.getByteFrequencyData(frequencyData7);
        svg7.selectAll('rect')
        .data(frequencyData7)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(245, 238, ' + d + ')';
        });
analyser8.getByteFrequencyData(frequencyData8);
        svg8.selectAll('rect')
        .data(frequencyData8)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(245, 238, ' + d + ')';
        });
analyser9.getByteFrequencyData(frequencyData9);
        svg9.selectAll('rect')
        .data(frequencyData9)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(245, 238, ' + d + ')';
        });
analyser10.getByteFrequencyData(frequencyData10);
        svg10.selectAll('rect')
        .data(frequencyData10)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(245, 238, ' + d + ')';
        });
analyser11.getByteFrequencyData(frequencyData11);
        svg11.selectAll('rect')
        .data(frequencyData11)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(245, 238, ' + d + ')';
        });
analyser12.getByteFrequencyData(frequencyData12);
        svg12.selectAll('rect')
        .data(frequencyData12)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(245, 238, ' + d + ')';
        });
analyser13.getByteFrequencyData(frequencyData13);
        svg13.selectAll('rect')
        .data(frequencyData13)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(245, 238, ' + d + ')';
        });
analyser14.getByteFrequencyData(frequencyData14);
        svg14.selectAll('rect')
        .data(frequencyData14)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(245, 238, ' + d + ')';
        });
analyser15.getByteFrequencyData(frequencyData15);
        svg15.selectAll('rect')
        .data(frequencyData15)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(245, 238, ' + d + ')';
        });
analyser16.getByteFrequencyData(frequencyData16);
        svg16.selectAll('rect')
        .data(frequencyData16)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(245, 238, ' + d + ')';
        });
analyser17.getByteFrequencyData(frequencyData17);
        svg17.selectAll('rect')
        .data(frequencyData17)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(245, 238, ' + d + ')';
        });
analyser18.getByteFrequencyData(frequencyData18);
        svg18.selectAll('rect')
        .data(frequencyData18)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(245, 238, ' + d + ')';
        });
analyser19.getByteFrequencyData(frequencyData19);
        svg19.selectAll('rect')
        .data(frequencyData19)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(245, 238, ' + d + ')';
        });
analyser20.getByteFrequencyData(frequencyData20);
        svg20.selectAll('rect')
        .data(frequencyData20)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(245, 238, ' + d + ')';
        });
analyser21.getByteFrequencyData(frequencyData21);
        svg21.selectAll('rect')
        .data(frequencyData21)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(245, 238, ' + d + ')';
        });
analyser22.getByteFrequencyData(frequencyData22);
        svg22.selectAll('rect')
        .data(frequencyData22)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(245, 238, ' + d + ')';
        });
analyser23.getByteFrequencyData(frequencyData23);
        svg23.selectAll('rect')
        .data(frequencyData23)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(245, 238, ' + d + ')';
        });
analyser24.getByteFrequencyData(frequencyData24);
        svg24.selectAll('rect')
        .data(frequencyData24)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(245, 238, ' + d + ')';
        });
analyser25.getByteFrequencyData(frequencyData25);
        svg25.selectAll('rect')
        .data(frequencyData25)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(245, 238, ' + d + ')';
        });
analyser26.getByteFrequencyData(frequencyData26);
        svg26.selectAll('rect')
        .data(frequencyData26)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(245, 238, ' + d + ')';
        });
analyser27.getByteFrequencyData(frequencyData27);
        svg27.selectAll('rect')
        .data(frequencyData27)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(245, 238, ' + d + ')';
        });
analyser28.getByteFrequencyData(frequencyData28);
        svg28.selectAll('rect')
        .data(frequencyData28)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(25, 133, ' + d + ')';
        });
analyser29.getByteFrequencyData(frequencyData29);
        svg29.selectAll('rect')
        .data(frequencyData29)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(25, 133, ' + d + ')';
        });
analyser30.getByteFrequencyData(frequencyData30);
        svg30.selectAll('rect')
        .data(frequencyData30)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(25, 133, ' + d + ')';
        });
analyser31.getByteFrequencyData(frequencyData31);
        svg31.selectAll('rect')
        .data(frequencyData31)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(25, 133, ' + d + ')';
        });
analyser32.getByteFrequencyData(frequencyData32);
        svg32.selectAll('rect')
        .data(frequencyData32)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(25, 133, ' + d + ')';
        });
analyser33.getByteFrequencyData(frequencyData33);
        svg33.selectAll('rect')
        .data(frequencyData33)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(25, 133, ' + d + ')';
        });
analyser35.getByteFrequencyData(frequencyData35);
        svg35.selectAll('rect')
        .data(frequencyData35)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(25, 133, ' + d + ')';
        });
analyser36.getByteFrequencyData(frequencyData36);
        svg36.selectAll('rect')
        .data(frequencyData36)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(25, 133, ' + d + ')';
        });
analyser37.getByteFrequencyData(frequencyData37);
        svg37.selectAll('rect')
        .data(frequencyData37)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(25, 133, ' + d + ')';
        });
analyser38.getByteFrequencyData(frequencyData38);
        svg38.selectAll('rect')
        .data(frequencyData38)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(25, 133, ' + d + ')';
        });
analyser39.getByteFrequencyData(frequencyData39);
        svg39.selectAll('rect')
        .data(frequencyData39)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(25, 133, ' + d + ')';
        });
analyser40.getByteFrequencyData(frequencyData40);
        svg40.selectAll('rect')
        .data(frequencyData40)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(25, 133, ' + d + ')';
        });
analyser41.getByteFrequencyData(frequencyData41);
        svg41.selectAll('rect')
        .data(frequencyData41)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(25, 133, ' + d + ')';
        });
analyser42.getByteFrequencyData(frequencyData42);
        svg42.selectAll('rect')
        .data(frequencyData42)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(25, 133, ' + d + ')';
        });
analyser43.getByteFrequencyData(frequencyData43);
        svg43.selectAll('rect')
        .data(frequencyData43)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(25, 133, ' + d + ')';
        });
analyser44.getByteFrequencyData(frequencyData44);
        svg44.selectAll('rect')
        .data(frequencyData44)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(25, 133, ' + d + ')';
        });
analyser45.getByteFrequencyData(frequencyData45);
        svg45.selectAll('rect')
        .data(frequencyData45)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(25, 133, ' + d + ')';
        });
analyser46.getByteFrequencyData(frequencyData46);
        svg46.selectAll('rect')
        .data(frequencyData46)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(25, 133, ' + d + ')';
        });
analyser47.getByteFrequencyData(frequencyData47);
        svg47.selectAll('rect')
        .data(frequencyData47)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(25, 133, ' + d + ')';
        });
analyser48.getByteFrequencyData(frequencyData48);
        svg48.selectAll('rect')
        .data(frequencyData48)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(25, 133, ' + d + ')';
        });
analyser49.getByteFrequencyData(frequencyData49);
        svg49.selectAll('rect')
        .data(frequencyData49)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(25, 133, ' + d + ')';
        });
analyser50.getByteFrequencyData(frequencyData50);
        svg50.selectAll('rect')
        .data(frequencyData50)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(25, 133, ' + d + ')';
        });
analyser51.getByteFrequencyData(frequencyData51);
        svg51.selectAll('rect')
        .data(frequencyData51)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(25, 133, ' + d + ')';
        });
analyser52.getByteFrequencyData(frequencyData52);
        svg52.selectAll('rect')
        .data(frequencyData52)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(25, 133, ' + d + ')';
        });
analyser53.getByteFrequencyData(frequencyData53);
        svg53.selectAll('rect')
        .data(frequencyData53)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(25, 133, ' + d + ')';
        });
analyser54.getByteFrequencyData(frequencyData54);
        svg54.selectAll('rect')
        .data(frequencyData54)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(25, 133, ' + d + ')';
        });
analyser55.getByteFrequencyData(frequencyData55);
        svg55.selectAll('rect')
        .data(frequencyData55)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(25, 133, ' + d + ')';
        });
analyser56.getByteFrequencyData(frequencyData56);
        svg56.selectAll('rect')
        .data(frequencyData56)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(25, 133, ' + d + ')';
        });
analyser57.getByteFrequencyData(frequencyData57);
        svg57.selectAll('rect')
        .data(frequencyData57)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(25, 133, ' + d + ')';
        });
analyser58.getByteFrequencyData(frequencyData58);
        svg58.selectAll('rect')
        .data(frequencyData58)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(25, 133, ' + d + ')';
        });
analyser59.getByteFrequencyData(frequencyData59);
        svg59.selectAll('rect')
        .data(frequencyData59)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(25, 133, ' + d + ')';
        });
analyser60.getByteFrequencyData(frequencyData60);
        svg60.selectAll('rect')
        .data(frequencyData60)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(25, 133, ' + d + ')';
        });
analyser61.getByteFrequencyData(frequencyData61);
        svg61.selectAll('rect')
        .data(frequencyData61)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(25, 133, ' + d + ')';
        });
analyser62.getByteFrequencyData(frequencyData62);
        svg62.selectAll('rect')
        .data(frequencyData62)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(25, 133, ' + d + ')';
        });
analyser63.getByteFrequencyData(frequencyData63);
        svg63.selectAll('rect')
        .data(frequencyData63)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(25, 133, ' + d + ')';
        });
analyser64.getByteFrequencyData(frequencyData64);
        svg64.selectAll('rect')
        .data(frequencyData64)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(25, 133, ' + d + ')';
        });
analyser65.getByteFrequencyData(frequencyData65);
        svg65.selectAll('rect')
        .data(frequencyData65)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(25, 133, ' + d + ')';
        });
analyser66.getByteFrequencyData(frequencyData66);
        svg66.selectAll('rect')
        .data(frequencyData66)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(25, 133, ' + d + ')';
        });
analyser67.getByteFrequencyData(frequencyData67);
        svg67.selectAll('rect')
        .data(frequencyData67)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(25, 133, ' + d + ')';
        });
analyser68.getByteFrequencyData(frequencyData68);
        svg68.selectAll('rect')
        .data(frequencyData68)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(25, 133, ' + d + ')';
        });
analyser69.getByteFrequencyData(frequencyData69);
        svg69.selectAll('rect')
        .data(frequencyData69)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(25, 133, ' + d + ')';
        });
analyser70.getByteFrequencyData(frequencyData70);
        svg70.selectAll('rect')
        .data(frequencyData70)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(25, 133, ' + d + ')';
        });
analyser71.getByteFrequencyData(frequencyData71);
        svg71.selectAll('rect')
        .data(frequencyData71)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(25, 133, ' + d + ')';
        });
analyser72.getByteFrequencyData(frequencyData72);
        svg72.selectAll('rect')
        .data(frequencyData72)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(25, 133, ' + d + ')';
        });
analyser73.getByteFrequencyData(frequencyData73);
        svg73.selectAll('rect')
        .data(frequencyData73)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(25, 133, ' + d + ')';
        });
analyser75.getByteFrequencyData(frequencyData75);
        svg75.selectAll('rect')
        .data(frequencyData75)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(38, 96, ' + d + ')';
        });
analyser76.getByteFrequencyData(frequencyData76);
        svg76.selectAll('rect')
        .data(frequencyData76)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(38, 96, ' + d + ')';
        });
analyser77.getByteFrequencyData(frequencyData77);
        svg77.selectAll('rect')
        .data(frequencyData77)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(38, 96, ' + d + ')';
        });
analyser78.getByteFrequencyData(frequencyData78);
        svg78.selectAll('rect')
        .data(frequencyData78)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(38, 96, ' + d + ')';
        });
analyser79.getByteFrequencyData(frequencyData79);
        svg79.selectAll('rect')
        .data(frequencyData79)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(38, 96, ' + d + ')';
        });
analyser80.getByteFrequencyData(frequencyData80);
        svg80.selectAll('rect')
        .data(frequencyData80)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(38, 96, ' + d + ')';
        });
analyser81.getByteFrequencyData(frequencyData81);
        svg81.selectAll('rect')
        .data(frequencyData81)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(38, 96, ' + d + ')';
        });
analyser82.getByteFrequencyData(frequencyData82);
        svg82.selectAll('rect')
        .data(frequencyData82)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(38, 96, ' + d + ')';
        });
analyser83.getByteFrequencyData(frequencyData83);
        svg83.selectAll('rect')
        .data(frequencyData83)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(38, 96, ' + d + ')';
        });
analyser84.getByteFrequencyData(frequencyData84);
        svg84.selectAll('rect')
        .data(frequencyData84)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(38, 96, ' + d + ')';
        });
analyser85.getByteFrequencyData(frequencyData85);
        svg85.selectAll('rect')
        .data(frequencyData85)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(38, 96, ' + d + ')';
        });
analyser86.getByteFrequencyData(frequencyData86);
        svg86.selectAll('rect')
        .data(frequencyData86)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(38, 96, ' + d + ')';
        });
analyser87.getByteFrequencyData(frequencyData87);
        svg87.selectAll('rect')
        .data(frequencyData87)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(38, 96, ' + d + ')';
        });
analyser89.getByteFrequencyData(frequencyData89);
        svg89.selectAll('rect')
        .data(frequencyData89)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(38, 96, ' + d + ')';
        });
analyser90.getByteFrequencyData(frequencyData90);
        svg90.selectAll('rect')
        .data(frequencyData90)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(38, 96, ' + d + ')';
        });
analyser91.getByteFrequencyData(frequencyData91);
        svg91.selectAll('rect')
        .data(frequencyData91)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(38, 96, ' + d + ')';
        });
analyser92.getByteFrequencyData(frequencyData92);
        svg92.selectAll('rect')
        .data(frequencyData92)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(38, 96, ' + d + ')';
        });
analyser93.getByteFrequencyData(frequencyData93);
        svg93.selectAll('rect')
        .data(frequencyData93)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(38, 96, ' + d + ')';
        });
analyser94.getByteFrequencyData(frequencyData94);
        svg94.selectAll('rect')
        .data(frequencyData94)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(38, 96, ' + d + ')';
        });
analyser95.getByteFrequencyData(frequencyData95);
        svg95.selectAll('rect')
        .data(frequencyData95)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(38, 96, ' + d + ')';
        });
analyser96.getByteFrequencyData(frequencyData96);
        svg96.selectAll('rect')
        .data(frequencyData96)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(38, 96, ' + d + ')';
        });
analyser97.getByteFrequencyData(frequencyData97);
        svg97.selectAll('rect')
        .data(frequencyData97)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(38, 96, ' + d + ')';
        });
analyser98.getByteFrequencyData(frequencyData98);
        svg98.selectAll('rect')
        .data(frequencyData98)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(38, 96, ' + d + ')';
        });
analyser99.getByteFrequencyData(frequencyData99);
        svg99.selectAll('rect')
        .data(frequencyData99)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(38, 96, ' + d + ')';
        });
analyser100.getByteFrequencyData(frequencyData100);
        svg100.selectAll('rect')
        .data(frequencyData100)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(38, 96, ' + d + ')';
        });
analyser101.getByteFrequencyData(frequencyData101);
        svg101.selectAll('rect')
        .data(frequencyData101)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(38, 96, ' + d + ')';
        });
analyser102.getByteFrequencyData(frequencyData102);
        svg102.selectAll('rect')
        .data(frequencyData102)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(38, 96, ' + d + ')';
        });
analyser103.getByteFrequencyData(frequencyData103);
        svg103.selectAll('rect')
        .data(frequencyData103)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(38, 96, ' + d + ')';
        });
analyser104.getByteFrequencyData(frequencyData104);
        svg104.selectAll('rect')
        .data(frequencyData104)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(38, 96, ' + d + ')';
        });
analyser105.getByteFrequencyData(frequencyData105);
        svg105.selectAll('rect')
        .data(frequencyData105)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(38, 96, ' + d + ')';
        });
analyser106.getByteFrequencyData(frequencyData106);
        svg106.selectAll('rect')
        .data(frequencyData106)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(38, 96, ' + d + ')';
        });
analyser107.getByteFrequencyData(frequencyData107);
        svg107.selectAll('rect')
        .data(frequencyData107)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(38, 96, ' + d + ')';
        });
analyser108.getByteFrequencyData(frequencyData108);
        svg108.selectAll('rect')
        .data(frequencyData108)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(38, 96, ' + d + ')';
        });
analyser109.getByteFrequencyData(frequencyData109);
        svg109.selectAll('rect')
        .data(frequencyData109)
        .attr('y', function(d) {
            return svgHeight - d;
        })
        .attr('height', function(d) {
            return d;
        })
        .attr('fill', function(d) {
            return 'rgb(38, 96, ' + d + ')';
        });
    }

    // Run the loop
    renderChart();

});