 $(document).ready(function(){
   $('#search').click(function(){
     var searchText = $('#searchBar').val();
     var limit=5;
     var api = "https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search="+searchText+"&limit="+limit;
     console.log(api);

     $.ajax({
       type:"GET",
       url:api,
       dataType:"json",
       success:function(data){
         for(var i=0;i<limit;i++){
           var arr = data[2][i].split(" ").slice(0,10);
           var str = arr.join(" ");
           str=str+"...";

           $('.output'+i).addClass("btn btn-default").append("<a href="+data[3][i]+">"+data[1][i]+"</a><p>"+str+"</p>");
           //console.log(str);console.log(data[3][i]);console.log(data[1][i])
         }
       },
       error:function(err) {
         alert(err);
       }
     });

   });
 });
