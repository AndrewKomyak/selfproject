using Microsoft.AspNetCore.Identity;

namespace selfproject.Server.Services
{
    public interface IAuthService
    {
        Task<IdentityResult> RegisterAsync(string username, string password);
        Task<string> LoginAsync(string username, string password);

    }
}
