
/**
 * Created by andrea.terzani on 04/11/2015.
 */
/*
Template.posts.helpers({
    posts:function(){
        var posts  = Posts.find();
        return posts;
    }
});
*/


Template.article.helpers({
   article_content: function () {
       var rendered = $('<div></div>');
       rendered.append(this.content);

       rendered.find('div').removeClass();

       rendered.find('img').removeClass().addClass('img-responsive center-block').wrap( "<div class='article-image' layout='row' layout-align='center'></div>" );

       return rendered.html();
   },
    log: function () {
        console.log(this);
    }
});

/*
Template.viewPost.rendered = function(){

    var self= this;
    console.log('Template.viewPost.rerendered');
    this.autorun(function(){
        console.log("autorun");

        var rendered = $('<div></div>');
        rendered.append(self.data.content);

        rendered.find('.crayon-syntax').each(function(i,val){
            var content = $(this).find('textarea').val();
            var id =  $(this).attr('id');
            rendered.find("#"+id).replaceWith('<div hljs>'+content+'</div>');
        });

        rendered.find('div').removeClass();

        rendered.find('img').removeClass().addClass('img-responsive center-block').wrap( "<div class='article-image' layout='row' layout-align='center'></div>" );

        self.data.content=rendered.html();


    }.bind(this));
};
*/
