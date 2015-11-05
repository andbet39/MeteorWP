/**
 * Created by andrea.terzani on 03/11/2015.
 */



Meteor.publish("posts", function (options) {
    var page = (options.limit/10);
    Meteor.call('getPosts',page);
    return  Posts.find({},options);
});

Meteor.publish('singlePost', function(id) {
    Meteor.call('getPost',id);
    return id && Posts.find(id);
});


Meteor.methods({
    getPosts: function (page) {
            console.log('getPosts REST CALL => page:'+page);
            var _page = page.toString();

            this.unblock();
            try {
                var result = HTTP.call("GET", "https://www.codetutorial.io/api/get_posts/?page="+_page+"&count=10",
                    function (error, result) {
                        if (!error) {
                            var jsonContent = JSON.parse(result.content);
                            var posts  = jsonContent.posts;
                            max_post_count = parseInt(jsonContent.count_total);
                            console.log(max_post_count);
                            posts.forEach(function(post){

                                var exitst = Posts.findOne({id: post.id});

                                if(typeof exitst == 'undefined'){
                                    var newpost = {
                                        id:post.id,
                                        title:post.title,
                                        excerpt:post.excerpt,
                                        date:new Date(post.date),
                                        categories:post.categories
                                };



                                    Posts.insert(newpost);
                                }
                            });

                        }
                    });
            } catch (e) {
                return false;
            }
    },
    getPost: function (post_id) {


        var post = Posts.findOne(post_id);
        if(!post.content){
            console.log ("Server getPost "+     post_id);

        var wp_post_id = post.id.toString();
         this.unblock();
            try {
                var result = HTTP.call("GET", "https://www.codetutorial.io/api/get_post/?post_id="+wp_post_id,
                    function (error, result) {
                        if (!error) {
                            var jsonContent = JSON.parse(result.content);
                            Posts.update(post_id, {
                                $set: {content:jsonContent.post.content }
                            });
                        }
                    });
            } catch (e) {
                return false;
            }
        }
    }

});
