using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace elitstroy.Migrations
{
    public partial class crudProject : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ProjectMedias");

            migrationBuilder.DropColumn(
                name: "MediaBlockId",
                table: "Projects");

            migrationBuilder.AddColumn<List<string>>(
                name: "projectMediasUrls",
                table: "Projects",
                type: "text[]",
                nullable: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "projectMediasUrls",
                table: "Projects");

            migrationBuilder.AddColumn<string>(
                name: "MediaBlockId",
                table: "Projects",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateTable(
                name: "ProjectMedias",
                columns: table => new
                {
                    Id = table.Column<string>(type: "text", nullable: false),
                    Type = table.Column<string>(type: "text", nullable: false),
                    UrlData = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProjectMedias", x => x.Id);
                });
        }
    }
}
