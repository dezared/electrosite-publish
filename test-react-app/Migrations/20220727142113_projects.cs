using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace elitstroy.Migrations
{
    public partial class projects : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ProjectMedias",
                columns: table => new
                {
                    Id = table.Column<string>(type: "text", nullable: false),
                    UrlData = table.Column<string>(type: "text", nullable: false),
                    Type = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProjectMedias", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Projects",
                columns: table => new
                {
                    Id = table.Column<string>(type: "text", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    MainImageUrl = table.Column<string>(type: "text", nullable: false),
                    MediaBlockId = table.Column<string>(type: "text", nullable: false),
                    Money = table.Column<int>(type: "integer", nullable: false),
                    Meter = table.Column<int>(type: "integer", nullable: false),
                    Year = table.Column<int>(type: "integer", nullable: false),
                    FoundamentInfo = table.Column<string>(type: "text", nullable: false),
                    WallsInfo = table.Column<string>(type: "text", nullable: false),
                    Perekritie = table.Column<string>(type: "text", nullable: false),
                    RoofInfo = table.Column<string>(type: "text", nullable: false),
                    WareSaftyInfo = table.Column<string>(type: "text", nullable: false),
                    FacadeInfo = table.Column<string>(type: "text", nullable: false),
                    PeregorodgiInfo = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Projects", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ProjectMedias");

            migrationBuilder.DropTable(
                name: "Projects");
        }
    }
}
