var app=angular.module("sampleApp",['appRouter']);
app.service('usernamePassing',
    function()
    {

        var user='';
        return{
            getUser :
                function () {
                    return user;
                },
            setUser :
                function (value) {
                    user = value;
                    //return user;
                }
        };
    }
)




//homeCtrl
app.controller('homeCtrl',['$scope','$location', 'usernamePassing',
	function($scope, $location,usernamePassing){
	   $scope.name="";
		$scope.submit=function(){
			name=$('input')[0].value;
            console.log(name);
            usernamePassing.setUser(name);
			$location.path("/Default");
			
		}

	}

]);


//defaultCtrl
app.controller('defaultCtrl',['$scope','$location', 'usernamePassing',
        function($scope,$location,usernamePassing){
        $scope.name=usernamePassing.getUser();
        $scope.items=[];
        $scope.amounts=[1,2,5,10,25,50,75,100,200,300,400,500,750];
        $scope.amounts1=[1000,5000,10000,25000,50000,75000,100000,200000,300000,400000,500000,750000,1000000];
        $scope.prices=[1,2,5,10,25,50,75,100,200,300,400,500,750,1000,5000,10000,25000,50000,75000,100000,200000,300000,400000,500000,750000,1000000];
        var id =100;
        for(var i=0;i<26;i++){
            var index=Math.floor(Math.random()*$scope.prices.length);
            var amount=$scope.prices[index];
            $scope.prices.splice(index,1);
            id++;
            //console.log(amount+" "+id);
            $scope.items.push({"image":"assests/images/case.png","id":id,"amount":amount});
        }
        
        $scope.toggle=function() {
        $scope.myVar = !$scope.myVar;
        };
         
        $scope.click=0;      
        $scope.doClick = function(item, event) {
           
            $scope.click++;
           
            if($scope.click==1){
                $scope.price=event.target.getAttribute('value');
                $('#selected').html("<img src='assests/images/case.png' value="+$scope.price+">");
                //$('#'+event.target.id).attr('disabled', true);
                console.log(event.target);
                item.image="";
            }
            else if($scope.click>1 && $scope.click<=7){
                rounds();
                if($scope.click==7)
                alert("banker offer");
            }
            else if($scope.click>7 && $scope.click<=13){
                rounds();
                if($scope.click==13)
                alert("banker offer");
            }
             else if($scope.click>13 && $scope.click<=17){
                rounds();
                if($scope.click==17)
                alert("banker offer");
            }
             else if($scope.click>17 && $scope.click<=21){
                rounds();
                if($scope.click==21)
                alert("banker offer");
            }
             else if($scope.click>21 && $scope.click<=25){
                rounds();
                if($scope.click==25)
                alert("banker offer");
            }
            
            function rounds(){

                $scope.price=event.target.getAttribute('value');
                //alert(" price: "+$scope.price);
                console.log($scope.price);
                //$('#'+event.target.id)[0].src="assests/images/case_open.png";
                item.image="assests/images/case_open.png";
                //console.log( $("#"+$scope.price));
                $($("#"+$scope.price)).html("<img src='assests/images/inr_case_open_status.png'>"+$scope.price);
                //console.log("id: "+event.target.id);
                for(var i=0;i<$('.amounts').length;i++){

                    if($scope.price==document.getElementsByClassName('amounts')[i].innerHTML){

                        var ele=document.getElementsByClassName('amounts')[i];
                        ele.className=ele.className+" new_class";
                        //console.log("new class");
                    }
                }


                //banker offer
            }
 
 
 
            }

        }



    ]);
