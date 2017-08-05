 $(document).ready(function(){
   $('#search').click(function(){
     var searchText = $('#searchText').val();
     var api = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchText+"&limit=5";
     console.log(api);
   });
 });
