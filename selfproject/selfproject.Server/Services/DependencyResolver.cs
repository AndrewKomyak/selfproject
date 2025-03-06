using selfproject.Server.Database;
using Microsoft.EntityFrameworkCore;

namespace selfproject.Server.Services
{
    public static class DependencyResolver
    {
        
        public static void RegisterServices(IServiceCollection services)
        {
            services.AddScoped<IPostsService, PostsService>();
        }

        public static void RegisterDatabase(IServiceCollection services)
        {
            services.AddDbContext<SelfDbContext>(options =>
            {
                IConfigurationRoot configuration = new ConfigurationBuilder()
                    .SetBasePath(AppDomain.CurrentDomain.BaseDirectory)
                    .AddJsonFile("appsettings.json")
                    .Build();
                options.UseSqlServer(configuration.GetConnectionString("DefaultConnection"));
            });

            var registeredDbContext = services.BuildServiceProvider().GetService<SelfDbContext>();
            registeredDbContext.Database.Migrate();
        }
    }
}
