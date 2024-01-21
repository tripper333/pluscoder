function encodePluscode() {
    var lat = parseFloat(document.getElementById('latitude').value);
    var lng = parseFloat(document.getElementById('longitude').value);
    var code = OpenLocationCode.encode(lat, lng);
    document.getElementById('encodedResult').innerText = 'Encoded Pluscode: ' + code;
}

function decodePluscode() {
    var code = document.getElementById('pluscode').value;
    var decoded = OpenLocationCode.decode(code);
    document.getElementById('decodedResult').innerText = 
        'Decoded Lat/Long: ' + decoded.latitudeCenter + ', ' + decoded.longitudeCenter;
}
