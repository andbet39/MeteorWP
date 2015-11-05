
Template.article.onRendered(function(){
    console.log('onrendered');

    $('pre code').each(function(i, block) {
         hljs.highlightBlock(block);
    });

});

Template.article.helpers({
   article_content: function () {
       var rendered = $('<div></div>');
       rendered.append(this.content);

       rendered.find('.crayon-syntax').each(function(i,val){
           var content = $(val).find('textarea').val();
           var id =  $(val).attr('id');
           var htmlcontent = jQuery("<div />").text(content).html();
           rendered.find("#"+id).replaceWith('<pre><code>'+htmlcontent+'</code></pre>');
       });

       rendered.find('img').removeClass().addClass('img-responsive center-block').wrap( "<div class='article-image' layout='row' layout-align='center'></div>" );

       return rendered.html();
   }
});

Template.post.helpers({
   list_categories: function(){
       var list=[];

       this.categories.forEach(function(cat){
           if(cat.slug != 'tutorial-it' && list.length <3){
               list.push(cat);
           }
       });

        return list;
   },
    image_url:function(){
        console.log( this.attachments[0].url);
        return this.attachments[0].url;
    }
});

