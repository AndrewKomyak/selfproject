using selfproject.Server.Models;

namespace selfproject.Server.Services
{
    public interface IPostsService
    {
        IEnumerable<Post> GetAllPosts();
        Post GetPostById(int id);
        void AddPost(Post post);
    }
}
