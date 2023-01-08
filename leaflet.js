// * storing the trackId from localStorage to var
var track = localStorage.getItem("trackingNum")

// * details of all the in-progress orders
const orderoid = [
    { 
        oid: '#TR12sz11',
        lat: localStorage.getItem("lat"),
        long: localStorage.getItem("lng"),
        deliverLat: 23.2599,
        deliverLong: 77.4126,
        accuracy: 50,
        reqDate: '10-1-2023',
        reqTime: '10:00 PM',
        pickDate: '10-1-2023',
        pickTime: '11:50 PM',
        transitDate: '11-1-2023',
        transitTime: '02:32 AM',
        deliverDate: '14-1-2023',
        deliverTime: '09:00 PM',
        phone: '+918558891061'
    },
    { 
        oid: '#TR15qy12',
        lat: localStorage.getItem("liveLat"),
        long: localStorage.getItem("liveLng"),
        deliverLat: 30.7993,
        deliverLong: 76.9149,
        accuracy: 50,
        reqDate: '07-1-2023',
        reqTime: '08:00 AM',
        pickDate: '07-1-2023',
        pickTime: '11:50 AM',
        transitDate: '7-1-2023',
        transitTime: '02:32 PM',
        deliverDate: '10-1-2023',
        deliverTime: '09:00 PM',
    },
    { 
        oid: '#TR77qe24',
        lat: 30.834999,
        long: 76.934799,
        deliverLat: 30.3752,
        deliverLong: 76.7821,
        accuracy: 50,
        reqDate: '09-1-2023',
        reqTime: '12:24 PM',
        pickDate: '09-1-2023',
        pickTime: '01:25 PM',
        transitDate: '9-1-2023',
        transitTime: '02:32 PM',
        deliverDate: '12-1-2023',
        deliverTime: '09:00 PM',
    },
    { 
        oid: '#TR83gh67',
        lat: localStorage.getItem("liveLat"),
        long: localStorage.getItem("liveLng"),
        deliverLat: 10.1632,
        deliverLong: 76.6413,
        accuracy: 50,
        reqDate: '22-12-2022',
        reqTime: '06:41 PM',
        pickDate: '22-12-2022',
        pickTime: '08:50 PM',
        transitDate: '23-12-2022',
        transitTime: '08:32 AM',
        deliverDate: '27-12-2022',
        deliverTime: '09:00 PM',
    },
    { 
        oid: '#TR51ff79',
        lat: localStorage.getItem("lat"),
        long: localStorage.getItem("lng"),
        deliverLat: 28.7041,
        deliverLong: 77.1025,
        accuracy: 50,
        reqDate: '04-1-2023',
        reqTime: '03:23 PM',
        pickDate: '04-1-2023',
        pickTime: '05:13 PM',
        transitDate: '05-1-2023',
        transitTime: '09:32 AM',
        deliverDate: '14-1-2023',
        deliverTime: '09:00 PM',
    },
    { 
        oid: '#TR41yt55',
        lat: 40.730610,
        long: -73.935242,
        deliverLat: 39.952583,
        deliverLong: -75.165222,
        accuracy: 50,
        reqDate: '02-1-2023',
        reqTime: '05:49 PM',
        pickDate: '03-1-2023',
        pickTime: '08:50 AM',
        transitDate: '03-1-2023',
        transitTime: '03:32 PM',
        deliverDate: '07-1-2023',
        deliverTime: '09:00 PM',
    },
];
  
// * checking if the trackId is in the order list 
let len = orderoid.length, i = 0;
while(len--) {
if(orderoid[i].oid == track)
{

    // * getting the geoLocation of the user(Ours rn)
    if(!navigator.geolocation){
        alert("Your system doesnt support geolocation")
    }else{
        navigator.geolocation.watchPosition(showLocation)
    }

    document.getElementById("trackId").value = `${localStorage.getItem("trackingNum")}`

    // * Map initial focus point
    var map = L.map('map').setView([30.6942, 76.8606], 6);

    // * osm layer
    var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png')

    osm.addTo(map)

    var gps = L.control.locate()

    gps.addTo(map)

    function showLocation(position) {
        localStorage.setItem("liveLat",position.coords.latitude)
        localStorage.setItem("liveLng",position.coords.longitude)
     }

    // * Function to add marker and circle to the map
    var marker,circle;
    function getPosition(){

        // console.log(position)
        // var lat = position.coords.latitude
        // var long = position.coords.longitude
        // var accuracy = position.coords.accuracy

        if(marker){
            map.removeLayer(marker)
        }
        if(circle){
            map.removeLayer(circle)
        }

        marker = L.marker([orderoid[i].lat,orderoid[i].long]).addTo(map).bindPopup('Your order is here.').openPopup();
        
        // console.log(orderoid[i].lat)
        // console.log(orderoid[i].long)
        // console.log(localStorage.getItem("lat"))
        // console.log(localStorage.getItem("lng"))
        
        marker.addTo(map)
        circle = L.circle([orderoid[i].lat,orderoid[i].long],{radius: orderoid[i].accuracy})
        circle.addTo(map)

        // * Adding the routes from current location of courier to the delivery address
        L.Routing.control({
            // show: false,
            draggableWaypoints: false,
            waypoints: [
              L.latLng(orderoid[i].lat, orderoid[i].long),
              L.latLng(orderoid[i].deliverLat, orderoid[i].deliverLong)
            ]
          }).addTo(map);
        
        var Group = L.featureGroup([marker,circle])
        Group.addTo(map)

        map.fitBounds(Group.getBounds())

        packageStatus()
    }

    // * calling the func to add everything on the map
    getPosition()
    
    document.getElementById("packageStatus").classList.remove("hidden");
    document.getElementById("trackId").style.color = ''
    break;
}

    // *  Setting the tracking num input value as this
    document.getElementById("trackId").value = "Order Not Found!"
    document.getElementById("trackId").style.color = 'red'

    // * hiding the package status div if the order id is not valid
    document.getElementById("packageStatus").classList.add("hidden");
    i++;
}

if(localStorage.getItem("trackingNum") == ''){
    alert("Please enter a tracking Number")
    history.back() 
    // This makes the browser go back to the previous page which is the index.html here.. We do this when clicks on the track now btn without entering the tracking num
}

function packageStatus(){
    document.getElementById("reqDate").innerHTML = orderoid[i].reqDate
    document.getElementById("reqTime").innerHTML = orderoid[i].reqTime
    document.getElementById("pickDate").innerHTML = orderoid[i].pickDate
    document.getElementById("pickTime").innerHTML = orderoid[i].pickTime
    document.getElementById("transitDate").innerHTML = orderoid[i].transitDate
    document.getElementById("transitTime").innerHTML = orderoid[i].transitTime
    document.getElementById("deliverDate").innerHTML = orderoid[i].deliverDate
    document.getElementById("deliverTime").innerHTML = orderoid[i].deliverTime
}