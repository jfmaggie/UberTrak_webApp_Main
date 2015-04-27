# UberTrak_webApp_Main

# To add your tab follow these steps:

1. Add a side bar item in stat.html 
<li><a ui-sref=".rideHistory"> <!--Note here, this string ('.reideHistory') is the reference to your page-->
  Ride History
</a></li>
2. In UberTrack.js
Add :     .state('stat.rideHistory', { //append your name string to 'stat'
            url: '/rideHistory',
            templateUrl: 'partial/rideHistory.html', // relative path
            controller: 'rideHistoryCtrl' //controller
        })
3. Add your controller 
4. Create the html file

That should do it. HTH 

