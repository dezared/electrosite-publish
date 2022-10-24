using elitstroy;
using elitstroy.Services;
using test_react_app.Model;

namespace test_react_app.Services
{
    public interface IImageRepository : IEntityBaseRepository<Image> { }

    public class ImageRepository : EntityBaseRepository<Image>, IImageRepository
    {
        public ImageRepository(ApplicationContext context) : base(context) { }
    }
}
