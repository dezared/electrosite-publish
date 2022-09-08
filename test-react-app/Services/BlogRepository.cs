using elitstroy;
using elitstroy.Services;
using test_react_app.Model;

namespace test_react_app.Services
{
    public interface IBlogRepository : IEntityBaseRepository<Blog> { }

    public class BlogRepository : EntityBaseRepository<Blog>, IBlogRepository
    {
        public BlogRepository(ApplicationContext context) : base(context) { }
    }
}
