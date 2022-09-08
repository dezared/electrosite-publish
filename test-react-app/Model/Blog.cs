using elitstroy.Model;

namespace test_react_app.Model
{
    public class Blog : IEntityBase
    {
        public string Name { get; set; }
        public string MainImageUrl { get; set; }
        public string Text { get; set; }
    }
}