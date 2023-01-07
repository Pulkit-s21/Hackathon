// storing the trackId from localStorage to var
var track = localStorage.getItem("trackingNum")
// console.log(track)

// details of all the in-progress orders
const orderoid = [
    { 
        oid: '#TR12sz11',
        lat: 37.45677,
        long: 66.56177,
        accuracy: 50
    },
    { 
        oid: '#TR15qz12',
        lat: 30.691599868337622,
        long: 76.8506751576726,
        accuracy: 50
    },
];
  
// checking if the trackId is in the order list 
let len = orderoid.length, i = 0;
while(len--) {
if(orderoid[i].oid == track){
    document.getElementById("result").value = `${track}`

    // Map initial focus point
    var map = L.map('map').setView([30.6942, 76.8606], 6);

    // osm layer
    var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    })

    osm.addTo(map)

    // * getting the geoLocation
    // if(!navigator.geolocation){
    //     alert("Your system doesnt support geolocation")
    // }else{
    //     setInterval(() => {
    //         navigator.geolocation.getCurrentPosition(getPosition)
    //     }, 5000);
    // }

    var marker,circle;

    function getPosition(){

        // console.log(position)
        // var lat = position.coords.latitude
        // var long = position.coords.longitude
        // var accuracy = position.coords.accuracy

        // console.log(lat,long,accuracy)

        if(marker){
            map.removeLayer(marker)
        }
        if(circle){
            map.removeLayer(circle)
        }

        // console.log(orderoid[i].lat)

        marker = 
        L.marker([orderoid[i].lat,orderoid[i].long]).addTo(map)
            .bindPopup('Your courier is here.')
            .openPopup();
        
        console.log(orderoid[i].lat)
        console.log(orderoid[i].long)
        marker.addTo(map)
        circle = L.circle([orderoid[i].lat,orderoid[i].long],{radius: orderoid[i].accuracy})
        circle.addTo(map)

        
        var Group = L.featureGroup([marker,circle])
        Group.addTo(map)

        map.fitBounds(Group.getBounds())

    }
    getPosition()
    break;
}
i++;
}

if(localStorage.getItem("trackingNum") == ''){
    alert("Please enter a tracking Number")
    history.back() // This makes the browser go back to the previous page which is the index.html here.. We do this when clicks on the track now btn without entering the tracking num
}else if(orderoid[i].oid != track){
    alert("Couldnt find the order!")
}
