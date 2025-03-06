using Microsoft.AspNetCore.Mvc;
using selfproject.Server.Models;
using selfproject.Server.Services;

namespace selfproject.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] User model)
        {
            var result = await _authService.RegisterAsync(model.Username, model.Password);
            if (result.Succeeded)
                return Ok("User registered successfully");

            return BadRequest(result.Errors);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] User model)
        {
            var token = await _authService.LoginAsync(model.Username, model.Password);
            if (token == null)
                return Unauthorized();

            return Ok(new { Token = token });
        }
    }
}
