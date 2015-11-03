/**
 * Created by andrea.terzani on 03/11/2015.
 */

Meteor.methods({
    getPosts: function () {
            this.unblock();
            try {
                var result = HTTP.call("GET", "https://www.codetutorial.io/api/get_posts/?page=1&count=10",
                    function (error, result) {
                        if (!error) {
                            var jsonContent = JSON.parse(result.content);
                            var posts  = jsonContent.posts;

                            posts.forEach(function(post){

                                var exitst = Posts.findOne({id: post.id});

                                if(typeof exitst == 'undefined'){
                                    var newpost = {
                                        id:post.id,
                                        title:post.title,
                                        excerpt:post.excerpt
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

        console.log ("Server getPost "+     post_id);

        var post = Posts.findOne(post_id);
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

});