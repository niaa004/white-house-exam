using Microsoft.EntityFrameworkCore;

namespace TrumpVerseAPI.Models
{
    // DbContext for TrumpVerse-appen -> Konsturktør -> DbSet -> intial data
    public class TrumpVerseContext : DbContext 
    {
        public TrumpVerseContext(DbContextOptions<TrumpVerseContext> options):base(options){}

        public DbSet<TrumpStaff> TrumpStaffs {get; set;}

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            // Seed-data for Trumpstaff tabellen
            modelBuilder.Entity<TrumpStaff>().HasData(
                new TrumpStaff
                {
                    ID = 1,
                    FirstName = "Donald",
                    LastName = "Trump",
                    Role = "President",
                    Email = "donald@trumpverse.com",
                    PhoneNumber = "123456789",
                    Gender = "Male",
                    DateOfHire = new DateTime(2024, 11, 8),
                    ProfilePicture = "/images/Donald-Trump.jpg",
                    IsActive = true
                },
                new TrumpStaff
                {
                    ID = 2,
                    FirstName = "JD",
                    LastName = "Vance",
                    Role = "Vice President",
                    Email = "JD@trumpverse.com",
                    PhoneNumber = "123456789",
                    Gender = "Male",
                    DateOfHire = new DateTime(2024, 11, 5),
                    ProfilePicture = "/images/Vance.jpg",
                    IsActive = true
                },
                 new TrumpStaff
                {
                    ID = 3,
                    FirstName = "Scott",
                    LastName = "Bessent",
                    Role = "SOT Treasury",
                    Email = "Scott@trumpverse.com",
                    PhoneNumber = "123456789",
                    Gender = "Male",
                    DateOfHire = new DateTime(2024, 11, 22),
                    ProfilePicture = "/images/Scott-Turner.jpg",
                    IsActive = true
                },
                 new TrumpStaff
                {
                    ID = 4,
                    FirstName = "Pam",
                    LastName = "Bondi",
                    Role = "Atourney General",
                    Email = "pam@trumpverse.com",
                    PhoneNumber = "123456789",
                    Gender = "Female",
                    DateOfHire = new DateTime(2024, 11, 21),
                    ProfilePicture = "/images/Bondi.jpg",
                    IsActive = true
                },
                 new TrumpStaff
                {
                    ID = 5,
                    FirstName = "Brooke",
                    LastName = "Rollins",
                    Role = "SOT Agriculture",
                    Email = "brooke@trumpverse.com",
                    PhoneNumber = "123456789",
                    Gender = "Female",
                    DateOfHire = new DateTime(2024, 11, 23),
                    ProfilePicture = "/images/Brooke-Rollins.jpg",
                    IsActive = true
                },
                 new TrumpStaff
                {
                    ID = 6,
                    FirstName = "Lori",
                    LastName = "DeRemer",
                    Role = "SOT Labor",
                    Email = "lori@trumpverse.com",
                    PhoneNumber = "123456789",
                    Gender = "Female",
                    DateOfHire = new DateTime(2024, 11, 8),
                    ProfilePicture = "/images/Lori-Chaves.jpg",
                    IsActive = true
                },
                 new TrumpStaff
                {
                    ID = 7,
                    FirstName = "Scott",
                    LastName = "Turner",
                    Role = "SOT Urban Development",
                    Email = "Scott@trumpverse.com",
                    PhoneNumber = "123456789",
                    Gender = "Male",
                    DateOfHire = new DateTime(2024, 11, 22),
                    ProfilePicture = "/images/Scott-Turner.jpg",
                    IsActive = true
                },
                 new TrumpStaff
                {
                    ID = 8,
                    FirstName = "Chris",
                    LastName = "Wright",
                    Role = "SOT Energy",
                    Email = "chris@trumpverse.com",
                    PhoneNumber = "123456789",
                    Gender = "Male",
                    DateOfHire = new DateTime(2024, 11, 26),
                    ProfilePicture = "/images/Chris-Wright.jpg",
                    IsActive = true
                },
                 new TrumpStaff
                {
                    ID = 9,
                    FirstName = "Doug",
                    LastName = "Collins",
                    Role = "SOT Veterans Affairs",
                    Email = "doug@trumpverse.com",
                    PhoneNumber = "123456789",
                    Gender = "Male",
                    DateOfHire = new DateTime(2024, 11, 14),
                    ProfilePicture = "/images/Doug-Collins.jpg",
                    IsActive = true
                },
                 new TrumpStaff
                {
                    ID = 10,
                    FirstName = "Kristi",
                    LastName = "Noem",
                    Role = "Governor",
                    Email = "kristi@trumpverse.com",
                    PhoneNumber = "123456789",
                    Gender = "Female",
                    DateOfHire = new DateTime(2024, 11, 12),
                    ProfilePicture = "/images/Noem.jpg",
                    IsActive = true
                });
        }
    }
}