using elitstroy;
using elitstroy.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.AspNetCore.SpaServices.Extensions;
using elitstroy.Model;
using test_react_app.Services;

var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


builder.Services.AddControllers();
builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddScoped<IProjectRepository, ProjectRepository>();
builder.Services.AddScoped<IBlogRepository, BlogRepository>();
builder.Services.AddScoped<IImageRepository, ImageRepository>();
builder.Services.AddCors(options =>
{
    options.AddPolicy(MyAllowSpecificOrigins,
    builder =>
    {
        builder.SetIsOriginAllowed(isOriginAllowed: _ => true).AllowAnyHeader().AllowAnyMethod().AllowCredentials();
    });
});
builder.Services.AddEntityFrameworkNpgsql()
                .AddDbContext<ApplicationContext>(options =>
                    options.UseNpgsql(
                        "Server=localhost;Database=mydb;Username=myuser;Password=mypass;Port=5432"
                    )
                );

var serviceProvider = builder.Services.BuildServiceProvider();
var context = serviceProvider.GetRequiredService<ApplicationContext>();
if (context.Database.GetPendingMigrations().Any())
{
    context.Database.Migrate();

    var countUsers = context.User.Count();

    if(countUsers == 0)
    {
        var user = new User()
        {
            Email = "admin@elitstroy.ru",
            Password = "Kdkakl3,1madada",
            UserName = "Admin",
            Id = Guid.NewGuid().ToString()
        };

        context.User.Add(user);
        context.SaveChanges();
    }
}

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options =>
                {
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuer = false,
                        ValidateAudience = false,
                        ValidateLifetime = true,
                        ValidateIssuerSigningKey = true,

                        IssuerSigningKey = new SymmetricSecurityKey(
                            Encoding.UTF8.GetBytes(Environment.GetEnvironmentVariable("JWTSecretKey"))
                        )
                    };
                });

builder.Services.AddSingleton<IAuthService>(
                new AuthService(
                    "bRhYJRlZvBj2vW4MrV5HVdPgIE6VMtCFB0kTtJ1m",
                    Convert.ToInt32(2592000)
                )
            );

var app = builder.Build();

// Configure the HTTP request pipeline.
//if (app.Environment.IsDevelopment())
//{
    app.UseSwagger();
    app.UseSwaggerUI();
//}
app.UseHsts();

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.UseForwardedHeaders(new ForwardedHeadersOptions
{
    ForwardedHeaders = ForwardedHeaders.XForwardedFor |
                   ForwardedHeaders.XForwardedProto
});

app.UseCors(MyAllowSpecificOrigins);

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.Run();
