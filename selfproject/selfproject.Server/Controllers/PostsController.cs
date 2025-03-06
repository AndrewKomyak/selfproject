using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using selfproject.Server.Models;
using selfproject.Server.Services;

namespace selfproject.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PostsController(ILogger<PostsController> logger, IPostsService postsService) : ControllerBase
    {
        private readonly ILogger<PostsController> _logger = logger;

        private readonly IPostsService _postsService = postsService;

        [HttpGet(Name = "GetPosts")]
        public IEnumerable<Post> Get()
        {
            try
            {
                _logger.LogDebug("Getting all posts");
                return _postsService.GetAllPosts();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error getting all posts");
                return null;
            }
        }

        [HttpGet("{id}", Name = "GetPostById")]
        public Post Get(int id)
        {
            _logger.LogDebug($"Getting post with id {id}");
            return _postsService.GetPostById(id);
        }

        [HttpPost(Name = "AddPost")]
        public void Post([FromBody] Post post)
        {
            if (post.IsAnonymous)
            {
                post.AuthorId = null;
            }

            _logger.LogDebug("Adding post");
            _postsService.AddPost(post);
        }
    }
}
