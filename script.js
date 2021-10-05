$(function()
{   //47
    var array=["Instagram","Document","Tata","Tesla","Mercedes","Samsung","Apple","Moto","Lenovo","Night","Evening","Morning","Script","Success","Road","Expanded","Edition","Anniversary","Database","Mathematics","Discrete","English","Reader","Supplementary","Moments","Napoleon","Hill","Rich","Grow","and","Think","Kartik","Murphy","Joseph","Your","Mind","Subconscious","Power","Millionaire","One","Zero","Alchemist","Coelho","Paulo","of","Art","Resilience"];
    var score =0;
    var time;
    var word;
    var myTime;
    var i=0;
    //Timer
    //timer();
    //wordGenerator();
    function timer()
    {  $("#myTimer").html("Timer : 30");
       $("#myTimer").css({"border":"2px solid wheat"});
       time=30;
      myTime =setInterval(function(){
          $("#myTimer").html("Timer : " + --time);
          
          if(time==0)
          {
            $("#myPlayer").hide();  
            clearInterval(myTime);
            $("#myScoreBoard").show();
            $("#myScoreBoard").prepend("Your Score in last Attempt is : " +score+"</br>");
              
          }
      },1000) ;
       
    }
    function wordGenerator()
    {
        word =array[Math.floor(Math.random()*45)];
        $("#myQuestion").html(word);


        $(document).keypress(function(e)
        {
            if(e.which==13)
            {   e.preventDefault();
                if(word==$("#myAnswer").val())
                {
                    $("#myScore").html(" Score : "+ ++score);
                }
                
                if(time!=0)
                {
                    wordGenerator();
                $("#myAnswer").val('');
                }
            }
        })

    }

  //Driver code
  $("#myStart").click(function()
  {
      $("#myTryAgain").removeClass("disabled");
      $("#myReset").removeClass("disabled");
      timer();
      wordGenerator();
  })
  $("#myTryAgain").click(function()
  {
      $("#myLap").prepend("<h4>Attempt--> "+ ++i+"&nbsp;&nbsp;&nbsp;&nbsp;Score -->"+score+"</h4>");
      clearInterval(myTime);
      timer();
      score=0;
      $("#myScore").html(" Score : 0");
  })
   $("#myReset").click(function()
   {
       window.location.reload();

   }) 
    
    $("#start").click(function()
    {
        window.location.reload();
    })
    
    
    
   

    
})