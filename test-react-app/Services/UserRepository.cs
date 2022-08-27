using elitstroy.Model;

namespace elitstroy.Services
{
    public interface IProjectRepository : IEntityBaseRepository<Project>
    {
        Project GetProject(string id);
        List<Project> GetAllProject();
    }

    public class ProjectRepository : EntityBaseRepository<Project>, IProjectRepository
    {
        public ProjectRepository(ApplicationContext context) : base(context) { }

        public Project GetProject(string id)
        {
            var entity = _context.Projects.Where(m => m.Id == id).FirstOrDefault();
            return entity;
        }


        public List<Project> GetAllProject()
        {
            var allEntity = _context.Projects.ToList();
            return allEntity;
        }
    }
}
