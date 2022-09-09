using elitstroy.Model;
using elitstroy.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System.Net;
using System.Net.Mail;
using System.Security.Claims;
using test_react_app.Model;
using test_react_app.Services;

namespace elitstroy.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApplicationController : ControllerBase
    {
        IAuthService authService;
        IUserRepository userRepository;
        IProjectRepository projectRepository;
        IBlogRepository blogRepository;
        IWebHostEnvironment environment;

        public ApplicationController(IAuthService authService, IUserRepository userRepository, IProjectRepository projectRepository,
            IBlogRepository blogRepository, IWebHostEnvironment environment)
        {
            this.authService = authService;
            this.userRepository = userRepository;
            this.projectRepository = projectRepository;
            this.blogRepository = blogRepository;
            this.environment = environment;
        }

        private static Random random = new Random();

        public static string RandomString(int length)
        {
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            return new string(Enumerable.Repeat(chars, length)
                .Select(s => s[random.Next(s.Length)]).ToArray());
        }

        [HttpPost("login")]
        public ActionResult<AuthData> Post([FromBody] LoginViewModel model)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            var user = userRepository.GetSingle(u => u.Email == model.Email);

            if (user == null)
            {
                return BadRequest(new { email = "Нет пользователя с таким емейлом" });
            }

            var passwordValid = authService.VerifyPassword(model.Password, user.Password);
            if (!passwordValid)
            {
                return BadRequest(new { password = "Неверный пароль" });
            }

            return authService.GetAuthData(user.Id);
        }

        // ---

        [HttpGet("admin/allBlogs")]
        public ActionResult<List<Blog>> GetBlogs()
        {
            var allBlogs = blogRepository.GetAll();
            var countBlogs = blogRepository.Count();

            HttpContext.Response.Headers.Add("Access-Control-Expose-Headers", "X-Total-Count");
            HttpContext.Response.Headers.Add("X-Total-Count", countBlogs.ToString());

            return allBlogs.ToList();
        }


        [HttpPost("admin/allBlogs/")]
        public ActionResult CreateBlogs([FromBody] ActionCreateBlogModel model)
        {
            if (model.MyFiles.FirstOrDefault() == null)
                return BadRequest();

            var id = Guid.NewGuid().ToString();

            var name = RandomString(12) + ".png";
            string filePath = Path.Combine(environment.WebRootPath, name);
            System.IO.File.WriteAllBytes(filePath, Convert.FromBase64String(model.MyFiles.First().Split(',')[1]));

            var blog = new Blog()
            {
                Id = id,
                MainImageUrl = "https://api.elitestroyservice.ru/" + name,
                Name = model.Name,
                Text = model.Text
            };

            blogRepository.Add(blog);
            blogRepository.Commit();

            return Ok(blog.Id);
        }


        [HttpGet("admin/allBlogs/{id}")]
        public ActionResult<Blog> GetBlogs(string id)
        {
            var blog = blogRepository.GetSingle(id);

            return Ok(blog);
        }

        [HttpDelete("admin/allBlogs/{id}")]
        public ActionResult DeleteBlogs(string id)
        {
            var blog = blogRepository.GetSingle(id);
            blogRepository.Delete(blog);
            blogRepository.Commit();

            return Ok(id);
        }


        [HttpPut("admin/allBlogs/{id}")]
        public ActionResult<Blog> PutBlog([FromBody] ActionBlogModel model)
        {
            if (model.MyFiles.FirstOrDefault() == null)
                return BadRequest();

            var blog = blogRepository.GetSingle(model.Id);

            var name = RandomString(12) + ".png";
            string filePath = Path.Combine(environment.WebRootPath, name);
            System.IO.File.WriteAllBytes(filePath, Convert.FromBase64String(model.MyFiles.First().Split(',')[1]));


            blog.Text = model.Text;
            blog.Name = model.Name;
            blog.MainImageUrl = "https://api.elitestroyservice.ru/" + name;

            blogRepository.Update(blog);
            blogRepository.Commit();

            return Ok(blog);
        }
        
        // ---

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
            if(model.MyFiles.Count() < 2)
                return BadRequest();

            var id = Guid.NewGuid().ToString();

            var imageList = new List<string>();

            foreach (var img in model.MyFiles)
            {
                var name = RandomString(12) + ".png";
                string filePath = Path.Combine(environment.WebRootPath, name);
                System.IO.File.WriteAllBytes(filePath, Convert.FromBase64String(img.Split(',')[1]));

                imageList.Add(name);
            }

            var mainImage = imageList.Last();
            imageList.Remove(mainImage);


            var project = new Project()
            {
                Id = id,
                FacadeInfo = model.FacadeInfo,
                FoundamentInfo = model.FoundamentInfo,
                MainImageUrl = "https://api.elitestroyservice.ru/" + mainImage,
                Meter = model.Meter,
                Money = model.Money,
                Name = model.Name,
                PeregorodgiInfo = model.PeregorodgiInfo,
                Perekritie = model.Perekritie,
                RoofInfo = model.RoofInfo,
                WallsInfo = model.WallsInfo,
                WareSaftyInfo = model.WareSaftyInfo,
                Year = model.Year,
                projectMediasUrls = imageList.Select(m => "https://api.elitestroyservice.ru/" + m).ToList()
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

            return Ok(id);
        }


        [HttpPut("admin/allProjects/{id}")]
        public ActionResult<Project> PutProject([FromBody] ActionProjectModel model)
        {
            if (model.MyFiles.Count() < 2)
                return BadRequest();

            var project = projectRepository.GetProject(model.Id);

            var imageList = new List<string>();

            foreach (var img in model.MyFiles)
            {
                string filePath = Path.Combine(environment.WebRootPath, RandomString(12) + ".png");
                System.IO.File.WriteAllBytes(filePath, Convert.FromBase64String(img.Split(',')[1]));

                imageList.Add(filePath);
            }

            var mainImage = imageList.Last();
            imageList.Remove(mainImage);

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
            project.projectMediasUrls = imageList;

            projectRepository.Update(project);
            projectRepository.Commit();

            return Ok(project);
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

        [HttpPost("sendMailContact/")]
        public ActionResult SendMail([FromBody] MailSendModel model)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            var smtpClient = new SmtpClient("smtp-relay.sendinblue.com")
            {
                Port = 587,
                Credentials = new NetworkCredential("dezare3232@gmail.com", "0Txf1EQJICKNds8W"),
                EnableSsl = true,
            };

            var mailMessage = new MailMessage
            {
                From = new MailAddress("server@elitestroyservice.ru"),
                Subject = "Новая заявка",
                Body = "Email: " + model.Email + " | Phone: " + model.Number + " | Text: " + model.Message
            };

            mailMessage.To.Add("ets@elitestroyservice.ru");

            smtpClient.Send(mailMessage);

            return Ok();
        }
    }
}
