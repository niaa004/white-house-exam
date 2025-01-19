using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace TrumpVerseAPI.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "TrumpStaffs",
                columns: table => new
                {
                    ID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    FirstName = table.Column<string>(type: "TEXT", nullable: true),
                    LastName = table.Column<string>(type: "TEXT", nullable: true),
                    Gender = table.Column<string>(type: "TEXT", nullable: true),
                    Role = table.Column<string>(type: "TEXT", nullable: true),
                    Email = table.Column<string>(type: "TEXT", nullable: true),
                    PhoneNumber = table.Column<string>(type: "TEXT", nullable: true),
                    DateOfHire = table.Column<DateTime>(type: "TEXT", nullable: false),
                    IsActive = table.Column<bool>(type: "INTEGER", nullable: false),
                    ProfilePicture = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TrumpStaffs", x => x.ID);
                });

            migrationBuilder.InsertData(
                table: "TrumpStaffs",
                columns: new[] { "ID", "DateOfHire", "Email", "FirstName", "Gender", "IsActive", "LastName", "PhoneNumber", "ProfilePicture", "Role" },
                values: new object[,]
                {
                    { 1, new DateTime(2024, 11, 8, 0, 0, 0, 0, DateTimeKind.Unspecified), "donald@trumpverse.com", "Donald", "Male", true, "Trump", "123456789", "/images/Donald-Trump.jpg", "President" },
                    { 2, new DateTime(2024, 11, 5, 0, 0, 0, 0, DateTimeKind.Unspecified), "JD@trumpverse.com", "JD", "Male", true, "Vance", "123456789", "/images/Vance.jpg", "Vice President" },
                    { 3, new DateTime(2024, 11, 22, 0, 0, 0, 0, DateTimeKind.Unspecified), "Scott@trumpverse.com", "Scott", "Male", true, "Bessent", "123456789", "/images/Scott-Turner.jpg", "SOT Treasury" },
                    { 4, new DateTime(2024, 11, 21, 0, 0, 0, 0, DateTimeKind.Unspecified), "pam@trumpverse.com", "Pam", "Female", true, "Bondi", "123456789", "/images/Bondi.jpg", "Atourney General" },
                    { 5, new DateTime(2024, 11, 23, 0, 0, 0, 0, DateTimeKind.Unspecified), "brooke@trumpverse.com", "Brooke", "Female", true, "Rollins", "123456789", "/images/Brooke-Rollins.jpg", "SOT Agriculture" },
                    { 6, new DateTime(2024, 11, 8, 0, 0, 0, 0, DateTimeKind.Unspecified), "lori@trumpverse.com", "Lori", "Female", true, "DeRemer", "123456789", "/images/Lori-Chaves.jpg", "SOT Labor" },
                    { 7, new DateTime(2024, 11, 22, 0, 0, 0, 0, DateTimeKind.Unspecified), "Scott@trumpverse.com", "Scott", "Male", true, "Turner", "123456789", "/images/Scott-Turner.jpg", "SOT Urban Development" },
                    { 8, new DateTime(2024, 11, 26, 0, 0, 0, 0, DateTimeKind.Unspecified), "chris@trumpverse.com", "Chris", "Male", true, "Wright", "123456789", "/images/Chris-Wright.jpg", "SOT Energy" },
                    { 9, new DateTime(2024, 11, 14, 0, 0, 0, 0, DateTimeKind.Unspecified), "doug@trumpverse.com", "Doug", "Male", true, "Collins", "123456789", "/images/Doug-Collins.jpg", "SOT Veterans Affairs" },
                    { 10, new DateTime(2024, 11, 12, 0, 0, 0, 0, DateTimeKind.Unspecified), "kristi@trumpverse.com", "Kristi", "Female", true, "Noem", "123456789", "/images/Noem.jpg", "Governor" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "TrumpStaffs");
        }
    }
}
