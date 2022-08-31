using elitstroy.Model;
using elitstroy.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace elitstroy.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApplicationController : ControllerBase
    {
        IAuthService authService;
        IUserRepository userRepository;
        IProjectRepository projectRepository;

        public ApplicationController(IAuthService authService, IUserRepository userRepository, IProjectRepository projectRepository)
        {
            this.authService = authService;
            this.userRepository = userRepository;
            this.projectRepository = projectRepository;
        }

        [HttpPost("login")]
        public ActionResult<AuthData> Post([FromBody] LoginViewModel model)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            var user = userRepository.GetSingle(u => u.Email == model.Email);

            if (user == null)
            {
                return BadRequest(new { email = "no user with this email" });
            }

            var passwordValid = authService.VerifyPassword(model.Password, user.Password);
            if (!passwordValid)
            {
                return BadRequest(new { password = "invalid password" });
            }

            return authService.GetAuthData(user.Id);
        }

        [HttpGet("admin/allProjects")]
        public ActionResult<List<Project>> GetProjects()
        {
            var allProjects = projectRepository.GetAllProject();
            var countProjects = projectRepository.Count();

            HttpContext.Response.Headers.Add("Access-Control-Expose-Headers", "X-Total-Count");
            HttpContext.Response.Headers.Add("X-Total-Count", countProjects.ToString());

            return allProjects.ToList();
        }


        [HttpPost("admin/allProjects/")]
        public ActionResult CreateProjects([FromBody] ActionCreateProjectModel model)
        {
            var id = Guid.NewGuid().ToString();

            var mainImage = model.MyFiles.Last();
            model.MyFiles.Remove(mainImage);

            var project = new Project()
            {
                Id = id,
                FacadeInfo = model.FacadeInfo,
                FoundamentInfo = model.FoundamentInfo,
                MainImageUrl = mainImage,
                Meter = model.Meter,
                Money = model.Money,
                Name = model.Name,
                PeregorodgiInfo = model.PeregorodgiInfo,
                Perekritie = model.Perekritie,
                RoofInfo = model.RoofInfo,
                WallsInfo = model.WallsInfo,
                WareSaftyInfo = model.WareSaftyInfo,
                Year = model.Year,
                projectMediasUrls = model.MyFiles
            };

            projectRepository.Add(project);
            projectRepository.Commit();

            return Ok(project.Id);
        }


        [HttpGet("admin/allProjects/{id}")]
        public ActionResult<Project> GetProjects(string id)
        {
            var project = projectRepository.GetProject(id);

            return Ok(project);
        }

        [HttpDelete("admin/allProjects/{id}")]
        public ActionResult DeleteProjects(string id)
        {
            var project = projectRepository.GetProject(id);
            projectRepository.Delete(project);
            projectRepository.Commit();

            return Ok();
        }


        [HttpPut("admin/allProjects/{id}")]
        public ActionResult<Project> PutProject([FromBody] ActionProjectModel model)
        {
            var project = projectRepository.GetProject(model.Id);

            var mainImage = model.MyFiles.Last();
            model.MyFiles.Remove(mainImage);

            project.Name = model.Name;
            project.Money = model.Money;
            project.Meter = model.Meter;
            project.Year = model.Year;
            project.FoundamentInfo = model.FoundamentInfo;
            project.WallsInfo = model.WallsInfo;
            project.Perekritie = model.Perekritie;
            project.RoofInfo = model.RoofInfo;
            project.WareSaftyInfo = model.WareSaftyInfo;
            project.FacadeInfo = model.FacadeInfo;
            project.PeregorodgiInfo = model.PeregorodgiInfo;
            project.MainImageUrl = mainImage;
            project.projectMediasUrls = model.MyFiles;

            projectRepository.Update(project);
            projectRepository.Commit();

            return Ok(project.Id);
        }

        [HttpGet("admin/allUsers")]
        public ActionResult<List<User>> Get()
        {
            var allUsers = userRepository.GetAll();
            var userCount = userRepository.Count();

            HttpContext.Response.Headers.Add("Access-Control-Expose-Headers", "X-Total-Count");
            HttpContext.Response.Headers.Add("X-Total-Count", userCount.ToString());
            return allUsers.ToList();
        }

        [HttpPost("register")]
        public ActionResult<AuthData> Post([FromBody] RegisterViewModel model)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            var emailUniq = userRepository.isEmailUniq(model.Email);
            if (!emailUniq) return BadRequest(new { email = "user with this email already exists" });
            var usernameUniq = userRepository.IsUsernameUniq(model.UserName);
            if (!usernameUniq) return BadRequest(new { username = "user with this email already exists" });

            var id = Guid.NewGuid().ToString();
            var user = new User
            {
                Id = id,
                UserName = model.UserName,
                Email = model.Email,
                Password = authService.HashPassword(model.Password)
            };
            userRepository.Add(user);
            userRepository.Commit();

            return authService.GetAuthData(id);
        }
    }
}
