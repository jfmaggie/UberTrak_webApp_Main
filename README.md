# UberTrak_webApp_Main

# To add your tab follow these steps:

* Add a side bar item in stat.html 
```
<li><a ui-sref=".rideHistory"> <!--Note here, this string ('.reideHistory') is the reference to your page-->
  Ride History
</a></li>
```
* In UberTrack.js add :     
```
.state('stat.rideHistory', { //append your name string to 'stat'
  url: '/rideHistory',
  templateUrl: 'partial/rideHistory.html', // relative path
  controller: 'rideHistoryCtrl' //controller
  })
  ```

* Add your controller 
* Create the html file

That should do it. HTH 

