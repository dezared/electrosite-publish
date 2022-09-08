﻿// <auto-generated />
using System.Collections.Generic;
using elitstroy;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace elitstroy.Migrations
{
    [DbContext(typeof(ApplicationContext))]
    partial class ApplicationContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.7")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("elitstroy.Model.Project", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("text");

                    b.Property<string>("FacadeInfo")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("FoundamentInfo")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("MainImageUrl")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("Meter")
                        .HasColumnType("integer");

                    b.Property<int>("Money")
                        .HasColumnType("integer");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("PeregorodgiInfo")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Perekritie")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("RoofInfo")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("WallsInfo")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("WareSaftyInfo")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("Year")
                        .HasColumnType("integer");

                    b.Property<List<string>>("projectMediasUrls")
                        .IsRequired()
                        .HasColumnType("text[]");

                    b.HasKey("Id");

                    b.ToTable("Projects");
                });

            modelBuilder.Entity("elitstroy.Model.Blogs", b =>
            {
                b.Property<string>("Id")
                    .HasColumnType("text");

                b.Property<string>("Name")
                    .IsRequired()
                    .HasColumnType("text");

                b.Property<string>("MainImageUrl")
                    .IsRequired()
                    .HasColumnType("text");

                b.Property<string>("Text")
                    .HasColumnType("text");

                b.HasKey("Id");

                b.ToTable("Blogs");
            });

            modelBuilder.Entity("elitstroy.Model.User", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("text");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("UserName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("User");
                });
#pragma warning restore 612, 618
        }
    }
}
