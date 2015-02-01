//This code stores all records into mvMainCtrl controller
angular.module('app',[]).filter('toChinese', function($http) {
    return function(input) {
        //https://api.datamarket.azure.com/Bing/MicrosoftTranslator/v1/Translate?Text=%27hello%27&To=%27zh-CHS%27&From=%27en%27
        //http://api.microsofttranslator.com/V2/Ajax.svc/Translate?appId=MyAppID&from=en&to=ar&text=hello&oncomplete=doneCallback
        $http.get('http://api.microsofttranslator.com/V2/Ajax.svc/Translate?appId='+myAppID+'&from=en&to=ch&text='+input+'&oncomplete=doneCallback').
            success(function(data, status, headers, config) {
                // this callback will be called asynchronously
                // when the response is available
            }).
            error(function(data, status, headers, config) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });

        return input ? '\u2713' : '\u2718';
    };
}).controller('MainCtrl', function ($scope) {




$scope.selectedQuestion=true;
$scope.completedQuestions=[];
$scope.points=0;
$scope.clicked='';

$scope.questionAnswers=[
    {
        question:'If you are involved in a collision during foggy weather conditions, the most important thing to do is:' +
                 '(如果您参与了在有雾的天气条件下发生碰撞时，做的最重要的事情是:)',
        choices:{a:'Stay in the car'+'(留在车内)',
                 b:'Move your car off the road'+'(移动你的车上路)',
                 c:'Turn on your vehicle"s parking lights'+'(打开你的车停车灯)',
                 d:'Raise the hood'+'提高罩',
                    answer:'Move your car off the road'+'(移动你的车上路)',
                 type:'text'},
        comment:'',
        image:''
    },
    {
        question:'When parking at a railroad crossing you must keep the following distance from the crossing:'+
                 '(停车时在铁路道口，你必须不断地从道口以下的距离)',
        choices:{a:'More than 20 feet'+'(超过20英尺)',
            b:'11 feet'+'(11英尺)',
            c:'At least 31 feet'+'(至少31英尺)',
            d:'More than 50 feet'+'(更超过50英尺)',
                answer:'More than 50 feet'+'(更超过50英尺)',
            type:'text'},
        comment:'',
        image:''
    },
    {
        question:'Where should you stop at an intersection where there is a stop sign, but no stop line or crosswalk?'+
                 '(你应该在哪里停在一个路口，那里是一个站牌，但没有停车线或人行横道？)',
        choices:{a:'Where you can see at least 200 feet in either direction, even if it means entering the intersecting roadway'+
                    '(在这里可以看到至少200英尺任一方向，即使这意味着在进入交叉巷道)',
            b:'You are not required to stop'+'(你是不是要求停止)',
            c:'Where you have a good view of all approaching traffic on the intersecting roadway without actually entering the roadway'+
                '(在这里你有相交的所有道路交通接近一个很好的观点，而无需实际进入巷道)',
            d:'Stop completely and yield'+'(完全停止和产量)',
                answer:'Where you have a good view of all approaching traffic on the intersecting roadway without actually entering the roadway'+
                        '(在这里你有相交的所有道路交通接近一个很好的观点，而无需实际进入巷道)',
            type:'text'},
        comment:'',
        image:'images/US.16.20.jpg'
    },
    {
        question:'When approaching a traffic signal with a flashing yellow light, you must:'+
                    '(当一个黄灯闪烁接近交通信号，必须)',
        choices:{a:'Slow down, unless traffic coming from your right has stopped'+
                    '(慢下来，除非流量从右边驶来已经停止)',
            b:'Stop and remain stopped until a green signal appears'+
                '(停止并保持停止状态，直到出现一个绿色的信号)',
            c:'Slow down and proceed with caution'+'(放慢脚步，谨慎行事)',
            d:'Stop completely and yield'+'(完全停止和产量)',
                answer:'Slow down and proceed with caution'+'(放慢脚步，谨慎行事)',
            type:'text'},
        comment:'',
        image:'images/US.13.09.gif'
    },
    {
        question:'What is the basic speed limit on freeways with paved shoulders?'+
                '(什么是高速公路与被铺的肩膀基本限速？)',
        choices:{
            a:'50 mph'+'(50英里每小时)',
            b:'65 mph'+'(65英里每小时)',
            c:'70 mph'+'(70英里每小时)',
            d:'60 mph'+'(60英里每小时)',
            answer:'65 mph'+'(65英里每小时)',
            type:'text'},
        comment:'',
        image:'images/US.32.01.jpg'
    },
    {
        question:'The blood alcohol concentration (BAC) level at which it is illegal for any person to drive is:'+
                '(血液中的酒精浓度（ BAC ）的水平，在它是非法的，任何人驾驶的)',
        choices:{a:'0.08 percent'+'(百分 0.08)',
            b:'0.02 percent'+'(百分 0.02)',
            c:'0.12 percent'+'(百分 0.12)',
            d:'0.10 percent'+'(百分 0.10)',
                answer:'0.08 percent'+'(百分 0.08)',
            type:'text'},
        comment:'',
        image:'images/US.36.04.jpg'
    },
    {
        question:'You, as a driver, do not need to wear safety belts:'+
                    '(你作为一个司机，不需要佩戴安全带)',
        choices:{a:'When driving on a private road'+'(当私家路行驶)',
            b:'When driving on public roads'+'(当在公共道路上行驶)',
            c:'When the car is equipped with air bags'+'(当车上装有安全气囊)',
            d:'None of the above'+'(以上都不是)',
            answer:'None of the above'+'(以上都不是)',
            type:'text'},
        comment:'The mandatory safety belt usage law requires drivers and front-seat occupants of most passenger vehicles to wear safety belts whenever they drive or ride in a motor vehicle on Ohio"s roadways.'
                +'(强制安全带使用法律规定的最客运车辆驾驶员和前座乘客佩戴安全带时，他们驾驶或乘坐机动车在俄亥俄道路。)',
        image:'images/US.39.13.jpg'
    },
    {
        question:'A truck"s blind spots:'+'(一辆卡车盲点)',
        choices:{a:'Can be checked by using rear view mirrors'+'(可以通过使用后视镜被检查)',
            b:'Are eliminated with an additional outside mirror on each side'+'(与每边一个额外的外后视镜消除)',
            c:'Are bigger than the blind spots of a passenger vehicle'+'(是大于客运车辆的盲点)',
            d:'Are eliminated with bigger mirrors'+'(与大镜子淘汰)',
            answer:'Are bigger than the blind spots of a passenger vehicle'+'(是大于客运车辆的盲点)',
            type:'text'},
        comment:'Generally speaking, the bigger trucks are, the bigger their blind spots. Blind spots are not eliminated with bigger or additional mirrors.'
                +'(一般来说，更大的卡车，则他们的盲点。盲点不与较大的或额外的镜子淘汰。)',
        image:'images/US.21.27B.jpg'
    },
    {
        question:'What does this sign mean?'+'(这是什么牌子呢？)',
        choices:{a:'All approaching traffic to this intersection must stop'
                    +'(所有驶近的车辆到该路口必须停止)',
            b:'Proceed, you have the right-of-way'+'(继续，你有通行权的方式)',
            c:'You must always stop'+'(你必须始终停止)',
            d:'You must give the right-of-way to pedestrians and vehicles'
                +'(你必须给的路权到行人和车辆)',
            answer:'You must give the right-of-way to pedestrians and vehicles'+'(你必须给的路权到行人和车辆)',
            type:'text'},
        comment:'This is a yield sign. Three-sided red yield signs mean you must slow down and be ready to stop to let any vehicle, bicyclist, or pedestrian pass before you proceed'
                +'(这是一个屈服的迹象。三面红色的收益迹象意味着你必须慢下来，并准备停下来让任何车辆，骑自行车或步行通过，然后再继续)',
        image:'images/US.02.02.jpg'
    },
    {
        question:'If you need to brake in a hurry, what determines how far your car will go before you can bring the car to a complete stop?'
                    +'(如果您需要制动着急，什么决定多远，你的车会去之前，你可以把车停稳？)',
        choices:{a:'Condition of road'+'(道路状况)',
            b:'Condition of brakes'+'(刹车条件)',
            c:'Condition of tires'+'(轮胎的状态)',
            d:'All of the above'+'(上述所有的)',
            answer:'All of the above'+'(上述所有的)',
            type:'text'},
        comment:'The process of stopping your car has three main components: perception, reaction and braking. This is usually referred to as stopping distance. The first two components can be affected by human factors such as tiredness, alcohol, fatigue and concentration levels. The last component depends on factors such as: tires, brakes, road, and weather conditions.'
                +'(停止你的车的过程中有三个主要组成部分：感知，反应和制动。这通常被称为停止距离。前两个部件可受到人为因素，如疲劳，酒精，疲劳和浓度水平。的最后一个组成部分取决于多种因素，例如：轮胎，刹车，道路和天气状况)',
        image:'images/US.15.02.jpg'
    },
    {
        question:'What does this sign mean?'+'(这是什么牌子呢？)',
        choices:{a:'No passing'+'(禁止超车)',
            b:'Divided highway ahead'+'(提前分道公路)',
            c:'Two-way traffic'+'(双向交通)',
            d:'Traffic must merge right'+'(交通必须合并权)',
            answer:'Two-way traffic'+'(双向交通)',
            type:'text'},
        comment:'Two-Way Traffic sign. The sign warns that the road changes from a multi-lane roadway to a two-lane, two-way section. It is also used along such a road.'
                +'(双向交通标志。标志警告说，从多车道公路的道路变为两车道，双向部分。它也沿着这样的道路使用。)',
        image:'images/US.05.15.jpg'
    },
    {
        question:'You can park your car:'+'(您可以将车停放)',
        choices:{a:'Ten feet from a traffic light'+'(十英尺从一个红绿灯)',
            b:'On a marked crosswalk'+'(在人行横道标)',
            c:'On a bridge'+'(在桥上)',
            d:'75 feet from a railroad crossing'+'(75英尺从铁路道口)',
            answer:'75 feet from a railroad crossing'+'(75英尺从铁路道口)',
            type:'text'},
        comment:'You can park more than 50 feet of the nearest rail of a railroad crossing.'
                +'(你可以停放超过50英尺铁路道口的最近轨道。)',
        image:'images/US.23.33.jpg'
    },
    {
        question:'Before turning left or right you must signal continuously during the last:'+
                    '(前转左或右，你必须在过去的连续信号)',
        choices:{a:'200 feet'+'(200英尺)',
            b:'300 feet'+'(300英尺)',
            c:'100 feet'+'(100英尺)',
            d:'50 feet'+'(50英尺)',
            answer:'100 feet'+'(100英尺)',
            type:'text'},
        comment:'A turn signal must be given at least 100 feet before the intended turn. This may be accomplished by using either a mechanical signal or the appropriate hand-arm signal.'
                +'(一转信号必须预期转前至少百英尺给出。这可以通过使用一个机械信号或适当的手臂的信号来实现)',
        image:'images/US.20.02.jpg'
    },
    {
        question:'If your car starts to skid, what is the most common cause?'+'(如果你的车开始打滑，什么是最常见的原因是什么？)',
        choices:{a:'The overall weight of your car'+'(您的汽车的整体重量)',
            b:'Poor road conditions'+'(路况不好)',
            c:'You were driving too fast'+'(你开得太快)',
            d:'Brake failure'+'(刹车失灵)',
            answer:'You were driving too fast'+'(你开得太快)',
            type:'text'},
        comment:'Skids are caused by drivers traveling too fast for conditions. If your vehicle does go into a skid, slow down gradually by taking your foot off the accelerator. Never apply the brakes while skidding. Turn the steering wheel in the direction of the skid. If rear of vehicle is skidding to the left you want to steer to the left to bring the front of the vehicle back in the direction you want to go.'
                +'(垫木由司机行驶太快条件造成的。如果你的车辆没有进入一个打滑，采取你的脚从油门踏板逐渐减速。千万不要使用制动器打滑时。转动方向盘，在打滑的方向。如果车辆的后部被打滑向左要引导到左边以使车辆的前回你想去的方向。)',
        image:'images/US.24.02.jpg'
    },
    {
        question:'Driving under the influence of a drug that impairs your ability to drive safely is:'+
                    '(药物的损害你的能力，安全驾驶是酒后驾车)',
        choices:{a:'Always legal (the law only applies to alcohol)'+'(永远的法律（法律只适用于酒精 )',
            b:'Only illegal if the drug is illegal.'+'(不仅违法，如果该药物是非法的。)',
            c:'Always illegal'+'(始终违法)',
            d:'Brake failure'+'(刹车失灵)',
            answer:'Always illegal'+'(始终违法)',
            type:'text'},
        comment:'The use of any drug which impairs your ability to drive safely is illegal.'+
                '(使用这损害您的安全驾驶能力的任何药物是非法的。)',
        image:'images/US.36.01.jpg'
    },
    {
        question:'A violation of the safety belt law will result in the following points on your driving record:'+
                '(违反安全带法律将导致对你的驾驶记录了以下几点)',
        choices:{a:'Four points'+'四点',
            b:'No points'+'(没有点)',
            c:'Two points'+'(两点)',
            d:'One point'+'(一点)',
            answer:'No points'+'(没有点)',
            type:'text'},
        comment:'A violation of the safety belt law is not a moving violation and carries no points on your permanent driving record.'+
                '(违反安全带法律不是移动侵犯并进行永久的驾驶记录没有点)',
        image:'images/US.25.12.jpg'
    },
    {
        question:'On which side should you pass a barricade with this panel?'+'(在这方面，你应该通过这个面板中的路障？)',
        choices:{a:'On either side'+'(任何一方)',
            b:'To the left'+'(靠左)',
            c:'To the right'+'(向右)',
            d:'To the middle'+'(到中间)',
            answer:'To the right'+'(向右)',
            type:'text'},
        comment:'Work zone channelizing device: barricade. Stripes sloping downward to the right mean pass to the right. Compare with a yellow and black object marker.'
                +'工作区通道化设备：路障。条纹向下倾斜到右边意味着传递到右侧。用黄色和黑色的对象的标记进行比较。',
        image:'images/US.37.05B.jpg'
    },
    {
        question:'When driving at night be sure that you can stop:'+'(在夜间行车时请确保您可以停止：)',
        choices:{a:'Within the distance you can see ahead'+'(在远处就可以看到未来)',
            b:'Within 5-10 seconds'+'(在5-10秒)',
            c:'Within the distance lighted by your parking lights'+'(在您的停车灯点亮的距离)',
            d:'Within 10-15 seconds'+'(在10-15秒)',
            answer:'Within the distance you can see ahead'+'(在远处就可以看到未来)',
            type:'text'},
        comment:'When driving at night, maintain a cautious reasonable speed and make sure you are able to stop in the distance illuminated by your headlights.'
                +'(在夜间行车时，保持谨慎合理的速度，并确保你能停在了你的车灯照亮的距离。)',
        image:'images/US.18.13.jpg'
    },
    {
        question:'When making a right turn you should not:'+'(当右转，你不应该：)',
        choices:{a:'Honk your horn to warn pedestrians within the crosswalk'+'(按喇叭你的号角在人行横道内的行人发出警告)',
            b:'Signal at least 100 feet before the turn'+'(转弯前的信号至少百英尺)',
            c:'Drive close to the right edge of the road'+'(开车靠近道路右侧边缘)',
            d:'Drive close to the left edge of the road'+'(开车靠近道路的左边缘)',
            answer:'Honk your horn to warn pedestrians within the crosswalk'+'(按喇叭你的号角在人行横道内的行人发出警告)',
            type:'text'},
        comment:'You should not honk your horn to warn pedestrians within the crosswalk. A turn signal must be given at least 100 feet before the intended turn. Drive as close as possible to the right-hand curb or edge of the road. Yield to pedestrians. (This question asked what you should not do).'
                +'(你不应该按喇叭你的号角，警告人行横道内的行人。一转信号必须预期转前至少百英尺给出。驱动尽可能接近到右侧路边或道路的边缘。避让行人。 （这个问题问什么，你不应该这样做） 。)',
        image:'images/US.20.03.jpg'
    },
    {
        question:'A pedestrian has entered a crosswalk where there are no signs or signals. Who should be given the right-of-way?'+
                    '(一行人进入人行横道那里有没有标志或信号。谁应给予通行权的方式吗？)',
        choices:{a:'The pedestrian'+'(行人)',
            b:'A motor vehicle has the right-of-way, but should yield for the sake of the pedestrian"s safety.'+
                '(机动车拥有的路权，但应产生是为了行人“的安全的。)',
            c:'It depends on who reached the crossing first'+'(这取决于谁达到了第一个路口)',
            d:'Any motor vehicle'+'(任何汽车)',
            answer:'The pedestrian'+'(行人)',
            type:'text'},
        comment:'A driver must yield the right-of-way to a pedestrian in a marked crosswalk, or at an unmarked crosswalk at an intersection.'+
                '(驱动程序必须产生的路权，一行人在人行横道明显，或在无人盯防的人行横道，在路口。)',
        image:'images/US.29.11.jpg'
    },
    {
        question:'When driving in heavy rain, you should use:'+'(当在大雨中开车，你应该使用：)',
        choices:{a:'High beam headlights'+'(高光束车灯)',
            b:'No lights'+'(没有灯)',
            c:'Parking lights'+'(停车灯)',
            d:'Low beam headlights'+'(低光束车灯)',
            answer:'Low beam headlights'+'(低光束车灯)',
            type:'text'},
        comment:'Use the low beams in fog, or when it is snowing or raining hard.'+'(使用近光在雾中，或下雪时还是大雨。)',
        image:'images/US.18.23.jpg'
    },
    {
        question:'What kind of sign is this?'+'(什么样的标志是什么？)',
        choices:{a:'A minimum speed limit sign'+'(最低限速标志)',
            b:'A maximum speed limit sign.'+'(最大限速标志。)',
            c:'An advisory speed sign.'+'(一个顾问速度的迹象。)',
            d:'Upcoming ramp sign'+'(即将到来的坡道标志)',
            answer:'An advisory speed sign.'+'(一个顾问速度的迹象。)',
            type:'text'},
        comment:'This is an advisory speed sign. It shows the recommended speed, at which the exit ramp from an expressway may be traveled safely.'
                +'(这是一个顾问速度的迹象。它显示了推荐速度，在从高速公路出口匝道可以安全地行驶。)',
        image:'images/US.05.31B.jpg'
    },
    {
        question:'If your car starts to skid, you should not:'+'(如果你的车开始打滑，你不应该：)',
        choices:{a:'Take your foot off the gas pedal.'+'(把你的脚从油门踏板。)',
            b:'Slow down gradually.'+'(逐渐减速。)',
            c:'Steer in the direction you want the vehicle to go.'+'(引导你想要的车去的方向。)',
            d:'Brake firm and hard.'+'(刹车坚定和努力。)',
            answer:'Brake firm and hard.'+'(刹车坚定和努力。)',
            type:'text'},
        comment:'If your vehicle does go into a skid, slow down gradually by taking your foot off the accelerator. Never apply the brakes while skidding. Turn the steering wheel in the direction of the skid. If rear of vehicle is skidding to the left you want to steer to the left to bring the front of the vehicle back in the direction you want to go. This question asked what you should not do.'
                +'(如果你的車輛沒有進入一個打滑，採取你的腳從油門踏板逐漸減速。千萬不要使用制動器打滑時。轉動方向盤，在打滑的方向。如果車輛的後部被打滑向左要引導到左邊以使車輛的前回你想去的方向。這個問題問什麼，你不應該這樣做。)',
        image:'images/US.24.02.jpg'
    },
    {
        question:'Lane-hopping or weaving in and out of traffic:'+'(車道跳躍或編織進出交通：)',
        choices:{a:'Always saves you a significant amount of travel time.'+'(始終為您節省了顯著量的出行時間。)',
            b:'Reduces the risk of a collision.'+'(降低碰撞的危險。)',
            c:'Improves flow of traffic in congested areas.'+'(改善了擁擠的地區流動的流量。)',
            d:'Often contributes to road rage.'+'(往往有助於路霸。)',
            answer:'Often contributes to road rage.'+'(往往有助於路霸。)',
            type:'text'},
        comment:'Once you are in a lane, stay in it. Do not weave in and out of lanes. Lane-hopping is dangerous, annoys other drivers, increases the risk of a collision, often contributes to road rage and very seldom saves the driver any significant amount of travel time.'
                +'(一旦你在一個車道，留在這。不要編織進出車道。車道跳躍是危險的，惹惱其他司機，增加了碰撞的風險，往往有助於路霸和很少保存驅動程序的任何顯著量的出行時間。)',
        image:'images/US.14.21.jpg'
    },
    {
        question:'Which of the following is used as a channeling device to direct traffic flow in a work zone?'
            +'(以下哪項作為竄設備直接在工作區的交通流量？)',
        choices:{a:'images/US.37.10S.png',
            b:'images/US.37.11S.png',
            c:'',
            d:'',
            answer:'',
            type:'image'},
        comment:'Warning signs in the construction series have a distinctive orange background. When motorists see an orange sign, they should be alert, reduce speed, and watch for workers and equipment on the highway.'
                +'(在建築系列警示牌有一個獨特的橙色背景。當駕駛者看到一個橙色的標誌，他們應該提高警惕，降低車速，並注意工人和設備在公路上。)',
        image:'images/US.14.21.jpg'
    },
    {
        question:'Persons in vehicles equipped with air bags are exempt from the safety belt law.'
                +'(在配有安全氣囊的車輛者可免於安全帶的法律。)',
        choices:{a:'False'+'(假)',
            b:'True'+'(真)',
            c:'None of the above'+'(以上都不是)',
            d:'All of the above'+'(上述所有的)',
            answer:'False'+'(假)',
            type:'text'},
        comment:'Persons in vehicles equipped with air bags are not exempt from the safety belt law.'
                +'(在配有安全氣囊的車輛的人是不能免除的安全帶法。)',
        image:'images/US.39.14.jpg'
    },
    {
        question:'Persons in vehicles equipped with air bags are exempt from the safety belt law.'
                +'(在配有安全氣囊的車輛者可免於安全帶的法律。)',
        choices:{a:'Yield'+'(產量)',
            b:'Stop'+'(停止)',
            c:'Do not enter'+'(不許進入)',
            d:'Warning'+'(警告)',
            answer:'Yield'+'(產量)',
            type:'text'},
        comment:'Three-sided red yield signs mean you must slow down and be ready to stop, if necessary, to let any vehicle, bicyclist, or pedestrian pass before you proceed.'
                +'(三面紅色的收益跡象意味著你必須放慢速度，並準備停止，如果有必要，讓任何車輛，騎自行車或步行通過，然後再繼續。)',
        image:'images/US.01.04.jpg'
    },
    {
        question:'A conviction of speeding 10 mph over a 55 mph speed limit, will result in the following points on your driving record:'
        +'(一個信念，加快10英里每小時超過55mph限速的，將導致你的駕駛記錄了以下幾點：)',
        choices:{a:'No point'+'(沒點)',
            b:'Four points'+'(四點)',
            c:'Two points'+'(兩點)',
            d:'Six points'+'(六分)',
            answer:'No point'+'(沒點)',
            type:'text'},
        comment:'If the speed limit is less than 55 mph, exceeding the limit by 10 mph or less will not result in any points on your driving record.'
                +'(如果限速低於55英里，超過限制10英里每小時少會不會對你的駕駛記錄的任何點。)',
        image:'images/US.25.38D.jpg'
    },
    {
        question:'If you use another person"s driver"s license to buy alcoholic beverages, it will result in a suspension of your license for:'+
            '(如果您使用其他人“的司機”駕照買酒精飲料，它會導致你的牌照的懸掛系統：)',
        choices:{a:'Six months'+'(半年)',
            b:'10 days'+'(10天)',
            c:'One year'+'(一年)',
            d:'30 days'+'(30天)',
            answer:'One year.'+'(一年)',
            type:'text'},
        comment:'No person can use a falsified driver"s license or one that has been altered or belongs to someone else to buy alcoholic beverages. The penalty for this law is an automatic one-year suspension of driving privileges.'
            +'(任何人都可以使用偽造駕駛“執照或者一個已經被更改或屬於別人買酒精飲料的罰款這項法律是一個自動一年的​​暫停駕駛特權。)',
        image:'images/US.25.56S.jpg'
    },
    {
        question:'You must have the following vehicle equipment in proper working order:'
                +'(您必須在正常工作狀態下車輛裝備：)',
        choices:{a:'A red light showing from the front.'+'(紅燈從正面展示。)',
            b:'A bell, siren, or exhaust whistle.'+'(一個鈴鐺，警報器，或排氣口哨。)',
            c:'Running board courtesy lights.'+'(跑板禮貌燈。)',
            d:'Windshield wipers'+'(雨刷)',
            answer:'Windshield wipers'+'(雨刷)',
            type:'text'},
        comment:'Windshield wiper is required equipment. A bell, siren, or exhaust whistle is not allowed. A red light showing from the front is not allowed. Running board courtesy lights are optional equipment.'
                +'(雨刷是必需的設備。一個鈴鐺，警報器，或排氣口哨是不允許的。紅燈從正面顯示是不允許的。踏腳板禮貌燈是可選設備。)',
        image:'images/US.28.04.jpg'
    },
    {
        question:'Which sign tells you that there is a two-lane roadway with two-way traffic ahead?'+'(這標誌告訴你，有一個兩車道公路雙向前面的交通？)',
        choices:{a:'images/US.05.13S.png',
            b:'images/US.05.14S.png',
            c:'images/US.05.10S.png',
            d:'images/US.05.11S.png',
            answer:'images/US.05.11S.png',
            type:'image'},
        comment:'Divided Highway Ends. The divided highway on which you are traveling ends ahead. You will then be on a two-lane roadway with two-way traffic. Keep to the right.'
                +'(分為公路兩端。分割的高速公路上，你在旅行結束之前。那麼你將在一個兩車道公路雙向交通。堅持正確的。)',
        image:'images/US.28.04.jpg'
    },
    {
        question:'If you are in a roundabout when an emergency vehicle with flashing lights approaches from behind, you should:'
                +'(如果你是在一個迴旋處時，與閃爍的燈光應急車輛從後面接近，你應該：)',
        choices:{a:'Continue through the roundabout and then drive to the right as soon as you can and stop.'+'(繼續通過環島，然後開車到右邊，只要你能和停止。)',
            b:'Continue through the roundabout as slow as possible, then stop.'+'(繼續通過迂迴盡可能慢，然後停止。)',
            c:'Move to the right in the roundabout and stop.'+'(向右移動，在迂迴和停止。)',
            d:'Move to the left in the roundabout and stop.'+'(移動到左側迂迴和停止。)',
            answer:'Continue through the roundabout and then drive to the right as soon as you can and stop.'+'(繼續通過迂迴盡可能慢，然後停止。)',
            type:'text'},
        comment:'Never stop while inside the roundabout or an intersection. Instead, continue to your exit then pull over to the right shoulder of the roadway.'
                +'(永遠都不要停止而迂迴或路口內。相反，繼續你的退出，然後拉過來巷道的右肩。)',
        image:'images/US.22.05.jpg'
    },
    {
        question:'Trucks and buses have:'+'(卡車和公交車有：)',
        choices:{a:'Much smaller blind spots than cars.'+'(更小的盲區比汽車。)',
            b:'Blind spots the same size as cars.'+'(盲點的大小相同的汽車。)',
            c:'Mirrors that eliminate blind spots.'+'(鏡子是消除盲區。)',
            d:'Much larger blind spots than cars.'+'(更大的盲區比汽車。)',
            answer:'Much larger blind spots than cars.'+'(更大的盲區比汽車。)',
            type:'text'},
        comment:'Generally speaking, the bigger vehicles are, the bigger their blind spots.'
                +'(一般來說，越大的車輛，則他們的盲點。)',
        image:'images/US.21.27B.jpg'
    },
    {
        question:'What does this sign mean?'+'(這是什麼牌子呢？)',
        choices:{a:'Always bring your car to a complete stop.'+'(總是把你的車完全停止。)',
            b:'Slow down and yield.'+'(減緩和產量。)',
            c:'Slow down and proceed with caution.'+'(放慢腳步，謹慎行事。)',
            d:'Slow down and don"t proceed.'+'(慢下來，不要“T進行。)',
            answer:'Always bring your car to a complete stop.'+'(總是把你的車完全停止。)',
            type:'text'},
        comment:'Eight-sided red stop signs mean you must make a full stop. Stop before entering a crosswalk or at a white limit line. If a crosswalk or limit line is not painted on the street, stop at the corner without entering the intersection.'
                +'(八面的紅色停止的跡象意味著你必須做一個句號。在進入人行橫道或白限行停止。如果人行橫道或限制線未畫在大街上，停在拐角不進入路口。)',
        image:'images/US.02.01.jpg'
    },
    {
        question:'If gates are lowered at a railroad crossing for a long time and no train passes, you should:'
                +'(如果門被降低，在一個鐵路道口很長一段時間沒有火車經過，你應該：)',
        choices:{a:'Carefully drive around the gate.'+'(小心開車門左右。)',
            b:'Leave the car to make sure no train is approaching, then proceed around the gate.'
                +'(離開車，以確保沒有火車駛近，然後進行門周圍。)',
            c:'Turn around and take another route.'+'(轉身走另一條路線。)',
            d:'Call railroad emergency toll free number, if posted, or 911.'+'(呼叫鐵路緊急免費電話號碼，如果貼，或911 。)',
            answer:'Call railroad emergency toll free number, if posted, or 911.'+'(呼叫鐵路緊急免費電話號碼，如果貼，或911 。)',
            type:'text'},
        comment:'If the gates are lowered and no train passes, call the posted railroad emergency toll free number or 911. Be ready to give a detailed description of your location.'
                +'(如果門被降低，沒有火車經過，請致電貼鐵路緊急免費電話號碼或911準備好給你的位置的詳細說明。)',
        image:'images/US.30.09.jpg'
    },
    {
        question:'The driver in front of you signals (left arm extended horizontally out of open window):'
            +'(在你的信號（左手臂水平​​伸出的打開窗口）前面的驅動程序：)',
        choices:{a:'That there is an emergency.'+'(有緊急情況。)',
            b:'That he plans to turn right.'+'(他打算右轉。)',
            c:'That he plans to turn left.'+'(他打算左轉。)',
            d:'That he is preparing to slow down or stop.'+'(他正準備減速或停止。)',
            answer:'That he plans to turn left.'+'(他打算左轉。)',
            type:'text'},
        comment:'Left turn - left arm extended horizontally out of open window.'+'(左轉 - 左手臂水平延伸出打開的窗口。)',
        image:'images/US.20.05B.jpg'
    },
    {
        question:'You, as a driver, do not need to wear safety belts:'
            +'(你作為一個司機，不需要佩戴安全帶：)',
        choices:{a:'False'+'(假)',
            b:'True'+'(真)',
            c:'All of the above'+'(上述所有的)',
            d:'None of the above'+'(以上都不是)',
            answer:'False'+'(假)',
            type:'text'},
        comment:'In fog or mist, never put your headlights on high beam because the light will be reflected back into your eyes.'
            +'(在有霧或輕霧，永遠不要把你的車燈上的遠光燈，因為光線會被反射回你的眼睛。)',
        image:'images/US.17.07.jpg'
    },
    {
        question:'This sign tells you that the center lane must be used for:'
            +'(這個標誌告訴你，該中心通道必須用於：)',
        choices:{a:'Left and right turns.'+'(左，右轉彎。)',
            b:'Left turns only.'+'(只有左轉。)',
            c:'Right turns only.'+'(只有右轉彎。)',
            d:'Passing slow traffic.'+'(通過慢行交通。)',
            answer:'Left turns only.'+'(只有左轉。)',
            type:'text'},
        comment:'Two-way left turn lane. This sign tells you that the center lane is reserved for the exclusive use of left-turning vehicles in either direction. The lane cannot be used for passing, overtaking, or through travel.'
            +'(雙向左轉車道。這個標誌告訴你，該中心車道預留給任一方向的專用左轉車輛。車道不能用於傳遞，超車，或通過旅行。)',
        image:'images/US.07.10.jpg'
    },
    {
        question:'One good rule for calculating safe distance between you and the car ahead is the:'
            +'(計算你與前方車輛之間的安全距離，一個好的規則是：)',
        choices:{a:'Three-second rule.'+'(三秒規則。)',
            b:'12-second rule.'+'(12秒規則。)',
            c:'Three-car-length rule.'+'(三輛車的長度規則。)',
            d:'20-mph rule.'+'(20英里的規則。)',
            answer:'Three-second rule.'+'(三秒規則。)',
            type:'text'},
        comment:'Some safety experts advise drivers to allow one car length ahead for each 10 mph of speed. Others suggest following the three-second rule.'
            +'(一些安全專家提醒司機允許一個車長面前的每一個10英里每小時的速度。其他的建議下三秒規則。)',
        image:'images/US.14.05B.jpg'
    }

];

    //$scope.totalNumOfQs=$scope.questionAnswers.length;
    $scope.totalNumOfQs=20;

    $scope.randomQuestions= _.sample($scope.questionAnswers,20);
    $scope.currentQuestion=$scope.randomQuestions.pop();

//    console.log('chk $scope.randomQuestions.length');
//    console.log($scope.randomQuestions.length);
//
//    console.log('chk $scope.selectedQuestion');
//    console.log($scope.selectedQuestion);

    $scope.questionCount=1;


    $scope.nextQuestion=function(clicked){
        if($scope.randomQuestions.length!==0){
            $scope.selectedQuestion=true;
            $scope.questionCount+=1;
//            console.log('chk $scope.randomQuestions.length within if');
//            console.log($scope.randomQuestions.length);
//            console.log('chk $scope.selectedQuestion');
//            console.log($scope.selectedQuestion);

        }else{
            $scope.selectedQuestion=false;
//            console.log('chk $scope.randomQuestions.length within else');
//            console.log($scope.randomQuestions.length);
//            console.log('chk $scope.selectedQuestion');
//            console.log($scope.selectedQuestion);
        };

        //record points
        if (typeof($scope.currentQuestion.choices[clicked]) != "undefined"){
            $scope.pickedAnswer=$scope.currentQuestion.choices[clicked];
            $scope.clicked='';

//            console.log('Tester answered correctly');
//            console.log('chk $scope.pickedAnswer');
//            console.log($scope.pickedAnswer);
//
//            console.log('chk $scope.currentQuestion.choices.answer');
//            console.log($scope.currentQuestion.choices.answer);


            if($scope.pickedAnswer===$scope.currentQuestion.choices.answer){
                $scope.points+=1;
//                console.log('chk $scope.points');
//                console.log($scope.points);

                $scope.totalScore=($scope.points/$scope.totalNumOfQs)*100;

//                console.log('chk $scope.points/$scope.totalNumOfQs');
//                console.log($scope.points/$scope.totalNumOfQs);
//
//                console.log('chk $scope.totalScore');
//                console.log($scope.totalScore);


                $scope.currentQuestion.choices.selectedAnswer=$scope.currentQuestion.choices.answer;
//                console.log('chk $scope.currentQuestion.choices.selectedAnswer');
//                console.log($scope.currentQuestion.choices.selectedAnswer);

            }else{
                $scope.currentQuestion.choices.selectedAnswer=$scope.pickedAnswer;
//                console.log('chk $scope.currentQuestion.choices.selectedAnswer');
//                console.log($scope.currentQuestion.choices.selectedAnswer);
                $scope.totalScore=($scope.points/$scope.totalNumOfQs)*100;

            }

        }

        $scope.completedQuestions.push($scope.currentQuestion);

//        console.log('chk $scope.completedQuestions');
//        console.log($scope.completedQuestions);

        $scope.currentQuestion=$scope.randomQuestions.pop();

        //        console.log('chk $scope.completedQuestions');
        //        console.log($scope.completedQuestions);


    };

    $scope.choiceSelection=function(choice){

//        console.log('chk $scope.currentQuestion.choices[choice]');
//        console.log($scope.currentQuestion.choices[choice]);

        $scope.clicked=choice;

    };


//    console.log('chk $scope.currentQuestion');
//    console.log($scope.currentQuestion);







});