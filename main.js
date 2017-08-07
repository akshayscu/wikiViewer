 $(document).ready(function(){
   $('#search').click(function(){
     var searchText = $('#searchBar').val();
     var limit=5;
     var api = "https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search="+searchText+"&limit="+limit;
     console.log(api);

     $.ajax({
       type:"GET",
       url:api,
       async:false,
       dataType:"json",
       success:function(data){
         for(var i=0;i<limit;i++){
           $('.output'+i).addClass("btn btn-default").append("<a href="+data[3][i]+">"+data[1][i]+"</a><p>"+data[2][i]+"</p>");
         }
       },
       error:function(err) {
         alert(err);
       }
     });

   });
 });
