//This code stores all records into mvMainCtrl controller
angular.module('app',[]).controller('MainCtrl', function ($scope) {
$scope.selectedQuestion=true;
$scope.completedQuestions=[];
$scope.points=0;
$scope.clicked='';

$scope.questionAnswers=[
    {
        question:'If you are involved in a collision during foggy weather conditions, the most important thing to do is:',
        choices:{a:'Stay in the car',
                 b:'Move your car off the road',
                 c:'Turn on your vehicle"s parking lights',
                 d:'Raise the hood',
                    answer:'Move your car off the road'},
        comment:'',
        image:''
    },
    {
        question:'When parking at a railroad crossing you must keep the following distance from the crossing:',
        choices:{a:'More than 20 feet',
            b:'11 feet',
            c:'At least 31 feet',
            d:'More than 50 feet',
                answer:'More than 50 feet'},
        comment:'',
        image:''
    },
    {
        question:'Where should you stop at an intersection where there is a stop sign, but no stop line or crosswalk?',
        choices:{a:'Where you can see at least 200 feet in either direction, even if it means entering the intersecting roadway',
            b:'You are not required to stop',
            c:'Where you have a good view of all approaching traffic on the intersecting roadway without actually entering the roadway',
            d:'Stop completely and yield',
                answer:'Where you have a good view of all approaching traffic on the intersecting roadway without actually entering the roadway'},
        comment:'',
        image:'/images/US.16.20.jpg'
    },
    {
        question:'When approaching a traffic signal with a flashing yellow light, you must:',
        choices:{a:'Slow down, unless traffic coming from your right has stopped',
            b:'Stop and remain stopped until a green signal appears',
            c:'Slow down and proceed with caution',
            d:'Stop completely and yield',
                answer:'Slow down and proceed with caution'},
        comment:'',
        image:'/images/US.13.09.gif'
    },
    {
        question:'What is the basic speed limit on freeways with paved shoulders?',
        choices:{
            a:'50 mph',
            b:'65 mph',
            c:'70 mph',
            d:'60 mph',
            answer:'65 mph'},
        comment:'',
        image:'/images/US.32.01.jpg'
    },
    {
        question:'The blood alcohol concentration (BAC) level at which it is illegal for any person to drive is:',
        choices:{a:'0.08 percent',
            b:'0.02 percent',
            c:'0.12 percent',
            d:'0.10 percent',
                answer:'0.08 percent'},
        comment:'',
        image:'/images/US.36.04.jpg'
    },
    {
        question:'You, as a driver, do not need to wear safety belts:',
        choices:{a:'When driving on a private road',
            b:'When driving on public roads',
            c:'When the car is equipped with air bags',
            d:'None of the above',
            answer:'None of the above'},
        comment:'The mandatory safety belt usage law requires drivers and front-seat occupants of most passenger vehicles to wear safety belts whenever they drive or ride in a motor vehicle on Ohio"s roadways.',
        image:'/images/US.39.13.jpg'
    },
    {
        question:'A truck"s blind spots:',
        choices:{a:'Can be checked by using rear view mirrors',
            b:'Are eliminated with an additional outside mirror on each side',
            c:'Are bigger than the blind spots of a passenger vehicle',
            d:'Are eliminated with bigger mirrors',
            answer:'Are bigger than the blind spots of a passenger vehicle'},
        comment:'Generally speaking, the bigger trucks are, the bigger their blind spots. Blind spots are not eliminated with bigger or additional mirrors.',
        image:'/images/US.21.27B.jpg'
    },
    {
        question:'What does this sign mean?',
        choices:{a:'All approaching traffic to this intersection must stop',
            b:'Proceed, you have the right-of-way',
            c:'You must always stop',
            d:'You must give the right-of-way to pedestrians and vehicles',
            answer:'You must give the right-of-way to pedestrians and vehicles'},
        comment:'This is a yield sign. Three-sided red yield signs mean you must slow down and be ready to stop to let any vehicle, bicyclist, or pedestrian pass before you proceed',
        image:'/images/US.02.02.jpg'
    },
    {
        question:'If you need to brake in a hurry, what determines how far your car will go before you can bring the car to a complete stop?',
        choices:{a:'Condition of road',
            b:'Condition of brakes',
            c:'Condition of tires',
            d:'All of the above',
            answer:'All of the above'},
        comment:'The process of stopping your car has three main components: perception, reaction and braking. This is usually referred to as stopping distance. The first two components can be affected by human factors such as tiredness, alcohol, fatigue and concentration levels. The last component depends on factors such as: tires, brakes, road, and weather conditions.',
        image:'/images/US.15.02.jpg'
    },
    {
        question:'What does this sign mean?',
        choices:{a:'No passing',
            b:'Divided highway ahead',
            c:'Two-way traffic',
            d:'Traffic must merge right',
            answer:'Two-way traffic'},
        comment:'Two-Way Traffic sign. The sign warns that the road changes from a multi-lane roadway to a two-lane, two-way section. It is also used along such a road.',
        image:'/images/US.05.15.jpg'
    },
    {
        question:'You can park your car:',
        choices:{a:'Ten feet from a traffic light',
            b:'On a marked crosswalk',
            c:'On a bridge',
            d:'75 feet from a railroad crossing',
            answer:'75 feet from a railroad crossing'},
        comment:'You can park more than 50 feet of the nearest rail of a railroad crossing.',
        image:'/images/US.23.33.jpg'
    },
    {
        question:'Before turning left or right you must signal continuously during the last:',
        choices:{a:'200 feet',
            b:'300 feet',
            c:'100 feet',
            d:'50 feet',
            answer:'100 feet'},
        comment:'A turn signal must be given at least 100 feet before the intended turn. This may be accomplished by using either a mechanical signal or the appropriate hand-arm signal.',
        image:'/images/US.20.02.jpg'
    },
    {
        question:'If your car starts to skid, what is the most common cause?',
        choices:{a:'The overall weight of your car',
            b:'Poor road conditions',
            c:'You were driving too fast',
            d:'Brake failure',
            answer:'You were driving too fast'},
        comment:'Skids are caused by drivers traveling too fast for conditions. If your vehicle does go into a skid, slow down gradually by taking your foot off the accelerator. Never apply the brakes while skidding. Turn the steering wheel in the direction of the skid. If rear of vehicle is skidding to the left you want to steer to the left to bring the front of the vehicle back in the direction you want to go.',
        image:'/images/US.24.02.jpg'
    },
    {
        question:'Driving under the influence of a drug that impairs your ability to drive safely is:',
        choices:{a:'Always legal (the law only applies to alcohol)',
            b:'Only illegal if the drug is illegal.',
            c:'Always illegal',
            d:'Brake failure',
            answer:'Always illegal'},
        comment:'The use of any drug which impairs your ability to drive safely is illegal.',
        image:'/images/US.36.01.jpg'
    },
    {
        question:'A violation of the safety belt law will result in the following points on your driving record:',
        choices:{a:'Four points',
            b:'No points',
            c:'Two points',
            d:'One point',
            answer:'No points'},
        comment:'A violation of the safety belt law is not a moving violation and carries no points on your permanent driving record.',
        image:'/images/US.25.12.jpg'
    },
    {
        question:'On which side should you pass a barricade with this panel?',
        choices:{a:'On either side',
            b:'To the left',
            c:'To the right',
            d:'To the center',
            answer:'To the right'},
        comment:'Work zone channelizing device: barricade. Stripes sloping downward to the right mean pass to the right. Compare with a yellow and black object marker.',
        image:'/images/US.37.05B.jpg'
    },
    {
        question:'When driving at night be sure that you can stop:',
        choices:{a:'Within the distance you can see ahead',
            b:'Within 5-10 seconds',
            c:'Within the distance lighted by your parking lights',
            d:'Within 10-15 seconds',
            answer:'Within the distance you can see ahead'},
        comment:'When driving at night, maintain a cautious reasonable speed and make sure you are able to stop in the distance illuminated by your headlights.',
        image:'/images/US.18.13.jpg'
    },
    {
        question:'When making a right turn you should not:',
        choices:{a:'Honk your horn to warn pedestrians within the crosswalk',
            b:'Signal at least 100 feet before the turn',
            c:'Drive close to the right edge of the road',
            d:'Drive close to the right edge of the road',
            answer:'Honk your horn to warn pedestrians within the crosswalk'},
        comment:'You should not honk your horn to warn pedestrians within the crosswalk. A turn signal must be given at least 100 feet before the intended turn. Drive as close as possible to the right-hand curb or edge of the road. Yield to pedestrians. (This question asked what you should not do).',
        image:'/images/US.20.03.jpg'
    },
    {
        question:'A pedestrian has entered a crosswalk where there are no signs or signals. Who should be given the right-of-way?',
        choices:{a:'The pedestrian',
            b:'A motor vehicle has the right-of-way, but should yield for the sake of the pedestrian"s safety.',
            c:'It depends on who reached the crossing first',
            d:'Any motor vehicle',
            answer:'The pedestrian'},
        comment:'A driver must yield the right-of-way to a pedestrian in a marked crosswalk, or at an unmarked crosswalk at an intersection.',
        image:'/images/US.29.11.jpg'
    },
    {
        question:'When driving in heavy rain, you should use:',
        choices:{a:'High beam headlights',
            b:'No lights',
            c:'Parking lights',
            d:'Low beam headlights',
            answer:'Low beam headlights'},
        comment:'Use the low beams in fog, or when it is snowing or raining hard.',
        image:'/images/US.18.23.jpg'
    },
    {
        question:'What kind of sign is this?',
        choices:{a:'A minimum speed limit sign',
            b:'A maximum speed limit sign.',
            c:'An advisory speed sign.',
            d:'Upcoming ramp sign',
            answer:'An advisory speed sign.'},
        comment:'This is an advisory speed sign. It shows the recommended speed, at which the exit ramp from an expressway may be traveled safely.',
        image:'/images/US.05.31B.jpg'
    },
    {
        question:'If your car starts to skid, you should not:',
        choices:{a:'Take your foot off the gas pedal.',
            b:'Slow down gradually.',
            c:'Steer in the direction you want the vehicle to go.',
            d:'Brake firm and hard.',
            answer:'Brake firm and hard.'},
        comment:'If your vehicle does go into a skid, slow down gradually by taking your foot off the accelerator. Never apply the brakes while skidding. Turn the steering wheel in the direction of the skid. If rear of vehicle is skidding to the left you want to steer to the left to bring the front of the vehicle back in the direction you want to go. This question asked what you should not do.',
        image:'/images/US.24.02.jpg'
    },
    {
        question:'Lane-hopping or weaving in and out of traffic:',
        choices:{a:'Always saves you a significant amount of travel time.',
            b:'Reduces the risk of a collision.',
            c:'Improves flow of traffic in congested areas.',
            d:'Often contributes to road rage.',
            answer:'Often contributes to road rage.'},
        comment:'Once you are in a lane, stay in it. Do not weave in and out of lanes. Lane-hopping is dangerous, annoys other drivers, increases the risk of a collision, often contributes to road rage and very seldom saves the driver any significant amount of travel time.',
        image:'/images/US.14.21.jpg'
    },
    {
        question:'Which of the following is used as a channeling device to direct traffic flow in a work zone?',
        choices:{a:'/images/US.37.10S.png',
            b:'/images/US.37.11S.png',
            c:'...',
            d:'All of the above',
            answer:'Often contributes to road rage.'},
        comment:'Warning signs in the construction series have a distinctive orange background. When motorists see an orange sign, they should be alert, reduce speed, and watch for workers and equipment on the highway.',
        image:'/images/US.14.21.jpg'
    },
    {
        question:'Persons in vehicles equipped with air bags are exempt from the safety belt law.',
        choices:{a:'False',
            b:'True',
            c:'None of the above',
            d:'All of the above',
            answer:'False'},
        comment:'Persons in vehicles equipped with air bags are not exempt from the safety belt law.',
        image:'/images/US.39.14.jpg'
    },
    {
        question:'Persons in vehicles equipped with air bags are exempt from the safety belt law.',
        choices:{a:'Yield',
            b:'Stop',
            c:'Do not enter',
            d:'Warning',
            answer:'Yield'},
        comment:'Three-sided red yield signs mean you must slow down and be ready to stop, if necessary, to let any vehicle, bicyclist, or pedestrian pass before you proceed.',
        image:'/images/US.01.04.jpg'
    },
    {
        question:'A conviction of speeding 10 mph over a 55 mph speed limit, will result in the following points on your driving record:',
        choices:{a:'No point',
            b:'Four points',
            c:'Two points',
            d:'Six points',
            answer:'No point'},
        comment:'If the speed limit is less than 55 mph, exceeding the limit by 10 mph or less will not result in any points on your driving record.',
        image:'/images/US.25.38D.jpg'
    },
    {
        question:'If you use another person"s driver"s license to buy alcoholic beverages, it will result in a suspension of your license for:',
        choices:{a:'Six months',
            b:'10 days',
            c:'One year',
            d:'30 days',
            answer:'One year.'},
        comment:'No person can use a falsified driver"s license or one that has been altered or belongs to someone else to buy alcoholic beverages. The penalty for this law is an automatic one-year suspension of driving privileges.',
        image:'/images/US.25.56S.jpg'
    },
    {
        question:'You must have the following vehicle equipment in proper working order:',
        choices:{a:'A red light showing from the front.',
            b:'A bell, siren, or exhaust whistle.',
            c:'Running board courtesy lights.',
            d:'Windshield wipers',
            answer:'Windshield wipers'},
        comment:'Windshield wiper is required equipment. A bell, siren, or exhaust whistle is not allowed. A red light showing from the front is not allowed. Running board courtesy lights are optional equipment.',
        image:'/images/US.28.04.jpg'
    },
    {
        question:'Which sign tells you that there is a two-lane roadway with two-way traffic ahead?',
        choices:{a:'/images/US.05.13S.png',
            b:'/images/US.05.14S.png',
            c:'/images/US.05.10S.png',
            d:'/images/US.05.11S.png',
            answer:'/images/US.05.11S.png'},
        comment:'Divided Highway Ends. The divided highway on which you are traveling ends ahead. You will then be on a two-lane roadway with two-way traffic. Keep to the right.',
        image:'/images/US.28.04.jpg'
    },
    {
        question:'If you are in a roundabout when an emergency vehicle with flashing lights approaches from behind, you should:',
        choices:{a:'Continue through the roundabout and then drive to the right as soon as you can and stop.',
            b:'Continue through the roundabout as slow as possible, then stop.',
            c:'Move to the right in the roundabout and stop.',
            d:'Move to the left in the roundabout and stop.',
            answer:'Continue through the roundabout and then drive to the right as soon as you can and stop.'},
        comment:'Never stop while inside the roundabout or an intersection. Instead, continue to your exit then pull over to the right shoulder of the roadway.',
        image:'/images/US.22.05.jpg'
    },
    {
        question:'Trucks and buses have:',
        choices:{a:'Much smaller blind spots than cars.',
            b:'Blind spots the same size as cars.',
            c:'Mirrors that eliminate blind spots.',
            d:'Much larger blind spots than cars.',
            answer:'Much larger blind spots than cars.'},
        comment:'Generally speaking, the bigger vehicles are, the bigger their blind spots.',
        image:'/images/US.21.27B.jpg'
    },
    {
        question:'What does this sign mean?',
        choices:{a:'Always bring your car to a complete stop.',
            b:'Slow down and yield.',
            c:'Slow down and proceed with caution.',
            d:'Slow down and don"t proceed.',
            answer:'Always bring your car to a complete stop.'},
        comment:'Eight-sided red stop signs mean you must make a full stop. Stop before entering a crosswalk or at a white limit line. If a crosswalk or limit line is not painted on the street, stop at the corner without entering the intersection.',
        image:'/images/US.02.01.jpg'
    },
    {
        question:'If gates are lowered at a railroad crossing for a long time and no train passes, you should:',
        choices:{a:'Carefully drive around the gate.',
            b:'Leave the car to make sure no train is approaching, then proceed around the gate.',
            c:'Turn around and take another route.',
            d:'Call railroad emergency toll free number, if posted, or 911.',
            answer:'Call railroad emergency toll free number, if posted, or 911.'},
        comment:'If the gates are lowered and no train passes, call the posted railroad emergency toll free number or 911. Be ready to give a detailed description of your location.',
        image:'/images/US.30.09.jpg'
    },
    {
        question:'The driver in front of you signals (left arm extended horizontally out of open window):',
        choices:{a:'That there is an emergency.',
            b:'That he plans to turn right.',
            c:'That he plans to turn left.',
            d:'That he is preparing to slow down or stop.',
            answer:'That he plans to turn left.'},
        comment:'Left turn - left arm extended horizontally out of open window.',
        image:'/images/US.20.05B.jpg'
    },
    {
        question:'You, as a driver, do not need to wear safety belts:',
        choices:{a:'False',
            b:'True',
            c:'All of the above',
            d:'None of the above',
            answer:'False'},
        comment:'In fog or mist, never put your headlights on high beam because the light will be reflected back into your eyes.',
        image:'/images/US.17.07.jpg'
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