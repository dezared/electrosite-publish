using elitstroy.Model;

namespace elitstroy.Services
{
    public interface IUserRepository : IEntityBaseRepository<User>
    {
        bool isEmailUniq(string email);
        bool IsUsernameUniq(string username);
    }

    public class UserRepository : EntityBaseRepository<User>, IUserRepository
    {
        public UserRepository(ApplicationContext context) : base(context) { }

        public bool isEmailUniq(string email)
        {
            var user = this.GetSingle(u => u.Email == email);
            return user == null;
        }

        public bool IsUsernameUniq(string username)
        {
            var user = this.GetSingle(u => u.UserName == username);
            return user == null;
        }
    }
}
