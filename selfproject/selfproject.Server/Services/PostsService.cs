using selfproject.Server.Database;
using selfproject.Server.Models;

namespace selfproject.Server.Services
{
    public class PostsService(ILogger<PostsService> logger, SelfDbContext context) : IPostsService
    {
        ILogger<PostsService> _logger = logger;

        SelfDbContext _context = context;

        public IEnumerable<Post> GetAllPosts()
        {
            return _context.Posts.ToList();
        }

        public Post GetPostById(int id)
        {
            return _context.Posts.FirstOrDefault(p => p.Id == id);
        }

        public void AddPost(Post post)
        {
            try
            {
                _context.Posts.Add(post);
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error adding post");
            }
        }
    }
}
