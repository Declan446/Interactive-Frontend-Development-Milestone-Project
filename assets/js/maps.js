    function initMap() {
         //Map options
       var options = {
           zoom: 7,
           center: {lat: 52.4862, lng: -1.8904}
       }
        //New Map
       var map = new google.maps.Map(document.getElementById("map"), options);
/*
       var marker = new google.maps.Marker({
           position: {lat:42.4668, lng:-70.9495},
           map:map,
           icon: "Watford.png"
       });

       var infoWindow = new google.maps.InfoWindow({
           content: "<h1>Vicarage Road</h1>"
       });

       marker.addListener("click", function(){
           infoWindow.open(map, marker);
       });
*/
       //Array of my markers
       var markers = [
           //Watford
           {
           coords:{lat: 51.6499, lng: -0.4015},
           iconTeam: "assets/images/Watford.png",
           content: "<h6>Vicarage Road</h6><dl><dt>Club</dt><dd>- Watford .F.C</dd><dt>Opened</dt><dd>- 1922</dd><dt>Capacity</dt><dd>- 22,200</dd></dl>"
           },
           //Newcastle
           {
           coords:{lat: 54.9783, lng: -1.6178},
           iconTeam: "assets/images/Newcastle.png",
           content: "<h6>St. James' Park</h6><dl><dt>Club</dt><dd>- Newcastle United .F.C</dd><dt>Opened</dt><dd>- 1880</dd><dt>Capacity</dt><dd>- 52,305</dd></dl>"
           },
            //Liverpool
           {
           coords:{lat: 53.2551, lng: -2.5739},
           iconTeam: "assets/images/Liverpool.png",
           content: "<h6>Anfield</h6><dl><dt>Club</dt><dd>- Liverpool .F.C</dd><dt>Opened</dt><dd>- 1884</dd><dt>Capacity</dt><dd>- 53,394</dd></dl>"
           },
           //Sheffeild Utd
           {
           coords:{lat: 53.2213, lng: -1.2815},
           iconTeam: "assets/images/Sheffeild-Utd.png",
           content: "<h6>Bramall Lane</h6><dl><dt>Club</dt><dd>- Sheffield United .F.C</dd><dt>Opened</dt><dd>- 1855</dd><dt>Capacity</dt><dd>- 32,125</dd></dl>"
           },
           //Norwich City
           {
           coords:{lat: 52.3720, lng: -1.1833},
           iconTeam: "assets/images/Norwich.png",
           content: "<h6>Carrow Road</h6><dl><dt>Club</dt><dd>- Norwich City .F.C</dd><dt>Opened</dt><dd>- 1935</dd><dt>Capacity</dt><dd>- 27,359</dd></dl>"
           },
           //Man City
           {
           coords:{lat: 53.2859, lng: -2.1201},
           iconTeam: "assets/images/Man-City.png",
           content: "<h6>City of Manchester Stadium</h6><dl><dt>Club</dt><dd>- Manchester City .F.C</dd><dt>Opened</dt><dd>- 2003</dd><dt>Capacity</dt><dd>- 55,017</dd></dl>"
           },
           //Bournemouth
           {
           coords:{lat: 50.7352, lng: -1.8383},
           iconTeam: "assets/images/Bournemouth.png",
           content: "<h6>Vitality Stadium</h6><dl><dt>Club</dt><dd>- Bournemouth .F.C</dd><dt>Opened</dt><dd>- 1910</dd><dt>Capacity</dt><dd>- 11,364</dd></dl>"
           },
           //Arsenal
           {
           coords:{lat: 51.3318, lng: -0.0631},
           iconTeam: "assets/images/Arsenal.png",
           content: "<h6>Emirates Stadium</h6><dl><dt>Club</dt><dd>- Arsenal .F.C</dd><dt>Opened</dt><dd>- 2006</dd><dt>Capacity</dt><dd>- 60,704</dd></dl>"
           },
           //Brighton & Hove Albion
           {
           coords:{lat: 50.8616, lng: -0.0837},
           iconTeam: "assets/images/Brighton.png",
           content: "<h6>American Express Community Stadium</h6><dl><dt>Club</dt><dd>- Brighton & Hove Albion .F.C</dd><dt>Opened</dt><dd>- 2011</dd><dt>Capacity</dt><dd>- 30,666</dd></dl>"
           },
           //Everton
           {
           coords:{lat: 53.4388, lng: -2.9663},
           iconTeam: "assets/images/Everton.png",
           content: "<h6>Goodison Park</h6><dl><dt>Club</dt><dd>- Everton .F.C</dd><dt>Opened</dt><dd>- 1892</dd><dt>Capacity</dt><dd>- 39,572</dd></dl>"
           },
           //Aston Villa
           {
           coords:{lat: 52.5091, lng: -1.8848},
           iconTeam: "assets/images/Aston-Villa.png",
           content: "<h6>Villa Park</h6><dl><dt>Club</dt><dd>- Aston Villa .F.C</dd><dt>Opened</dt><dd>- 1897</dd><dt>Capacity</dt><dd>- 42,785</dd></dl>"
           },
           //Burnley
           {
           coords:{lat: 53.7890, lng: -2.2302},
           iconTeam: "assets/images/Burnley.png",
           content: "<h6>Turf Moor</h6><dl><dt>Club</dt><dd>- Burnley .F.C</dd><dt>Opened</dt><dd>- 1883</dd><dt>Capacity</dt><dd>- 22,546</dd></dl>"
           },
           //Chelsea
           {
           coords:{lat: 51.4817, lng: -0.1910},
           iconTeam: "assets/images/Chelsea.png",
           content: "<h6>Stamford Bridge</h6><dl><dt>Club</dt><dd>- Chelsea .F.C</dd><dt>Opened</dt><dd>- 1877</dd><dt>Capacity</dt><dd>- 41,837</dd></dl>"
           },
           //Crystal Palace 
           {
           coords:{lat: 51.3980, lng: -0.0861},
           iconTeam: "assets/images/Crystal-Palace.png",
           content: "<h6>Selhurst Park Stadium</h6><dl><dt>Club</dt><dd>- Crystal Palace  .F.C</dd><dt>Opened</dt><dd>- 1924</dd><dt>Capacity</dt><dd>- 25,456</dd></dl>"
           },
           //Leicester City
           {
           coords:{lat: 52.6204, lng: -1.1422},
           iconTeam: "assets/images/Leicester.png",
           content: "<h6>King Power Stadium</h6><dl><dt>Club</dt><dd>- Leicester City .F.C</dd><dt>Opened</dt><dd>- 2002</dd><dt>Capacity</dt><dd>- 32,312</dd></dl>"
           },
           //Manchester United
           {
           coords:{lat: 53.4631, lng: -2.2913},
           iconTeam: "assets/images/Man-Utd.png",
           content: "<h6>Old Trafford</h6><dl><dt>Club</dt><dd>- Manchester United .F.C</dd><dt>Opened</dt><dd>- 1909</dd><dt>Capacity</dt><dd>- 76,000</dd></dl>"
           },
           //Southampton
           {
           coords:{lat: 50.9058, lng: -1.3910},
           iconTeam: "assets/images/Southampton.png",
           content: "<h6>St Mary's Stadium</h6><dl><dt>Club</dt><dd>- Southampton .F.C</dd><dt>Opened</dt><dd>- 2001</dd><dt>Capacity</dt><dd>- 32,505</dd></dl>"
           },
           //Tottenham Hotspur Stadium
           {
           coords:{lat: 51.6043, lng: -0.0664},
           iconTeam: "assets/images/Spurs.png",
           content: "<h6>Tottenham Hotspur Stadium</h6><dl><dt>Club</dt><dd>- Tottenham Hotspur .F.C</dd><dt>Opened</dt><dd>- 2019</dd><dt>Capacity</dt><dd>- 62,303</dd></dl>"
           },
           //West Ham
           {
           coords:{lat: 51.5387, lng: -0.0166},
           iconTeam: "assets/images/West-Ham.png",
           content: "<h6>London Stadium</h6><dl><dt>Club</dt><dd>- West Ham .F.C</dd><dt>Opened</dt><dd>- 2016</dd><dt>Capacity</dt><dd>- 80,000</dd></dl>"
           },
           //Wolverhampton Wanderers
           {
           coords:{lat: 52.5902, lng: -2.1304},
           iconTeam: "assets/images/Wolves.png",
           content: "<h6>Molineux Stadium</h6><dl><dt>Club</dt><dd>- Wolverhampton Wanderers .F.C</dd><dt>Opened</dt><dd>- 1889</dd><dt>Capacity</dt><dd>- 31,700</dd></dl>"
           },
            
        ];

       //Loop through markers
       for(var i = 0;i < markers.length;i++){
           //Add marker
         addMarker(markers[i]);  
       }
       
       // Add Marker Function
       function addMarker(props) {
           var marker = new google.maps.Marker({
               position:props.coords,
               map: map,
               //icon: props.iconTeam
           });
           //Check for custom icon
           if(props.iconTeam){
           //Set icon image
               marker.setIcon(props.iconTeam);
           }

           //Check content
           if(props.content){
               var infoWindow = new google.maps.InfoWindow({
                 content:props.content
               });

               marker.addListener("click", function(){
                 infoWindow.open(map, marker);
               });
            }
       }
     }